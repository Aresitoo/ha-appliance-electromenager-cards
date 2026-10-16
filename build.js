#!/usr/bin/env node
/*
 * Builds dist/ha-appliance-electromenager-cards.js from src/:
 * each `/*@i18n <namespace>*\/{}` placeholder is replaced by that namespace
 * taken from every src/i18n/<lang>.json, giving { en: {...}, fr: {...}, ... }.
 *
 *   node build.js           write dist/
 *   node build.js --check   fail if dist/ is not up to date (used by CI)
 *
 * No dependencies. English (en.json) is the reference: missing keys in other
 * languages fall back to English at runtime and are reported as warnings.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const NAME = "ha-appliance-electromenager-cards.js";
const SRC = path.join(ROOT, "src", NAME);
const I18N_DIR = path.join(ROOT, "src", "i18n");
const DIST = path.join(ROOT, "dist", NAME);
const PLACEHOLDER = /^([ \t]*)(.*?)\/\*@i18n (\w+)\*\/\{\}/gm;

const read = (p) => fs.readFileSync(p, "utf8").replace(/\r\n/g, "\n");

const langs = fs.readdirSync(I18N_DIR)
  .filter((f) => f.endsWith(".json"))
  .map((f) => f.slice(0, -5))
  .sort((a, b) => (a === "en" ? -1 : b === "en" ? 1 : a.localeCompare(b)));
if (!langs.includes("en")) throw new Error("src/i18n/en.json is required (reference language)");
const i18n = Object.fromEntries(langs.map((l) => [l, JSON.parse(read(path.join(I18N_DIR, `${l}.json`)))]));

let warnings = 0;
const warn = (msg) => { warnings++; console.warn(`warning: ${msg}`); };
for (const l of langs.filter((l) => l !== "en")) {
  for (const [ns, ref] of Object.entries(i18n.en)) {
    const strings = i18n[l][ns] || {};
    const missing = Object.keys(ref).filter((k) => !(k in strings));
    const extra = Object.keys(strings).filter((k) => !(k in ref));
    if (missing.length) warn(`${l}.json ${ns}: missing ${missing.join(", ")}`);
    if (extra.length) warn(`${l}.json ${ns}: not in en.json ${extra.join(", ")}`);
  }
  for (const ns of Object.keys(i18n[l]).filter((ns) => !(ns in i18n.en))) warn(`${l}.json: namespace "${ns}" not in en.json`);
}

const used = new Set();
const out = read(SRC).replace(PLACEHOLDER, (_, indent, before, ns) => {
  if (!i18n.en[ns]) throw new Error(`namespace "${ns}" missing from src/i18n/en.json`);
  used.add(ns);
  const table = Object.fromEntries(langs.filter((l) => i18n[l][ns]).map((l) => [l, i18n[l][ns]]));
  return indent + before + JSON.stringify(table, null, 2).replace(/\n/g, `\n${indent}`);
});
for (const ns of Object.keys(i18n.en).filter((ns) => !used.has(ns))) warn(`en.json: namespace "${ns}" is not used by the source`);

if (process.argv.includes("--check")) {
  const current = fs.existsSync(DIST) ? read(DIST) : "";
  if (current !== out) {
    console.error(`dist/${NAME} is out of date: run \`node build.js\` and commit the result.`);
    process.exit(1);
  }
  console.log(`dist/${NAME} is up to date (${langs.join(", ")}).`);
} else {
  fs.writeFileSync(DIST, out);
  console.log(`built dist/${NAME} (${langs.join(", ")}${warnings ? `, ${warnings} warning(s)` : ""}).`);
}
