class Box extends CanvasEntity implements ColliderEntity {
    collider: Collider;

    constructor() {
        super();
        this.setImage('img/AguaTile.png');

        this.collider = new RectCollider(this, new Vector2(32, 32));
    }

    protected loop(): void {
        //this.collider.isColliding();
    }

    escapeFromCollider(mtv: Vector2): void {
        this.position.add(mtv);
    }
}