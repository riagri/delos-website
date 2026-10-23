# Delos Recruitment website

Website for Delos Recruitment Ltd, a specialist recruitment-to-recruitment (rec2rec) consultancy run by Maria Gripari, founder and director, based in Surrey. Also hires for sales, operations and marketing roles. Live at delosrecruitment.co.uk.

## Working rules (keep usage low)

- Read this file instead of asking about brand, pages or tech. Only ask Maria when a decision genuinely isn't covered here.
- Do the task you were given, then stop. Don't refactor, restyle or "improve" anything outside it.
- Typography: one five-step scale in `styles.css` (`--t-display`, `--t-title`, `--t-heading`, `--t-lede`, `--t-body` 18px, `--t-small` 16px). Body text Kumbh Sans Regular (400). Nothing under 16px. Headlines Gloock with slight negative tracking.
- Keep it simple: plain HTML and CSS, minimal vanilla JavaScript only where needed. No frameworks, no build step, no npm packages.
- Motion (agreed with Maria, Oct 2026): GSAP 3.13 (with ScrollTrigger and SplitText) and Lenis 1.1 are self-hosted in `assets/js/vendor`, never loaded from a CDN. `assets/js/motion.js` adds smooth scrolling and headline reveals; it switches off for visitors who prefer reduced motion. React Bits effects Maria likes are recreated in GSAP, not added via React.
- Visitor stats: none for now. If Maria wants them, use Plausible (cookie-free, no banner): script `https://plausible.io/js/script.outbound-links.tagged-events.js` with `data-domain="delosrecruitment.co.uk"`, allow plausible.io in the security policy, and tag buttons with `plausible-event-name=...` classes. Never add cookie-setting tools (Google Analytics, embeds) without a consent banner.
- Edit files in place with small targeted changes. Don't rewrite whole files to change a few lines.
- Don't run long checks or install tools. Open the page once at the end to confirm it renders.
- Never invent facts. No made-up testimonials, client names, placement numbers, fees or statistics. Where real content is missing, leave a clearly marked placeholder: `[MARIA TO CONFIRM: ...]`.
- Finish each session with a short list of what changed and any placeholders left.

## Brand

- Tagline: "Everything you have heard about recruitment is a myth"
- Voice: confident but not boastful, warm but not fluffy, direct without being blunt. No buzzwords, no recruitment clichés, no corporate filler.
- Colours: Delos Blue `#0053BF` (primary), Bougainvillea Bloom `#EC2193` (accent, use sparingly; every pink on the site is exactly this "Delos pink", never a darker shade), Hellenic Slate `#1D1E21` (text), Ionian Pearl `#F9F9F9` (background).
- Look: clean, editorial, fashion-magazine feel rather than corporate recruitment site. Generous type, strong headings, few boxes and icons.
- Logo files are in `/assets`. Never use the D mark (or any faded or oversized mark) as a background or decoration. Backgrounds are single flat colours.
- Headline font is Gloock (free, SIL Open Font Licence). Never use Erstoria.
- Never use em dashes or en dashes in copy. UK English. No emoji, no exclamation marks.
- Team voice: Delos speaks as "we" so it reads as more than one person. No "I", no personal "about Maria" section, no photos of people from Maria's life.
- Campaign images (agreed with Maria, Oct 2026): Greek myth themed photos with a short headline set into the image, no logo on the images (the DELOS wordmark was removed; its corner now holds the button), no pink highlights, no nudity, no generative AI images. Free Unsplash licence photos, saved full frame in `assets/img` as `<name>-full.jpg` (up to 2000px) and `<name>-800.jpg`, framed per image with `object-position`. Current set: labyrinth (Home), pillars (Hiring hero and Home Hiring card), eagle and Sisyphus (Careers), crossroads (About: a busy pedestrian crossing seen from directly above, people tracing the X, Unsplash TRJjPc0wss0), ships (Contact), Mykonos alley (404). All photos share one CSS grade (warm, slightly softened, like film) set on `.opener-photo img, .card-photo img` in styles.css. Headlines are signed off by Maria; don't change them without asking. On scroll the question or statement lands first and the answer follows. Each campaign photo IS its section (`.story`): the photo runs edge to edge in full colour, its line is the section headline set in white along the bottom of the photo (one soft dark shade at the foot of every photo), on the same column as the words directly beneath, so photo, headline and text read as one piece. No buttons or text boxes on photos. Every page opens the same way: a photo hero at the same height with the page headline (h1) on it. Home labyrinth ("Everything you have heard about recruitment is a myth."), Hiring pillars ("Relationships that stand the test of time."), Careers eagle ("Did you fall into recruitment? We help you fly.") plus Sisyphus as the experienced-recruiter section, About Mykonos alley ("About Delos Recruitment"), Contact ships ("No ships passing in the night."), 404 Mykonos. The variety of subjects is deliberate; the shared frame, position, type and shade make them one series. Motion: the photo opens like a raised blind, settles, then drifts gently with scroll; the headline lands and the words follow. Reduced motion shows everything still.
- Speak directly to the reader ("you", "your business"). Hiring speaks to clients, Careers to candidates. About describes the business.
- Stress thoroughness, never speed ("quick", "fast", "efficient").
- Reviews: keep to two or three, quoted word for word, credited by role (for example "Candidate, Google review"), never by name.
- Website copy comes only from Maria's own signed-off copy. Never use wording from the original brand book.

