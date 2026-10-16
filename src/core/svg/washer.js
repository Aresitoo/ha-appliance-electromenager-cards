SVG.washer = () => `
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
</g>`;
