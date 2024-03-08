"use strict";
class Canvas {
    constructor(html, size = null) {
        this.size = new Vector2(640, 360);
        this.html = html;
        this.context = html.getContext('2d');
        if (size != null) {
            this.size = size;
            html.width = size.x;
            html.height = size.y;
        }
        window.requestAnimationFrame(this.clear.bind(this));
    }
    draw(img, x, y) {
        this.context.drawImage(img, x, y);
    }
    clear() {
        this.context.clearRect(0, 0, this.size.x, this.size.y);
        window.requestAnimationFrame(this.clear.bind(this));
    }
}
