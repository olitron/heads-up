def on_gesture_logo_up():
    global Index
    Index = randint(0, len(Text_list) - 1)
    basic.show_string("" + (Text_list[Index]))
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_screen_up():
    music.play_melody("G A B C5 - - - - ", 120)
    game.remove_life(1)
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

def on_gesture_screen_down():
    music.play_melody("C5 B A G - - - - ", 120)
    game.add_score(1)
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

Index = 0
Text_list: List[str] = []
Text_list = ["Puppy",
    "Clock",
    "Night",
    "love",
    "oliver",
    "people",
    "malakai",
    "mikey",
    "ashbuns"]
countdown = 60000
game.start_countdown(countdown)

def on_forever():
    if countdown:
        pass
basic.forever(on_forever)
