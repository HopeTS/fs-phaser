import Phaser from "phaser";

import { baseSceneConfig } from "@config";

/** Base class for scenes with default configurations */
class DefaultScene extends Phaser.Scene {
  public readonly CONFIG: typeof baseSceneConfig;

  constructor(key: string) {
    super(key);

    this.CONFIG = baseSceneConfig;
  }

  //////////////////////////////////////////////////////////////////////////////
  // BEGIN LIFECYCLE METHODS
  //////////////////////////////////////////////////////////////////////////////

  preload() {}

  create() {
    this.add.image(0, 0, "sky").setOrigin(0);
  }

  update() {}

  //////////////////////////////////////////////////////////////////////////////
  // END LIFECYCLE METHODS
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // BEGIN LOGIC FUNCTIONS
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // END LOGIC FUNCTIONS
  //////////////////////////////////////////////////////////////////////////////
}

export default DefaultScene;