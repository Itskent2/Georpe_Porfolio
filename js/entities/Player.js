class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'superman');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);

        this.cursors = scene.input.keyboard.createCursorKeys();
        this.spaceBar = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.lastFired = 0;
    }

    update(time) {
        this.setVelocity(0);

        if (this.cursors.left.isDown) this.setVelocityX(-300);
        else if (this.cursors.right.isDown) this.setVelocityX(300);

        if (this.cursors.up.isDown) this.setVelocityY(-300);
        else if (this.cursors.down.isDown) this.setVelocityY(300);

        if (this.spaceBar.isDown && time > this.lastFired) {
            this.scene.fireLaser(this.x + 16, this.y);
            this.lastFired = time + 300; // Fire rate limit
        }
    }
}