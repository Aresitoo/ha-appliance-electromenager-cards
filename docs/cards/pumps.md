# Water pump and industrial pump

`custom:appliance-water-pump-card · custom:appliance-industrial-pump-card`

**Water pump**: clean, light style for a garden, well, rainwater or pool pump. A source tank on the left (its level follows `entity_level`), the pump volute with a spinning impeller, a finned motor and the delivery pipe pouring into a basin. Water flows in the pipes, waves move in the tank and the basin, ripples spread where the jet lands.

**Industrial pump**: rugged motor-pump unit on a steel skid: internal gear pump with bolted flanges, hazard-striped coupling guard, finned motor with a rating plate showing the live power, terminal box with **RUN / WARNING / FAULT** lights and a pressure gauge whose needle follows `entity_pressure`. While running, the delivery pipe swells with each pulse, pressure rings leave the flange, the needle trembles and the whole unit vibrates.

On both cards the animation speed follows the flow (`entity_flow` / `max_flow`), otherwise the power (`entity_power` / `max_power`). States: off, running, warning (running with an alert), fault and unavailable. Alerts: **no flow while running** (dry run, below `no_flow_threshold`), overpressure (above `pressure_max`), motor too hot (above `temp_max`) and low level (below `level_min`). With a `switch`, `input_boolean` or `fan` entity, an On/Off button is shown (`homeassistant.toggle`). Without a status entity, the state comes from power (above `run_threshold` = running).

## Options

Every value tile can be hidden with its `show_…` option, and `language: fr|en|de|nb|nl|ro` forces the language.

- `entity` (switch, input_boolean, fan, binary_sensor or text sensor)
- `entity_power`
- `entity_flow` (L/min, m³/h… same unit as `max_flow`)
- `entity_pressure` (bar)
- `entity_temp` (motor or fluid temperature)
- `entity_level` (tank level in %, water pump drawing)
- `entity_fault` (binary_sensor, on = fault)
- `entity_runtime` (h, e.g. a `history_stats` sensor)
- `entity_energy`
- `entity_cost` or `price_per_kwh` (with `currency`)
- `fluid_color` (CSS color, default `#3fa9f5`)
- `max_flow` (water 40, industrial 200)
- `max_power` (water 1200 W, industrial 7500 W)
- `run_threshold` (water 15 W, industrial 100 W)
- `max_pressure` (top of the gauge: water 6, industrial 16 bar)
- `pressure_max` (alert above: water 5, industrial 12 bar)
- `temp_max` (alert above: water 70, industrial 85 °C)
- `level_min` (alert below: water 15, industrial 10 %)
- `no_flow_threshold` (default 0.5)
- `animations` (default true)
- `show_status`, `show_controls`, `show_flow`, `show_pressure`, `show_power`, `show_temp`, `show_level`, `show_runtime`, `show_energy`, `show_cost`

## Examples

```yaml
type: custom:appliance-water-pump-card
name: Garden pump
entity: switch.garden_pump
entity_power: sensor.garden_pump_power
entity_flow: sensor.garden_pump_flow
entity_pressure: sensor.garden_pump_pressure
entity_level: sensor.rainwater_tank_level
entity_energy: sensor.garden_pump_energy
price_per_kwh: 0.2516
```

```yaml
type: custom:appliance-industrial-pump-card
name: Booster pump
entity: switch.booster_pump
entity_power: sensor.booster_pump_power
entity_flow: sensor.booster_pump_flow
entity_pressure: sensor.booster_pump_pressure
entity_temp: sensor.booster_pump_motor_temperature
entity_fault: binary_sensor.booster_pump_fault
entity_runtime: sensor.booster_pump_runtime_today
entity_energy: sensor.booster_pump_energy
max_flow: 150
pressure_max: 10
fluid_color: "#4caf50"
```

[← All cards](../../README.md#the-cards)
