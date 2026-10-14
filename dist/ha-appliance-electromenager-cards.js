/*!
 * HA Appliance Cards
 * Lovelace cards for household appliances: washer, dryer, dishwasher,
 * water heater, oven, microwave, refrigerator, air fryer, coffee maker…
 * MIT License
 */
(() => {
"use strict";
const VERSION = "1.11.0";

/* ------------------------------------------------------------------ */
/* i18n                                                                */
/* ------------------------------------------------------------------ */
const STRINGS = {
  en: {
    washer: "Washing machine", dryer: "Dryer", dishwasher: "Dishwasher",
    water_heater: "Water heater", oven: "Oven", microwave: "Microwave", air_fryer: "Air fryer", coffee_maker: "Coffee maker", brewing: "Brewing", keep_warm: "Keeping warm", f_style: "Coffee maker type", f_warm_threshold: "Keep-warm / ready above (W)", fridge: "Refrigerator", pellet_stove: "Pellet stove", pool_pump: "Pool pump", printer_3d: "3D printer", chest_freezer: "Chest freezer", drawer_freezer: "Upright freezer", solar: "Solar panels", vmc: "Extractor fan", hob: "Cooktop", radiator: "Electric radiator",
    comfort: "Comfort", eco: "Eco", frost: "Frost protection", window_open: "Window open", f_mode: "Mode entity (pilot wire, select…)", f_window: "Window sensor", f_max_power_rad: "Radiator power (W)",
    cooking: "Cooking", residual: "Residual heat", zones: "Active zones", f_zone_power: "Power of one zone (W)", f_zone_1: "Front-left zone (level or W)", f_zone_2: "Front-right zone", f_zone_3: "Back-left zone", f_zone_4: "Back-right zone", f_residual_minutes: "Residual heat display (min)",
    speed1: "Low speed", speed2: "High speed", humid: "High humidity", humidity: "Humidity", f_humidity: "Humidity sensor (%)", f_high_threshold: "High speed above (W)", f_humidity_max: "Humidity alert above (%)",
    producing: "Producing", low: "Low production", night: "Night", production: "Production", savings: "Savings", f_sun_entity: "Sun entity", f_max_power_solar: "Peak power (Wp)",
    printing: "Printing", paused: "Paused", failed: "Failed", progress: "Progress", nozzle: "Nozzle", bed: "Bed",
    f_bed_temperature: "Bed temperature sensor", f_filament_color: "Filament color (CSS)",
    filtering: "Filtering", water: "Water", today: "Today", speed: "Speed",
    f_runtime: "Filtration time today sensor", f_speed: "Speed sensor (rpm or %)", f_max_power: "Max power at full speed (W)",
    ignition: "Igniting", extinguishing: "Shutting down", alarm: "Alarm", pellets: "Pellets", pellets_low: "Low pellets", level: "Level",
    f_power_level: "Heat level sensor (1-5)", f_pellet_level: "Pellet level sensor (%)", f_ignition_threshold: "Ignition above (W)", f_pellet_alert: "Low pellet alert below (%)",
    off: "Off", idle: "Idle", standby: "Standby", running: "Running", finished: "Finished",
    heating: "Heating", ready: "Ready", preheating: "Preheating", cooling: "Cooling",
    door_open: "Door open", unavailable: "Unavailable", too_warm: "Too warm",
    ph_wash: "Washing", ph_rinse: "Rinsing", ph_spin: "Spinning", ph_dry: "Drying", ph_cool: "Cooling down",
    power: "Power", energy: "Energy", cost: "Cost", remaining: "Remaining", program: "Program",
    temperature: "Temperature", target: "Target", fridge_temp: "Fridge", freezer_temp: "Freezer",
    ends_at: "Ends at", toggle: "Turn on/off", confirm_off: "Cycle running – click again to cut power",
    f_name: "Name", f_entity: "Status entity (switch, sensor, input_select…)",
    f_power: "Power sensor (W)", f_energy: "Energy sensor (kWh)", f_cost: "Cost sensor",
    f_remaining: "Remaining time sensor", f_progress: "Progress sensor (%)", f_program: "Program / phase sensor",
    f_door: "Door sensor", f_switch: "Switch to toggle (optional)", f_threshold: "Running threshold (W)",
    f_temperature: "Temperature sensor", f_target_temperature: "Target temperature sensor",
    f_freezer_temperature: "Freezer temperature sensor", f_freezer_door: "Freezer door sensor",
    f_max_temperature: "Fridge alert above (°C)", f_freezer_max_temperature: "Freezer alert above (°C)",
    f_color: "Accent color (CSS)", f_animations: "Animations", f_confirm_off: "Confirm before cutting power during a cycle",
  },
  fr: {
    washer: "Lave-linge", dryer: "Sèche-linge", dishwasher: "Lave-vaisselle",
    water_heater: "Ballon d'eau chaude", oven: "Four", microwave: "Micro-ondes", air_fryer: "Airfryer", coffee_maker: "Cafetière", brewing: "Préparation du café", keep_warm: "Maintien au chaud", f_style: "Type de cafetière", f_warm_threshold: "Maintien au chaud / prête au-dessus de (W)", fridge: "Réfrigérateur", pellet_stove: "Poêle à granulés", pool_pump: "Pompe de piscine", printer_3d: "Imprimante 3D", chest_freezer: "Congélateur coffre", drawer_freezer: "Congélateur à tiroirs", solar: "Panneaux solaires", vmc: "VMC", hob: "Plaques de cuisson", radiator: "Radiateur",
    comfort: "Confort", eco: "Éco", frost: "Hors-gel", window_open: "Fenêtre ouverte", f_mode: "Entité de mode (fil pilote, liste…)", f_window: "Capteur de fenêtre", f_max_power_rad: "Puissance du radiateur (W)",
    cooking: "Cuisson", residual: "Chaleur résiduelle", zones: "Foyers actifs", f_zone_power: "Puissance d'un foyer (W)", f_zone_1: "Foyer avant gauche (niveau ou W)", f_zone_2: "Foyer avant droit", f_zone_3: "Foyer arrière gauche", f_zone_4: "Foyer arrière droit", f_residual_minutes: "Affichage chaleur résiduelle (min)",
    speed1: "Petite vitesse", speed2: "Grande vitesse", humid: "Humidité élevée", humidity: "Humidité", f_humidity: "Capteur d'humidité (%)", f_high_threshold: "Grande vitesse au-dessus de (W)", f_humidity_max: "Alerte humidité au-dessus de (%)",
    producing: "Production", low: "Production faible", night: "Nuit", production: "Production", savings: "Économies", f_sun_entity: "Entité soleil", f_max_power_solar: "Puissance crête (Wc)",
    printing: "Impression", paused: "En pause", failed: "Échec", progress: "Progression", nozzle: "Buse", bed: "Plateau",
    f_bed_temperature: "Capteur de température du plateau", f_filament_color: "Couleur du filament (CSS)",
    filtering: "Filtration", water: "Eau", today: "Aujourd'hui", speed: "Vitesse",
    f_runtime: "Capteur de durée de filtration du jour", f_speed: "Capteur de vitesse (tr/min ou %)", f_max_power: "Puissance max à pleine vitesse (W)",
    ignition: "Allumage", extinguishing: "Extinction", alarm: "Alarme", pellets: "Granulés", pellets_low: "Granulés bas", level: "Niveau",
    f_power_level: "Capteur de puissance de chauffe (1-5)", f_pellet_level: "Capteur de niveau de granulés (%)", f_ignition_threshold: "Allumage au-dessus de (W)", f_pellet_alert: "Alerte granulés sous (%)",
    off: "Éteint", idle: "Inactif", standby: "Veille", running: "En cours", finished: "Terminé",
    heating: "En chauffe", ready: "Prêt", preheating: "Préchauffage", cooling: "Refroidit",
    door_open: "Porte ouverte", unavailable: "Indisponible", too_warm: "Trop chaud",
    ph_wash: "Lavage", ph_rinse: "Rinçage", ph_spin: "Essorage", ph_dry: "Séchage", ph_cool: "Refroidissement",
    power: "Puissance", energy: "Énergie", cost: "Coût", remaining: "Restant", program: "Programme",
    temperature: "Température", target: "Consigne", fridge_temp: "Frigo", freezer_temp: "Congélateur",
    ends_at: "Fin à", toggle: "Allumer/éteindre", confirm_off: "Cycle en cours – cliquer encore pour couper",
    f_name: "Nom", f_entity: "Entité d'état (switch, sensor, input_select…)",
    f_power: "Capteur de puissance (W)", f_energy: "Capteur d'énergie (kWh)", f_cost: "Capteur de coût",
    f_remaining: "Capteur de temps restant", f_progress: "Capteur de progression (%)", f_program: "Capteur de programme / phase",
    f_door: "Capteur de porte", f_switch: "Interrupteur à piloter (optionnel)", f_threshold: "Seuil de fonctionnement (W)",
    f_temperature: "Capteur de température", f_target_temperature: "Capteur de consigne",
    f_freezer_temperature: "Capteur température congélateur", f_freezer_door: "Capteur porte congélateur",
    f_max_temperature: "Alerte frigo au-dessus de (°C)", f_freezer_max_temperature: "Alerte congélateur au-dessus de (°C)",
    f_color: "Couleur d'accent (CSS)", f_animations: "Animations", f_confirm_off: "Confirmer avant de couper pendant un cycle",
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

const cfStyle = (c) => ({ filtre: "filtre", filter: "filtre", drip: "filtre", dosette: "dosette", dosettes: "dosette", pod: "dosette", capsule: "dosette", capsules: "dosette", senseo: "dosette", nespresso: "dosette", expresso: "expresso", espresso: "expresso", grains: "expresso", bean: "expresso", beans: "expresso" }[String(c?.style || "filtre").toLowerCase()] || "filtre");
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

  air_fryer: () => `
<defs>${DEFS}<clipPath id="ID-w1"><rect x="14" y="58" width="39" height="31" rx="3"/></clipPath><clipPath id="ID-w2"><rect x="67" y="58" width="39" height="31" rx="3"/></clipPath>
<linearGradient id="ID-cav" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a3f45"/><stop offset="1" stop-color="#15181b"/></linearGradient>
<linearGradient id="ID-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#272c32"/><stop offset="1" stop-color="#0b0d10"/></linearGradient>
<linearGradient id="ID-fry" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd76a"/><stop offset="1" stop-color="#e09b2d"/></linearGradient>
<radialGradient id="ID-nug" cx=".4" cy=".35" r=".7"><stop offset="0" stop-color="#e9a54c"/><stop offset="1" stop-color="#9c5a1e"/></radialGradient></defs>
<ellipse cx="60" cy="130" rx="56" ry="5" fill="url(#ID-shadow)"/>
<g class="af-steam"><path d="M42 23q-3-5 0-9t0-9"/><path d="M60 23q-3-5 0-9t0-9"/><path d="M78 23q-3-5 0-9t0-9"/></g>
<rect x="10" y="123" width="12" height="5" rx="1.5" fill="#15181b"/><rect x="98" y="123" width="12" height="5" rx="1.5" fill="#15181b"/>
<rect x="5" y="26" width="110" height="100" rx="9" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".8"/>
<path d="M14 27.5h92" stroke="#4a525b" stroke-width=".8" stroke-linecap="round"/>
<rect x="9" y="30" width="102" height="17" rx="4" fill="url(#ID-glass)" stroke="#3a424b" stroke-width=".5"/>
<path d="M11 32h40" stroke="#fff" stroke-opacity=".08" stroke-width="1.2" stroke-linecap="round"/>
${lcd(46, 33, 28, 11)}
<circle class="led l1" cx="41" cy="38.5" r="1.2"/>
<g fill="none" stroke="#7d8792" stroke-width=".7">
  <circle cx="17" cy="38.5" r="2.6"/><path d="M15.6 38.5h2.8"/>
  <circle cx="25" cy="38.5" r="2.6"/><path d="M23.6 38.5h2.8M25 37.1v2.8"/>
  <circle cx="33" cy="38.5" r="2.6"/><path d="M32 37.4l2 1.1l-2 1.1z"/>
  <circle cx="87" cy="38.5" r="2.6"/><path d="M86 37.4l2 1.1l-2 1.1z"/>
  <circle cx="95" cy="38.5" r="2.6"/><path d="M93.6 38.5h2.8M95 37.1v2.8"/>
  <circle cx="103" cy="38.5" r="2.6"/><path d="M103 36.8v1.6M101.5 37.6a2 2 0 1 0 3 0"/>
</g>
<rect x="9" y="52" width="49" height="69" rx="5" fill="url(#ID-inox)" stroke="#6f7780" stroke-width=".6"/>
<rect x="62" y="52" width="49" height="69" rx="5" fill="url(#ID-inox)" stroke="#6f7780" stroke-width=".6"/>
<rect x="12.5" y="56.5" width="42" height="34" rx="4" fill="#15181b"/>
<rect x="65.5" y="56.5" width="42" height="34" rx="4" fill="#15181b"/>
<rect x="14" y="58" width="39" height="31" rx="3" fill="url(#ID-cav)"/>
<rect x="67" y="58" width="39" height="31" rx="3" fill="url(#ID-cav)"/>
<g clip-path="url(#ID-w1)">
  <rect class="ilight" x="14" y="58" width="39" height="31" fill="url(#ID-warm)"/>
  <path class="af-coil" d="M16 61h3l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2h3"/>
  <g class="af-air"><path d="M17 74q7-8 16-3t16-2"/><path d="M17 68q8 5 16 0t16 1"/></g>
  <path d="M15 84h37v5h-37z" fill="url(#ID-mesh)" opacity=".9"/>
  <g class="fries">
    <rect x="18" y="80" width="15" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(-14 25 81)"/>
    <rect x="27" y="78.5" width="14" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(18 34 80)"/>
    <rect x="35" y="80.5" width="15" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(-6 42 82)"/>
    <rect x="21" y="83" width="13" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(8 27 84)"/>
    <rect x="31" y="83.5" width="15" height="3" rx="1" fill="url(#ID-fry)" transform="rotate(-20 38 85)"/>
    <rect x="24" y="76.5" width="12" height="2.8" rx="1" fill="url(#ID-fry)" transform="rotate(32 30 78)"/>
    <rect x="40" y="77.5" width="10" height="2.8" rx="1" fill="url(#ID-fry)" transform="rotate(-38 45 79)"/>
  </g>
</g>
<g clip-path="url(#ID-w2)">
  <rect class="ilight" x="67" y="58" width="39" height="31" fill="url(#ID-warm)"/>
  <path class="af-coil" d="M69 61h3l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2l1.8-2l1.8 2h3"/>
  <g class="af-air"><path d="M70 74q7-8 16-3t16-2"/><path d="M70 68q8 5 16 0t16 1"/></g>
  <path d="M68 84h37v5h-37z" fill="url(#ID-mesh)" opacity=".9"/>
  <g class="nuggets">
    <ellipse cx="75" cy="83" rx="5" ry="3.4" fill="url(#ID-nug)"/>
    <ellipse cx="85" cy="84" rx="5.4" ry="3.2" fill="url(#ID-nug)" transform="rotate(-10 85 84)"/>
    <ellipse cx="96" cy="83" rx="5" ry="3.5" fill="url(#ID-nug)" transform="rotate(12 96 83)"/>
    <ellipse cx="80" cy="79" rx="4.6" ry="3" fill="url(#ID-nug)" transform="rotate(15 80 79)"/>
    <ellipse cx="91" cy="79" rx="4.8" ry="3.1" fill="url(#ID-nug)" transform="rotate(-18 91 79)"/>
    <path d="M73 82.5q2-1 4 0M84 83.5q2-1 4 0M94 82q2-1 4 0M89 78.5q2-1 4 0" stroke="#7a3f12" stroke-width=".6" fill="none" opacity=".7"/>
  </g>
</g>
<path d="M14 72L30 58h9L14 80z" fill="#fff" opacity=".1"/>
<path d="M67 72L83 58h9L67 80z" fill="#fff" opacity=".1"/>
<rect x="14" y="58" width="39" height="31" rx="3" fill="none" stroke="#000" stroke-opacity=".35"/>
<rect x="67" y="58" width="39" height="31" rx="3" fill="none" stroke="#000" stroke-opacity=".35"/>
<rect x="17" y="96" width="33" height="19" rx="4" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".5"/>
<rect x="70" y="96" width="33" height="19" rx="4" fill="url(#ID-dark)" stroke="#05070a" stroke-width=".5"/>
<path d="M20 98.5h27M73 98.5h27" stroke="#fff" stroke-opacity=".14" stroke-width="1" stroke-linecap="round"/>
<rect x="29" y="105" width="9" height="2.2" rx="1.1" fill="#59616b"/><rect x="82" y="105" width="9" height="2.2" rx="1.1" fill="#59616b"/>
<path d="M11 55l14-1M64 55l14-1" stroke="#fff" stroke-opacity=".5" stroke-width=".8" stroke-linecap="round"/>`,

  coffee_maker: (c) => {
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
  },

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
  pellet_stove: () => `
<defs>${DEFS}
<clipPath id="ID-win"><rect x="34" y="46" width="52" height="50" rx="5"/></clipPath>
<linearGradient id="ID-blk" x1="0" x2="1"><stop offset="0" stop-color="#17191c"/><stop offset=".5" stop-color="#34383e"/><stop offset="1" stop-color="#141618"/></linearGradient>
<linearGradient id="ID-white" x1="0" x2="1"><stop offset="0" stop-color="#d9dde2"/><stop offset=".55" stop-color="#ffffff"/><stop offset="1" stop-color="#c9ced4"/></linearGradient>
<linearGradient id="ID-brick" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b1712"/><stop offset="1" stop-color="#0f0706"/></linearGradient>
<radialGradient id="ID-glow" cx=".5" cy=".85" r=".85"><stop offset="0" stop-color="#ffd27a" stop-opacity=".95"/><stop offset=".45" stop-color="#ff7a1a" stop-opacity=".55"/><stop offset="1" stop-color="#3a0d00" stop-opacity="0"/></radialGradient>
<linearGradient id="ID-fl" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#fff3b0"/><stop offset=".3" stop-color="#ffc23d"/><stop offset=".68" stop-color="#ff7a1a"/><stop offset="1" stop-color="#e5381c" stop-opacity="0"/></linearGradient>
<linearGradient id="ID-core" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ffffff"/><stop offset=".4" stop-color="#fff0a0"/><stop offset="1" stop-color="#ffc23d" stop-opacity="0"/></linearGradient></defs>
<g transform="translate(-6.5 -4.5) scale(1.11)">
<ellipse cx="60" cy="134" rx="44" ry="4.5" fill="url(#ID-shadow)"/>
<g class="flue-smoke"><path d="M57 0q-4-5 0-10t0-10"/><path d="M63 -2q-4-5 0-10t0-10"/></g>
<rect x="53" y="3" width="14" height="11" fill="url(#ID-chrome)"/>
<rect x="51" y="1" width="18" height="4" rx="1.5" fill="url(#ID-chrome)" stroke="#7d858e" stroke-width=".4"/>
<rect x="28" y="124" width="9" height="7" rx="1.5" fill="#24272b"/><rect x="83" y="124" width="9" height="7" rx="1.5" fill="#24272b"/>
<rect x="22" y="14" width="76" height="113" rx="7" fill="url(#ID-blk)" stroke="#0b0c0e" stroke-width=".6"/>
<rect x="22" y="22" width="9.5" height="102" rx="3.5" fill="url(#ID-white)"/>
<rect x="88.5" y="22" width="9.5" height="102" rx="3.5" fill="url(#ID-white)"/>
<rect x="19" y="11" width="82" height="8" rx="3" fill="#2b2f34" stroke="#474c53" stroke-width=".6"/>
<rect x="40" y="12.4" width="40" height="5" rx="1.6" fill="#1b1d21" stroke="#555b63" stroke-width=".5"/>
<path d="M36 23.5h48M36 26h48M36 28.5h48" stroke="#0b0c0e" stroke-width="1.2"/>
${lcd(46, 31.5, 28, 9)}
<circle cx="40" cy="36" r="2" fill="#3b4148" stroke="#5a616a" stroke-width=".4"/>
<circle class="led l1" cx="80" cy="36" r="1.5"/>
<rect x="31" y="43" width="58" height="56" rx="7" fill="#0f1113" stroke="#4a5058" stroke-width=".8"/>
<rect x="34" y="46" width="52" height="50" rx="5" fill="url(#ID-brick)"/>
<g clip-path="url(#ID-win)">
  <path d="M34 56h52M34 66h52M34 76h52M46 46v10M62 46v10M78 46v10M40 56v10M56 56v10M72 56v10M48 66v10M64 66v10M80 66v10" stroke="#3d2219" stroke-width=".6" opacity=".9"/>
  <rect class="glow" x="34" y="46" width="52" height="50" fill="url(#ID-glow)"/>
  <g class="fire">
    <path class="flame f2" d="M52.5 86C46.5 81 47.5 73 50 68C51.5 73 54 73.5 54 69C57.5 74.5 58.5 82 52.5 86Z" fill="url(#ID-fl)"/>
    <path class="flame f3" d="M67.5 86C62 82 63 74 65.5 70C66.5 74.5 68.5 74.5 69.5 70C73.5 76.5 72.5 83 67.5 86Z" fill="url(#ID-fl)"/>
    <path class="flame f1" d="M60 86C51 80 52.5 69 57 62C58 68.5 61 68.5 60.5 60C67.5 67 71 78 60 86Z" fill="url(#ID-fl)"/>
    <path class="flame f5" d="M59.5 68C57.5 62 59.5 56 61.5 52C62.5 58 63.5 62.5 59.5 68Z" fill="url(#ID-fl)" opacity=".85"/>
    <path class="flame f4" d="M60 86C56 83 56 77 58.5 72.5C59.5 76 61.5 76.5 62 73C64.5 78 64.5 83 60 86Z" fill="url(#ID-core)"/>
  </g>
  <g class="smoke-in"><path d="M55 82q-3-6 0-12t0-12"/><path d="M64 82q-3-6 0-12t0-12"/></g>
  <path d="M45 92h30l-3.5-7h-23z" fill="#3a3f45" stroke="#5c636b" stroke-width=".5"/>
  <g class="pellets" fill="#8a5a2b"><rect x="50" y="83.6" width="3" height="1.4" rx=".7"/><rect x="54" y="84.2" width="3" height="1.4" rx=".7" transform="rotate(20 55.5 85)"/><rect x="58" y="83.4" width="3" height="1.4" rx=".7"/><rect x="62" y="84" width="3" height="1.4" rx=".7" transform="rotate(-15 63.5 84.7)"/><rect x="66" y="83.6" width="3" height="1.4" rx=".7"/></g>
  <g class="embers"><circle cx="51" cy="84.6" r=".9"/><circle cx="55.5" cy="85.2" r="1"/><circle cx="59.5" cy="84.4" r=".9"/><circle cx="63.5" cy="85" r="1"/><circle cx="67.5" cy="84.6" r=".9"/></g>
  <circle class="igniter" cx="60" cy="88.5" r="1.8"/>
</g>
<path d="M36 60L50 46h8L36 70z" fill="#fff" opacity=".08"/>
<rect x="34" y="46" width="52" height="50" rx="5" fill="none" stroke="#000" stroke-opacity=".5"/>
<rect x="86.3" y="60" width="2.3" height="16" rx="1.1" fill="url(#ID-chrome)"/>
<rect x="34" y="104" width="52" height="12" rx="2" fill="#18191c" stroke="#3b4047" stroke-width=".6"/>
<rect x="52" y="108.5" width="16" height="3" rx="1.5" fill="#4a5058"/>
<path d="M36 120h48M36 122.5h48" stroke="#0b0c0e" stroke-width="1"/>
<g class="warm-air"><path d="M42 30q-2-3 0-6t0-6"/><path d="M54 30q-2-3 0-6t0-6"/><path d="M66 30q-2-3 0-6t0-6"/><path d="M78 30q-2-3 0-6t0-6"/></g>
</g>`,
  pool_pump: () => `
<defs>${DEFS}
<clipPath id="ID-win"><rect x="22" y="52" width="16" height="32" rx="3"/></clipPath>
<clipPath id="ID-pool"><rect x="0" y="113" width="120" height="27"/></clipPath>
<linearGradient id="ID-motor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f86d8"/><stop offset=".35" stop-color="#6fb0f0"/><stop offset=".6" stop-color="#2f6fbf"/><stop offset="1" stop-color="#174a85"/></linearGradient>
<linearGradient id="ID-grey" x1="0" x2="1"><stop offset="0" stop-color="#b9c0c7"/><stop offset=".45" stop-color="#eef1f4"/><stop offset="1" stop-color="#a3abb4"/></linearGradient>
<linearGradient id="ID-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fd0ff"/><stop offset="1" stop-color="#0a6fb8"/></linearGradient>
<linearGradient id="ID-pot" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fdcff" stop-opacity=".55"/><stop offset="1" stop-color="#1b88d0" stop-opacity=".85"/></linearGradient></defs>
<rect x="0" y="113" width="120" height="27" fill="url(#ID-water)"/>
<g clip-path="url(#ID-pool)">
  <path d="M0 117h120" stroke="#1d6fa8" stroke-width="2.2" stroke-dasharray="3 1"/>
  <g class="ripple"><path d="M-30 124q5-2 10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width=".9"/>
  <path d="M-25 132q5-2 10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0t10 0" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width=".9"/></g>
  <g class="bubbles"><circle cx="108" cy="125" r="1.2"/><circle cx="104" cy="123" r=".9"/><circle cx="106" cy="128" r="1"/><circle cx="101" cy="126" r=".8"/></g>
</g>
<rect x="0" y="108" width="120" height="5.5" fill="#d8d0bf"/>
<path d="M20 108v5.5M44 108v5.5M68 108v5.5M92 108v5.5" stroke="#b7ad98" stroke-width=".6"/>
<rect x="10" y="100" width="100" height="8" fill="#c4bfb4"/><rect x="10" y="100" width="100" height="1.5" fill="#d6d2c8"/>
<g class="pipes">
  <path d="M6 126V72H18" fill="none" stroke="#9aa3ad" stroke-width="8" stroke-linejoin="round"/>
  <path d="M6 126V72H18" fill="none" stroke="#f1f3f5" stroke-width="6" stroke-linejoin="round"/>
  <path d="M52 62V26H112V126" fill="none" stroke="#9aa3ad" stroke-width="8" stroke-linejoin="round"/>
  <path d="M52 62V26H112V126" fill="none" stroke="#f1f3f5" stroke-width="6" stroke-linejoin="round"/>
  <path class="flow" d="M6 126V72H18"/>
  <path class="flow" d="M52 62V26H112V124"/>
  <rect x="2" y="90" width="8" height="5" rx="1" fill="#d5dade" stroke="#9aa3ad" stroke-width=".5"/>
  <rect x="48" y="38" width="8" height="5" rx="1" fill="#d5dade" stroke="#9aa3ad" stroke-width=".5"/>
</g>
<g class="hum">
<rect x="46" y="92" width="56" height="8" rx="1.5" fill="#3a3f45"/>
<rect x="18" y="44" width="24" height="48" rx="4" fill="url(#ID-grey)" stroke="#8f979f" stroke-width=".6"/>
<rect x="16" y="35" width="28" height="9" rx="2.5" fill="#2b3036"/>
<rect x="19" y="36.5" width="22" height="3" rx="1.5" fill="#cfe9ff" opacity=".55"/>
<rect x="22" y="52" width="16" height="32" rx="3" fill="url(#ID-pot)"/>
<g clip-path="url(#ID-win)">
  <path d="M23 58h14M23 64h14M23 70h14M23 76h14M26 52v32M30 52v32M34 52v32" stroke="#ffffff" stroke-opacity=".35" stroke-width=".5"/>
  <g class="swirl">
    <path d="M30 68m-5 0a5 5 0 1 0 10 0a5 5 0 1 0-10 0" fill="none" stroke="#ffffff" stroke-opacity=".55" stroke-width=".8" stroke-dasharray="4 3"/>
    <path d="M27 63q2-2 4 0q-2 1.5-4 0z" fill="#5c9a34"/><path d="M32 72q2-2 4 0q-2 1.5-4 0z" fill="#8a6a2b"/><path d="M26 74q1.5-2 3.5 0q-1.5 1.5-3.5 0z" fill="#4f8a2a"/>
  </g>
</g>
<rect x="22" y="52" width="16" height="32" rx="3" fill="none" stroke="#6f7881" stroke-width=".6"/>
<circle cx="52" cy="74" r="13" fill="url(#ID-grey)" stroke="#8f979f" stroke-width=".6"/>
<circle cx="52" cy="74" r="8" fill="none" stroke="#a7afb7" stroke-width=".7"/>
<rect x="60" y="56" width="42" height="36" rx="6" fill="url(#ID-motor)"/>
<path d="M65 58v32M69 58v32M73 58v32M77 58v32M81 58v32M85 58v32M89 58v32M93 58v32M97 58v32" stroke="#123a6a" stroke-opacity=".45" stroke-width=".9"/>
<rect x="64" y="45" width="32" height="11" rx="2" fill="#1d2126" stroke="#40464e" stroke-width=".5"/>
${lcd(66, 46.5, 24, 8)}
<circle class="led l1" cx="93" cy="50.5" r="1.3"/>
<rect x="99" y="58" width="10" height="32" rx="3" fill="url(#ID-grey)" stroke="#8f979f" stroke-width=".6"/>
<g class="fan"><path d="M104 74l-3.5-5.5M104 74l6-1M104 74l-2.5 6" stroke="#5b636c" stroke-width="2" stroke-linecap="round"/></g>
<path d="M100.5 63h7M100.5 67h7M100.5 71h7M100.5 75h7M100.5 79h7M100.5 83h7" stroke="#6f7881" stroke-width=".9"/>
<path d="M64 60q10-3 34 0" stroke="#fff" stroke-opacity=".35" stroke-width="1.4" fill="none"/>
</g>`,
  chest_freezer: () => `
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
<g class="mist"><circle cx="30" cy="131" r="1.1"/><circle cx="46" cy="132" r=".9"/><circle cx="64" cy="131" r="1.2"/><circle cx="80" cy="132" r=".9"/></g>`,
  drawer_freezer: () => `
<defs>${DEFS}
<linearGradient id="ID-in" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dfeaf3"/></linearGradient></defs>
<ellipse cx="60" cy="134" rx="40" ry="4.5" fill="url(#ID-shadow)"/>
<rect x="26" y="4" width="68" height="126" rx="6" fill="#9aa2ab"/>
<rect x="29" y="7" width="62" height="118" rx="3" fill="url(#ID-in)"/>
<rect class="flight" x="29" y="7" width="62" height="118" fill="#fffbe6" opacity="0"/>
<path d="M33 12h54" stroke="#b9c8d6" stroke-width="1.2"/><path d="M37 9.5h46" stroke="#cfdbe5" stroke-width="2" stroke-dasharray="2 1.5"/>
<g class="drawer d1"><rect x="31" y="16" width="58" height="24" rx="2.5" fill="#e9f5ff" opacity=".9" stroke="#9fc3db" stroke-width=".6"/>
  <rect x="35" y="23" width="12" height="13" rx="2" fill="#e5484d"/><rect x="49" y="26" width="14" height="10" rx="2" fill="#3e8ed0"/><rect x="65" y="22" width="18" height="14" rx="3" fill="#f2c94c"/>
  <rect x="31" y="16" width="58" height="5" rx="2" fill="#cfe6f5" opacity=".9"/><rect x="50" y="17.3" width="20" height="2" rx="1" fill="#9fc3db"/></g>
<g class="drawer d2 pull"><rect x="31" y="43" width="58" height="26" rx="2.5" fill="#e9f5ff" opacity=".92" stroke="#9fc3db" stroke-width=".6"/>
  <path d="M35 66l3-14h12l3 14z" fill="#9fd356"/><rect x="55" y="54" width="14" height="12" rx="2" fill="#ffffff" stroke="#c9d3dc" stroke-width=".5"/><circle cx="77" cy="61" r="5" fill="#ff8f3d"/>
  <rect x="31" y="43" width="58" height="5" rx="2" fill="#cfe6f5" opacity=".95"/><rect x="50" y="44.3" width="20" height="2" rx="1" fill="#9fc3db"/></g>
<g class="drawer d3"><rect x="31" y="72" width="58" height="24" rx="2.5" fill="#e9f5ff" opacity=".9" stroke="#9fc3db" stroke-width=".6"/>
  <rect x="35" y="80" width="20" height="12" rx="2" fill="#c4c9cf"/><rect x="58" y="78" width="10" height="14" rx="2" fill="#e5484d" opacity=".85"/><rect x="71" y="81" width="14" height="11" rx="2" fill="#8a5a2b" opacity=".8"/>
  <rect x="31" y="72" width="58" height="5" rx="2" fill="#cfe6f5" opacity=".9"/><rect x="50" y="73.3" width="20" height="2" rx="1" fill="#9fc3db"/></g>
<g class="drawer d4"><rect x="31" y="99" width="58" height="23" rx="2.5" fill="#e9f5ff" opacity=".9" stroke="#9fc3db" stroke-width=".6"/>
  <rect x="35" y="107" width="16" height="11" rx="2" fill="#3e8ed0" opacity=".85"/><rect x="54" y="105" width="30" height="13" rx="3" fill="#f6f7f9" stroke="#c9d3dc" stroke-width=".5"/>
  <rect x="31" y="99" width="58" height="5" rx="2" fill="#cfe6f5" opacity=".9"/><rect x="50" y="100.3" width="20" height="2" rx="1" fill="#9fc3db"/></g>
<g class="drawer-mist"><circle cx="44" cy="74" r="2"/><circle cx="60" cy="76" r="2.4"/><circle cx="76" cy="74" r="1.8"/></g>
<g class="dz-door">
  <rect x="26" y="4" width="68" height="126" rx="6" fill="url(#ID-body)" stroke="#bfc6ce" stroke-width=".7"/>
  <rect x="84" y="20" width="3.4" height="46" rx="1.7" fill="url(#ID-chrome)" stroke="#6f7781" stroke-width=".4"/>
  <rect x="35" y="12" width="28" height="12" rx="2" fill="#0c1720" stroke="#7d868f" stroke-width=".5"/>
  <text class="lcd fr-temp" x="51.5" y="20.8" text-anchor="middle">--°</text>
  <g class="flake"><path d="M39.5 15v6M36.9 16.5l5.2 3M36.9 19.5l5.2-3" stroke-width=".8" stroke-linecap="round"/></g>
  <circle class="led l1" cx="38" cy="28" r="1.2"/><circle class="led l2" cx="43" cy="28" r="1.2"/>
  <rect x="26" y="122" width="68" height="8" rx="3" fill="#e2e6ea"/><path d="M34 125h52M34 127h52" stroke="#aab1b9" stroke-width=".6"/>
  <path d="M30 8v112" stroke="#fff" stroke-opacity=".6" stroke-width="2"/>
</g>
<g class="mist"><circle cx="40" cy="132" r="1.1"/><circle cx="52" cy="133" r=".9"/><circle cx="66" cy="132" r="1.2"/><circle cx="79" cy="133" r=".9"/></g>`,
  solar: () => `
<defs>${DEFS}
<clipPath id="ID-pan"><path d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z"/></clipPath>
<linearGradient id="ID-cell" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#132a52"/><stop offset=".55" stop-color="#1f4683"/><stop offset="1" stop-color="#3a6fb8"/></linearGradient>
<linearGradient id="ID-rail" x1="0" x2="1"><stop offset="0" stop-color="#8d959e"/><stop offset=".5" stop-color="#e3e7eb"/><stop offset="1" stop-color="#7d858e"/></linearGradient>
<linearGradient id="ID-sweep" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".55"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<radialGradient id="ID-sunglow"><stop offset="0" stop-color="#fff6c2" stop-opacity=".9"/><stop offset=".5" stop-color="#ffd23f" stop-opacity=".35"/><stop offset="1" stop-color="#ffd23f" stop-opacity="0"/></radialGradient></defs>
<g class="sunwrap">
    <circle cx="98" cy="20" r="22" fill="url(#ID-sunglow)"/>
    <g class="rays"><path d="M98 4v5M98 31v5M82 20h5M109 20h5M86.7 8.7l3.5 3.5M105.8 27.8l3.5 3.5M86.7 31.3l3.5-3.5M105.8 12.2l3.5-3.5" stroke="#ffc51a" stroke-width="2.2" stroke-linecap="round"/></g>
    <circle cx="98" cy="20" r="8" fill="#ffd23f" stroke="#ffb400" stroke-width="1"/>
  </g>
<ellipse cx="46" cy="113" rx="40" ry="3.5" fill="url(#ID-shadow)"/>
<!-- rear legs and braces (behind the panels) -->
<rect x="24" y="52" width="3" height="58" fill="url(#ID-rail)"/>
<rect x="84" y="52" width="3" height="58" fill="url(#ID-rail)"/>
<path d="M26 104L84 78M26 80L84 104" stroke="#9aa3ad" stroke-width="1.2"/>
<path d="M26 92L12 104M86 92L72 104" stroke="#9aa3ad" stroke-width="1.2"/>
<!-- front legs -->
<rect x="9" y="92" width="2.6" height="18" fill="url(#ID-rail)"/>
<rect x="69" y="92" width="2.6" height="18" fill="url(#ID-rail)"/>
<!-- concrete blocks -->
<rect x="5.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="65.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="20.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="80.5" y="108" width="10" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<!-- panels -->
<path d="M6.0 94.0L76.0 94.0L90.0 50.0L20.0 50.0Z" fill="#c9d1da" stroke="#8d959e" stroke-width=".8" stroke-linejoin="round"/>
<path d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z" fill="url(#ID-cell)" stroke="#dfe5ea" stroke-width="1" stroke-linejoin="round"/>
<path d="M9.4 86.1L42.7 86.1M11.6 79.0L44.9 79.0M13.8 72.0L47.2 72.0M16.1 65.0L49.4 65.0M18.3 57.9L51.6 57.9M15.4 93.1L28.9 50.9M23.8 93.1L37.2 50.9M32.1 93.1L45.5 50.9M44.4 86.1L77.7 86.1M46.6 79.0L79.9 79.0M48.8 72.0L82.2 72.0M51.1 65.0L84.4 65.0M53.3 57.9L86.6 57.9M50.5 93.1L63.9 50.9M58.8 93.1L72.2 50.9M67.1 93.1L80.5 50.9" stroke="#6f97d4" stroke-width=".35" opacity=".85"/>
<g clip-path="url(#ID-pan)"><rect class="sweep" x="-20" y="44" width="24" height="54" fill="url(#ID-sweep)" transform="skewX(-18)"/></g>
<path class="panglow" d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z" fill="#ffe28a"/>
<path class="panshade" d="M7.1 93.1L40.4 93.1L53.9 50.9L20.6 50.9Z M42.1 93.1L75.4 93.1L88.9 50.9L55.6 50.9Z" fill="#0b1630"/>
<!-- cable to inverter -->
<path d="M70 92V106H101V98" fill="none" stroke="#2b2f34" stroke-width="1.6" stroke-linejoin="round"/>
<path class="sflow" d="M70 92V106H101V98"/>
<!-- inverter on its post -->
<rect x="100" y="94" width="3" height="16" fill="url(#ID-rail)"/>
<rect x="97" y="108" width="9" height="5" rx="1" fill="#b8b4ac" stroke="#8f8a80" stroke-width=".5"/>
<rect x="91" y="64" width="22" height="32" rx="2.5" fill="#e7eaee" stroke="#9aa3ad" stroke-width=".6"/>
<rect x="91" y="64" width="22" height="4.5" rx="2" fill="#cfd5db"/>
<path d="M94 88h16M94 90.5h16M94 93h16" stroke="#b3bac2" stroke-width=".6"/>
${lcd(93, 71, 18, 8)}
<circle class="led l1" cx="96" cy="83" r="1.3"/>
<path d="M104 80l-2 4h3l-2 4" stroke="#ffb400" stroke-width=".9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
  vmc: () => `
<defs>${DEFS}
<clipPath id="ID-all"><rect x="0" y="0" width="120" height="140" rx="12"/></clipPath>
<clipPath id="ID-hole"><circle cx="60" cy="70" r="25"/></clipPath>
<linearGradient id="ID-stone" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7e7a75"/><stop offset=".5" stop-color="#94908a"/><stop offset="1" stop-color="#6f6b66"/></linearGradient>
<linearGradient id="ID-tile" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f2ee"/><stop offset="1" stop-color="#e3e0da"/></linearGradient>
<linearGradient id="ID-face" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset=".6" stop-color="#f3f5f7"/><stop offset="1" stop-color="#d9dee3"/></linearGradient>
<radialGradient id="ID-recess" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#e9edf0"/><stop offset=".75" stop-color="#c3cad1"/><stop offset="1" stop-color="#8f979f"/></radialGradient></defs>
<g clip-path="url(#ID-all)">
  <rect x="0" y="0" width="120" height="60" fill="url(#ID-stone)"/>
  <circle cx="28.3" cy="6.0" r="0.54" fill="#8a8580" opacity=".55"/><circle cx="10.8" cy="1.1" r="0.63" fill="#9c978f" opacity=".55"/><circle cx="96.1" cy="44.4" r="0.43" fill="#9c978f" opacity=".55"/><circle cx="33.2" cy="10.0" r="0.36" fill="#8a8580" opacity=".55"/><circle cx="113.2" cy="1.5" r="0.68" fill="#9c978f" opacity=".55"/><circle cx="96.1" cy="11.2" r="0.49" fill="#9c978f" opacity=".55"/><circle cx="10.4" cy="35.1" r="0.70" fill="#8a8580" opacity=".55"/><circle cx="21.3" cy="27.5" r="0.35" fill="#9c978f" opacity=".55"/><circle cx="0.9" cy="16.9" r="0.72" fill="#9c978f" opacity=".55"/><circle cx="101.8" cy="29.5" r="0.55" fill="#9c978f" opacity=".55"/><circle cx="51.7" cy="9.4" r="0.48" fill="#6b6763" opacity=".55"/><circle cx="9.7" cy="26.8" r="0.90" fill="#57534f" opacity=".55"/><circle cx="84.1" cy="8.4" r="0.70" fill="#6b6763" opacity=".55"/><circle cx="49.5" cy="11.8" r="0.68" fill="#9c978f" opacity=".55"/><circle cx="22.0" cy="25.3" r="0.65" fill="#8a8580" opacity=".55"/><circle cx="108.5" cy="5.9" r="0.34" fill="#8a8580" opacity=".55"/><circle cx="33.3" cy="33.8" r="0.82" fill="#6b6763" opacity=".55"/><circle cx="39.7" cy="10.3" r="0.58" fill="#6b6763" opacity=".55"/><circle cx="42.9" cy="4.8" r="0.88" fill="#9c978f" opacity=".55"/><circle cx="88.2" cy="55.7" r="0.31" fill="#9c978f" opacity=".55"/><circle cx="38.6" cy="8.9" r="0.69" fill="#6b6763" opacity=".55"/><circle cx="35.2" cy="11.1" r="0.57" fill="#8a8580" opacity=".55"/><circle cx="30.0" cy="34.7" r="0.40" fill="#6b6763" opacity=".55"/><circle cx="43.6" cy="26.4" r="0.52" fill="#9c978f" opacity=".55"/><circle cx="119.7" cy="33.1" r="0.56" fill="#8a8580" opacity=".55"/><circle cx="50.9" cy="12.1" r="0.34" fill="#6b6763" opacity=".55"/><circle cx="88.5" cy="34.5" r="0.88" fill="#6b6763" opacity=".55"/><circle cx="65.5" cy="33.8" r="0.49" fill="#6b6763" opacity=".55"/><circle cx="14.7" cy="30.7" r="0.76" fill="#57534f" opacity=".55"/><circle cx="78.2" cy="11.6" r="0.42" fill="#57534f" opacity=".55"/><circle cx="49.3" cy="2.1" r="0.55" fill="#8a8580" opacity=".55"/><circle cx="77.7" cy="24.8" r="0.43" fill="#8a8580" opacity=".55"/><circle cx="3.8" cy="14.8" r="0.45" fill="#8a8580" opacity=".55"/><circle cx="92.7" cy="24.2" r="0.46" fill="#9c978f" opacity=".55"/><circle cx="6.2" cy="53.8" r="0.64" fill="#57534f" opacity=".55"/><circle cx="115.5" cy="37.9" r="0.82" fill="#6b6763" opacity=".55"/><circle cx="59.3" cy="5.4" r="0.43" fill="#8a8580" opacity=".55"/><circle cx="40.4" cy="38.1" r="0.78" fill="#9c978f" opacity=".55"/><circle cx="97.8" cy="30.6" r="0.69" fill="#9c978f" opacity=".55"/><circle cx="40.6" cy="22.7" r="0.60" fill="#9c978f" opacity=".55"/><circle cx="115.4" cy="38.8" r="0.33" fill="#8a8580" opacity=".55"/><circle cx="92.0" cy="15.6" r="0.81" fill="#8a8580" opacity=".55"/><circle cx="82.5" cy="26.9" r="0.58" fill="#57534f" opacity=".55"/><circle cx="111.3" cy="12.7" r="0.30" fill="#8a8580" opacity=".55"/><circle cx="1.6" cy="50.8" r="0.37" fill="#57534f" opacity=".55"/><circle cx="105.3" cy="31.9" r="0.83" fill="#8a8580" opacity=".55"/><circle cx="19.4" cy="35.3" r="0.79" fill="#57534f" opacity=".55"/><circle cx="109.8" cy="25.5" r="0.35" fill="#6b6763" opacity=".55"/><circle cx="58.7" cy="50.2" r="0.66" fill="#8a8580" opacity=".55"/><circle cx="5.0" cy="4.6" r="0.83" fill="#6b6763" opacity=".55"/><circle cx="35.6" cy="20.1" r="0.34" fill="#57534f" opacity=".55"/><circle cx="45.7" cy="45.7" r="0.49" fill="#8a8580" opacity=".55"/><circle cx="91.0" cy="49.6" r="0.54" fill="#6b6763" opacity=".55"/><circle cx="13.7" cy="36.0" r="0.83" fill="#57534f" opacity=".55"/><circle cx="49.9" cy="41.3" r="0.57" fill="#8a8580" opacity=".55"/><circle cx="76.4" cy="53.9" r="0.59" fill="#6b6763" opacity=".55"/><circle cx="95.8" cy="9.7" r="0.82" fill="#8a8580" opacity=".55"/><circle cx="84.8" cy="18.9" r="0.82" fill="#9c978f" opacity=".55"/><circle cx="65.0" cy="52.4" r="0.73" fill="#6b6763" opacity=".55"/><circle cx="77.8" cy="7.0" r="0.37" fill="#57534f" opacity=".55"/><circle cx="63.2" cy="30.2" r="0.55" fill="#9c978f" opacity=".55"/><circle cx="42.8" cy="44.5" r="0.89" fill="#6b6763" opacity=".55"/><circle cx="81.2" cy="35.4" r="0.49" fill="#57534f" opacity=".55"/><circle cx="93.9" cy="33.0" r="0.86" fill="#57534f" opacity=".55"/><circle cx="73.6" cy="25.6" r="0.38" fill="#9c978f" opacity=".55"/><circle cx="118.3" cy="19.7" r="0.56" fill="#8a8580" opacity=".55"/><circle cx="81.0" cy="36.1" r="0.47" fill="#9c978f" opacity=".55"/><circle cx="23.7" cy="46.0" r="0.70" fill="#6b6763" opacity=".55"/><circle cx="9.2" cy="37.4" r="0.84" fill="#9c978f" opacity=".55"/><circle cx="78.5" cy="18.9" r="0.48" fill="#6b6763" opacity=".55"/><circle cx="72.5" cy="30.4" r="0.75" fill="#6b6763" opacity=".55"/><circle cx="96.1" cy="46.8" r="0.87" fill="#8a8580" opacity=".55"/><circle cx="21.9" cy="57.2" r="0.70" fill="#6b6763" opacity=".55"/><circle cx="91.2" cy="56.2" r="0.37" fill="#57534f" opacity=".55"/><circle cx="81.0" cy="43.2" r="0.67" fill="#9c978f" opacity=".55"/><circle cx="102.3" cy="39.9" r="0.83" fill="#8a8580" opacity=".55"/><circle cx="107.6" cy="40.8" r="0.49" fill="#8a8580" opacity=".55"/><circle cx="89.5" cy="31.2" r="0.62" fill="#57534f" opacity=".55"/><circle cx="107.9" cy="23.2" r="0.54" fill="#9c978f" opacity=".55"/><circle cx="34.1" cy="23.9" r="0.31" fill="#8a8580" opacity=".55"/><circle cx="107.7" cy="26.6" r="0.64" fill="#9c978f" opacity=".55"/><circle cx="48.5" cy="22.5" r="0.32" fill="#6b6763" opacity=".55"/><circle cx="55.0" cy="56.0" r="0.68" fill="#9c978f" opacity=".55"/><circle cx="72.5" cy="18.1" r="0.35" fill="#9c978f" opacity=".55"/><circle cx="58.0" cy="37.1" r="0.59" fill="#6b6763" opacity=".55"/><circle cx="17.8" cy="13.8" r="0.48" fill="#6b6763" opacity=".55"/><circle cx="19.6" cy="45.8" r="0.71" fill="#9c978f" opacity=".55"/><circle cx="2.2" cy="14.2" r="0.75" fill="#8a8580" opacity=".55"/><circle cx="3.8" cy="18.4" r="0.37" fill="#6b6763" opacity=".55"/><circle cx="105.4" cy="37.3" r="0.67" fill="#8a8580" opacity=".55"/><circle cx="87.8" cy="38.0" r="0.87" fill="#6b6763" opacity=".55"/><circle cx="67.2" cy="40.2" r="0.73" fill="#8a8580" opacity=".55"/><circle cx="60.3" cy="8.9" r="0.81" fill="#57534f" opacity=".55"/><circle cx="60.9" cy="21.8" r="0.40" fill="#9c978f" opacity=".55"/><circle cx="61.8" cy="31.2" r="0.48" fill="#57534f" opacity=".55"/><circle cx="39.4" cy="22.4" r="0.55" fill="#6b6763" opacity=".55"/><circle cx="33.4" cy="39.2" r="0.48" fill="#8a8580" opacity=".55"/><circle cx="10.3" cy="6.7" r="0.67" fill="#6b6763" opacity=".55"/><circle cx="27.8" cy="32.1" r="0.59" fill="#8a8580" opacity=".55"/><circle cx="106.3" cy="26.2" r="0.74" fill="#57534f" opacity=".55"/><circle cx="40.3" cy="10.0" r="0.62" fill="#8a8580" opacity=".55"/><circle cx="12.9" cy="35.9" r="0.85" fill="#9c978f" opacity=".55"/><circle cx="111.7" cy="48.2" r="0.55" fill="#6b6763" opacity=".55"/><circle cx="98.5" cy="12.3" r="0.65" fill="#9c978f" opacity=".55"/><circle cx="94.1" cy="27.7" r="0.80" fill="#6b6763" opacity=".55"/><circle cx="107.0" cy="51.8" r="0.83" fill="#6b6763" opacity=".55"/><circle cx="72.6" cy="30.6" r="0.89" fill="#9c978f" opacity=".55"/><circle cx="111.4" cy="10.3" r="0.33" fill="#8a8580" opacity=".55"/><circle cx="4.7" cy="39.2" r="0.50" fill="#8a8580" opacity=".55"/><circle cx="83.6" cy="6.8" r="0.89" fill="#6b6763" opacity=".55"/><circle cx="8.6" cy="13.1" r="0.46" fill="#6b6763" opacity=".55"/><circle cx="106.9" cy="56.5" r="0.31" fill="#8a8580" opacity=".55"/><circle cx="25.6" cy="14.5" r="0.74" fill="#9c978f" opacity=".55"/><circle cx="97.9" cy="17.3" r="0.53" fill="#57534f" opacity=".55"/><circle cx="4.1" cy="23.9" r="0.88" fill="#9c978f" opacity=".55"/><circle cx="67.2" cy="16.4" r="0.42" fill="#57534f" opacity=".55"/><circle cx="38.6" cy="12.5" r="0.59" fill="#57534f" opacity=".55"/><circle cx="111.8" cy="16.0" r="0.75" fill="#57534f" opacity=".55"/><circle cx="114.0" cy="53.8" r="0.55" fill="#8a8580" opacity=".55"/><circle cx="30.7" cy="29.6" r="0.32" fill="#9c978f" opacity=".55"/><circle cx="73.1" cy="39.2" r="0.68" fill="#9c978f" opacity=".55"/><circle cx="10.4" cy="57.2" r="0.40" fill="#6b6763" opacity=".55"/><circle cx="84.1" cy="54.2" r="0.45" fill="#8a8580" opacity=".55"/><circle cx="106.9" cy="29.0" r="0.37" fill="#9c978f" opacity=".55"/><circle cx="1.0" cy="33.1" r="0.42" fill="#6b6763" opacity=".55"/><circle cx="29.3" cy="48.9" r="0.37" fill="#9c978f" opacity=".55"/><circle cx="35.6" cy="32.9" r="0.70" fill="#6b6763" opacity=".55"/><circle cx="79.4" cy="57.6" r="0.84" fill="#6b6763" opacity=".55"/><circle cx="90.7" cy="46.5" r="0.71" fill="#9c978f" opacity=".55"/><circle cx="4.2" cy="18.8" r="0.50" fill="#9c978f" opacity=".55"/><circle cx="118.4" cy="9.4" r="0.75" fill="#6b6763" opacity=".55"/><circle cx="114.7" cy="55.2" r="0.71" fill="#6b6763" opacity=".55"/><circle cx="80.8" cy="15.2" r="0.85" fill="#57534f" opacity=".55"/><circle cx="12.5" cy="11.6" r="0.38" fill="#57534f" opacity=".55"/><circle cx="72.2" cy="28.8" r="0.49" fill="#57534f" opacity=".55"/><circle cx="89.2" cy="48.6" r="0.76" fill="#6b6763" opacity=".55"/><circle cx="21.7" cy="20.8" r="0.48" fill="#9c978f" opacity=".55"/><circle cx="68.9" cy="11.3" r="0.67" fill="#9c978f" opacity=".55"/><circle cx="46.0" cy="31.1" r="0.37" fill="#8a8580" opacity=".55"/><circle cx="22.9" cy="20.2" r="0.89" fill="#8a8580" opacity=".55"/><circle cx="2.5" cy="6.8" r="0.48" fill="#9c978f" opacity=".55"/><circle cx="112.6" cy="28.8" r="0.32" fill="#9c978f" opacity=".55"/><circle cx="96.0" cy="46.5" r="0.40" fill="#57534f" opacity=".55"/><circle cx="74.1" cy="20.3" r="0.30" fill="#8a8580" opacity=".55"/><circle cx="53.7" cy="43.1" r="0.85" fill="#57534f" opacity=".55"/><circle cx="25.4" cy="19.2" r="0.66" fill="#6b6763" opacity=".55"/><circle cx="107.4" cy="27.9" r="0.88" fill="#6b6763" opacity=".55"/><circle cx="21.7" cy="35.7" r="0.66" fill="#6b6763" opacity=".55"/><circle cx="87.0" cy="1.3" r="0.56" fill="#8a8580" opacity=".55"/><circle cx="74.6" cy="7.8" r="0.66" fill="#8a8580" opacity=".55"/><circle cx="52.2" cy="18.2" r="0.68" fill="#8a8580" opacity=".55"/><circle cx="87.6" cy="53.8" r="0.80" fill="#9c978f" opacity=".55"/><circle cx="31.0" cy="19.4" r="0.62" fill="#8a8580" opacity=".55"/><circle cx="43.9" cy="50.0" r="0.42" fill="#57534f" opacity=".55"/><circle cx="99.4" cy="4.3" r="0.68" fill="#8a8580" opacity=".55"/><circle cx="118.5" cy="8.3" r="0.73" fill="#6b6763" opacity=".55"/><circle cx="64.6" cy="20.1" r="0.86" fill="#6b6763" opacity=".55"/><circle cx="94.2" cy="35.1" r="0.63" fill="#9c978f" opacity=".55"/><circle cx="75.0" cy="17.1" r="0.83" fill="#9c978f" opacity=".55"/><circle cx="25.1" cy="27.4" r="0.47" fill="#6b6763" opacity=".55"/>
  <rect x="0" y="58" width="120" height="4" fill="#c9c5be"/><rect x="0" y="58" width="120" height="1" fill="#e9e6e0"/>
  <rect x="0" y="62" width="120" height="78" fill="url(#ID-tile)"/>
  <g stroke="#d6d2ca" stroke-width=".35" opacity=".8"><path d="M0 64H120" /><path d="M0 67H120" /><path d="M0 70H120" /><path d="M0 73H120" /><path d="M0 76H120" /><path d="M0 79H120" /><path d="M0 82H120" /><path d="M0 85H120" /><path d="M0 88H120" /><path d="M0 91H120" /><path d="M0 94H120" /><path d="M0 97H120" /><path d="M0 100H120" /><path d="M0 103H120" /><path d="M0 106H120" /><path d="M0 109H120" /><path d="M0 112H120" /><path d="M0 115H120" /><path d="M0 118H120" /><path d="M0 121H120" /><path d="M0 124H120" /><path d="M0 127H120" /><path d="M0 130H120" /><path d="M0 133H120" /><path d="M0 136H120" /><path d="M0 139H120" /></g>
  <g class="condensation"><path d="M10 80q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M14 96q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M106 84q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M110 104q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M8 118q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/><path d="M104 122q1.2 2 0 3.4q-1.2-1.4 0-3.4z"/></g>
  <g class="steam"><path d="M14 136q-4-8 2-14t0-14"/><path d="M28 140q-4-8 2-14t0-14"/><path d="M98 138q-4-8 2-14t0-14"/></g>
</g>
<path d="M22 31C42 21 78 35 100 25V117H22Z" fill="#000" opacity=".16" transform="translate(3 4)"/>
<path d="M19 29C40 19 78 33 101 23V116Q101 120 97 120H23Q19 120 19 116Z" fill="#d3d8dd"/>
<path d="M18 27C39 17 77 31 99 21V114Q99 118 95 118H22Q18 118 18 114Z" fill="url(#ID-face)" stroke="#c9ced4" stroke-width=".6"/>
<path d="M21 28C40 19 76 32 97 23" fill="none" stroke="#ffffff" stroke-width="1.6" opacity=".9"/>
<circle cx="60" cy="70" r="28" fill="#e2e6ea" stroke="#c4cad0" stroke-width=".8"/>
<circle cx="60" cy="70" r="25" fill="url(#ID-recess)"/>
<g clip-path="url(#ID-hole)">
  <circle cx="60" cy="70" r="25" fill="#3d4349" opacity=".55"/>
  <g class="fanv" fill="#f4f6f8" stroke="#c4cad0" stroke-width=".4"><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(0 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(30 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(60 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(90 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(120 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(150 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(180 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(210 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(240 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(270 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(300 60 70)"/><path d="M60 70C60 61 65 50 75 45C73 55 69 63 60 70Z" transform="rotate(330 60 70)"/></g>
  <circle cx="60" cy="70" r="7" fill="#ffffff" stroke="#c4cad0" stroke-width=".6"/>
  <g class="slats" fill="none" stroke-linecap="round">
    <g stroke="#9aa3ad" stroke-width="2" transform="translate(0 .7)" opacity=".5"><path d="M30 47.5Q60 45.9 90 47.5" /><path d="M30 52.9Q60 51.3 90 52.9" /><path d="M30 58.3Q60 56.7 90 58.3" /><path d="M30 63.7Q60 62.1 90 63.7" /><path d="M30 69.1Q60 67.5 90 69.1" /><path d="M30 74.5Q60 72.9 90 74.5" /><path d="M30 79.9Q60 78.3 90 79.9" /><path d="M30 85.3Q60 83.7 90 85.3" /><path d="M30 90.7Q60 89.1 90 90.7" /></g>
    <g stroke="#ffffff" stroke-width="1.7"><path d="M30 47.5Q60 45.9 90 47.5" /><path d="M30 52.9Q60 51.3 90 52.9" /><path d="M30 58.3Q60 56.7 90 58.3" /><path d="M30 63.7Q60 62.1 90 63.7" /><path d="M30 69.1Q60 67.5 90 69.1" /><path d="M30 74.5Q60 72.9 90 74.5" /><path d="M30 79.9Q60 78.3 90 79.9" /><path d="M30 85.3Q60 83.7 90 85.3" /><path d="M30 90.7Q60 89.1 90 90.7" /></g>
  </g>
</g>
<circle cx="60" cy="70" r="25" fill="none" stroke="#b5bcc3" stroke-width="1"/>
<g class="intake"><path d="M20 98q8-6 14-4"/><path d="M98 100q-8-6-14-3"/><path d="M28 40q8 2 12 8"/><path d="M94 42q-8 2-12 8"/><path d="M60 112q-2-6 0-12"/></g>`,
  hob: () => `
<defs>${DEFS}
<clipPath id="ID-all"><rect x="0" y="0" width="120" height="140" rx="12"/></clipPath>
<linearGradient id="ID-glass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a2d31"/><stop offset="1" stop-color="#0d0e10"/></linearGradient>
<linearGradient id="ID-wood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d9c4a3"/><stop offset="1" stop-color="#b89a73"/></linearGradient>
<radialGradient id="ID-hot"><stop offset="0" stop-color="#ffb347"/><stop offset=".45" stop-color="#ff4a1f"/><stop offset="1" stop-color="#8a1205" stop-opacity=".25"/></radialGradient>
<linearGradient id="ID-pot" x1="0" x2="1"><stop offset="0" stop-color="#8d959e"/><stop offset=".3" stop-color="#f1f3f5"/><stop offset=".6" stop-color="#c3c9cf"/><stop offset="1" stop-color="#7d858e"/></linearGradient></defs>
<ellipse cx="60" cy="125" rx="50" ry="4" fill="url(#ID-shadow)"/>
<g transform="translate(-9 -24) scale(1.15)">
<path d="M12 122L108 122L97 60L23 60Z" fill="#8d959e"/>
<path d="M14 120L106 120L96 62L24 62Z" fill="url(#ID-glass)"/>
<g class="zone z1">
  <ellipse cx="40" cy="99" rx="18" ry="9.7" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="40" cy="99" rx="16" ry="8.5" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="40" cy="99" rx="13.1" ry="7.0"/><ellipse cx="40" cy="99" rx="9.3" ry="4.9"/><ellipse cx="40" cy="99" rx="5.4" ry="2.9"/></g>
  <ellipse cx="40" cy="99" rx="16" ry="8.5" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g><g class="zone z2">
  <ellipse cx="82" cy="99" rx="14" ry="7.7" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="82" cy="99" rx="12" ry="6.5" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="82" cy="99" rx="9.8" ry="5.3"/><ellipse cx="82" cy="99" rx="7.0" ry="3.8"/><ellipse cx="82" cy="99" rx="4.1" ry="2.2"/></g>
  <ellipse cx="82" cy="99" rx="12" ry="6.5" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g><g class="zone z3">
  <ellipse cx="44" cy="73" rx="13" ry="6.4" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="44" cy="73" rx="11" ry="5.2" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="44" cy="73" rx="9.0" ry="4.3"/><ellipse cx="44" cy="73" rx="6.4" ry="3.0"/><ellipse cx="44" cy="73" rx="3.7" ry="1.8"/></g>
  <ellipse cx="44" cy="73" rx="11" ry="5.2" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g><g class="zone z4">
  <ellipse cx="78" cy="73" rx="16" ry="7.7" fill="none" stroke="#5a6068" stroke-width=".5"/>
  <ellipse class="zglow" cx="78" cy="73" rx="14" ry="6.5" fill="url(#ID-hot)"/>
  <g class="coil" fill="none" stroke="#ff5a1f" stroke-width=".7">
    <ellipse cx="78" cy="73" rx="11.5" ry="5.3"/><ellipse cx="78" cy="73" rx="8.1" ry="3.8"/><ellipse cx="78" cy="73" rx="4.8" ry="2.2"/></g>
  <ellipse cx="78" cy="73" rx="14" ry="6.5" fill="none" stroke="#7d848c" stroke-width=".7" stroke-dasharray="2 1.4"/>
</g>
<path d="M30 63L58 63L22 118L16 118Z" fill="#fff" opacity=".05"/>
<path d="M18 109H102" stroke="#3b4047" stroke-width=".5"/>
<g class="digits">
  <text class="zd zd1" x="28" y="116.5" text-anchor="middle">0</text>
  <text class="zd zd3" x="44" y="116.5" text-anchor="middle">0</text>
  <text class="zd zd4" x="76" y="116.5" text-anchor="middle">0</text>
  <text class="zd zd2" x="92" y="116.5" text-anchor="middle">0</text>
</g>
<circle cx="60" cy="114.5" r="2.4" fill="none" stroke="#5a6068" stroke-width=".6"/><path d="M60 112.6v1.6" stroke="#5a6068" stroke-width=".6"/>
<path d="M51 114.5h3M66 114.5h3M67.5 113v3" stroke="#5a6068" stroke-width=".6"/>
<g class="pan">
  <path d="M90 66L104 52" stroke="#2b2f34" stroke-width="2.6" stroke-linecap="round"/>
  <ellipse cx="78" cy="71" rx="13" ry="6.2" fill="#2b2f34"/>
  <ellipse cx="78" cy="70" rx="11.5" ry="5.2" fill="#3b4047"/>
  <ellipse cx="76" cy="70" rx="5" ry="2.6" fill="#ffffff"/><ellipse cx="76.5" cy="69.8" rx="2" ry="1.2" fill="#f2b632"/>
  <g class="sizzle"><path d="M68 64l-1-3M74 62l0-3M84 62l1-3M89 65l2-2"/></g>
</g>
<g class="pot">
  <path d="M24 86l-10-2" stroke="#2b2f34" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M25 80V96Q25 101 40 101Q55 101 55 96V80Z" fill="url(#ID-pot)" stroke="#6f7781" stroke-width=".5"/>
  <ellipse cx="40" cy="96.5" rx="15" ry="4.5" fill="none" stroke="#6f7781" stroke-width=".4" opacity=".6"/>
  <g class="lid"><ellipse cx="40" cy="80" rx="15.5" ry="4.6" fill="#d7dce1" stroke="#7d858e" stroke-width=".6"/>
  <ellipse cx="40" cy="79.4" rx="11" ry="3" fill="#eef1f4"/>
  <rect x="37.5" y="75" width="5" height="3.4" rx="1.4" fill="#2b2f34"/></g>
  <g class="steam-pot"><path d="M34 72q-3-5 0-10t0-10"/><path d="M41 70q-3-5 0-10t0-10"/><path d="M48 72q-3-5 0-10t0-10"/></g>
</g></g>`,
  radiator: () => `
<defs>${DEFS}
<clipPath id="ID-fins"><path d="M12.0 27H23.4V100Q23.4 104 20.4 104H15.0Q12.0 104 12.0 100Z"/><path d="M24.8 27H36.2V100Q36.2 104 33.2 104H27.8Q24.8 104 24.8 100Z"/><path d="M37.6 27H49.0V100Q49.0 104 46.0 104H40.6Q37.6 104 37.6 100Z"/><path d="M50.4 27H61.8V100Q61.8 104 58.8 104H53.4Q50.4 104 50.4 100Z"/><path d="M63.2 27H74.6V100Q74.6 104 71.6 104H66.2Q63.2 104 63.2 100Z"/><path d="M76.0 27H87.4V100Q87.4 104 84.4 104H79.0Q76.0 104 76.0 100Z"/></clipPath>
<linearGradient id="ID-fin" x1="0" x2="1"><stop offset="0" stop-color="#e3e6e9"/><stop offset=".25" stop-color="#ffffff"/><stop offset=".85" stop-color="#f6f7f8"/><stop offset="1" stop-color="#d9dde1"/></linearGradient>
<linearGradient id="ID-side" x1="0" x2="1"><stop offset="0" stop-color="#e7eaed"/><stop offset="1" stop-color="#cdd2d7"/></linearGradient>
<linearGradient id="ID-heatglow" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ff8a3d" stop-opacity=".15"/><stop offset="1" stop-color="#ff5a1f" stop-opacity=".9"/></linearGradient>
<linearGradient id="ID-box" x1="0" x2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e2e5e8"/></linearGradient></defs>
<g class="rwaves"><path d="M22 18q-3-5 0-10t0-10"/><path d="M38 16q-3-5 0-10t0-10"/><path d="M54 18q-3-5 0-10t0-10"/><path d="M70 16q-3-5 0-10t0-10"/></g>
<g class="cold-air"><path d="M-6 50q6-3 12 0t12 0"/><path d="M-8 66q6-3 12 0t12 0"/><path d="M-6 82q6-3 12 0t12 0"/></g>
<path d="M16 30H95.4V108H16Z" fill="#000" opacity=".1" filter="blur(2px)"/>
<path d="M87.4 27L91.4 23V100L87.4 104Z" fill="url(#ID-side)" stroke="#c9ced4" stroke-width=".4"/>
<circle cx="89.4" cy="31" r="1.6" fill="#e9ecef" stroke="#aeb5bc" stroke-width=".5"/>
<path d="M12.0 27L15.5 23H26.9L23.4 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="15.0" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M24.8 27L28.3 23H39.7L36.2 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="27.8" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M37.6 27L41.1 23H52.5L49.0 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="40.6" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M50.4 27L53.9 23H65.3L61.8 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="53.4" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M63.2 27L66.7 23H78.1L74.6 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="66.2" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/><path d="M76.0 27L79.5 23H90.9L87.4 27Z" fill="#eef0f2" stroke="#cfd4d9" stroke-width=".4"/><rect x="79.0" y="24" width="8.4" height="1.6" rx=".8" fill="#c3c9cf"/>
<path d="M12.0 27H23.4V100Q23.4 104 20.4 104H15.0Q12.0 104 12.0 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M24.8 27H36.2V100Q36.2 104 33.2 104H27.8Q24.8 104 24.8 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M37.6 27H49.0V100Q49.0 104 46.0 104H40.6Q37.6 104 37.6 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M50.4 27H61.8V100Q61.8 104 58.8 104H53.4Q50.4 104 50.4 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M63.2 27H74.6V100Q74.6 104 71.6 104H66.2Q63.2 104 63.2 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/><path d="M76.0 27H87.4V100Q87.4 104 84.4 104H79.0Q76.0 104 76.0 100Z" fill="url(#ID-fin)" stroke="#d2d6da" stroke-width=".4"/>
<g clip-path="url(#ID-fins)"><rect class="rglow" x="10" y="26" width="87.4" height="80" fill="url(#ID-heatglow)"/></g>
<path d="M82.4 84h18q2 0 2 2v16q0 3-3 6l-3 10h-10q-2 0-2-2V86q0-2 2-2z" fill="url(#ID-box)" stroke="#bfc6ce" stroke-width=".6"/>
${lcd(84.8, 86.5, 15, 8)}
<g class="micon m-comfort" transform="translate(87.4 97.3) scale(.48)"><circle r="2.2"/><path d="M0-4.2v1.1M0 3.1v1.1M-4.2 0h1.1M3.1 0h1.1M-3 -3l.8.8M2.2 2.2l.8.8M-3 3l.8-.8M2.2-2.2l.8-.8" stroke-width=".9" stroke-linecap="round"/></g>
<g class="micon m-eco" transform="translate(92.4 97.3) scale(.48)"><path d="M1.6-3a3.4 3.4 0 1 0 1.8 5.6a2.8 2.8 0 0 1-1.8-5.6z"/></g>
<g class="micon m-frost" transform="translate(97.4 97.3) scale(.48)"><path d="M0-3.4v6.8M-3 -1.7l6 3.4M-3 1.7l6-3.4" stroke-width="1.1" stroke-linecap="round"/></g>
<g fill="#eef0f2" stroke="#a7aeb5" stroke-width=".4"><circle cx="86.8" cy="102.5" r="1.4"/><circle cx="91.8" cy="102.5" r="1.4"/><circle cx="96.8" cy="102.5" r="1.4"/><circle cx="89.3" cy="106.5" r="1.4"/><circle cx="94.3" cy="106.5" r="1.4"/></g>
<circle class="led l1" cx="96.8" cy="106.5" r=".8"/>`,
  printer_3d: () => `
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
</g>`,
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
  air_fryer: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "remaining", "program", "temperature", "switch"],
    keys: ["air_fryer", "airfryer", "air_frier", "friteuse", "fryer", "cosori", "ninja_foodi", "dual_zone"] },
  coffee_maker: { accent: "heat", threshold: 300,
    fields: ["entity", "power", "energy", "cost", "switch"],
    keys: ["cafetiere", "coffee", "senseo", "nespresso", "dolce_gusto", "tassimo", "expresso", "espresso", "cafe"] },
  fridge: { accent: "cold", threshold: 20,
    fields: ["entity", "power", "energy", "cost", "temperature", "freezer_temperature", "door", "freezer_door", "switch"],
    keys: ["refrigerateur", "frigo", "fridge", "refrigerator", "frigidaire"] },
  pellet_stove: { accent: "heat", threshold: 20,
    fields: ["entity", "power", "energy", "cost", "temperature", "target_temperature", "power_level", "pellet_level", "switch"],
    keys: ["poele", "pellet", "granule", "stove"] },
  pool_pump: { accent: "active", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "temperature", "runtime", "speed", "switch"],
    keys: ["piscine", "pool", "filtration", "pompe"] },
  chest_freezer: { accent: "cold", threshold: 20,
    fields: ["entity", "power", "energy", "cost", "temperature", "door", "switch"],
    keys: ["congelateur_coffre", "coffre", "chest", "bahut"] },
  drawer_freezer: { accent: "cold", threshold: 20,
    fields: ["entity", "power", "energy", "cost", "temperature", "door", "switch"],
    keys: ["congelateur", "freezer", "tiroir"] },
  solar: { accent: "heat", threshold: 10,
    fields: ["power", "energy", "cost", "entity"],
    keys: ["solaire", "solar", "pv", "photovolta", "onduleur", "inverter"] },
  vmc: { accent: "active", threshold: 5,
    fields: ["entity", "power", "energy", "cost", "speed", "humidity", "switch"],
    keys: ["vmc", "ventilation", "extracteur", "mvhr", "hrv"] },
  hob: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "zone_1", "zone_2", "zone_3", "zone_4"],
    keys: ["plaque", "cuisson", "induction", "vitro", "hob", "cooktop", "table_de_cuisson"] },
  radiator: { accent: "heat", threshold: 50,
    fields: ["entity", "power", "energy", "cost", "temperature", "target_temperature", "mode", "window", "switch"],
    keys: ["radiateur", "radiator", "chauffage", "heater", "convecteur"] },
  printer_3d: { accent: "active", threshold: 40,
    fields: ["entity", "power", "energy", "cost", "progress", "remaining", "program", "temperature", "bed_temperature", "switch"],
    keys: ["imprimante", "printer", "3d", "bambu", "prusa", "octoprint", "klipper", "moonraker"] },
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
// H:MM like a real washer/oven display; M:SS for short countdowns (microwave)
const lcdDuration = (min, short = false) => {
  if (short) { const s = Math.round(min * 60); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; }
  const m = Math.ceil(min - 1e-9); return `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;
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
    if (!["entity", "power", "switch", "temperature", "zone_1"].some((f) => config[f])) {
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
  getGridOptions() { return { columns: 12, min_columns: 6 }; }

  _ids() {
    const c = this._config;
    return ["entity", "power", "energy", "cost", "remaining", "progress", "program", "door", "switch",
      "power_level", "pellet_level", "runtime", "speed", "bed_temperature", "humidity", "zone_1", "zone_2", "zone_3", "zone_4", "mode", "window", "temperature", "target_temperature", "freezer_temperature", "freezer_door"].map((k) => c[k]).filter(Boolean);
  }

  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: "open" });
    const id = `ac${++SEQ}`;
    const svg = SVG[this._kind](this._config).replace(/ID-/g, `${id}-`);
    this.shadowRoot.innerHTML = `
      <style>${STYLE}</style>
      <ha-card>
        <div class="wrap" id="wrap">
          <div class="top">
            <div class="illus"><svg viewBox="0 0 120 140" aria-hidden="true">${svg}</svg></div>
            <div class="head">
              <div class="info" id="info"></div>
              <div class="actions" id="actions"></div>
            </div>
            <div class="stats" id="stats"></div>
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
      level: num(S(c.power_level)), pellets: num(S(c.pellet_level)),
      runtime: parseRemaining(S(c.runtime)), speed: S(c.speed), bedTemp: num(S(c.bed_temperature)), humidity: num(S(c.humidity)), mode: S(c.mode), window: S(c.window),
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
    const mainIds = ["entity", "power", "switch", "temperature", "zone_1", "zone_2", "zone_3", "zone_4"].map((k) => c[k]).filter(Boolean);
    const usable = mainIds.some((i) => hass.states[i] && !BAD.includes(String(hass.states[i].state).toLowerCase()));
    if (!usable) { m.status = "unavailable"; return m; }
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
    } else if (kind === "pellet_stove") {
      const raw = main ? `${main.state} ${main.attributes.hvac_action || ""} ${main.attributes.status || ""}`.toLowerCase() : "";
      const ign = c.ignition_threshold ?? 250;
      const byPower = () => (watts > ign ? "ignition" : powered ? "heating" : "standby");
      if (/alarm|alarme|error|erreur|d[eé]faut|fault|bloqu|block/.test(raw)) m.status = "alarm";
      else if (/allum|ignit|d[eé]marr|start|pr[eé]chauf|preheat|charg/.test(raw)) m.status = "ignition";
      else if (/extin|shut.?down|cool|refroid|clean|nettoy/.test(raw)) m.status = "extinguishing";
      else if (base === "off" || base === "unavailable") m.status = base;
      else if (main && ["climate", "water_heater"].includes(domainOf(c.entity))) {
        const act = String(main.attributes.hvac_action || "").toLowerCase();
        m.status = act === "off" ? "off" : act === "heating" ? (watts !== null ? (watts > ign ? "ignition" : "heating") : "heating")
          : act ? "standby" : (watts !== null ? byPower() : "heating");
      }
      else if (/eco|veille|standby|attente|wait/.test(raw)) m.status = "standby";
      else if (watts !== null) m.status = base === "idle" && !powered ? "off" : byPower();
      else m.status = base === "running" ? "heating" : base === "standby" ? "standby" : "off";
      if (m.pellets != null && m.pellets < (c.pellet_alert ?? 15)) m.alerts.push("pellets_low");
    } else if (kind === "pool_pump") {
      m.status = base === "running" ? "filtering" : base;
    } else if (kind === "printer_3d") {
      const raw = main ? `${main.state}`.toLowerCase() : "";
      if (/fail|error|erreur|[eé]chec/.test(raw)) m.status = "failed";
      else if (/paus/.test(raw)) m.status = "paused";
      else if (/finish|done|complete|termin|fini/.test(raw)) m.status = "finished";
      else if (/prepar|heat|chauff|preheat|calibr|level|homing|init/.test(raw)) m.status = "heating";
      else if (/print|running|impression|en cours|busy|slicing/.test(raw)) m.status = "printing";
      else if (/offline|hors ligne/.test(raw)) m.status = "off";
      else if (/idle|ready|pr[eê]t|operational|standby/.test(raw)) m.status = powered ? "printing" : "ready";
      else if (base === "running") m.status = "printing";
      else if (base === "standby" || base === "idle") m.status = main || sw ? "ready" : "off";
      else m.status = base;
    } else if (kind === "radiator") {
      const isClimate = main && domainOf(c.entity) === "climate";
      const act = isClimate ? String(main.attributes.hvac_action || "").toLowerCase() : "";
      const raw = String(m.mode && !BAD.includes(String(m.mode.state).toLowerCase()) ? m.mode.state
        : isClimate ? (main.attributes.preset_mode || main.state) : "").toLowerCase();
      m.radMode = /hors|frost|gel|away|absent/.test(raw) ? "frost"
        : /eco|nuit|night|sleep|economy|reduit|réduit/.test(raw) ? "eco"
        : /^(off|arret|arrêt|stop)$/.test(raw) ? "off"
        : raw ? "comfort" : null;
      if (base === "unavailable") m.status = "unavailable";
      else if (m.radMode === "off" || base === "off" || act === "off" || (isClimate && main.state === "off")) m.status = "off";
      else if (act === "heating" || (watts != null && powered) || (watts == null && !isClimate && base === "running")) m.status = "heating";
      else m.status = "standby";
      m.heat = m.status !== "heating" ? 0 : watts != null ? Math.max(0.3, Math.min(1, watts / (c.max_power || 1500))) : 0.8;
      if (isOn(m.window)) m.alerts.push("window_open");
    } else if (kind === "hob") {
      const zp = c.zone_power || 1500;
      const lvlOf = (st) => {
        if (!st || BAD.includes(String(st.state).toLowerCase())) return null;
        const t = String(st.state).toLowerCase(), n = parseFloat(t), u = String(st.attributes.unit_of_measurement || "");
        if (/boost|^p$|power/.test(t)) return 9;
        if (["off", "arret", "arrêt", "0"].includes(t)) return 0;
        if (!Number.isFinite(n)) return t === "on" ? 5 : 0;
        if (u === "W") return Math.max(0, Math.min(9, Math.round(n / zp * 9)));
        if (u === "kW") return Math.max(0, Math.min(9, Math.round(n * 1000 / zp * 9)));
        if (u === "%") return Math.max(0, Math.min(9, Math.round(n / 100 * 9)));
        return Math.max(0, Math.min(9, Math.round(n)));
      };
      let zl = [1, 2, 3, 4].map((i) => lvlOf(S(c[`zone_${i}`])));
      if (zl.every((v) => v == null)) {
        // no per-zone data: spread the total power over zones (front-left, back-right, front-right, back-left)
        zl = [0, 0, 0, 0];
        if (base !== "off" && base !== "unavailable" && watts != null && watts > threshold) {
          const n = Math.max(1, Math.min(4, Math.ceil(watts / (zp * 1.4))));
          const per = watts / n;
          const lv = Math.max(1, Math.min(9, Math.round(per / zp * 9)));
          [0, 3, 1, 2].slice(0, n).forEach((z) => { zl[z] = lv; });
        }
      } else zl = zl.map((v) => v ?? 0);
      const now = Date.now(), keep = (c.residual_minutes ?? 10) * 60000;
      this._hot = this._hot || [0, 0, 0, 0];
      zl.forEach((v, i) => { if (v > 0) this._hot[i] = now; });
      m.zones = zl;
      m.residualZones = zl.map((v, i) => v === 0 && this._hot[i] && now - this._hot[i] < keep);
      m.activeZones = zl.filter((v) => v > 0).length;
      if (base === "unavailable") m.status = "unavailable";
      else if (m.activeZones > 0) m.status = "cooking";
      else if (m.residualZones.some(Boolean)) m.status = "residual";
      else m.status = "off";
    } else if (kind === "vmc") {
      const sp = m.speed ? String(m.speed.state).toLowerCase() : "";
      const spn = num(m.speed);
      const hi = c.high_threshold ?? 35;
      if (base === "off" || base === "unavailable") m.status = base;
      else if (m.speed && !BAD.includes(sp) && /boost|grande|high|max|rapide|fast|gv/.test(sp)) m.status = "speed2";
      else if (m.speed && !BAD.includes(sp) && /petite|low|eco|lente|slow|min|pv|auto|normal/.test(sp)) m.status = "speed1";
      else if (spn != null && spn > 0) m.status = (String(m.speed.attributes.unit_of_measurement || "") === "%" ? spn > 60 : spn >= 2) ? "speed2" : "speed1";
      else if (spn === 0) m.status = "off";
      else if (watts != null) m.status = watts > hi ? "speed2" : powered ? "speed1" : (base === "standby" ? "standby" : "off");
      else m.status = base === "running" ? "speed1" : base;
      if (m.humidity != null && m.humidity > (c.humidity_max ?? 70)) m.alerts.push("humid");
    } else if (kind === "solar") {
      const sunSt = hass.states[c.sun_entity || "sun.sun"];
      const hr = new Date().getHours();
      const night = sunSt ? sunSt.state === "below_horizon" : (hr >= 21 || hr < 6);
      m.frac = watts != null ? Math.max(0, Math.min(1, watts / (c.max_power || 3000))) : 0;
      if (base === "unavailable") m.status = "unavailable";
      else if (watts != null && watts > threshold) m.status = m.frac < 0.15 ? "low" : "producing";
      else m.status = night ? "night" : "idle";
    } else if (kind === "chest_freezer" || kind === "drawer_freezer") {
      if (base === "off" || base === "unavailable") m.status = base;
      else m.status = powered ? "cooling" : "standby";
      if (m.tempVal != null && m.tempVal > (c.freezer_max_temperature ?? c.max_temperature ?? -12)) m.alerts.push("too_warm");
    } else if (kind === "coffee_maker") {
      const warmT = c.warm_threshold ?? 5;
      if (["off", "unavailable"].includes(base)) m.status = base;
      else if (base === "finished") m.status = "ready";
      else if (watts !== null) m.status = watts > threshold ? "brewing" : watts > warmT ? (cfStyle(c) === "filtre" ? "keep_warm" : "ready") : "idle";
      else m.status = base === "running" ? "brewing" : "idle";
    } else if (kind === "air_fryer") {
      m.status = base === "running" ? "cooking" : base === "standby" ? "idle" : base;
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
    const active = ["running", "heating", "preheating", "cooling", "ignition", "filtering", "printing", "producing", "low", "speed1", "speed2", "cooking", "brewing", "keep_warm"].includes(m.status);
    if (m.status === "unavailable") return "- - -";
    if (["fridge", "chest_freezer", "drawer_freezer"].includes(kind)) return m.tempVal != null ? `${fmtNum(hass, m.tempVal, 0)}°` : "--°";
    if (kind === "radiator") {
      if (m.status === "off") return "OFF";
      if (m.radMode === "frost") return "H-G";
      const v = m.targetVal ?? m.tempVal;
      return v != null ? `${Math.round(v)}°` : "ON";
    }
    if (kind === "solar") {
      if (m.status === "night") return lang(hass) === "fr" ? "NUIT" : "NIGHT";
      if (m.watts == null) return "--";
      return m.watts >= 1000 ? `${(m.watts / 1000).toFixed(m.watts >= 10000 ? 0 : 1)}kW` : `${Math.round(m.watts)}W`;
    }
    if (kind === "printer_3d") {
      if (m.status === "printing") return m.progress != null ? `${Math.round(m.progress)}%` : m.remaining ? lcdDuration(m.remaining) : "PRINT";
      if (m.status === "heating") return m.tempVal != null ? `${Math.round(m.tempVal)}°` : "HEAT";
      if (m.status === "paused") return "PAUSE";
      if (m.status === "finished") return "DONE";
      if (m.status === "failed") return "ERROR";
      if (m.status === "ready") return "READY";
      return "OFF";
    }
    if (kind === "pool_pump") {
      if (m.status === "filtering") {
        const sp = num(m.speed), u = String(m.speed?.attributes.unit_of_measurement || "").toLowerCase();
        if (sp != null && u !== "%") return `${Math.round(sp)}`;
        if (sp != null) return `${Math.round(sp)}%`;
        return m.watts != null ? `${Math.round(m.watts)}W` : "ON";
      }
      return m.status === "standby" ? "STBY" : "OFF";
    }
    if (kind === "pellet_stove") {
      const fr = lang(hass) === "fr";
      if (m.status === "ignition") return fr ? "ALLUM" : "IGNIT";
      if (m.status === "extinguishing") return fr ? "EXTIN" : "COOL";
      if (m.status === "alarm") return fr ? "ALARM" : "ALARM";
      if (m.status === "standby") return "ECO";
      if (m.status === "heating") return m.tempVal != null ? `${Math.round(m.tempVal)}°` : m.level != null ? `P${Math.round(m.level)}` : "ON";
      return fmtClock(hass, new Date());
    }
    if (kind === "oven") {
      if (active && m.tempVal != null) return `${Math.round(m.tempVal)}°`;
      if (active) return m.remaining ? lcdDuration(m.remaining) : "ON";
      return fmtClock(hass, new Date());
    }
    if (kind === "coffee_maker") {
      const fr = lang(hass) === "fr";
      if (m.status === "brewing") return fr ? "CAFE" : "BREW";
      if (m.status === "ready") return fr ? "PRET" : "READY";
      if (m.status === "off") return "OFF";
      return fmtClock(hass, new Date());
    }
    if (kind === "air_fryer") {
      if (m.status === "finished") return "End";
      if (active && m.remaining != null && m.remaining > 0) return lcdDuration(m.remaining, m.remaining < 60);
      if (active && m.tempVal != null) return `${Math.round(m.tempVal)}°`;
      return active ? "ON" : "OFF";
    }
    if (kind === "microwave") {
      if (m.status === "finished") return "End";
      if (active) return m.remaining != null ? lcdDuration(m.remaining, m.remaining < 60) : "ON";
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
    const active = ["running", "heating", "preheating", "cooling", "ignition", "filtering", "printing", "producing", "low", "speed1", "speed2", "cooking", "brewing", "keep_warm"].includes(m.status);
    $("wrap").className = [
      "wrap", `k-${kind}`, `st-${m.status}`, `accent-${this._def.accent}`,
      active ? "active" : "", m.phase ? `ph-${m.phase}` : "",
      m.alerts.length ? "alert" : "", isOn(m.door) ? "door-open" : "", isOn(m.fdoor) ? "fz-open" : "",
      m.alerts.includes("too_warm") ? "warm" : "", m.alerts.includes("humid") ? "humid" : "", c.animations === false ? "no-anim" : "",
    ].filter(Boolean).join(" ");

    // illustration dynamic parts
    const sr = this.shadowRoot;
    const lcdEl = sr.querySelector(".lcd");
    if (lcdEl) lcdEl.textContent = this._lcdText(m);
    if (kind === "solar") $("wrap").style.setProperty("--sun", (m.frac || 0).toFixed(2));
    if (kind === "radiator") {
      $("wrap").style.setProperty("--heat", (m.heat || 0).toFixed(2));
      ["comfort", "eco", "frost"].forEach((k) => $("wrap").classList.toggle(`mode-${k}`, m.radMode === k || (k === "comfort" && !m.radMode && m.status !== "off")));
      $("wrap").classList.toggle("win-open", isOn(m.window));
    }
    if (kind === "hob" && m.zones) {
      m.zones.forEach((v, i) => {
        const z = sr.querySelector(`.z${i + 1}`), d = sr.querySelector(`.zd${i + 1}`);
        const res = m.residualZones[i];
        z.style.setProperty("--lvl", v > 0 ? (0.25 + v * 0.083).toFixed(2) : res ? "0.12" : "0");
        z.classList.toggle("on", v > 0); z.classList.toggle("res", !!res);
        d.textContent = v > 0 ? String(v) : res ? "H" : "0";
        d.classList.toggle("on", v > 0 || !!res);
      });
      $("wrap").classList.toggle("pot-on", m.zones[0] > 0);
      $("wrap").classList.toggle("pot-boil", m.zones[0] >= 7);
      $("wrap").classList.toggle("pan-on", m.zones[3] > 0);
    }
    if (kind === "printer_3d") {
      const H = 38;
      let frac = m.progress != null ? Math.max(0, Math.min(1, m.progress / 100)) : null;
      if (m.status === "finished") frac = 1;
      if (m.progress == null && m.status !== "printing" && m.status !== "finished") frac = 0;
      const wrap = $("wrap");
      wrap.classList.toggle("indeterminate", frac == null);
      const h = (frac ?? 0) * H;
      wrap.style.setProperty("--h", h.toFixed(2));
      const clip = sr.querySelector(".objclip");
      clip.setAttribute("y", (104 - h).toFixed(2)); clip.setAttribute("height", h.toFixed(2));
      wrap.style.setProperty("--fil", c.filament_color || "#ff8a1f");
    }
    if (kind === "pool_pump") {
      const sp = num(m.speed), u = String(m.speed?.attributes.unit_of_measurement || "").toLowerCase();
      let spd = 1;
      if (sp != null) spd = u === "%" ? 0.3 + sp / 100 : sp / 2800;
      else if (m.watts != null && c.max_power) spd = m.watts / c.max_power;
      spd = Math.max(0.3, Math.min(1.6, spd));
      $("wrap").style.setProperty("--spd", spd.toFixed(2));
    }
    if (kind === "pellet_stove") {
      const fs = m.level != null ? Math.max(0.55, Math.min(1.2, 0.55 + 0.13 * m.level)) : 1;
      sr.querySelector(".fire").style.setProperty("--fs", fs.toFixed(2));
    }
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
        active && !["fridge", "water_heater", "printer_3d", "pool_pump"].includes(kind)) {
      const raw = String(m.main.state).toLowerCase();
      if (![...OFF_STATES, ...DONE_STATES, "on", "running", "run"].includes(raw)) statusTxt = stateText(hass, m.main);
    }
    if (kind === "radiator" && m.radMode && m.radMode !== "off" && m.status !== "off" && m.status !== "unavailable") statusTxt += ` · ${tr(hass, m.radMode)}`;
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
      // safety: cutting a washer/dryer/dishwasher mid-cycle needs a second click
      const freezer = ["chest_freezer", "drawer_freezer"].includes(kind);
      const guarded = c.confirm_off !== false && on && (freezer || ((active || ["extinguishing", "paused"].includes(m.status)) && ["washer", "dryer", "dishwasher", "pellet_stove", "printer_3d"].includes(kind)));
      const arming = guarded && this._confirmUntil && Date.now() < this._confirmUntil;
      const label = arming ? tr(hass, "confirm_off") : tr(hass, "toggle");
      $("actions").innerHTML = `<button class="toggle ${on ? "on" : ""} ${arming ? "confirm" : ""}" title="${esc(label)}" aria-label="${esc(label)}" aria-pressed="${on}"><ha-icon icon="${arming ? "mdi:alert" : "mdi:power"}"></ha-icon></button>${arming ? `<div class="confirm-tip">${esc(label)}</div>` : ""}`;
      $("actions").querySelector("button").onclick = (ev) => {
        ev.stopPropagation();
        if (guarded && !(this._confirmUntil && Date.now() < this._confirmUntil)) {
          this._confirmUntil = Date.now() + 4000;
          this._render(this._compute());
          clearTimeout(this._confirmTimer);
          this._confirmTimer = setTimeout(() => { this._confirmUntil = 0; if (this._hass) this._render(this._compute()); }, 4100);
          return;
        }
        this._confirmUntil = 0;
        clearTimeout(this._confirmTimer);
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
    if (kind === "chest_freezer" || kind === "drawer_freezer") {
      if (m.tempVal != null) tile("mdi:snowflake-thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "temperature"), tEntity,
        m.alerts.includes("too_warm") ? "warn" : "");
    } else if (kind === "fridge") {
      if (m.tempVal != null) tile("mdi:thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "fridge_temp"), tEntity,
        m.tempVal > (c.max_temperature ?? 8) ? "warn" : "");
      if (m.ftemp) tile("mdi:snowflake", fmtUnit(hass, m.ftemp, 1), tr(hass, "freezer_temp"), c.freezer_temperature,
        num(m.ftemp) > (c.freezer_max_temperature ?? -12) ? "warn" : "");
    } else if (kind === "radiator") {
      const te = c.temperature || (domainOf(c.entity) === "climate" ? c.entity : null);
      if (m.tempVal != null) tile("mdi:home-thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "temperature"), te);
      if (m.targetVal != null) tile("mdi:target", `${fmtNum(hass, m.targetVal, 1)} ${m.tempUnit}`, tr(hass, "target"), c.target_temperature || te);
    } else if (kind === "hob") {
      /* no extra tile */
    } else if (kind === "vmc") {
      if (m.humidity != null) tile("mdi:water-percent", `${fmtNum(hass, m.humidity, 0)} %`, tr(hass, "humidity"), c.humidity, m.alerts.includes("humid") ? "warn" : "");
    } else if (kind === "printer_3d") {
      if (m.progress != null) tile("mdi:progress-check", `${fmtNum(hass, m.progress, 0)} %`, tr(hass, "progress"), c.progress);
      if (m.tempVal != null) tile("mdi:printer-3d-nozzle-heat", `${fmtNum(hass, m.tempVal, 0)} ${m.tempUnit}`, tr(hass, "nozzle"), tEntity);
      if (m.bedTemp != null) tile("mdi:heat-wave", `${fmtNum(hass, m.bedTemp, 0)} ${m.tempUnit}`, tr(hass, "bed"), c.bed_temperature);
    } else if (kind === "pool_pump") {
      if (m.tempVal != null) tile("mdi:thermometer-water", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "water"), tEntity);
      if (m.runtime != null) tile("mdi:timer-outline", fmtDuration(m.runtime), tr(hass, "today"), c.runtime);
      if (num(m.speed) != null) tile("mdi:speedometer", fmtUnit(hass, m.speed, 0), tr(hass, "speed"), c.speed);
    } else if (kind === "pellet_stove") {
      if (m.tempVal != null) tile("mdi:thermometer", `${fmtNum(hass, m.tempVal, 1)} ${m.tempUnit}`, tr(hass, "temperature"), tEntity);
      if (m.targetVal != null) tile("mdi:target", `${fmtNum(hass, m.targetVal, 1)} ${m.tempUnit}`, tr(hass, "target"), c.target_temperature || tEntity);
      if (m.level != null) tile("mdi:fire", `P${fmtNum(hass, m.level, 0)}`, tr(hass, "level"), c.power_level);
      if (m.pellets != null) tile("mdi:grain", `${fmtNum(hass, m.pellets, 0)} %`, tr(hass, "pellets"), c.pellet_level, m.alerts.includes("pellets_low") ? "warn" : "");
    } else if (kind === "water_heater" || kind === "oven" || kind === "air_fryer") {
      if (m.tempVal != null) tile("mdi:thermometer", `${fmtNum(hass, m.tempVal, 0)} ${m.tempUnit}`, tr(hass, "temperature"), tEntity);
      if (m.targetVal != null) tile("mdi:target", `${fmtNum(hass, m.targetVal, 0)} ${m.tempUnit}`, tr(hass, "target"), c.target_temperature || tEntity);
    }
    if (m.remaining != null && m.remaining > 0 && active && kind !== "water_heater") tile("mdi:timer-sand", fmtDuration(m.remaining), tr(hass, "remaining"), c.remaining);
    const solar = kind === "solar";
    if (m.pw) tile(solar ? "mdi:solar-power" : "mdi:flash", fmtPower(hass, m.pw) ?? "—", tr(hass, solar ? "production" : "power"), c.power);
    if (m.energy) tile("mdi:lightning-bolt-circle", fmtUnit(hass, m.energy, 2) ?? "—", tr(hass, solar ? "today" : "energy"), c.energy);
    if (m.cost) tile(solar ? "mdi:piggy-bank-outline" : "mdi:cash", fmtUnit(hass, m.cost, 2, 2) ?? "—", tr(hass, solar ? "savings" : "cost"), c.cost);
    if (solar && m.status !== "night" && m.frac != null && m.pw && !BAD.includes(String(m.pw.state).toLowerCase())) tile("mdi:white-balance-sunny", `${Math.round(m.frac * 100)} %`, lang(hass) === "fr" ? "de la crête" : "of peak", c.power);
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
  power_level: { entity: { domain: ["sensor", "number", "input_number", "select", "input_select"] } },
  pellet_level: { entity: { domain: ["sensor", "number", "input_number"] } },
  runtime: { entity: { domain: ["sensor"] } },
  bed_temperature: { entity: { domain: ["sensor"], device_class: "temperature" } },
  humidity: { entity: { domain: ["sensor"], device_class: "humidity" } },
  mode: { entity: { domain: ["select", "input_select", "sensor", "climate"] } },
  window: { entity: { domain: "binary_sensor" } },
  zone_1: { entity: { domain: ["sensor", "number", "select", "input_number"] } },
  zone_2: { entity: { domain: ["sensor", "number", "select", "input_number"] } },
  zone_3: { entity: { domain: ["sensor", "number", "select", "input_number"] } },
  zone_4: { entity: { domain: ["sensor", "number", "select", "input_number"] } },
  speed: { entity: { domain: ["sensor", "number", "input_number", "select"] } },
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
          ...(["chest_freezer", "drawer_freezer"].includes(kind) ? [
            { name: "freezer_max_temperature", selector: { number: { min: -30, max: 0, step: 0.5, mode: "box" } } },
          ] : []),
          ...(kind === "fridge" ? [
            { name: "max_temperature", selector: { number: { min: 0, max: 15, step: 0.5, mode: "box" } } },
            { name: "freezer_max_temperature", selector: { number: { min: -30, max: 0, step: 0.5, mode: "box" } } },
          ] : []),
          { name: "animations", selector: { boolean: {} }, default: true },
          ...(kind === "printer_3d" ? [{ name: "filament_color", selector: { text: {} } }] : []),
          ...(kind === "coffee_maker" ? [
            { name: "style", selector: { select: { mode: "dropdown", options: [
              { value: "filtre", label: "Filtre / Drip" }, { value: "dosette", label: "Dosettes / Pods" }, { value: "expresso", label: "Expresso / Bean-to-cup" }] } } },
            { name: "warm_threshold", selector: { number: { min: 0, max: 300, step: 1, mode: "box", unit_of_measurement: "W" } } },
          ] : []),
          ...(kind === "radiator" ? [
            { name: "max_power", selector: { number: { min: 100, max: 5000, step: 50, mode: "box", unit_of_measurement: "W" } } },
          ] : []),
          ...(kind === "hob" ? [
            { name: "zone_power", selector: { number: { min: 500, max: 4000, step: 50, mode: "box", unit_of_measurement: "W" } } },
            { name: "residual_minutes", selector: { number: { min: 0, max: 60, step: 1, mode: "box", unit_of_measurement: "min" } } },
          ] : []),
          ...(kind === "vmc" ? [
            { name: "high_threshold", selector: { number: { min: 5, max: 300, step: 1, mode: "box", unit_of_measurement: "W" } } },
            { name: "humidity_max", selector: { number: { min: 40, max: 100, step: 1, mode: "box", unit_of_measurement: "%" } } },
          ] : []),
          ...(kind === "solar" ? [
            { name: "max_power", selector: { number: { min: 100, max: 50000, step: 50, mode: "box", unit_of_measurement: "Wc" } } },
            { name: "sun_entity", selector: { entity: { domain: "sun" } } },
          ] : []),
          ...(kind === "pool_pump" ? [
            { name: "max_power", selector: { number: { min: 100, max: 3000, step: 10, mode: "box", unit_of_measurement: "W" } } },
          ] : []),
          ...(kind === "pellet_stove" ? [
            { name: "ignition_threshold", selector: { number: { min: 50, max: 1000, step: 10, mode: "box", unit_of_measurement: "W" } } },
            { name: "pellet_alert", selector: { number: { min: 0, max: 50, step: 1, mode: "box", unit_of_measurement: "%" } } },
          ] : []),
          ...(["washer", "dryer", "dishwasher", "pellet_stove", "printer_3d", "chest_freezer", "drawer_freezer"].includes(kind) ? [{ name: "confirm_off", selector: { boolean: {} }, default: true }] : []),
          { name: "color", selector: { text: {} } },
        ],
      },
    ],
    computeLabel: (s) => (s.name ? tr(null, kind === "solar" && s.name === "max_power" ? "f_max_power_solar" : kind === "radiator" && s.name === "max_power" ? "f_max_power_rad" : `f_${s.name}`) : undefined),
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
  if (sw && ["water_heater", "oven", "microwave", "pool_pump", "air_fryer", "coffee_maker"].includes(kind)) cfg.switch = sw;
  else if (sw && !cfg.entity) cfg.entity = sw;
  const clim = kind === "radiator" ? pick((i) => i.startsWith("climate.")) : null;
  if (clim) cfg.entity = clim;
  if (temp && ["fridge", "water_heater", "oven", "air_fryer", "pellet_stove", "pool_pump", "printer_3d", "chest_freezer", "drawer_freezer", "radiator"].includes(kind)) cfg.temperature = temp;
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
ha-card { display: block; height: 100%; cursor: pointer; overflow: hidden; container-type: inline-size; }
.wrap { padding: 14px; display: flex; flex-direction: column; gap: 12px; --c: var(--ac-accent, var(--ac-active)); }
.wrap.accent-heat { --c: var(--ac-accent, var(--ac-heat)); }
.wrap.accent-cold { --c: var(--ac-accent, var(--ac-cold)); }
.top {
  display: grid; grid-template-columns: auto minmax(0, 1fr); grid-template-areas: "illus head" "illus stats";
  column-gap: 14px; row-gap: 10px; align-items: start; min-width: 0;
}
.illus { grid-area: illus; } .head { grid-area: head; } .stats { grid-area: stats; }
.illus {
  width: var(--appliance-illustration-size, 116px); flex: none; aspect-ratio: 120 / 140; border-radius: 16px; padding: 4px; box-sizing: content-box;
  background: radial-gradient(circle at 50% 40%, rgba(127,127,127,.10), rgba(127,127,127,.03) 70%);
}
.st-unavailable .illus { opacity: .5; filter: grayscale(1); }
svg { width: 100%; height: 100%; display: block; overflow: visible; }
.head { display: flex; gap: 8px; align-items: flex-start; min-width: 0; }
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
.toggle.confirm { color: #fff; background: var(--ac-alert); animation: ac-pulse 1s ease-in-out infinite; }
.actions { position: relative; }
.confirm-tip {
  position: absolute; right: 0; top: 44px; z-index: 2; width: 170px; padding: 6px 8px; border-radius: 8px;
  font-size: 11.5px; line-height: 1.3; color: #fff; background: var(--ac-alert); box-shadow: 0 4px 14px rgba(0,0,0,.3);
}
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
@container (max-width: 400px) {
  .top { grid-template-areas: "illus head" "stats stats"; }
  .illus { width: var(--appliance-illustration-size-small, 84px); }
  .stats { grid-template-columns: repeat(auto-fit, minmax(88px, 1fr)); }
}

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

/* ---------- radiator ---------- */
.k-radiator { --heat: 0; }
.rglow { opacity: 0; transition: opacity 1.2s; }
.k-radiator.st-heating .rglow { opacity: calc(var(--heat) * .55); animation: ac-hob 3s ease-in-out infinite; --lvl: calc(var(--heat) * .55); }
.rwaves path { fill: none; stroke: var(--ac-heat); stroke-width: 1.8; stroke-linecap: round; opacity: 0; }
.k-radiator.st-heating .rwaves path { animation: ac-steam calc(2.6s - var(--heat) * 1.2s) ease-out infinite; }
.rwaves path:nth-child(2) { animation-delay: .5s !important; } .rwaves path:nth-child(3) { animation-delay: 1s !important; } .rwaves path:nth-child(4) { animation-delay: 1.5s !important; }
.micon { fill: #c3c9cf; stroke: #c3c9cf; transition: fill .4s, stroke .4s; }
.micon.m-comfort circle { stroke: none; }
.mode-comfort .m-comfort { fill: #ffb400; stroke: #ffb400; }
.mode-eco .m-eco { fill: #5b7bd5; stroke: #5b7bd5; }
.mode-frost .m-frost { fill: #2b9af9; stroke: #2b9af9; }
.k-radiator .lcd { fill: #ff9a4a; }
.k-radiator.st-off .lcd, .k-radiator.mode-frost .lcd { fill: #6fd8ff; }
.k-radiator.st-heating .l1 { fill: #ff8a3d; } .k-radiator.st-standby .l1 { fill: #3ddc84; }
.cold-air path { fill: none; stroke: #6fbfff; stroke-width: 1.8; stroke-linecap: round; opacity: 0; }
.win-open .cold-air path { animation: ac-wind 1.8s ease-in-out infinite; }
.cold-air path:nth-child(2) { animation-delay: -.6s !important; } .cold-air path:nth-child(3) { animation-delay: -1.2s !important; }
@keyframes ac-wind { 0% { opacity: 0; transform: translateX(-6px); } 40% { opacity: .9; } 100% { opacity: 0; transform: translateX(14px); } }

/* ---------- cooktop ---------- */
.zone { --lvl: 0; }
.k-hob.st-residual .dot { background: var(--ac-heat); opacity: .6; }
.zglow { opacity: var(--lvl); transition: opacity .8s; }
.zone.on .zglow { animation: ac-hob 2.2s ease-in-out infinite; }
.coil { opacity: 0; transition: opacity .8s; }
.zone.on .coil { opacity: calc(var(--lvl) * .9); }
.zone.res .coil { opacity: .12; }
.zd { font: 700 5.5px "Courier New", ui-monospace, monospace; fill: #4a1d14; }
.zd.on { fill: #ff4a1f; filter: drop-shadow(0 0 1px #ff5a1f); }
.steam-pot path { fill: none; stroke: #ffffff; stroke-width: 2.2; stroke-linecap: round; opacity: 0; }
.pot-on .steam-pot path { animation: ac-steam 2.6s ease-out infinite; }
.pot-boil .steam-pot path { animation-duration: 1.4s; }
.steam-pot path:nth-child(2) { animation-delay: .8s !important; } .steam-pot path:nth-child(3) { animation-delay: 1.6s !important; }
.lid { transform-box: view-box; transform-origin: 40px 80px; }
.pot-boil .lid { animation: ac-lid .35s steps(2) infinite; }
.sizzle path { fill: none; stroke: #f2c94c; stroke-width: .8; stroke-linecap: round; opacity: 0; }
.pan-on .sizzle path { animation: ac-pulse .5s steps(2) infinite; }
.sizzle path:nth-child(2n) { animation-delay: -.25s !important; }
@keyframes ac-hob { 0%, 100% { opacity: var(--lvl); } 50% { opacity: calc(var(--lvl) * .78); } }
@keyframes ac-lid { 0% { transform: translateY(0) rotate(0); } 100% { transform: translateY(-.8px) rotate(-1.5deg); } }

/* ---------- VMC (bathroom extractor fan) ---------- */
.k-vmc .illus { padding: 0; overflow: hidden; }
.fanv { transform-box: view-box; transform-origin: 60px 70px; }
.k-vmc.st-speed1 .fanv { animation: ac-rot 1.1s linear infinite; }
.k-vmc.st-speed2 .fanv { animation: ac-rot .28s linear infinite; }
.intake path { fill: none; stroke: #8fb6d8; stroke-width: 1.5; stroke-linecap: round; opacity: 0; transform-box: view-box; transform-origin: 60px 70px; }
.k-vmc.st-speed1 .intake path { animation: ac-suck 2.4s ease-in infinite; }
.k-vmc.st-speed2 .intake path { animation: ac-suck 1s ease-in infinite; }
.intake path:nth-child(2) { animation-delay: -.5s !important; } .intake path:nth-child(3) { animation-delay: -1s !important; }
.intake path:nth-child(4) { animation-delay: -1.5s !important; } .intake path:nth-child(5) { animation-delay: -2s !important; }
.k-vmc.st-speed2 .intake path:nth-child(n) { animation-delay: calc(var(--i, 0) * -.2s); }
.steam path { fill: none; stroke: #ffffff; stroke-width: 3; stroke-linecap: round; opacity: 0; }
.humid .steam path { animation: ac-steam 2.8s ease-out infinite; }
.steam path:nth-child(2) { animation-delay: .9s !important; } .steam path:nth-child(3) { animation-delay: 1.8s !important; }
.condensation path { fill: #9fd6ff; opacity: 0; transition: opacity 1s; }
.humid .condensation path { opacity: .9; animation: ac-drip 3s ease-in infinite; }
.condensation path:nth-child(2n) { animation-delay: -1.4s !important; } .condensation path:nth-child(3n) { animation-delay: -2.1s !important; }
@keyframes ac-suck { 0% { opacity: 0; transform: scale(1.25); } 30% { opacity: .85; } 100% { opacity: 0; transform: scale(.45); } }
@keyframes ac-drip { 0%, 60% { transform: translateY(0); } 100% { transform: translateY(5px); opacity: .2; } }

/* ---------- solar ---------- */
.k-solar { --sun: 0; }
.sunwrap { transform-box: view-box; transform-origin: 98px 20px; transform: scale(calc(.7 + var(--sun) * .45)); transition: transform 1s, opacity 1s, filter 1s; }
.k-solar:not(.st-producing):not(.st-low) .sunwrap { filter: grayscale(1) brightness(.85); opacity: .45; transform: scale(.75); }
.k-solar:not(.st-producing):not(.st-low) .sunwrap > circle:first-child { opacity: 0; }
.rays { transform-box: view-box; transform-origin: 98px 20px; }
.k-solar.st-producing .rays { animation: ac-rot 18s linear infinite; }
.k-solar.st-low .rays { animation: ac-rot 40s linear infinite; }
.panshade { opacity: 0; transition: opacity 1s; }
.k-solar:not(.st-producing):not(.st-low) .panshade { opacity: .35; }
.sweep { transform-box: view-box; opacity: 0; }
.k-solar.st-producing .sweep { opacity: 1; animation: ac-sweep 3.2s ease-in-out infinite; }
.panglow { opacity: 0; transition: opacity 1s; }
.k-solar.st-producing .panglow { opacity: calc(var(--sun) * .22); }
.sflow { fill: none; stroke: #ffd23f; stroke-width: 1.6; stroke-linecap: round; stroke-dasharray: 2 3; opacity: 0; }
.k-solar.st-producing .sflow, .k-solar.st-low .sflow { opacity: 1; animation: ac-flow calc(1.4s / (var(--sun) + .35)) linear infinite; }
.k-solar.st-producing .l1, .k-solar.st-low .l1 { fill: #3ddc84; }
.k-solar .lcd { font-size: 5.4px; }
.k-solar:not(.st-producing):not(.st-low) .lcd { fill: #24404f; }
@keyframes ac-sweep { 0% { transform: skewX(-18deg) translateX(0); } 60%, 100% { transform: skewX(-18deg) translateX(130px); } }

/* ---------- freezers ---------- */
.k-chest_freezer .flake, .k-drawer_freezer .flake { transform-box: view-box; }
.k-chest_freezer .flake { transform-origin: 72px 84.5px; }
.k-drawer_freezer .flake { transform-origin: 39.5px 18px; }
.k-chest_freezer .lcd, .k-drawer_freezer .lcd { fill: #6fd8ff; }
.warm.k-chest_freezer .lcd, .warm.k-drawer_freezer .lcd { fill: var(--ac-alert); }
.k-chest_freezer.st-cooling .l1, .k-drawer_freezer.st-cooling .l1 { fill: #3ddc84; }
.warm.k-chest_freezer .l2, .warm.k-drawer_freezer .l2 { fill: var(--ac-alert); }
.lid path { transition: d .9s cubic-bezier(.3,.7,.3,1), fill .4s; }
.lid-top { d: path("M8 66L100 66L112 54L20 54Z"); }
.lid-front { d: path("M8 66L100 66L100 73L8 73Z"); }
.lid-side { d: path("M100 66L112 54L112 61L100 73Z"); }
.lid-under { d: path("M20 54L112 54L112 54L20 54Z"); opacity: 0; transition: d .9s cubic-bezier(.3,.7,.3,1), opacity .3s; }
.door-open .lid-top { d: path("M22 61L110 61L110 61L22 61Z"); }
.door-open .lid-front { d: path("M16 6L108 6L108 1L16 1Z"); }
.door-open .lid-side { d: path("M110 61L108 6L114 3L116 58Z"); }
.door-open .lid-under { d: path("M22 61L110 61L108 6L16 6Z"); opacity: 1; }
.lid-handle { transition: opacity .3s; }
.door-open .lid-handle { opacity: 0; }
.cavity { opacity: 0; transition: opacity .5s .2s; }
.door-open .cavity { opacity: 1; }
.clight { opacity: 0; }
.door-open .clight { opacity: .3; }
.cold-out circle, .drawer-mist circle { fill: #dff3ff; opacity: 0; }
.door-open .cold-out circle, .door-open .drawer-mist circle { animation: ac-steam 2.6s ease-out infinite; }
.cold-out circle:nth-child(2), .drawer-mist circle:nth-child(2) { animation-delay: .7s !important; }
.cold-out circle:nth-child(3), .drawer-mist circle:nth-child(3) { animation-delay: 1.4s !important; }
.cold-out circle:nth-child(4) { animation-delay: 2s !important; }
.dz-door { transform-box: view-box; transform-origin: 26px 0; transition: transform .6s cubic-bezier(.3,.7,.3,1); }
.door-open .dz-door { transform: scaleX(.16) skewY(-6deg); }
.drawer { transform-box: view-box; transform-origin: 60px 56px; transition: transform .6s ease; }
.door-open .pull { transform: translateY(3px) scale(1.09); transition-delay: .35s; filter: drop-shadow(0 3px 3px rgba(0,0,0,.25)); }

/* ---------- 3D printer ---------- */
.k-printer_3d { --fil: #ff8a1f; --h: 0; }
.k-printer_3d .gantry { transform-box: view-box; transform: translateY(calc(var(--h) * -1px)); transition: transform .8s ease; }
.k-printer_3d .head { transform-box: view-box; }
.k-printer_3d.st-printing .head { animation: ac-printx 1.1s ease-in-out infinite alternate; }
.k-printer_3d.st-printing .hfan, .k-printer_3d.st-heating .hfan { transform-box: view-box; transform-origin: 60px 90px; animation: ac-rot .25s linear infinite; }
.spool { transform-box: view-box; transform-origin: 97px 20px; }
.k-printer_3d.st-printing .spool { animation: ac-rot 9s linear infinite; }
.tip { fill: #8a6d1f; transition: fill .4s; }
.k-printer_3d.st-printing .tip { fill: #ffd27a; filter: drop-shadow(0 0 1.5px #ffb347); }
.k-printer_3d.st-heating .tip { fill: #ff4a1f; filter: drop-shadow(0 0 2px #ff5a1f); animation: ac-pulse 1s ease-in-out infinite; }
.bedheat path { fill: none; stroke: var(--ac-heat); stroke-width: 1.4; stroke-linecap: round; opacity: 0; }
.k-printer_3d.st-heating .bedheat path { animation: ac-steam 1.8s ease-out infinite; }
.bedheat path:nth-child(2) { animation-delay: .45s !important; } .bedheat path:nth-child(3) { animation-delay: .9s !important; } .bedheat path:nth-child(4) { animation-delay: 1.35s !important; }
.k-printer_3d.indeterminate.st-printing .gantry { transition: none; animation: ac-zrise 14s linear infinite; }
.k-printer_3d.indeterminate.st-printing .object { transform-box: view-box; transform-origin: 60px 104px; animation: ac-grow 14s linear infinite; }
.k-printer_3d.indeterminate.st-printing .objclip { transform: none; }
.k-printer_3d.indeterminate .objclip { y: 66px; height: 38px; }
.k-printer_3d.st-paused .lcd { animation: ac-pulse 1s steps(2) infinite; }
.k-printer_3d.st-failed .lcd { fill: var(--ac-alert); }
.k-printer_3d.st-printing .l1 { fill: #3ddc84; } .k-printer_3d.st-heating .l1 { fill: #ff8a3d; } .k-printer_3d.st-failed .l1 { fill: var(--ac-alert); }
.k-printer_3d.st-failed .dot { background: var(--ac-alert); }
@keyframes ac-printx { from { transform: translateX(-11px); } to { transform: translateX(11px); } }
@keyframes ac-zrise { from { transform: translateY(0); } to { transform: translateY(-38px); } }
@keyframes ac-grow { from { transform: scaleY(0); } to { transform: scaleY(1); } }

/* ---------- pool pump ---------- */
.k-pool_pump { --spd: 1; }
.flow { fill: none; stroke: #36b4f5; stroke-width: 2.2; stroke-linecap: round; stroke-dasharray: 3 5; opacity: 0; transition: opacity .6s; }
.k-pool_pump.st-filtering .flow { opacity: .95; animation: ac-flow calc(.7s / var(--spd)) linear infinite; }
.fan { transform-box: view-box; transform-origin: 104px 74px; }
.k-pool_pump.st-filtering .fan { animation: ac-rot calc(.22s / var(--spd)) linear infinite; }
.swirl { transform-box: view-box; transform-origin: 30px 68px; }
.k-pool_pump.st-filtering .swirl { animation: ac-rot calc(2.4s / var(--spd)) linear infinite; }
.ripple { animation: ac-ripple 6s linear infinite; }
.k-pool_pump.st-filtering .ripple { animation-duration: 3s; }
.bubbles circle { fill: #fff; opacity: 0; }
.k-pool_pump.st-filtering .bubbles circle { animation: ac-jetbub calc(1.4s / var(--spd)) ease-out infinite; }
.bubbles circle:nth-child(2) { animation-delay: -.35s !important; } .bubbles circle:nth-child(3) { animation-delay: -.7s !important; } .bubbles circle:nth-child(4) { animation-delay: -1.05s !important; }
.k-pool_pump.st-filtering .hum { animation: ac-shake-soft .18s linear infinite; }
.k-pool_pump.st-filtering .l1 { fill: #3ddc84; }
.k-pool_pump .lcd { font-size: 6.4px; }
@keyframes ac-flow { to { stroke-dashoffset: -16; } }
@keyframes ac-ripple { from { transform: translateX(0); } to { transform: translateX(20px); } }
@keyframes ac-jetbub { 0% { opacity: 0; transform: translate(0, 0); } 25% { opacity: .9; } 100% { opacity: 0; transform: translate(-14px, -6px); } }

/* ---------- pellet stove ---------- */
.k-pellet_stove .fire { transform-box: view-box; transform-origin: 60px 87px; transform: scale(var(--fs, 1)); opacity: 0; transition: opacity .8s, transform 1s ease; }
.k-pellet_stove.st-heating .fire { opacity: 1; }
.k-pellet_stove.st-ignition .fire { opacity: .9; transform: scale(.32); }
.flame { transform-box: fill-box; transform-origin: 50% 100%; }
.k-pellet_stove.st-heating .flame, .k-pellet_stove.st-ignition .flame { animation: ac-flick .8s ease-in-out infinite alternate; }
.flame.f2 { animation-duration: .62s !important; } .flame.f3 { animation-duration: .71s !important; animation-delay: -.3s !important; }
.flame.f4 { animation-duration: .5s !important; } .flame.f5 { animation-duration: 1.1s !important; animation-delay: -.5s !important; }
.k-pellet_stove .glow { opacity: 0; transition: opacity 1s; }
.k-pellet_stove.st-heating .glow { opacity: 1; animation: ac-glow 1.6s ease-in-out infinite; }
.k-pellet_stove.st-ignition .glow { opacity: .35; }
.k-pellet_stove.st-extinguishing .glow { opacity: .2; }
.embers circle { fill: #ff8a2a; opacity: 0; }
.k-pellet_stove.st-heating .embers circle, .k-pellet_stove.st-ignition .embers circle { opacity: 1; animation: ac-pulse 1.3s ease-in-out infinite; }
.k-pellet_stove.st-extinguishing .embers circle { opacity: .7; fill: #d2511a; animation: ac-pulse 3s ease-in-out infinite; }
.embers circle:nth-child(2) { animation-delay: -.4s !important; } .embers circle:nth-child(4) { animation-delay: -.8s !important; }
.igniter { fill: #5a2a20; }
.k-pellet_stove.st-ignition .igniter { fill: #ff3b1a; filter: drop-shadow(0 0 2px #ff5a1f); animation: ac-pulse .9s ease-in-out infinite; }
.smoke-in path, .flue-smoke path { fill: none; stroke: #c9ced4; stroke-width: 2.2; stroke-linecap: round; opacity: 0; }
.k-pellet_stove.st-ignition .smoke-in path, .k-pellet_stove.st-extinguishing .smoke-in path { animation: ac-steam 2.4s ease-out infinite; }
.k-pellet_stove.st-ignition .flue-smoke path { animation: ac-steam 2.2s ease-out infinite; }
.smoke-in path:nth-child(2), .flue-smoke path:nth-child(2) { animation-delay: 1.1s !important; }
.warm-air path { fill: none; stroke: var(--ac-heat); stroke-width: 1.6; stroke-linecap: round; opacity: 0; }
.k-pellet_stove.st-heating .warm-air path { animation: ac-steam 2s ease-out infinite; }
.warm-air path:nth-child(2) { animation-delay: .5s !important; } .warm-air path:nth-child(3) { animation-delay: 1s !important; } .warm-air path:nth-child(4) { animation-delay: 1.5s !important; }
.k-pellet_stove .lcd { fill: #ff9a4a; }
.k-pellet_stove.st-off .lcd, .k-pellet_stove.st-standby .lcd { fill: #6fd8ff; }
.k-pellet_stove.st-alarm .dot { background: var(--ac-alert); }
.k-pellet_stove.st-alarm .status { color: var(--ac-alert); font-weight: 600; }
.k-pellet_stove.st-alarm .lcd { fill: var(--ac-alert); animation: ac-pulse .8s steps(2) infinite; }
.k-pellet_stove.st-heating .l1, .k-pellet_stove.st-ignition .l1 { fill: #ff8a3d; }
@keyframes ac-flick { 0% { transform: scale(1, 1) skewX(0deg); } 35% { transform: scale(.94, 1.08) skewX(3deg); } 70% { transform: scale(1.04, .93) skewX(-2deg); } 100% { transform: scale(.97, 1.04) skewX(1.5deg); } }

/* ---------- fridge ---------- */
.fz-door, .fr-door { transform-origin: 26px 0; transition: transform .6s cubic-bezier(.3,.7,.3,1); }
.door-open .fr-door { transform: scaleX(.16) skewY(-6deg); }
.fz-open .fz-door { transform: scaleX(.16) skewY(-6deg); }
.flight { transition: opacity .4s; } .door-open .flight { opacity: .35; }
.flake { stroke: var(--ac-cold); transform-origin: 39.5px 60px; }
.k-fridge.st-cooling .flake, .k-chest_freezer.st-cooling .flake, .k-drawer_freezer.st-cooling .flake { animation: ac-pulse 2.4s ease-in-out infinite; }
.mist circle { fill: #9fd6ff; opacity: 0; }
.k-fridge.st-cooling .mist circle, .k-chest_freezer.st-cooling .mist circle, .k-drawer_freezer.st-cooling .mist circle { animation: ac-mist 3s ease-out infinite; }
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

/* ---------- air fryer ---------- */
.k-air_fryer .lcd { fill: #3b2c22; }
.k-air_fryer.active .lcd { fill: #ff9a4a; }
.k-air_fryer.st-finished .lcd { fill: #3ddc84; }
.k-air_fryer.active .l1 { fill: #ff9a4a; animation: ac-pulse 1.6s ease-in-out infinite; }
.af-coil { fill: none; stroke: #4a3a33; stroke-width: 1.1; stroke-linejoin: round; transition: stroke .6s; }
.k-air_fryer.active .af-coil { stroke: #ff5a1f; filter: drop-shadow(0 0 1.5px #ff7a2e); animation: ac-pulse 1.6s ease-in-out infinite; }
.af-air path { fill: none; stroke: #ffe2b8; stroke-width: 1; stroke-linecap: round; stroke-dasharray: 3 5; opacity: 0; transition: opacity .6s; }
.k-air_fryer.active .af-air path { opacity: .75; animation: ac-flow .7s linear infinite; }
.k-air_fryer.active .af-air path:nth-child(2) { animation-duration: .9s; animation-direction: reverse; }
.fries, .nuggets { transform-box: fill-box; transform-origin: 50% 100%; transition: filter 1s; }
.k-air_fryer.active .fries { animation: af-toss 1.3s ease-in-out infinite; }
.k-air_fryer.active .nuggets { animation: af-toss 1.3s ease-in-out infinite; animation-delay: -.65s; }
.k-air_fryer.st-finished .fries, .k-air_fryer.st-finished .nuggets { filter: saturate(1.25) brightness(.88); }
.af-steam path { fill: none; stroke: #cfd6dd; stroke-width: 2; stroke-linecap: round; opacity: 0; }
.k-air_fryer.active .af-steam path { animation: ac-steam 2.4s ease-out infinite; }
.af-steam path:nth-child(2) { animation-delay: .8s !important; } .af-steam path:nth-child(3) { animation-delay: 1.6s !important; }
@keyframes af-toss { 0%, 100% { transform: translateY(0) rotate(0); } 30% { transform: translateY(-2.2px) rotate(-2deg); } 60% { transform: translateY(-.6px) rotate(1.5deg); } }

/* ---------- coffee maker ---------- */
.cf-level { transform-box: fill-box; transform-origin: 50% 100%; transform: scaleY(0); transition: transform 1.2s ease; }
.s-filtre { --cf-fill: 40s; } .s-dosette { --cf-fill: 16s; } .s-expresso { --cf-fill: 14s; }
.k-coffee_maker.st-keep_warm .cf-level { transform: scaleY(.8); }
.k-coffee_maker.st-brewing .cf-level { animation: cf-fill var(--cf-fill) cubic-bezier(.2,.6,.4,1) forwards; }
.cf-water { transform-box: fill-box; transform-origin: 50% 100%; }
.k-coffee_maker.st-brewing .cf-water { animation: cf-drain var(--cf-fill) linear forwards; }
.k-coffee_maker.st-keep_warm .cf-water { transform: scaleY(.3); }
.cf-stream { fill: none; stroke: #5a3417; stroke-width: 2.2; stroke-linecap: round; stroke-dasharray: 4 2; opacity: 0; transition: opacity .4s; }
.k-coffee_maker.st-brewing .cf-stream { opacity: .95; animation: cf-flow .45s linear infinite; }
.cf-drip circle { fill: #4a2a14; opacity: 0; }
.k-coffee_maker.st-brewing .cf-drip circle { animation: cf-drop 1.1s ease-in infinite; }
.cf-drip circle:nth-child(2) { animation-delay: .37s !important; } .cf-drip circle:nth-child(3) { animation-delay: .74s !important; }
.cf-plate { fill: #3a3232; transition: fill .6s; }
.k-coffee_maker.st-brewing .cf-plate, .k-coffee_maker.st-keep_warm .cf-plate { fill: #ff5a1f; filter: drop-shadow(0 0 2px #ff7a2e); animation: ac-pulse 1.8s ease-in-out infinite; }
.cf-led { fill: #3a424b; transition: fill .3s; }
.k-coffee_maker.st-ready .cf-led { fill: #3ddc84; }
.k-coffee_maker.st-keep_warm .cf-led { fill: #ff8a3d; }
.k-coffee_maker.st-brewing .cf-led { fill: #38d9ff; animation: ac-pulse 1s ease-in-out infinite; }
.k-coffee_maker.st-ready .lcd { fill: #3ddc84; }
.cf-steam path { fill: none; stroke: #cfd6dd; stroke-width: 2; stroke-linecap: round; opacity: 0; }
.k-coffee_maker.st-brewing .cf-steam path, .k-coffee_maker.st-keep_warm .s-filtre .cf-steam path { animation: ac-steam 2.4s ease-out infinite; }
.cf-steam path:nth-child(2) { animation-delay: 1.1s !important; }
.k-coffee_maker.st-brewing .s-expresso .cf-body { animation: ac-shake-soft .45s linear infinite; }
@keyframes cf-fill { from { transform: scaleY(0); } to { transform: scaleY(.85); } }
@keyframes cf-drain { from { transform: scaleY(1); } to { transform: scaleY(.3); } }
@keyframes cf-flow { to { stroke-dashoffset: -12; } }
@keyframes cf-drop { 0% { opacity: 0; transform: translateY(0); } 15% { opacity: .95; } 100% { opacity: .9; transform: translateY(26px); } }
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
    documentationURL: "https://github.com/skyrotter/ha-appliance-electromenager-cards",
  });
}
console.info(`%c HA-APPLIANCE-CARDS %c v${VERSION} `,
  "color:#fff;background:#03a9f4;font-weight:700;border-radius:3px 0 0 3px",
  "color:#03a9f4;background:#fff;font-weight:700;border-radius:0 3px 3px 0");
})();
