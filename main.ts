grove.onGesture(GroveGesture.Right, function () {
    radio.sendString("rechts")
    basic.showLeds(`
        . . # . .
        . . . # .
        . . . . #
        . . . # .
        . . # . .
        `)
})
grove.onGesture(GroveGesture.Up, function () {
    radio.sendString("rauf")
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
})
grove.onGesture(GroveGesture.Down, function () {
    radio.sendString("runter")
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        `)
})
grove.onGesture(GroveGesture.Forward, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
})
grove.onGesture(GroveGesture.Left, function () {
    radio.sendString("links")
    basic.showLeds(`
        . . # . .
        . # . . .
        # . . . .
        . # . . .
        . . # . .
        `)
})
grove.onGesture(GroveGesture.Backward, function () {
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
grove.initGesture()
radio.setGroup(1)
