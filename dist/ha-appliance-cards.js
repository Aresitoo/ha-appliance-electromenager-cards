/*!
 * HA Appliance Cards
 * Lovelace cards for household appliances: washer, dryer, dishwasher,
 * water heater, oven, microwave, refrigerator.
 * MIT License
 */
const VERSION = "1.1.0";

/* ------------------------------------------------------------------ */
/* i18n                                                                */
/* ------------------------------------------------------------------ */
const STRINGS = {
  en: {
    washer: "Washing machine", dryer: "Dryer", dishwasher: "Dishwasher",
    water_heater: "Water heater", oven: "Oven", microwave: "Microwave", fridge: "Refrigerator",
    off: "Off", idle: "Idle", standby: "Standby", running: "Running", finished: "Finished",
    heating: "Heating", ready: "Ready", preheating: "Preheating", cooling: "Cooling",
    door_open: "Door open", unavailable: "Unavailable", too_warm: "Too warm",
    ph_wash: "Washing", ph_rinse: "Rinsing", ph_spin: "Spinning", ph_dry: "Drying", ph_cool: "Cooling down",
    power: "Power", energy: "Energy", cost: "Cost", remaining: "Remaining", program: "Program",
    temperature: "Temperature", target: "Target", fridge_temp: "Fridge", freezer_temp: "Freezer",
    ends_at: "Ends at", toggle: "Turn on/off",
    f_name: "Name", f_entity: "Status entity (switch, sensor, input_select…)",
    f_power: "Power sensor (W)", f_energy: "Energy sensor (kWh)", f_cost: "Cost sensor",
    f_remaining: "Remaining time sensor", f_progress: "Progress sensor (%)", f_program: "Program / phase sensor",
    f_door: "Door sensor", f_switch: "Switch to toggle (optional)", f_threshold: "Running threshold (W)",
    f_temperature: "Temperature sensor", f_target_temperature: "Target temperature sensor",
    f_freezer_temperature: "Freezer temperature sensor", f_freezer_door: "Freezer door sensor",
    f_max_temperature: "Fridge alert above (°C)", f_freezer_max_temperature: "Freezer alert above (°C)",
    f_color: "Accent color (CSS)", f_animations: "Animations",
  },
  fr: {
    washer: "Lave-linge", dryer: "Sèche-linge", dishwasher: "Lave-vaisselle",
    water_heater: "Ballon d'eau chaude", oven: "Four", microwave: "Micro-ondes", fridge: "Réfrigérateur",
    off: "Éteint", idle: "Inactif", standby: "Veille", running: "En cours", finished: "Terminé",
    heating: "En chauffe", ready: "Prêt", preheating: "Préchauffage", cooling: "Refroidit",
    door_open: "Porte ouverte", unavailable: "Indisponible", too_warm: "Trop chaud",
    ph_wash: "Lavage", ph_rinse: "Rinçage", ph_spin: "Essorage", ph_dry: "Séchage", ph_cool: "Refroidissement",
    power: "Puissance", energy: "Énergie", cost: "Coût", remaining: "Restant", program: "Programme",
    temperature: "Température", target: "Consigne", fridge_temp: "Frigo", freezer_temp: "Congélateur",
    ends_at: "Fin à", toggle: "Allumer/éteindre",
    f_name: "Nom", f_entity: "Entité d'état (switch, sensor, input_select…)",
    f_power: "Capteur de puissance (W)", f_energy: "Capteur d'énergie (kWh)", f_cost: "Capteur de coût",
    f_remaining: "Capteur de temps restant", f_progress: "Capteur de progression (%)", f_program: "Capteur de programme / phase",
    f_door: "Capteur de porte", f_switch: "Interrupteur à piloter (optionnel)", f_threshold: "Seuil de fonctionnement (W)",
    f_temperature: "Capteur de température", f_target_temperature: "Capteur de consigne",
    f_freezer_temperature: "Capteur température congélateur", f_freezer_door: "Capteur porte congélateur",
    f_max_temperature: "Alerte frigo au-dessus de (°C)", f_freezer_max_temperature: "Alerte congélateur au-dessus de (°C)",
    f_color: "Couleur d'accent (CSS)", f_animations: "Animations",
  },
};
const lang = (hass) => {
  const l = (hass && (hass.locale?.language || hass.language)) || document.documentElement.lang || "en";
  return l.toLowerCase().startsWith("fr") ? "fr" : "en";
};
const tr = (hass, key) => STRINGS[lang(hass)][key] ?? STRINGS.en[key] ?? key;

/* ------------------------------------------------------------------ */
/* Realistic illustrations — viewBox 0 0 120 140, "ID" = unique prefix  */
/* ------------------------------------------------------------------ */
const DEFS = `
<linearGradient id="ID-body" x1="0" x2="1"><stop offset="0" stop-color="#eef1f4"/><stop offset=".5" stop-color="#ffffff"/><stop offset="1" stop-color="#d4d9df"/></linearGradient>
<linearGradient id="ID-panel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3f5f7"/><stop offset="1" stop-color="#d9dee3"/></linearGradient>
<linearGradient id="ID-chrome" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fbfcfd"/><stop offset=".3" stop-color="#a3abb4"/><stop offset=".55" stop-color="#eef1f4"/><stop offset=".8" stop-color="#8d959f"/><stop offset="1" stop-color="#c9ced4"/></linearGradient>
<linearGradient id="ID-inox" x1="0" x2="1"><stop offset="0" stop-color="#b9bfc6"/><stop offset=".22" stop-color="#eceff2"/><stop offset=".5" stop-color="#c5cad0"/><stop offset=".75" stop-color="#e6e9ec"/><stop offset="1" stop-color="#a8afb7"/></linearGradient>
<radialGradient id="ID-steel" cx=".42" cy=".38" r=".8"><stop offset="0" stop-color="#eef1f3"/><stop offset=".55" stop-color="#aab2ba"/><stop offset="1" stop-color="#5f6770"/></radialGradient>
<linearGradient id="ID-gloss" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/></linearGradient>
<radialGradient id="ID-shadow"><stop offset="0" stop-color="#000" stop-opacity=".38"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
<linearGradient id="ID-dark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3138"/><stop offset="1" stop-color="#101317"/></linearGradient>
<radialGradient id="ID-warm" cx=".5" cy=".35" r=".75"><stop offset="0" stop-color="#ffe2a3"/><stop offset=".6" stop-color="#f3a54a" stop-opacity=".75"/><stop offset="1" stop-color="#7a3b12" stop-opacity=".2"/></radialGradient>
<pattern id="ID-holes" width="4.5" height="4.5" patternUnits="userSpaceOnUse"><circle cx="2.25" cy="2.25" r=".75" fill="#4f5760" opacity=".55"/></pattern>
<pattern id="ID-mesh" width="2.4" height="2.4" patternUnits="userSpaceOnUse"><circle cx="1.2" cy="1.2" r=".55" fill="#000" opacity=".45"/></pattern>`;

const lcd = (x, y, w, h) => `
<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5" fill="#0c1720" stroke="#8f98a2" stroke-width=".6"/>
<text class="lcd" x="${x + w / 2}" y="${y + h / 2 + 2.5}" text-anchor="middle">OFF</text>`;

const clothes = `
<g class="clothes">
  <path d="M38 92 q8 -7 17 -2 q4 6 -3 9 q-8 3 -14 -7z" fill="#e5484d"/>
  <path d="M52 95 q9 -9 19 -3 q3 7 -6 9 q-9 2 -13 -6z" fill="#3e8ed0"/>
  <path d="M66 90 q8 -4 13 3 q-1 7 -9 6 q-6 -2 -4 -9z" fill="#f2c94c"/>
  <path d="M44 99 q10 -3 18 3 q-4 6 -12 5 q-6 -2 -6 -8z" fill="#9b6ad6"/>
  <path d="M60 101 q8 -5 15 1 q-3 6 -10 5z" fill="#3fbf7f"/>
  <path d="M41 86 q5 -4 10 0 q-2 4 -6 4z" fill="#ff8fab"/>
</g>`;

const porthole = (cx, cy, inner, tag) => `
<circle cx="${cx}" cy="${cy}" r="${inner + 9}" fill="#000" opacity=".08"/>
<circle cx="${cx}" cy="${cy}" r="${inner + 7}" fill="url(#ID-chrome)"/>
<circle cx="${cx}" cy="${cy}" r="${inner + 3}" fill="#2a2f35"/>
<circle cx="${cx}" cy="${cy}" r="${inner}" fill="url(#ID-steel)"/>
<g clip-path="url(#ID-win)">${tag}</g>
<circle cx="${cx}" cy="${cy}" r="${inner}" fill="url(#ID-gloss)"/>
<path d="M${cx - inner * 0.72} ${cy - inner * 0.42} a${inner * 0.85} ${inner * 0.85} 0 0 1 ${inner * 0.62} -${inner * 0.48}" stroke="#fff" stroke-opacity=".75" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<circle cx="${cx}" cy="${cy}" r="${inner}" fill="none" stroke="#000" stroke-opacity=".25"/>`;

