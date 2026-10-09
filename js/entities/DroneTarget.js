class DroneTarget extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'target_drones');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setVelocityX(-150);
    }

    update() {
        if (this.x < -50) {
            this.destroy(); // Remove if it flies past you
        }
    }
}