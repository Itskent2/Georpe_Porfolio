class UIScene extends Phaser.Scene {
    constructor() { super('UIScene'); }

    create() {
        this.dialogContainer = this.add.container(100, 430).setVisible(false);

        const bg = this.add.graphics();
        bg.fillStyle(0x001428, 0.9);
        bg.lineStyle(2, 0x00e5ff, 1);
        bg.fillRect(0, 0, 600, 140);
        bg.strokeRect(0, 0, 600, 140);
        this.dialogContainer.add(bg);

        const face = this.add.image(10, 10, 'hero-portrait').setOrigin(0);
        face.setDisplaySize(120, 120);

        const portraitFrame = this.add.graphics();
        portraitFrame.lineStyle(1, 0x00e5ff, 0.8);
        portraitFrame.strokeRect(9, 9, 122, 122);

        this.dialogContainer.add(face);
        this.dialogContainer.add(portraitFrame);

        this.nameText = this.add.text(145, 15, '', {
            fontFamily: 'Courier New', fontSize: '20px', fill: '#ffcc00', fontStyle: 'bold'
        });
        this.bodyText = this.add.text(145, 45, '', {
            fontFamily: 'Courier New', fontSize: '16px', fill: '#00e5ff', wordWrap: { width: 430 }
        });
        this.promptText = this.add.text(400, 115, '[ PRESS SPACE TO CONTINUE ]', {
            fontFamily: 'Courier New', fontSize: '12px', fill: '#ffcc00'
        });

        this.dialogContainer.add([this.nameText, this.bodyText, this.promptText]);
    }

    showDialogue(name, textContent) {
        this.dialogContainer.setVisible(true);
        this.nameText.setText(name);
        this.bodyText.setText('');

        let charIndex = 0;
        this.time.addEvent({
            delay: 30,
            callback: () => {
                this.bodyText.text += textContent[charIndex];
                charIndex++;
            },
            repeat: textContent.length - 1
        });
    }

    clearDialogue() {
        this.dialogContainer.setVisible(false);
    }
}