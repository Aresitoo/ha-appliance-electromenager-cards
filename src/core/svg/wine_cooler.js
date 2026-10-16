SVG.wine_cooler = () => `
<defs>${DEFS}
<linearGradient id="ID-wnlight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff1c9" stop-opacity=".85"/><stop offset=".55" stop-color="#ffd98a" stop-opacity=".25"/><stop offset="1" stop-color="#ffd98a" stop-opacity="0"/></linearGradient>
<linearGradient id="ID-wncab" x1="0" x2="1"><stop offset="0" stop-color="#2b3036"/><stop offset=".5" stop-color="#14171b"/><stop offset="1" stop-color="#262b31"/></linearGradient>
<linearGradient id="ID-wnwood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c9a26b"/><stop offset="1" stop-color="#8a6a3f"/></linearGradient>
<clipPath id="ID-wnclip"><rect x="30" y="32" width="60" height="86"/></clipPath></defs>
<ellipse cx="60" cy="133" rx="46" ry="3.5" fill="url(#ID-shadow)"/>
<rect x="22" y="6" width="76" height="122" rx="4" fill="url(#ID-wncab)" stroke="#05070a" stroke-width=".8"/>
<rect x="26" y="9" width="68" height="17" rx="2" fill="#0d1013"/>
<circle class="wn-led" cx="34" cy="17.5" r="1.6"/>
<path d="M42 15h10M42 18h10M42 21h10" stroke="#3b424a" stroke-width=".8" stroke-linecap="round"/>
<rect x="64" y="12" width="26" height="11" rx="1.6" fill="#0c1720" stroke="#59616b" stroke-width=".5"/>
<text class="lcd" x="77" y="20.4" text-anchor="middle">OFF</text>
<rect x="28" y="30" width="64" height="92" fill="#07090b"/>
<g class="wn-inside" clip-path="url(#ID-wnclip)">
  <rect x="30" y="32" width="60" height="86" fill="#14181d"/>
  <rect class="wn-light" x="30" y="32" width="60" height="86" fill="url(#ID-wnlight)"/>
  <rect x="31" y="33" width="58" height="2" fill="#fff6dc" class="wn-strip"/>
  <g class="wn-bottles">
    <g>
      <circle cx="37" cy="44" r="5" fill="#5b1226"/><circle cx="48.6" cy="44" r="5" fill="#1f4d2e"/><circle cx="60.2" cy="44" r="5" fill="#5b1226"/><circle cx="71.8" cy="44" r="5" fill="#b0852f"/><circle cx="83.4" cy="44" r="5" fill="#1f4d2e"/>
      <circle cx="37" cy="44" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="48.6" cy="44" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="60.2" cy="44" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="71.8" cy="44" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/>
      <path d="M33.6 41.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M56.8 41.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/>
    </g>
    <rect x="30" y="49.5" width="60" height="3" fill="url(#ID-wnwood)"/>
    <g>
      <circle cx="37" cy="70" r="5" fill="#d48a8a"/><circle cx="48.6" cy="70" r="5" fill="#5b1226"/><circle cx="60.2" cy="70" r="5" fill="#b0852f"/><circle cx="71.8" cy="70" r="5" fill="#1f4d2e"/><circle cx="83.4" cy="70" r="5" fill="#5b1226"/>
      <circle cx="37" cy="70" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="48.6" cy="70" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="60.2" cy="70" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="71.8" cy="70" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/>
      <path d="M33.6 67.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M45.1 67.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/>
    </g>
    <rect x="30" y="75.5" width="60" height="3" fill="url(#ID-wnwood)"/>
    <g>
      <circle cx="37" cy="96" r="5" fill="#1f4d2e"/><circle cx="48.6" cy="96" r="5" fill="#b0852f"/><circle cx="60.2" cy="96" r="5" fill="#5b1226"/><circle cx="71.8" cy="96" r="5" fill="#d48a8a"/><circle cx="83.4" cy="96" r="5" fill="#1f4d2e"/>
      <circle cx="37" cy="96" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="48.6" cy="96" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="60.2" cy="96" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/><circle cx="71.8" cy="96" r="2.4" fill="none" stroke="#fff" stroke-opacity=".22"/>
      <path d="M33.6 93.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/><path d="M68.4 93.6a4.6 4.6 0 0 1 4-2" stroke="#fff" stroke-opacity=".5" stroke-width="1" fill="none" stroke-linecap="round"/>
    </g>
    <rect x="30" y="101.5" width="60" height="3" fill="url(#ID-wnwood)"/>
    <rect x="30" y="112" width="60" height="3" fill="url(#ID-wnwood)"/>
  </g>
  <g class="wn-air" fill="none" stroke-linecap="round"><path d="M44 116q-5-14 0-28t-3-30"/><path d="M60 116q5-14 0-28t3-30"/><path d="M76 116q-5-14 0-28t-3-30"/></g>
</g>
<g class="wn-door">
  <rect x="26" y="28" width="68" height="96" rx="2" fill="none" stroke="#0a0c0f" stroke-width="3"/>
  <rect x="29" y="31" width="62" height="90" fill="#0d1b2a" opacity=".3"/>
  <g class="wn-drops"><circle cx="40" cy="48" r="1.1"/><circle cx="64" cy="58" r="1.1"/><circle cx="80" cy="46" r="1.1"/><circle cx="52" cy="88" r="1.1"/><circle cx="76" cy="100" r="1.1"/></g>
  <path d="M29 31h62l-26 90h-36z" fill="url(#ID-gloss)" opacity=".45"/>
  <rect x="89" y="50" width="3.6" height="46" rx="1.8" fill="url(#ID-chrome)" stroke="#6f7780" stroke-width=".4"/>
</g>
<path d="M28 124h64" stroke="#3b424a" stroke-width="1"/>
<rect x="30" y="127" width="10" height="5" rx="1.5" fill="#3a3f45"/><rect x="80" y="127" width="10" height="5" rx="1.5" fill="#3a3f45"/>`;
