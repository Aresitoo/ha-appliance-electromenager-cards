SVG.air_fryer = () => `
<defs>${DEFS}<clipPath id="ID-w1"><rect x="14" y="58" width="39" height="31" rx="3"/></clipPath><clipPath id="ID-w2"><rect x="67" y="58" width="39" height="31" rx="3"/></clipPath>
<linearGradient id="ID-cav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3f45"/><stop offset="1" stop-color="#15181b"/></linearGradient>
<linearGradient id="ID-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#272c32"/><stop offset="1" stop-color="#0b0d10"/></linearGradient>
<linearGradient id="ID-fry" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd76a"/><stop offset="1" stop-color="#e09b2d"/></linearGradient>
<radialGradient id="ID-nug" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#e9a54c"/><stop offset="1" stop-color="#9c5a1e"/></radialGradient></defs>
<ellipse cx="60" cy="130" rx="56" ry="5" fill="url(#ID-shadow)"/>
<g class="af-steam"><path d="M42 23q-3-5 0-9t0-9"/><path d="M60 23q-3-5 0-9t0-9"/><path d="M78 23q-3-5 0-9t0-9"/></g>
<rect x="10" y="123" width="12" height="5" rx="1.5" fill="#15181b"/><rect x="98" y="123" width="12" height="5" rx="1.5" fill="#15181b"/>
<rect x="5" y="26" width="110" height="100" rx="9" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".8"/>
<path d="M14 27.5h92" stroke="#4a525b" stroke-width=".8" stroke-linecap="round"/>
<rect x="9" y="30" width="102" height="17" rx="4" fill="url(#ID-glass)" stroke="#3a424b" stroke-width=".5"/>
<path d="M11 32h40" stroke="#fff" stroke-opacity=".08" stroke-width="1.2" stroke-linecap="round"/>
${lcd(46, 33, 28, 11)}
<circle class="led l1" cx="41" cy="38.5" r="1.2"/>
<g fill="none" stroke="#7d8792" stroke-width=".7">
  <circle cx="17" cy="38.5" r="2.6"/><path d="M15.6 38.5h2.8"/>
  <circle cx="25" cy="38.5" r="2.6"/><path d="M23.6 38.5h2.8M25 37.1v2.8"/>
  <circle cx="33" cy="38.5" r="2.6"/><path d="M32 37.4l2 1.1l-2 1.1z"/>
  <circle cx="87" cy="38.5" r="2.6"/><path d="M86 37.4l2 1.1l-2 1.1z"/>
  <circle cx="95" cy="38.5" r="2.6"/><path d="M93.6 38.5h2.8M95 37.1v2.8"/>
  <circle cx="103" cy="38.5" r="2.6"/><path d="M103 36.8v1.6M101.5 37.6a2 2 0 1 0 3 0"/>
</g>
<rect x="9" y="52" width="49" height="69" rx="5" fill="url(#ID-inox)" stroke="#6f7780" stroke-width=".6"/>
<rect x="62" y="52" width="49" height="69" rx="5" fill="url(#ID-inox)" stroke="#6f7780" stroke-width=".6"/>
<rect x="12.5" y="56.5" width="42" height="34" rx="4" fill="#15181b"/>
<rect x="65.5" y="56.5" width="42" height="34" rx="4" fill="#15181b"/>
<rect x="14" y="58" width="39" height="31" rx="3" fill="url(#ID-cav)"/>
<rect x="67" y="58" width="39" height="31" rx="3" fill="url(#ID-cav)"/>
<g clip-path="url(#ID-w1)">
  <rect class="ilight" x="14" y="58" width="39" height="31" fill="url(#ID-warm)"/>
  <path class="af-coil" d="M16 61h3l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2h3"/>
  <g class="af-air"><path d="M17 74q7-8 16-3t16-2"/><path d="M17 68q8 5 16 0t16 1"/></g>
  <path d="M15 84h37v5h-37z" fill="url(#ID-mesh)" opacity=".9"/>
  <g class="fries">
    <rect x="18" y="80" width="15" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(-14 25 81)"/>
    <rect x="27" y="78.5" width="14" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(18 34 80)"/>
    <rect x="35" y="80.5" width="15" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(-6 42 82)"/>
    <rect x="21" y="83" width="13" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(8 27 84)"/>
    <rect x="31" y="83.5" width="15" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(-20 38 85)"/>
    <rect x="24" y="76.5" width="12" height="2.8" rx="1" fill="url(#ID-fry)" transform="rotate(32 30 78)"/>
    <rect x="40" y="77.5" width="10" height="2.8" rx="1" fill="url(#ID-fry)" transform="rotate(-38 45 79)"/>
  </g>
</g>
<g clip-path="url(#ID-w2)">
  <rect class="ilight" x="67" y="58" width="39" height="31" fill="url(#ID-warm)"/>
  <path class="af-coil" d="M69 61h3l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2h3"/>
  <g class="af-air"><path d="M70 74q7-8 16-3t16-2"/><path d="M70 68q8 5 16 0t16 1"/></g>
  <path d="M68 84h37v5h-37z" fill="url(#ID-mesh)" opacity=".9"/>
  <g class="nuggets">
    <ellipse cx="75" cy="83" rx="5" ry="3.4" fill="url(#ID-nug)"/>
    <ellipse cx="85" cy="84" rx="5.4" ry="3.2" fill="url(#ID-nug)" transform="rotate(-10 85 84)"/>
    <ellipse cx="96" cy="83" rx="5" ry="3.5" fill="url(#ID-nug)" transform="rotate(12 96 83)"/>
    <ellipse cx="80" cy="79" rx="4.6" ry="3" fill="url(#ID-nug)" transform="rotate(15 80 79)"/>
    <ellipse cx="91" cy="79" rx="4.8" ry="3.1" fill="url(#ID-nug)" transform="rotate(-18 91 79)"/>
    <path d="M73 82.5q2-1 4 0M84 83.5q2-1 4 0M94 82q2-1 4 0M89 78.5q2-1 4 0" stroke="#7a3f12" stroke-width=".6" fill="none" opacity=".7"/>
  </g>
</g>
<path d="M14 72L30 58h9L14 80z" fill="#fff" opacity=".1"/>
<path d="M67 72L83 58h9L67 80z" fill="#fff" opacity=".1"/>
<rect x="14" y="58" width="39" height="31" rx="3" fill="none" stroke="#000" stroke-opacity=".35"/>
<rect x="67" y="58" width="39" height="31" rx="3" fill="none" stroke="#000" stroke-opacity=".35"/>
<rect x="17" y="96" width="33" height="19" rx="4" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".5"/>
<rect x="70" y="96" width="33" height="19" rx="4" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".5"/>
<path d="M20 98.5h27M73 98.5h27" stroke="#fff" stroke-opacity=".14" stroke-width="1" stroke-linecap="round"/>
<rect x="29" y="105" width="9" height="2.2" rx="1.1" fill="#59616b"/><rect x="82" y="105" width="9" height="2.2" rx="1.1" fill="#59616b"/>
<path d="M11 55l14-1M64 55l14-1" stroke="#fff" stroke-opacity=".5" stroke-width=".8" stroke-linecap="round"/>`;
