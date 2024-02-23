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
    }
    draw(img, x, y) {
        this.context.drawImage(img, x, y);
    }
}
