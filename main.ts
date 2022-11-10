let x = 0
let y = 0
basic.forever(function () {
    if (x == 4) {
        for (let index = 0; index < 5; index++) {
            basic.clearScreen()
            led.plot(x, y)
            x += -1
            basic.pause(100)
        }
    } else {
        x += 1
        led.plot(x, y)
        basic.pause(100)
        basic.clearScreen()
    }
})
