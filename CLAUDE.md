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
- One stylesheet, `styles.css?v=N`, on every page (Home also loads `home.js?v=N`): raise N on every page whenever a file changes, so browsers fetch the new copy instead of a cached one.
- Home (`<body class="home">`) has its own components at the end of `styles.css`, all scoped under `.home` so they never reach other pages, followed by a short block undoing the shared rules that would otherwise reach Home. Home uses no GSAP or Lenis; other pages use the motion scripts. Every page shares the home look (same type scale, section spacing and closing band, no hairlines between sections). White-headline photos wait on a slate backdrop while loading. Anchor links stop below the sticky header (Lenis offset); "Ask the oracle below." on Careers links to `#oracle`, the section, not its sticky heading. The "Ask the oracle +" toggles stay Delos Blue on purpose (the questions are what visitors should open); the "Ask the oracle below." link uses the quiet text-link style.
- Motion: GSAP 3.13 (ScrollTrigger, SplitText) and Lenis 1.1, self-hosted in `assets/js/vendor`, never a CDN. `assets/js/motion.js` adds smooth scroll and headline reveals and switches off for reduced motion. React Bits effects are recreated in GSAP, never React.
- Security policy (meta tag on every page) keeps `connect-src 'self'`, not 'none': speed tests read robots.txt with an in-page request, and 'none' made PageSpeed mark it invalid (SEO 92).
- Fonts are self-hosted `.woff2` in `fonts/` (Gloock and Kumbh Sans variable), both preloaded on every page.
- Visitor stats: Google Analytics 4 (G-Z2EYYR0KBP), loaded only after the visitor accepts the cookie banner. All in `assets/js/consent.js` (choice kept in localStorage `delos-cookies`; Decline clears `_ga` cookies). Every page loads it before `</body>`, has no footer cookie link; Privacy notice has a "Change your cookie settings" link (`data-cookie-settings`, reopens the banner), and allows googletagmanager.com and google-analytics.com in the security policy. No inline scripts: the security policy blocks them. Never add other cookie-setting tools without going through the banner.
- Links and addresses: short form only (`/hiring`, never `hiring.html`); GitHub Pages serves the .html file behind it. Canonicals, sitemap, search data and llms.txt use the same form.
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

- Scale in `styles.css`: `--t-display` (all headlines), `--t-heading` (myths, quotes, step and card titles), `--t-body` 18px, `--t-small` 16px. Nothing under 16px. Desktop uses exactly 46, 25, 18 and 16px, the same as Home: display clamp(32px, 3.4vw, 46px) in both stylesheets.
- Desktop (960px+) is a magazine spread: square photo (7fr) beside its words (5fr); Careers' second story swaps sides. Text sections below use the same columns (title 5fr left, content 7fr right). Phones stack photo then words.
- Photo headlines: one size, in the photo's open space, never over the subject. White headlines sit low, dark headlines sit high. On phones only the labyrinth and caryatids headlines drop to 26px.
- The hook beside each photo is Gloock 24 to 30px, reading as the answer to the headline. Paragraphs are full slate.
- Home cards and reviews are editorial (no boxes); each card's headline fades in on its photo on hover (always shown on touch).
- Motion: photo opens like a raised blind, settles, drifts gently with scroll; headline lands, words follow. Reduced motion shows everything still.

## Images

- Greek myth themed photos with a short headline set into the image. No logo on images, no pink highlights, no nudity, no generative AI. Free Unsplash photos or Maria's own.
- Files in `assets/img`: `<name>-full.jpg` (up to 2000px), `<name>-1200.jpg`, `<name>-800.jpg`, `<name>-600.jpg`, all in the srcset with `sizes="(min-width: 960px) 620px, 100vw"` (Home cards: `(min-width: 1240px) 545px, (min-width: 760px) 45vw, 100vw`), framed with `object-position`. Each size also gets a `.webp` copy (quality 80) when it is at least 15% smaller, served through `<picture>` with a WebP `<source>` and the JPEG `<img>` as fallback (`picture { display: contents; }` keeps layouts unchanged). Crossroads has no WebP: its JPEG is smaller.
- One clean finish baked in: saturation x0.94, slight warmth, no grain, no lifted blacks, never faded or film-look. No shadow lift or extra grading.
- Headlines are signed off by Maria: don't change them without asking. Never push new copy until Maria has signed off the final wording. The question lands first on scroll, then the answer.

