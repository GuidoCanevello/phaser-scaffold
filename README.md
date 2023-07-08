# Phaser Scaffold

This is a base scaffold for a new Phaser project to be built with. Its written in **Typescript**, using **Webpack** to build the project and **live-server** to facilitate ease of development with hot-reload.

## Structure

### *assets* folder

Stores every asset used in the game (sprites, *.tmx* files, etc.).

### *config* folder

Stores configuration files, such as constant variables for in-game values (game width and height, view-objects sizes, health values, etc.).

### *logic* folder

Stores the game's logic files.

### *typescript* folder

Stores types and interafce files (*.d.ts* ) for either logic or view objects.

### *view* folder

Stores the Phaser elements that render the game on-screen

* ***layers* folder:** Each layer is composed of view objects, handling behaviour between them and the scene.
* ***objects* folder:** Stores the objects from the scene.
* ***scenes* folder:** Stores scenes from the game.
* ***utils* folder:** Additional functions used in the view.
* **ViewMediator.ts:** Object that handles communication between view objects

### app.ts

Creates the game instance with the provided configuration.
