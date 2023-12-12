import ACustomObject from '../ACustomObject.objects';
import ViewMediator from '../../ViewMediator';

const viewMediator = ViewMediator.getInstance();

/**
 * An example for a Game Object
 */
export default class SampleUIObject extends ACustomObject {
    private _rectangle: Phaser.GameObjects.Rectangle;
    private _text: Phaser.GameObjects.Text;

    constructor(scene: Phaser.Scene, x: number, y: number, objectName: string = "Sample Object") {
        super(scene, x, y);

        //* Data

        //* Objects
        this._rectangle = this.scene.add.rectangle(0, 0, 100, 30, 0xffffff);
        this.add(this._rectangle);

        this._text = this.scene.add.text(0, 0, "Press Me", {
            fontSize: "10px",
            strokeThickness: 0.3,
            align: 'center',
            wordWrap: {
                width: 100
            },
            color: '#000',
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
            viewMediator.emit('V-SAMPLE-UI-EVENT');
        });
    }

    /**
     * Changes whether the object is highlighted on screen
     * 
     * @param value The new value
     */
    setHighlighted(value: boolean) {
        if (value) this._rectangle.setFillStyle(0xf00fff);
        else this._rectangle.setFillStyle(0xffffff);
    }
}

//* Register the Object
import registerObject from '../../utils/registerObject';
registerObject('object_sample_ui', SampleUIObject);

declare global {
    namespace Phaser {
        namespace GameObjects {
            interface GameObjectFactory {
                /**
                 * A sample ui object
                 * 
                 * @param x The horizontal starting position for the object
                 * @param y The vertical starting position for the object
                 */
                object_sample_ui(x: number, y: number): SampleUIObject;
            }
        }
    }
}