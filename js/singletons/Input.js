"use strict";
const Input = new class Input {
    constructor() {
        this.pressedKeys = new Map();
        this.actions = {
            left: new InputAction('KeyA'),
            right: new InputAction('KeyD'),
            jump: new InputAction('KeyW')
        };
        window.onkeydown = this.keyDown.bind(this);
        window.onkeyup = this.keyUp.bind(this);
        window.onblur = this.clearAllKeys.bind(this);
    }
    isActionPressed(action) {
        if (!this.actions.hasOwnProperty(action)) {
            console.error(`¡La acción ${action} no existe!`);
            return false;
        }
        return this.actions[action].pressed;
    }
    isActionJustPressed(action) {
        if (!this.actions.hasOwnProperty(action)) {
            console.error(`¡La acción ${action} no existe!`);
            return false;
        }
        return this.actions[action].justPressed;
    }
    isActionJustReleased(action) {
        if (!this.actions.hasOwnProperty(action)) {
            console.error(`¡La acción ${action} no existe!`);
            return false;
        }
        return this.actions[action].justReleased;
    }
    isKeyDown(keycode) {
        if (!this.pressedKeys.has(keycode)) {
            this.pressedKeys.set(keycode, false);
            return false;
        }
        return this.pressedKeys.get(keycode);
    }
    keyDown(e) {
        this.pressedKeys.set(e.code, true);
        for (const action in this.actions) {
            if (this.actions[action].hasKey(e.code)) {
                this.actions[action].press();
            }
        }
    }
    keyUp(e) {
        this.pressedKeys.set(e.code, false);
        for (const action in this.actions) {
            if (this.actions[action].hasKey(e.code)) {
                this.actions[action].release();
            }
        }
    }
    clearAllKeys() {
        this.pressedKeys.clear();
    }
}();
