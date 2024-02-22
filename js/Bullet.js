class Bullet extends Entity {
    directionX;
    directionY;

    freeTimer;

    constructor() {
        super('pepe');
        this.docElement.classList.add('bullet');
        this.speed = 500;
    }

    start = (startX, startY, directionX, directionY) => {
        this.staticStart();
        this.posX = startX;
        this.posY = startY;
        this.directionX = directionX;
        this.directionY = directionY;
        clearTimeout(this.freeTimer);
        this.freeTimer = setTimeout(this.free, 1000);
    }

    loop = () => {
        this.move(this.directionX, this.directionY);
    }
}