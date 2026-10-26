# Solar panels

Just the sun, two panels on their aluminium frame and the inverter on its post (no background).

| Situation | What you see | Display |
|---|---|---|
| Producing | yellow sun growing with production (vs `max_power`), turning rays, light sweeping over the panels, energy flowing along the cable to the inverter | `2.4kW` |
| Low production (< 15 % of peak) | same, slower | `280W` |
| Not producing (night or no sun) | grey sun, darkened panels, cable and inverter at rest | `0W` / `NIGHT` |

Tiles: production now, energy today, savings (`cost`) and % of peak.

```yaml
type: custom:appliance-solar-card
power: sensor.solar_power
energy: sensor.solar_energy_today
cost: sensor.solar_savings_today   # optional
max_power: 3000                    # your installation's peak power (Wp)
```


[← All cards](../../README.md#the-cards)
