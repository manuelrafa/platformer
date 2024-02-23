"use strict";
class Rect2 {
    constructor(x = 0, y = 0, w = 0, h = 0) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    get position() {
        return new Vector2(this.x, this.y);
    }
    set position(position) {
        this.x = position.x;
        this.y = position.y;
    }
    get size() {
        return new Vector2(this.w, this.h);
    }
    set size(size) {
        this.w = size.x;
        this.h = size.y;
    }
}
