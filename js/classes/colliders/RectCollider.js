"use strict";
class RectCollider extends Collider {
    constructor(parent, size) {
        super(parent);
        this.size = size;
    }
    isCollidingWith(other) {
        const oParent = other.getParent();
        if (!oParent.isAlive() || !other.enabled) {
            return false;
        }
        if (other instanceof RectCollider) {
            const rect = new Rect2();
            rect.size = this.size;
            rect.position = Vector2.add(this.localPosition, this.parent.getPosition());
            const oRect = new Rect2();
            oRect.size = other.getSize();
            oRect.position = Vector2.add(other.getLocalPosition(), oParent.getPosition());
            if (rect.x < oRect.x + oRect.w && rect.x + rect.w > oRect.x) {
                if (rect.y < oRect.y + oRect.h && rect.y + rect.h > oRect.y) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }
    getSize() {
        return this.size.clone();
    }
}
