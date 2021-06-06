class World {

    ctx;
    canvas;
    character = new Character();
    keyboard;
    camera_x = 0;

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
        new BackgroundsObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

        new BackgroundsObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundsObjects('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new BackgroundsObjects('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new BackgroundsObjects('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        new BackgroundsObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
        new BackgroundsObjects('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
        new BackgroundsObjects('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
        new BackgroundsObjects('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

        new BackgroundsObjects('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new BackgroundsObjects('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
        new BackgroundsObjects('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
        new BackgroundsObjects('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3)
    ]

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.backgroundsObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.ctx.translate(-this.camera_x, 0);

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
        if (object.otherDirection) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * (-1);
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        if (object.otherDirection) {
            object.x = object.x * (-1);
            this.ctx.restore();
        }
    }

    setWorld() {
        this.character.world = this;
    }
}