/* Carte générique : l'utilisateur fournit sa propre image (option `image`) */
SVG.generic = (c = {}) => {
  // `images` (liste conditionnelle) : on part de la première ; la carte choisit ensuite selon l'état
  const list = Array.isArray(c && c.images) ? c.images.filter((i) => i && i.image) : [];
  const src = String((c && c.image) || (list[0] && list[0].image) || "").trim();
  const art = src
    ? `<image class="gn-img" href="${esc(src)}" x="4" y="6" width="112" height="124" preserveAspectRatio="xMidYMid meet"/>`
    // pas d'image : pictogramme de prise pour inviter à renseigner `image`
    : `<g class="gn-img gn-empty">
  <rect x="14" y="22" width="92" height="92" rx="16" fill="none" stroke="#8d959f" stroke-width="2" stroke-dasharray="5 5"/>
  <rect x="44" y="40" width="32" height="40" rx="8" fill="#b9bfc6"/>
  <rect x="51" y="30" width="5" height="14" rx="2" fill="#8d959f"/><rect x="64" y="30" width="5" height="14" rx="2" fill="#8d959f"/>
  <path d="M60 80v14" stroke="#8d959f" stroke-width="4" stroke-linecap="round"/>
</g>`;
  return `<ellipse cx="60" cy="128" rx="34" ry="4" fill="#000" opacity=".18"/>${art}`;
};
