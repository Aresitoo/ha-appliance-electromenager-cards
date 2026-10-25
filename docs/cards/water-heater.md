# Water heater with a solar router

The water heater card accepts a second power sensor (`power_solar`) and a second energy sensor (`energy_solar`), e.g. a classic contactor on `power` and a solar-surplus router on `power_solar`. Both are added up to detect heating; when the solar one is above `threshold`, the card shows "Solar surplus" and separate Grid / Solar tiles.

```yaml
type: custom:appliance-water-heater-card
power: sensor.contacteur_power
power_solar: sensor.routeur_solaire_power
energy: sensor.contacteur_energy
energy_solar: sensor.routeur_solaire_energy
```


[← All cards](../../README.md#the-cards)
