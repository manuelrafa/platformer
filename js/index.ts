const body = document.querySelector('body') as HTMLBodyElement;
const MainCanvas = new Canvas(document.querySelector('canvas#main_canvas') as HTMLCanvasElement);

const p = new Player();
p.setPosition(50, 300);
//const b = new Box();
const b2 = new Box();
b2.setPosition(150, 300);