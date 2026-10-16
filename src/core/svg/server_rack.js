SVG.server_rack = () => `
<defs>${DEFS}
<linearGradient id="ID-rkframe" x1="0" x2="1"><stop offset="0" stop-color="#2a2f35"/><stop offset=".5" stop-color="#14171b"/><stop offset="1" stop-color="#262b31"/></linearGradient>
<linearGradient id="ID-rkunit" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b424a"/><stop offset=".15" stop-color="#262b31"/><stop offset="1" stop-color="#16191d"/></linearGradient>
<linearGradient id="ID-rkblue" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b9cff" stop-opacity=".5"/><stop offset="1" stop-color="#3b9cff" stop-opacity="0"/></linearGradient></defs>
<ellipse cx="60" cy="135" rx="50" ry="3.5" fill="url(#ID-shadow)"/>
<rect x="16" y="4" width="88" height="126" rx="3" fill="url(#ID-rkframe)" stroke="#4a525a" stroke-width=".8"/>
<rect x="22" y="10" width="76" height="114" fill="#07090b"/>
<path d="M19 12v110M101 12v110" stroke="#556068" stroke-width=".6" stroke-dasharray="1.2 4.2"/>
<g class="rk-glow"><rect x="22" y="92" width="76" height="30" fill="url(#ID-rkblue)"/></g>
<rect x="24" y="12" width="72" height="7" rx="1" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<circle class="rk-led rk-g" cx="30" cy="15.5" r="1"/><circle class="rk-led rk-r" cx="35" cy="15.5" r="1"/>
<path d="M44 14h4M50 14h4M56 14h4M62 14h4M68 14h4M74 14h4M80 14h4M86 14h4" stroke="#7d858e" stroke-width="1.4"/>
<path d="M44 17.2h46" stroke="#59616b" stroke-width=".5"/>
<rect x="24" y="30" width="72" height="1" fill="#2b3138"/>
<rect x="46" y="22" width="28" height="8" rx="1.6" fill="#d7dce1" stroke="#9aa2ab" stroke-width=".4"/>
<circle class="rk-led rk-g" cx="52" cy="26" r="1"/><circle class="rk-led rk-g" cx="57" cy="26" r="1" style="animation-delay:.4s"/><circle class="rk-led rk-b" cx="62" cy="26" r="1" style="animation-delay:.9s"/>
<rect x="24" y="32" width="72" height="14" rx="1" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<rect x="26" y="33.6" width="24" height="3.2" rx=".8" fill="#e9ecef"/>
<path d="M30 40h40M30 42.4h40M30 44.8h40" stroke="#080a0d" stroke-width="1.2" stroke-linecap="round" opacity=".9"/>
<circle class="rk-led rk-g" cx="84" cy="36.5" r="1"/><circle class="rk-led rk-g" cx="89" cy="36.5" r="1" style="animation-delay:.6s"/>
<g class="rk-fan"><circle cx="80" cy="42" r="3.2" fill="#0b0d10"/><path d="M80 42v-3M80 42l2.6 1.5M80 42l-2.6 1.5" stroke="#8d959f" stroke-width="1" stroke-linecap="round"/><circle cx="80" cy="42" r="3.2" fill="none"/></g>
<rect x="24" y="48" width="72" height="7" rx="1" fill="#dfe3e7" stroke="#9aa2ab" stroke-width=".4"/>
<path d="M27 50h3v3h-3zM32 50h3v3h-3zM37 50h3v3h-3zM42 50h3v3h-3zM47 50h3v3h-3zM52 50h3v3h-3zM57 50h3v3h-3zM62 50h3v3h-3zM67 50h3v3h-3zM72 50h3v3h-3zM77 50h3v3h-3zM82 50h3v3h-3z" fill="#2b3138"/>
<path d="M28.5 53v4M33.5 53v5M38.5 53v4M43.5 53v6M48.5 53v4" stroke="#f4f6f8" stroke-width="1.4" stroke-linecap="round"/>
<rect x="24" y="57" width="72" height="9" rx="1" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<text x="29" y="63.4" font-family="Arial,sans-serif" font-size="3.6" font-weight="700" fill="#e04b3c">APC</text>
<rect x="60" y="58.4" width="30" height="6.4" rx="1.2" fill="#0c1720" stroke="#8f98a2" stroke-width=".4"/>
<text class="lcd" x="75" y="63.6" text-anchor="middle">OFF</text>
<rect x="24" y="68" width="72" height="8" rx="1" fill="url(#ID-panel)" stroke="#9aa2ab" stroke-width=".4"/>
<rect x="27" y="70" width="40" height="4" rx=".8" fill="#2b3138"/>
<circle class="rk-led rk-g" cx="30" cy="72" r=".9"/><circle class="rk-led rk-g" cx="34" cy="72" r=".9" style="animation-delay:.2s"/><circle class="rk-led rk-g" cx="38" cy="72" r=".9" style="animation-delay:.7s"/>
<circle class="rk-led rk-g" cx="42" cy="72" r=".9" style="animation-delay:.4s"/><circle class="rk-led rk-g" cx="46" cy="72" r=".9" style="animation-delay:1s"/><circle class="rk-led rk-g" cx="50" cy="72" r=".9" style="animation-delay:.1s"/>
<circle class="rk-led rk-g" cx="54" cy="72" r=".9" style="animation-delay:.8s"/><circle class="rk-led rk-g" cx="58" cy="72" r=".9" style="animation-delay:.5s"/><circle class="rk-led rk-g" cx="62" cy="72" r=".9" style="animation-delay:1.2s"/>
<path d="M72 72h20" stroke="#7d858e" stroke-width="2" stroke-linecap="round"/>
<rect x="24" y="78" width="72" height="14" rx="1" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<rect x="26" y="80" width="30" height="10" rx="1" fill="#0b0d10"/>
<g class="rk-fan"><circle cx="34" cy="85" r="4" fill="#15181c"/><path d="M34 85v-3.6M34 85l3.1 1.8M34 85l-3.1 1.8" stroke="#a9b1ba" stroke-width="1.3" stroke-linecap="round"/><circle cx="34" cy="85" r="4" fill="none"/></g>
<g class="rk-fan"><circle cx="48" cy="85" r="4" fill="#15181c"/><path d="M48 85v-3.6M48 85l3.1 1.8M48 85l-3.1 1.8" stroke="#a9b1ba" stroke-width="1.3" stroke-linecap="round"/><circle cx="48" cy="85" r="4" fill="none"/></g>
<rect x="26" y="80" width="30" height="10" fill="url(#ID-mesh)" opacity=".5"/>
<circle class="rk-led rk-g" cx="84" cy="82" r="1"/><circle class="rk-led rk-b" cx="89" cy="82" r="1" style="animation-delay:.7s"/>
<path d="M62 85h14M62 88h14" stroke="#4a525a" stroke-width=".8"/>
<rect x="24" y="94" width="72" height="26" rx="1.5" fill="url(#ID-rkunit)" stroke="#59616b" stroke-width=".4"/>
<g fill="#0a0c0f" stroke="#4a525a" stroke-width=".5">
  <rect x="27" y="97" width="12" height="9" rx=".8"/><rect x="41" y="97" width="12" height="9" rx=".8"/><rect x="55" y="97" width="12" height="9" rx=".8"/><rect x="69" y="97" width="12" height="9" rx=".8"/>
  <rect x="27" y="108" width="12" height="9" rx=".8"/><rect x="41" y="108" width="12" height="9" rx=".8"/><rect x="55" y="108" width="12" height="9" rx=".8"/><rect x="69" y="108" width="12" height="9" rx=".8"/>
</g>
<g class="rk-hdd">
  <rect class="rk-led rk-b" x="29" y="103.6" width="8" height="1.4"/><rect class="rk-led rk-b" x="43" y="103.6" width="8" height="1.4" style="animation-delay:.5s"/>
  <rect class="rk-led rk-b" x="57" y="103.6" width="8" height="1.4" style="animation-delay:1.1s"/><rect class="rk-led rk-b" x="71" y="103.6" width="8" height="1.4" style="animation-delay:.3s"/>
  <rect class="rk-led rk-b" x="29" y="114.6" width="8" height="1.4" style="animation-delay:.9s"/><rect class="rk-led rk-b" x="43" y="114.6" width="8" height="1.4" style="animation-delay:.2s"/>
  <rect class="rk-led rk-b" x="57" y="114.6" width="8" height="1.4" style="animation-delay:.7s"/><rect class="rk-led rk-b" x="71" y="114.6" width="8" height="1.4" style="animation-delay:1.3s"/>
</g>
<rect x="85" y="97" width="9" height="20" rx="1" fill="#15181c" stroke="#4a525a" stroke-width=".4"/>
<circle class="rk-led rk-g" cx="89.5" cy="102" r="1"/><circle class="rk-led rk-b" cx="89.5" cy="107" r="1" style="animation-delay:.6s"/>
<g class="rk-cables" fill="none" stroke-linecap="round">
  <path d="M27 54q-9 2 -6 10t6 10" stroke="#2dd4bf" stroke-width="1.3"/><path d="M29 54q-12 4 -8 14t8 8" stroke="#f5d90a" stroke-width="1.3"/>
  <path d="M93 54q9 2 6 10t-6 10" stroke="#2dd4bf" stroke-width="1.3"/>
</g>
<g class="rk-flow" fill="none" stroke-linecap="round" stroke-width="1.6">
  <path d="M27 54q-9 2 -6 10t6 10"/><path d="M29 54q-12 4 -8 14t8 8"/><path d="M93 54q9 2 6 10t-6 10"/>
</g>
<rect x="22" y="121" width="76" height="3" fill="#1c2024"/>
<path d="M18 130v4M102 130v4" stroke="#14171b" stroke-width="4" stroke-linecap="round"/>
<path d="M20 6h80" stroke="#fff" stroke-opacity=".25" stroke-width="1"/>`;
