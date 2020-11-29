input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        # . # . #
        `)
    basic.pause(200)
    music.setVolume(255)
    music.playMelody("C C E F G A F A ", 120)
    music.ringTone(262)
    music.playMelody("C5 G B A F A C5 B ", 120)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    basic.showIcon(IconNames.Rollerskate)
    basic.showIcon(IconNames.Chessboard)
    basic.showString("JOY")
})
basic.forever(function () {
	
})