const drumInside = (cx, cy, r) => `
<g class="drum">
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#ID-holes)"/>
  <circle cx="${cx}" cy="${cy}" r="${r * 0.35}" fill="none" stroke="#8b939c" stroke-opacity=".5"/>
  <path d="M${cx} ${cy - r} l-3 7 h6z M${cx - r * 0.866} ${cy + r / 2} l6.5 -1 l-3 -5.5z M${cx + r * 0.866} ${cy + r / 2} l-6.5 -1 l3 -5.5z" fill="#c9cfd5" stroke="#7d858e" stroke-width=".5"/>
  ${clothes}
</g>`;

const feet = (xs, y) => xs.map((x) => `<rect x="${x}" y="${y}" width="10" height="7" rx="1.5" fill="#3a3f45"/>`).join("");

const SVG = {
  washer: () => `
<defs>${DEFS}<clipPath id="ID-win"><circle cx="60" cy="80" r="28"/></clipPath></defs>
<ellipse cx="60" cy="133" rx="50" ry="5" fill="url(#ID-shadow)"/>
<g class="shake">
  ${feet([20, 90], 124)}
  <rect x="14" y="8" width="92" height="120" rx="8" fill="url(#ID-body)" stroke="#bfc6ce" stroke-width=".8"/>
  <path d="M14 16a8 8 0 0 1 8-8h76a8 8 0 0 1 8 8v17H14z" fill="url(#ID-panel)"/>
  <line x1="14" y1="33" x2="106" y2="33" stroke="#bfc6ce" stroke-width=".8"/>
  <rect x="19" y="13" width="25" height="15" rx="2" fill="#f8f9fb" stroke="#b9c0c8" stroke-width=".7"/>
  <rect x="24" y="22.5" width="15" height="2.2" rx="1.1" fill="#a6aeb7"/>
  ${lcd(49, 13, 30, 11)}
  <circle class="led l1" cx="55" cy="29" r="1.4"/><circle class="led l2" cx="61" cy="29" r="1.4"/>
  <circle class="led l3" cx="67" cy="29" r="1.4"/><circle class="led l4" cx="73" cy="29" r="1.4"/>
  <circle cx="93" cy="21" r="8.2" fill="url(#ID-chrome)" stroke="#88919a" stroke-width=".6"/>
  <circle cx="93" cy="21" r="5.8" fill="#eff2f5" stroke="#b2b9c1" stroke-width=".6"/>
  <g class="knob"><line x1="93" y1="21" x2="93" y2="16.2" stroke="#4f5964" stroke-width="1.5" stroke-linecap="round"/></g>
  ${porthole(60, 80, 28, `
    ${drumInside(60, 80, 28)}
    <g class="water"><path class="wave" d="M10 88q10-4 20 0t20 0t20 0t20 0t20 0t20 0v30H10z"/></g>
    <g class="foam">
      <circle cx="44" cy="90" r="2.2"/><circle cx="52" cy="92" r="1.6"/><circle cx="61" cy="89" r="2.6"/>
      <circle cx="70" cy="91" r="1.8"/><circle cx="77" cy="88" r="1.4"/><circle cx="56" cy="95" r="1.2"/>
    </g>`)}
  <rect x="20" y="72" width="5" height="16" rx="2" fill="url(#ID-chrome)" stroke="#8d959f" stroke-width=".4"/>
  <rect x="95.5" y="74" width="4" height="12" rx="1.5" fill="#9aa3ad"/>
  <rect x="22" y="117" width="76" height="6" rx="2" fill="#000" opacity=".05"/>
</g>`,

  dryer: () => `
<defs>${DEFS}<clipPath id="ID-win"><circle cx="60" cy="80" r="29"/></clipPath>
<radialGradient id="ID-heat" cx=".5" cy=".6" r=".6"><stop offset="0" stop-color="#ffb347" stop-opacity=".55"/><stop offset="1" stop-color="#ff7b2e" stop-opacity="0"/></radialGradient></defs>
<ellipse cx="60" cy="133" rx="50" ry="5" fill="url(#ID-shadow)"/>
<g class="shake-soft">
  ${feet([20, 90], 124)}
  <rect x="14" y="8" width="92" height="120" rx="8" fill="url(#ID-body)" stroke="#bfc6ce" stroke-width=".8"/>
  <path d="M14 16a8 8 0 0 1 8-8h76a8 8 0 0 1 8 8v17H14z" fill="url(#ID-panel)"/>
  <line x1="14" y1="33" x2="106" y2="33" stroke="#bfc6ce" stroke-width=".8"/>
  <circle cx="27" cy="21" r="8.2" fill="url(#ID-chrome)" stroke="#88919a" stroke-width=".6"/>
  <circle cx="27" cy="21" r="5.8" fill="#eff2f5" stroke="#b2b9c1" stroke-width=".6"/>
  <g class="knob"><line x1="27" y1="21" x2="27" y2="16.2" stroke="#4f5964" stroke-width="1.5" stroke-linecap="round"/></g>
  ${lcd(43, 13, 30, 11)}
  <circle class="led l1" cx="49" cy="29" r="1.4"/><circle class="led l2" cx="55" cy="29" r="1.4"/>
  <circle class="led l3" cx="61" cy="29" r="1.4"/><circle class="led l4" cx="67" cy="29" r="1.4"/>
  <rect x="80" y="15" width="8" height="5" rx="1.5" fill="#e7eaee" stroke="#aeb5bd" stroke-width=".6"/>
  <rect x="91" y="15" width="8" height="5" rx="1.5" fill="#e7eaee" stroke="#aeb5bd" stroke-width=".6"/>
  <rect x="80" y="23" width="19" height="5" rx="1.5" fill="#dfe3e8" stroke="#aeb5bd" stroke-width=".6"/>
  ${porthole(60, 80, 29, `
    <rect x="20" y="40" width="80" height="80" fill="#3a4148" opacity=".25"/>
    ${drumInside(60, 80, 29)}
    <circle class="heat" cx="60" cy="80" r="29" fill="url(#ID-heat)"/>`)}
  <rect x="20" y="72" width="5" height="16" rx="2" fill="url(#ID-chrome)" stroke="#8d959f" stroke-width=".4"/>
  <rect x="95.5" y="74" width="4" height="12" rx="1.5" fill="#9aa3ad"/>
  <rect x="22" y="114" width="76" height="9" rx="2" fill="#e3e7eb" stroke="#c3c9d0" stroke-width=".6"/>
  <path d="M28 116.5h64M28 118.5h64M28 120.5h64" stroke="#b7bec6" stroke-width=".6"/>
</g>`,

  dishwasher: () => `
<defs>${DEFS}<clipPath id="ID-win"><rect x="22" y="38" width="76" height="76" rx="4"/></clipPath>
<linearGradient id="ID-tub" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5b646d"/><stop offset="1" stop-color="#2c3238"/></linearGradient></defs>
<ellipse class="floorlight" cx="60" cy="135" rx="9" ry="2.2"/>
<ellipse cx="60" cy="133" rx="50" ry="5" fill="url(#ID-shadow)"/>
<g>
  <rect x="14" y="8" width="92" height="120" rx="6" fill="url(#ID-inox)" stroke="#9aa2ab" stroke-width=".8"/>
  <rect x="14" y="8" width="92" height="15" rx="6" fill="url(#ID-dark)"/>
  <rect x="14" y="17" width="92" height="6" fill="url(#ID-dark)"/>
  ${lcd(45, 11, 30, 9)}
  <circle class="led l1" cx="22" cy="15.5" r="1.4"/><circle class="led l2" cx="28" cy="15.5" r="1.4"/>
  <circle class="led l4" cx="34" cy="15.5" r="1.4"/>
  <rect x="82" y="12.5" width="7" height="6" rx="1.5" fill="#3b424a" stroke="#58616b" stroke-width=".5"/>
  <rect x="92" y="12.5" width="7" height="6" rx="1.5" fill="#3b424a" stroke="#58616b" stroke-width=".5"/>
  <rect x="40" y="26" width="40" height="5" rx="2.5" fill="#7c848d"/>
  <rect x="41" y="26" width="38" height="2.4" rx="1.2" fill="#2f353b" opacity=".6"/>
  <rect x="22" y="38" width="76" height="76" rx="4" fill="url(#ID-tub)"/>
  <g clip-path="url(#ID-win)">
    <g class="wash-light"><rect x="22" y="38" width="76" height="76" fill="#8fd3ff" opacity=".18"/></g>
    <path d="M26 62h68M26 66h68" stroke="#aab2ba" stroke-width="1.1"/>
    <path d="M30 62v-8M42 62v-8M54 62v-8M66 62v-8M78 62v-8M90 62v-8" stroke="#aab2ba" stroke-width=".7"/>
    <path d="M32 61l2-12h7l2 12z M47 61l2-12h7l2 12z M65 61l2-12h7l2 12z M80 61l2-12h7l2 12z" fill="#dff3ff" opacity=".7" stroke="#fff" stroke-width=".5"/>
    <path d="M26 100h68M26 104h68" stroke="#aab2ba" stroke-width="1.1"/>
    <ellipse cx="33" cy="88" rx="3.2" ry="13" fill="#f6f7f9" stroke="#c8ced5" stroke-width=".6"/>
    <ellipse cx="43" cy="88" rx="3.2" ry="13" fill="#f6f7f9" stroke="#c8ced5" stroke-width=".6"/>
    <ellipse cx="53" cy="88" rx="3.2" ry="13" fill="#f6f7f9" stroke="#c8ced5" stroke-width=".6"/>
    <ellipse cx="63" cy="91" rx="2.6" ry="10" fill="#e7f1fb" stroke="#c8ced5" stroke-width=".6"/>
    <ellipse cx="72" cy="91" rx="2.6" ry="10" fill="#e7f1fb" stroke="#c8ced5" stroke-width=".6"/>
    <path d="M80 99l3-14h9l3 14z" fill="#c4473a"/>
    <g class="arm arm-top"><rect x="36" y="68" width="48" height="2.6" rx="1.3" fill="#9aa3ad"/></g>
    <g class="arm arm-bot"><rect x="30" y="107" width="60" height="3" rx="1.5" fill="#9aa3ad"/></g>
    <circle cx="60" cy="69.3" r="2" fill="#7d868f"/><circle cx="60" cy="108.5" r="2.4" fill="#7d868f"/>
    <g class="jets">
      <path d="M40 106l-6-38M50 106l-2-40M70 106l2-40M80 106l6-38M45 67l-4-22M75 67l4-22"/>
    </g>
    <g class="drops">
      <circle cx="35" cy="44" r="1"/><circle cx="52" cy="46" r="1.2"/><circle cx="68" cy="43" r="1"/><circle cx="86" cy="47" r="1.1"/>
    </g>
    <g class="steam-in"><path d="M40 112q-4-10 2-18t0-16M60 112q-4-10 2-18t0-16M80 112q-4-10 2-18t0-16"/></g>
  </g>
  <rect x="22" y="38" width="76" height="76" rx="4" fill="url(#ID-gloss)"/>
  <rect x="22" y="38" width="76" height="76" rx="4" fill="none" stroke="#7e8790" stroke-width="1.2"/>
  <rect x="14" y="118" width="92" height="10" rx="2" fill="#2b3036"/>
</g>`,

  water_heater: () => `
<defs>${DEFS}
<linearGradient id="ID-cyl" x1="0" x2="1"><stop offset="0" stop-color="#c3c9cf"/><stop offset=".3" stop-color="#ffffff"/><stop offset=".6" stop-color="#eef0f2"/><stop offset="1" stop-color="#aeb5bc"/></linearGradient>
<linearGradient id="ID-copper" x1="0" x2="1"><stop offset="0" stop-color="#a0603a"/><stop offset=".45" stop-color="#e2a477"/><stop offset="1" stop-color="#8a4f2e"/></linearGradient>
<linearGradient id="ID-arc" x1="0" x2="1"><stop offset="0" stop-color="#3e8ed0"/><stop offset=".5" stop-color="#f2c94c"/><stop offset="1" stop-color="#e5484d"/></linearGradient></defs>
<g class="hw-waves">
  <path d="M46 12q-3-4 0-8t0-8"/><path d="M60 10q-3-4 0-8t0-8"/><path d="M74 12q-3-4 0-8t0-8"/>
</g>
<ellipse cx="60" cy="133" rx="34" ry="4" fill="url(#ID-shadow)"/>
<rect x="49" y="114" width="6" height="18" fill="url(#ID-copper)"/>
<rect x="65" y="114" width="6" height="18" fill="url(#ID-copper)"/>
<rect x="48" y="122" width="8" height="3" rx="1" fill="#3e8ed0"/>
<rect x="64" y="122" width="8" height="3" rx="1" fill="#e5484d"/>
<rect x="40" y="117" width="9" height="5" rx="1.2" fill="#c9a43a" stroke="#8a6d1f" stroke-width=".4"/>
<path d="M30 26q0-14 30-14t30 14v80q0 12-30 12t-30-12z" fill="url(#ID-cyl)" stroke="#a7aeb5" stroke-width=".8"/>
<path d="M30 26q0 9 30 9t30-9" fill="none" stroke="#b7bec5" stroke-width=".8"/>
<path d="M30 104q0 9 30 9t30-9" fill="none" stroke="#b7bec5" stroke-width=".8"/>
<rect x="38" y="58" width="44" height="40" rx="5" fill="#f4f6f8" stroke="#b5bcc3" stroke-width=".7"/>
<circle cx="60" cy="76" r="13" fill="url(#ID-chrome)"/>
<circle cx="60" cy="76" r="11" fill="#fcfcfd"/>
<path d="M51.5 84.5a12 12 0 1 1 17 0" fill="none" stroke="url(#ID-arc)" stroke-width="2.2" stroke-linecap="round" transform="rotate(0 60 76)"/>
<path d="M60 67.4v2M52.6 70.6l1.4 1.4M67.4 70.6l-1.4 1.4M50 76h2M68 76h2" stroke="#7d868f" stroke-width=".7"/>
<g class="needle"><path d="M60 76l-1.1 0l1.1-8.5l1.1 8.5z" fill="#c62828"/></g>
<circle cx="60" cy="76" r="1.6" fill="#3a4148"/>
<text class="gauge-txt" x="60" y="85" text-anchor="middle">--°</text>
<circle class="hw-led" cx="76" cy="92" r="1.8"/>
<rect x="43" y="90.5" width="16" height="3" rx="1.2" fill="#d5dade"/>
<path d="M36 40q4-6 6-1" stroke="#fff" stroke-opacity=".9" stroke-width="2" fill="none" stroke-linecap="round"/>
<rect x="34" y="34" width="5" height="70" rx="2.5" fill="#fff" opacity=".35"/>`,

  oven: () => `
<defs>${DEFS}<clipPath id="ID-win"><rect x="22" y="56" width="76" height="56" rx="4"/></clipPath>
<linearGradient id="ID-cavity" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3330"/><stop offset="1" stop-color="#181412"/></linearGradient></defs>
<ellipse cx="60" cy="133" rx="52" ry="5" fill="url(#ID-shadow)"/>
<rect x="10" y="10" width="100" height="120" rx="5" fill="url(#ID-inox)" stroke="#949ca5" stroke-width=".8"/>
<rect x="10" y="10" width="100" height="22" rx="5" fill="url(#ID-dark)"/>
<rect x="10" y="26" width="100" height="6" fill="url(#ID-dark)"/>
<circle cx="24" cy="21" r="7" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".5"/>
<circle cx="24" cy="21" r="4.6" fill="#2a3036"/><g class="knob"><line x1="24" y1="21" x2="24" y2="17.2" stroke="#e7eaed" stroke-width="1.3" stroke-linecap="round"/></g>
<circle cx="96" cy="21" r="7" fill="url(#ID-chrome)" stroke="#5c646d" stroke-width=".5"/>
<circle cx="96" cy="21" r="4.6" fill="#2a3036"/><line x1="96" y1="21" x2="99" y2="18.5" stroke="#e7eaed" stroke-width="1.3" stroke-linecap="round"/>
${lcd(43, 15, 34, 12)}
<circle class="led l1" cx="38" cy="21" r="1.3"/>
<rect x="14" y="36" width="92" height="90" rx="3" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".6"/>
<rect x="20" y="40.5" width="80" height="4.5" rx="2.25" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".5"/>
<rect x="24" y="44.5" width="3" height="4" fill="#8f979f"/><rect x="93" y="44.5" width="3" height="4" fill="#8f979f"/>
<rect x="22" y="56" width="76" height="56" rx="4" fill="url(#ID-cavity)"/>
<g clip-path="url(#ID-win)">
  <rect class="ilight" x="22" y="56" width="76" height="56" fill="url(#ID-warm)"/>
  <path class="element" d="M26 61h8l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3l3 3l3-3h8"/>
  <path d="M24 97h72M24 99.5h72" stroke="#8d8680" stroke-width=".9"/>
  <path d="M36 97l3-10h42l3 10z" fill="#b5442f"/>
  <path d="M39 87q21-8 42 0z" fill="#d06a3c"/>
  <ellipse cx="60" cy="86.5" rx="5" ry="1.4" fill="#5b2a1a"/>
  <path d="M42 90h36" stroke="#e48a5c" stroke-width=".8"/>
  <g class="haze"><path d="M44 82q-3-5 0-10t0-10M60 80q-3-5 0-10t0-10M76 82q-3-5 0-10t0-10"/></g>
</g>
<path d="M22 70L44 56h16L22 82z" fill="#fff" opacity=".08"/>
<rect x="22" y="56" width="76" height="56" rx="4" fill="none" stroke="#5d656d" stroke-width="1.2"/>
<rect x="14" y="118" width="92" height="8" rx="1.5" fill="#000" opacity=".12"/>`,

  microwave: () => `
<defs>${DEFS}<clipPath id="ID-win"><rect x="13" y="42" width="66" height="62" rx="4"/></clipPath>
<linearGradient id="ID-cav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a4f55"/><stop offset="1" stop-color="#22262a"/></linearGradient></defs>
<ellipse cx="60" cy="117" rx="56" ry="5" fill="url(#ID-shadow)"/>
<rect x="8" y="111" width="10" height="4" rx="1" fill="#2c3136"/><rect x="102" y="111" width="10" height="4" rx="1" fill="#2c3136"/>
<rect x="5" y="34" width="110" height="78" rx="6" fill="url(#ID-inox)" stroke="#949ca5" stroke-width=".8"/>
<rect x="9" y="38" width="74" height="70" rx="5" fill="#1a1d21"/>
<rect x="13" y="42" width="66" height="62" rx="4" fill="url(#ID-cav)"/>
<g clip-path="url(#ID-win)">
  <rect class="ilight" x="13" y="42" width="66" height="62" fill="url(#ID-warm)"/>
  <ellipse cx="46" cy="94" rx="24" ry="5" fill="#c8d4dc" opacity=".85"/>
  <ellipse cx="46" cy="93.4" rx="21" ry="3.8" fill="#e7eef3" opacity=".9"/>
  <g class="bowl">
    <path d="M35 80h22q-1 11-11 12q-10-1-11-12z" fill="#f4f1ea" stroke="#c9c2b4" stroke-width=".6"/>
    <ellipse cx="46" cy="80" rx="11" ry="2.4" fill="#d9822b"/>
    <path d="M38 85h16" stroke="#3e8ed0" stroke-width="1.2"/>
  </g>
  <g class="steam-in"><path d="M42 76q-3-5 0-10t0-10M50 76q-3-5 0-10t0-10"/></g>
  <rect x="13" y="42" width="66" height="62" fill="url(#ID-mesh)"/>
</g>
<path d="M13 60L33 42h14L13 74z" fill="#fff" opacity=".1"/>
<rect x="84" y="38" width="3" height="70" rx="1.5" fill="url(#ID-chrome)"/>
${lcd(90, 42, 21, 10)}
<g fill="#d7dce1" stroke="#9aa2ab" stroke-width=".4">
  <rect x="90" y="57" width="6" height="5" rx="1.2"/><rect x="97.5" y="57" width="6" height="5" rx="1.2"/><rect x="105" y="57" width="6" height="5" rx="1.2"/>
  <rect x="90" y="64" width="6" height="5" rx="1.2"/><rect x="97.5" y="64" width="6" height="5" rx="1.2"/><rect x="105" y="64" width="6" height="5" rx="1.2"/>
  <rect x="90" y="71" width="6" height="5" rx="1.2"/><rect x="97.5" y="71" width="6" height="5" rx="1.2"/><rect x="105" y="71" width="6" height="5" rx="1.2"/>
</g>
<circle cx="100.5" cy="88" r="7" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".5"/>
<circle cx="100.5" cy="88" r="4.6" fill="#e9ecef"/>
<g class="knob"><line x1="100.5" y1="88" x2="100.5" y2="84.2" stroke="#4f5964" stroke-width="1.3" stroke-linecap="round"/></g>
<rect class="start" x="90" y="98" width="21" height="6" rx="2"/>`,

  fridge: () => `
<defs>${DEFS}
<linearGradient id="ID-in" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfe9f2"/></linearGradient>
<linearGradient id="ID-frost" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9f6ff"/><stop offset="1" stop-color="#bfe0f5"/></linearGradient></defs>
<ellipse cx="60" cy="134" rx="40" ry="4.5" fill="url(#ID-shadow)"/>
<rect x="26" y="4" width="68" height="126" rx="6" fill="#9aa2ab"/>
<!-- interiors -->
<rect x="29" y="7" width="62" height="36" rx="3" fill="url(#ID-frost)"/>
<path d="M31 25h58" stroke="#a9cbe2" stroke-width="1"/>
<rect x="34" y="28" width="22" height="11" rx="2" fill="#d9eefb" stroke="#a9cbe2" stroke-width=".6"/>
<rect x="60" y="28" width="26" height="11" rx="2" fill="#d9eefb" stroke="#a9cbe2" stroke-width=".6"/>
<rect x="29" y="47" width="62" height="78" rx="3" fill="url(#ID-in)"/>
<path d="M31 72h58M31 96h58" stroke="#b9c8d6" stroke-width="1.1"/>
<rect x="36" y="58" width="6" height="14" rx="1.5" fill="#3fbf7f"/><rect x="44" y="62" width="8" height="10" rx="2" fill="#f2c94c"/>
<rect x="56" y="64" width="12" height="8" rx="2" fill="#e5484d"/><rect x="72" y="60" width="5" height="12" rx="1.5" fill="#3e8ed0"/>
<rect x="38" y="86" width="14" height="10" rx="2" fill="#ffffff" stroke="#c9d3dc" stroke-width=".6"/><circle cx="64" cy="91" r="5" fill="#ff8f3d"/><circle cx="74" cy="92" r="4" fill="#9fd356"/>
<rect x="32" y="104" width="56" height="18" rx="2" fill="#e3eef7" stroke="#b9c8d6" stroke-width=".6"/>
<rect class="flight" x="29" y="47" width="62" height="78" fill="#fffbe6" opacity="0"/>
<!-- doors -->
<g class="fz-door">
  <rect x="26" y="4" width="68" height="40" rx="6" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".7"/>
  <rect x="84" y="12" width="3.4" height="24" rx="1.7" fill="url(#ID-chrome)" stroke="#6f7781" stroke-width=".4"/>
</g>
<g class="fr-door">
  <rect x="26" y="46" width="68" height="84" rx="6" fill="url(#ID-inox)" stroke="#8f979f" stroke-width=".7"/>
  <rect x="84" y="52" width="3.4" height="40" rx="1.7" fill="url(#ID-chrome)" stroke="#6f7781" stroke-width=".4"/>
  <rect x="35" y="54" width="24" height="12" rx="2" fill="#0c1720" stroke="#7d868f" stroke-width=".5"/>
  <text class="lcd fr-temp" x="49.5" y="62.8" text-anchor="middle">--°</text>
  <g class="flake"><path d="M39.5 57v6M36.9 58.5l5.2 3M36.9 61.5l5.2-3" stroke-width=".8" stroke-linecap="round"/></g>
  <path d="M30 50v76" stroke="#fff" stroke-opacity=".55" stroke-width="2"/>
</g>
<g class="mist"><circle cx="40" cy="132" r="1.1"/><circle cx="52" cy="133" r=".9"/><circle cx="66" cy="132" r="1.2"/><circle cx="79" cy="133" r=".9"/></g>`,
};

