function brightest () {
    for (let index = 0; index < 5; index++) {
        led.plot(x1, y)
        y += 1
    }
}
function brighter () {
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x2, y, 60)
        y += 1
    }
}
let y = 0
let x2 = 0
let x1 = 0
x1 = 0
x2 = 0
y = 0
let dx = 0
basic.forever(function () {
    basic.clearScreen()
    y = 0
    if (x1 == 0) {
        dx = 1
    } else if (x1 == 4) {
        dx = -1
    }
    brightest()
    x1 += dx
    basic.pause(100)
    basic.clearScreen()
    brighter()
    x2 += dx
    basic.pause(100)
})
