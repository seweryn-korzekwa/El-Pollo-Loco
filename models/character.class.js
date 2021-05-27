class Character extends MovableObjects {

    height = 280;
    y = 155;

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-correcciขn/2.Secuencia_caminata/W-21.png');
    }

    jump() {
        console.log('Jump')
    }

}