/* ------------------------------------------------------------------ */
/* Appliance definitions                                               */
/* ------------------------------------------------------------------ */
const CYCLE_FIELDS = ["entity", "power", "energy", "cost", "remaining", "progress", "program", "door", "switch"];
const DEF = {
  washer: { accent: "active", threshold: 10, fields: CYCLE_FIELDS,
    keys: ["lave_linge", "lavelinge", "washing_machine", "washer", "machine_a_laver"] },
  dryer: { accent: "active", threshold: 10, fields: CYCLE_FIELDS,
    keys: ["seche_linge", "sechelinge", "tumble_dryer", "dryer"] },
  dishwasher: { accent: "active", threshold: 10, fields: CYCLE_FIELDS,
    keys: ["lave_vaisselle", "lavevaisselle", "dishwasher"] },
  water_heater: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "temperature", "target_temperature", "switch"],
    keys: ["ballon_eau_chaude", "ballon", "chauffe_eau", "water_heater", "boiler", "cumulus"] },
  oven: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "temperature", "target_temperature", "remaining", "program", "door", "switch"],
    keys: ["four", "oven"] },
  microwave: { accent: "active", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "remaining", "program", "door", "switch"],
    keys: ["micro_onde", "micro_ondes", "microondes", "microwave"] },
  fridge: { accent: "cold", threshold: 20,
    fields: ["entity", "power", "energy", "cost", "temperature", "freezer_temperature", "door", "freezer_door", "switch"],
    keys: ["refrigerateur", "frigo", "fridge", "refrigerator", "frigidaire"] },
};

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const BAD = ["unavailable", "unknown", "none", ""];
const OFF_STATES = ["off", "idle", "inactive", "false", "standby", "stopped", "stop", "ready", "arret", "arrêt", "veille", "inactif", "pause", "paused", "0"];
const DONE_STATES = ["finished", "finish", "done", "end", "ended", "complete", "completed", "termine", "terminé", "fin", "cycle_finished"];
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const num = (st) => {
  if (!st || BAD.includes(String(st.state).toLowerCase())) return null;
  const n = parseFloat(st.state);
  return Number.isFinite(n) ? n : null;
};
const domainOf = (id) => (id || "").split(".")[0];
const loc = (hass) => hass?.locale?.language || hass?.language || undefined;

