radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
radio.setGroup(3)
basic.forever(function () {
    radio.sendNumber(1)
    radio.sendNumber(2)
    radio.sendNumber(3)
    radio.sendNumber(4)
    radio.sendNumber(5)
    radio.sendNumber(6)
    radio.sendNumber(7)
    radio.sendNumber(8)
})
