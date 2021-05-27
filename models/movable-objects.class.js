class MovableObjects {

    x = 120;
    y = 20;
    height = 150;
    width = 100;
    img;
    imageCache = {};

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
        console.log('Moving right')
    };

    moveLeft() {
        console.log('Moving left')
    };
}