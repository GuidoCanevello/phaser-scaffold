import ACustomLayer from '../layers/ACustomLayer.layer';

/**
 * Registers a New Layer (extended from ACustomLayer) to be used in a scene
 * 
 * @param registeredName The name to be used when creating the layer
 * @param layerClass The class itself
 */
export default function registerLayer<NewLayer extends ACustomLayer>(registeredName: string, layerClass: new (...args: any[]) => NewLayer) {
    Phaser.GameObjects.GameObjectFactory.register(
        registeredName,
        function (this: Phaser.GameObjects.GameObjectFactory, ...params: any[]) {
            return new layerClass(this.scene, ...params);
        }
    );
}