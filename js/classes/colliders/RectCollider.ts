class RectCollider extends PolygonCollider {
    protected size: Vector2;

    constructor(parent: ColliderEntity, size: Vector2) {
        const halfX = size.x / 2;
        const halfY = size.y / 2;
        const colVtx = [
            new Vector2(-halfX, -halfY),
            new Vector2(halfX, -halfY),
            new Vector2(halfX, halfY),
            new Vector2(-halfX, halfY)
        ];
        super(parent, colVtx);
        this.size = size;
    }

    public getSize(): Vector2 {
        return this.size.clone();
    }
}