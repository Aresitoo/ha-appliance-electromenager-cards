SVG.av_receiver = () => `
<defs>${DEFS}
<linearGradient id="ID-avb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a4048"/><stop offset=".15" stop-color="#1d2126"/><stop offset="1" stop-color="#0d0f12"/></linearGradient>
<radialGradient id="ID-ring" cx=".5" cy=".5" r=".5"><stop offset=".7" stop-color="#38d9ff" stop-opacity="0"/><stop offset=".85" stop-color="#38d9ff" stop-opacity=".9"/><stop offset="1" stop-color="#38d9ff" stop-opacity="0"/></radialGradient></defs>
<ellipse cx="60" cy="104" rx="58" ry="4" fill="url(#ID-shadow)"/>
<g class="av-notes" fill="#9fd3f0"><path d="M30 44v-9l6-2v9"/><circle cx="29" cy="44" r="1.8"/><circle cx="35" cy="42" r="1.8"/><path d="M60 40v-8"/><circle cx="59" cy="40" r="1.8"/><path d="M60 32l4 1.5" stroke="#9fd3f0" stroke-width="1"/><path d="M88 44v-9l6-2v9"/><circle cx="87" cy="44" r="1.8"/><circle cx="93" cy="42" r="1.8"/></g>
<g class="av-waves" fill="none" stroke-linecap="round"><path d="M2 64q-4 8 0 16"/><path d="M-3 60q-6 12 0 24"/><path d="M118 64q4 8 0 16"/><path d="M123 60q6 12 0 24"/></g>
<rect x="10" y="96" width="12" height="5" rx="1.5" fill="#15181b"/><rect x="98" y="96" width="12" height="5" rx="1.5" fill="#15181b"/>
<rect x="4" y="52" width="112" height="45" rx="3.5" fill="url(#ID-avb)" stroke="#000" stroke-width=".6"/>
<path d="M6 54.5h108" stroke="#fff" stroke-opacity=".18" stroke-width="1"/>
<path d="M6 92h108" stroke="#2c3138" stroke-width=".8"/>
<circle class="av-pwr" cx="14" cy="62" r="1.4"/>
<circle cx="16" cy="78" r="6.5" fill="url(#ID-chrome)" stroke="#2a2f35" stroke-width=".6"/>
<circle cx="16" cy="78" r="4.4" fill="#2a2f35"/><path d="M16 78l0-3.6" stroke="#cfd6dd" stroke-width="1" stroke-linecap="round"/>
<rect x="30" y="58" width="52" height="14" rx="2" fill="#071016" stroke="#2c3138" stroke-width=".6"/>
<text class="lcd av-lcd" x="56" y="67.4" text-anchor="middle">OFF</text>
<g class="av-eq">
  <rect x="33" y="76" width="3.2" height="12" rx=".6"/><rect x="38" y="76" width="3.2" height="12" rx=".6"/><rect x="43" y="76" width="3.2" height="12" rx=".6"/>
  <rect x="48" y="76" width="3.2" height="12" rx=".6"/><rect x="53" y="76" width="3.2" height="12" rx=".6"/><rect x="58" y="76" width="3.2" height="12" rx=".6"/>
  <rect x="63" y="76" width="3.2" height="12" rx=".6"/><rect x="68" y="76" width="3.2" height="12" rx=".6"/><rect x="73" y="76" width="3.2" height="12" rx=".6"/>
  <rect x="78" y="76" width="3.2" height="12" rx=".6"/>
</g>
<circle class="av-ring" cx="99" cy="74" r="16" fill="url(#ID-ring)"/>
<circle cx="99" cy="74" r="12.5" fill="url(#ID-chrome)" stroke="#2a2f35" stroke-width=".7"/>
<circle cx="99" cy="74" r="10" fill="url(#ID-steel)"/>
<g class="av-knob"><circle cx="99" cy="66.5" r="1.1" fill="#2a2f35"/></g>
<path d="M92 68a10 10 0 0 1 8-4" stroke="#fff" stroke-opacity=".7" stroke-width="1.2" fill="none" stroke-linecap="round"/>`;
