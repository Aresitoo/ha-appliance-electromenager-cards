# Pool pump

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


[← All cards](../../README.md#the-cards)
