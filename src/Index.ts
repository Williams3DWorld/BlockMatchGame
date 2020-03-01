import * as PIXI from "pixi.js";

window.onload = function() {
  console.log("Game loaded!");

  // Set up canvas size and background
  let app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x0d0d0d
  });
  document.body.appendChild(app.view);

  // URL Cotnent
  app.loader.add("block", "assets/Player.png"); // Store url content

  // Load atlas map
  let atlas_texture = PIXI.BaseTexture.from(app.loader.resources["block"].url); // Load url content

  // Crop sub-images from atlas
  let sub_tex_0 = new PIXI.Texture( // Sub texture from atlas
    atlas_texture,
    new PIXI.Rectangle(0, 0, 32, 32)
  );

  // Set up player
  let block = new PIXI.Sprite(sub_tex_0); // Spritesheet
  block.anchor.set(0.5); // Center pivot
  block.x = app.view.width / 2; // Position x
  block.y = app.view.height / 2; // Position y
  app.stage.addChild(block); // Add to the world
};
