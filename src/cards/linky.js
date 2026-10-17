/* ================================================================== */
/* appliance-linky-card.js                                          */
/* ================================================================== */
(() => {
"use strict";
const define = (tag, cls) => { if (!customElements.get(tag)) customElements.define(tag, cls); };
window.customCards = window.customCards || [];
/* appliance-linky-card — compteur Linky animé (écran LCD, jauge vs puissance souscrite, index HP/HC)
 * type: custom:appliance-linky-card
 */
const I18N_LINKY = /*@i18n linky*/{};

class ApplianceLinkyCard extends HTMLElement {
  static getStubConfig() {
    return { entity_power: '', entity_hp: '', entity_hc: '', subscribed_power: 9, hc_ranges: '01:00-07:00,12:30-14:30' };
  }

  static getConfigForm() {
    return {
      schema: [
        { name: 'name', selector: { text: {} } },
        { name: 'entity_power', selector: { entity: { domain: 'sensor' } } },
        { name: 'entity_hp', selector: { entity: { domain: 'sensor', device_class: 'energy' } } },
        { name: 'entity_hc', selector: { entity: { domain: 'sensor', device_class: 'energy' } } },
        { name: 'entity_tariff', selector: { entity: { domain: ['sensor', 'select'] } } },
        { name: 'entity_cost', selector: { entity: { domain: 'sensor' } } },
        { name: 'subscribed_power', selector: { number: { min: 3, max: 36, step: 1, mode: 'box', unit_of_measurement: 'kVA' } } },
        { name: 'hc_ranges', selector: { text: {} } },
        { type: 'grid', name: '', schema: [
          { name: 'show_gauge', selector: { boolean: {} }, default: true },
          { name: 'show_index', selector: { boolean: {} }, default: true },
          { name: 'show_tariff', selector: { boolean: {} }, default: true },
          { name: 'show_cost', selector: { boolean: {} }, default: true },
        ] },
        { name: 'language', selector: { select: { options: Object.keys(I18N_LINKY) } } },
      ],
    };
  }

  setConfig(config) {
    this._config = {
      show_gauge: true, show_index: true, show_tariff: true, show_cost: true,
      subscribed_power: 9, hc_ranges: '', language: 'fr', ...config,
    };
    this._built = false;
    this._build();
  }

  set hass(hass) { this._hass = hass; this._update(); }
  getCardSize() { return 5; }
  _t(k) { return (I18N_LINKY[this._config.language] || I18N_LINKY.en)[k] ?? I18N_LINKY.en[k] ?? k; }

  connectedCallback() {
    // Défilement des pages de l'écran LCD toutes les 3 s
    this._timer = setInterval(() => {
      this._page = (this._page || 0) + 1; this._renderLcd();
      const b = this.shadowRoot && this.shadowRoot.getElementById('b2');
      if (b) { b.classList.add('press'); setTimeout(() => b.classList.remove('press'), 250); }
    }, 3000);
  }
  disconnectedCallback() { clearInterval(this._timer); }

  _build() {
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    const ticks = Array.from({ length: 21 }, (_, i) => {
      const a = (-180 + i * 9) * Math.PI / 180, r1 = 78, r2 = i % 5 === 0 ? 68 : 72;
      return `<line x1="${100 + r1 * Math.cos(a)}" y1="${100 + r1 * Math.sin(a)}" x2="${100 + r2 * Math.cos(a)}" y2="${100 + r2 * Math.sin(a)}" stroke="#8a99a8" stroke-width="1.5"/>`;
    }).join('');
    this.shadowRoot.innerHTML = `
    <style>
      :host { display:block; }
      ha-card { padding:12px; }
      .title { font-weight:600; margin:0 4px 10px; }
      .wrap { display:flex; gap:14px; align-items:center; flex-wrap:wrap; justify-content:center; }
      /* Boîtier : coque vert anis, cadre blanc, écran LCD vert sombre, 2 boutons, croix en bas */
      .box { width:150px; background:linear-gradient(160deg,#d4ea35,#b5d11c); border-radius:10px; padding:16px 14px 14px;
        box-shadow:0 3px 10px rgba(0,0,0,.35), inset 0 0 0 2px rgba(255,255,255,.35); position:relative; }
      .eye { width:8px; height:8px; background:#1d2a05; border-radius:2px; margin:-6px auto 8px; }
      .bezel { background:linear-gradient(#f7f7f7,#dcdcdc); border-radius:12px; padding:10px 9px 8px; box-shadow:inset 0 0 0 1px #c9c9c9; }
      .lcd { background:#1f4d2a; border-radius:3px; padding:8px 6px; min-height:66px; text-align:center; position:relative; overflow:hidden;
        box-shadow:inset 0 0 8px rgba(0,0,0,.7); font-family:'Courier New',monospace; color:#b9f08a; display:flex; flex-direction:column; justify-content:center; }
      .lcd::after { content:''; position:absolute; inset:0; background:repeating-linear-gradient(0deg,rgba(0,0,0,.12) 0 1px,transparent 1px 3px); pointer-events:none; }
      .lcd .lab { font-size:.58em; letter-spacing:.08em; opacity:.85; }
      .lcd .val { font-size:1.25em; font-weight:700; text-shadow:0 0 6px rgba(185,240,138,.6); animation:fadein .5s; }
      .btns { display:flex; gap:6px; margin-top:8px; justify-content:center; }
      .btn { width:44px; height:12px; border-radius:3px; background:linear-gradient(#fff,#d2d2d2); border:1px solid #b0b0b0; cursor:pointer; padding:0; transition:transform .1s; }
      .btn:active, .btn.press { transform:translateY(1px); background:#c8c8c8; }
      .plus { text-align:center; font-size:20px; line-height:1; color:#3b4a08; margin-top:12px; font-weight:300; }
      .leds { display:flex; justify-content:center; gap:14px; margin-top:8px; font-size:.55em; letter-spacing:.06em; color:#3b4a08; }
      .led { width:9px; height:9px; border-radius:50%; background:#5a2a2a; margin:0 auto 2px; }
      .led.conso { background:#ff3b30; box-shadow:0 0 8px #ff3b30; animation:pulse var(--pulse,2s) infinite; }
      .led.hc { background:#ffb300; box-shadow:0 0 8px #ffb300; } .led.hp { background:#6b5a2a; }
      .gauge { flex:1; min-width:170px; max-width:260px; }
      .gauge svg { width:100%; display:block; }
      .arc-bg { fill:none; stroke:rgba(127,127,127,.25); stroke-width:12; stroke-linecap:round; }
      .arc { fill:none; stroke:var(--gc,#43a047); stroke-width:12; stroke-linecap:round; transition:stroke-dashoffset 1s ease, stroke .6s; }
      .needle { transform-origin:100px 100px; transition:transform 1s cubic-bezier(.3,1.4,.5,1); stroke:var(--primary-text-color,#223); stroke-width:3; stroke-linecap:round; }
      .gtxt { text-anchor:middle; font-size:15px; font-weight:700; fill:var(--primary-text-color,#223); }
      .gsub { text-align:center; font-size:.7em; opacity:.65; }
      .over .arc { animation:pulse .6s infinite; }
      .badge { text-align:center; font-size:.8em; font-weight:700; margin-top:4px; color:#e53935; display:none; }
      .over .badge { display:block; animation:pulse .6s infinite; }
      @keyframes pulse { 50% { opacity:.25 } }
      @keyframes fadein { from { opacity:0; transform:translateY(5px) } to { opacity:1; transform:none } }
    </style>
    <ha-card id="meter">
      <div class="title" id="name">${this._config.name || this._t('name')}</div>
      <div class="wrap">
        <div class="box">
          <div class="eye"></div>
          <div class="bezel">
            <div class="lcd"><div class="lab" id="lab"></div><div class="val" id="val"></div></div>
            <div class="btns"><button class="btn" id="b1" aria-label="-"></button><button class="btn" id="b2" aria-label="+"></button></div>
          </div>
          <div class="plus">+</div>
          <div class="leds"><div><div class="led conso" id="ledc"></div>${this._t('conso')}</div><div><div class="led hp" id="ledt"></div><span id="ledtl">HP</span></div></div>
        </div>
        <div class="gauge" id="gaugebox">
          <svg viewBox="0 0 200 120">
            <path class="arc-bg" d="M20 100 A80 80 0 0 1 180 100"/>
            <path class="arc" id="arc" d="M20 100 A80 80 0 0 1 180 100" stroke-dasharray="251.3" stroke-dashoffset="251.3"/>
            ${ticks}
            <line class="needle" id="needle" x1="100" y1="100" x2="100" y2="32" style="transform:rotate(-90deg)"/>
            <circle cx="100" cy="100" r="6" fill="var(--primary-text-color,#223)"/>
            <text class="gtxt" x="100" y="118" id="gtxt"></text>
          </svg>
          <div class="gsub" id="gsub"></div>
          <div class="badge">${this._t('alert')}</div>
        </div>
      </div>
    </ha-card>`;
    const flip = (d) => () => { this._page = (this._page || 0) + d; this._renderLcd(); };
    this.shadowRoot.getElementById('b1').onclick = flip(-1);
    this.shadowRoot.getElementById('b2').onclick = flip(1);
    this._built = true;
  }

  _num(id) {
    if (!id || !this._hass) return null;
    const s = this._hass.states[id];
    if (!s || ['unavailable', 'unknown'].includes(s.state)) return null;
    const n = parseFloat(s.state);
    return Number.isFinite(n) ? n : null;
  }

  // Heures creuses : entité tarif si fournie, sinon plages "HH:MM-HH:MM,..."
  _isHC() {
    const c = this._config;
    if (c.entity_tariff && this._hass.states[c.entity_tariff]) {
      return /hc|creuse|off|low/i.test(this._hass.states[c.entity_tariff].state);
    }
    const now = new Date(), m = now.getHours() * 60 + now.getMinutes();
    return String(c.hc_ranges).split(',').some((r) => {
      const [a, b] = r.trim().split('-'); if (!a || !b) return false;
      const f = (x) => { const [h, mi] = x.split(':').map(Number); return h * 60 + (mi || 0); };
      const s = f(a), e = f(b);
      return s <= e ? m >= s && m < e : m >= s || m < e;
    });
  }

  _renderLcd() {
    if (!this._built || !this._data) return;
    const d = this._data, c = this._config, pages = [];
    pages.push([this._t('power'), d.power === null ? '—' : `${Math.round(d.power)} ${d.unit}`]);
    if (c.show_index) {
      pages.push([this._t('hp'), d.hp === null ? '—' : `${Math.round(d.hp)} kWh`]);
      pages.push([this._t('hc'), d.hc === null ? '—' : `${Math.round(d.hc)} kWh`]);
    }
    if (c.show_tariff) pages.push([this._t('tariff'), d.hcNow ? 'HEURES CREUSES' : 'HEURES PLEINES']);
    if (c.show_cost && d.cost !== null) pages.push([this._t('cost'), `${d.cost.toFixed(2)} €`]);
    const p = pages[(this._page || 0) % pages.length];
    const lab = this.shadowRoot.getElementById('lab'), val = this.shadowRoot.getElementById('val');
    lab.textContent = p[0];
    // On ne relance le fondu que si la page affichée change (pas à chaque mise à jour d'état)
    const key = p[0];
    val.textContent = p[1];
    if (this._lastKey !== key) { this._lastKey = key; val.style.animation = 'none'; void val.offsetWidth; val.style.animation = ''; }
  }

  _update() {
    if (!this._built || !this._hass) return;
    const c = this._config, root = this.shadowRoot;
    const pState = c.entity_power && this._hass.states[c.entity_power];
    const unit = (pState && pState.attributes.unit_of_measurement) || 'W';
    let power = this._num(c.entity_power);
    const hp = this._num(c.entity_hp), hc = this._num(c.entity_hc);
    const hcNow = this._isHC();
    let cost = this._num(c.entity_cost);
    this._data = { power, unit, hp, hc, hcNow, cost };

    // Jauge : puissance (W ou VA, kW ou kVA) / puissance souscrite (kVA × 1000).
    // Le Linky donne la puissance apparente en VA : on garde l'unité du capteur.
    const max = c.subscribed_power * 1000;
    const gaugeUnit = /va/i.test(unit) ? 'VA' : 'W';
    const base = power === null ? 0 : (/^k/i.test(unit) ? power * 1000 : power);
    const ratio = Math.min(base / max, 1);
    root.getElementById('arc').style.strokeDashoffset = 251.3 * (1 - ratio);
    root.getElementById('needle').style.transform = `rotate(${-90 + ratio * 180}deg)`;
    const color = ratio > 0.9 ? '#e53935' : ratio > 0.65 ? '#fb8c00' : '#43a047';
    root.getElementById('gaugebox').style.setProperty('--gc', color);
    root.getElementById('gtxt').textContent = power === null ? '—' : `${Math.round(base)} ${gaugeUnit}`;
    root.getElementById('gsub').textContent = `${this._t('subscribed')} : ${c.subscribed_power} kVA`;
    root.getElementById('gaugebox').style.display = c.show_gauge ? '' : 'none';
    root.getElementById('meter').classList.toggle('over', ratio > 0.95);

    // LED conso : clignote plus vite quand la puissance monte (2 s → 0.25 s)
    root.getElementById('ledc').style.setProperty('--pulse', `${(2 - ratio * 1.75).toFixed(2)}s`);
    const ledt = root.getElementById('ledt');
    ledt.className = `led ${hcNow ? 'hc' : 'hp'}`;
    root.getElementById('ledtl').textContent = hcNow ? 'HC' : 'HP';
    this._renderLcd();
  }
}

define('appliance-linky-card', ApplianceLinkyCard);
window.customCards = window.customCards || [];
window.customCards.push({ type: 'appliance-linky-card', name: 'Linky Card', description: 'Compteur Linky animé : LCD, jauge, index HP/HC', preview: false });
})();
