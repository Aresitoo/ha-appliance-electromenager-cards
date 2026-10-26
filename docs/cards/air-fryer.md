# Air fryer

<p align="center"><img src="../air-fryer.gif" width="340" alt="Air fryer card"></p>

A black dual-basket air fryer with its touch panel and two stainless drawers with windows (fries on the left, nuggets on the right).

- **Cooking** (power above `threshold`, 50 W by default): the baskets light up, the heating coils glow, hot air swirls, the food bounces and steam escapes from the top. The display shows the remaining time (`remaining`), otherwise the temperature (`temperature`), otherwise `ON`.
- **Finished**: `End` in green on the display (with a status entity reporting `finished`), food golden brown.
- Designed for a simple smart plug (power + energy), works with a connected air fryer too.

```yaml
type: custom:appliance-air-fryer-card
entity: switch.airfryer_plug        # optional: the plug
power: sensor.airfryer_power
energy: sensor.airfryer_energy_today
cost: sensor.airfryer_cost_today
# remaining: sensor.airfryer_remaining   # optional
```


[← All cards](../../README.md#the-cards)
