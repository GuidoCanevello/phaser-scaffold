import ACustomObject from '../objects/ACustomObject.objects';

/**
 * Registers a New Custom Object (extended from ACustomObject) to be used in a scene
 * 
 * @param registeredName The name to be used when creating the object
 * @param objectClass The class itself
 */
export default function registerObject<NewObject extends ACustomObject>(registeredName: string, objectClass: new (...args: any[]) => NewObject) {
    Phaser.GameObjects.GameObjectFactory.register(
        registeredName,
        function (this: Phaser.GameObjects.GameObjectFactory, x: number, y: number, ...params: any[]) {
            const object = new objectClass(this.scene, x, y, ...params);

            this.displayList.add(object); // renders every frame
            // this.displayList.add(object); // updates every frame

            return object;
        }
    );
}