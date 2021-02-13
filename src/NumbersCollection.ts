
import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
    
    constructor(public data: number[]) {
        super();
    }
    
    get length(): number {
        return this.data.length;
    }
    
    compare(leftIndeX:number, rightIndex:number): boolean {
        return this.data[leftIndeX] > this.data[rightIndex]
    }
    
    swap(leftIndeX:number, rightIndex:number): void {
        const leftHand = this.data[leftIndeX];
        this.data[leftIndeX] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}