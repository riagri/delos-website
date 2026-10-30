# Delos Recruitment website

Website for Delos Recruitment Ltd (company number 16163283), a specialist rec2rec consultancy run by Maria Gripari, founder and director, Surrey. Also hires for sales, operations, marketing and admin roles. Live at delosrecruitment.co.uk.

## Working rules (keep usage low)

- Read this file instead of asking about brand, pages or tech. Ask Maria only when a decision isn't covered here.
- Do the task given, then stop. Don't refactor, restyle or "improve" anything outside it.
- Small targeted edits in place. Never rewrite a whole file to change a few lines.
- No long checks, no tool installs. Open the page once at the end to confirm it renders.
- Never invent facts (testimonials, client names, numbers, fees, statistics). Missing content gets a placeholder: `[MARIA TO CONFIRM: ...]`.
- End each session with a short list of what changed and any placeholders left.
- Before pushing: `git fetch -q origin && git rebase -q origin/main`. GitHub Pages goes live within a couple of minutes.

## Tech

- Plain HTML and CSS, minimal vanilla JS. No frameworks, build step or npm. Header, footer and search data are duplicated across pages on purpose (fine until about 20 pages).
- Home uses `home.css` and `home.js` only (no GSAP or Lenis); other pages keep `styles.css` and the motion scripts until they move to the home design, then `home.css` becomes the one stylesheet.
- Motion: GSAP 3.13 (ScrollTrigger, SplitText) and Lenis 1.1, self-hosted in `assets/js/vendor`, never a CDN. `assets/js/motion.js` adds smooth scroll and headline reveals and switches off for reduced motion. React Bits effects are recreated in GSAP, never React.
- Visitor stats: none for now. If wanted, Plausible only (cookie-free): `https://plausible.io/js/script.outbound-links.tagged-events.js`, `data-domain="delosrecruitment.co.uk"`, allow plausible.io in the security policy, tag buttons with `plausible-event-name=...`. Never add cookie-setting tools without a consent banner.
- Search: every page has the EmploymentAgency JSON-LD (sameAs socials and Google reviews, contactPoint). Home adds a FAQPage from the five myths (keep in step with the visible myths); Hiring and Careers add a Service; About and Contact use AboutPage and ContactPage. `llms.txt` holds key facts, process, myths and reviews word for word: update it whenever that copy changes. robots.txt welcomes AI crawlers. IndexNow key is the 32-character .txt in the root: ping api.indexnow.org with changed URLs after big updates.

## Brand

- Tagline: "Recruitment, without the myths." (retired: "Everything you have heard about recruitment is a myth"). Descriptor: "Rec2Rec for the whole recruitment business" (short: "Specialist Rec2Rec, Surrey and across the UK"). Display name everywhere: "Delos Recruitment | Rec2Rec". Retired: "Recruitment for recruitment businesses. Done properly."
- Voice: confident not boastful, warm not fluffy, direct not blunt. No buzzwords, clichés or corporate filler. UK English. No em or en dashes, no emoji, no exclamation marks.
- Speaks as "we", never "I". No personal "about Maria" section, no photos of people from Maria's life. Speak to the reader ("you", "your business"): Hiring to clients, Careers to candidates, About describes the business.
- Stress thoroughness, never speed ("quick", "fast", "efficient").
- Copy comes only from Maria's signed-off copy (the "Delos Website Copy" doc). Never use wording from the original brand book. Change wording only when she asks.
- Colours: Delos Blue `#0053BF`, Delos pink (Bougainvillea Bloom) `#EC2193` (exactly this, never darker), Hellenic Slate `#1D1E21` (text), Ionian Pearl `#F9F9F9` (background). Pink passes contrast only at large sizes: keep it to large or decorative use.
- Colour roles: pink is the stamp, blue is the page. Pink only for small signature moments (profile picture, favicon, the "myth." highlight). Blue is the canvas (site, banners, closing bands). Never use pink and blue to code audiences or roles.
- Logos, two only: pink square with white "DELOS" (`assets/logo-square.png`) for profile pictures and app icons; "DELOS RECRUITMENT" wordmark (`assets/logo-white.svg`, `assets/logo-blue.svg`) for header, documents and job ads. D mark roundel and blue circle avatar are retired. Never use any mark as a background; backgrounds are single flat colours.
- Fonts: headlines Gloock (free, OFL), slight negative tracking. Body Kumbh Sans 400. Never Erstoria.
- Look: clean, editorial, fashion-magazine, not corporate recruitment. Generous type, strong headings, few boxes and icons. Buttons and photo corners 4px.
- Reviews: two or three, word for word, credited only "Candidate, LinkedIn" or "Candidate, Google review". Never names or titles.

## Type and layout

- Scale in `styles.css`: `--t-display` (all headlines), `--t-heading` (myths, quotes, step and card titles), `--t-body` 18px, `--t-small` 16px. Nothing under 16px. Desktop uses exactly 42, 25, 18 and 16px.
- Desktop (960px+) is a magazine spread: square photo (7fr) beside its words (5fr); Careers' second story swaps sides. Text sections below use the same columns (title 5fr left, content 7fr right). Phones stack photo then words.
- Photo headlines: one size, in the photo's open space, never over the subject. White headlines sit low, dark headlines sit high. On phones only the labyrinth and caryatids headlines drop to 26px.
- The hook beside each photo is Gloock 24 to 30px, reading as the answer to the headline. Paragraphs are full slate.
- Home cards and reviews are editorial (no boxes); each card's headline fades in on its photo on hover (always shown on touch).
- Motion: photo opens like a raised blind, settles, drifts gently with scroll; headline lands, words follow. Reduced motion shows everything still.

