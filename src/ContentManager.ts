import * as PIXI from "pixi.js";
import { SearchParameters } from "./Dictionary"
import { Globals } from "./Globals"
import { Level } from "./Level"


// Contains a pool for data storage
export class ContentManager {

    public static textures: Array<PIXI.Texture> = new Array();
    public static levels: SearchParameters = new SearchParameters();

    public static PreloadContent(): void {
        // Pre-load assets
        Globals.app.loader.baseUrl = "assets";  // Set the default content url
        Globals.app.loader.add("block_atlas", "blocks.png");  // Load the block atlas map
    }

    public static PackContent(): void {
        let atlas = PIXI.BaseTexture.from(Globals.app.loader.resources["block_atlas"].url);
        ContentManager.textures.push(new PIXI.Texture(atlas, new PIXI.Rectangle(0, 0, Globals.BLOCK_SIZE, Globals.BLOCK_SIZE)));
        ContentManager.textures.push(new PIXI.Texture(atlas, new PIXI.Rectangle(Globals.BLOCK_SIZE, 0, Globals.BLOCK_SIZE, Globals.BLOCK_SIZE)));
        ContentManager.textures.push(new PIXI.Texture(atlas, new PIXI.Rectangle(Globals.BLOCK_SIZE * 2, 0, Globals.BLOCK_SIZE, Globals.BLOCK_SIZE)));
        ContentManager.textures.push(new PIXI.Texture(atlas, new PIXI.Rectangle(0, Globals.BLOCK_SIZE, Globals.BLOCK_SIZE, Globals.BLOCK_SIZE)));
        ContentManager.textures.push(new PIXI.Texture(atlas, new PIXI.Rectangle(Globals.BLOCK_SIZE, Globals.BLOCK_SIZE, Globals.BLOCK_SIZE, Globals.BLOCK_SIZE)));
        ContentManager.textures.push(new PIXI.Texture(atlas, new PIXI.Rectangle(Globals.BLOCK_SIZE * 2, Globals.BLOCK_SIZE, Globals.BLOCK_SIZE, Globals.BLOCK_SIZE)));

        // Load levels
        ContentManager.levels["hidden_temple"] = new Level();
        ContentManager.levels["enchanted_caves"] = new Level();
        ContentManager.levels["captians_keep"] = new Level();
    }
}