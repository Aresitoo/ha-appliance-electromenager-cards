SVG.fridge = () => `
<defs>${DEFS}
<linearGradient id="ID-in" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe9f2"/></linearGradient>
<linearGradient id="ID-frost" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9f6ff"/><stop offset="1" stop-color="#bfe0f5"/></linearGradient></defs>
<ellipse cx="60" cy="134" rx="40" ry="4.5" fill="url(#ID-shadow)"/>
<rect x="26" y="4" width="68" height="126" rx="6" fill="#9aa2ab"/>
<!-- interiors -->
<rect x="29" y="7" width="62" height="36" rx="3" fill="url(#ID-frost)"/>
<path d="M31 25h58" stroke="#a9cbe2" stroke-width="1"/>
<rect x="34" y="28" width="22" height="11" rx="2" fill="#d9eefb" stroke="#a9cbe2" stroke-width=".6"/>
<rect x="60" y="28" width="26" height="11" rx="2" fill="#d9eefb" stroke="#a9cbe2" stroke-width=".6"/>
<rect x="29" y="47" width="62" height="78" rx="3" fill="url(#ID-in)"/>
<path d="M31 72h58M31 96h58" stroke="#b9c8d6" stroke-width="1.1"/>
<rect x="36" y="58" width="6" height="14" rx="1.5" fill="#3fbf7f"/><rect x="44" y="62" width="8" height="10" rx="2" fill="#f2c94c"/>
<rect x="56" y="64" width="12" height="8" rx="2" fill="#e5484d"/><rect x="72" y="60" width="5" height="12" rx="1.5" fill="#3e8ed0"/>
<rect x="38" y="86" width="14" height="10" rx="2" fill="#ffffff" stroke="#c9d3dc" stroke-width=".6"/><circle cx="64" cy="91" r="5" fill="#ff8f3d"/><circle cx="74" cy="92" r="4" fill="#9fd356"/>
<rect x="32" y="104" width="56" height="18" rx="2" fill="#e3eef7" stroke="#b9c8d6" stroke-width=".6"/>
<rect class="flight" x="29" y="47" width="62" height="78" fill="#fffbe6" opacity="0"/>
<!-- doors -->
<g class="fz-door">
  <rect x="26" y="4" width="68" height="40" rx="6" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".7"/>
  <rect x="84" y="12" width="3.4" height="24" rx="1.7" fill="url(#ID-chrome)" stroke="#6f7781" stroke-width=".4"/>
</g>
<g class="fr-door">
  <rect x="26" y="46" width="68" height="84" rx="6" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".7"/>
  <rect x="84" y="52" width="3.4" height="40" rx="1.7" fill="url(#ID-chrome)" stroke="#6f7781" stroke-width=".4"/>
  <rect x="35" y="54" width="24" height="12" rx="2" fill="#0c1720" stroke="#7d868f" stroke-width=".5"/>
  <text class="lcd fr-temp" x="49.5" y="62.8" text-anchor="middle">--°</text>
  <g class="flake"><path d="M39.5 57v6M36.9 58.5l5.2 3M36.9 61.5l5.2-3" stroke-width=".8" stroke-linecap="round"/></g>
  <path d="M30 50v76" stroke="#fff" stroke-opacity=".55" stroke-width="2"/>
</g>
<g class="mist"><circle cx="40" cy="132" r="1.1"/><circle cx="52" cy="133" r=".9"/><circle cx="66" cy="132" r="1.2"/><circle cx="79" cy="133" r=".9"/></g>`;
