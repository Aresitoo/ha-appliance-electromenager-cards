# Smart plug + cycle detection (recommended for washer, dryer, dishwasher)

A washer pauses, soaks and heats in steps: its power can drop to a few watts for several minutes in the middle of a cycle. Reading raw power alone makes the card flicker between *Running* and *Standby*. This automation fixes that. It decides a cycle has **started** when power stays above 100 W for 30 s, and that it has **ended** when power stays below 20 W for 8 minutes.

**1. Create the helper:** Settings → Devices & services → Helpers → Create helper → Toggle → name it `Washer running` (entity `input_boolean.washer_running`). Or in YAML:

```yaml
input_boolean:
  washer_running:
    name: Washer running
    icon: mdi:washing-machine
```

**2. Add the automation** (Settings → Automations → ⋮ → Edit in YAML). Replace `sensor.washer_plug_power` with your plug's power sensor:

```yaml
alias: Washer – cycle detection
mode: restart
triggers:
  - trigger: numeric_state
    entity_id: sensor.washer_plug_power
    above: 100
    for: "00:00:30"
    id: start
  - trigger: numeric_state
    entity_id: sensor.washer_plug_power
    below: 20
    for: "00:08:00"
    id: end
actions:
  - choose:
      - conditions:
          - condition: trigger
            id: start
        sequence:
          - action: input_boolean.turn_on
            target:
              entity_id: input_boolean.washer_running
      - conditions:
          - condition: trigger
            id: end
          - condition: state
            entity_id: input_boolean.washer_running
            state: "on"
        sequence:
          - action: input_boolean.turn_off
            target:
              entity_id: input_boolean.washer_running
          # optional: get notified when the laundry is done
          # - action: notify.mobile_app_your_phone
          #   data:
          #     message: "The washing machine is done 🧺"
```

**3. Use it in the card:**

```yaml
type: custom:appliance-washer-card
entity: input_boolean.washer_running
power: sensor.washer_plug_power
energy: sensor.washer_plug_energy_today
```

Suggested values: washer 100 W / 20 W / 8 min, dryer 100 W / 15 W / 5 min, dishwasher 50 W / 10 W / 10 min (dishwashers sit at a few watts while drying). Adjust them to your appliance by looking at its power history. Requires Home Assistant 2024.10 or newer for the `triggers:` / `actions:` syntax; on older versions, use `trigger:` / `platform:` / `action:` / `service:`.




### Automatic cycle phase detection from power draw

When monitoring an appliance through a smart plug without a smart cloud integration, the card automatically infers the cycle phase from live wattage:

- **Heating (`heat`)**: power $\ge$ `heating_power` (default: `1000` W). The wash water heating element is active (shows steam and warm glow on dishwasher).
- **Spinning (`spin`)**: power $\ge$ `spin_power` (default: `200` W on washing machines).
- **Washing (`wash`)**: normal wash agitation (circulation pump / drum agitation).
- **Drying (`dry`)**: on dishwashers, when power drops below 15 W during an active cycle (e.g. door auto-release air-dry).

You can customize the power thresholds in YAML if your appliance runs at different wattages:

```yaml
type: custom:appliance-washer-card
power: sensor.washer_plug_power
heating_power: 1200
spin_power: 250
```

[← All cards](../../README.md#the-cards)
