SVG.towel_dryer = () => `
<defs>${DEFS}
<linearGradient id="ID-tdglow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb877"/><stop offset="1" stop-color="#ff6a1f"/></linearGradient>
<linearGradient id="ID-tdtowel" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2f9fb3"/><stop offset=".5" stop-color="#58c3d4"/><stop offset="1" stop-color="#2a8ea1"/></linearGradient>
<linearGradient id="ID-tdwall" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7a828b" stop-opacity=".16"/><stop offset="1" stop-color="#7a828b" stop-opacity="0"/></linearGradient></defs>
<rect x="14" y="10" width="92" height="116" rx="6" fill="url(#ID-tdwall)"/>
<g class="td-heat"><path d="M44 112q-4-20 2-44t-2-44"/><path d="M60 112q4-20-2-44t2-44"/><path d="M76 112q-4-20 2-44t-2-44"/></g>
<rect x="22" y="16" width="9" height="106" rx="4.5" fill="#000" opacity=".12"/>
<rect x="89" y="16" width="9" height="106" rx="4.5" fill="#000" opacity=".12"/>
<path d="M44 55h32v22h-32z" fill="#237a8b"/>
<g class="td-bars">
  <rect x="29" y="22" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="38" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="54" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="70" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="86" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
  <rect x="29" y="102" width="62" height="5" rx="2.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".5"/>
</g>
<g class="td-glow" fill="url(#ID-tdglow)">
  <rect x="29" y="22" width="62" height="5" rx="2.5"/><rect x="29" y="38" width="62" height="5" rx="2.5"/><rect x="29" y="54" width="62" height="5" rx="2.5"/>
  <rect x="29" y="70" width="62" height="5" rx="2.5"/><rect x="29" y="86" width="62" height="5" rx="2.5"/><rect x="29" y="102" width="62" height="5" rx="2.5"/>
  <rect x="20" y="14" width="9" height="106" rx="4.5"/><rect x="91" y="14" width="9" height="106" rx="4.5"/>
</g>
<path d="M29 23.2h62M29 39.2h62M29 55.2h62M29 71.2h62M29 87.2h62M29 103.2h62" stroke="#fff" stroke-opacity=".85" stroke-width="1"/>
<rect x="20" y="14" width="9" height="106" rx="4.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".6"/>
<rect x="91" y="14" width="9" height="106" rx="4.5" fill="url(#ID-body)" stroke="#aeb6be" stroke-width=".6"/>
<path d="M22.5 18v98M93.5 18v98" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity=".9"/>
<g class="td-glow td-glow2" fill="url(#ID-tdglow)"><rect x="20" y="14" width="9" height="106" rx="4.5"/><rect x="91" y="14" width="9" height="106" rx="4.5"/></g>
<g class="td-towel">
  <path d="M42 56h36v30q-3 3-6 0q-3 3-6 0q-3 3-6 0q-3 3-6 0q-3 3-6 0q-3 3-3 0z" fill="url(#ID-tdtowel)"/>
  <path d="M42 80h36v3h-36z" fill="#e8f7fa" opacity=".9"/>
  <path d="M42 56h36v3h-36z" fill="#1f7384" opacity=".5"/>
  <path d="M50 59v20M60 59v20M70 59v20" stroke="#1f7384" stroke-opacity=".25" stroke-width="1"/>
</g>
<g class="td-towel td-towel2">
  <path d="M63 88h20v12q-3 2-5 0q-3 2-5 0q-3 2-5 0q-3 2-5 0z" fill="#f2a6b8"/>
  <path d="M63 96h20v2h-20z" fill="#fff" opacity=".7"/>
</g>
<g class="td-steam"><path d="M48 52q-3-4 0-8t0-8"/><path d="M60 50q-3-4 0-8t0-8"/><path d="M72 52q-3-4 0-8t0-8"/></g>
<rect x="18" y="120" width="13" height="5" rx="1.5" fill="#3a3f45"/><rect x="89" y="120" width="13" height="5" rx="1.5" fill="#3a3f45"/>
<rect x="70" y="108" width="36" height="14" rx="3" fill="url(#ID-dark)" stroke="#8f98a2" stroke-width=".6"/>
${lcd(74, 110, 22, 10)}
<circle class="td-led" cx="101" cy="115" r="1.4"/>
<ellipse cx="60" cy="132" rx="46" ry="3" fill="url(#ID-shadow)"/>`;
