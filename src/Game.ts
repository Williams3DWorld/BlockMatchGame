import * as PIXI from "pixi.js";
import { Level } from "./Level"

export class Game {
    public current_level: Level;

    // Generate a game instance from level input. There are three levels in total (0 - 2) 
    constructor(level) {
        if (!level) {
            console.log("FAILED TO LOAD GAME::INVALID LEVEL OBJECT!");
            return;
        }

        // Assign and generate current level
        this.current_level = level;
        level.generate(0.99);
    }

    public switchLevel(new_level) { }

    // Update game logic
    public update(): void {

    }
}