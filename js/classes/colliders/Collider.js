"use strict";
class Collider {
    constructor(parent) {
        this.enabled = true;
        this.localPosition = new Vector2(0, 0);
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
            let list = [];
            const colList = PhysicsServer.getColliderList();
            for (let i = 0; i < colList.length; i++) {
                const col = colList[i];
                if (col === this)
                    continue;
                const mtv = this.isCollidingWith(col);
                if (mtv && typeof (mtv) == 'object') {
                    list.push(col);
                    this.parent.escapeFromCollider(mtv);
                }
            }
            return list;
        }
        return [];
    }
}
