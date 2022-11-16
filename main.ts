function brightest () {
    for (let index = 0; index < 5; index++) {
        led.plot(x1, y)
        y += 1
    }
}
function bright () {
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x2, y, 60)
        y += 1
    }
}
function brighter () {
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x3, y, 20)
        y += 1
    }
}
let y = 0
let x3 = 0
let x2 = 0
let x1 = 0
x1 = 2
x2 = 1
x3 = 0
y = 0
let dx1 = 1
let dx2 = 1
let dx3 = 1
basic.forever(function () {
    for (let index = 0; index < 5; index++) {
        led.plot(x1, y)
        led.plotBrightness(x2, y, 60)
        led.plotBrightness(x3, y, 20)
        y += 1
    }
    y = 0
    if (x1 == 0) {
        dx1 = 1
        basic.pause(100)
        dx2 = 1
        basic.pause(100)
        dx3 = 1
    } else if (x1 == 4) {
        dx1 = -1
        basic.pause(100)
        dx2 = -1
        basic.pause(100)
        dx3 = -1
    }
    x1 += dx1
    x2 += dx2
    x3 += dx3
    basic.pause(500)
    basic.clearScreen()
})
