/* Cookie choice and Google Analytics. Analytics loads only after the visitor accepts. */
(function () {
  var GA_ID = 'G-Z2EYYR0KBP';
  var KEY = 'delos-cookies';
  var banner;

  function getChoice() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setChoice(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  function loadAnalytics() {
    if (window.gtag) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function clearAnalyticsCookies() {
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (name.indexOf('_ga') === 0) {
        ['', '; domain=.delosrecruitment.co.uk', '; domain=delosrecruitment.co.uk'].forEach(function (d) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + d;
        });
      }
    });
  }

  function hide() { if (banner) banner.hidden = true; }

  function show() {
    if (!banner) {
      banner = document.createElement('div');
      banner.className = 'cookie-banner';
      banner.setAttribute('role', 'region');
      banner.setAttribute('aria-label', 'Cookie choice');
      banner.innerHTML =
        '<p>We\'d like to use Google Analytics cookies to see how people use this site, so we can improve it. Nothing is set unless you accept. <a href="/privacy">Privacy notice</a></p>' +
        '<div class="cookie-actions">' +
        '<button type="button" class="btn light" data-choice="granted">Accept</button>' +
        '<button type="button" class="btn cookie-decline" data-choice="denied">Decline</button>' +
        '</div>';
      banner.addEventListener('click', function (e) {
        var choice = e.target.getAttribute('data-choice');
        if (!choice) return;
        setChoice(choice);
        if (choice === 'granted') { loadAnalytics(); } else { clearAnalyticsCookies(); if (window.gtag) location.reload(); }
        hide();
      });
      document.body.appendChild(banner);
    }
    banner.hidden = false;
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest && e.target.closest('[data-cookie-settings]');
    if (!link) return;
    e.preventDefault();
    show();
  });

  var choice = getChoice();
  if (choice === 'granted') loadAnalytics();
  else if (choice !== 'denied') show();
})();
