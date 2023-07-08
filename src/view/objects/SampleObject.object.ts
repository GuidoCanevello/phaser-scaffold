import ACustomObject from './ACustomObject.objects';
import ViewMediator from '../ViewMediator';

const viewMediator = ViewMediator.getInstance();

/**
 * An example for a Game Object
 */
export default class SampleObject extends ACustomObject {
    private rectangle: Phaser.GameObjects.Rectangle;
    private text: Phaser.GameObjects.Text;

    private objectName: string;

    constructor(scene: Phaser.Scene, x: number, y: number, objectName: string = "Sample Object") {
        super(scene, x, y);

        //* Data
        this.objectName = objectName;

        //* Objects
        this.rectangle = this.scene.add.rectangle(0, 0, 100, 100, 0xff00ff);
        this.add(this.rectangle);

        this.text = this.scene.add.text(0, 0, this.objectName, {
            fontSize: "10px",
            strokeThickness: 0.5,
            align: 'center',
            wordWrap: {
                width: 100
            }
        });
        this.text.setResolution(10);
        this.text.setOrigin(0.5);
        this.add(this.text);

        //* Events
        this.rectangle.setInteractive();
        this.rectangle.on('pointerover', () => {
            this.setHighlighted(true);
        });

        this.rectangle.on('pointerout', () => {
            this.setHighlighted(false);
        });

        this.rectangle.on('pointerup', () => {
            viewMediator.emit('V-SAMPLE-EVENT', this.objectName);
        });
    }

    startMovement(distance: number = 200) {
        const moveSpeed = 1; // The speed at which the object moves (higher = faster)

        this.scene.tweens.add({
            targets: this,
            ease: 'Linear',

            //* Higher duration = slower movement
            duration: 10 * distance / moveSpeed,

            //* The position where to move to
            x: this.x + distance,
            y: this.y,

            yoyo: true,
            repeat: -1,
        });
    }

    setHighlighted(value: boolean) {
        if (value) this.rectangle.setFillStyle(0x00ffff);
        else this.rectangle.setFillStyle(0xff00ff);
    }
}

//* Register the Object
import registerObject from '../utils/registerObject';
registerObject('object_sample', SampleObject);

declare global {
    namespace Phaser {
        namespace GameObjects {
            interface GameObjectFactory {
                /**
                 * A sample object
                 * 
                 * @param x The horizontal starting position for the object
                 * @param y The vertical starting position for the object
                 * @param name The name to display in the object
                 */
                object_sample(x: number, y: number, name?: string): SampleObject;
            }
        }
    }
}