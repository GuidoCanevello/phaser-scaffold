import ACustomLayer from './ACustomLayer.layer';
import SampleUIObject from '../objects/ui/SampleUIObject.view';

/**
 * An example for a Scene Layer
 */
export default class SampleUILayer extends ACustomLayer {
    private _object1: SampleUIObject;

    constructor(scene: Phaser.Scene, children?: Phaser.GameObjects.GameObject[]) {
        super(scene, children);

        //* Objects
        this._object1 = this.scene.add.object_sample_ui(50, 15);
    }

    update(...args: any[]): void {

    }
}

//* Register the Layer
import registerLayer from '../utils/registerLayer';

registerLayer('layer_sample_ui', SampleUILayer);

declare global {
    namespace Phaser {
        namespace GameObjects {
            interface GameObjectFactory {
                /**
                 * A sample ui layer
                 * 
                 * @param children Optional array of objects to add to the layer
                 */
                layer_sample_ui(children?: Phaser.GameObjects.GameObject[]): SampleUILayer;
            }
        }
    }
}