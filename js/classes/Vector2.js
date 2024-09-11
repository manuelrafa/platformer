"use strict";
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /* Operaciones a sí mismo ======================================================================= */
    /**
     * Suma _v2_ a este vector.
     */
    add(v2) {
        this.x += v2.x;
        this.y += v2.y;
    }
    /**
     * Resta _v2_ a este vector.
     */
    sub(v2) {
        this.x -= v2.x;
        this.y -= v2.y;
    }
    /**
     * Multiplica este vector por _num_.
     */
    mul(num) {
        this.x *= num;
        this.y *= num;
    }
    /**
     * Divide este vector por _num_.
     */
    div(num) {
        this.x /= num;
        this.y /= num;
    }
    /* Operaciones con return ======================================================================= */
    /**
     * Devuelve el producto escalar entre este vector y _v2_.
     */
    dot(v2) {
        return this.x * v2.x + this.y * v2.y;
    }
    /**
     * Devuelve la norma (magnitud) de este vector.
     */
    length() {
        return Math.sqrt(this.squaredLength());
    }
    squaredLength() {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }
    /**
     * Devuelve la distancia entre este vector y _v2_.
     */
    distanceTo(v2) {
        const vdis = Vector2.sub(v2, this);
        return Math.abs(vdis.length());
    }
    /**
     * Devuelve una copia de este vector.
     */
    clone() {
        return new Vector2(this.x, this.y);
    }
    normalized() {
        return Vector2.div(this, this.length());
    }
    projectOn(v2) {
        const dot = this.dot(v2);
        const sqlen = v2.squaredLength();
        return Vector2.mul(v2, dot / sqlen);
    }
    normalVector() {
        return new Vector2(this.y, -this.x);
    }
    /* Operaciones estáticas (no modifican al propio vector) ======================================== */
    /**
     * Devuelve la suma entre _v1_ y _v2_.
     */
    static add(v1, v2) {
        const v3 = v1.clone();
        v3.add(v2);
        return v3;
    }
    /**
     * Devuelve la resta entre _v1_ y _v2_.
     */
    static sub(v1, v2) {
        const v3 = v1.clone();
        v3.sub(v2);
        return v3;
    }
    /**
     * Devuelve el producto de _v_ por _num_.
     */
    static mul(v, num) {
        const v2 = v.clone();
        v2.mul(num);
        return v2;
    }
    /**
     * Devuelve la división de _v_ por _num_.
     */
    static div(v, num) {
        const v2 = v.clone();
        v2.div(num);
        return v2;
    }
}
