let deltaTime = 0;
let previousTimeStamp = 0;
let body;

let Player;
let bullet;

var mainCanvas;
var ctx;
const img = new Image();

document.addEventListener('DOMContentLoaded', () => {
    body = document.querySelector('body');
    console.log(window);
    
    Player = new PlayerClass();
    Player.start();
    bullet = new Bullet();
    bullet.start(1, 1);

    mainCanvas = document.querySelector('canvas');
    
    ctx = mainCanvas.getContext('2d');

    img.src = 'img/Player.png';

    window.requestAnimationFrame(mainloop);
});

img.addEventListener('load', () => {
    ctx.drawImage(img, Player.posX, Player.posY);
})


function mainloop(timestamp) {
    calculateDeltaTIme(timestamp);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, Player.posX - img.width / 2, Player.posY - img.height / 2);
    window.requestAnimationFrame(mainloop);
}


function calculateDeltaTIme(timestamp) {
    deltaTime = (timestamp - previousTimeStamp) / 1000;
    previousTimeStamp = timestamp;
}