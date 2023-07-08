import "phaser";
import { TestScene } from './view/scenes/testScene.scene';
// import { GAME_HEIGHT, GAME_WIDTH } from "./config/view.consts";

const config: Phaser.Types.Core.GameConfig = {
  // Game title
  title: "Project Pong",

  // Resolution
  width: 640,
  height: 360,

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
  scene: [TestScene],
};

export class MainGame extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

window.onload = () => {
  var game = new MainGame(config);
};