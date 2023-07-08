import '../objects/index';
import '../layers/index';

import ViewMediator from '../ViewMediator';

import ACustomLayer from '../layers/ACustomLayer.layer';
import SampleLayer from '../layers/SampleLayer.layer';

const viewMediator = ViewMediator.getInstance();

/**
 * A Test scene to implement the initial code
 */
export class TestScene extends Phaser.Scene {
    private sceneLayers: ACustomLayer[];

    private sampleLayer: SampleLayer;

    constructor() {
        super({
            key: "GameScene"
        });
    }

    init(): void { }

    preload(): void { }

    create(): void {
        //* Layers
        this.sceneLayers = [];

        this.sampleLayer = this.add.layer_sample();
        this.sceneLayers.push(this.sampleLayer);

        //* Events
        viewMediator.on('V-SAMPLE-EVENT', (name: string) => {
            console.log(`An event is called on the object: ${name}`);
        });
    }

    update(time: number, delta: number): void {
        this.sceneLayers.forEach(l => l.update(time, delta));
    }
}