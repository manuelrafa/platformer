class PlayerClass extends Entity {
    #keys = {
        left: false,
        right: false,
        up: false,
        down: false
    }

    constructor() {
        super('player_element');
        this.speed = 150;
        window.addEventListener('keydown', (e) => {
            switch (e.key) {
                case 'a':
                    this.#keys.left = true;
                    break;
                case 'd':
                    this.#keys.right = true;
                    break;
                case 'w':
                    this.#keys.up = true;
                    break;
                case 's':
                    this.#keys.down = true;
                    break;
            }
        });
        window.addEventListener('keyup', (e) => {
            switch (e.key) {
                case 'a':
                    this.#keys.left = false;
                    break;
                case 'd':
                    this.#keys.right = false;
                    break;
                case 'w':
                    this.#keys.up = false;
                    break;
                case 's':
                    this.#keys.down = false;
                    break;
            }
        });
        window.addEventListener('mouseup', (e) => {
            this.shootBullet(e.x, e.y);
        })
    }

    loop = () => {
        this.#handleMovement();
    }


    #handleMovement = () => {
        let x = 0, y = 0;

        if (this.#keys.right) {
            if (! this.#keys.left) {
                x = 1;
            }
        }
        else {
            if (this.#keys.left) {
                x = -1;
            }
        }
        if (this.#keys.down) {
            if (! this.#keys.up) {
                y = 1;
            }
        }
        else {
            if (this.#keys.up) {
                y = -1;
            }
        }

        if (x && y) {
            x *= 0.75;
            y *= 0.75;
        }

        this.move(x, y);
    }


    shootBullet = (directionX, directionY) => {
        const sum = Math.abs(directionX - this.posX) + Math.abs(directionY - this.posY);
        directionX = (directionX - this.posX) / sum;
        directionY = (directionY - this.posY) / sum;

        console.log('---------');
        console.log(sum);
        console.log(directionX);
        console.log(directionY);
        console.log(Math.abs(directionX - this.posX) + Math.abs(directionY - this.posY));
        console.log('---------');
        

        bullet.start(this.posX, this.posY, directionX, directionY);
    }
}