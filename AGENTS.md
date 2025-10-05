# Repository Guidelines

## Project Structure & Module Organization
The site ships as a static bundle. `index.html` provides the markup, loads Font Awesome from CDN, and references everything under `assets/`. JavaScript lives in `assets/app.js`, which is responsible for pulling copy from the locale bundle and injecting it into the footer. Language resources reside in `assets/i18n/` (e.g., `en.js`) and must expose `window.APP_I18N`. Styling is concentrated in `assets/styles.css`, using CSS custom properties for theming. Icons generated from `assets/experimentsplus002.png` live in `assets/icons/`. The GitHub Pages workflow in `.github/workflows/static.yml` deploys the entire tree, so keep new assets within this structure.

## Build, Test, and Development Commands
The project has no build step; edit the files in place. For a local preview, run `python3 -m http.server 8080` from the repository root and visit `http://localhost:8080/`. If you prefer Node tooling, `npx serve .` accomplishes the same goal. Refresh the browser after changes and watch the console for runtime errors.

## Coding Style & Naming Conventions
Stick to two-space indentation across HTML, CSS, and JS. JavaScript modules follow an IIFE + `'use strict'` pattern and rely on explicit error handling—continue throwing when required resources are missing. Favor descriptive camelCase identifiers in JS (`ensureI18nLoaded`) and kebab-case for CSS classes (`icon-link`). Put localized strings in `assets/i18n/<locale>.js` files, using double quotes and grouping keys by feature. Do not hard-code user-visible text in HTML or JS.

## Testing Guidelines
There is no automated test suite. Validate changes by loading the site locally, confirming the footer renders correctly, and that the console stays free of errors. When altering i18n files, temporarily break a key to ensure the error surfaces, then revert. Capture before/after screenshots for layout updates. If you add tooling tests later, document the command here.

## Commit & Pull Request Guidelines
Commits follow short, imperative messages (`Create LICENSE`, `Initial page design`). Keep each change focused and mention the relevant area if helpful. Pull requests should link the motivating issue (if any), summarize the user-facing impact, and attach screenshots or GIFs when modifying visuals. Note any manual verification steps performed so reviewers can replicate them.

## Deployment & Environment Notes
GitHub Actions deploys the `main` branch to Pages automatically via `.github/workflows/static.yml`. Ensure workflow files stay valid YAML. Secrets are not required; publishing relies on GitHub-provided tokens. After merging, confirm the production site loads and that the localized footer text renders as expected.
