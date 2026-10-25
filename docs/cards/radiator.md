# Electric radiator

A wall-mounted inertia radiator with six wide vertical elements and its control box (display, Comfort / Eco / Frost icons and buttons).

- **Heating**: the columns glow and heat waves rise from the top grille, stronger with the power drawn (vs `max_power`).
- **Mode**: sun = Comfort, moon = Eco, snowflake = Frost protection (`H-G` on the display), read from a pilot-wire `select`, a `climate` preset or any mode entity. The display shows the target temperature.
- **Window open** (`window`): cold air blows in and an alert is shown.
- Works with a `climate` entity (current/target temperature, `hvac_action`, `preset_mode`), a pilot-wire mode entity, or simply a power sensor (above `threshold`, 50 W = heating).

```yaml
type: custom:appliance-radiator-card
entity: climate.living_room_radiator   # or power / mode only
power: sensor.radiator_power
window: binary_sensor.living_room_window
```


[← All cards](../../README.md#the-cards)
