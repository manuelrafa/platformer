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
        this.collider = new RectCollider(this, new Vector2(16, 32));
    }
    loop() {
        this.handleMovement();
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
}
