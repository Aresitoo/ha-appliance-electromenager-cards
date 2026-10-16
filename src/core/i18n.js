/* ------------------------------------------------------------------ */
/* i18n — strings live in src/i18n/<lang>.json, inlined by build.js    */
/* ------------------------------------------------------------------ */
const STRINGS = /*@i18n common*/{};
const lang = (hass) => {
  const l = ((hass && (hass.locale?.language || hass.language)) || document.documentElement.lang || "en").toLowerCase().slice(0, 2);
  return STRINGS[l] ? l : "en";
};
const tr = (hass, key) => STRINGS[lang(hass)][key] ?? STRINGS.en[key] ?? key;
