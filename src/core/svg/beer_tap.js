SVG.beer_tap = () => `
<defs>${DEFS}<clipPath id="ID-gl"><path d="M85 80h26l-2.4 36q-.2 2-2.2 2h-17.2q-2 0-2.2-2z"/></clipPath><clipPath id="ID-kw"><rect x="26" y="70" width="40" height="34" rx="4"/></clipPath>
<linearGradient id="ID-beer" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7c948"/><stop offset="1" stop-color="#d8891c"/></linearGradient>
<linearGradient id="ID-glassb" x1="0" x2="1"><stop offset="0" stop-color="#ffffff" stop-opacity=".35"/><stop offset=".3" stop-color="#ffffff" stop-opacity=".08"/><stop offset="1" stop-color="#dfe9f2" stop-opacity=".3"/></linearGradient></defs>
<ellipse cx="60" cy="128" rx="54" ry="4.5" fill="url(#ID-shadow)"/>
<g class="bt-mist"><circle cx="16" cy="70" r="3"/><circle cx="14" cy="88" r="2.6"/><circle cx="18" cy="104" r="3.2"/></g>
<rect x="12" y="44" width="68" height="78" rx="10" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<path d="M16 48h60" stroke="#fff" stroke-opacity=".15" stroke-width="1.2" stroke-linecap="round"/>
${lcd(28, 52, 36, 11)}
<g class="bt-flake" stroke="#6fd8ff" stroke-width=".8" stroke-linecap="round"><path d="M22 54.5v6M19.4 56l5.2 3M19.4 59l5.2-3"/></g>
<rect x="24" y="68" width="44" height="38" rx="5" fill="#15181b" stroke="#3a424b" stroke-width=".6"/>
<g clip-path="url(#ID-kw)">
  <rect x="30" y="70" width="32" height="40" rx="3" fill="url(#ID-inox)"/>
  <path d="M30 78h32M30 98h32" stroke="#8f979f" stroke-width="1.2"/>
  <rect x="58" y="72" width="3" height="32" rx="1.5" fill="#2a2f35"/>
  <g class="bt-keg"><rect x="58" y="72" width="3" height="32" rx="1.5" fill="url(#ID-beer)"/></g>
</g>
<path d="M26 70L40 70L26 86z" fill="#fff" opacity=".08"/>
<rect x="76" y="114" width="40" height="7" rx="2" fill="url(#ID-chrome)" stroke="#6f7780" stroke-width=".5"/>
<rect x="79" y="114.5" width="34" height="2" fill="url(#ID-mesh)"/>
<path d="M40 44v-26q0-8 8-8h40q8 0 8 8v10" fill="none" stroke="url(#ID-chrome)" stroke-width="7" stroke-linecap="round"/>
<path d="M40 44v-26q0-8 8-8h40q8 0 8 8v10" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.2" stroke-linecap="round"/>
<rect x="93" y="27" width="6" height="7" rx="1.5" fill="#8f979f"/>
<g class="bt-handle"><rect x="61" y="-6" width="9" height="16" rx="3" fill="#1d2126" stroke="#000" stroke-width=".5"/><rect x="63" y="-4" width="2" height="12" rx="1" fill="#fff" opacity=".2"/></g>
<rect x="60" y="8" width="11" height="4" rx="1.5" fill="url(#ID-chrome)"/>
<path class="bt-stream" d="M96 34v46"/>
<g clip-path="url(#ID-gl)">
  <g class="bt-beer"><rect x="84" y="80" width="28" height="40" fill="url(#ID-beer)"/><rect x="84" y="80" width="28" height="6" fill="#fff8e6"/></g>
  <g class="bt-bubbles" fill="#fff6c8"><circle cx="92" cy="114" r=".8"/><circle cx="99" cy="116" r=".7"/><circle cx="104" cy="113" r=".9"/><circle cx="95" cy="110" r=".6"/></g>
</g>
<path d="M85 80h26l-2.4 36q-.2 2-2.2 2h-17.2q-2 0-2.2-2z" fill="url(#ID-glassb)" stroke="#d6e2ec" stroke-opacity=".8" stroke-width=".7"/>
<path d="M88 84l1.6 28" stroke="#fff" stroke-opacity=".55" stroke-width="1.2" stroke-linecap="round"/>
<g class="bt-drops" fill="#cfe9ff"><circle cx="87.5" cy="92" r=".7"/><circle cx="108.5" cy="98" r=".7"/><circle cx="90" cy="104" r=".6"/></g>`;
