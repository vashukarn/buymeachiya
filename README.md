# Buy Me a Chiya · चिया खुवाऊ

A free tool that turns your eSewa, Khalti or bank details into a shareable tip page,
built for Nepal — where Buy Me a Coffee, Ko-fi and Patreon can't pay out because they
settle through Stripe or PayPal.

**buymeachiya.vijaykarn.com.np**

## How it works

There is no backend. `make.html` packs what you type into a base64url payload in the URL
fragment; `page.html` reads that fragment and renders the page. Nothing is sent to a
server, nothing is stored, and no account exists. The link *is* the page.

Supporters pay the creator's own account directly from their own banking or wallet app.
No money passes through this site, which is what keeps it out of Nepal Rastra Bank's
payment-service-provider regime.

## Files

| File | Purpose |
|---|---|
| `index.html` | Landing page |
| `make.html` | Generator — builds the link |
| `page.html` | Renders a creator's page from the URL fragment |
| `terms.html`, `privacy.html` | Legal pages |
| `style.css` | Shared styles for every page |

## Notes for anyone editing this

- **Never add an analytics script to `page.html`.** Payment details live in the address
  bar there, and most analytics tools report the full URL.
- Google Analytics runs only on `index.html` and `make.html`. Replace the placeholder
  `G-XXXXXXXXXX` Measurement ID with your own.
- `page.html` renders untrusted input from the fragment: use `textContent`, never
  `innerHTML`, and keep the https-only check on the QR image URL.

## Licence

MIT