function fmtNum(hass, n, digits, minDigits = 0) {
  try {
    return new Intl.NumberFormat(loc(hass), { maximumFractionDigits: digits, minimumFractionDigits: minDigits }).format(n);
  } catch (e) { return n.toFixed(digits); }
}
const powerW = (st) => { const v = num(st); if (v === null) return null; return st.attributes.unit_of_measurement === "kW" ? v * 1000 : v; };
function fmtPower(hass, st) {
  const w = powerW(st); if (w === null) return null;
  return w >= 1000 ? `${fmtNum(hass, w / 1000, 2)} kW` : `${fmtNum(hass, w, w < 10 ? 1 : 0)} W`;
}
function fmtUnit(hass, st, digits, minDigits = 0) {
  const v = num(st); if (v === null) return null;
  const u = st.attributes.unit_of_measurement;
  return u ? `${fmtNum(hass, v, digits, minDigits)} ${u}` : fmtNum(hass, v, digits, minDigits);
}
function parseRemaining(st) {
  if (!st) return null;
  const v = String(st.state);
  if (BAD.includes(v.toLowerCase())) return null;
  const a = st.attributes || {};
  if (a.device_class === "timestamp" || /^\d{4}-\d\d-\d\dT/.test(v)) {
    const d = (new Date(v).getTime() - Date.now()) / 60000;
    return Number.isFinite(d) ? Math.max(0, d) : null;
  }
  const m = v.match(/^(\d+):(\d{2})(?::(\d{2}))?$/);
  if (m) return (+m[1]) * 60 + (+m[2]) + (m[3] ? +m[3] / 60 : 0);
  const n = parseFloat(v);
  if (!Number.isFinite(n)) return null;
  const u = String(a.unit_of_measurement || "min").toLowerCase();
  if (u === "h") return n * 60;
  if (u === "s") return n / 60;
  if (u === "d") return n * 1440;
  return n;
}
function fmtDuration(min) {
  const m = Math.round(min);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60), r = m % 60;
  return r ? `${h} h ${String(r).padStart(2, "0")}` : `${h} h`;
}
const lcdDuration = (min) => {
  if (min < 10) { const s = Math.round(min * 60); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; }
  const m = Math.round(min); return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;
};
function fmtClock(hass, date) {
  try { return date.toLocaleTimeString(loc(hass), { hour: "2-digit", minute: "2-digit" }); }
  catch (e) { return `${date.getHours()}:${String(date.getMinutes()).padStart(2, "0")}`; }
}
function stateText(hass, st) {
  if (!st) return "";
  try { if (hass.formatEntityState) return hass.formatEntityState(st); } catch (e) { /* ignore */ }
  return st.state;
}
const isOn = (st) => !!st && String(st.state).toLowerCase() === "on";

