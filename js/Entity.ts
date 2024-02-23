class Entity {
    protected sprite: HTMLImageElement | null = null;
    protected alive: boolean = true;
    protected position: Vector2 = new Vector2();

    constructor() {
        window.requestAnimationFrame(this.staticLoop.bind(this));
    }

    private staticStart() {
        this.alive = true;
    }

    private staticLoop() {
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
        this.staticStart();
    }
    /**
     * @override
     * LLamado en cada frame.
     */
    protected loop(): void {}

    protected move(x: number, y: number) {
        this.position.x += Math.round(x * Time.deltaTime);
        this.position.y += Math.round(y * Time.deltaTime);
        
    }

    protected kill(): void {
        if (this.alive) this.alive = false;
    }

}

const a = new Entity();