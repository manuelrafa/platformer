"use strict";
class Entity {
    constructor() {
        this.sprite = null;
        this.alive = true;
        this.position = new Vector2();
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
    move(movement) {
        this.position.x += Math.round(movement.x * Time.deltaTime);
        this.position.y += Math.round(movement.y * Time.deltaTime);
    }
    kill() {
        if (this.alive)
            this.alive = false;
    }
}
const a = new Entity();