/* ------------------------------------------------------------------ */
/* Base card                                                           */
/* ------------------------------------------------------------------ */
let SEQ = 0;

class ApplianceCardBase extends HTMLElement {
  static get kind() { return "washer"; }
  static getConfigForm() { return buildForm(this.kind); }
  static getStubConfig(hass) { return stubFor(this.kind, hass); }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    if (!["entity", "power", "switch", "temperature"].some((f) => config[f])) {
      throw new Error(lang() === "fr"
        ? "Indique au moins `entity`, `power`, `switch` ou `temperature`."
        : "Set at least one of `entity`, `power`, `switch` or `temperature`.");
    }
    this._config = { ...config };
    this._kind = this.constructor.kind;
    this._def = DEF[this._kind];
    this._lastKey = null;
    this._build();
    if (this._hass) this._update(true);
  }

  set hass(hass) {
    this._hass = hass;
    if (this._config) this._update(false);
  }

  connectedCallback() {
    // keep LCD clock / countdown fresh even when no entity changes
    this._tick = setInterval(() => { if (this._hass && this._config) this._update(false); }, 20000);
  }
  disconnectedCallback() { clearInterval(this._tick); }

  getCardSize() { return 4; }
  getGridOptions() { return { columns: 6, min_columns: 6 }; }

  _ids() {
    const c = this._config;
    return ["entity", "power", "energy", "cost", "remaining", "progress", "program", "door", "switch",
      "temperature", "target_temperature", "freezer_temperature", "freezer_door"].map((k) => c[k]).filter(Boolean);
  }

  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    const id = `ac${++SEQ}`;
    const svg = SVG[this._kind]().replace(/ID-/g, `${id}-`);
    this.shadowRoot.innerHTML = `
      <style>${STYLE}</style>
      <ha-card>
        <div class="wrap" id="wrap">
          <div class="top">
            <div class="illus"><svg viewBox="0 0 120 140" aria-hidden="true">${svg}</svg></div>
            <div class="side">
              <div class="head">
                <div class="info" id="info"></div>
                <div class="actions" id="actions"></div>
              </div>
              <div class="stats" id="stats"></div>
            </div>
          </div>
          <div class="bar" id="bar"><div class="bar-fill" id="barfill"></div></div>
        </div>
      </ha-card>`;
    this.shadowRoot.querySelector("ha-card").addEventListener("click", (ev) => {
      const path = ev.composedPath();
      if (path.some((n) => n.classList && n.classList.contains("toggle"))) return;
      const tile = path.find((n) => n.dataset && n.dataset.entity);
      const c = this._config;
      const eid = tile ? tile.dataset.entity : (c.entity || c.power || c.switch || c.temperature);
      if (eid) this.dispatchEvent(new CustomEvent("hass-more-info", { detail: { entityId: eid }, bubbles: true, composed: true }));
    });
    if (this._config.color) this.style.setProperty("--ac-accent", this._config.color);
  }

  _update(force) {
    const hass = this._hass;
    const key = this._ids().map((i) => {
      const s = hass.states[i];
      return s ? `${s.state}|${s.attributes.temperature ?? ""}|${s.attributes.current_temperature ?? ""}` : "x";
    }).join(";") + "|" + lang(hass) + "|" + Math.floor(Date.now() / 30000);
    if (!force && key === this._lastKey) return;
    this._lastKey = key;
    this._render(this._compute());
  }

  /* ---------------- state model ---------------- */
  _compute() {
    const hass = this._hass, c = this._config, d = this._def, kind = this._kind;
    const S = (i) => (i ? hass.states[i] : undefined);
    const main = S(c.entity), pw = S(c.power), sw = S(c.switch);
    const threshold = c.threshold ?? d.threshold;
    const watts = powerW(pw);
    const m = {
      main, pw, sw, watts, threshold,
      energy: S(c.energy), cost: S(c.cost), remaining: parseRemaining(S(c.remaining)),
      progress: num(S(c.progress)), program: S(c.program), door: S(c.door),
      temp: S(c.temperature), target: S(c.target_temperature),
      ftemp: S(c.freezer_temperature), fdoor: S(c.freezer_door),
      status: "idle", phase: null, alerts: [],
    };
    if (main && ["water_heater", "climate"].includes(domainOf(c.entity))) {
      if (!m.temp && main.attributes.current_temperature != null) m.tempVal = main.attributes.current_temperature;
      if (!m.target && main.attributes.temperature != null) m.targetVal = main.attributes.temperature;
    }
    if (m.tempVal == null) m.tempVal = num(m.temp);
    if (m.targetVal == null) m.targetVal = num(m.target);
    m.tempUnit = m.temp?.attributes.unit_of_measurement || hass.config?.unit_system?.temperature || "°C";

    const ref = main || sw;
    let base = null;
    if (ref) {
      const s = String(ref.state).toLowerCase();
      const dom = domainOf(main ? c.entity : c.switch);
      if (BAD.includes(s)) base = null;
      else if (DONE_STATES.includes(s)) base = "finished";
      else if (OFF_STATES.includes(s)) {
        base = ["standby", "veille"].includes(s) ? "standby"
          : ["idle", "inactive", "inactif", "ready", "stopped", "stop", "pause", "paused"].includes(s) ? "idle"
          : ["input_boolean", "binary_sensor"].includes(dom) ? "idle" : "off";
      }
      // a plug/switch being "on" only means powered: let the power sensor decide
      else if (["switch", "light", "water_heater", "climate", "fan"].includes(dom)) base = "on";
      // input_boolean / binary_sensor "on", or a descriptive sensor state, means running
      else base = "running";
    }
    if (base === null && !pw && ref) base = "unavailable";
    const powered = watts !== null && watts > threshold;
    if (base === "on" || base === null) {
      if (watts !== null) base = powered ? "running" : (base === "on" ? "standby" : "idle");
      else base = base === "on" ? "running" : "idle";
    }
    if (base === "finished" && powered) base = "running";
    if (sw && String(sw.state).toLowerCase() === "off" && base !== "unavailable") base = "off";

    if (kind === "water_heater") {
      if (base === "off" || base === "unavailable") m.status = base;
      else if (powered || (watts === null && base === "running")) m.status = "heating";
      else m.status = "ready";
    } else if (kind === "oven") {
      if (["off", "idle", "standby", "unavailable", "finished"].includes(base)) m.status = base === "standby" ? "off" : base;
      else if (m.tempVal != null && m.targetVal != null && m.tempVal < m.targetVal - 5) m.status = "preheating";
      else m.status = "heating";
    } else if (kind === "fridge") {
      if (base === "off" || base === "unavailable") m.status = base;
      else m.status = powered ? "cooling" : "standby";
      const maxF = c.max_temperature ?? 8, maxZ = c.freezer_max_temperature ?? -12;
      if (m.tempVal != null && m.tempVal > maxF) m.alerts.push("too_warm");
      if (num(m.ftemp) != null && num(m.ftemp) > maxZ) m.alerts.push("too_warm");
    } else {
      m.status = base;
    }

    // phase detection (washer / dryer / dishwasher) from status or program text
    if (m.status === "running" && ["washer", "dryer", "dishwasher"].includes(kind)) {
      const txt = `${main ? main.state : ""} ${m.program ? m.program.state : ""}`.toLowerCase();
      if (/rin[cç]|rinse/.test(txt)) m.phase = "rinse";
      else if (/essor|spin|centrif|essorage/.test(txt)) m.phase = "spin";
      else if (/refroid|cool|anti.?froiss|wrinkle/.test(txt)) m.phase = "cool";
      else if (/s[eé]ch|dry/.test(txt)) m.phase = "dry";
      else m.phase = kind === "dryer" ? "dry" : "wash";
    }
    if (isOn(m.door) || isOn(m.fdoor)) m.alerts.unshift("door_open");
    m.alerts = [...new Set(m.alerts)];
    return m;
  }

  /* ---------------- rendering ---------------- */
  _lcdText(m) {
    const hass = this._hass, kind = this._kind;
    const active = ["running", "heating", "preheating", "cooling"].includes(m.status);
    if (m.status === "unavailable") return "- - -";
    if (kind === "fridge") return m.tempVal != null ? `${fmtNum(hass, m.tempVal, 0)}°` : "--°";
    if (kind === "oven") {
      if (active && m.tempVal != null) return `${Math.round(m.tempVal)}°`;
      if (active) return m.remaining ? lcdDuration(m.remaining) : "ON";
      return fmtClock(hass, new Date());
    }
    if (kind === "microwave") {
      if (m.status === "finished") return "End";
      if (active) return m.remaining != null ? lcdDuration(m.remaining) : "ON";
      return fmtClock(hass, new Date());
    }
    if (m.status === "finished") return "END";
    if (!active) return "OFF";
    if (m.remaining != null && m.remaining > 0) return lcdDuration(m.remaining);
    return { wash: "WASH", rinse: "RINSE", spin: "SPIN", dry: "DRY", cool: "COOL" }[m.phase] || "RUN";
  }

  _render(m) {
    const hass = this._hass, c = this._config, kind = this._kind;
    const $ = (i) => this.shadowRoot.getElementById(i);
    const active = ["running", "heating", "preheating", "cooling"].includes(m.status);
    $("wrap").className = [
      "wrap", `k-${kind}`, `st-${m.status}`, `accent-${this._def.accent}`,
      active ? "active" : "", m.phase ? `ph-${m.phase}` : "",
      m.alerts.length ? "alert" : "", isOn(m.door) ? "door-open" : "", isOn(m.fdoor) ? "fz-open" : "",
      m.alerts.includes("too_warm") ? "warm" : "", c.animations === false ? "no-anim" : "",
    ].filter(Boolean).join(" ");

    // illustration dynamic parts
    const sr = this.shadowRoot;
    const lcdEl = sr.querySelector(".lcd");
    if (lcdEl) lcdEl.textContent = this._lcdText(m);
    if (kind === "water_heater") {
      const t = m.tempVal;
      const ang = t == null ? -135 : -135 + Math.max(0, Math.min(1, (t - 10) / 70)) * 270;
      sr.querySelector(".needle").setAttribute("transform", `rotate(${ang.toFixed(1)} 60 76)`);
      sr.querySelector(".gauge-txt").textContent = t == null ? "--°" : `${Math.round(t)}°`;
    }

    // name + status
    const name = c.name || tr(hass, kind);
    let statusTxt = m.phase ? tr(hass, `ph_${m.phase}`) : tr(hass, m.status);
    if (m.main && ["sensor", "input_select", "select"].includes(domainOf(c.entity)) &&
        active && !["fridge", "water_heater"].includes(kind)) {
      const raw = String(m.main.state).toLowerCase();
      if (![...OFF_STATES, ...DONE_STATES, "on", "running", "run"].includes(raw)) statusTxt = stateText(hass, m.main);
    }
    const prog = m.program && active && !BAD.includes(String(m.program.state).toLowerCase()) ? stateText(hass, m.program) : "";
    let sub = "";
    if (active && m.remaining != null && m.remaining > 0) {
      sub = `${tr(hass, "ends_at")} ${fmtClock(hass, new Date(Date.now() + m.remaining * 60000))}`;
    }
    const alertTxt = m.alerts.map((a) => tr(hass, a)).join(" · ");
    $("info").innerHTML = `
      <div class="name">${esc(name)}</div>
      <div class="status"><span class="dot"></span><span>${esc(statusTxt)}${prog && prog !== statusTxt ? ` · ${esc(prog)}` : ""}</span></div>
      ${alertTxt ? `<div class="alert-line"><ha-icon icon="mdi:alert-circle-outline"></ha-icon>${esc(alertTxt)}</div>` : ""}
      ${sub ? `<div class="sub">${esc(sub)}</div>` : ""}`;

    if (c.switch && c.show_toggle !== false) {
      const on = isOn(m.sw);
      $("actions").innerHTML = `<button class="toggle ${on ? "on" : ""}" title="${esc(tr(hass, "toggle"))}" aria-label="${esc(tr(hass, "toggle"))}" aria-pressed="${on}"><ha-icon icon="mdi:power"></ha-icon></button>`;
      $("actions").querySelector("button").onclick = (ev) => {
        ev.stopPropagation();
        const dom = domainOf(c.switch);
        hass.callService(["switch", "input_boolean", "light", "fan"].includes(dom) ? dom : "homeassistant", "toggle", { entity_id: c.switch });
      };
    } else $("actions").innerHTML = "";

    // progress bar
    let pct = null;
    if (active && m.progress != null) pct = m.progress;
    else if ((kind === "oven" && m.status === "preheating") || (kind === "water_heater" && m.status !== "off")) {
      if (m.tempVal != null && m.targetVal) {
        const floor = kind === "water_heater" ? 10 : 20;
        pct = ((m.tempVal - floor) / (m.targetVal - floor)) * 100;
      }
    }
    if (pct != null && Number.isFinite(pct)) {
      $("bar").style.display = "";
      $("barfill").style.width = `${Math.max(0, Math.min(100, pct))}%`;
    } else $("bar").style.display = "none";

    // stats
    const tiles = [];
    const tile = (icon, value, label, entity, cls = "") => {
      if (value == null) return;
      tiles.push(`<div class="tile ${cls}" ${entity ? `data-entity="${esc(entity)}"` : ""}>
        <span class="val">${esc(value)}</span><span class="lbl"><ha-icon icon="${icon}"></ha-icon>${esc(label)}</span></div>`);
    };
    const tEntity = c.temperature || (["water_heater", "climate"].includes(domainOf(c.entity)) ? c.entity : null);
    if (kind === "fridge") {
      if (m.tempVal != null) tile("mdi:thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "fridge_temp"), tEntity,
        m.tempVal > (c.max_temperature ?? 8) ? "warn" : "");
      if (m.ftemp) tile("mdi:snowflake", fmtUnit(hass, m.ftemp, 1), tr(hass, "freezer_temp"), c.freezer_temperature,
        num(m.ftemp) > (c.freezer_max_temperature ?? -12) ? "warn" : "");
    } else if (kind === "water_heater" || kind === "oven") {
      if (m.tempVal != null) tile("mdi:thermometer", `${fmtNum(hass, m.tempVal, 0)} ${m.tempUnit}`, tr(hass, "temperature"), tEntity);
      if (m.targetVal != null) tile("mdi:target", `${fmtNum(hass, m.targetVal, 0)} ${m.tempUnit}`, tr(hass, "target"), c.target_temperature || tEntity);
    }
    if (m.remaining != null && active && kind !== "water_heater") tile("mdi:timer-sand", fmtDuration(m.remaining), tr(hass, "remaining"), c.remaining);
    if (m.pw) tile("mdi:flash", fmtPower(hass, m.pw) ?? "—", tr(hass, "power"), c.power);
    if (m.energy) tile("mdi:lightning-bolt-circle", fmtUnit(hass, m.energy, 2) ?? "—", tr(hass, "energy"), c.energy);
    if (m.cost) tile("mdi:cash", fmtUnit(hass, m.cost, 2, 2) ?? "—", tr(hass, "cost"), c.cost);
    $("stats").innerHTML = tiles.join("");
    $("stats").style.display = tiles.length ? "" : "none";
  }
}

