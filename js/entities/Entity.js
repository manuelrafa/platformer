"use strict";
class Entity {
    constructor() {
        this.alive = true;
        window.requestAnimationFrame(this.staticLoop.bind(this));
    }
    isAlive() {
        return this.alive;
    }
    staticLoop() {
        if (this.alive) {
            this.loop();
        }
        window.requestAnimationFrame(this.staticLoop.bind(this));
    }
    /**
     * @override
     * LLamado para inicializar la entidad.
     */
    start() {
        this.alive = true;
    }
    /**
     * @override
     * LLamado en cada frame.
     */
    loop() { }
    kill() {
        if (this.alive)
            this.alive = false;
    }
}
