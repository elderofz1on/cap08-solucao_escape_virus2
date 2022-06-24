let sprite = game.createSprite(0, 0)
for (let index = 0; index < 4; index++) {
    for (let index = 0; index < 4; index++) {
        sprite.move(4)
        sprite.turn(Direction.Right, 90)
        basic.pause(100)
    }
}
