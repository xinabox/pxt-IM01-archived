//% weight=50 color=#081620 icon="O" block="IM01_led"
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
        BLUE = 2,
        //% block="CYAN"
        CYAN = 3,
    }

    //% blockId="show_color_on_led" block="Turn On %led| LED with intensity level %intensity %state|"
    //% weight=30 blockGap=8
    //% intensity.min=0 intensity.max=10 intensity.defl=10
    export function show_color_on_led(led: LED, intensity: number, state: STATE) {

        if (led == LED.GREEN) {
            if (state == STATE.TRUE) {
                if (intensity == 10) {
                    pins.digitalWritePin(DigitalPin.P8, 1)
                    pins.digitalWritePin(DigitalPin.P2, 0)
                } else {
                    pins.analogWritePin(AnalogPin.P8, (1023 * intensity) / 9)
                    pins.digitalWritePin(DigitalPin.P2, 0)
                }
            }
        }

        if (led == LED.BLUE) {
            if (state == STATE.TRUE) {
                if (intensity == 10) {
                    pins.digitalWritePin(DigitalPin.P8, 0)
                    pins.digitalWritePin(DigitalPin.P2, 1)
                } else {
                    pins.analogWritePin(AnalogPin.P2, (1023 * intensity) / 9)
                    pins.digitalWritePin(DigitalPin.P8, 0)
                }
            }
        }

        if (led == LED.CYAN) {
            if (state == STATE.TRUE) {
                if (intensity == 10) {
                    pins.digitalWritePin(DigitalPin.P8, 1)
                    pins.digitalWritePin(DigitalPin.P2, 1)
                } else {
                    pins.analogWritePin(AnalogPin.P2, (1023 * intensity) / 9)
                    pins.analogWritePin(AnalogPin.P8, (1023 * intensity) / 9)
                }

            }
        }

    }

    //% blockId="blink_once" block="Blink LED %led| once with on and off time of %interval| ms and intensity level %intensity"
    //% weight=30 blockGap=8
    //% interval.defl=250
    //% intensity.min=0 intensity.max=10 intensity.defl=10
    export function blink_led(led: LED, interval: number, intensity: number) {

        if (led == LED.GREEN) {

            if (intensity == 10) {
                pins.digitalWritePin(DigitalPin.P8, 1)
                pins.digitalWritePin(DigitalPin.P2, 0)
            } else {
                pins.analogWritePin(AnalogPin.P8, (1023 * intensity) / 9)
                pins.digitalWritePin(DigitalPin.P2, 0)
            }

            basic.pause(interval)

            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)

            basic.pause(interval)
        }

        if (led == LED.BLUE) {

            if (intensity == 10) {
                pins.digitalWritePin(DigitalPin.P8, 0)
                pins.digitalWritePin(DigitalPin.P2, 1)
            } else {
                pins.analogWritePin(AnalogPin.P2, (1023 * intensity) / 9)
                pins.digitalWritePin(DigitalPin.P8, 0)
            }

            basic.pause(interval)

            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)

            basic.pause(interval)
        }

        if (led == LED.CYAN) {

            if (intensity == 10) {
                pins.digitalWritePin(DigitalPin.P8, 1)
                pins.digitalWritePin(DigitalPin.P2, 1)
            } else {
                pins.analogWritePin(AnalogPin.P2, (1023 * intensity) / 9)
                pins.analogWritePin(AnalogPin.P8, (1023 * intensity) / 9)
            }

            basic.pause(interval)

            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P2, 0)

            basic.pause(interval)
        }

    }

    //% blockId="show_bg_color_on_led" block="Turn On LED with G %g_value and B %b_value %state"
    //% weight=30 blockGap=8
    //%g_value.min=0 g_value.max=10 g_value.defl=10
    //%b_value.min=0 b_value.max=10 b_value.defl=10
    export function show_bg_color_on_led(g_value: number, b_value: number, state: STATE) {
        if (state) {
            basic.showString("Hello!")
            
            if (g_value == 10) {
                pins.digitalWritePin(DigitalPin.P8, 1)
            } else {
                pins.analogWritePin(AnalogPin.P8, (1023 * g_value) / 9)
            }

            if (b_value == 10) {
                pins.digitalWritePin(DigitalPin.P2, 1)
            } else {
                pins.analogWritePin(AnalogPin.P2, (1023 * b_value) / 9)
            }

        } else {

            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P8, 0)

        }
    }

    //% blockId="blink_led_non_preset" block="Blink LED with period of %interval| ms with G %g_value and B %b_value values "
    //% weight=30 blockGap=8
    //%g_value.min=0 g_value.max=10 g_value.defl=10
    //%b_value.min=0 b_value.max=10 b_value.defl=10
    export function blink_led_non_preset(interval: number, g_value: number, b_value: number) {
        if (g_value == 10) {
            pins.digitalWritePin(DigitalPin.P8, 1)
        } else {
            pins.analogWritePin(AnalogPin.P8, (1023 * g_value) / 9)
        }

        if (b_value == 10) {
            pins.digitalWritePin(DigitalPin.P2, 1)
        } else {
            pins.analogWritePin(AnalogPin.P2, (1023 * b_value) / 9)
        }

        basic.pause(interval)

        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)

        basic.pause(interval)
    }
}