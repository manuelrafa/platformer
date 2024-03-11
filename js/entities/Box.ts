class Box extends CanvasEntity implements ColliderEntity {
    collider: Collider;

    constructor() {
        super();
        this.sprite = new Image();
        this.sprite.src = 'img/AguaTile.png';

        this.collider = new RectCollider(this, new Vector2(32, 32));
    }
}