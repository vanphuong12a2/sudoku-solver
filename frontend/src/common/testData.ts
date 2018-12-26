import {EMPTY_CELL} from '../Game/Cell/Cell';

export function sampleBoardData(): number[][] {
    return [
        [EMPTY_CELL, EMPTY_CELL, 2, EMPTY_CELL, EMPTY_CELL, 5, 4, EMPTY_CELL, EMPTY_CELL],
        [1, EMPTY_CELL, EMPTY_CELL, 8, EMPTY_CELL, EMPTY_CELL, 3, EMPTY_CELL, EMPTY_CELL],
        [EMPTY_CELL, EMPTY_CELL, 7, 4, 1, EMPTY_CELL, 8, EMPTY_CELL, EMPTY_CELL],
        [EMPTY_CELL, 4, EMPTY_CELL, 7, 5, EMPTY_CELL, EMPTY_CELL, 6, EMPTY_CELL],
        [EMPTY_CELL, 2, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, 8, EMPTY_CELL, 1, 4],
        [6, 8, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, 7, EMPTY_CELL],
        [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL, 2, EMPTY_CELL, 1, 8, 5],
        [9, EMPTY_CELL, EMPTY_CELL, 5, EMPTY_CELL, 3, EMPTY_CELL, EMPTY_CELL, 2],
        [EMPTY_CELL, 5, 8, EMPTY_CELL, EMPTY_CELL, 7, EMPTY_CELL, EMPTY_CELL, EMPTY_CELL]
    ];
}

export function emptyBoardData(): number[][] {
    return new Array(9).fill(0).map(() => new Array(9).fill(EMPTY_CELL));
}

