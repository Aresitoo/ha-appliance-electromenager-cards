SVG.printer_3d = () => `
<defs>${DEFS}
<clipPath id="ID-obj"><rect class="objclip" x="40" y="66" width="40" height="38"/></clipPath>
<linearGradient id="ID-frame" x1="0" x2="1"><stop offset="0" stop-color="#2a2e33"/><stop offset=".5" stop-color="#4a5058"/><stop offset="1" stop-color="#23272b"/></linearGradient>
<linearGradient id="ID-alu" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1f3f5"/><stop offset=".5" stop-color="#b9c0c7"/><stop offset="1" stop-color="#8d959e"/></linearGradient>
<linearGradient id="ID-pei" x1="0" x2="1"><stop offset="0" stop-color="#3a3326"/><stop offset=".5" stop-color="#6b5a3a"/><stop offset="1" stop-color="#3a3326"/></linearGradient>
<linearGradient id="ID-fil" x1="0" x2="1"><stop offset="0" style="stop-color:var(--fil)" stop-opacity=".75"/><stop offset=".45" style="stop-color:var(--fil)"/><stop offset="1" style="stop-color:var(--fil)" stop-opacity=".7"/></linearGradient>
<pattern id="ID-layers" width="4" height="1.3" patternUnits="userSpaceOnUse"><rect width="4" height=".55" fill="#000" opacity=".18"/></pattern></defs>
<ellipse cx="60" cy="133" rx="50" ry="4.5" fill="url(#ID-shadow)"/>
<g class="spool">
  <circle cx="97" cy="20" r="11" fill="#1f2226" stroke="#3b4047" stroke-width=".6"/>
  <circle cx="97" cy="20" r="9" style="fill:var(--fil)"/>
  <circle cx="97" cy="20" r="9" fill="none" stroke="#000" stroke-opacity=".22" stroke-width="2.6" stroke-dasharray=".8 1.2"/>
  <circle cx="97" cy="20" r="4" fill="#2b2f34" stroke="#555b63" stroke-width=".6"/>
  <circle cx="97" cy="20" r="1.6" fill="#8d959e"/>
  <path d="M93 16.5l2 2M101 16.5l-2 2M93 23.5l2-2M101 23.5l-2-2" stroke="#555b63" stroke-width=".8"/>
</g>
<rect x="94" y="32" width="6" height="10" rx="1.5" fill="url(#ID-frame)"/>
<rect x="17" y="16" width="10" height="100" rx="2.5" fill="url(#ID-frame)"/>
<rect x="15.5" y="13" width="13" height="5" rx="2" fill="#33373d"/>
<rect x="20.8" y="20" width="2.4" height="92" rx="1.2" fill="url(#ID-alu)" opacity=".85"/>
<rect x="10" y="112" width="100" height="16" rx="4" fill="url(#ID-frame)" stroke="#16181b" stroke-width=".6"/>
<rect x="12" y="113" width="96" height="1.6" rx=".8" fill="#fff" opacity=".12"/>
${lcd(78, 116, 26, 9)}
<circle class="led l1" cx="72" cy="120.5" r="1.4"/>
<rect x="32" y="108" width="56" height="4" rx="1" fill="#5d646c"/>
<g class="bedheat"><path d="M40 101q-2-3 0-6t0-6"/><path d="M54 101q-2-3 0-6t0-6"/><path d="M66 101q-2-3 0-6t0-6"/><path d="M80 101q-2-3 0-6t0-6"/></g>
<rect x="30" y="104" width="60" height="4.5" rx="1" fill="url(#ID-pei)" stroke="#1c1a15" stroke-width=".5"/>
<g clip-path="url(#ID-obj)"><g class="object">
  <path d="M49 104C47 96 45 88 48 80C50 74 52 70 52 66H68C68 70 70 74 72 80C75 88 73 96 71 104Z" fill="url(#ID-fil)"/>
  <path d="M49 104C47 96 45 88 48 80C50 74 52 70 52 66H68C68 70 70 74 72 80C75 88 73 96 71 104Z" fill="url(#ID-layers)"/>
  <path d="M53 101C52 94 51 88 53 82" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" fill="none" stroke-linecap="round"/>
</g></g>
<g class="gantry">
  <rect x="22" y="82" width="76" height="5" rx="1.5" fill="url(#ID-alu)" stroke="#7d858e" stroke-width=".4"/>
  <rect x="94" y="80" width="6" height="9" rx="1.5" fill="url(#ID-frame)"/>
  <g class="head">
    <rect x="51" y="78" width="18" height="21" rx="3" fill="#ececec" stroke="#a7afb7" stroke-width=".6"/>
    <rect x="51" y="78" width="18" height="5" rx="2" fill="#2b2f34"/>
    <circle cx="60" cy="90" r="4.2" fill="#2b2f34"/>
    <g class="hfan"><path d="M60 90l0-3.4M60 90l2.9 1.7M60 90l-2.9 1.7" stroke="#8d959e" stroke-width="1.3" stroke-linecap="round"/></g>
    <path d="M57.5 99h5l-1.6 4h-1.8z" fill="#c9a43a" stroke="#8a6d1f" stroke-width=".4"/>
    <path d="M69 81q12-4 25-30" fill="none" stroke="#e9ecef" stroke-opacity=".75" stroke-width="1.6" stroke-linecap="round"/>
    <circle class="tip" cx="60" cy="103.4" r="1.2"/>
    <rect class="filpath" x="59.2" y="70" width="1.6" height="8" style="fill:var(--fil)"/>
  </g>
</g>`;
