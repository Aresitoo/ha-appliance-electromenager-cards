SVG.hob = () => `
<defs>${DEFS}
<clipPath id="ID-all"><rect x="0" y="0" width="120" height="140" rx="12"/></clipPath>
<linearGradient id="ID-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2d31"/><stop offset="1" stop-color="#0d0e10"/></linearGradient>
<linearGradient id="ID-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9c4a3"/><stop offset="1" stop-color="#b89a73"/></linearGradient>
<radialGradient id="ID-hot"><stop offset="0" stop-color="#ffb347"/><stop offset=".45" stop-color="#ff4a1f"/><stop offset="1" stop-color="#8a1205" stop-opacity=".25"/></radialGradient>
<linearGradient id="ID-pot" x1="0" x2="1"><stop offset="0" stop-color="#8d959e"/><stop offset=".3" stop-color="#f1f3f5"/><stop offset=".6" stop-color="#c3c9cf"/><stop offset="1" stop-color="#7d858e"/></linearGradient></defs>
<ellipse cx="60" cy="125" rx="50" ry="4" fill="url(#ID-shadow)"/>
<g transform="translate(-9 -24) scale(1.15)">
<path d="M12 122L108 122L97 60L23 60Z" fill="#8d959e"/>
<path d="M14 120L106 120L96 62L24 62Z" fill="url(#ID-glass)"/>
<g class="zone z1">
  <ellipse cx="40" cy="99" rx="18" ry="9.7" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="40" cy="99" rx="16" ry="8.5" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="40" cy="99" rx="13.1" ry="7.0"/><ellipse cx="40" cy="99" rx="9.3" ry="4.9"/><ellipse cx="40" cy="99" rx="5.4" ry="2.9"/></g>
  <ellipse cx="40" cy="99" rx="16" ry="8.5" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g><g class="zone z2">
  <ellipse cx="82" cy="99" rx="14" ry="7.7" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="82" cy="99" rx="12" ry="6.5" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="82" cy="99" rx="9.8" ry="5.3"/><ellipse cx="82" cy="99" rx="7.0" ry="3.8"/><ellipse cx="82" cy="99" rx="4.1" ry="2.2"/></g>
  <ellipse cx="82" cy="99" rx="12" ry="6.5" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g><g class="zone z3">
  <ellipse cx="44" cy="73" rx="13" ry="6.4" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="44" cy="73" rx="11" ry="5.2" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="44" cy="73" rx="9.0" ry="4.3"/><ellipse cx="44" cy="73" rx="6.4" ry="3.0"/><ellipse cx="44" cy="73" rx="3.7" ry="1.8"/></g>
  <ellipse cx="44" cy="73" rx="11" ry="5.2" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g><g class="zone z4">
  <ellipse cx="78" cy="73" rx="16" ry="7.7" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="78" cy="73" rx="14" ry="6.5" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="78" cy="73" rx="11.5" ry="5.3"/><ellipse cx="78" cy="73" rx="8.1" ry="3.8"/><ellipse cx="78" cy="73" rx="4.8" ry="2.2"/></g>
  <ellipse cx="78" cy="73" rx="14" ry="6.5" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g>
<path d="M30 63L58 63L22 118L16 118Z" fill="#fff" opacity=".05"/>
<path d="M18 109H102" stroke="#3b4047" stroke-width=".5"/>
<g class="digits">
  <text class="zd zd1" x="28" y="116.5" text-anchor="middle">0</text>
  <text class="zd zd3" x="44" y="116.5" text-anchor="middle">0</text>
  <text class="zd zd4" x="76" y="116.5" text-anchor="middle">0</text>
  <text class="zd zd2" x="92" y="116.5" text-anchor="middle">0</text>
</g>
<circle cx="60" cy="114.5" r="2.4" fill="none" stroke="#5a6068" stroke-width=".6"/><path d="M60 112.6v1.6" stroke="#5a6068" stroke-width=".6"/>
<path d="M51 114.5h3M66 114.5h3M67.5 113v3" stroke="#5a6068" stroke-width=".6"/>
<g class="pan">
  <path d="M90 66L104 52" stroke="#2b2f34" stroke-width="2.6" stroke-linecap="round"/>
  <ellipse cx="78" cy="71" rx="13" ry="6.2" fill="#2b2f34"/>
  <ellipse cx="78" cy="70" rx="11.5" ry="5.2" fill="#3b4047"/>
  <ellipse cx="76" cy="70" rx="5" ry="2.6" fill="#ffffff"/><ellipse cx="76.5" cy="69.8" rx="2" ry="1.2" fill="#f2b632"/>
  <g class="sizzle"><path d="M68 64l-1-3M74 62l0-3M84 62l1-3M89 65l2-2"/></g>
</g>
<g class="pot">
  <path d="M24 86l-10-2" stroke="#2b2f34" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M25 80V96Q25 101 40 101Q55 101 55 96V80Z" fill="url(#ID-pot)" stroke="#6f7781" stroke-width=".5"/>
  <ellipse cx="40" cy="96.5" rx="15" ry="4.5" fill="none" stroke="#6f7781" stroke-width=".4" opacity=".6"/>
  <g class="lid"><ellipse cx="40" cy="80" rx="15.5" ry="4.6" fill="#d7dce1" stroke="#7d858e" stroke-width=".6"/>
  <ellipse cx="40" cy="79.4" rx="11" ry="3" fill="#eef1f4"/>
  <rect x="37.5" y="75" width="5" height="3.4" rx="1.4" fill="#2b2f34"/></g>
  <g class="steam-pot"><path d="M34 72q-3-5 0-10t0-10"/><path d="M41 70q-3-5 0-10t0-10"/><path d="M48 72q-3-5 0-10t0-10"/></g>
</g></g>`;
