class PreloadScene extends Phaser.Scene {
    constructor() { super('PreloadScene'); }

    preload() {
        this.load.json('portfolioData', 'data/portfolio.json');

        // Portrait for dialogue boxes
        this.load.image('hero-portrait', 'assets/sprites/clark.jpeg');

        // Note: Using placeholder graphic generation until actual sprite images are loaded.
        // Once you add superman.png and target_drones.png to assets/sprites/, replace these generators with:
        // this.load.image('superman', 'assets/sprites/superman.png');
        // this.load.image('target_drones', 'assets/sprites/target_drones.png');

        const playerGraphics = this.make.graphics({ x: 0, y: 0, add: false });
        playerGraphics.fillStyle(0x0055ff);
        playerGraphics.fillRect(0, 0, 32, 32);
        playerGraphics.generateTexture('superman', 32, 32);

        const droneGraphics = this.make.graphics({ x: 0, y: 0, add: false });
        droneGraphics.fillStyle(0xff0000);
        droneGraphics.fillRect(0, 0, 32, 32);
        droneGraphics.generateTexture('target_drones', 32, 32);

        const laserGraphics = this.make.graphics({ x: 0, y: 0, add: false });
        laserGraphics.fillStyle(0xffcc00);
        laserGraphics.fillRect(0, 0, 20, 4);
        laserGraphics.generateTexture('laser', 20, 4);
    }

    create() {
        this.scene.start('Level1Scene');
        this.scene.launch('UIScene');
    }
}