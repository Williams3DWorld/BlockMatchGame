import * as PIXI from "pixi.js";
import { Globals } from "./Globals"
import { Game } from "./Game"
import { Block, BlockType } from "./Block"
import { ContentManager } from "./ContentManager"
import { SearchParameters } from "./Dictionary"
import { Level } from "./Level";

// Initialisation
window.onload = function () {
  // Initialise PIXI application
  Globals.InitialiseApp();

  // Initialise content
  ContentManager.PreloadContent();

  // Set up callback funcitons during content load
  Globals.app.loader.onProgress.add(showProgress);
  Globals.app.loader.onComplete.add(doneLoading);
  Globals.app.loader.onError.add(reportError);

  // Load all content
  Globals.app.loader.load();
};

// Debug loading performance
function showProgress(e) {
  console.log(e.progress);
}

// Debug errors during load-time
function reportError(e) {
  console.log(`ERROR: ${e.message}`);
}

// Things to call after content has finished loading
function doneLoading(e) {
  console.log("PRE-LOADED CONTENT!");

  // Initialise game content
  ContentManager.PackContent();

  // Initialise game object - level 1
  Globals.game = new Game(ContentManager.levels["enchanted_caves"]);

  // Call game loop for logic
  Globals.app.ticker.add(update);
}

function initialiseBlocks() {
  // Load blocks here... DICTIONARY!
  let block_list = new SearchParameters();
  block_list.SearchFor[0] = new Block(BlockType.BLOCK_TYPE_DIAMOND, 75, 75);
}

// Game logic
function update(delta) {
  Globals.game.update();
}