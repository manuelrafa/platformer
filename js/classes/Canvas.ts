class Canvas {
    protected html: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;

    protected size = new Vector2(640, 360);

    constructor(html: HTMLCanvasElement, size: Vector2 | null = null) {
        this.html = html;
        this.context = html.getContext('2d') as CanvasRenderingContext2D;
        if (size != null) {
            this.size = size;

            html.width = size.x;
            html.height = size.y;
        }

        window.requestAnimationFrame(this.clear.bind(this));
    }

    draw(img: HTMLImageElement, x: number, y: number) : void {
        this.context.drawImage(img, x, y);
    }

    clear() {
        this.context.clearRect(0, 0, this.size.x, this.size.y);
        window.requestAnimationFrame(this.clear.bind(this));
    }
}