## Images

- Greek myth themed photos with a short headline set into the image. No logo on images, no pink highlights, no nudity, no generative AI. Free Unsplash photos or Maria's own.
- Files in `assets/img`: `<name>-full.jpg` (up to 2000px), `<name>-1200.jpg`, `<name>-800.jpg`, all in the srcset with `sizes="(min-width: 960px) 620px, 100vw"`, framed with `object-position`.
- One clean finish baked in: saturation x0.94, slight warmth, no grain, no lifted blacks, never faded or film-look. No shadow lift or extra grading.
- Headlines are signed off by Maria: don't change them without asking. The question lands first on scroll, then the answer.

| Page | Photo | Headline | Hook |
|---|---|---|---|
| Home | Labyrinth (original colours, cropped so the woman is centred, 1200x2000; headline right-aligned top right in the sky) | Lost in the labyrinth? We'll guide you through. | When every role and every agency starts to look the same, it's hard to know which way to turn. |
| Hiring (and Home Hiring card) | Pillars / caryatids (Unsplash fJ7dY66Jpec, whole porch, blue sky; headline top left in the sky) | Relationships that stand the test of time. | Hires that last, and a partnership that lasts even longer. |
| Careers hero | Sisyphus | Pushing the same boulder every quarter? | If every quarter feels like the same uphill push and nothing ever changes, it might be time for a move. |
| Careers, falling-into-recruitment section | Light aircraft in clear blue sky (Maria's; white headline low) | Did you fall into recruitment? We'll help you fly. | Plenty of great recruiters never planned to be one. What matters is where you go from here. |
| About | Commuters in a bright white hall, one in a camel coat (Maria's choice; dark headline top left on the ceiling) | Never just a face in the crowd. | Behind every CV and every vacancy is a person. We take the time to get to know them. |
| Contact | Single red cargo ship at dusk with the moon (Maria's; dark headline top right, clear of the moon) | Ships passing in the night? Not with us. | Let's find a time that suits you. |
| 404 | Roadside 404 marker sign in a field (Maria's own photo) | | |

## Pages

1. **Home** (index.html): labyrinth opener with "The labyrinth +" story (Ariadne's thread unwinds when opened); roles in two columns; tagline as the myths heading with "myths." in pink and "The oracle +" story; five myths ("Ask the oracle +", the oracle answers, no JS); Hiring and Careers cards; "Why Delos?" (the drifting island, links to About); three reviews with key phrases in bold; closing line. Type scale on Home: display clamp(32px, 3.4vw, 46px).
2. **Hiring** (hiring.html): clients. "How we work" in five steps, in Maria's words.
3. **Careers** (careers.html): people new to recruitment and experienced recruiters.
4. **About** (about.html): the business in "we" voice.
5. **Contact** (contact.html): client and candidate booking buttons, email, phone.
6. **Privacy notice** (privacy.html): word for word from Maria's Lawspeed privacy-notice.pdf.

- Myths: fills the vacancy; your CV says it all; you have to be job hunting to talk to a recruiter; you need experience to become a recruiter; recruitment is just a stop gap (keep it short).
- Each idea has one home: "worked inside recruitment businesses" on Home only; "first step / long term career" on Careers only; confidentiality on Careers hero and Contact only; "Every hire is just the beginning" on the closing band only.
- Calls to action: one per page, at most twice (top and close), plus the header "Book a call" button (links to Contact). No secondary buttons. Mid-page images carry no button; only the closing image does. Home and About: Get in touch. Hiring: Book a client call. Careers: Book a candidate call (hero, Sisyphus). Contact: the two booking buttons only. The blue closing band ("Every hire is just the beginning, and how it starts shapes what comes next.") ends Home, Hiring and About.

## Contact details

- Email: hello@delosrecruitment.co.uk. Phone: +44 7537 142925. WhatsApp link (Contact and footer only): https://wa.me/447537142925
- Book a call: https://calendly.com/maria-delosrecruitment (free plan, one "Initial Call" event). Link out only, never embed (embeds set cookies).
  - Client: https://calendly.com/maria-delosrecruitment/initial-call?a1=Client%20call
  - Candidate: https://calendly.com/maria-delosrecruitment/initial-call?a1=Candidate%20call
- Socials (footer icons, plain, pink on hover, no underlines): LinkedIn https://www.linkedin.com/company/delosrecruitment/, Instagram https://www.instagram.com/delosrecruitment, Facebook https://www.facebook.com/delosrecruitment, TikTok https://www.tiktok.com/@delosrecruitment, X https://x.com/delos_rec, Google reviews https://share.google/tXGXv0by0SHzzuIAu
- Footer: three columns, no titles, no tagline. Logo with "© 2026 Delos Recruitment Ltd." / "Registered in England and Wales," / "company number 16163283."; page links plus Privacy notice; email, phone, Book a call, one row of social icons (WhatsApp first).
- Maria's home address never appears anywhere public.

## Hosting

- GitHub Pages, main branch, root. Domain delosrecruitment.co.uk, DNS on IONOS, set in GitHub Pages settings. Never touch email/MX records.
- Public repo: no secrets, keys or private data.
- `assets/email/` holds Maria's Gmail signature images; Gmail loads them by URL, so never rename, move or delete them. WiseStamp is no longer used.
