class World {

    ctx;
    canvas;
    character = new Character();

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    clouds = [
        new cloud()
    ]

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(object => {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        });
        this.clouds.forEach(object => {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        });
        let self = this;
        requestAnimationFrame(function () {
            self.draw
        });
    }
}