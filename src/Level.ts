import { Globals } from "./Globals"
import { Block } from "./Block"
import { BlockGenerator } from "./BlockGenerator"

// Level abstract
export class Level {
    public blocks: Array<Block> = new Array();

    // Initialise difficulty levl   
    constructor() { }

    generate(difficulty): void {
        if ((1 % difficulty) == 1 || !difficulty) {    // Check if difficulty value exceeds max (1)
            console.log("FAILED TO GENERATE LEVEL::INVALID DIFFICULTY!");
            return;
        }

        BlockGenerator.GenerateBlocks(Globals.ROW_COUNT, Globals.COLUMN_COUNT, Globals.UNIQUE_BLOCK_COUNT, difficulty, this.blocks);
    }
}