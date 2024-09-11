"use strict";
class Box extends CanvasEntity {
    constructor() {
        super();
        this.sprite = new Image();
        this.sprite.src = 'img/AguaTile.png';
        const colVtx = [
            new Vector2(-16, -16),
            new Vector2(16, -16),
            new Vector2(16, 16),
            new Vector2(-16, 16)
        ];
        this.collider = new PolygonCollider(this, colVtx);
    }
    loop() {
        //this.collider.isColliding();
    }
    escapeFromCollider(mtv) {
        this.position.add(mtv);
    }
}
