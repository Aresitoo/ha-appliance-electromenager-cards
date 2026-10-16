SVG.coffee_maker = (c) => {
    const st = cfStyle(c);
    const defs = `<defs>${DEFS}
<linearGradient id="ID-glassv" x1="0" x2="1"><stop offset="0" stop-color="#e8f1f7" stop-opacity=".35"/><stop offset=".3" stop-color="#ffffff" stop-opacity=".12"/><stop offset="1" stop-color="#c9d6e0" stop-opacity=".3"/></linearGradient>
<linearGradient id="ID-cof" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a4a24"/><stop offset=".15" stop-color="#4a2a14"/><stop offset="1" stop-color="#2a170b"/></linearGradient>
<linearGradient id="ID-mug" x1="0" x2="1"><stop offset="0" stop-color="#e9ecef"/><stop offset=".45" stop-color="#ffffff"/><stop offset="1" stop-color="#cfd5db"/></linearGradient>
<linearGradient id="ID-tank" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bfe6ff" stop-opacity=".55"/><stop offset="1" stop-color="#5fb4ea" stop-opacity=".7"/></linearGradient>`;
    const steam = (xs, y) => `<g class="cf-steam">${xs.map((x) => `<path d="M${x} ${y}q-3-5 0-9t0-9"/>`).join("")}</g>`;
    if (st === "dosette") return `${defs}<clipPath id="ID-cup"><rect x="41" y="84" width="30" height="20" rx="2"/></clipPath></defs>
<g class="cf s-dosette">
<ellipse cx="60" cy="131" rx="44" ry="4.5" fill="url(#ID-shadow)"/>
<rect x="80" y="18" width="18" height="86" rx="6" fill="url(#ID-tank)" stroke="#7fb6d8" stroke-width=".6"/>
<g class="cf-water"><rect x="82" y="34" width="14" height="66" rx="4" fill="#4aa6e0" opacity=".45"/></g>
<path d="M44 12h34q8 0 8 8v96h-50v-96q0-8 8-8z" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<path d="M24 22q0-10 10-10h40q8 0 8 8v24q0 8-8 8h-40q-10 0-10-10z" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<path d="M28 16h44" stroke="#fff" stroke-opacity=".18" stroke-width="1.4" stroke-linecap="round"/>
<circle class="cf-led" cx="40" cy="31" r="3.4"/><circle class="cf-led" cx="54" cy="31" r="3.4"/>
<circle cx="40" cy="31" r="3.4" fill="none" stroke="#7d8792" stroke-width=".6"/><circle cx="54" cy="31" r="3.4" fill="none" stroke="#7d8792" stroke-width=".6"/>
<circle cx="70" cy="31" r="4.2" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".4"/><path d="M70 28.6v2.2M68.1 29.6a2.6 2.6 0 1 0 3.8 0" stroke="#3a424b" stroke-width=".8" fill="none" stroke-linecap="round"/>
<rect x="49" y="52" width="14" height="5" rx="2" fill="#2a2f35"/>
<path class="cf-stream" d="M56 57v28"/>
<rect x="24" y="108" width="72" height="16" rx="6" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".6"/>
<rect x="30" y="106" width="56" height="5" rx="2" fill="#2a2f35"/><rect x="30" y="106" width="56" height="5" rx="2" fill="url(#ID-mesh)"/>
<path d="M71 87q9 0 9 7t-9 7" fill="none" stroke="#dfe3e7" stroke-width="3.2"/>
<path d="M39 82h34l-2 22q-1 3-4 3h-22q-3 0-4-3z" fill="url(#ID-mug)" stroke="#aab2ba" stroke-width=".6"/>
<g clip-path="url(#ID-cup)"><rect class="cf-level" x="38" y="84" width="36" height="20" fill="url(#ID-cof)"/></g>
<ellipse cx="56" cy="82.5" rx="17" ry="1.8" fill="#9aa2ab" opacity=".5"/>
${steam([50, 60], 80)}
</g>`;
    if (st === "expresso") return `${defs}<clipPath id="ID-cup"><rect x="47" y="93" width="26" height="14" rx="2"/></clipPath></defs>
<g class="cf s-expresso">
<ellipse cx="60" cy="131" rx="54" ry="5" fill="url(#ID-shadow)"/>
<rect x="22" y="4" width="40" height="8" rx="3" fill="#2a2f35"/><rect x="26" y="2.5" width="32" height="3" rx="1.5" fill="#3d444c"/>
<g class="cf-body">
<rect x="9" y="10" width="102" height="116" rx="9" fill="url(#ID-inox)" stroke="#7d858e" stroke-width=".7"/>
<rect x="15" y="14" width="90" height="26" rx="5" fill="url(#ID-dark)"/>
${lcd(38, 20, 44, 13)}
<circle class="cf-led" cx="26" cy="27" r="3"/><circle cx="26" cy="27" r="3" fill="none" stroke="#7d8792" stroke-width=".6"/>
<circle class="cf-led" cx="94" cy="27" r="3"/><circle cx="94" cy="27" r="3" fill="none" stroke="#7d8792" stroke-width=".6"/>
<rect x="20" y="46" width="80" height="70" rx="5" fill="#15181b"/>
<path d="M22 48h76" stroke="#fff" stroke-opacity=".06" stroke-width="2"/>
<rect x="38" y="48" width="44" height="12" rx="3" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".5"/>
<rect x="51" y="60" width="5" height="6" rx="1" fill="#8f979f"/><rect x="64" y="60" width="5" height="6" rx="1" fill="#8f979f"/>
<path class="cf-stream" d="M53.5 66v29"/><path class="cf-stream" d="M66.5 66v29"/>
<path d="M73 97q7 0 7 4.5t-7 4.5" fill="none" stroke="#dfe3e7" stroke-width="2.6"/>
<path d="M45 92h30l-1.6 14q-1 4-5 4h-17q-4 0-5-4z" fill="url(#ID-mug)" stroke="#aab2ba" stroke-width=".6"/>
<g clip-path="url(#ID-cup)"><rect class="cf-level" x="44" y="93" width="32" height="14" fill="url(#ID-cof)"/></g>
<ellipse cx="60" cy="92.5" rx="15" ry="1.6" fill="#9aa2ab" opacity=".5"/>
<ellipse cx="60" cy="112" rx="24" ry="2" fill="#000" opacity=".35"/>
<rect x="17" y="112" width="86" height="10" rx="3" fill="url(#ID-chrome)" stroke="#6f7780" stroke-width=".5"/>
<rect x="21" y="114" width="78" height="6" rx="2" fill="url(#ID-holes)"/>
<path d="M13 16v100" stroke="#fff" stroke-opacity=".5" stroke-width="1.2" stroke-linecap="round"/>
</g>
${steam([55, 65], 90)}
</g>`;
    return `${defs}<clipPath id="ID-car"><path d="M30 70h40v30q0 6-6 6h-28q-6 0-6-6z"/></clipPath></defs>
<g class="cf s-filtre">
<ellipse cx="60" cy="131" rx="52" ry="5" fill="url(#ID-shadow)"/>
<rect x="74" y="16" width="34" height="96" rx="6" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<rect x="80" y="28" width="10" height="62" rx="4" fill="url(#ID-tank)" stroke="#7fb6d8" stroke-width=".5"/>
<g class="cf-water"><rect x="81.5" y="40" width="7" height="48" rx="3" fill="#4aa6e0" opacity=".5"/></g>
<path d="M82 34h2M82 46h2M82 58h2M82 70h2" stroke="#fff" stroke-opacity=".6" stroke-width=".8"/>
<path d="M22 30q0-10 10-10h46v26h-48q-8 0-8-8z" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<path d="M28 24h44" stroke="#fff" stroke-opacity=".18" stroke-width="1.4" stroke-linecap="round"/>
<path d="M30 46h44l-9 12h-26z" fill="#262b31" stroke="#05070a" stroke-width=".5"/>
<g class="cf-drip"><circle cx="52" cy="60" r="1.3"/><circle cx="52" cy="60" r="1.1"/><circle cx="52" cy="60" r="1.2"/></g>
<rect x="12" y="106" width="96" height="21" rx="6" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".6"/>
<rect class="cf-plate" x="26" y="104.5" width="48" height="3.5" rx="1.7"/>
${lcd(80, 112, 24, 9)}
<circle class="cf-led" cx="22" cy="116.5" r="3"/><circle cx="22" cy="116.5" r="3" fill="none" stroke="#7d8792" stroke-width=".6"/>
<path d="M28 76q-11 1-11 12q0 10 11 11" fill="none" stroke="#454d57" stroke-width="4" stroke-linecap="round"/>
<g clip-path="url(#ID-car)"><rect class="cf-level" x="28" y="70" width="44" height="36" fill="url(#ID-cof)"/></g>
<path d="M30 66h40v34q0 6-6 6h-28q-6 0-6-6z" fill="url(#ID-glassv)" stroke="#c4d2dd" stroke-opacity=".8" stroke-width=".8"/>
<path d="M34 72v26" stroke="#fff" stroke-opacity=".55" stroke-width="1.6" stroke-linecap="round"/>
<rect x="28" y="61" width="44" height="7" rx="2.5" fill="#1d2126"/><rect x="47" y="59" width="10" height="3" rx="1" fill="#1d2126"/>
${steam([44, 56], 19)}
</g>`;
  };
