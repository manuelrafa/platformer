"use strict";
class Entity {
    constructor() {
        this.sprite = null;
        this.alive = true;
        this.x = 0;
        this.y = 0;
        window.requestAnimationFrame(this.staticLoop);
    }
    staticStart() {
        this.alive = true;
    }
    staticLoop() {
        if (this.alive) {
            this.loop();
        }
        window.requestAnimationFrame(this.staticLoop);
    }
    /**
     * @override
     * LLamado para inicializar la entidad.
     */
    start() {
        this.staticStart();
    }
    /**
     * @override
     * LLamado en cada frame.
     */
    loop() { }
    /* protected move(x, y) {
        this.x += Math.round(x * globalThis.deltaTime);
        this.y += Math.round(y * globalThis.deltaTime);
    } */
    kill() {
        if (this.alive)
            this.alive = false;
    }
}
