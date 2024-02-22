class Entity {
    docElement;
    posX = 0;
    posY = 0;
    speed = 1;

    alive = true;

    constructor(docElementID) {
        let element = document.createElement('div');
        element.id = docElementID;
        element.classList.add('entity');
        this.docElement = element;
        body.appendChild(this.docElement);
        this.docElement.style.visibility = 'hidden';
        //this.#docElement = document.getElementById(docElementID);
        window.requestAnimationFrame(this.#staticLoop);
    }

    staticStart = () => {
        this.alive = true;
        this.docElement.style.visibility = null;
        //body.appendChild(this.docElement);
    }
    #staticLoop = () => {
        if (this.alive) {
            this.loop();
        }
        window.requestAnimationFrame(this.#staticLoop);
    }
    
    // Sobreescribir
    loop = () => {
    }
    start = () => {
        this.staticStart();
    }
    
    move = (x, y) => {
        this.posX += x * this.speed * deltaTime;
        this.posY += y * this.speed * deltaTime;
        this.posX = Math.round(this.posX);
        this.posY = Math.round(this.posY);

        this.docElement.style.left = this.posX + 'px';
        this.docElement.style.top = this.posY + 'px';
        //this.docElement.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
    }

    free = () => {
        if (this.alive) {
            this.docElement.style.visibility = 'hidden';
            this.alive = false;
        }
    }
}