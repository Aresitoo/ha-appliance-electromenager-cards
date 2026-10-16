SVG.pellet_stove = () => `
<defs>${DEFS}
<clipPath id="ID-win"><rect x="34" y="46" width="52" height="50" rx="5"/></clipPath>
<linearGradient id="ID-blk" x1="0" x2="1"><stop offset="0" stop-color="#17191c"/><stop offset=".5" stop-color="#34383e"/><stop offset="1" stop-color="#141618"/></linearGradient>
<linearGradient id="ID-white" x1="0" x2="1"><stop offset="0" stop-color="#d9dde2"/><stop offset=".55" stop-color="#ffffff"/><stop offset="1" stop-color="#c9ced4"/></linearGradient>
<linearGradient id="ID-brick" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b1712"/><stop offset="1" stop-color="#0f0706"/></linearGradient>
<radialGradient id="ID-glow" cx=".5" cy=".85" r=".85"><stop offset="0" stop-color="#ffd27a" stop-opacity=".95"/><stop offset=".45" stop-color="#ff7a1a" stop-opacity=".55"/><stop offset="1" stop-color="#3a0d00" stop-opacity="0"/></radialGradient>
<linearGradient id="ID-fl" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff3b0"/><stop offset=".3" stop-color="#ffc23d"/><stop offset=".68" stop-color="#ff7a1a"/><stop offset="1" stop-color="#e5381c" stop-opacity="0"/></linearGradient>
<linearGradient id="ID-core" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#fff0a0"/><stop offset="1" stop-color="#ffc23d" stop-opacity="0"/></linearGradient></defs>
<g transform="translate(-6.5 -4.5) scale(1.11)">
<ellipse cx="60" cy="134" rx="44" ry="4.5" fill="url(#ID-shadow)"/>
<g class="flue-smoke"><path d="M57 0q-4-5 0-10t0-10"/><path d="M63 -2q-4-5 0-10t0-10"/></g>
<rect x="53" y="3" width="14" height="11" fill="url(#ID-chrome)"/>
<rect x="51" y="1" width="18" height="4" rx="1.5" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".4"/>
<rect x="28" y="124" width="9" height="7" rx="1.5" fill="#24272b"/><rect x="83" y="124" width="9" height="7" rx="1.5" fill="#24272b"/>
<rect x="22" y="14" width="76" height="113" rx="7" fill="url(#ID-blk)" stroke="#0b0c0e" stroke-width=".6"/>
<rect x="22" y="22" width="9.5" height="102" rx="3.5" fill="url(#ID-white)"/>
<rect x="88.5" y="22" width="9.5" height="102" rx="3.5" fill="url(#ID-white)"/>
<rect x="19" y="11" width="82" height="8" rx="3" fill="#2b2f34" stroke="#474c53" stroke-width=".6"/>
<rect x="40" y="12.4" width="40" height="5" rx="1.6" fill="#1b1d21" stroke="#555b63" stroke-width=".5"/>
<path d="M36 23.5h48M36 26h48M36 28.5h48" stroke="#0b0c0e" stroke-width="1.2"/>
${lcd(46, 31.5, 28, 9)}
<circle cx="40" cy="36" r="2" fill="#3b4148" stroke="#5a616a" stroke-width=".4"/>
<circle class="led l1" cx="80" cy="36" r="1.5"/>
<rect x="31" y="43" width="58" height="56" rx="7" fill="#0f1113" stroke="#4a5058" stroke-width=".8"/>
<rect x="34" y="46" width="52" height="50" rx="5" fill="url(#ID-brick)"/>
<g clip-path="url(#ID-win)">
  <path d="M34 56h52M34 66h52M34 76h52M46 46v10M62 46v10M78 46v10M40 56v10M56 56v10M72 56v10M48 66v10M64 66v10M80 66v10" stroke="#3d2219" stroke-width=".6" opacity=".9"/>
  <rect class="glow" x="34" y="46" width="52" height="50" fill="url(#ID-glow)"/>
  <g class="fire">
    <path class="flame f2" d="M52.5 86C46.5 81 47.5 73 50 68C51.5 73 54 73.5 54 69C57.5 74.5 58.5 82 52.5 86Z" fill="url(#ID-fl)"/>
    <path class="flame f3" d="M67.5 86C62 82 63 74 65.5 70C66.5 74.5 68.5 74.5 69.5 70C73.5 76.5 72.5 83 67.5 86Z" fill="url(#ID-fl)"/>
    <path class="flame f1" d="M60 86C51 80 52.5 69 57 62C58 68.5 61 68.5 60.5 60C67.5 67 71 78 60 86Z" fill="url(#ID-fl)"/>
    <path class="flame f5" d="M59.5 68C57.5 62 59.5 56 61.5 52C62.5 58 63.5 62.5 59.5 68Z" fill="url(#ID-fl)" opacity=".85"/>
    <path class="flame f4" d="M60 86C56 83 56 77 58.5 72.5C59.5 76 61.5 76.5 62 73C64.5 78 64.5 83 60 86Z" fill="url(#ID-core)"/>
  </g>
  <g class="smoke-in"><path d="M55 82q-3-6 0-12t0-12"/><path d="M64 82q-3-6 0-12t0-12"/></g>
  <path d="M45 92h30l-3.5-7h-23z" fill="#3a3f45" stroke="#5c636b" stroke-width=".5"/>
  <g class="pellets" fill="#8a5a2b"><rect x="50" y="83.6" width="3" height="1.4" rx=".7"/><rect x="54" y="84.2" width="3" height="1.4" rx=".7" transform="rotate(20 55.5 85)"/><rect x="58" y="83.4" width="3" height="1.4" rx=".7"/><rect x="62" y="84" width="3" height="1.4" rx=".7" transform="rotate(-15 63.5 84.7)"/><rect x="66" y="83.6" width="3" height="1.4" rx=".7"/></g>
  <g class="embers"><circle cx="51" cy="84.6" r=".9"/><circle cx="55.5" cy="85.2" r="1"/><circle cx="59.5" cy="84.4" r=".9"/><circle cx="63.5" cy="85" r="1"/><circle cx="67.5" cy="84.6" r=".9"/></g>
  <circle class="igniter" cx="60" cy="88.5" r="1.8"/>
</g>
<path d="M36 60L50 46h8L36 70z" fill="#fff" opacity=".08"/>
<rect x="34" y="46" width="52" height="50" rx="5" fill="none" stroke="#000" stroke-opacity=".5"/>
<rect x="86.3" y="60" width="2.3" height="16" rx="1.1" fill="url(#ID-chrome)"/>
<rect x="34" y="104" width="52" height="12" rx="2" fill="#18191c" stroke="#3b4047" stroke-width=".6"/>
<rect x="52" y="108.5" width="16" height="3" rx="1.5" fill="#4a5058"/>
<path d="M36 120h48M36 122.5h48" stroke="#0b0c0e" stroke-width="1"/>
<g class="warm-air"><path d="M42 30q-2-3 0-6t0-6"/><path d="M54 30q-2-3 0-6t0-6"/><path d="M66 30q-2-3 0-6t0-6"/><path d="M78 30q-2-3 0-6t0-6"/></g>
</g>`;
