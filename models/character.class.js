class Character extends MovableObjects {

    height = 280;
    y = 155;
    speed = 3;
    IMG_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-26.png'
    ];
    world;
    currentImage = 1; /* Verhindert das beim Start zwei mal das gleiche Bild angezeigt wird  */

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMG_WALKING);
        this.animate();
    }

    animate() {
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.levelEndX) {
                this.otherDirection = false;
                this.x += this.speed;
            }
            if(this.world.keyboard.LEFT && this.x > 120) {
                this.otherDirection = true
                this.x -= this.speed;
            }
            this.world.camera_x = -this.x + 120
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT) {
                let i = this.currentImage % this.IMG_WALKING.length;
                let path = this.IMG_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 1000 / 8);
    }

    jump() {
        console.log('Jump')
    }

}