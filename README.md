# Marci Metzger Homes: Homepage Redesign

A responsive, single-page redesign of the Home page of [marcimetzger.com](https://marcimetzger.com/), built as an assessment for the Junior Website Builder role. It's a practice project and is not used for client work.

**Live site:** https://andresrobert-git.github.io/Marci-Metzger/

## Built with
- HTML5 (semantic sections: header, main, section, footer)
- CSS3 (custom properties, Grid, Flexbox, media queries, mobile-first)
- Vanilla JavaScript (mobile menu, gallery, back-to-top scroll animation)
- Google Fonts: [Playfair Display and DM Sans]
- Hosted on GitHub Pages

## Features
- Responsive layout for mobile, tablet, and desktop
- Sticky header with a hamburger menu on small screens
- [Stats section highlighting Marci's track record]
- [Property search form and contact form that open the visitor's email app]
- Gallery of original images, plus an embedded Google Map
- Smooth back-to-top animation that respects the "reduce motion" setting

## Project structure
- index.html
- styles.css
- script.js
- img/ # images (WebP)

## Run locally
Open `index.html` in a browser. No build step is required.

## Design decision
The original homepage mentions Marci’s best results inside paragraph text: nearly 90 clients and $28.5 million in sales in 2021, plus nearly three decades of experience. Those are the strongest trust signals on the page, but a visitor skimming would likely miss them.

I pulled them out into a dedicated stats band with three large figures (~30 years of experience, ~90 clients helped, $28.5M in sales) and placed it right after Marci’s introduction. A visitor now meets Marci, then immediately sees proof of her track record, before they reach the property search form and have to decide whether to reach out.

I chose this because a real estate client is trusting someone with their biggest financial decision, so credibility needs to be visible in seconds, not hidden in a paragraph. Large numbers are also easy to scan on a phone, where most visitors will likely land. I built the band with CSS Grid so the three figures sit side by side on desktop and stack cleanly on mobile, and I kept the original wording and figures so the content stays accurate.

## Credits
Content and images from marcimetzger.com, used for assessment purposes only.