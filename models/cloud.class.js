class cloud extends MovableObjects {

    y = 50;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png')
        this.x = Math.random() * 500;
        this.animate();

    }

    /* TODO moveLeft -> setInetrval */
    animate() {
        this.moveLeft()
    }

}