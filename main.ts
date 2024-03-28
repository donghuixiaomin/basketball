Microbit.init()
Microbit.showString(Oled.oled15, "store")
let score = 0
let environment = pins.analogReadPin(AnalogPin.P0)
basic.showNumber(environment)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > environment) {
        score += 1
        Microbit.showNumber(Oled.oled46, score)
        basic.pause(2000)
    }
})
