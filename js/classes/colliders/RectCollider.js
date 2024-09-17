"use strict";
class RectCollider extends PolygonCollider {
    constructor(parent, size) {
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
    getSize() {
        return this.size.clone();
    }
}
