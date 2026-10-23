/* Runs in the head, before the page draws. Turns motion on unless the
   visitor has asked their device to reduce motion. If the motion script
   has not started within 2.5 seconds, everything is shown as normal. */
(function () {
  var root = document.documentElement;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.classList.add('motion');
  setTimeout(function () {
    if (!root.classList.contains('motion-ready')) root.classList.remove('motion');
  }, 2500);
})();
