const PhysicsServer = new class PhysicsServer {
    public gravity: number = 10;

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