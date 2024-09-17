class Player extends CanvasEntity implements ColliderEntity {
    private movDirection = new Vector2();
    private speed: number = 150;
    private jumpSpeed: number = 300;

    collider: Collider;

    constructor() {
        super();
        this.setImage('img/Player.png');
        this.collider = new RectCollider(this, new Vector2(16, 32));
    }


    protected loop(): void {
        this.handleMovement();
        this.collider.isColliding();
        //console.log(this.collider.isOnFloor());
    }

    private handleMovement() {
        if (Input.isActionPressed('left')) {
            this.movDirection.x = -1;
        }
        else if (Input.isActionPressed('right')) {
            this.movDirection.x = 1;
        }
        else {
            this.movDirection.x = 0;
        }

        if (!this.collider.isOnFloor()) {
            this.movDirection.y += PhysicsServer.gravity;
        } else {
            if (this.movDirection.y > 0) {
                this.movDirection.y = 0;
            }
            if (Input.isActionPressed('jump')) {
               this.movDirection.y = -this.jumpSpeed;
           }
        }

        this.move(new Vector2(this.movDirection.x * this.speed, this.movDirection.y));

        //console.log(this.movDirection);
        
    }

    escapeFromCollider(mtv: Vector2): void {
        this.position.add(mtv);
    }
}