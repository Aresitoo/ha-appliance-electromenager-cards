SVG.pool_pump = () => `
<defs>${DEFS}
<clipPath id="ID-win"><rect x="22" y="52" width="16" height="32" rx="3"/></clipPath>
<clipPath id="ID-pool"><rect x="0" y="113" width="120" height="27"/></clipPath>
<linearGradient id="ID-motor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f86d8"/><stop offset=".35" stop-color="#6fb0f0"/><stop offset=".6" stop-color="#2f6fbf"/><stop offset="1" stop-color="#174a85"/></linearGradient>
<linearGradient id="ID-grey" x1="0" x2="1"><stop offset="0" stop-color="#b9c0c7"/><stop offset=".45" stop-color="#eef1f4"/><stop offset="1" stop-color="#a3abb4"/></linearGradient>
<linearGradient id="ID-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fd0ff"/><stop offset="1" stop-color="#0a6fb8"/></linearGradient>
<linearGradient id="ID-pot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fdcff" stop-opacity=".55"/><stop offset="1" stop-color="#1b88d0" stop-opacity=".85"/></linearGradient></defs>
<rect x="0" y="113" width="120" height="27" fill="url(#ID-water)"/>
<g clip-path="url(#ID-pool)">
  <path d="M0 117h120" stroke="#1d6fa8" stroke-width="2.2" stroke-dasharray="3 1"/>
  <g class="ripple"><path d="M-30 124q5-2 10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width=".9"/>
  <path d="M-25 132q5-2 10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width=".9"/></g>
  <g class="bubbles"><circle cx="108" cy="125" r="1.2"/><circle cx="104" cy="123" r=".9"/><circle cx="106" cy="128" r="1"/><circle cx="101" cy="126" r=".8"/></g>
</g>
<rect x="0" y="108" width="120" height="5.5" fill="#d8d0bf"/>
<path d="M20 108v5.5M44 108v5.5M68 108v5.5M92 108v5.5" stroke="#b7ad98" stroke-width=".6"/>
<rect x="10" y="100" width="100" height="8" fill="#c4bfb4"/><rect x="10" y="100" width="100" height="1.5" fill="#d6d2c8"/>
<g class="pipes">
  <path d="M6 126V72H18" fill="none" stroke="#9aa3ad" stroke-width="8" stroke-linejoin="round"/>
  <path d="M6 126V72H18" fill="none" stroke="#f1f3f5" stroke-width="6" stroke-linejoin="round"/>
  <path d="M52 62V26H112V126" fill="none" stroke="#9aa3ad" stroke-width="8" stroke-linejoin="round"/>
  <path d="M52 62V26H112V126" fill="none" stroke="#f1f3f5" stroke-width="6" stroke-linejoin="round"/>
  <path class="flow" d="M6 126V72H18"/>
  <path class="flow" d="M52 62V26H112V124"/>
  <rect x="2" y="90" width="8" height="5" rx="1" fill="#d5dade" stroke="#9aa3ad" stroke-width=".5"/>
  <rect x="48" y="38" width="8" height="5" rx="1" fill="#d5dade" stroke="#9aa3ad" stroke-width=".5"/>
</g>
<g class="hum">
<rect x="46" y="92" width="56" height="8" rx="1.5" fill="#3a3f45"/>
<rect x="18" y="44" width="24" height="48" rx="4" fill="url(#ID-grey)" stroke="#8f979f" stroke-width=".6"/>
<rect x="16" y="35" width="28" height="9" rx="2.5" fill="#2b3036"/>
<rect x="19" y="36.5" width="22" height="3" rx="1.5" fill="#cfe9ff" opacity=".55"/>
<rect x="22" y="52" width="16" height="32" rx="3" fill="url(#ID-pot)"/>
<g clip-path="url(#ID-win)">
  <path d="M23 58h14M23 64h14M23 70h14M23 76h14M26 52v32M30 52v32M34 52v32" stroke="#ffffff" stroke-opacity=".35" stroke-width=".5"/>
  <g class="swirl">
    <path d="M30 68m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0" fill="none" stroke="#ffffff" stroke-opacity=".55" stroke-width=".8" stroke-dasharray="4 3"/>
    <path d="M27 63q2-2 4 0q-2 1.5-4 0z" fill="#5c9a34"/><path d="M32 72q2-2 4 0q-2 1.5-4 0z" fill="#8a6a2b"/><path d="M26 74q1.5-2 3.5 0q-1.5 1.5-3.5 0z" fill="#4f8a2a"/>
  </g>
</g>
<rect x="22" y="52" width="16" height="32" rx="3" fill="none" stroke="#6f7881" stroke-width=".6"/>
<circle cx="52" cy="74" r="13" fill="url(#ID-grey)" stroke="#8f979f" stroke-width=".6"/>
<circle cx="52" cy="74" r="8" fill="none" stroke="#a7afb7" stroke-width=".7"/>
<rect x="60" y="56" width="42" height="36" rx="6" fill="url(#ID-motor)"/>
<path d="M65 58v32M69 58v32M73 58v32M77 58v32M81 58v32M85 58v32M89 58v32M93 58v32M97 58v32" stroke="#123a6a" stroke-opacity=".45" stroke-width=".9"/>
<rect x="64" y="45" width="32" height="11" rx="2" fill="#1d2126" stroke="#40464e" stroke-width=".5"/>
${lcd(66, 46.5, 24, 8)}
<circle class="led l1" cx="93" cy="50.5" r="1.3"/>
<rect x="99" y="58" width="10" height="32" rx="3" fill="url(#ID-grey)" stroke="#8f979f" stroke-width=".6"/>
<g class="fan"><path d="M104 74l-3.5-5.5M104 74l6-1M104 74l-2.5 6" stroke="#5b636c" stroke-width="2" stroke-linecap="round"/></g>
<path d="M100.5 63h7M100.5 67h7M100.5 71h7M100.5 75h7M100.5 79h7M100.5 83h7" stroke="#6f7881" stroke-width=".9"/>
<path d="M64 60q10-3 34 0" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" fill="none"/>
</g>`;
