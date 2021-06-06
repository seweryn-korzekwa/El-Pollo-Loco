class Level {
    enemies;
    clouds;
    backgroundsObjects;
    levelEndX = 2757;

    constructor(enemies, clouds, backgroundsObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundsObjects = backgroundsObjects;
    }
}