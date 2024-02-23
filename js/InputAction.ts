class InputAction {
    keycodes: string[];

    pressed: boolean = false;
    justPressed: boolean = false;
    justReleased: boolean = false;

    constructor(...keycodes: string[]) {
        this.keycodes = keycodes;
    }

    hasKey(keyCode: string) {
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