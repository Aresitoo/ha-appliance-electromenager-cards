SVG.laptop = () => `
<defs>${DEFS}
<linearGradient id="ID-lpwall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2a1a63"/><stop offset=".5" stop-color="#6b3fc9"/><stop offset="1" stop-color="#ff8fab"/></linearGradient>
<linearGradient id="ID-lpbody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e4e8ec"/><stop offset="1" stop-color="#bfc6cd"/></linearGradient>
<radialGradient id="ID-lpglow" cx=".5" cy="0" r="1"><stop offset="0" stop-color="#7fdcff" stop-opacity=".55"/><stop offset="1" stop-color="#7fdcff" stop-opacity="0"/></radialGradient>
<clipPath id="ID-lpclip"><rect x="22" y="21" width="76" height="52" rx="1"/></clipPath></defs>
<ellipse cx="60" cy="116" rx="54" ry="4" fill="url(#ID-shadow)"/>
<rect x="16" y="14" width="88" height="64" rx="5" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<rect x="22" y="21" width="76" height="52" rx="1" fill="#0a0d11"/>
<g class="lp-screen" clip-path="url(#ID-lpclip)">
  <rect x="22" y="21" width="76" height="52" fill="url(#ID-lpwall)"/>
  <rect x="22" y="21" width="76" height="5" fill="#0b1020" opacity=".6"/>
  <circle cx="26" cy="23.5" r="1" fill="#fff" opacity=".8"/><rect x="82" y="22.6" width="14" height="1.8" rx=".9" fill="#fff" opacity=".7"/>
  <rect x="27" y="30" width="20" height="14" rx="2" fill="#fff" opacity=".9"/><rect x="50" y="30" width="20" height="14" rx="2" fill="#fff" opacity=".9"/><rect x="73" y="30" width="20" height="14" rx="2" fill="#fff" opacity=".9"/>
  <circle cx="33" cy="37" r="3" fill="#ffb347"/><circle cx="56" cy="37" r="3" fill="#38d9ff"/><circle cx="79" cy="37" r="3" fill="#43c07a"/>
  <rect x="38" y="35.4" width="7" height="1.6" rx=".8" fill="#4b535c"/><rect x="61" y="35.4" width="7" height="1.6" rx=".8" fill="#4b535c"/><rect x="84" y="35.4" width="7" height="1.6" rx=".8" fill="#4b535c"/>
  <rect x="27" y="48" width="66" height="19" rx="2" fill="#0d1520" opacity=".88"/>
  <path class="lp-line" d="M30 62l8-4l7 3l8-8l8 5l8-7l8 3l8-6l6 2" fill="none" stroke="#38d9ff" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M30 64h60" stroke="#3b4a63" stroke-width=".5"/>
  <circle class="lp-dot" cx="90" cy="53" r="1.6" fill="#fff"/>
</g>
<path d="M22 21h76l-26 52h-50z" fill="url(#ID-gloss)" opacity=".3"/>
<circle cx="60" cy="17.4" r=".9" fill="#2a2f35"/><circle class="lp-cam" cx="60" cy="17.4" r=".45"/>
<path d="M14 78h92l8 30h-108z" fill="url(#ID-lpbody)" stroke="#9aa2ab" stroke-width=".6"/>
<path d="M14 78h92" stroke="#fff" stroke-width="1" opacity=".8"/>
<path d="M6 108h108v3q0 2.5-3 2.5h-102q-3 0-3-2.5z" fill="#aab2ba" stroke="#8f98a2" stroke-width=".5"/>
<path d="M48 108h24v1.6q-12 1.6-24 0z" fill="#8f98a2"/>
<path d="M18 81h84l5 20h-94z" fill="#151a1f" opacity=".85"/>
<g class="lp-keys" fill="#cfd5db">
  <path d="M20.6 83h8l-1.2 3h-8zM30.4 83h8l-.5 3h-8zM40.2 83h8l-.2 3h-8zM50 83h8v3h-8zM59.8 83h8v3h-8zM69.6 83h8l.2 3h-8zM79.4 83h8l.5 3h-8zM89.2 83h8l1.2 3h-8z"/>
  <path d="M19.2 87.4h8.6l-1.2 3.2h-8.6zM29.4 87.4h8.6l-.6 3.2h-8.6zM39.6 87.4h8.6l-.2 3.2h-8.6zM49.8 87.4h8.6v3.2h-8.6zM60 87.4h8.6l.2 3.2h-8.6zM70.2 87.4h8.6l.6 3.2h-8.6zM80.4 87.4h8.6l1.2 3.2h-8.6zM90.6 87.4h6.4l1.4 3.2h-6.6z"/>
  <path d="M17.8 92h9.2l-1.3 3.4h-9.2zM28.6 92h9.2l-.6 3.4h-9.2zM39.4 92h9.2l-.2 3.4h-9.2zM50.2 92h9.2v3.4h-9.2zM61 92h9.2l.2 3.4h-9.2zM71.8 92h9.2l.6 3.4h-9.2zM82.6 92h9.2l1.3 3.4h-9.2z"/>
</g>
<path d="M46 97h28l1 4h-30z" fill="#aab2ba" stroke="#8f98a2" stroke-width=".4"/>
<path d="M18 81h84l5 20h-94z" fill="url(#ID-lpglow)" class="lp-glow"/>
<circle class="lp-led" cx="60" cy="111" r="1.1"/>`;
