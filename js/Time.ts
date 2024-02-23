const Time = new class {
    #delta: number = 0;
    /**
     * Tiempo que pasó desde el frame anterior, en segundos.
     */
    public get deltaTime() : number { return this.#delta; }
    private set deltaTime(delta: number) { this.#delta = delta; }
    
    private previousTimestamp: number = 0;

    constructor() {
        window.requestAnimationFrame(this.mainLoop.bind(this));
    }

    private mainLoop(timestamp: number) {
        this.calculateDeltaTime(timestamp);
        window.requestAnimationFrame(this.mainLoop.bind(this));
    }

    private calculateDeltaTime(timestamp: number) {
        this.deltaTime = (timestamp - this.previousTimestamp) / 1000;
        this.previousTimestamp = timestamp;
    }
}();