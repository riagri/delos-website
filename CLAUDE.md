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
- Colour roles (agreed with Maria, 25 Oct 2026): pink is the stamp, blue is the page. Pink is reserved for small signature moments that always mean "this is Delos": the profile picture, favicon, the "myth." highlight. Blue is the canvas: website, banners, closing bands. Never use pink and blue to code different audiences or roles.
- Logos (agreed with Maria, 25 Oct 2026): two versions only. Profile pictures and app icons everywhere use the pink square with the white "DELOS" wordmark only (`assets/logo-square.png`, padded so circle crops never clip it). The "DELOS RECRUITMENT" wordmark (`assets/logo-white.svg`, `assets/logo-blue.svg`) is for the website header, documents and job ads. The D mark roundel and the stacked blue circle avatar are retired.
- Lines: one tagline ("Everything you have heard about recruitment is a myth") and one descriptor ("Rec2Rec for the whole recruitment business", or "Specialist Rec2Rec, Surrey and across the UK" where space is short). The old line "Recruitment for recruitment businesses. Done properly." is retired. Social bios on every platform use these lines and the display name "Delos Recruitment | Rec2Rec". `assets/social-preview.png` is the tagline banner (blue, white Gloock headline, pink underline under "myth").
- Headline font is Gloock (free, SIL Open Font Licence). Never use Erstoria.
- Never use em dashes or en dashes in copy. UK English. No emoji, no exclamation marks.
- Team voice: Delos speaks as "we" so it reads as more than one person. No "I", no personal "about Maria" section, no photos of people from Maria's life.
- Campaign images (agreed with Maria, Oct 2026): Greek myth themed photos with a short headline set into the image, no logo on the images (the DELOS wordmark was removed; its corner now holds the button), no pink highlights, no nudity, no generative AI images. Free Unsplash licence photos, saved full frame in `assets/img` as `<name>-full.jpg` (up to 2000px) and `<name>-800.jpg`, framed per image with `object-position`. Current set: labyrinth (Home), pillars (Hiring hero and Home Hiring card), Sisyphus (Careers hero) and small plane (Careers, below "Thinking about a move into recruitment?", the falling-into-recruitment section), crowd (About: commuters walking through a bright white hall, one in a camel coat; Maria's choice; dark headline top left on the ceiling), ships (Contact), 404 marker sign (404: Maria's own photo). All photos share one clean finish baked into the files (see Layout). Headlines are signed off by Maria; don't change them without asking. Page headlines (Oct 2026): Home "Lost in the labyrinth? We'll guide you through.", Hiring "Relationships that stand the test of time.", Careers "Pushing the same boulder every quarter?" and "Did you fall into recruitment? We'll help you fly.", About "Never just a face in the crowd." (commuters in a white hall), Contact "Ships passing in the night? Not with us." (hook: "Let's find a time that suits you.") On scroll the question or statement lands first and the answer follows. Layout (24 Oct 2026, final with Maria): magazine spread on desktop (960px+): square photo (7fr) beside its words (5fr), the Careers second story swaps sides; text sections below sit on the same two columns (title left 5fr, content right 7fr). Phones stack photo then words. Every photo headline is one size, in the photo's open space, never over the subject; white headlines sit LOW on the photo, dark (ink) headlines sit HIGH. Four type sizes only: --t-display (all headlines), --t-heading (myths, quotes, step and card titles), --t-body, --t-small. The hook beside or under each photo is Gloock (24 to 30px), so it reads as the answer to the photo headline (changed 24 Oct with Maria); paragraphs beneath are full slate (grey read as fine print on phones; changed 24 Oct with Maria). Home cards and reviews are editorial (no boxes); each card's page headline fades in on its photo on hover (always shown on touch), no extra links. Caryatids (Unsplash fJ7dY66Jpec, whole porch, blue sky) headline sits in the open sky top left. Labyrinth: original colours, cropped only so the woman is centred (1200x2000); headline right-aligned top right in the sky. No shadow lift or extra grading. Plane (Careers): Maria's light aircraft in clear blue sky, white headline low. Ships (Contact): Maria's single red cargo ship at dusk with the moon; dark headline top right, clear of the moon. Desktop uses exactly four sizes (42, 25, 18, 16px); on phones only the labyrinth and caryatids headlines drop to 26px because their sky is narrow. Photos: clean natural finish (saturation x0.94, slight warmth, no grain, no lifted blacks); never a faded film or Tumblr look. 404 photo: roadside 404 marker sign in a field (Maria's own photo). Buttons and photo corners 4px. The variety of subjects is deliberate; the shared frame, position, type and shade make them one series. Motion: the photo opens like a raised blind, settles, then drifts gently with scroll; the headline lands and the words follow. Reduced motion shows everything still.
- Speak directly to the reader ("you", "your business"). Hiring speaks to clients, Careers to candidates. About describes the business.
- Stress thoroughness, never speed ("quick", "fast", "efficient").
- Reviews: keep to two or three, quoted word for word, credited by source only: "Candidate, LinkedIn" or "Candidate, Google review". Never names or job titles. Fuller word-for-word excerpts (24 Oct with Maria).
- Website copy comes only from Maria's own signed-off copy. Never use wording from the original brand book.

