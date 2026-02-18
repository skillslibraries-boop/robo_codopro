input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.rotation(Rotation.Pitch)))
    servos.P0.run(100)
    basic.pause(2000)
    servos.P0.stop()
})
