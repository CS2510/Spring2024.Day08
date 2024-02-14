class CircleGameObject extends GameObject {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
    }
    update() {
        let speed = 100
        if (Input.keysDown.includes("ArrowLeft"))
            this.x -= speed / Time.fps
        if (Input.keysDown.includes("ArrowRight"))
            this.x += speed / Time.fps
        if (Input.keysDown.includes("ArrowUp"))
            this.y -= speed / Time.fps
        if (Input.keysDown.includes("ArrowDown"))
            this.y += speed / Time.fps

        if (this.x < 0) {
            currentScene = new DeadScene()
        }
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = "green"
        ctx.strokeStyle = "purple"
        ctx.lineWidth = 5
        ctx.arc(50 + this.x, 50 + this.y, 50, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
    }
}