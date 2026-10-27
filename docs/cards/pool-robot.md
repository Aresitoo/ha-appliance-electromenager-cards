# Pool cleaning robot

`custom:appliance-pool-robot-card`

**Pool robot**: cross-section of the pool (coping, tiled walls and floor, water with surface waves and light on the floor) and a tracked cleaning robot with its floating cable. While cleaning, the robot drives back and forth along the floor and turns around at each wall, its tracks and front brush spin, debris is sucked in and bubbles rise. The water surface follows `entity_water_level` with a red **min** mark on the wall, and the filter window on the shell fills up with `entity_filter` (it turns red above `filter_alert`).

States: cleaning, paused, coming up (`returning`), idle, error and unavailable. With a `vacuum` entity the card shows **Start / Pause / Bring up** (`vacuum.start` / `pause` / `return_to_base`); with a `switch` or `input_boolean`, a single On/Off button. A text `entity_status` (or the entity state) is read in English or French (`cleaning`, `nettoyage`, `returning`, `remontée`, `error`, `erreur`…). Without either, the state comes from power (above `run_threshold` = cleaning). Alerts: robot error (the `error` attribute when present), filter needs cleaning, low water level.

## Options

Every value tile can be hidden with its `show_…` option, and `language: fr|en|de|nb|nl|ro` forces the language.

- `entity` (vacuum, switch, input_boolean or sensor)
- `entity_status` (text sensor, overrides the entity state)
- `entity_filter` (filter clogging, %)
- `entity_water_level` (% or any unit, see `water_level_full`)
- `entity_water_temp`
- `entity_time` (remaining time, s / min / h)
- `entity_battery` (cordless robots, otherwise the `battery_level` attribute)
- `entity_mode` (select or sensor: floor, floor + walls, waterline…)
- `entity_power`
- `entity_energy`
- `filter_alert` (default 80 %)
- `water_level_min` (default 70, alert and min mark)
- `water_level_full` (default 100, value shown as a full pool)
- `run_threshold` (default 30 W)
- `animations` (default true)
- `show_status`, `show_controls`, `show_status_tile`, `show_filter`, `show_water_level`, `show_water_temp`, `show_time`, `show_battery`, `show_mode`, `show_power`, `show_energy`

## Example

```yaml
type: custom:appliance-pool-robot-card
entity: vacuum.pool_robot
entity_filter: sensor.pool_robot_filter
entity_water_level: sensor.pool_water_level
entity_water_temp: sensor.pool_water_temperature
entity_time: sensor.pool_robot_time_left
entity_mode: select.pool_robot_mode
```

[← All cards](../../README.md#the-cards)