/* ------------------------------------------------------------------ */
/* Visual editor schema                                                */
/* ------------------------------------------------------------------ */
const SEL = {
  entity: { entity: {} },
  power: { entity: { domain: "sensor", device_class: "power" } },
  energy: { entity: { domain: "sensor", device_class: "energy" } },
  cost: { entity: { domain: ["sensor", "input_number"] } },
  remaining: { entity: { domain: "sensor" } },
  progress: { entity: { domain: "sensor" } },
  program: { entity: { domain: ["sensor", "select", "input_select"] } },
  door: { entity: { domain: "binary_sensor" } },
  freezer_door: { entity: { domain: "binary_sensor" } },
  switch: { entity: { domain: ["switch", "input_boolean", "light"] } },
  temperature: { entity: { domain: ["sensor", "input_number"], device_class: "temperature" } },
  target_temperature: { entity: { domain: ["sensor", "input_number", "number"] } },
  freezer_temperature: { entity: { domain: "sensor", device_class: "temperature" } },
};
function buildForm(kind) {
  const d = DEF[kind];
  return {
    schema: [
      { name: "name", selector: { text: {} } },
      ...d.fields.map((f) => ({ name: f, selector: SEL[f] })),
      {
        type: "expandable", name: "", title: "Options", flatten: true, schema: [
          { name: "threshold", selector: { number: { min: 0, max: 3000, step: 1, mode: "box", unit_of_measurement: "W" } } },
          ...(kind === "fridge" ? [
            { name: "max_temperature", selector: { number: { min: 0, max: 15, step: 0.5, mode: "box" } } },
            { name: "freezer_max_temperature", selector: { number: { min: -30, max: 0, step: 0.5, mode: "box" } } },
          ] : []),
          { name: "animations", selector: { boolean: {} }, default: true },
          { name: "color", selector: { text: {} } },
        ],
      },
    ],
    computeLabel: (s) => (s.name ? tr(null, `f_${s.name}`) : undefined),
  };
}

