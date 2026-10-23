/* Smooth scrolling (Lenis) and headline reveals (GSAP + SplitText).
   Does nothing if the visitor prefers reduced motion. */
(function () {
  var root = document.documentElement;
  if (!root.classList.contains('motion') || !window.gsap || !window.Lenis) {
    root.classList.remove('motion');
    return;
  }

  gsap.registerPlugin(ScrollTrigger, SplitText);

  // Smooth scrolling, driven by the GSAP ticker so scroll-based reveals stay in sync.
  var lenis = new Lenis({ anchors: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  function reveal() {
    document.querySelectorAll('main h1, main h2').forEach(function (heading) {
      // Leave the privacy notice still.
      if (heading.closest('.legal')) { gsap.set(heading, { autoAlpha: 1 }); return; }

      var split = SplitText.create(heading, { type: 'words', tag: 'span' });
      var pink = split.words.filter(function (w) { return w.closest('.dot'); });
      var plain = split.words.filter(function (w) { return !w.closest('.dot'); });

      gsap.set(heading, { autoAlpha: 1 });
      var tl = gsap.timeline({ paused: true });
      tl.from(plain, { yPercent: 40, autoAlpha: 0, duration: 0.8, ease: 'power3.out', stagger: 0.05 });
      // The pink word ("myth.") lands last, with a little more weight.
      if (pink.length) {
        tl.from(pink, { yPercent: 60, autoAlpha: 0, duration: 0.9, ease: 'back.out(1.7)' }, '-=0.35');
      }

      if (heading.tagName === 'H1') {
        tl.delay(0.15).play();
      } else {
        ScrollTrigger.create({ trigger: heading, start: 'top 85%', once: true, onEnter: function () { tl.play(); } });
      }
    });
    // Campaign images: the statement or question lands first,
    // then the answer follows a beat later as you keep scrolling.
    document.querySelectorAll('.ad').forEach(function (ad) {
      var photo = ad.querySelector('.ad-photo');
      var hl = ad.querySelector('.ad-hl');
      var q = ad.querySelector('.ad-q');
      var a = ad.querySelector('.ad-a');
      var rule = ad.querySelector('.ad-rule');
      var sub = ad.querySelector('.ad-sub');

      // Slow drift on the photo, tied to scroll.
      gsap.fromTo(photo, { scale: 1.08 }, {
        scale: 1, ease: 'none',
        scrollTrigger: { trigger: ad, start: 'top bottom', end: 'bottom top', scrub: true }
      });

      var first = SplitText.create(q || hl, { type: 'words', tag: 'span' }).words;
      var second = [];
      if (a) second = second.concat(SplitText.create(a, { type: 'words', tag: 'span' }).words);
      if (rule) second.push(rule);
      if (sub) second.push(sub);

      gsap.set(first, { yPercent: 50, autoAlpha: 0 });
      if (second.length) gsap.set(second, { y: 14, autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: ad, start: 'top 72%', once: true,
        onEnter: function () {
          gsap.to(first, { yPercent: 0, autoAlpha: 1, duration: 0.9, ease: 'power3.out', stagger: 0.06 });
        }
      });
      if (second.length) {
        ScrollTrigger.create({
          trigger: ad, start: 'top 45%', once: true,
          onEnter: function () {
            gsap.to(second, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12, delay: 0.35 });
          }
        });
        // If the image sits too low on the page to scroll that far, show the answer anyway.
        ScrollTrigger.create({
          trigger: ad, start: 'bottom bottom', once: true,
          onEnter: function () {
            gsap.to(second, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', stagger: 0.12, delay: 1.1 });
          }
        });
      }
    });

    root.classList.add('motion-ready');
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(reveal);
  } else {
    reveal();
  }
})();
