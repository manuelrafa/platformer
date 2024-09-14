const body = document.querySelector('body') as HTMLBodyElement;
const MainCanvas = new Canvas(document.querySelector('canvas#main_canvas') as HTMLCanvasElement);

const p = new Player();
p.setPosition(50, 300);

const tilemap: Array<Box> = [];
for (let i = 0; i < 10; i++) {
    const b = new Box();
    b.setPosition(i*32+16, 332);   
}

const b2 = new Box();
b2.setPosition(150, 300);