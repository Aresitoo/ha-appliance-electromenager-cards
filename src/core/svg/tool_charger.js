/* Chargeur de batterie d'outils (perceuse, visseuse…) : batterie posée sur son socle, vue de 3/4 */
SVG.tool_charger = () => {
  // repère de la batterie : P0 = coin avant-gauche du dessus, a = arête avant, b = profondeur, H = hauteur
  const P = [22, 50], A = [46, 12], B = [30, -13], H = 30;
  const pt = (u, v, h = 0) => `${(P[0] + A[0] * u + B[0] * v).toFixed(1)} ${(P[1] + A[1] * u + B[1] * v + h).toFixed(1)}`;
  // nervures du dessus (grille comme sur la photo)
  const ribs = [0.18, 0.34, 0.5, 0.66, 0.82].map((v) => `M${pt(0.08, v)}L${pt(0.92, v)}`).join("")
    + [0.25, 0.5, 0.75].map((u) => `M${pt(u, 0.1)}L${pt(u, 0.9)}`).join("");
  // jauge 4 LED sur la face avant de la batterie
  const gauge = [0, 1, 2, 3].map((i) => {
    const u = 0.52 + i * 0.1;
    return `<path class="tc-g tc-g${i + 1}" d="M${pt(u, 0, 5)}L${pt(u + 0.07, 0, 5)}L${pt(u + 0.07, 0, 7.6)}L${pt(u, 0, 7.6)}z"/>`;
  }).join("");
  const skew = (Math.atan2(A[1], A[0]) * 180 / Math.PI).toFixed(1);
  return `
<defs>${DEFS}
<linearGradient id="ID-tcfront" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#30363d"/><stop offset="1" stop-color="#15191d"/></linearGradient>
<linearGradient id="ID-tcside" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22272c"/><stop offset="1" stop-color="#0d1013"/></linearGradient>
<linearGradient id="ID-tctop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a4148"/><stop offset="1" stop-color="#1c2126"/></linearGradient>
<radialGradient id="ID-tcglow"><stop offset="0" stop-color="#43e08a" stop-opacity=".55"/><stop offset="1" stop-color="#43e08a" stop-opacity="0"/></radialGradient></defs>
<ellipse cx="62" cy="124" rx="54" ry="5" fill="url(#ID-shadow)"/>
<!-- câble d'alimentation enroulé à gauche -->
<path class="tc-cable" d="M14 96 C4 95, 2 84, 9 80 C16 76, 22 84, 15 89 C8 94, 3 104, 9 110 C14 115, 6 120, 2 118" fill="none" stroke="#14171a" stroke-width="2.6" stroke-linecap="round"/>
<path class="tc-flow" d="M2 118 C6 120, 14 115, 9 110 C3 104, 8 94, 15 89 C22 84, 16 76, 9 80 C2 84, 4 95, 14 96" fill="none" stroke="#43e08a" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3 9"/>
<!-- socle du chargeur -->
<path d="M10 88 L76 105 L76 122 L10 105 Z" fill="url(#ID-tcfront)" stroke="#05070a" stroke-width=".5"/>
<path d="M76 105 L114 88 L114 104 L76 122 Z" fill="url(#ID-tcside)" stroke="#05070a" stroke-width=".5"/>
<path d="M10 88 L48 72 L114 88 L76 105 Z" fill="url(#ID-tctop)" stroke="#05070a" stroke-width=".5"/>
<path d="M10 88 L76 105 L114 88" fill="none" stroke="#5b636c" stroke-width=".6" opacity=".7"/>
<g stroke="#05070a" stroke-width="1.1" stroke-linecap="round">${[0, 1, 2, 3, 4, 5].map((i) => { const x = 88 + i * 4, y = 101 - i * 1.8; return `<path d="M${x} ${y}v9"/>`; }).join("")}</g>
<!-- voyants du chargeur : défaut + charge -->
<path d="M15.5 95.2l1.6 -2.8l1.6 2.8z" fill="none" stroke="#8b939c" stroke-width=".45"/>
<circle class="tc-err" cx="17.1" cy="98.6" r="1.05"/>
<rect x="15.6" y="101.4" width="3" height="1.7" rx=".3" fill="none" stroke="#8b939c" stroke-width=".45"/>
<circle class="tc-led" cx="17.1" cy="105.4" r="1.15"/>
<ellipse class="tc-glow" cx="62" cy="86" rx="44" ry="12" fill="url(#ID-tcglow)"/>
<!-- batterie posée sur le socle -->
<path d="M${pt(0, 0)}L${pt(1, 0)}L${pt(1, 0, H)}L${pt(0, 0, H)}Z" fill="url(#ID-tcfront)" stroke="#05070a" stroke-width=".5"/>
<path d="M${pt(1, 0)}L${pt(1, 1)}L${pt(1, 1, H - 2)}L${pt(1, 0, H)}Z" fill="url(#ID-tcside)" stroke="#05070a" stroke-width=".5"/>
<path d="M${pt(0, 0)}L${pt(0, 1)}L${pt(1, 1)}L${pt(1, 0)}Z" fill="url(#ID-tctop)" stroke="#05070a" stroke-width=".5"/>
<path d="${ribs}" stroke="#0b0d10" stroke-width="2.2" stroke-linecap="round"/>
<path d="${ribs}" stroke="#4a525a" stroke-width=".5" stroke-linecap="round" transform="translate(-.5 -.6)"/>
<path d="M${pt(0, 0, H - 6)}L${pt(1, 0, H - 6)}" stroke="#05070a" stroke-width=".8"/>
<path d="M${pt(0, 0)}L${pt(1, 0)}L${pt(1, 1)}" fill="none" stroke="#6a737c" stroke-width=".6" opacity=".7"/>
<!-- plaque générique 18 V -->
<g transform="translate(${pt(0.1, 0, 12).replace(" ", " ")}) skewY(${skew})">
  <rect x="0" y="0" width="18" height="7" rx="3.5" fill="#e9ecef"/>
  <rect x="0" y="0" width="7" height="7" rx="3.5" fill="#d63a2f"/>
  <path d="M4.2 1.2l-1.8 2.8h1.4l-.8 2l2.2 -3h-1.4z" fill="#fff"/>
  <text x="12.5" y="5.4" text-anchor="middle" font-size="4.6" font-weight="700" fill="#1b1f24" font-family="Arial, sans-serif">18V</text>
</g>
<g class="tc-gauge">${gauge}</g>
<path class="tc-bolt" d="M${pt(0.86, 0, 14)}l-2.6 4.6h2.2l-1.4 4.2l4 -5.6h-2.3l1.6 -3.2z"/>`;
};
