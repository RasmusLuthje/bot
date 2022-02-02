radio.onReceivedString(function (receivedString) {
    if (receivedString == "FREM") {
        bitbot.goms(BBDirection.Forward, 100, 400)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (receivedString == "TILBAGE") {
        bitbot.goms(BBDirection.Forward, 100, 400)
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . # #
            . # # . #
            # . . . .
            `)
    }
    if (receivedString == "RIGHT") {
        bitbot.rotatems(BBRobotDirection.Right, 60, 100)
        basic.showLeds(`
            . # # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (receivedString == "LEFT") {
        bitbot.rotatems(BBRobotDirection.Left, 60, 100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . # . .
            `)
    }
})
radio.setGroup(678)
radio.setTransmitPower(7)
