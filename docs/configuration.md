# Configuration


All cards have a visual editor. When added from the card picker, entities are detected automatically by name (`lave_linge`, `washer`, `dryer`, `frigo`, `ballon`…).

## Common options

| Option | Description |
|---|---|
| `entity` | Status entity: `switch`, `input_boolean`, `binary_sensor`, `sensor`, `input_select`, `water_heater`… |
| `power` | Power sensor (W or kW) |
| `energy` | Energy sensor (Wh, kWh or MWh, shown in kWh) — e.g. today's consumption |
| `cost` | Cost sensor (any currency) |
| `switch` | Switch controlled by the power button (button hidden if unset) |
| `threshold` | Power above which the appliance is considered running (W). Defaults: 10 (washer/dryer/dishwasher), 20 (fridge), 50 (others) |
| `layout` | Layout mode: `default` (vertical on narrow viewports) or `split` (compact horizontal side-by-side layout, keeps illustration beside telemetry even in narrow columns) |
| `name` | Custom name |
| `color` | Accent color (any CSS color) |
| `show_toggle` | `false` to hide the power button |
| `show_power` | `false` to hide the power chip (e.g. when `power` is an estimated sensor used only to detect the running state) |
| `animations` | `false` to disable animations |
| `confirm_off` | Washer, dryer, dishwasher: `false` to turn off the safety confirmation (default `true`, see below) |

## Type-specific options

| Option | Cards |
|---|---|
| `remaining` | washer, dryer, dishwasher, oven, microwave, air fryer — minutes, `H:MM[:SS]`, or a timestamp of the end |
| `progress` | washer, dryer, dishwasher — % |
| `program` | washer, dryer, dishwasher, oven, microwave, air fryer |
| `door` | all except water heater (`binary_sensor`, `on` = open) |
| `temperature`, `target_temperature` | water heater, oven, fridge (`temperature` only) |
| `freezer_temperature`, `freezer_door` | fridge |
| `power_level` (1–5), `pellet_level` (%), `ignition_threshold` (default 250 W), `pellet_alert` (default 15 %) | pellet stove |
| `temperature` (water), `runtime` (filtration time today), `speed` (rpm or %), `max_power` | pool pump |
| `progress`, `remaining`, `program` (job name), `temperature` (nozzle), `nozzle_temperatures` (list of 2–4 nozzle sensors, shown as T0, T1…), `bed_temperature`, `filament_color` | 3D printer |
| `temperature`, `door`, `freezer_max_temperature` (default −12 °C) | chest freezer, drawer freezer |
| `power` (production), `energy` (today), `cost` (savings), `max_power` (peak Wp, default 3000), `sun_entity` (default `sun.sun`) | solar panels |
| `speed` (select/sensor: text, level or %), `humidity`, `high_threshold` (default 35 W), `humidity_max` (default 70 %) | extractor fan (VMC) |
| `zone_1`…`zone_4` (level 0–9, W or %), `zone_power` (default 1500 W), `residual_minutes` (default 10) | cooktop |
| `mode` (pilot wire / select: comfort, eco, frost, off), `window`, `temperature`, `target_temperature`, `max_power` (default 1500 W) | electric radiator |
| `max_temperature` (default 8), `freezer_max_temperature` (default −12) | fridge alerts |
| `style`: `top` (default), `bottom`, `french`, `american` | fridge layout |
| `zone2_temperature`, `max_temperature_2` (default = `max_temperature`) | dual-zone wine cooler |

## How the status is computed

1. `entity` set to a descriptive state (`running`, `finished`, `idle`, `off`… or a free text such as *Rinsing*) → used as-is.
2. `entity` is an `input_boolean`/`binary_sensor` → `on` = running.
3. `entity`/`switch` is a plug that is on → the **power sensor** decides (above `threshold` = running, otherwise standby).
4. Power only → above `threshold` = running.

**Phases** (washer, dryer, dishwasher): if the status entity or `program` contains *wash/lavage*, *rinse/rinçage*, *spin/essorage*, *dry/séchage* or *cool/refroidissement*, the illustration and LCD follow that phase (water, foam, fast spin…). Otherwise the default phase is used.

Tip: for washers, a cycle-detection automation driving an `input_boolean` is more reliable than raw power (soaking phases drop to a few watts). Ready-to-use example below.

## Several appliances of the same kind

Each card is independent: it only reads the entities in its own configuration and keeps its own status, timers and drawing. Two washing machines, a washer and a washer-dryer or several fridges can sit side by side; just give each card its own entities (and a `name` to tell them apart).

## Modes (radiator and heated towel rail)

With a `mode` entity (`select`, `input_select`, or a `climate` entity used as `entity`), the radiator and the heated towel rail show four buttons — **Comfort, Eco, Frost protection, Off** — to switch mode, and the active mode is highlighted. Options are matched by name (Confort, Eco/Nuit, Hors-gel, Arrêt/Off…); a button is only shown if a matching option exists. Hide them with `show_modes: false`.

```yaml
type: custom:appliance-towel-dryer-card
power: sensor.towel_rail_power
mode: select.towel_rail_mode
```

## Power button safety

The power button only appears when you set `switch:`. On the **washer, dryer, dishwasher and pellet stove**, cutting the plug **while a cycle is running (or the stove is burning)** takes **two clicks**: the first one turns the button red and shows "Cycle running – click again to cut power" for 4 seconds. Turning the plug on, or off while idle, stays a single click. Set `confirm_off: false` to turn this off.

Advice: on a washing machine you usually don't need `switch:` at all. Leave it out and the button won't be shown.

## Examples

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

## Theming

The cards use your theme variables. You can override them in a theme or with card-mod:

```yaml
appliance-active-color: "#03a9f4"
appliance-heat-color: "#ff8a3d"
appliance-cold-color: "#2b9af9"
appliance-alert-color: "#db4437"
appliance-ok-color: "#43a047"
appliance-illustration-size: 116px
```
