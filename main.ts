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
        bitbot.rotate(BBRobotDirection.Right, 10)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . # . .
            `)
    }
    if (receivedString == "LEFT") {
        bitbot.rotate(BBRobotDirection.Left, 10)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.setGroup(678)
radio.setTransmitPower(7)
