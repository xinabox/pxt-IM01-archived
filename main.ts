//% weight=50 color=#081620 icon="O" block="IM01_led"
namespace IM01_led {

    //% blockId=color_enum_shim
    //% block="Color $arg"
    //% enumName="Colors"
    //% enumMemberName="color"
    //% enumPromptHint="e.g. Green, Orange, ..."
    //% enumInitialMembers="Red, Blue, Yellow"
    export function _colorEnumShim(arg: number) {
        // This function should do nothing, but must take in a single
        // argument of type number and return a number value.
        return arg;
    }

}