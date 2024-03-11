const PhysicsServer = new class PhysicsServer {
    private colliderList: Array<Collider> = [];

    public getColliderList(): Array<Collider> {
        return this.colliderList;
    }

    public addToColliderList(Collider: Collider) {
        if (!this.isInColliderList(Collider))
            this.colliderList.push(Collider);
    }

    public isInColliderList(Collider: Collider) {
        return this.colliderList.includes(Collider);
    }
}