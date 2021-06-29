input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 123456789; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(25)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(25)
    }
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.showIcon(IconNames.Ghost)
