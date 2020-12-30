input.onGesture(Gesture.LogoUp, function () {
    Index = randint(0, Text_list.length - 1)
    basic.showString("" + (Text_list[Index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    music.playMelody("G A B C5 - - - - ", 249)
    game.removeLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("C5 B A G - - - - ", 248)
    game.addScore(1)
})
let Index = 0
let Text_list: string[] = []
Text_list = ["Puppy", "Clock", "Night", "love", "oliver", "people", "malakai", "mikey", "ashbuns"]
let countdown = 60000
game.startCountdown(countdown)
music.playMelody("B A G A G F A C5 ", 400)
basic.forever(function () {
    while (countdown > 0) {
        if (countdown == 30000) {
            music.playMelody("C D E F G A B C5 ", 400)
        }
        if (countdown == 1000) {
            music.playMelody("C5 B A G F E D C ", 400)
        }
        basic.pause(1000)
        countdown += -1000
    }
})