/* ------------------------------------------------------------------ */
/* Stub config: auto-detect entities by name                           */
/* ------------------------------------------------------------------ */
function stubFor(kind, hass) {
  const keys = DEF[kind].keys;
  const ids = Object.keys(hass?.states || {});
  const match = (i) => keys.some((k) => i.split(".")[1].includes(k));
  const pick = (pred) => ids.find((i) => match(i) && pred(i, hass.states[i]));
  const dc = (st) => st.attributes.device_class;
  const cfg = {};
  const power = pick((i, st) => i.startsWith("sensor.") && dc(st) === "power");
  const energy = pick((i, st) => i.startsWith("sensor.") && dc(st) === "energy" && /(daily|jour|today|day)/.test(i))
    || pick((i, st) => i.startsWith("sensor.") && dc(st) === "energy");
  const cost = pick((i) => i.startsWith("sensor.") && /(cout|cost|prix)/.test(i) && /(jour|daily|today|day)/.test(i))
    || pick((i, st) => i.startsWith("sensor.") && dc(st) === "monetary");
  const sw = pick((i) => i.startsWith("switch.") && !/(child_lock|lock|led|indicator)/.test(i));
  const wh = kind === "water_heater" ? pick((i) => i.startsWith("water_heater.")) : null;
  const temp = pick((i, st) => i.startsWith("sensor.") && dc(st) === "temperature");
  const flag = ["washer", "dryer", "dishwasher", "microwave"].includes(kind)
    ? pick((i) => /^(input_boolean|binary_sensor)\./.test(i) && /(running|en_cours|marche|cycle)/.test(i)) : null;
  if (wh) cfg.entity = wh;
  if (flag) cfg.entity = flag;
  if (power) cfg.power = power;
  if (energy) cfg.energy = energy;
  if (cost) cfg.cost = cost;
  if (sw && ["water_heater", "oven", "microwave"].includes(kind)) cfg.switch = sw;
  else if (sw && !cfg.entity) cfg.entity = sw;
  if (temp && ["fridge", "water_heater", "oven"].includes(kind)) cfg.temperature = temp;
  if (!cfg.entity && !cfg.power && !cfg.switch && !cfg.temperature) cfg.power = "sensor.example_power";
  return cfg;
}

