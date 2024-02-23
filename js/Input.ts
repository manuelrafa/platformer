interface ActionList {
    [index: string]: InputAction;
}

const Input = new class Input {
    private pressedKeys = new Map<string, boolean>();
    public actions: ActionList = {
        left: new InputAction('KeyA'),
        right: new InputAction('KeyD')
    };

    constructor() {
        window.onkeydown = this.keyDown.bind(this);
        window.onkeyup = this.keyUp.bind(this);
        window.onblur = this.clearAllKeys.bind(this);
    }

    public isActionPressed(action: string): boolean {
        if (!this.actions.hasOwnProperty(action)) {
            console.error(`¡La acción ${action} no existe!`);
            return false;
        }
        return this.actions[action].pressed;
    }
    public isActionJustPressed(action: string): boolean {
        if (!this.actions.hasOwnProperty(action)) {
            console.error(`¡La acción ${action} no existe!`);
            return false;
        }
        return this.actions[action].justPressed;
    }
    public isActionJustReleased(action: string): boolean {
        if (!this.actions.hasOwnProperty(action)) {
            console.error(`¡La acción ${action} no existe!`);
            return false;
        }
        return this.actions[action].justReleased;
    }

    public isKeyDown(keycode: string): boolean | undefined {
        if (!this.pressedKeys.has(keycode)) {
            this.pressedKeys.set(keycode, false);
            return false;
        }
        return this.pressedKeys.get(keycode);
    }


    private keyDown (e: KeyboardEvent): void {
        e.preventDefault();
        this.pressedKeys.set(e.code, true);
        for (const action in this.actions) {
            if (this.actions[action].hasKey(e.code)) {
                this.actions[action].press();
            }
        }
    }
    private keyUp (e: KeyboardEvent): void {
        e.preventDefault();
        this.pressedKeys.set(e.code, false);
        for (const action in this.actions) {
            if (this.actions[action].hasKey(e.code)) {
                this.actions[action].release();
            }
        }
    }
    private clearAllKeys(): void {
        this.pressedKeys.clear();
    }
}();