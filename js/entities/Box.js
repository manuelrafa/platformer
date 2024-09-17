"use strict";
class Box extends CanvasEntity {
    constructor() {
        super();
        this.setImage('img/AguaTile.png');
        this.collider = new RectCollider(this, new Vector2(32, 32));
    }
    loop() {
        //this.collider.isColliding();
    }
    escapeFromCollider(mtv) {
        this.position.add(mtv);
    }
}