| Page | Photo | Headline | Hook |
|---|---|---|---|
| Home | Labyrinth (original colours, cropped so the woman is centred, 1200x2000; headline right-aligned top right in the sky) | Lost in the labyrinth? We'll guide you through. | When every role and every agency starts to look the same, it's hard to know which way to turn. |
| Hiring (and Home Hiring card) | Pillars / caryatids (Unsplash fJ7dY66Jpec, whole porch, blue sky; headline top left in the sky) | Relationships that stand the test of time. | Hires that last, and a partnership that lasts even longer. |
| Careers hero (new to recruitment and career-seekers, oracle text link, no button) | Sisyphus | Job search feeling like an uphill push? (also the Home Careers card) | You don't have to keep pushing alone. We'll find the role that's right for you, and help you get there. |  Caption is the myth only: Sisyphus pushed his boulder up the hill alone, only for it to roll back down each time. |
| Careers, experienced-recruiters section (carries the top Let's talk button, the one mid-page exception) | Light aircraft in clear blue sky (Maria's; white headline low) | Already flying? Let's go higher. | You've built the experience. We'll find the business that takes you further. |
| About | Commuters in a bright white hall, one in a camel coat (Maria's choice; dark headline top left on the ceiling) | Never just a face in the crowd. | Behind every CV and every vacancy is a person. We take the time to get to know them. |
| Contact | Single red cargo ship at dusk with the moon (Maria's; dark headline top right, clear of the moon) | Ships passing in the night? Not with us. | Let's find a time that suits you. |
| 404 | Person alone in a curving hedge maze, black and white on purpose (you have left the site) (Unsplash 1KdnEeZ-gLU). The one page with the headline beside the photo, not in it (the texture leaves no open space), button straight beneath. A large white "404" sits in the photo, top right, away from the figure | Looks like you took a wrong turn. | Button: Find your way back |

## Pages

1. **Home** (index.html, address /): labyrinth opener with "The labyrinth +" story (Ariadne's thread unwinds when opened); roles in two columns; tagline as the myths heading with "myths." in pink; five myths ("The truth +" opens each one and strikes the myth through, no JS). Myths are debunked, never "asked": the oracle (guidance before big decisions) belongs to the question-and-answer sections on Hiring (client questions) and Careers (candidate questions), which double as the FAQ for search; Hiring and Careers cards; "Why Delos?" (the drifting island, links to About); three reviews set on the page without boxes, key phrases in bold black, turning blue on hover on computers only (phones stay black); closing line. Opening moment on load only: photo opens like a raised blind, headline lands, words follow (CSS, no scripts, off for reduced motion). Pink only on "myths." and the full stop in "What people say."; "Delos" in "Why Delos?" is Delos Blue and turns into the logo when you hover anywhere in that section (computers only). No arrows on links. Text sections put the title left and content right; gallery sections (cards, reviews) stack the title above, on purpose. Card headlines: hover on computers, always shown at 16px on phones and tablets, never touching the building. Type scale on Home: display clamp(32px, 3.4vw, 46px).
2. **Hiring** (/hiring): clients. "How we work" in five steps, in Maria's words.
3. **Careers** (/careers): people new to recruitment and experienced recruiters.
4. **About** (/about): the business in "we" voice.
5. **Contact** (/contact): client and candidate booking buttons, then "Or get in touch directly." above quiet slate links (email, phone, WhatsApp; no labels or dividers).
6. **Privacy notice** (/privacy): word for word from Maria's Lawspeed privacy-notice.pdf.

- PageSpeed notes to ignore: "cache lifetimes" (GitHub Pages sets it), mobile "image delivery" (it ignores phone pixel density; smaller photos would look soft), "minify CSS" (2 KiB, not worth a build step), "forced reflow" (home.js measures only when the labyrinth story is opened).
- Myths: fills the vacancy; your CV says it all; you have to be job hunting to talk to a recruiter; you need experience to become a recruiter; recruitment is just a stop gap (keep it short).
- Each idea has one home: "worked inside recruitment businesses" on Home only; "first step / long term career" on Careers only; confidentiality on the Careers experienced-recruiters section and Contact only; "Every hire is just the beginning" on the closing band only.
- Calls to action: one per page, at most twice (top and close), plus the header "Get in touch" button (links to Contact; was "Book a call" until bookings reopen). No secondary buttons. Mid-page images carry no button; only the closing image does. Home and About: Get in touch. Hiring and Careers: "Let's talk" (top and closing band). Careers points new people to the oracle with a text link ("Ask the oracle below."), never a button, and has no CV upload or CV email link. Contact: the two booking buttons only ("Talk about hiring", "Talk about your career"). The blue closing band ("Every hire is just the beginning, and how it starts shapes what comes next.") ends Hiring. Home ends with "No myths. Just the right people in the right roles." and About with "Recruitment has always been about people. With us, it still is." Careers ends with its own band: "Wherever you are in your career, your next chapter starts with a conversation."

## Contact details

- Email: hello@delosrecruitment.co.uk. Phone: +44 7537 142925. WhatsApp link (Contact and footer only): https://wa.me/447537142925
- Book a call: Google Calendar booking page https://calendar.app.google/uaRx23B52yra5b9Z9 (one page for clients and candidates; its booking form asks which). Link out only, never embed (embeds set cookies). Calendly is retired.
- Socials (footer icons, plain, pink on hover, no underlines): LinkedIn https://www.linkedin.com/company/delosrecruitment/, Instagram https://www.instagram.com/delosrecruitment, Facebook https://www.facebook.com/delosrecruitment, TikTok https://www.tiktok.com/@delosrecruitment, X https://x.com/delos_rec, Google reviews https://share.google/tXGXv0by0SHzzuIAu
- Footer: three columns, no titles, no tagline. Logo with "© 2026 Delos Recruitment Ltd." / "Registered in England and Wales," / "company number 16163283."; page links plus Privacy notice; email, phone, Get in touch, one row of social icons (WhatsApp first).
- Maria's home address never appears anywhere public.

## Hosting

- GitHub Pages, main branch, root. Domain delosrecruitment.co.uk, DNS on IONOS, set in GitHub Pages settings. Never touch email/MX records.
- Public repo: no secrets, keys or private data.
- `assets/email/` holds Maria's Gmail signature images; Gmail loads them by URL, so never rename, move or delete them. WiseStamp is no longer used.
