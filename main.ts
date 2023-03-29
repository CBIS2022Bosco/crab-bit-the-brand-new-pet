input.onButtonPressed(Button.A, function () {
    radio.sendString("smile")
    Health += 50
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.Silly)
})
radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.Happy)
    basic.showString("Hi!")
    basic.showString("From Otama-Bit")
})
input.onGesture(Gesture.Shake, function () {
    scared.showImage(0)
    music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 210)
    Health += -100
    basic.showIcon(IconNames.Silly)
})
let scared: Image = null
radio.setGroup(2)
basic.showIcon(IconNames.Silly)
let happy = images.createImage(`
    # # # # #
    # # . # #
    . . . . .
    # . . . #
    . # # # .
    `)
scared = images.createImage(`
    # # . # #
    # # . # #
    . . # . .
    . # # # .
    # # # # #
    `)
let sad = images.createImage(`
    . . . . .
    # . . # .
    # . . # .
    . # # . .
    # . . # .
    `)
let dead = images.createImage(`
    # . # . .
    . # . . #
    # . # . .
    . . . . .
    # # # # #
    `)
let KO = images.createImage(`
    . . . . .
    # # . # #
    . . . . .
    # # # # #
    . . . . .
    `)
let Health = 100
if (input.lightLevel() < 100) {
    basic.showString("Lights pls")
    basic.showIcon(IconNames.Silly)
    Health += -10
}
if (input.lightLevel() > 100) {
    basic.showString("Sunny day")
    basic.showIcon(IconNames.Silly)
    Health += 20
}
if (input.temperature() < 20) {
    basic.showString("Radiator, Please!")
    basic.showIcon(IconNames.Silly)
    Health += -10
}
if (input.temperature() > 20) {
    basic.showString("So hot!")
    basic.showIcon(IconNames.Silly)
    Health += 20
}
basic.forever(function () {
    basic.pause(2000)
    Health += -5
    if (Health == 0) {
        dead.showImage(0)
        basic.showString("you cannot have a crab")
    }
})
