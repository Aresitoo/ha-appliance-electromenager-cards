SVG.fan = () => `
<defs>${DEFS}
<radialGradient id="ID-cage" cx=".5" cy=".5" r=".5"><stop offset=".82" stop-color="#cfe6f5" stop-opacity=".1"/><stop offset="1" stop-color="#cfe6f5" stop-opacity=".25"/></radialGradient>
<linearGradient id="ID-blade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bfe3f7" stop-opacity=".95"/><stop offset="1" stop-color="#6fa9cf" stop-opacity=".85"/></linearGradient></defs>
<ellipse cx="60" cy="128" rx="34" ry="4" fill="url(#ID-shadow)"/>
<g class="fn-air" fill="none" stroke-linecap="round"><path d="M22 40q-10 12 0 26"/><path d="M14 34q-14 18 0 38"/><path d="M98 40q10 12 0 26"/><path d="M106 34q14 18 0 38"/></g>
<ellipse cx="60" cy="122" rx="28" ry="6" fill="url(#ID-dark)"/>
<ellipse cx="60" cy="120" rx="27" ry="5.2" fill="#2a2f35"/>
<path d="M40 119.5q20-5 40 0" stroke="#fff" stroke-opacity=".15" stroke-width="1" fill="none"/>
<circle class="fn-led l1" cx="50" cy="121" r="1.3"/><circle class="fn-led l2" cx="56" cy="121.8" r="1.3"/><circle class="fn-led l3" cx="62" cy="121.8" r="1.3"/>
<circle cx="70" cy="121" r="1.9" fill="url(#ID-chrome)"/>
<rect x="57.5" y="80" width="5" height="40" rx="2" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".4"/>
<rect x="56.5" y="96" width="7" height="4" rx="1.5" fill="#59616b"/>
<g class="fn-head">
  <path d="M52 78h16l-2 8h-12z" fill="url(#ID-dark)"/>
  <ellipse cx="60" cy="52" rx="13" ry="11" fill="url(#ID-dark)"/>
  <circle cx="60" cy="52" r="35" fill="url(#ID-cage)" stroke="#d7dce1" stroke-width="1.6"/>
  <g class="fn-blades">
    <path d="M60 52q-6-16 2-28q12 6 2 28z" fill="url(#ID-blade)"/>
    <path d="M60 52q-6-16 2-28q12 6 2 28z" fill="url(#ID-blade)" transform="rotate(72 60 52)"/>
    <path d="M60 52q-6-16 2-28q12 6 2 28z" fill="url(#ID-blade)" transform="rotate(144 60 52)"/>
    <path d="M60 52q-6-16 2-28q12 6 2 28z" fill="url(#ID-blade)" transform="rotate(216 60 52)"/>
    <path d="M60 52q-6-16 2-28q12 6 2 28z" fill="url(#ID-blade)" transform="rotate(288 60 52)"/>
  </g>
  <circle class="fn-blur" cx="60" cy="52" r="30" fill="#bfe3f7"/>
  <g fill="none" stroke="#e6eaee" stroke-opacity=".75" stroke-width=".6">
    <circle cx="60" cy="52" r="10"/><circle cx="60" cy="52" r="18"/><circle cx="60" cy="52" r="26"/>
    <path d="M60 17v70M25 52h70M35.3 27.3l49.4 49.4M84.7 27.3l-49.4 49.4M46.6 19.7l26.8 64.6M73.4 19.7l-26.8 64.6M27.7 38.6l64.6 26.8M92.3 38.6l-64.6 26.8"/>
  </g>
  <circle cx="60" cy="52" r="6" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".5"/>
  <circle cx="60" cy="52" r="2.2" fill="#38a3d6"/>
  <path d="M34 34a35 35 0 0 1 22-15" stroke="#fff" stroke-opacity=".6" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <g class="fn-ribbon"><path d="M93 44q8 2 12 -2q-4 6 -12 6z" fill="#ff7a59"/></g>
</g>`;
