
import ACustomLayer from '../layers/ACustomLayer.layer';
import ACustomSceneState from './ACustomSceneState';

/**
 * To create a custom scene, a class should extend this one
 */
export default abstract class ACustomScene extends Phaser.Scene {
    protected abstract _viewState: ACustomSceneState;

    /**
     * Every layer on the scene (the last layer is the one that renders on top of the others)
     */
    protected abstract _sceneLayers: ACustomLayer[];

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config);
    }

    abstract init(...args): void;

    abstract preload(...args): void;

    abstract create(...args): void;

    update(time: number, delta: number): void {
        this._sceneLayers.forEach(l => l.update(time, delta));
    }

    /**
     * Finds the layer in the scene from a received class
     * 
     * @param layerClassName The name of the Layer class
     * @returns A layer from the sceneLayers array
     */
    protected getLayer<layerClass>(layerClassName: new (...a: any) => ACustomLayer) {
        return this._sceneLayers.find(l => l instanceof layerClassName) as layerClass;
    }
};