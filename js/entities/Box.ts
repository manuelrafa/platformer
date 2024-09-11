class Box extends CanvasEntity implements ColliderEntity {
    collider: Collider;

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

    protected loop(): void {
        //this.collider.isColliding();
    }

    escapeFromCollider(mtv: Vector2): void {
        this.position.add(mtv);
    }
}