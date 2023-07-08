import ACustomLayer from './ACustomLayer.layer';
import SampleObject from '../objects/SampleObject.object';

/**
 * An example for a Scene Layer
 */
export default class SampleLayer extends ACustomLayer {
    private object1: SampleObject;
    private object2: SampleObject;

    constructor(scene: Phaser.Scene, children?: Phaser.GameObjects.GameObject[]) {
        super(scene, children);

        //* Objects
        this.object1 = this.scene.add.object_sample(100, 100, "Object 1");

        this.object2 = this.scene.add.object_sample(400, 200);

        this.object1.startMovement(400);
        this.object2.startMovement();
    }

    update(...args: any[]): void {

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