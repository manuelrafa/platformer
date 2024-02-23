class Entity {
    protected sprite: HTMLImageElement | null = null;
    protected alive: boolean = true;
    protected x: number = 0;
    protected y: number = 0;

    constructor() {
        window.requestAnimationFrame(this.staticLoop);
    }

    private staticStart() {
        this.alive = true;
    }

    private staticLoop() {
        if (this.alive) {
            this.loop();
        }
        window.requestAnimationFrame(this.staticLoop);
    }

    /**
     * @override
     * LLamado para inicializar la entidad.
     */
    protected start(): void {
        this.staticStart();
    }
    /**
     * @override
     * LLamado en cada frame.
     */
    protected loop(): void {}

    /* protected move(x, y) {
        this.x += Math.round(x * globalThis.deltaTime);
        this.y += Math.round(y * globalThis.deltaTime);
    } */

    protected kill(): void {
        if (this.alive) this.alive = false;
    }

}