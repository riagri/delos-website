// Ariadne's thread: open "The labyrinth" under the photo and a ball of thread
// rolls out beneath the story, unwinding as it goes.
(function () {
  var story = document.querySelector('.hero .lore');
  if (!story) return;
  var summary = story.querySelector('summary'), text = story.querySelector('p');
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ns = 'http://www.w3.org/2000/svg';

  function el(name, attrs) {
    var e = document.createElementNS(ns, name);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  // Same random loops every time, so the ball always looks the same
  function seeded(s) {
    return function () {
      s = (s + 0x6D2B79F5) | 0;
      var t = Math.imul(s ^ (s >>> 15), 1 | s);
      t ^= t + Math.imul(t ^ (t >>> 7), 61 | t);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function makeBall() {
    var ball = el('g', { 'class': 'yarn' }), spin = el('g'), rand = seeded(29);
    ball.appendChild(el('circle', { r: 12.6 }));
    for (var k = 0; k < 16; k++) {
      var ang = k * 23 + rand() * 18, rx = 11.6 + rand() * 1.4, ry = 1.8 + rand() * 10.5;
      var a = ang * Math.PI / 180, ox = (rand() - .5) * 1.4, oy = (rand() - .5) * 1.4;
      var x1 = (ox - rx * Math.cos(a)).toFixed(2), y1 = (oy - rx * Math.sin(a)).toFixed(2);
      var x2 = (ox + rx * Math.cos(a)).toFixed(2), y2 = (oy + rx * Math.sin(a)).toFixed(2);
      var arc = 'A' + rx.toFixed(2) + ' ' + ry.toFixed(2) + ' ' + ang.toFixed(1) + ' 1 1 ';
      spin.appendChild(el('path', { d: 'M' + x1 + ' ' + y1 + ' ' + arc + x2 + ' ' + y2 + ' ' + arc + x1 + ' ' + y1, opacity: (.45 + rand() * .55).toFixed(2) }));
    }
    ball.appendChild(spin);
    return { g: ball, spin: spin };
  }

  // Marks where the ball sets off, just before the word "The labyrinth"
  var start = el('svg', { 'class': 'clew', viewBox: '-16 -16 32 32', 'aria-hidden': 'true' });
  summary.insertBefore(start, summary.firstChild);

  var run = null;
  function unwind(animate) {
    if (run) { run.remove(); run = null; }
    var box = story.getBoundingClientRect(), r = start.getBoundingClientRect(), s = text.getBoundingClientRect();
    var x0 = r.left + r.width / 2 - box.left, y0 = r.top + r.height / 2 - box.top;
    var yb = s.bottom - box.top + 10, xe = s.left - box.left + 10, sx = x0 - 70;
    // Drops down to the left, then lies slack under the story with a soft droop
    var drop = 'M' + x0 + ' ' + y0 + ' C' + (x0 - 6) + ' ' + (y0 + 22) + ' ' + (x0 - 26) + ' ' + (yb - 2) + ' ' + sx + ' ' + yb;
    var d = drop, span = sx - xe, sags = [5, -3, 4];
    for (var i = 1; i <= 3; i++) {
      var px = sx - span * (i - 1) / 3, nx = sx - span * i / 3;
      d += ' C' + (px - span / 3 * .35) + ' ' + (yb + sags[i - 1]) + ' ' + (nx + span / 3 * .35) + ' ' + (yb + sags[i - 1]) + ' ' + nx + ' ' + yb;
    }
    run = el('svg', { 'class': 'guide', 'aria-hidden': 'true', width: box.width, height: yb + 20 });
    var thread = el('path', { d: d }), ball = makeBall(), probe = el('path', { d: drop });
    run.appendChild(thread); run.appendChild(probe); run.appendChild(ball.g); story.appendChild(run);
    var len = thread.getTotalLength(), hit = probe.getTotalLength() / len;
    probe.remove();

    // A small bounce where the ball first lands, and a last nudge as it stops
    function hop(t) {
      var u = (t - hit) / .22;
      if (u > 0 && u < 1) return -7 * Math.abs(Math.sin(u * Math.PI * 2)) * (1 - u) * (1 - u);
      var v = (t - .94) / .06;
      if (v > 0 && v < 1) return -2.5 * Math.sin(v * Math.PI);
      return 0;
    }
    function place(t) {
      var p = thread.getPointAtLength(len * t);
      thread.style.strokeDasharray = len;
      thread.style.strokeDashoffset = len * (1 - t);
      ball.g.setAttribute('transform', 'translate(' + p.x.toFixed(2) + ' ' + (p.y + hop(t)).toFixed(2) + ') scale(' + (.62 - .07 * t).toFixed(3) + ')');
      ball.spin.setAttribute('transform', 'rotate(' + (-len * t / 8 * 57.3).toFixed(1) + ')');
    }
    if (!animate || still) { place(1); return; }
    place(0);
    var began = null;
    requestAnimationFrame(function step(now) {
      if (began === null) began = now;
      var t = Math.min(1, (now - began) / 1700);
      place(1 - Math.pow(1 - t, 2.2));
      if (t < 1 && run) requestAnimationFrame(step);
    });
  }

  story.addEventListener('toggle', function () {
    if (story.open) unwind(true);
    else if (run) { run.remove(); run = null; }
  });
  window.addEventListener('resize', function () { if (story.open) unwind(false); });
})();