## Pages

All copy is approved by Maria in the "Delos Website Copy" doc. Change wording only when she asks.

Copy pass (23 Oct 2026, asked for by Maria): repetition removed so each idea has one home ("worked inside recruitment businesses" on Home only, "first step / long term career" on Careers only, confidentiality on Careers hero and Contact only, "Every hire is just the beginning" on the Home close only). Hooks under photos: Home "When every role and every recruiter starts to look the same, it's hard to know which way to turn."; Hiring "Hires that last, and a partnership that lasts even longer."; Careers "If every quarter feels like the same uphill push and nothing ever changes, it might be time for a move." and "Plenty of great recruiters never planned to be one. What matters is where you go from here."; About "Behind every CV and every vacancy is a person. We take the time to get to know them." Myths now: fills the vacancy; your CV says it all; once the CV is sent the recruiter disappears; you need experience to become a recruiter; recruitment is just a stop gap (keep it short, no "before another sales career").

1. **Home** (index.html): labyrinth opener, the tagline as the myths heading with "myth." in pink, the roles as a three-by-two list, five myths (tap "Ask the oracle +" to reveal each truth, no JavaScript), Hiring and Careers paths, two reviews, closing line.
2. **Hiring** (hiring.html): for recruitment businesses hiring. "How we work" in five steps, in Maria's words.
3. **Careers** (careers.html): for people new to recruitment and experienced recruiters looking for their next move.
4. **About** (about.html): the business in "we" voice. No personal section.
5. **Contact** (contact.html): client and candidate booking buttons (no embedded calendar, so the site sets no cookies), email and phone.
6. **Privacy notice** (privacy.html): copied word for word from her Lawspeed privacy-notice.pdf.

One shared header and footer. Mobile first. Structured data (JSON-LD), sitemap.xml, robots.txt and llms.txt support search and AI search. AI search (GEO, 24 Oct 2026): every page carries the EmploymentAgency record with sameAs (socials, Google reviews) and contactPoint; Home adds a FAQPage built from the five myths (keep it in step with the visible myths), Hiring and Careers add a Service record, About and Contact use AboutPage and ContactPage. llms.txt holds the key facts, process, myths and reviews word for word; update it whenever that copy changes. robots.txt welcomes AI crawlers. IndexNow key file is the 32-character .txt in the root: ping api.indexnow.org with changed URLs after big updates.

## Contact details

- Email (public): hello@delosrecruitment.co.uk
- Phone: +44 7537 142925 (also WhatsApp: https://wa.me/447537142925, link only, on Contact and in the footer)
- Book a call: https://calendly.com/maria-delosrecruitment. Link out only, never embed (an embed sets third-party cookies on our site, which would need a cookie consent banner). Calendly is on the free plan, so there is one event type ("Initial Call"). Client and candidate buttons both use it, prefilling the first question:
  - Client: https://calendly.com/maria-delosrecruitment/initial-call?a1=Client%20call
  - Candidate: https://calendly.com/maria-delosrecruitment/initial-call?a1=Candidate%20call
- Socials (footer logos, plain, pink on hover, no underlines): LinkedIn https://www.linkedin.com/company/delosrecruitment/, Instagram https://www.instagram.com/delosrecruitment, Facebook https://www.facebook.com/delosrecruitment, TikTok https://www.tiktok.com/@delosrecruitment, X https://x.com/delos_rec, Google reviews https://share.google/tXGXv0by0SHzzuIAu
- Footer: three columns, no titles. Logo with "© 2026 Delos Recruitment Ltd." / "Registered in England and Wales," / "company number 16163283."; page links plus Privacy notice; email, phone, Book a call and one row of social icons (WhatsApp first). No tagline in the footer.
- Header: "Book a call" button linking to Contact.
- Calls to action: one action per page, shown at most twice (once at the top, once at the close), plus the header button. No secondary "Get in touch" buttons beside the main one. Mid-page images are statements without buttons; only the closing image carries the button. Home: Get in touch (opener, closing band). Hiring: Book a client call (opener, closing band). About: Get in touch (opener, closing band); the blue closing band ("Every hire is just the beginning, and how it starts shapes what comes next.") ends Home, Hiring and About. Careers: Book a candidate call (hero, Sisyphus). Contact: client and candidate booking buttons only.

## Hosting

- GitHub Pages from the main branch, root folder.
- Custom domain: delosrecruitment.co.uk (DNS on IONOS). Set via GitHub Pages settings; never touch email/MX records.
- No secrets, keys or private data ever go in this repo: it is public.
