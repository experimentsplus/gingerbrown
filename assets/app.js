/*
Purpose: Load i18n resources and render the footer text. Enforces that user-visible
strings come exclusively from resource files. If a required key is missing, it throws.
*/
(function () {
  'use strict';

  function ensureI18nLoaded() {
    if (!('APP_I18N' in window) || !window.APP_I18N) {
      throw new Error('Missing i18n resource: window.APP_I18N is not defined');
    }
  }

  function getI18nOrThrow(path) {
    const segments = path.split('.');
    let cursor = window.APP_I18N;
    for (const segment of segments) {
      if (cursor && Object.prototype.hasOwnProperty.call(cursor, segment)) {
        cursor = cursor[segment];
      } else {
        throw new Error('Missing i18n key: ' + path);
      }
    }
    return cursor;
  }

  try {
    ensureI18nLoaded();

    const template = getI18nOrThrow('copyright.template');
    const year = getI18nOrThrow('copyright.year');
    const holder = getI18nOrThrow('copyright.holder');

    const rendered = template
      .replace('{year}', String(year))
      .replace('{holder}', String(holder));

    const target = document.getElementById('copyrightText');
    if (!target) {
      throw new Error('DOM element #copyrightText not found');
    }
    target.textContent = rendered;
  } catch (error) {
    // Log then rethrow to halt execution without falling back to literal strings.
    console.error(error);
    throw error;
  }
})();


