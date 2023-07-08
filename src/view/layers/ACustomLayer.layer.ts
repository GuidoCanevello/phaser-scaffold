/**
 * To create a custom layer for a scene, a class should extend this one
 */
export default abstract class ACustomLayer extends Phaser.GameObjects.Layer {
    protected _isActive: boolean;

    constructor(scene: Phaser.Scene, children?: Phaser.GameObjects.GameObject[]) {
        super(scene, children);

        scene.add.existing(this);
        this._isActive = false;
    }

    /**
     * True if the layer is active on screen
     */
    get isActive(): boolean {
        return this._isActive;
    }

    /**
     * Updates the state of objects in the layer
     */
    abstract update(...args: any[]): void;

    /**
     * Show the layer on screen
     */
    show() {
        this._isActive = true;
    }

    /**
     * Hide the layer from the screen
     */
    hide() {
        this._isActive = false;
    }
}