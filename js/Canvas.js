"use strict";
class Canvas {
    constructor(html) {
        this.html = html;
        this.context = html.getContext('2d');
    }
    draw(img, x, y) {
        var _a;
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.drawImage(img, x, y);
    }
}
