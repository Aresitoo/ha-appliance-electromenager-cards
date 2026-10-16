SVG.chest_freezer = () => `
<defs>${DEFS}
<linearGradient id="ID-side" x1="0" x2="1"><stop offset="0" stop-color="#cfd5db"/><stop offset="1" stop-color="#aeb6be"/></linearGradient>
<linearGradient id="ID-top" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e3e8ec"/></linearGradient>
<linearGradient id="ID-cav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe6f5"/><stop offset="1" stop-color="#f4fbff"/></linearGradient>
<linearGradient id="ID-liner" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9edf0"/><stop offset="1" stop-color="#c9d0d6"/></linearGradient></defs>
<ellipse cx="62" cy="131" rx="54" ry="4.5" fill="url(#ID-shadow)"/>
<rect x="12" y="126" width="9" height="5" rx="1.5" fill="#3a3f45"/><rect x="88" y="126" width="9" height="5" rx="1.5" fill="#3a3f45"/>
<path d="M100 73L112 61V117L100 129Z" fill="url(#ID-side)"/>
<path d="M103 112l6-6M103 116l6-6M103 120l6-6" stroke="#8f979f" stroke-width=".7"/>
<rect x="8" y="73" width="92" height="56" rx="2.5" fill="url(#ID-body)" stroke="#bfc6ce" stroke-width=".7"/>
<rect x="8" y="121" width="92" height="8" rx="2" fill="#e2e6ea"/>
<path d="M76 123.5h20M76 125.5h20M76 127.5h20" stroke="#aab1b9" stroke-width=".6"/>
<rect x="68" y="79" width="28" height="11" rx="2" fill="#0c1720" stroke="#8f98a2" stroke-width=".5"/>
<text class="lcd" x="84.5" y="86.8" text-anchor="middle">--°</text>
<g class="flake"><path d="M72 81.5v6M69.4 83l5.2 3M69.4 86l5.2-3" stroke-width=".8" stroke-linecap="round"/></g>
<circle class="led l1" cx="72" cy="94" r="1.2"/><circle class="led l2" cx="77" cy="94" r="1.2"/>
<g class="cavity">
  <path d="M10 73L98 73L110 61L22 61Z" fill="url(#ID-cav)"/>
  <path d="M10 73L98 73L110 61L22 61Z" fill="#fffbe6" class="clight"/>
  <path d="M22 61L110 61M60 61L50 73" stroke="#9fc3db" stroke-width=".6"/>
  <path d="M18 71l3-4h14l-3 4z" fill="#e5484d"/><path d="M33 71l3-4h12l-3 4z" fill="#3e8ed0"/>
  <path d="M28 66l2.5-3h10l-2.5 3z" fill="#f2c94c"/><path d="M42 66l2.5-3h9l-2.5 3z" fill="#ffffff" stroke="#c9d3dc" stroke-width=".4"/>
  <path d="M58 70l4-5h16l-4 5z" fill="#9fd356" opacity=".9"/><path d="M63 64l2-2.5h10l-2 2.5z" fill="#ff8f3d"/>
  <path d="M80 70l4-5h12l-4 5z" fill="#c4c9cf" stroke="#9aa3ad" stroke-width=".4"/>
</g>
<g class="cold-out"><circle cx="40" cy="58" r="2"/><circle cx="58" cy="56" r="2.4"/><circle cx="76" cy="58" r="1.8"/><circle cx="94" cy="57" r="2.1"/></g>
<g class="lid">
  <path class="lid-side" d="M100 66L112 54L112 61L100 73Z" fill="url(#ID-side)"/>
  <path class="lid-top" d="M8 66L100 66L112 54L20 54Z" fill="url(#ID-top)" stroke="#bfc6ce" stroke-width=".6"/>
  <path class="lid-under" d="M20 54L112 54L112 54L20 54Z" fill="url(#ID-liner)" stroke="#9aa3ad" stroke-width=".6"/>
  <path class="lid-front" d="M8 66L100 66L100 73L8 73Z" fill="#f1f3f5" stroke="#bfc6ce" stroke-width=".6"/>
</g>
<rect class="lid-handle" x="44" y="68.5" width="20" height="2.6" rx="1.3" fill="#7d858e"/>
<g class="mist"><circle cx="30" cy="131" r="1.1"/><circle cx="46" cy="132" r=".9"/><circle cx="64" cy="131" r="1.2"/><circle cx="80" cy="132" r=".9"/></g>`;
