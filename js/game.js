let canvas;
let world;
let keybeard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
}

window.addEventListener("keydown", event => {
    switch (event.code) {
        case 'ArrowRight':keybeard.RIGHT = true; break;
        case 'ArrowLeft': keybeard.LEFT = true; break;
        case 'ArrowUp': keybeard.UP = true; break;
        case 'ArrowDown': keybeard.DOWN = true; break;
        case 'Space': keybeard.SPACE = true; break;
    }
});

window.addEventListener("keyup", event => {
    switch (event.code) {
        case 'ArrowRight': keybeard.RIGHT = false; break;
        case 'ArrowLeft': keybeard.LEFT = false; break;
        case 'ArrowUp': keybeard.UP = false; break;
        case 'ArrowDown': keybeard.DOWN = false; break;
        case 'Space': keybeard.SPACE = false; break;
    }
});