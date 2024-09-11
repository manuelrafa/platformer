abstract class Collider {
    public enabled: boolean = true;
    protected parent: ColliderEntity;
    protected localPosition: Vector2 = new Vector2(0, 0);

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
            let list = [];

            const colList = PhysicsServer.getColliderList();
            for (let i = 0; i < colList.length; i++) {
                const col = colList[i];
                if (col === this) continue;
                const mtv = this.isCollidingWith(col);
                if (mtv && typeof(mtv) == 'object') {
                    list.push(col);
                    this.parent.escapeFromCollider(mtv);
                }

            }
            return list;
        }
        return [];
    }

    public abstract isCollidingWith(other: Collider): boolean | Vector2;
}