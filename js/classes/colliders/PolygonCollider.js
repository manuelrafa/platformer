"use strict";
class PolygonCollider extends Collider {
    constructor(parent, vertices) {
        super(parent);
        this.vertices = vertices;
        this.edgeAxisList = this.getEdgeAxisList();
        this.normalAxisList = this.getNormalAxisList();
    }
    isCollidingWith(other) {
        // Obtiene los ejes en los que proyectar, que son los perpendiculares a los lados de ambos colliders.
        let overlap = Number.POSITIVE_INFINITY;
        let smallestAxis = new Vector2();
        const axes1 = this.normalAxisList;
        const axes2 = other.normalAxisList;
        for (let i = 0; i < axes1.length; i++) {
            const axis = axes1[i];
            // Proyecta esto y el collider sobre axis.
            const p1 = this.proyectOn(axis);
            const p2 = other.proyectOn(axis);
            // Chequea si las proyecciones se tocan.
            if (!p1.overlaps(p2))
                return false;
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
            const p1 = this.proyectOn(axis);
            const p2 = other.proyectOn(axis);
            // Chequea si las proyecciones se tocan.
            if (!p1.overlaps(p2))
                return false;
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
    getEdgeAxisList() {
        let axes = [];
        axes.length = this.vertices.length;
        axes[0] = Vector2.sub(this.vertices[this.vertices.length - 1], this.vertices[0]);
        for (let i = 1; i < this.vertices.length; i++) {
            const prevVertex = this.vertices[i - 1];
            const vertex = this.vertices[i];
            axes[i] = Vector2.sub(prevVertex, vertex);
        }
        return axes;
    }
    getNormalAxisList() {
        let axes = [];
        axes.length = this.edgeAxisList.length;
        for (let i = 0; i < this.edgeAxisList.length; i++) {
            axes[i] = this.edgeAxisList[i].normalVector().normalized();
        }
        return axes;
    }
    proyectOn(v) {
        let min = v.dot(Vector2.add(this.vertices[0], this.parent.getPosition()));
        let max = min;
        for (let i = 1; i < this.vertices.length; i++) {
            const dot = v.dot(Vector2.add(this.vertices[i], this.parent.getPosition()));
            if (dot < min) {
                min = dot;
            }
            else if (dot > max) {
                max = dot;
            }
        }
        return new NumberRange(min, max);
    }
}
