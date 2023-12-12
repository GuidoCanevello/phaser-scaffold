import '../../objects/index';
import '../../layers/index';

import ViewMediator from '../../ViewMediator';

import ACustomScene from '../ACustomScene'
import ACustomSceneState from '../ACustomSceneState';

import ACustomLayer from '../../layers/ACustomLayer.layer';

const viewMediator = ViewMediator.getInstance();

/**
 * A Sample scene
 */
export default class SampleScene extends ACustomScene {
    protected _viewState: ACustomSceneState;
    protected _sceneLayers: ACustomLayer[];

    constructor() {
        super({
            key: "SampleScene",
        });
    }

    init(): void { }

    preload(): void { }

    create(): void {
        //* Layers
        this._sceneLayers = [];

        const sampleLayer = this.add.layer_sample();
        this._sceneLayers.push(sampleLayer);

        //* Events
        viewMediator.on('V-SAMPLE-EVENT', (name: string) => {
            console.log(`An event is called on the object: ${name}`);
        });

        viewMediator.on('V-SAMPLE-UI-EVENT', () => {
            console.log("Change the movement");
            sampleLayer.moveObjects();
        });

        //* UI Scene
        this.scene.launch("SampleUIScene", { state: this._viewState });
    }

    update(time: number, delta: number): void {
        super.update(time, delta);
    }
}