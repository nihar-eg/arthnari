# ArthNari — review build (v2)

The working build of the **ArthNari** awareness website: a guided scheme-finder for low-income and rural women (Hindi-first, English toggle) with per-scheme detail pages, About/Mission/Impact/Sources, and the approved visual identity.

**What's in this version**
- The full questionnaire flow (July 5 decisions applied): bank + Aadhaar gate with Jan Dhan step-zero, income-tax filter, life-situation branches (daughter → SSY, pregnant/new mom → PMMVY, earning → Mudra), and the ₹500 / end-of-May auto-debit explainer (insurance-only, so switched off with insurance in v1). Insurance schemes are out of v1.
- Scheme pages (SSY, PMMVY, APY, Mudra Shishu + Jan Dhan step-zero; PMSBY/PMJJBY data retained for a future version), each with the official form download, key-figures table, "needs for the scheme," and the disclaimer.
- About / Mission / Impact / Sources via the menu; Impact is designed to be updated over time.

**What to review:** the Hindi copy (a working draft — final wording is Riddhima's), the flow on a phone, and the scheme facts against official sources.

Fully static — no backend, no accounts, no personal data collected. Education only; applications always happen at the bank, post office, Anganwadi, or official government portals.

**Launch build (2026-09-20, for arthnari.com on Cloudflare Pages):** APY question corrected to her own income tax; end-of-May question off while insurance is off; 🔊 hidden until audio (`AUDIO_READY`); dead government links replaced; contact `contact@arthnari.com` + "independent, not run by the government" line; link-preview tags, icons, `404.html`, `_redirects`, `_headers`, `robots.txt`, `sitemap.xml`. Deploy a clean export (no `.git`, no README): `../../deploy/export.sh`.
