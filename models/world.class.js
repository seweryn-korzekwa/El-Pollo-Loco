class World {

    ctx;
    canvas;
    character = new Character();
    keyboard;
    camera_x = 0;

    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundsObjects = level1.backgroundsObjects;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keybeard;
        this.setWorld();
    }

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