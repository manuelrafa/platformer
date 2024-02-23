class Rect2 {
    public x: number;
    public y: number;
    public w: number;
    public h: number;

    constructor(x: number = 0, y: number = 0, w: number = 0, h: number = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    public get position(): Vector2 {
        return new Vector2(this.x, this.y);
    }
    public set position(position: Vector2) {
        this.x = position.x;
        this.y = position.y;
    }
    public get size(): Vector2 {
        return new Vector2(this.w, this.h);
    }
    public set size(size: Vector2) {
        this.w = size.x;
        this.h = size.y;
    }
}