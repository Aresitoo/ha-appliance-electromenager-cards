# Appliance Cards for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://hacs.xyz/docs/faq/custom_repositories)
[![Validate](https://github.com/skyrotter/ha-appliance-electromenager-cards/actions/workflows/validate.yml/badge.svg)](https://github.com/skyrotter/ha-appliance-electromenager-cards/actions/workflows/validate.yml)

Ten Lovelace cards for household appliances, with **realistic animated illustrations** (tumbling drum, water and foam, spin with vibration, rotating spray arms, glowing oven element, turntable, opening fridge door, flickering pellet-stove flames, water flowing through a pool pump, a 3D printer building its part layer by layer…), live status, power, energy and cost.
They follow your Home Assistant theme (light/dark) and switch between **French** and **English** automatically.

**▶ [Try it online / Essayer en ligne](https://skyrotter.github.io/ha-appliance-electromenager-cards/docs/demo.html)** · [Automated tests](https://skyrotter.github.io/ha-appliance-electromenager-cards/docs/tests.html)

*🇫🇷 Version française plus bas.*

<p align="center"><img src="docs/hero.gif" width="560" alt="10 animated appliance cards for Home Assistant"></p>

| Card | Type |
|---|---|
| Washing machine | `custom:appliance-washer-card` |
| Dryer | `custom:appliance-dryer-card` |
| Dishwasher | `custom:appliance-dishwasher-card` |
| Water heater | `custom:appliance-water-heater-card` |
| Oven | `custom:appliance-oven-card` |
| Microwave | `custom:appliance-microwave-card` |
| Refrigerator | `custom:appliance-fridge-card` |
| Pellet stove | `custom:appliance-pellet-stove-card` |
| Pool pump | `custom:appliance-pool-pump-card` |
| 3D printer | `custom:appliance-printer-3d-card` |

Works with a simple smart plug (power sensor only) as well as with connected appliances (program, remaining time, progress, door…).

## Installation

### HACS (recommended)

1. HACS → ⋮ → **Custom repositories** → add `https://github.com/skyrotter/ha-appliance-electromenager-cards`, category **Dashboard**.
2. Search for **Appliance Cards**, install, then reload your browser (Ctrl+F5).

### Manual

1. Copy `dist/ha-appliance-electromenager-cards.js` to `/config/www/`.
2. Settings → Dashboards → ⋮ → Resources → add `/local/ha-appliance-electromenager-cards.js` (JavaScript module).

## Configuration

All cards have a visual editor. When added from the card picker, entities are detected automatically by name (`lave_linge`, `washer`, `dryer`, `frigo`, `ballon`…).

### Common options

| Option | Description |
|---|---|
| `entity` | Status entity: `switch`, `input_boolean`, `binary_sensor`, `sensor`, `input_select`, `water_heater`… |
| `power` | Power sensor (W or kW) |
| `energy` | Energy sensor (kWh) — e.g. today's consumption |
| `cost` | Cost sensor (any currency) |
| `switch` | Switch controlled by the power button (button hidden if unset) |
| `threshold` | Power above which the appliance is considered running (W). Defaults: 10 (washer/dryer/dishwasher), 20 (fridge), 50 (others) |
| `name` | Custom name |
| `color` | Accent color (any CSS color) |
| `show_toggle` | `false` to hide the power button |
| `animations` | `false` to disable animations |
| `confirm_off` | Washer, dryer, dishwasher: `false` to turn off the safety confirmation (default `true`, see below) |

### Type-specific options

| Option | Cards |
|---|---|
| `remaining` | washer, dryer, dishwasher, oven, microwave — minutes, `H:MM[:SS]`, or a timestamp of the end |
| `progress` | washer, dryer, dishwasher — % |
| `program` | washer, dryer, dishwasher, oven, microwave |
| `door` | all except water heater (`binary_sensor`, `on` = open) |
| `temperature`, `target_temperature` | water heater, oven, fridge (`temperature` only) |
| `freezer_temperature`, `freezer_door` | fridge |
| `power_level` (1–5), `pellet_level` (%), `ignition_threshold` (default 250 W), `pellet_alert` (default 15 %) | pellet stove |
| `temperature` (water), `runtime` (filtration time today), `speed` (rpm or %), `max_power` | pool pump |
| `progress`, `remaining`, `program` (job name), `temperature` (nozzle), `bed_temperature`, `filament_color` | 3D printer |
| `max_temperature` (default 8), `freezer_max_temperature` (default −12) | fridge alerts |

### How the status is computed

1. `entity` set to a descriptive state (`running`, `finished`, `idle`, `off`… or a free text such as *Rinsing*) → used as-is.
2. `entity` is an `input_boolean`/`binary_sensor` → `on` = running.
3. `entity`/`switch` is a plug that is on → the **power sensor** decides (above `threshold` = running, otherwise standby).
4. Power only → above `threshold` = running.

**Phases** (washer, dryer, dishwasher): if the status entity or `program` contains *wash/lavage*, *rinse/rinçage*, *spin/essorage*, *dry/séchage* or *cool/refroidissement*, the illustration and LCD follow that phase (water, foam, fast spin…). Otherwise the default phase is used.

Tip: for washers, a cycle-detection automation driving an `input_boolean` is more reliable than raw power (soaking phases drop to a few watts). Ready-to-use example below.

### Smart plug + cycle detection (recommended for washer, dryer, dishwasher)

A washer pauses, soaks and heats in steps: its power can drop to a few watts for several minutes in the middle of a cycle. Reading raw power alone makes the card flicker between *Running* and *Standby*. This automation fixes that. It decides a cycle has **started** when power stays above 100 W for 30 s, and that it has **ended** when power stays below 20 W for 8 minutes.

**1. Create the helper:** Settings → Devices & services → Helpers → Create helper → Toggle → name it `Washer running` (entity `input_boolean.washer_running`). Or in YAML:

```yaml
input_boolean:
  washer_running:
    name: Washer running
    icon: mdi:washing-machine
```

**2. Add the automation** (Settings → Automations → ⋮ → Edit in YAML). Replace `sensor.washer_plug_power` with your plug's power sensor:

```yaml
alias: Washer – cycle detection
mode: restart
triggers:
  - trigger: numeric_state
    entity_id: sensor.washer_plug_power
    above: 100
    for: "00:00:30"
    id: start
  - trigger: numeric_state
    entity_id: sensor.washer_plug_power
    below: 20
    for: "00:08:00"
    id: end
actions:
  - choose:
      - conditions:
          - condition: trigger
            id: start
        sequence:
          - action: input_boolean.turn_on
            target:
              entity_id: input_boolean.washer_running
      - conditions:
          - condition: trigger
            id: end
          - condition: state
            entity_id: input_boolean.washer_running
            state: "on"
        sequence:
          - action: input_boolean.turn_off
            target:
              entity_id: input_boolean.washer_running
          # optional: get notified when the laundry is done
          # - action: notify.mobile_app_your_phone
          #   data:
          #     message: "The washing machine is done 🧺"
```

**3. Use it in the card:**

```yaml
type: custom:appliance-washer-card
entity: input_boolean.washer_running
power: sensor.washer_plug_power
energy: sensor.washer_plug_energy_today
```

Suggested values: washer 100 W / 20 W / 8 min, dryer 100 W / 15 W / 5 min, dishwasher 50 W / 10 W / 10 min (dishwashers sit at a few watts while drying). Adjust them to your appliance by looking at its power history. Requires Home Assistant 2024.10 or newer for the `triggers:` / `actions:` syntax; on older versions, use `trigger:` / `platform:` / `action:` / `service:`.

### Pellet stove

A pellet stove draws a lot of power while **igniting** (the igniter element, typically 250–400 W for a few minutes) and little while **burning** (fan and auger, typically 30–100 W). With just a power-monitoring plug, the card therefore tells apart:

| Power | Status | Animation |
|---|---|---|
| above `ignition_threshold` (250 W) | Igniting | small flame, red igniter, smoke from the flue |
| above `threshold` (20 W) | Heating | full flames sized by `power_level`, glowing embers, warm air |
| below `threshold` | Off / Standby | clock on the display |

Shutting down, cleaning and alarms can't be guessed from power: they come from a status entity (`entity:`) whose text contains *extinction/shutdown/cooling*, *alarme/alarm/error*, *allumage/ignition*, *eco/standby*… A `climate` entity from a stove integration also works (its `hvac_action`, current and target temperature are used).

```yaml
type: custom:appliance-pellet-stove-card
power: sensor.stove_plug_power          # enough on its own
energy: sensor.stove_plug_energy_today
temperature: sensor.living_room_temperature
target_temperature: input_number.stove_target   # optional
power_level: sensor.stove_power_level           # optional, 1–5
pellet_level: sensor.stove_pellet_level         # optional, %
```

⚠️ **Never cut a pellet stove's power while it is burning or shutting down**: its fan must keep running to evacuate smoke. Use the stove's own controls or integration to turn it off. If you set `switch:`, the card asks for a second click before cutting power while the stove is igniting, heating or shutting down.

### Pool pump

Water flows in a loop on the drawing: from the pool, through the pre-filter (water swirling, leaves in the basket), the pump and back to the pool, with bubbles at the return jet. The motor fan spins and the pump hums while filtering.

- With a smart plug: above `threshold` (50 W) = **Filtering**. Plug on below it = **Standby**.
- Animation speed follows the pump speed: `speed` in rpm (2800 rpm = full speed) or %, or the power divided by `max_power` for variable-speed pumps.
- The display shows the rpm, the % or the power.
- `runtime`: filtration time today, e.g. a `history_stats` sensor:

```yaml
sensor:
  - platform: history_stats
    name: Pool filtration today
    entity_id: switch.pool_pump
    state: "on"
    type: time
    start: "{{ today_at() }}"
    end: "{{ now() }}"
```

```yaml
type: custom:appliance-pool-pump-card
switch: switch.pool_pump
entity: switch.pool_pump
power: sensor.pool_pump_power
energy: sensor.pool_pump_energy_today
temperature: sensor.pool_water_temperature
runtime: sensor.pool_filtration_today
max_power: 1100
```

### 3D printer

An open-frame, bed-slinger style printer (Bambu Lab A1, Prusa MK, Ender…). The print head sweeps left and right, the gantry rises layer by layer and the part grows with `progress`. The spool turns while printing. While heating, the nozzle glows and heat rises from the bed. The display shows the progress, the nozzle temperature, PAUSE, DONE or ERROR.

- **With a printer integration** (Bambu Lab, OctoPrint, Moonraker/Klipper, PrusaLink…): use its status entity as `entity`. States such as `prepare`, `running`, `pause`, `finish`, `failed`, `idle`, `offline` or `Printing` are recognised. Add `progress`, `remaining`, nozzle and bed temperatures and the job name (`program`).
- **With a smart plug only**: above `threshold` (40 W) = Printing. The part then grows in a loop, since the real progress is unknown.
- Set `filament_color` to match your spool (default orange).
- If you set `switch:`, cutting power while printing or paused needs a second click.

```yaml
type: custom:appliance-printer-3d-card
entity: sensor.a1_print_status
progress: sensor.a1_print_progress
remaining: sensor.a1_remaining_time
temperature: sensor.a1_nozzle_temperature
bed_temperature: sensor.a1_bed_temperature
program: sensor.a1_task_name
power: sensor.printer_plug_power
filament_color: "#ff8a1f"
```

### Power button safety

The power button only appears when you set `switch:`. On the **washer, dryer, dishwasher and pellet stove**, cutting the plug **while a cycle is running (or the stove is burning)** takes **two clicks**: the first one turns the button red and shows "Cycle running – click again to cut power" for 4 seconds. Turning the plug on, or off while idle, stays a single click. Set `confirm_off: false` to turn this off.

Advice: on a washing machine you usually don't need `switch:` at all. Leave it out and the button won't be shown.

### Examples

```yaml
type: custom:appliance-washer-card
entity: input_boolean.washer_running
power: sensor.washer_power
energy: sensor.washer_energy_daily
cost: sensor.washer_cost_today
```

```yaml
type: custom:appliance-water-heater-card
switch: switch.water_heater
power: sensor.water_heater_power
temperature: sensor.water_heater_temperature
target_temperature: input_number.water_heater_target
```

```yaml
type: custom:appliance-fridge-card
power: sensor.fridge_power
temperature: sensor.fridge_temperature
freezer_temperature: sensor.freezer_temperature
door: binary_sensor.fridge_door
```

### Theming

The cards use your theme variables. You can override them in a theme or with card-mod:

```yaml
appliance-active-color: "#03a9f4"
appliance-heat-color: "#ff8a3d"
appliance-cold-color: "#2b9af9"
appliance-alert-color: "#db4437"
appliance-ok-color: "#43a047"
appliance-illustration-size: 116px
```

---

## 🇫🇷 En français

Dix cartes Lovelace pour l'électroménager (lave-linge, sèche-linge, lave-vaisselle, ballon d'eau chaude, four, micro-ondes, réfrigérateur, poêle à granulés, pompe de piscine, imprimante 3D) : illustration animée, état en direct, puissance, énergie et coût. Elles suivent le thème de Home Assistant et s'affichent en français si Home Assistant est en français.

**Installation HACS** : HACS → ⋮ → *Dépôts personnalisés* → `https://github.com/skyrotter/ha-appliance-electromenager-cards`, catégorie **Dashboard** → installer → recharger le navigateur (Ctrl+F5).

**Configuration** : éditeur visuel disponible ; les entités sont détectées automatiquement à l'ajout (noms contenant `lave_linge`, `seche_linge`, `lave_vaisselle`, `ballon`, `four`, `micro_ondes`, `frigo`, `washer`, `dryer`, `fridge`…). Les options sont les mêmes que ci-dessus.

```yaml
type: custom:appliance-washer-card
entity: binary_sensor.lave_linge_en_cours
power: sensor.lave_linge_puissance
energy: sensor.lave_linge_energie_jour
cost: sensor.lave_linge_cout_jour
```

**Prise connectée + détection de cycle** : pour le lave-linge, le sèche-linge et le lave-vaisselle, utilise l'automatisation de détection de cycle décrite plus haut (section *Smart plug + cycle detection*). Elle allume un `input_boolean` au démarrage (plus de 100 W pendant 30 s) et l'éteint à la fin (moins de 20 W pendant 8 min). Ça évite que la carte passe en « Veille » pendant le trempage.

**Poêle à granulés** : avec une simple prise connectée, la carte distingue l'**allumage** (plus de 250 W, la résistance chauffe) de la **chauffe** (20 à 250 W, ventilateur et vis sans fin). L'extinction et les alarmes viennent d'une entité d'état ou de l'intégration du poêle. ⚠️ Ne coupe jamais l'alimentation d'un poêle en fonctionnement ou en extinction : le ventilateur doit évacuer les fumées.

**Pompe de piscine** : l'eau circule sur le dessin (bassin → préfiltre → pompe → bassin) avec le ventilateur du moteur qui tourne. Au-dessus de 50 W, la carte affiche « Filtration ». La vitesse de l'animation suit la vitesse de la pompe (tr/min, %, ou puissance / `max_power`). Tuiles : température de l'eau et durée de filtration du jour (capteur `history_stats`, exemple ci-dessus).

**Imprimante 3D** : la tête va et vient, le portique monte couche par couche et la pièce grandit selon la progression. Fonctionne avec l'intégration Bambu Lab, OctoPrint, Moonraker… (états `prepare`, `running`, `pause`, `finish`, `failed`), ou avec une simple prise (au-dessus de 40 W = impression, la pièce grandit alors en boucle). Couleur du filament réglable (`filament_color`).

**Sécurité du bouton marche/arrêt** : sur le lave-linge, le sèche-linge, le lave-vaisselle et le poêle à granulés, couper la prise pendant un cycle (ou poêle allumé) demande deux clics (le bouton devient rouge et affiche « Cycle en cours – cliquer encore pour couper »). Option `confirm_off: false` pour désactiver. Conseil : sur un lave-linge, ne mets pas de `switch:` du tout.

## License

MIT

## Demo

- Interactive test page (simulated data, no Home Assistant needed): https://skyrotter.github.io/ha-appliance-electromenager-cards/docs/demo.html
- Automated tests: https://skyrotter.github.io/ha-appliance-electromenager-cards/docs/tests.html
