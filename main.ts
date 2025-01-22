radio.setGroup(18)
basic.forever(function () {
    radio.sendNumber(1)
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    radio.sendNumber(2)
})
