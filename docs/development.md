## Development and translations

`dist/ha-appliance-electromenager-cards.js` is generated: edit `src/` instead, then rebuild (Node.js, no dependencies):

```sh
node build.js           # writes dist/
node build.js --check   # fails if dist/ is out of date (run by CI)
```

HACS installs a single file, so `build.js` concatenates the files of `src/` in the order it lists (like `<script>` tags in a page):

```
src/
  header.js            licence banner
  core/                the 28 core cards, sharing one scope (order matters)
    version.js  i18n.js  illustrations.js  definitions.js  helpers.js
    base.js  editor.js  style.js  register.js
    svg/<kind>.js      one illustration per kind: SVG.washer = () => `…`
    style/*.css        card styles, concatenated into STYLE (order listed in build.js)
  cards/*.js           self-contained cards (aquarium, linky, battery, …), one IIFE each
  i18n/<lang>.json     texts, one file per language
```

- New core card: add its `DEF` entry (`core/definitions.js`), `core/svg/<kind>.js` (picked up automatically), a CSS file listed in `CSS_FILES` and its strings. New self-contained card: add `cards/<name>.js` and list it in `CARD_FILES`. The build warns about any `src/` file it does not list.
- Texts: one file per language in `src/i18n/` (`en.json`, `fr.json`, `de.json`, `nb.json`, `nl.json`, `ro.json`). Each file has a `common` section for the 28 core cards and one section per extra card (`aquarium`, `linky`, …). The build inlines them where the source says `/*@i18n <section>*/{}`.
- English is the reference: a key missing in another language falls back to English, and the build prints a warning.
- To add a language, copy `en.json` to e.g. `it.json`, translate it and rebuild: the cards follow the Home Assistant language, and the extra cards list it in their `language` option.
- Commit `src/` and the rebuilt `dist/` together. On a merge conflict in `dist/`, resolve `src/` and re-run `node build.js`.

---
