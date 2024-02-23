"use strict";
class Player extends Entity {
    constructor() {
        super(...arguments);
        this.movDirection = new Vector2();
        this.speed = 150;
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
