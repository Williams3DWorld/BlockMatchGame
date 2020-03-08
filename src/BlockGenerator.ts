import { Globals } from "./Globals"
import { Block, BlockType } from "./Block"

export namespace BlockGenerator {

    // Randomise integer range
    export function RandomRange(min, max) {
        return (Math.floor(Math.random() * (max - min) + min));
    }

    // Return true probability state depending on input
    export function Probability(n): boolean {
        return (!!n && Math.random() >= n);
    }

    ///// TEMP //////
    // Return block index from range and probability 
    export function GenerateIndexFromLast(block_type, range, probability) {
        return (probability ? block_type : (Math.floor(Math.random() * range)));
    }
    ///// TEMP //////

    // Only call this AFTER all blocks have been generated
    // export function LinkAdjacentBlocks(block_array: Array<Block>): void {

    //     for (let i = 0; i < block_array.length; i++) {
    //         if (i <= 0)     // Top left 
    //             block_array[i].assignAdjacent([block_array[1], block_array[i + Globals.ROW_COUNT]]);
    //         else if (i > 0 && i < Globals.ROW_COUNT - 1)  // Mid top
    //             block_array[i].assignAdjacent([block_array[i - 1], block_array[i + Globals.ROW_COUNT], block_array[i + 1]]);
    //         else if (i <= 0)      // Top right
    //             block_array[i].assignAdjacent([block_array[i - 1], block_array[i + Globals.ROW_COUNT]]);
    //         else if (i < (Globals.ROW_COUNT * Globals.COLUMN_COUNT)) { // Left
    //             if (i % Globals.ROW_COUNT == 0)
    //                 block_array[i].assignAdjacent([block_array[i - Globals.ROW_COUNT], block_array[i + 1], block_array[i + Globals.ROW_COUNT]]);
    //         }
    //         else if (i < (Globals.ROW_COUNT * Globals.COLUMN_COUNT)) {   // Right
    //             if (i + 1 % Globals.ROW_COUNT == 0)
    //                 block_array[i].assignAdjacent([block_array[i - Globals.ROW_COUNT], block_array[i - 1], block_array[i + Globals.ROW_COUNT]]);
    //         }
    //         else if (i >= (Globals.ROW_COUNT * Globals.COLUMN_COUNT)) {     // Bottom left
    //             if (i % Globals.ROW_COUNT == 0)
    //                 block_array[i].assignAdjacent([block_array[i - Globals.ROW_COUNT], block_array[i + 1]]);
    //         }
    //         else if (i > (Globals.ROW_COUNT * Globals.COLUMN_COUNT) && i < block_array.length - 1)      // Mid bottom
    //             block_array[i].assignAdjacent([block_array[i - 1], block_array[i + Globals.ROW_COUNT]]);
    //         else if (i == block_array.length - 1)     // Bottom right
    //             block_array[i].assignAdjacent([block_array[i - 1], block_array[i + Globals.ROW_COUNT]]);
    //         else  // Middle
    //             block_array[i].assignAdjacent([block_array[i - 1], block_array[i + 1], block_array[i - Globals.ROW_COUNT], block_array[i + Globals.ROW_COUNT]]);
    //     }
    // }

    // Compare and generate block from previous adjacents
    // export function GenerateBlockFromAdjacents(x: number, y: number, adjacent_block_types: Array<number>, difficulty: number): Block {
    //     let num_blocks: number = adjacent_block_types.length;
    //     // let last_block = num_blocks - 1;
    //     let num_duplicates: number = 0;
    //     let duplicate_type: number;

    //     adjacent_block_types.sort();

    //     // May imrpove time complexity?
    //     // for (let i = (last_block - (Globals.ROW_COUNT - 2)); i < num_blocks + (Globals.ROW_COUNT); i++) { }
    //     for (let i = 0; i < adjacent_block_types.length; i++)
    //         if (adjacent_block_types.indexOf(adjacent_block_types[i]) !== adjacent_block_types.lastIndexOf(adjacent_block_types[i])) {
    //             duplicate_type = adjacent_block_types[i];
    //             num_duplicates++;
    //         }

    //     let probability_value = (num_duplicates - num_blocks) / num_blocks * difficulty;
    //     let make_match: boolean = BlockGenerator.Probability(probability_value);

    //     return (new Block((make_match ? duplicate_type : BlockGenerator.RandomRange(0, Globals.UNIQUE_BLOCK_COUNT)), x, y));
    // }

    // The main block generator
    export function GenerateBlocks(row_count, column_count, unique_block_types, difficulty, block_array: Array<Block>) {
        const width = row_count;
        const height = column_count;
        const num_blocks = unique_block_types;

        let prev;
        const padding_x = (Globals.VIEW_WIDTH * Globals.VIEW_SCALE) / Globals.ROW_COUNT + (Globals.BLOCK_SIZE * Globals.VIEW_SCALE);
        const padding_y = 200;
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                if (!x && !y)   // If this is the first block, push first element...
                    block_array.push(new Block(BlockGenerator.GenerateIndexFromLast(BlockGenerator.RandomRange(0, Globals.UNIQUE_BLOCK_COUNT), Globals.UNIQUE_BLOCK_COUNT, BlockGenerator.Probability(difficulty)), x * Globals.BLOCK_SIZE + padding_x, y * Globals.BLOCK_SIZE + padding_y));
                else { // EXPAND ALGORITHM HERE! ------------------------------
                    // 1: Generate a block from adjacents (check for matches and calc probability)
                    // 2: Assign new block to the block array

                    block_array.push(new Block(BlockGenerator.GenerateIndexFromLast(prev, Globals.UNIQUE_BLOCK_COUNT, BlockGenerator.Probability(difficulty)), x * Globals.BLOCK_SIZE + padding_x, y * Globals.BLOCK_SIZE + padding_y));
                }
                // ------------------------------------------------------------

                prev = block_array[block_array.length - 1].type;
            }
        }
    }
}
