class Player extends CanvasEntity implements ColliderEntity {
    private movDirection = new Vector2();
    private speed: number = 150;

    collider: Collider;

    constructor() {
        super();
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


    protected loop(): void {
        this.handleMovement();
        this.collider.isColliding();
        //console.log(this.collider.isColliding());
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

        this.move(Vector2.mul(this.movDirection, this.speed));
    }

    escapeFromCollider(mtv: Vector2): void {
        this.position.add(mtv);
    }
}