class Entity {
    protected alive: boolean = true;

    constructor() {
        window.requestAnimationFrame(this.staticLoop.bind(this));
    }

    protected staticLoop() {
        if (this.alive) {
            this.loop();
        }
        window.requestAnimationFrame(this.staticLoop.bind(this));
    }

    /**
     * @override
     * LLamado para inicializar la entidad.
     */
    protected start(): void {
        this.alive = true;
    }
    /**
     * @override
     * LLamado en cada frame.
     */
    protected loop(): void {}

    protected kill(): void {
        if (this.alive) this.alive = false;
    }

}