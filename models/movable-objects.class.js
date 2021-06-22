class MovableObjects {

    x = 120;
    y = 20;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 1;
    speed = 0.5;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGrund() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(object) {
        return this.x + this.width > object.x &&
            this.y + this.height > object.y &&
            this.x < object.x &&
            this.y < object.y + object.height;
    }

    isAboveGrund() {
        return this.y < 155
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x += this.speed;
    };

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 20;
    }

    playAnimation(img) {
        let i = this.currentImage % img.length;
        let path = img[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}