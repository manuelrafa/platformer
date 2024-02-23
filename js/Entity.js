"use strict";
class Entity {
    constructor() {
        this.sprite = null;
        this.alive = true;
        this.x = 0;
        this.y = 0;
        window.requestAnimationFrame(this.staticLoop.bind(this));
    }
    staticStart() {
        this.alive = true;
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
        this.staticStart();
    }
    /**
     * @override
     * LLamado en cada frame.
     */
    loop() { }
    move(x, y) {
        this.x += Math.round(x * Time.deltaTime);
        this.y += Math.round(y * Time.deltaTime);
    }
    kill() {
        if (this.alive)
            this.alive = false;
    }
}
const a = new Entity();
