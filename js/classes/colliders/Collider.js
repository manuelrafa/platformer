"use strict";
class Collider {
    constructor(parent) {
        this.enabled = true;
        this.localPosition = new Vector2(0, 0);
        this.onFloor = false;
        this.parent = parent;
        PhysicsServer.addToColliderList(this);
    }
    getParent() {
        return this.parent;
    }
    getLocalPosition() {
        return this.localPosition.clone();
    }
    isColliding() {
        return this.getColliderList().length > 0;
    }
    getColliderList() {
        if (this.parent.isAlive() && this.enabled) {
            this.onFloor = false;
            let list = [];
            const colList = PhysicsServer.getColliderList();
            for (let i = 0; i < colList.length; i++) {
                const col = colList[i];
                if (col === this)
                    continue;
                const mtv = this.isCollidingWith(col);
                if (mtv && typeof (mtv) == 'object') {
                    if (mtv.x == 0 && mtv.y == 0) {
                        continue;
                    }
                    list.push(col);
                    this.parent.escapeFromCollider(mtv);
                    if (mtv.y < 0 && Math.abs(mtv.y) > Math.abs(mtv.x)) {
                        this.onFloor = true;
                    }
                }
            }
            return list;
        }
        return [];
    }
    isOnFloor() {
        return this.onFloor;
    }
}