## Pages

All copy is approved by Maria in the "Delos Website Copy" doc. Change wording only when she asks.

1. **Home** (index.html): tagline with "myth." in pink, role labels, five myths (tap "Ask the oracle +" to reveal each truth, no JavaScript), Hiring and Careers paths, two reviews, closing line.
2. **Hiring** (hiring.html): for recruitment businesses hiring. "How we work" in five steps, in Maria's words.
3. **Careers** (careers.html): for people new to recruitment and experienced recruiters looking for their next move.
4. **About** (about.html): the business in "we" voice. No personal section.
5. **Contact** (contact.html): client and candidate booking buttons (no embedded calendar, so the site sets no cookies), email and phone.
6. **Privacy notice** (privacy.html): copied word for word from her Lawspeed privacy-notice.pdf.

One shared header and footer. Mobile first. Structured data (JSON-LD), sitemap.xml, robots.txt and llms.txt support search and AI search.

## Contact details

- Email (public): hello@delosrecruitment.co.uk
- Phone: +44 7537 142925
- Book a call: https://calendly.com/maria-delosrecruitment. Link out only, never embed (an embed sets third-party cookies on our site, which would need a cookie consent banner). Calendly is on the free plan, so there is one event type ("Initial Call"). Client and candidate buttons both use it, prefilling the first question:
  - Client: https://calendly.com/maria-delosrecruitment/initial-call?a1=Client%20call
  - Candidate: https://calendly.com/maria-delosrecruitment/initial-call?a1=Candidate%20call
- Socials (footer logos, plain, pink on hover, no underlines): LinkedIn https://www.linkedin.com/in/mariagripari/, Instagram https://www.instagram.com/delosrecruitment, Facebook https://www.facebook.com/delosrecruitment, TikTok https://www.tiktok.com/@delosrecruitment, X https://x.com/delos_rec, Google reviews https://share.google/tXGXv0by0SHzzuIAu
- Footer: logo, page links, email, phone, Book a call, social logos, privacy notice, "Delos Recruitment Ltd. Registered in England and Wales, company number 16163283." No tagline in the footer.
- Header: "Book a call" button linking to Contact.
- Calls to action: one action per page, shown at most twice (once at the top, once at the close), plus the header button. No secondary "Get in touch" buttons beside the main one. Mid-page images are statements without buttons; only the closing image carries the button. Home: Get in touch (hero, closing band). Hiring: Book a client call (hero, pillars). Careers: Book a candidate call (hero, Sisyphus). Contact: client and candidate booking buttons only.

## Hosting

- GitHub Pages from the main branch, root folder.
- Custom domain: delosrecruitment.co.uk (DNS on IONOS). Set via GitHub Pages settings; never touch email/MX records.
- No secrets, keys or private data ever go in this repo: it is public.
