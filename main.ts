//% color=#081620 icon="O" block="IM01_led"
//% groups='["LED_ON", "WINK", "BLINK"]'
namespace IM01_led {

    //% blockId="turn_off_leds" block="IM01 turn off all leds"
    //% weight=50 blockGap=8
    export function turn_off_leds() {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    //% blockId="turn_on_green_led" block="IM01 turn on green LED"
    //% group="LED_ON"
    //% weight=30 blockGap=8
    export function turn_on_green_led() {
        pins.analogWritePin(AnalogPin.P8, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    //% blockId="turn_on_blue_led" block="IM01 turn on blue LED"
    //% group="LED_ON"
    //% weight=28 blockGap=8
    export function turn_on_blue_led() {
        pins.analogWritePin(AnalogPin.P2, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }

    //% blockId="turn_on_green_led_with_intensity" block="IM01 turn on green LED with intensity %intensity"
    //% group="LED_ON"
    //% intensity.min=0 intensity.max=255 intensity.defl=128
    //% weight=26 blockGap=8
    export function turn_on_green_led_with_intensity(intensity: number) {
        pins.analogWritePin(AnalogPin.P8, (1023 * intensity) / 255)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    //% blockId="turn_on_blue_led_with_intensity" block="IM01 turn on blue LED with intensity %intensity"
    //% group="LED_ON"
    //% intensity.min=0 intensity.max=255 intensity.defl=128
    //% weight=24 blockGap=8
    export function turn_on_blue_led_with_intensity(intensity: number) {
        pins.analogWritePin(AnalogPin.P2, (1023 * intensity) / 255)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }

    //% blockId="turn_on_blue_green_led" block="Turn On LED with G %g_value and B %b_value"
    //% weight=22 blockGap=8
    //% group="LED_ON"
    //%g_value.min=0 g_value.max=255 g_value.defl=125
    //%b_value.min=0 b_value.max=255 b_value.defl=128
    export function turn_on_blue_green_led(g_value: number, b_value: number) {
        pins.analogWritePin(AnalogPin.P8, (1023 * g_value) / 255)
        pins.analogWritePin(AnalogPin.P2, (1023 * b_value) / 255)
    }

    //% blockId="wink_green_led" block="IM01 wink green LED"
    //% weight=20 blockGap=8
    //% group="WINK"
    export function wink_green_led() {
        pins.analogWritePin(AnalogPin.P8, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P2, 0)

        basic.pause(500)

        pins.analogWritePin(AnalogPin.P8, (1023 * 0) / 255)

        basic.pause(500)
    }

    //% blockId="wink_blue_led" block="IM01 wink blue LED "
    //% weight=18 blockGap=8
    //% group="WINK"
    export function wink_blue_led() {
        pins.analogWritePin(AnalogPin.P2, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P8, 0)

        basic.pause(500)

        pins.analogWritePin(AnalogPin.P2, (1023 * 0) / 255)

        basic.pause(500)
    }

    //% blockId="wink_green_led_dur" block="IM01 wink green LED for %dur ms"
    //% dur.defl=250
    //% weight=16 blockGap=8
    //% group="WINK"
    export function wink_green_led_dur(dur: number) {
        pins.analogWritePin(AnalogPin.P8, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P2, 0)

        basic.pause(dur / 2)

        pins.analogWritePin(AnalogPin.P8, (1023 * 0) / 255)

        basic.pause(dur / 2)
    }

    //% blockId="wink_blue_led_dur" block="IM01 wink blue LED for %dur ms"
    //% dur.defl=250
    //% weight=14 blockGap=8
    //% group="WINK"
    export function wink_blue_led_dur(dur: number) {
        pins.analogWritePin(AnalogPin.P2, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P8, 0)

        basic.pause(dur / 2)

        pins.analogWritePin(AnalogPin.P2, (1023 * 0) / 255)

        basic.pause(dur / 2)
    }

    //% blockId="wink_blue_green_led" block="IM01 wink blue %b_value green %g_value LED for %dur ms"
    //% dur.defl=250
    //% weight=12 blockGap=8
    //% b_value.min=0 b_value.max=255 b_value.defl=128
    //% g_value.min=0 g_value.max=255 g_value.defl=128
    //% group="WINK"
    export function wink_blue_green_led(b_value: number, g_value: number, dur: number) {
        pins.analogWritePin(AnalogPin.P8, (1023 * g_value) / 255)
        pins.analogWritePin(AnalogPin.P2, (1023 * b_value) / 255)

        basic.pause(dur / 2)

        pins.analogWritePin(AnalogPin.P8, (1023 * 0) / 255)
        pins.analogWritePin(AnalogPin.P2, (1023 * 0) / 255)

        basic.pause(dur / 2)
    }

    //% blockId="blink_green_led" block="IM01 blink green LED"
    //% weight=10 blockGap=8
    //% group="BLINK"
    export function blink_green_led() {
        control.inBackground(function () {
            while (true) {
                pins.analogWritePin(AnalogPin.P8, (1023 * 128) / 255)
                pins.digitalWritePin(DigitalPin.P2, 0)

                basic.pause(500)

                pins.analogWritePin(AnalogPin.P8, (1023 * 0) / 255)

                basic.pause(500)
            }
        })
    }

    //% blockId="blink_blue_led" block="IM01 blink blue LED"
    //% weight=8 blockGap=8
    //% group="BLINK"
    export function blink_blue_led() {
        control.inBackground(function () {
            while (true) {
                pins.analogWritePin(AnalogPin.P2, (1023 * 128) / 255)
                pins.digitalWritePin(DigitalPin.P8, 0)

                basic.pause(500)

                pins.analogWritePin(AnalogPin.P2, (1023 * 0) / 255)

                basic.pause(500)
            }
        })
    }

    //% blockId="bink_green_led_period" block="IM01 blink green LED with period %dur ms"
    //% dur.defl=500
    //% weight=6 blockGap=8
    //% group="BLINK"
    export function blink_green_led_period(dur: number) {
        control.inBackground(function () {
            while (true) {
                pins.analogWritePin(AnalogPin.P8, (1023 * 128) / 255)
                pins.digitalWritePin(DigitalPin.P2, 0)

                basic.pause(dur / 2)

                pins.analogWritePin(AnalogPin.P8, (1023 * 0) / 255)

                basic.pause(dur / 2)
            }
        })
    }

    //% blockId="blink_blue_led_dur" block="IM01 blink blue LED with period %dur ms"
    //% dur.defl=500
    //% weight=4 blockGap=8
    //% group="BLINK"
    export function blink_blue_led_dur(dur: number) {
        control.inBackground(function () {
            while (true) {
                pins.analogWritePin(AnalogPin.P2, (1023 * 128) / 255)
                pins.digitalWritePin(DigitalPin.P8, 0)

                basic.pause(dur / 2)

                pins.analogWritePin(AnalogPin.P2, (1023 * 0) / 255)

                basic.pause(dur / 2)
            }
        })
    }

    //% blockId="blink_blue_green_led" block="IM01 blink blue %b_value green %g_value LED with period %dur ms"
    //% dur.defl=500
    //% weight=2 blockGap=8
    //% b_value.min=0 b_value.max=255 b_value.defl=128
    //% g_value.min=0 g_value.max=255 g_value.defl=128
    //% group="BLINK"
    export function blink_blue_green_led(b_value: number, g_value: number, dur: number) {
        control.inBackground(function () {
            while (true) {
                pins.analogWritePin(AnalogPin.P8, (1023 * g_value) / 255)
                pins.analogWritePin(AnalogPin.P2, (1023 * b_value) / 255)

                basic.pause(dur / 2)

                pins.analogWritePin(AnalogPin.P8, (1023 * 0) / 255)
                pins.analogWritePin(AnalogPin.P2, (1023 * 0) / 255)

                basic.pause(dur / 2)
            }
        })
    }

}