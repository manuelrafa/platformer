class Player extends CanvasEntity {
    private movDirection = new Vector2();
    private speed: number = 150;

    constructor() {
        super();
        {
            const img = new Image();
            img.src = 'img/Player.png';
            this.sprite = img;
        }
    }


    protected loop(): void {
        this.handleMovement();
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
}