/* Libellés de l'éditeur visuel des cartes autonomes (Pompe, Onduleur, Plancher chauffant, Sauna…).
 * window.applianceEditorLabel(nom, hass) → libellé traduit dans la langue de Home Assistant,
 * à défaut un libellé lisible tiré du nom de l'option (entity_floor_temp → « Floor temp »).
 */
(() => {
  if (window.applianceEditorLabel) return;
  const L = /*@i18n editor*/{};
  const lang = (hass) => {
    const h = hass || document.querySelector('home-assistant')?.hass;
    let l = ((h && (h.locale?.language || h.language)) || document.documentElement.lang || 'en').toLowerCase().slice(0, 2);
    if (l === 'no' || l === 'nn') l = 'nb'; // norvégien : no / nn → nb (bokmål)
    return L[l] ? l : 'en';
  };
  const human = (n) => { const t = String(n).replace(/^entity_/, '').replace(/_/g, ' '); return t.charAt(0).toUpperCase() + t.slice(1); };
  window.applianceEditorLabel = (name, hass) => (name ? (L[lang(hass)] || L.en)[name] ?? L.en[name] ?? human(name) : '');
})();
