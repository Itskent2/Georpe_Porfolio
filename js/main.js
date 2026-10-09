function startGame() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'game-container',
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: { debug: false }
        },
        scene: [PreloadScene, Level1Scene, UIScene]
    };
    new Phaser.Game(config);
}