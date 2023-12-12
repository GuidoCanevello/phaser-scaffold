import ACustomObject from '../ACustomObject.objects';
import ViewMediator from '../../ViewMediator';

const viewMediator = ViewMediator.getInstance();

/**
 * An example for a Game Object
 */
export default class SampleObject extends ACustomObject {
    private _rectangle: Phaser.GameObjects.Rectangle;
    private _text: Phaser.GameObjects.Text;

    private _tween: Phaser.Tweens.Tween;

    private _objectName: string;

    constructor(scene: Phaser.Scene, x: number, y: number, objectName: string = "Sample Object") {
        super(scene, x, y);

        //* Data
        this._objectName = objectName;

        //* Objects
        this._rectangle = this.scene.add.rectangle(0, 0, 100, 100, 0xff00ff);
        this.add(this._rectangle);

        this._text = this.scene.add.text(0, 0, this._objectName, {
            fontSize: "10px",
            strokeThickness: 0.5,
            align: 'center',
            wordWrap: {
                width: 100
            }
        });
        this._text.setResolution(10);
        this._text.setOrigin(0.5);
        this.add(this._text);

        //* Events
        this._rectangle.setInteractive();
        this._rectangle.on('pointerover', () => {
            this.setHighlighted(true);
        });

        this._rectangle.on('pointerout', () => {
            this.setHighlighted(false);
        });

        this._rectangle.on('pointerup', () => {
            viewMediator.emit('V-SAMPLE-EVENT', this._objectName);
        });
    }

    /**
     * Starts moving the object in a horizontal line, back and forth
     * 
     * @param distance The distance for the object to move
     */
    startMovement(distance: number = 200) {
        if (this._tween != undefined) this._tween.remove();
        
        const moveSpeed = 1; // The speed at which the object moves (higher = faster)

        this._tween = this.scene.tweens.add({
            targets: this,
            ease: 'Linear',

            //* Higher duration = slower movement
            duration: 10 * distance / moveSpeed,

            //* The position where to move to
            x: this.x + distance,
            y: this.y,

            //* Move the object back and forth
            yoyo: true,
            repeat: -1,
        });
    }

    /**
     * Changes whether the object is highlighted on screen
     * 
     * @param value The new value
     */
    setHighlighted(value: boolean) {
        if (value) this._rectangle.setFillStyle(0x00ffff);
        else this._rectangle.setFillStyle(0xff00ff);
    }
}

//* Register the Object
import registerObject from '../../utils/registerObject';
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