import * as PIXI from "pixi.js";
import { Globals } from "./Globals"
import { ContentManager } from "./ContentManager"

/**
 * Distinctive block types for matching
 */
export enum BlockType {
    BLOCK_TYPE_DIAMOND,
    BLOCK_TYPE_LEFT_ARROWS,
    BLOCK_TYPE_SWIRES,
    BLOCK_TYPE_SQUARE,
    BLOCK_TYPE_DOWN_ARROWS,
    BLOCK_TYPE_KNOT
}

/**
 * Implementation type inside the block array
 */
export enum BlockImplementationType {
    BIT_TOP_LEFT,
    BIT_TOP_MID,
    BIT_TOP_RIGHT,
    BIT_LEFT_MID,
    BIT_MID_MID,
    BIT_RIGHT_MID,
    BIT_BOTTOM_LEFT,
    BIT_BOTTOM_MID,
    BIT_BOTTOM_RIGHT
};

/**
 * Main block object
 */
export class Block {
    public type: number;
    public implementation_type: number;
    public active: boolean;
    public sprite: PIXI.Sprite;
    public adjacents: Array<Block> = new Array();

    constructor(type, pos_x, pos_y, adjacents?) {
        this.type = type;
        this.active = false;
        this.sprite = new PIXI.Sprite(ContentManager.textures[type]);
        this.sprite.anchor.set(0.5);
        this.sprite.width = this.sprite.width * Globals.VIEW_SCALE;
        this.sprite.height = this.sprite.height * Globals.VIEW_SCALE;
        this.sprite.x = pos_x * Globals.VIEW_SCALE;
        this.sprite.y = pos_y * Globals.VIEW_SCALE;
        this.sprite.interactive = true;

        // Assign input callback here...
        this.sprite.on("pointerdown", function () { this.active = true; });
        //this.sprite.on("pointerup", function () { this.active = false; });

        Globals.app.stage.addChild(this.sprite);

        if (adjacents)
            this.adjacents = adjacents;
    }

    public assignAdjacent(adj: Array<Block>) {
        if (!adj && adj.length <= 0) {
            console.log(`FAILED TO ASSIGN ADJACENT BLOCK TO TYPE ${this.type}: ADJACENT BLOCK IS UNDEFINED!`);
            return;
        }

        this.adjacents = adj;
    }
}