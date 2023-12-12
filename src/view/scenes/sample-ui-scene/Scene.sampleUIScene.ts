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
export default class SampleUIScene extends ACustomScene {
    protected _viewState: ACustomSceneState;
    protected _sceneLayers: ACustomLayer[];

    constructor() {
        super({
            key: "SampleUIScene"
        });
    }

    init(data: { state: ACustomSceneState }): void {
        this._viewState = data.state;
    }

    preload(): void { }

    create(): void {
        //* Layers
        this._sceneLayers = [];

        const sampleUILayer = this.add.layer_sample_ui();
        this._sceneLayers.push(sampleUILayer);

        //* Events

    }

    update(time: number, delta: number): void {
        super.update(time, delta);
    }
}