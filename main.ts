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
radio.onReceivedString(function (receivedString) {
    if (receivedString == "rauf") {
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Square,
        161,
        3029,
        255,
        255,
        1000,
        SoundExpressionEffect.None,
        InterpolationCurve.Curve
        ), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else if (receivedString == "runter") {
        music.playSoundEffect(music.createSoundEffect(
        WaveShape.Square,
        3175,
        72,
        255,
        255,
        1000,
        SoundExpressionEffect.None,
        InterpolationCurve.Curve
        ), SoundExpressionPlayMode.InBackground)
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (receivedString == "links") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . # . . .
            . . # . .
            `)
        music.playMelody("A F E F D G E F ", 400)
    } else if (receivedString == "rechts") {
        music.playMelody("G B A G C5 B A B ", 400)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showIcon(IconNames.Ghost)
    }
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
music.playTone(262, music.beat(BeatFraction.Whole))
grove.initGesture()
radio.setGroup(1)
