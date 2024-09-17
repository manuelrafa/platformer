"use strict";
class CanvasEntity extends Entity {
    constructor() {
        super(...arguments);
        this.sprite = null;
        this.visible = true;
        this.zIndex = 0;
        this.position = new Vector2();
    }
    getPosition() {
        return this.position.clone();
    }
    setPosition(x, y) {
        this.position.x = x;
        this.position.y = y;
    }
    setImage(path) {
        this.sprite = new Image();
        this.sprite.src = path;
    }
    staticLoop() {
        super.staticLoop();
        if (this.alive) {
            this.drawSelf();
        }
    }
    drawSelf() {
        if (!this.visible)
            return;
        if (this.sprite === null)
            return;
        MainCanvas.draw(this.sprite, this.position.x - this.sprite.width / 2, this.position.y - this.sprite.width / 2);
    }
    move(movement) {
        this.position.x += Math.round(movement.x * Time.deltaTime);
        this.position.y += Math.round(movement.y * Time.deltaTime);
    }
}
