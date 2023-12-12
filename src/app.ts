import "phaser";
import SampleScene from './view/scenes/sample-scene/Scene.sampleScene';
import SampleUIScene from './view/scenes/sample-ui-scene/Scene.sampleUIScene';
import { GAME_HEIGHT, GAME_WIDTH } from "./config/view.consts";

const config: Phaser.Types.Core.GameConfig = {
  // Game title
  title: "Project Scaffold",

  // Resolution
  width: GAME_WIDTH,
  height: GAME_HEIGHT,

  // HTML Config
  parent: "game",
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  // Set to true to avoid automatic anti-aliasing
  pixelArt: true,

  // Scenes
  scene: [SampleScene, SampleUIScene],
};

export class MainGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new MainGame(config);
};

// TODO Add Sample Asset
// TODO Add Sample Controller
// TODO Add Sample Model
// TODO Add Sample utils
// TODO Update README