radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.setGroup(3)
basic.forever(function () {
    radio.sendNumber(1)
    radio.sendNumber(2)
    radio.sendNumber(3)
})
