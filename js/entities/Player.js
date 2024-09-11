"use strict";
class Player extends CanvasEntity {
    constructor() {
        super();
        this.movDirection = new Vector2();
        this.speed = 150;
        {
            const img = new Image();
            img.src = 'img/Player.png';
            this.sprite = img;
        }
        const colVtx = [
            new Vector2(-8, -16),
            new Vector2(8, -16),
            new Vector2(8, 16),
            new Vector2(-8, 16)
        ];
        this.collider = new PolygonCollider(this, colVtx);
        //this.collider = new RectCollider(this, new Vector2(16, 32));
    }
    loop() {
        this.handleMovement();
        this.collider.isColliding();
        //console.log(this.collider.isColliding());
    }
    handleMovement() {
        if (Input.isActionPressed('left')) {
            this.movDirection.x = -1;
        }
        else if (Input.isActionPressed('right')) {
            this.movDirection.x = 1;
        }
        else {
            this.movDirection.x = 0;
        }
        this.move(Vector2.mul(this.movDirection, this.speed));
    }
    escapeFromCollider(mtv) {
        this.position.add(mtv);
    }
}
