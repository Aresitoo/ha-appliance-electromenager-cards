# Freezers (chest and upright with drawers)

- **Chest freezer**: drawn in three-quarter view. When `door` opens, the **lid lifts up** and reveals the lit inside (tubs, bags, basket) with cold mist escaping.
- **Upright drawer freezer**: when `door` opens, the door swings open on **four transparent drawers** full of food and one **drawer slides out**.
- Both: the display shows the temperature, the snowflake pulses and cold air flows out at the bottom while the compressor runs (power above `threshold`, 20 W). A **too warm** alert fires above `freezer_max_temperature` (−12 °C by default), plus a door-open alert.
- A freezer should never be switched off by mistake: if you set `switch:`, turning it off always needs a second click.

```yaml
type: custom:appliance-chest-freezer-card
power: sensor.chest_freezer_plug_power
energy: sensor.chest_freezer_plug_energy_today
temperature: sensor.chest_freezer_temperature
door: binary_sensor.chest_freezer_lid
```


[← All cards](../../README.md#the-cards)
