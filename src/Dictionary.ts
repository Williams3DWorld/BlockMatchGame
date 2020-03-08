import { Block } from "./Block"

interface Dictionary<T> {
    [key: string]: T;
}

export class SearchParameters {
    SearchFor: Dictionary<Block> = {};
}