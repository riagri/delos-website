# Delos Recruitment website

Website for Delos Recruitment Ltd, a specialist recruitment-to-recruitment (rec2rec) consultancy run by Maria Gripari, founder and director, based in Surrey. Also hires for sales, operations and marketing roles. Live at delosrecruitment.co.uk.

## Working rules (keep usage low)

- Read this file instead of asking about brand, pages or tech. Only ask Maria when a decision genuinely isn't covered here.
- Do the task you were given, then stop. Don't refactor, restyle or "improve" anything outside it.
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
- Campaign images (agreed with Maria, Oct 2026): Greek myth themed photos with a short headline set into the image, DELOS wordmark only (`assets/mark-white.svg`, `assets/mark-slate.svg`), no pink highlights, no nudity, no generative AI images. Free Unsplash licence photos, saved as square crops in `assets/img`. Current set: labyrinth (Home), pillars (Hiring), eagle and Sisyphus (Careers), ships (Contact), Mykonos alley (404). Headlines are signed off by Maria; don't change them without asking. On scroll the question or statement lands first and the answer follows. Images are full height spreads that run to the edge of the screen (`.spread` sections), never boxes floating in a band: Home labyrinth beside the Hiring and Careers paths, Hiring pillars in the hero, Careers eagle in the hero and Sisyphus beside "Already in recruitment?", Contact ships and 404 Mykonos in the hero. On phones the image follows its text. About has no image yet.
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

## Hosting

- GitHub Pages from the main branch, root folder.
- Custom domain: delosrecruitment.co.uk (DNS on IONOS). Set via GitHub Pages settings; never touch email/MX records.
- No secrets, keys or private data ever go in this repo: it is public.
