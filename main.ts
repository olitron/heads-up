input.onGesture(Gesture.LogoUp, function () {
    Index = randint(0, Text_list.length - 1)
    basic.showString("" + (Text_list[Index]))
})
input.onGesture(Gesture.ScreenUp, function () {
    game.removeLife(1)
})
input.onGesture(Gesture.ScreenDown, function () {
    game.addScore(1)
})
let Index = 0
let Text_list: string[] = []
Text_list = ["Puppy", "Clock", "Night"]
game.startCountdown(30000)
