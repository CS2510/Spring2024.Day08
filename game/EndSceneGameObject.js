class EndSceneGameObject extends GameObject {
    constructor() {
        super()
        this.timeSinceDeath = 0

    }
    update() {
        this.timeSinceDeath += Time.ms
        if (this.timeSinceDeath > 2000) {
            Globals.score = 0
            currentScene = new MainScene()
        }
    }
}