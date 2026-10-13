# Appliance Cards for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://hacs.xyz/docs/faq/custom_repositories)
[![Validate](https://github.com/skyrotter/ha-appliance-cards/actions/workflows/validate.yml/badge.svg)](https://github.com/skyrotter/ha-appliance-cards/actions/workflows/validate.yml)

Seven Lovelace cards for household appliances, with **realistic animated illustrations** (tumbling drum, water and foam, spin with vibration, rotating spray arms, glowing oven element, turntable, opening fridge door…), live status, power, energy and cost.
They follow your Home Assistant theme (light/dark) and switch between **French** and **English** automatically.

*🇫🇷 Version française plus bas.*

![preview](docs/preview.png)

| Card | Type |
|---|---|
| Washing machine | `custom:appliance-washer-card` |
| Dryer | `custom:appliance-dryer-card` |
| Dishwasher | `custom:appliance-dishwasher-card` |
| Water heater | `custom:appliance-water-heater-card` |
| Oven | `custom:appliance-oven-card` |
| Microwave | `custom:appliance-microwave-card` |
| Refrigerator | `custom:appliance-fridge-card` |

Works with a simple smart plug (power sensor only) as well as with connected appliances (program, remaining time, progress, door…).

## Installation

### HACS (recommended)

1. HACS → ⋮ → **Custom repositories** → add `https://github.com/skyrotter/ha-appliance-cards`, category **Dashboard**.
2. Search for **Appliance Cards**, install, then reload your browser (Ctrl+F5).

### Manual

1. Copy `dist/ha-appliance-cards.js` to `/config/www/`.
2. Settings → Dashboards → ⋮ → Resources → add `/local/ha-appliance-cards.js` (JavaScript module).

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

### Type-specific options

| Option | Cards |
|---|---|
| `remaining` | washer, dryer, dishwasher, oven, microwave — minutes, `H:MM[:SS]`, or a timestamp of the end |
| `progress` | washer, dryer, dishwasher — % |
| `program` | washer, dryer, dishwasher, oven, microwave |
| `door` | all except water heater (`binary_sensor`, `on` = open) |
| `temperature`, `target_temperature` | water heater, oven, fridge (`temperature` only) |
| `freezer_temperature`, `freezer_door` | fridge |
| `max_temperature` (default 8), `freezer_max_temperature` (default −12) | fridge alerts |

### How the status is computed

1. `entity` set to a descriptive state (`running`, `finished`, `idle`, `off`… or a free text such as *Rinsing*) → used as-is.
2. `entity` is an `input_boolean`/`binary_sensor` → `on` = running.
3. `entity`/`switch` is a plug that is on → the **power sensor** decides (above `threshold` = running, otherwise standby).
4. Power only → above `threshold` = running.

**Phases** (washer, dryer, dishwasher): if the status entity or `program` contains *wash/lavage*, *rinse/rinçage*, *spin/essorage*, *dry/séchage* or *cool/refroidissement*, the illustration and LCD follow that phase (water, foam, fast spin…). Otherwise the default phase is used.

Tip: for washers, a cycle-detection automation driving an `input_boolean` is more reliable than raw power (soaking phases drop to a few watts).

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

Sept cartes Lovelace pour l'électroménager (lave-linge, sèche-linge, lave-vaisselle, ballon d'eau chaude, four, micro-ondes, réfrigérateur) : illustration animée, état en direct, puissance, énergie et coût. Elles suivent le thème de Home Assistant et s'affichent en français si Home Assistant est en français.

**Installation HACS** : HACS → ⋮ → *Dépôts personnalisés* → `https://github.com/skyrotter/ha-appliance-cards`, catégorie **Dashboard** → installer → recharger le navigateur (Ctrl+F5).

**Configuration** : éditeur visuel disponible ; les entités sont détectées automatiquement à l'ajout (noms contenant `lave_linge`, `seche_linge`, `lave_vaisselle`, `ballon`, `four`, `micro_ondes`, `frigo`, `washer`, `dryer`, `fridge`…). Les options sont les mêmes que ci-dessus.

```yaml
type: custom:appliance-washer-card
entity: binary_sensor.lave_linge_en_cours
power: sensor.lave_linge_puissance
energy: sensor.lave_linge_energie_jour
cost: sensor.lave_linge_cout_jour
```

## License

MIT

## Demo

- Interactive test page (simulated data, no Home Assistant needed): `docs/demo.html`
- Automated tests: `docs/tests.html`
