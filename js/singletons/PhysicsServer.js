"use strict";
const PhysicsServer = new class PhysicsServer {
    constructor() {
        this.gravity = 10;
        this.colliderList = [];
    }
    getColliderList() {
        return this.colliderList;
    }
    addToColliderList(Collider) {
        if (!this.isInColliderList(Collider))
            this.colliderList.push(Collider);
    }
    isInColliderList(Collider) {
        return this.colliderList.includes(Collider);
    }
};
