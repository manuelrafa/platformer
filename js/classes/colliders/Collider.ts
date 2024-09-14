abstract class Collider {
    public enabled: boolean = true;
    protected parent: ColliderEntity;
    protected localPosition: Vector2 = new Vector2(0, 0);

    private onFloor: boolean = false;

    constructor(parent: ColliderEntity) {
        this.parent = parent;
        PhysicsServer.addToColliderList(this);
    }

    public getParent(): ColliderEntity {
        return this.parent;
    }

    public getLocalPosition(): Vector2 {
        return this.localPosition.clone();
    }

    public isColliding(): boolean {
        return this.getColliderList().length > 0;
    }

    public getColliderList(): Array<Collider> {
        if (this.parent.isAlive() && this.enabled) {
            this.onFloor = false;
            let list = [];

            const colList = PhysicsServer.getColliderList();
            for (let i = 0; i < colList.length; i++) {
                const col = colList[i];
                if (col === this) continue;
                const mtv = this.isCollidingWith(col);
                if (mtv && typeof(mtv) == 'object') {
                    
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

    public isOnFloor() {
        return this.onFloor;
    }
        

    public abstract isCollidingWith(other: Collider): boolean | Vector2;
}