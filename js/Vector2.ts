class Vector2 {
    x: number;
    y: number;
    
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    /* Operaciones a sí mismo ======================================================================= */

    /**
     * Suma _v2_ a este vector.
     */
    public add(v2: Vector2): void {
        this.x += v2.x;
        this.y += v2.y;
    }
    /**
     * Resta _v2_ a este vector.
     */
    public sub(v2: Vector2): void {
        this.x -= v2.x;
        this.y -= v2.y;
    }
    /**
     * Multiplica este vector por _num_.
     */
    public mul(num: number): void {
        this.x *= num;
        this.y *= num;
    }
    /**
     * Divide este vector por _num_.
     */
    public div(num: number): void {
        this.x /= num;
        this.y /= num;
    }

    /* Operaciones con return ======================================================================= */

    /**
     * Devuelve el producto escalar entre este vector y _v2_.
     */
    public dot(v2: Vector2): number {
        return this.x * v2.x + this.y * v2.y;
    }
    /**
     * Devuelve la norma (magnitud) de este vector.
     */
    public length(): number {
        let len = Math.pow(this.x, 2) + Math.pow(this.y, 2);
        return Math.sqrt(len);
    }
    /**
     * Devuelve la distancia entre este vector y _v2_.
     */
    public distanceTo(v2: Vector2): number {
        v2.sub(this);
        return Math.abs(v2.length());
    }
    /**
     * Devuelve una copia de este vector.
     */
    public clone(): Vector2 {
        return new Vector2(this.x, this.y);
    }
    public normalized(): Vector2 {
        return Vector2.div(this, this.length());
    }

    /* Operaciones estáticas (no modifican al propio vector) ======================================== */

    /**
     * Devuelve la suma entre _v1_ y _v2_.
     */
    public static add(v1: Vector2, v2: Vector2): Vector2 {
        const v3 = v1.clone();
        v3.add(v2);
        return v3;
    }
    /**
     * Devuelve la resta entre _v1_ y _v2_.
     */
    public static sub(v1: Vector2, v2: Vector2): Vector2 {
        const v3 = v1.clone();
        v3.sub(v2);
        return v3;
    }
    /**
     * Devuelve el producto de _v_ por _num_.
     */
    public static mul(v: Vector2, num: number): Vector2 {
        const v2 = v.clone();
        v2.mul(num);
        return v2;
    }
    /**
     * Devuelve la división de _v_ por _num_.
     */
    public static div(v: Vector2, num: number): Vector2 {
        const v2 = v.clone();
        v2.div(num);
        return v2;
    }
}