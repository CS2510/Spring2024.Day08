class ScoreGameObject extends GameObject {
    update() {
    }
    draw(ctx) {
        ctx.fillStyle = "white"
        ctx.font = "30px Times"
        ctx.fillText(Globals.score, 0, 30)
    }
}