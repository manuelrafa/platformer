"use strict";
class Box extends CanvasEntity {
    constructor() {
        super();
        this.sprite = new Image();
        this.sprite.src = 'img/AguaTile.png';
        this.collider = new RectCollider(this, new Vector2(32, 32));
    }
}
