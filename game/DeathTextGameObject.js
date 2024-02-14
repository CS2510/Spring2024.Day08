class DeathTextGameObject extends GameObject {
    update() {
    }
    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.font = "30px Comic Sans MS"
        ctx.fillText("You Died", 30, 60)

    }
}