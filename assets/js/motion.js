/* Smooth scrolling (Lenis), headline reveals (GSAP + SplitText) and opener photo reveals.
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
      if (heading.classList.contains('no-split')) {
        gsap.fromTo(heading, { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.9, delay: 0.5, ease: 'power3.out' });
        return;
      }

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
    // Openers: the photo opens like a blind being raised, settles as it opens, then drifts
    // gently with the scroll. The headline lands (above), then the words beneath it follow.
    document.querySelectorAll('.opener').forEach(function (story, i) {
      var frame = story.querySelector('.opener-photo');
      var img = frame.querySelector('img') || frame;
      var rest = story.querySelectorAll('.opener-inner > :not(h1)');
      var atTop = story.getBoundingClientRect().top < window.innerHeight;

      var open = gsap.timeline({ paused: true });
      open.to(frame, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'expo.out' })
          .fromTo(img, { scale: 1.14 }, { scale: 1.07, duration: 1.6, ease: 'expo.out' }, 0);
      if (rest.length) {
        open.fromTo(rest, { y: 16, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08 }, 0.55);
      }

      if (atTop) {
        open.delay(0.1).play();
      } else {
        ScrollTrigger.create({ trigger: story, start: 'top 80%', once: true, onEnter: function () { open.play(); } });
      }

      // Drift: the photo moves a little slower than the page.
      gsap.fromTo(img, { yPercent: -2 }, {
        yPercent: 2, ease: 'none',
        scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    root.classList.add('motion-ready');
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(reveal);
  } else {
    reveal();
  }
})();
