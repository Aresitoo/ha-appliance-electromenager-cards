SVG.solar = () => `
<defs>${DEFS}
<clipPath id="ID-pan"><path d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z"/></clipPath>
<linearGradient id="ID-cell" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#132a52"/><stop offset=".55" stop-color="#1f4683"/><stop offset="1" stop-color="#3a6fb8"/></linearGradient>
<linearGradient id="ID-rail" x1="0" x2="1"><stop offset="0" stop-color="#8d959e"/><stop offset=".5" stop-color="#e3e7eb"/><stop offset="1" stop-color="#7d858e"/></linearGradient>
<linearGradient id="ID-sweep" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<radialGradient id="ID-sunglow"><stop offset="0" stop-color="#fff6c2" stop-opacity=".9"/><stop offset=".5" stop-color="#ffd23f" stop-opacity=".35"/><stop offset="1" stop-color="#ffd23f" stop-opacity="0"/></radialGradient></defs>
<g class="sunwrap">
    <circle cx="98" cy="20" r="22" fill="url(#ID-sunglow)"/>
    <g class="rays"><path d="M98 4v5M98 31v5M82 20h5M109 20h5M86.7 8.7l3.5 3.5M105.8 27.8l3.5 3.5M86.7 31.3l3.5-3.5M105.8 12.2l3.5-3.5" stroke="#ffc51a" stroke-width="2.2" stroke-linecap="round"/></g>
    <circle cx="98" cy="20" r="8" fill="#ffd23f" stroke="#ffb400" stroke-width="1"/>
  </g>
<ellipse cx="46" cy="113" rx="40" ry="3.5" fill="url(#ID-shadow)"/>
<!-- rear legs and braces (behind the panels) -->
<rect x="24" y="52" width="3" height="58" fill="url(#ID-rail)"/>
<rect x="84" y="52" width="3" height="58" fill="url(#ID-rail)"/>
<path d="M26 104L84 78M26 80L84 104" stroke="#9aa3ad" stroke-width="1.2"/>
<path d="M26 92L12 104M86 92L72 104" stroke="#9aa3ad" stroke-width="1.2"/>
<!-- front legs -->
<rect x="9" y="92" width="2.6" height="18" fill="url(#ID-rail)"/>
<rect x="69" y="92" width="2.6" height="18" fill="url(#ID-rail)"/>
<!-- concrete blocks -->
<rect x="5.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="65.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="20.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="80.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<!-- panels -->
<path d="M6.0 94.0L76.0 94.0L90.0 50.0L20.0 50.0Z" fill="#c9d1da" stroke="#8d959e" stroke-width=".8" stroke-linejoin="round"/>
<path d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z" fill="url(#ID-cell)" stroke="#dfe5ea" stroke-width="1" stroke-linejoin="round"/>
<path d="M9.4 86.1L42.7 86.1M11.6 79.0L44.9 79.0M13.8 72.0L47.2 72.0M16.1 65.0L49.4 65.0M18.3 57.9L51.6 57.9M15.4 93.1L28.9 50.9M23.8 93.1L37.2 50.9M32.1 93.1L45.5 50.9M44.4 86.1L77.7 86.1M46.6 79.0L79.9 79.0M48.8 72.0L82.2 72.0M51.1 65.0L84.4 65.0M53.3 57.9L86.6 57.9M50.5 93.1L63.9 50.9M58.8 93.1L72.2 50.9M67.1 93.1L80.5 50.9" stroke="#6f97d4" stroke-width=".35" opacity=".85"/>
<g clip-path="url(#ID-pan)"><rect class="sweep" x="-20" y="44" width="24" height="54" fill="url(#ID-sweep)" transform="skewX(-18)"/></g>
<path class="panglow" d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z" fill="#ffe28a"/>
<path class="panshade" d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z" fill="#0b1630"/>
<!-- cable to inverter -->
<path d="M70 92V106H101V98" fill="none" stroke="#2b2f34" stroke-width="1.6" stroke-linejoin="round"/>
<path class="sflow" d="M70 92V106H101V98"/>
<!-- inverter on its post -->
<rect x="100" y="94" width="3" height="16" fill="url(#ID-rail)"/>
<rect x="97" y="108" width="9" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="91" y="64" width="22" height="32" rx="2.5" fill="#e7eaee" stroke="#9aa3ad" stroke-width=".6"/>
<rect x="91" y="64" width="22" height="4.5" rx="2" fill="#cfd5db"/>
<path d="M94 88h16M94 90.5h16M94 93h16" stroke="#b3bac2" stroke-width=".6"/>
${lcd(93, 71, 18, 8)}
<circle class="led l1" cx="96" cy="83" r="1.3"/>
<path d="M104 80l-2 4h3l-2 4" stroke="#ffb400" stroke-width=".9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;
