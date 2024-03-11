class CanvasEntity extends Entity {
    protected sprite: HTMLImageElement | null = null;
    protected visible: boolean = true;
    protected zIndex: number = 0;
    protected position: Vector2 = new Vector2();

    
    public getPosition(): Vector2 {
        return this.position.clone();
    }



    protected staticLoop(): void {
        super.staticLoop();
        if (this.alive) {
            this.drawSelf();
        }
    }

    private drawSelf() {
        if (!this.visible) return;
        if (this.sprite === null) return;
        MainCanvas.draw(this.sprite, this.position.x - this.sprite.width / 2, this.position.y - this.sprite.width / 2);
    }

    protected move(movement: Vector2) {
        this.position.x += Math.round(movement.x * Time.deltaTime);
        this.position.y += Math.round(movement.y * Time.deltaTime);
    }
}