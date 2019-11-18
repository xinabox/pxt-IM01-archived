//% weight=50 color=#081620 icon="O" block="IM01_led"
//% groups = ['WINK', 'LED ON', OTHERS']

namespace IM01_led {

    export enum STATE {
        //% block="TRUE"
        TRUE = 0,
        //% block="FALSE"
        FALSE = 1,
    }

    export enum LED {
        //% block="GREEN"
        GREEN = 1,
        //% block="BLUE"
        BLUE = 2
    }

    //% blockId="turn_on_green_led" block="IM01 turn on green LED"
    //% group="LED ON"
    //% weight=30 blockGap=8
    export function turn_on_green_led() {
        pins.analogWritePin(AnalogPin.P8, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    //% blockId="turn_on_blue_led" block="IM01 turn on blue LED"
    //% group="LED ON"
    //% weight=30 blockGap=8
    export function turn_on_blue_led() {
        pins.analogWritePin(AnalogPin.P2, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }

    //% blockId="turn_on_green_led_with_intensity" block="IM01 turn on green LED with intensity %intensity"
    //% group="LED ON"
    //% intensity.min=0 intensity.max=255 intensity.defl=128
    //% weight=30 blockGap=8
    export function turn_on_green_led_with_intensity(intensity: number) {
        pins.analogWritePin(AnalogPin.P8, (1023 * intensity) / 255)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

    //% blockId="turn_on_blue_led_with_intensity" block="IM01 turn on blue LED with intensity %intensity"
    //% group="LED ON"
    //% intensity.min=0 intensity.max=255 intensity.defl=128
    //% weight=30 blockGap=8
    export function turn_on_blue_led_with_intensity(intensity: number) {
        pins.analogWritePin(AnalogPin.P2, (1023 * intensity) / 255)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }

    //% blockId="turn_on_blue_green_led" block="Turn On LED with G %g_value and B %b_value"
    //% weight=30 blockGap=8
    //% group="LED ON"
    //%g_value.min=0 g_value.max=255 g_value.defl=125
    //%b_value.min=0 b_value.max=255 b_value.defl=128
    export function turn_on_blue_green_led(g_value: number, b_value: number) {
        pins.analogWritePin(AnalogPin.P8, (1023 * g_value) / 255)
        pins.analogWritePin(AnalogPin.P2, (1023 * b_value) / 255)
    }

    //% blockId="wink_green_led" block="IM01 wink green LED for %dur ms"
    //% dur.defl=250
    //% weight=30 blockGap=8
    //% group="WINK"
    export function wink_green_led(dur: number) {
        pins.analogWritePin(AnalogPin.P8, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P2, 0)

        basic.pause(dur)

        pins.analogWritePin(AnalogPin.P8, (1023 * 0) / 255)

        basic.pause(dur)
    }

    //% blockId="wink_blue_led" block="IM01 wink blue LED for %dur ms"
    //% dur.defl=250
    //% weight=30 blockGap=8
    //% group="WINK"
    export function wink_blue_led(dur: number) {
        pins.analogWritePin(AnalogPin.P2, (1023 * 128) / 255)
        pins.digitalWritePin(DigitalPin.P8, 0)

        basic.pause(dur)

        pins.analogWritePin(AnalogPin.P2, (1023 * 0) / 255)

        basic.pause(dur)
    }

    //% blockId="wink_blue_green_led" block="IM01 wink blue %b_value green %g_value LED for %dur ms"
    //% dur.defl=250
    //% weight=30 blockGap=8
    //% group="WINK"
    export function wink_blue_green_led(b_value: number, g_value: number, dur: number) {
        pins.analogWritePin(AnalogPin.P8, (1023 * b_value) / 255)
        pins.analogWritePin(AnalogPin.P2, (1023 * g_value) / 255)

        basic.pause(dur)

        pins.analogWritePin(AnalogPin.P8, (1023 * 0) / 255)
        pins.analogWritePin(AnalogPin.P2, (1023 * 0) / 255)

        basic.pause(dur)
    }

    //% blockId="turn_off_leds" block="IM01 turn off all leds"
    //% weight=30 blockGap=8
    export function turn_off_leds() {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }

}