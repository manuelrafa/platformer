interface ColliderEntity extends CanvasEntity {
    collider: Collider;

    escapeFromCollider(mtv: Vector2): void;
}