/* ------------------------------------------------------------------ */
/* Styles                                                              */
/* ------------------------------------------------------------------ */
const STYLE = `
:host {
  --ac-active: var(--appliance-active-color, var(--state-active-color, var(--primary-color)));
  --ac-heat: var(--appliance-heat-color, var(--state-climate-heat-color, #ff8a3d));
  --ac-cold: var(--appliance-cold-color, var(--state-climate-cool-color, #2b9af9));
  --ac-alert: var(--appliance-alert-color, var(--error-color, #db4437));
  --ac-ok: var(--appliance-ok-color, var(--success-color, #43a047));
  --ac-lcd: #38d9ff;
  display: block;
}
ha-card { height: 100%; cursor: pointer; overflow: hidden; }
.wrap { padding: 14px; display: flex; flex-direction: column; gap: 12px; --c: var(--ac-accent, var(--ac-active)); }
.wrap.accent-heat { --c: var(--ac-accent, var(--ac-heat)); }
.wrap.accent-cold { --c: var(--ac-accent, var(--ac-cold)); }
.top { display: flex; gap: 14px; min-width: 0; }
.illus {
  width: var(--appliance-illustration-size, 116px); flex: none; aspect-ratio: 120 / 140; border-radius: 16px; padding: 4px; box-sizing: content-box;
  background: radial-gradient(circle at 50% 40%, rgba(127,127,127,.10), rgba(127,127,127,.03) 70%);
}
.st-unavailable .illus { opacity: .5; filter: grayscale(1); }
svg { width: 100%; height: 100%; display: block; overflow: visible; }
.side { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 10px; }
.head { display: flex; gap: 8px; align-items: flex-start; }
.info { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
.name { font-size: 16px; font-weight: 600; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.status { display: flex; align-items: center; gap: 6px; font-size: 13px; color: var(--secondary-text-color); min-width: 0; }
.status span:last-child { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.dot { width: 8px; height: 8px; border-radius: 50%; flex: none; background: var(--disabled-text-color, #9e9e9e); }
.active .dot { background: var(--c); box-shadow: 0 0 0 3px rgba(127,127,127,.2); box-shadow: 0 0 0 3px color-mix(in srgb, var(--c) 25%, transparent); }
.active .status { color: var(--primary-text-color); }
.st-finished .dot { background: var(--ac-ok); }
.alert-line { display: flex; align-items: center; gap: 4px; font-size: 12px; font-weight: 600; color: var(--ac-alert); }
.alert-line ha-icon { --mdc-icon-size: 16px; }
.sub { font-size: 12px; color: var(--secondary-text-color); }
.actions:empty { display: none; }
.toggle {
  width: 38px; height: 38px; border-radius: 50%; border: none; cursor: pointer; display: grid; place-items: center; flex: none;
  color: var(--secondary-text-color); background: rgba(127,127,127,.14); transition: background .2s, color .2s;
}
.toggle.on { color: var(--text-primary-color, #fff); background: var(--c); }
.toggle:focus-visible { outline: 2px solid var(--c); outline-offset: 2px; }
.toggle ha-icon { --mdc-icon-size: 20px; }
.bar { height: 6px; border-radius: 3px; overflow: hidden; background: rgba(127,127,127,.18); }
.bar-fill { height: 100%; width: 0; border-radius: 3px; background: var(--c); transition: width .6s ease; }
.stats { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
.tile { display: flex; flex-direction: column; padding: 6px 9px; border-radius: 10px; min-width: 0; background: rgba(127,127,127,.09); }
.tile:hover { background: rgba(127,127,127,.16); }
.val { font-size: 14px; font-weight: 600; color: var(--primary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lbl { display: flex; align-items: center; gap: 3px; font-size: 11px; color: var(--secondary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lbl ha-icon { --mdc-icon-size: 13px; flex: none; }
.tile.warn .val, .tile.warn .lbl { color: var(--ac-alert); }

/* ---------- illustration: shared ---------- */
.lcd { font: 700 7.2px "Courier New", ui-monospace, monospace; letter-spacing: .4px; fill: #24404f; transition: fill .3s; }
.active .lcd { fill: var(--ac-lcd); }
.st-finished .lcd { fill: #3ddc84; }
.k-oven .lcd, .k-microwave .lcd { fill: #6fd8ff; }
.warm .fr-temp { fill: var(--ac-alert); }
.led { fill: #5a636d; transition: fill .3s; }
.ph-wash .l1, .ph-dry .l1, .k-dishwasher.active .l1, .k-oven.active .l1,
.ph-rinse .l2, .ph-cool .l2, .ph-spin .l3 { fill: var(--ac-lcd); }
.st-finished .l4 { fill: #3ddc84; }
.knob, .drum, .clothes, .bowl, .arm, .needle, .fz-door, .fr-door, .flake { transform-box: view-box; }
.knob { transition: transform .6s; }
.k-washer .knob, .k-dryer .knob { transform-origin: 93px 21px; }
.k-dryer .knob { transform-origin: 27px 21px; }
.k-oven .knob { transform-origin: 24px 21px; }
.k-microwave .knob { transform-origin: 100.5px 88px; }
.active .knob { transform: rotate(120deg); }
.ph-rinse .knob { transform: rotate(170deg); }
.ph-spin .knob { transform: rotate(220deg); }

/* ---------- washer / dryer ---------- */
.drum { transform-origin: 60px 80px; }
.water { opacity: 0; transition: opacity .8s; }
.water path { fill: #3f9fe0; opacity: .5; }
.ph-rinse .water path { fill: #8fd4ff; opacity: .45; }
.ph-wash .water, .ph-rinse .water { opacity: 1; }
.wave { animation: ac-wave 2.4s linear infinite; animation-play-state: paused; }
.ph-wash .wave, .ph-rinse .wave { animation-play-state: running; }
.ph-rinse .wave { animation-duration: 3.2s; }
.foam circle { fill: #fff; opacity: 0; }
.ph-wash .foam circle { animation: ac-bubble 2.6s ease-in infinite; }
.ph-wash .foam circle:nth-child(2) { animation-delay: .5s; } .ph-wash .foam circle:nth-child(3) { animation-delay: 1s; }
.ph-wash .foam circle:nth-child(4) { animation-delay: 1.5s; } .ph-wash .foam circle:nth-child(5) { animation-delay: .8s; }
.ph-wash .foam circle:nth-child(6) { animation-delay: 1.9s; }
.ph-wash .drum { animation: ac-tumble 3.4s ease-in-out infinite; }
.ph-rinse .drum { animation: ac-tumble 4.6s ease-in-out infinite; }
.ph-spin .drum { animation: ac-rot .32s linear infinite; }
.ph-spin .clothes { opacity: .85; }
.ph-spin .shake { animation: ac-shake .14s linear infinite; }
.k-dryer.ph-dry .drum, .k-dryer.ph-cool .drum { animation: ac-rot 2.8s linear infinite; }
.k-dryer.ph-dry .shake-soft { animation: ac-shake-soft .5s linear infinite; }
.heat { opacity: 0; transition: opacity .8s; }
.k-dryer.ph-dry .heat { opacity: 1; animation: ac-glow 2.2s ease-in-out infinite; }

/* ---------- dishwasher ---------- */
.floorlight { fill: #ff3b30; opacity: 0; transition: opacity .6s; filter: blur(1.5px); }
.k-dishwasher.active .floorlight { opacity: .85; }
.wash-light { opacity: 0; transition: opacity .6s; }
.k-dishwasher.active .wash-light { opacity: 1; }
.arm { transform-origin: 60px 0; transform-box: fill-box; }
.k-dishwasher.ph-wash .arm, .k-dishwasher.ph-rinse .arm { animation: ac-arm 1.2s linear infinite; }
.k-dishwasher .arm-top { animation-delay: -.4s !important; }
.jets path { stroke: #bfe8ff; stroke-width: 1; stroke-dasharray: 2 4; opacity: 0; fill: none; }
.k-dishwasher.ph-wash .jets path, .k-dishwasher.ph-rinse .jets path { opacity: .85; animation: ac-jet .5s linear infinite; }
.drops circle { fill: #bfe8ff; opacity: 0; }
.k-dishwasher.ph-wash .drops circle, .k-dishwasher.ph-rinse .drops circle { animation: ac-fall 1.1s ease-in infinite; }
.drops circle:nth-child(2) { animation-delay: .3s !important; } .drops circle:nth-child(3) { animation-delay: .6s !important; }
.drops circle:nth-child(4) { animation-delay: .85s !important; }
.steam-in path { fill: none; stroke: #fff; stroke-width: 2.4; stroke-linecap: round; opacity: 0; }
.k-dishwasher.ph-dry .steam-in path, .k-microwave.active .steam-in path { animation: ac-steam 2.6s ease-out infinite; }
.steam-in path:nth-child(2) { animation-delay: .8s !important; } .steam-in path:nth-child(3) { animation-delay: 1.6s !important; }

/* ---------- water heater ---------- */
.needle { transition: transform 1s ease; }
.gauge-txt { font: 700 5px system-ui, sans-serif; fill: #4b545e; }
.hw-led { fill: #9aa2ab; transition: fill .3s; }
.k-water_heater.st-ready .hw-led { fill: #3ddc84; }
.k-water_heater.st-heating .hw-led { fill: #ff8a3d; animation: ac-pulse 1.4s ease-in-out infinite; }
.hw-waves path { fill: none; stroke: var(--ac-heat); stroke-width: 2; stroke-linecap: round; opacity: 0; }
.k-water_heater.st-heating .hw-waves path { animation: ac-steam 2s ease-out infinite; }
.hw-waves path:nth-child(2) { animation-delay: .6s !important; } .hw-waves path:nth-child(3) { animation-delay: 1.2s !important; }

/* ---------- oven / microwave ---------- */
.ilight { opacity: 0; transition: opacity .8s; }
.active .ilight { opacity: .95; }
.element { fill: none; stroke: #5b3d33; stroke-width: 1.6; stroke-linejoin: round; transition: stroke .6s; }
.k-oven.active .element { stroke: #ff5a1f; filter: drop-shadow(0 0 2px #ff7a2e); animation: ac-pulse 1.8s ease-in-out infinite; }
.haze path { fill: none; stroke: #ffd9a8; stroke-width: 1.2; stroke-linecap: round; opacity: 0; }
.k-oven.active .haze path { animation: ac-steam 2.4s ease-out infinite; }
.haze path:nth-child(1) { animation-delay: .4s !important; }
.bowl { transform-origin: 46px 86px; }
.k-microwave.active .bowl { animation: ac-turn 5s linear infinite; }
.start { fill: #c9ced4; stroke: #8f979f; stroke-width: .4; transition: fill .3s; }
.k-microwave.active .start { fill: #3ddc84; }

/* ---------- fridge ---------- */
.fz-door, .fr-door { transform-origin: 26px 0; transition: transform .6s cubic-bezier(.3,.7,.3,1); }
.door-open .fr-door { transform: scaleX(.16) skewY(-6deg); }
.fz-open .fz-door { transform: scaleX(.16) skewY(-6deg); }
.flight { transition: opacity .4s; } .door-open .flight { opacity: .35; }
.flake { stroke: var(--ac-cold); transform-origin: 39.5px 60px; }
.k-fridge.st-cooling .flake { animation: ac-pulse 2.4s ease-in-out infinite; }
.mist circle { fill: #9fd6ff; opacity: 0; }
.k-fridge.st-cooling .mist circle { animation: ac-mist 3s ease-out infinite; }
.mist circle:nth-child(2) { animation-delay: .7s !important; } .mist circle:nth-child(3) { animation-delay: 1.4s !important; }
.mist circle:nth-child(4) { animation-delay: 2.1s !important; }

@keyframes ac-rot { to { transform: rotate(360deg); } }
@keyframes ac-tumble { 0% { transform: rotate(0); } 42% { transform: rotate(250deg); } 50% { transform: rotate(250deg); } 92% { transform: rotate(0); } 100% { transform: rotate(0); } }
@keyframes ac-wave { from { transform: translateX(0); } to { transform: translateX(-40px); } }
@keyframes ac-bubble { 0% { opacity: 0; transform: translateY(4px); } 30% { opacity: .9; } 100% { opacity: 0; transform: translateY(-10px); } }
@keyframes ac-shake { 0%,100% { transform: translate(0,0); } 25% { transform: translate(.6px,-.3px); } 50% { transform: translate(-.5px,.3px); } 75% { transform: translate(.4px,.4px); } }
@keyframes ac-shake-soft { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-.3px); } }
@keyframes ac-glow { 0%,100% { opacity: .55; } 50% { opacity: 1; } }
@keyframes ac-arm { 0% { transform: scaleX(1); } 25% { transform: scaleX(.08); } 50% { transform: scaleX(1); } 75% { transform: scaleX(.08); } 100% { transform: scaleX(1); } }
@keyframes ac-jet { to { stroke-dashoffset: -12; } }
@keyframes ac-fall { 0% { opacity: 0; transform: translateY(0); } 25% { opacity: .9; } 100% { opacity: 0; transform: translateY(16px); } }
@keyframes ac-steam { 0% { opacity: 0; transform: translateY(4px); } 30% { opacity: .55; } 100% { opacity: 0; transform: translateY(-8px); } }
@keyframes ac-pulse { 0%,100% { opacity: 1; } 50% { opacity: .45; } }
@keyframes ac-turn { 0% { transform: translateX(0) scaleX(1); } 25% { transform: translateX(7px) scaleX(.86); } 50% { transform: translateX(0) scaleX(1); } 75% { transform: translateX(-7px) scaleX(.86); } 100% { transform: translateX(0) scaleX(1); } }
@keyframes ac-mist { 0% { opacity: 0; transform: translate(0,0); } 30% { opacity: .8; } 100% { opacity: 0; transform: translate(4px,3px); } }
.no-anim *, .no-anim { animation: none !important; }
@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
`;

/* ------------------------------------------------------------------ */
/* Register                                                            */
/* ------------------------------------------------------------------ */
window.customCards = window.customCards || [];
for (const kind of Object.keys(DEF)) {
  const tag = `appliance-${kind.replace("_", "-")}-card`;
  if (customElements.get(tag)) continue;
  customElements.define(tag, class extends ApplianceCardBase { static get kind() { return kind; } });
  window.customCards.push({
    type: tag,
    name: `Appliance – ${STRINGS.en[kind]} / ${STRINGS.fr[kind]}`,
    description: `${STRINGS.en[kind]} card with realistic animated illustration, live status, power, energy and cost.`,
    preview: true,
    documentationURL: "https://github.com/skyrotter/ha-appliance-cards",
  });
}
console.info(`%c HA-APPLIANCE-CARDS %c v${VERSION} `,
  "color:#fff;background:#03a9f4;font-weight:700;border-radius:3px 0 0 3px",
  "color:#03a9f4;background:#fff;font-weight:700;border-radius:0 3px 3px 0");
