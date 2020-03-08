import * as PIXI from "pixi.js";
import { Game } from "./Game";

// Global variables
export class Globals {

    public static app: PIXI.Application;
    public static game: Game;
    public static VIEW_WIDTH: number = 1080;
    public static VIEW_HEIGHT: number = 1920
    public static VIEW_SCALE: number = 0.5;
    public static BLOCK_SIZE: number = 150;
    public static ROW_COUNT: number = 6;
    public static COLUMN_COUNT: number = 11;
    public static UNIQUE_BLOCK_COUNT: number = 6;

    public static InitialiseApp() {
        Globals.app = new PIXI.Application({
            width: Globals.VIEW_WIDTH * Globals.VIEW_SCALE,
            height: Globals.VIEW_HEIGHT * Globals.VIEW_SCALE,
            backgroundColor: 0x49331C
        });

        document.body.appendChild(Globals.app.view);
    }
}