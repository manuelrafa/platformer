class Canvas {
    protected html: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D | null;

    constructor(html: HTMLCanvasElement) {
        this.html = html;
        this.context = html.getContext('2d');
    }

    draw(img: HTMLImageElement, x: number, y: number) : void {
        this.context?.drawImage(img, x, y);
    }
}