input.onButtonPressed(Button.A, function () {
    Player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    Player.move(1)
})
let Bullet2: game.LedSprite = null
let Bullet3: game.LedSprite = null
let Bullet1: game.LedSprite = null
let bullet4: game.LedSprite = null
let Player: game.LedSprite = null
game.setScore(0)
Player = game.createSprite(2, 4)
let score = 0
game.setLife(3)
loops.everyInterval(1000, function () {
    bullet4 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(250)
        bullet4.change(LedSpriteProperty.Y, 1)
    }
    if (bullet4.isTouching(Player)) {
        game.removeLife(1)
    }
    bullet4.delete()
})
loops.everyInterval(1000, function () {
    Bullet1 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(250)
        Bullet1.change(LedSpriteProperty.Y, 1)
    }
    if (Bullet1.isTouching(Player)) {
        game.removeLife(1)
    }
    Bullet1.delete()
})
loops.everyInterval(1000, function () {
    Bullet3 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(250)
        Bullet3.change(LedSpriteProperty.Y, 1)
    }
    if (Bullet3.isTouching(Player)) {
        game.removeLife(1)
    }
    Bullet3.delete()
    score += 1
})
loops.everyInterval(1000, function () {
    Bullet2 = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(250)
        Bullet2.change(LedSpriteProperty.Y, 1)
    }
    if (Bullet2.isTouching(Player)) {
        game.removeLife(1)
    }
    Bullet2.delete()
})
loops.everyInterval(500, function () {
    music.play(music.stringPlayable("C C C5 C5 B G E E ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A A G E D D - - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A A F F C5 B A A ", 120), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Double))
})
basic.forever(function () {
    if (score == 5) {
        game.addScore(1)
        score = 0
    }
})
