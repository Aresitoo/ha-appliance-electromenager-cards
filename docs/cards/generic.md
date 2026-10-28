# Generic card (your own image)

`custom:appliance-generic-card`: for any device without a dedicated card (a speaker, a lamp, a pump…), put your own picture in `image`. The card keeps everything else: status (running / idle / off), power, energy and cost chips, and the power button. The picture is dimmed when the device is off and glows softly while it is running.

- `image`: URL of the picture (`/local/my-device.png` for a file in `config/www/`, or any `https://` URL). A PNG or SVG with a transparent background looks best.
- Running detection works like the other cards: `power` above `threshold` (5 W by default), or the state of `entity`.

```yaml
type: custom:appliance-generic-card
name: Sonos living room
image: /local/sonos.png
power: sensor.tasmota_sonos_power
switch: switch.tasmota_sonos
```

## Several images by state

`images` shows a different picture depending on the power, the state of the card's entity or another entity (e.g. a 2-speed ventilation unit). Each entry has an `image` and optional conditions; the card shows the **last** entry whose conditions are all true, and an entry without a condition always matches (use it first, as the default).

- `above` / `below`: compare the power in W (`power`, kW converted), or the value of `entity` when the entry has one
- `state`: state (or list of states) of the card's `entity`, or of the entry's `entity`
- `entity`: another entity for this entry's conditions

```yaml
type: custom:appliance-generic-card
name: Heat recovery ventilation
power: sensor.hrv_power
images:
  - image: /local/hrv-off.png        # default
  - above: 20
    image: /local/hrv-speed1.png     # above 20 W
  - above: 60
    image: /local/hrv-speed2.png     # above 60 W
  - entity: select.hrv_mode
    state: boost
    image: /local/hrv-boost.png
```

`image` still works on its own; with `images`, it is the default picture.

[← All cards](../../README.md#the-cards)
