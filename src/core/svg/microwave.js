SVG.microwave = () => `
<defs>${DEFS}<clipPath id="ID-win"><rect x="13" y="42" width="66" height="62" rx="4"/></clipPath>
<linearGradient id="ID-cav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4f55"/><stop offset="1" stop-color="#22262a"/></linearGradient></defs>
<ellipse cx="60" cy="117" rx="56" ry="5" fill="url(#ID-shadow)"/>
<rect x="8" y="111" width="10" height="4" rx="1" fill="#2c3136"/><rect x="102" y="111" width="10" height="4" rx="1" fill="#2c3136"/>
<rect x="5" y="34" width="110" height="78" rx="6" fill="url(#ID-inox)" stroke="#949ca5" stroke-width=".8"/>
<rect x="9" y="38" width="74" height="70" rx="5" fill="#1a1d21"/>
<rect x="13" y="42" width="66" height="62" rx="4" fill="url(#ID-cav)"/>
<g clip-path="url(#ID-win)">
  <rect class="ilight" x="13" y="42" width="66" height="62" fill="url(#ID-warm)"/>
  <ellipse cx="46" cy="94" rx="24" ry="5" fill="#c8d4dc" opacity=".85"/>
  <ellipse cx="46" cy="93.4" rx="21" ry="3.8" fill="#e7eef3" opacity=".9"/>
  <g class="bowl">
    <path d="M35 80h22q-1 11-11 12q-10-1-11-12z" fill="#f4f1ea" stroke="#c9c2b4" stroke-width=".6"/>
    <ellipse cx="46" cy="80" rx="11" ry="2.4" fill="#d9822b"/>
    <path d="M38 85h16" stroke="#3e8ed0" stroke-width="1.2"/>
  </g>
  <g class="steam-in"><path d="M42 76q-3-5 0-10t0-10M50 76q-3-5 0-10t0-10"/></g>
  <rect x="13" y="42" width="66" height="62" fill="url(#ID-mesh)"/>
</g>
<path d="M13 60L33 42h14L13 74z" fill="#fff" opacity=".1"/>
<rect x="84" y="38" width="3" height="70" rx="1.5" fill="url(#ID-chrome)"/>
${lcd(90, 42, 21, 10)}
<g fill="#d7dce1" stroke="#9aa2ab" stroke-width=".4">
  <rect x="90" y="57" width="6" height="5" rx="1.2"/><rect x="97.5" y="57" width="6" height="5" rx="1.2"/><rect x="105" y="57" width="6" height="5" rx="1.2"/>
  <rect x="90" y="64" width="6" height="5" rx="1.2"/><rect x="97.5" y="64" width="6" height="5" rx="1.2"/><rect x="105" y="64" width="6" height="5" rx="1.2"/>
  <rect x="90" y="71" width="6" height="5" rx="1.2"/><rect x="97.5" y="71" width="6" height="5" rx="1.2"/><rect x="105" y="71" width="6" height="5" rx="1.2"/>
</g>
<circle cx="100.5" cy="88" r="7" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".5"/>
<circle cx="100.5" cy="88" r="4.6" fill="#e9ecef"/>
<g class="knob"><line x1="100.5" y1="88" x2="100.5" y2="84.2" stroke="#4f5964" stroke-width="1.3" stroke-linecap="round"/></g>
<rect class="start" x="90" y="98" width="21" height="6" rx="2"/>`;
