"use strict";
class NumberRange {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    /**
     * Retorna _true_ si este rango interseca con _other_.
     */
    overlaps(other) {
        return this.start <= other.end && this.end >= other.start;
    }
    /**
     * getOverlap
     */
    getOverlap(other) {
        const minEnd = this.end < other.end ? this.end : other.end;
        const maxStart = this.start > other.start ? this.start : other.start;
        /* console.log(minEnd - maxStart);
        console.log(maxStart - minEnd); */
        return this.start > other.start ? minEnd - maxStart : maxStart - minEnd;
    }
}
