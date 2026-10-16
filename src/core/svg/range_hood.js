SVG.range_hood = () => `
<defs>${DEFS}
<linearGradient id="ID-beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff4c9" stop-opacity=".55"/><stop offset="1" stop-color="#fff4c9" stop-opacity="0"/></linearGradient>
<linearGradient id="ID-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3138"/><stop offset="1" stop-color="#0d1013"/></linearGradient></defs>
<ellipse cx="60" cy="133" rx="52" ry="4" fill="url(#ID-shadow)"/>
<g class="hd-beam"><path d="M24 80l-12 40h32z" fill="url(#ID-beam)"/><path d="M96 80l-12 40h32z" fill="url(#ID-beam)"/></g>
<g class="hd-air"><path d="M38 118q-4-18 10-36"/><path d="M60 116v-34"/><path d="M82 118q4-18-10-36"/><path d="M28 112q2-16 18-30"/><path d="M92 112q-2-16-18-30"/></g>
<g class="hd-steam"><path d="M54 96q-3-5 0-9t0-9"/><path d="M60 95q-3-5 0-9t0-9"/><path d="M66 96q-3-5 0-9t0-9"/></g>
<rect x="46" y="4" width="28" height="46" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".6"/>
<path d="M48 4v46" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/>
<path d="M50 40h20M50 43h20M50 46h20" stroke="#6f7780" stroke-width=".7"/>
<path d="M16 50h88l10 20h-108z" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".6"/>
<path d="M20 52h40l-6 16h-44z" fill="#fff" opacity=".18"/>
<rect x="6" y="70" width="108" height="8" rx="1.5" fill="url(#ID-chrome)" stroke="#6f7780" stroke-width=".5"/>
<circle cx="60" cy="60" r="7.5" fill="#22272d" stroke="#6f7780" stroke-width=".6"/>
<g class="hd-fan"><path d="M60 60l0-6.2M60 60l5.4 3.1M60 60l-5.4 3.1" stroke="#a9b1ba" stroke-width="2.4" stroke-linecap="round"/></g>
<circle cx="60" cy="60" r="1.6" fill="#d7dce1"/>
<circle cx="60" cy="60" r="7.5" fill="url(#ID-holes)" opacity=".6"/>
<circle class="hd-led s1" cx="86" cy="74" r="1.4"/><circle class="hd-led s2" cx="93" cy="74" r="1.4"/><circle class="hd-led s3" cx="100" cy="74" r="1.4"/>
<circle class="hd-led lt" cx="20" cy="74" r="1.4"/>
<path d="M17 74h-3M27 74h-3" stroke="#59616b" stroke-width=".8"/>
<rect x="9" y="78" width="102" height="3" rx="1" fill="#2a2f35"/><rect x="12" y="78" width="96" height="3" fill="url(#ID-mesh)"/>
<rect class="hd-lamp" x="20" y="79.6" width="8" height="1.8" rx=".9"/><rect class="hd-lamp" x="92" y="79.6" width="8" height="1.8" rx=".9"/>
<path d="M45 98h30v16q0 4-4 4h-22q-4 0-4-4z" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".6"/>
<rect x="44" y="96" width="32" height="3" rx="1.5" fill="url(#ID-chrome)"/><rect x="57" y="93.5" width="6" height="3" rx="1.2" fill="#2a2f35"/>
<path d="M45 102h-5M75 102h5" stroke="#2a2f35" stroke-width="2.2" stroke-linecap="round"/>
<rect x="10" y="118" width="100" height="7" rx="1.5" fill="url(#ID-glass)" stroke="#05070a" stroke-width=".5"/>
<ellipse class="hd-zone" cx="60" cy="119.5" rx="17" ry="1.3"/>
<ellipse cx="88" cy="121" rx="10" ry="1.2" fill="none" stroke="#3a424b" stroke-width=".6"/>`;
