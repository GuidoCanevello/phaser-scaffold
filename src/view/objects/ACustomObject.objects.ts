/**
 * To create a custom object a class should extend this one
 */
export default abstract class ACustomObject extends Phaser.GameObjects.Container {
    protected _isActive: boolean;

    constructor(scene: Phaser.Scene, x: number, y: number, children?: Phaser.GameObjects.GameObject[]) {
        super(scene, x, y, children);

        this._isActive = false;
    }

    /**
     * True if the object is active on screen
     */
    get isActive(): boolean {
        return this._isActive
    }

    /**
     * Show the object on screen
     */
    show() {
        this._isActive = true;
    }

    /**
     * Hide the object from the screen
     */
    hide() {
        this._isActive = false;
    }

    /**
     * Resets the state of the object
     */
    reset() {
        this._isActive = false;
    }
}