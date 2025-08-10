/*
Purpose: English resource bundle. Carries all user-visible strings.
Behavior: Exposes APP_I18N on the window scope for simple static hosting without fetch.
Design intent: Keep strings external for i18n and to avoid hard-coding in markup or code.
*/
(function () {
  'use strict';
  window.APP_I18N = {
    copyright: {
      holder: "Takayuki Okazaki",
      year: "2025",
      template: "© {year} {holder}"
    }
  };
})();


