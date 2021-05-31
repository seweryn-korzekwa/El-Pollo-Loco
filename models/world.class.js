class World {

    ctx;
    canvas;
    character = new Character();
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keybeard;
        this.setWorld();
    }


    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    clouds = [
        new cloud()
    ]

    backgroundsObjects = [
        new BackgroundsObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundsObjects('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundsObjects('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundsObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0)
    ]

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundsObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);

        let self = this;
        requestAnimationFrame( function () {
            self.draw();
        } )
    }

    addObjectsToMap(objects) {
        objects.forEach( obj => {
            this.addToMap(obj)
        })
    }

    addToMap(object) {
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
    }

    setWorld() {
        this.character.world = this;
    }
}