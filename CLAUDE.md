# Delos Recruitment website

Website for Delos Recruitment Ltd, a specialist recruitment-to-recruitment (rec2rec) consultancy run by Maria Gripari, founder and director, based in Surrey. Also hires for sales, operations and marketing roles. Live at delosrecruitment.co.uk.

## Working rules (keep usage low)

- Read this file instead of asking about brand, pages or tech. Only ask Maria when a decision genuinely isn't covered here.
- Do the task you were given, then stop. Don't refactor, restyle or "improve" anything outside it.
- Keep it simple: plain HTML and CSS, minimal vanilla JavaScript only where needed. No frameworks, no build step, no npm packages.
- Edit files in place with small targeted changes. Don't rewrite whole files to change a few lines.
- Don't run long checks or install tools. Open the page once at the end to confirm it renders.
- Never invent facts. No made-up testimonials, client names, placement numbers, fees or statistics. Where real content is missing, leave a clearly marked placeholder: `[MARIA TO CONFIRM: ...]`.
- Finish each session with a short list of what changed and any placeholders left.

## Brand

- Tagline: "Everything you have heard about recruitment is a myth"
- Voice: confident but not boastful, warm but not fluffy, direct without being blunt. No buzzwords, no recruitment clichés, no corporate filler.
- Colours: Delos Blue `#0053BF` (primary), Bougainvillea Bloom `#EC2193` (accent, use sparingly), Hellenic Slate `#1D1E21` (text), Ionian Pearl `#F9F9F9` (background).
- Look: clean, editorial, fashion-magazine feel rather than corporate recruitment site. Generous type, strong headings, few boxes and icons.
- Logo files are in `/assets`. Never use the D mark (or any faded or oversized mark) as a background or decoration. Backgrounds are single flat colours.
- Headline font is Gloock (free, SIL Open Font Licence). Never use Erstoria.
- Never use em dashes or en dashes in copy. UK English. No emoji, no exclamation marks.
- Website copy comes only from Maria's own signed-off copy. Never use wording from the original brand book.

## Pages

All copy is approved by Maria in the "Delos Website Copy" doc. Change wording only when she asks.

1. **Home** (index.html): tagline, scope, Maria's opening line, two paths (Hiring, Careers), closing line.
2. **Hiring** (hiring.html): for recruitment businesses hiring.
3. **Careers** (careers.html): for people thinking about a move into recruitment.
4. **About** (about.html): Maria's master copy, word for word. Add her photo when she sends one.
5. **Contact** (contact.html): Calendly link, email and phone.
6. **Privacy notice** (privacy.html): copied word for word from her Lawspeed privacy-notice.pdf.

One shared header and footer. Mobile first. Structured data (JSON-LD), sitemap.xml, robots.txt and llms.txt support search and AI search.

## Contact details

- Email (public): hello@delosrecruitment.co.uk
- Phone: +44 7537 142925
- Book a call: https://calendly.com/maria-delosrecruitment (embed Calendly's inline widget on Contact, link buttons elsewhere)
- Footer: Delos Recruitment Ltd, company number and registered address as `[MARIA TO CONFIRM]` placeholders, privacy policy link (placeholder page).

## Hosting

- GitHub Pages from the main branch, root folder.
- Custom domain: delosrecruitment.co.uk (DNS on IONOS). Set via GitHub Pages settings; never touch email/MX records.
- No secrets, keys or private data ever go in this repo: it is public.
