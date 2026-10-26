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


[← All cards](../../README.md#the-cards)
