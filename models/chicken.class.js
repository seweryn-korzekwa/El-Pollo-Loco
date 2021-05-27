class Chicken extends MovableObjects {

    y = 360;
    height = 60;
    width = 80;

    constructor() {
        super().loadImage('img/3.Secuencias_Enemy_b sico/Versi¢n_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = 200 + Math.random() * 500
    }
    
}