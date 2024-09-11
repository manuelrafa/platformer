class NumberRange {
    public start: number;
    public end: number;
    constructor(start: number, end: number) {
        this.start = start;
        this.end = end;
    }
    
    /**
     * Retorna _true_ si este rango interseca con _other_.
     */
    public overlaps(other: NumberRange): boolean {
        return this.start <= other.end && this.end >= other.start;
    }

    /**
     * getOverlap
     */
    public getOverlap(other: NumberRange) {
        const minEnd = this.end < other.end ? this.end : other.end;
        const maxStart = this.start > other.start ? this.start : other.start;
        /* console.log(minEnd - maxStart);
        console.log(maxStart - minEnd); */
        
        return this.start > other.start ? minEnd - maxStart : maxStart - minEnd;
    }
}