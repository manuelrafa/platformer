class PolygonCollider extends Collider {

    protected vertices: Array<Vector2>;
    protected edgeAxisList: Array<Vector2>;
    protected normalAxisList: Array<Vector2>;

    constructor(parent: ColliderEntity, vertices: Array<Vector2>) {
        super(parent);
        this.vertices = vertices;
        this.edgeAxisList = this.getEdgeAxisList();
        this.normalAxisList = this.getNormalAxisList();
    }   


    public isCollidingWith(other: PolygonCollider): boolean | Vector2 {
        // Obtiene los ejes en los que proyectar, que son los perpendiculares a los lados de ambos colliders.
        let overlap: number = Number.POSITIVE_INFINITY;
        let smallestAxis: Vector2 = new Vector2();

        const axes1: Array<Vector2> = this.normalAxisList;
        const axes2: Array<Vector2> = other.normalAxisList;

        for (let i = 0; i < axes1.length; i++) {
            const axis = axes1[i];

            // Proyecta esto y el collider sobre axis.
            const p1: NumberRange = this.proyectOn(axis);
            const p2: NumberRange = other.proyectOn(axis);

            // Chequea si las proyecciones se tocan.
            if (!p1.overlaps(p2)) return false;
            else {
                const ovrlp = p1.getOverlap(p2);
                if (Math.abs(ovrlp) < Math.abs(overlap)) {
                    overlap = ovrlp;
                    smallestAxis = axis;
                }
            }
        }
        for (let i = 0; i < axes2.length; i++) {
            const axis = axes2[i];

            // Proyecta esto y el collider sobre axis.
            const p1: NumberRange = this.proyectOn(axis);
            const p2: NumberRange = other.proyectOn(axis);

            // Chequea si las proyecciones se tocan.
            if (!p1.overlaps(p2)) return false;
            else {
                const ovrlp = p1.getOverlap(p2);
                if (Math.abs(ovrlp) < Math.abs(overlap)) {
                    overlap = ovrlp;
                    smallestAxis = axis;
                }
            }
        }
        // Minimum Translation Vector
        const mtv = Vector2.mul(smallestAxis, overlap);
        return mtv;
    }


    private getEdgeAxisList(): Array<Vector2> {
        let axes: Array<Vector2> = [];
        axes.length = this.vertices.length;
        axes[0] = Vector2.sub(this.vertices[this.vertices.length-1], this.vertices[0]);

        for (let i = 1; i < this.vertices.length; i++) {
            const prevVertex = this.vertices[i-1];
            const vertex = this.vertices[i];
            
            axes[i] = Vector2.sub(prevVertex, vertex);
        }

        return axes;
    }

    public getNormalAxisList() {
        let axes: Array<Vector2> = [];
        axes.length = this.edgeAxisList.length;
        for (let i = 0; i < this.edgeAxisList.length; i++) {
            axes[i] = this.edgeAxisList[i].normalVector().normalized();
        }
        return axes;
    }


    public proyectOn(v: Vector2) {
        let min: number = v.dot(Vector2.add(this.vertices[0], this.parent.getPosition()));
        let max: number = min;

        for (let i = 1; i < this.vertices.length; i++) {
            const dot = v.dot(Vector2.add(this.vertices[i], this.parent.getPosition()));
            if (dot < min) {
                min = dot;
            } else if (dot > max) {
                max = dot;
            }
        }

        return new NumberRange(min, max);
    }
}