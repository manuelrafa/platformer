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

        
    }

    draw(img: HTMLImageElement, x: number, y: number) : void {
        this.context.drawImage(img, x, y);
    }
}