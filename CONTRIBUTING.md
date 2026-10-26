# Contributing

Thanks for helping! Bug reports, card ideas, translations and pull requests are all welcome, in English or French.

## Ways to help

- **Report a bug or suggest a card or style**: open an [issue](https://github.com/skyrotter/ha-appliance-electromenager-cards/issues/new/choose). For a new illustration, photos or product links help a lot.
- **Translate**: add or improve a language in `src/i18n/`. English is the reference; missing keys fall back to English. See [Development and translations](docs/development.md).
- **Share your dashboard**: a screenshot of the cards in your own Home Assistant is the best proof that they work.

## Pull requests

1. Fork the repository and create a branch from `main`.
2. Edit `src/`, never `dist/` by hand, then rebuild (Node.js, no dependencies):

   ```sh
   node build.js           # writes dist/
   node build.js --check   # fails if dist/ is out of date (run by CI)
   ```

3. Commit `src/` and the rebuilt `dist/` together. On a merge conflict in `dist/`, resolve `src/` and re-run `node build.js`.
4. Document new options in `docs/` and add their labels to every `src/i18n/*.json` (English first, other languages fall back to it).
5. Try your change in the [online demo](https://skyrotter.github.io/ha-appliance-electromenager-cards/docs/demo.html) or in a test page. Please describe what you checked in the pull request.
6. Do not change `src/core/version.js`: the maintainer bumps it when preparing a release.

Small, focused pull requests are reviewed faster. Opening a draft early is welcome.
