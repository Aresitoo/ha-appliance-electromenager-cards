SVG.oven = () => `
<defs>${DEFS}<clipPath id="ID-win"><rect x="22" y="56" width="76" height="56" rx="4"/></clipPath>
<linearGradient id="ID-cavity" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3330"/><stop offset="1" stop-color="#181412"/></linearGradient></defs>
<ellipse cx="60" cy="133" rx="52" ry="5" fill="url(#ID-shadow)"/>
<rect x="10" y="10" width="100" height="120" rx="5" fill="url(#ID-inox)" stroke="#949ca5" stroke-width=".8"/>
<rect x="10" y="10" width="100" height="22" rx="5" fill="url(#ID-dark)"/>
<rect x="10" y="26" width="100" height="6" fill="url(#ID-dark)"/>
<circle cx="24" cy="21" r="7" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".5"/>
<circle cx="24" cy="21" r="4.6" fill="#2a3036"/><g class="knob"><line x1="24" y1="21" x2="24" y2="17.2" stroke="#e7eaed" stroke-width="1.3" stroke-linecap="round"/></g>
<circle cx="96" cy="21" r="7" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".5"/>
<circle cx="96" cy="21" r="4.6" fill="#2a3036"/><line x1="96" y1="21" x2="99" y2="18.5" stroke="#e7eaed" stroke-width="1.3" stroke-linecap="round"/>
${lcd(43, 15, 34, 12)}
<circle class="led l1" cx="38" cy="21" r="1.3"/>
<rect x="14" y="36" width="92" height="90" rx="3" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".6"/>
<rect x="20" y="40.5" width="80" height="4.5" rx="2.25" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".5"/>
<rect x="24" y="44.5" width="3" height="4" fill="#8f979f"/><rect x="93" y="44.5" width="3" height="4" fill="#8f979f"/>
<rect x="22" y="56" width="76" height="56" rx="4" fill="url(#ID-cavity)"/>
<g clip-path="url(#ID-win)">
  <rect class="ilight" x="22" y="56" width="76" height="56" fill="url(#ID-warm)"/>
  <path class="element" d="M26 61h8l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3h8"/>
  <path d="M24 97h72M24 99.5h72" stroke="#8d8680" stroke-width=".9"/>
  <path d="M36 97l3-10h42l3 10z" fill="#b5442f"/>
  <path d="M39 87q21-8 42 0z" fill="#d06a3c"/>
  <ellipse cx="60" cy="86.5" rx="5" ry="1.4" fill="#5b2a1a"/>
  <path d="M42 90h36" stroke="#e48a5c" stroke-width=".8"/>
  <g class="haze"><path d="M44 82q-3-5 0-10t0-10M60 80q-3-5 0-10t0-10M76 82q-3-5 0-10t0-10"/></g>
</g>
<path d="M22 70L44 56h16L22 82z" fill="#fff" opacity=".08"/>
<rect x="22" y="56" width="76" height="56" rx="4" fill="none" stroke="#5d656d" stroke-width="1.2"/>
<rect x="14" y="118" width="92" height="8" rx="1.5" fill="#000" opacity=".12"/>`;
