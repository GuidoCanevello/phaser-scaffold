import ACustomLayer from './ACustomLayer.layer';
import SampleObject from '../objects/entities/SampleObject.view';

/**
 * An example for a Scene Layer
 */
export default class SampleLayer extends ACustomLayer {
    private _object1: SampleObject;
    private _object2: SampleObject;

    private _hasMoved: boolean;

    constructor(scene: Phaser.Scene, children?: Phaser.GameObjects.GameObject[]) {
        super(scene, children);

        //* Data
        this._hasMoved = false;

        //* Objects
        this._object1 = this.scene.add.object_sample(100, 100, "Object 1");

        this._object2 = this.scene.add.object_sample(400, 200);

        this._object1.startMovement(400);
        this._object2.startMovement();
    }

    update(...args: any[]): void {

    }

    moveObjects() {
        this._object1.setPosition(100, 100);
        this._object2.setPosition(400, 200);

        if (this._hasMoved) {
            this._object1.startMovement(400);
            this._object2.startMovement();
        } else {
            this._object1.startMovement(200);
            this._object2.startMovement(100);
        }

        this._hasMoved = !this._hasMoved;
    }
}

//* Register the Layer
import registerLayer from '../utils/registerLayer';

registerLayer('layer_sample', SampleLayer);

declare global {
    namespace Phaser {
        namespace GameObjects {
            interface GameObjectFactory {
                /**
                 * A sample layer
                 * 
                 * @param children Optional array of objects to add to the layer
                 */
                layer_sample(children?: Phaser.GameObjects.GameObject[]): SampleLayer;
            }
        }
    }
}