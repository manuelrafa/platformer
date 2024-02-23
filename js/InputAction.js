"use strict";
class InputAction {
    constructor(...keycodes) {
        this.pressed = false;
        this.justPressed = false;
        this.justReleased = false;
        this.keycodes = keycodes;
    }
    hasKey(keyCode) {
        return this.keycodes.indexOf(keyCode) != -1;
    }
    press() {
        this.justPressed = !this.pressed;
        this.pressed = true;
        window.requestAnimationFrame(this.postPress.bind(this));
    }
    release() {
        this.justReleased = true;
        this.pressed = false;
        window.requestAnimationFrame(this.postRelease.bind(this));
    }
    postPress() {
        this.justPressed = false;
    }
    postRelease() {
        this.justReleased = false;
    }
}
