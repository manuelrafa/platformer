"use strict";
class CanvasEntity extends Entity {
    constructor() {
        super(...arguments);
        this.sprite = null;
        this.visible = true;
        this.zIndex = 0;
        this.position = new Vector2();
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
        MainCanvas.draw(this.sprite, this.position.x, this.position.y);
    }
    move(movement) {
        this.position.x += Math.round(movement.x * Time.deltaTime);
        this.position.y += Math.round(movement.y * Time.deltaTime);
    }
}
