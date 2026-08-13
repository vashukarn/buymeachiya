# Fonts

Self-hosted so the site makes no third-party requests. Loading these from Google Fonts
would have sent every visitor's IP address to Google, which is hard to justify on a page
whose whole promise is that nothing about you leaves your browser.

Only the `latin` and `devanagari` subsets are included, which covers everything the site
renders. Total weight is about 350 KB across 12 files, and each `@font-face` in
`../fonts.css` carries its `unicode-range`, so a browser downloads only the subsets a
given page actually needs.

All four families are licensed under the SIL Open Font License 1.1. The full licence
text is in `OFL.txt`.

| Family | Copyright | Source |
|---|---|---|
| Archivo Black | Copyright 2017 The Archivo Black Project Authors | https://github.com/Omnibus-Type/ArchivoBlack |
| Manrope | Copyright 2018 The Manrope Project Authors | https://github.com/sharanda/manrope |
| JetBrains Mono | Copyright 2020 The JetBrains Mono Project Authors | https://github.com/JetBrains/JetBrainsMono |
| Mukta | Copyright (c) 2014, Girish Dalvi, Ek Type | https://github.com/EkType/Mukta |

Mukta carries the Devanagari, which the display faces do not have.
