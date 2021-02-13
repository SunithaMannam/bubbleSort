
import { Sorter } from './Sorter';

export class CharactersCollection extends Sorter {
    
    constructor(public data: string) { super(); }
    /**
    */
    get length(): number {
        return this.data.length;
    }
    /**
     * 
     * @param leftIndeX 
     * @param rightIndex 
     */
    compare(leftIndeX:number, rightIndex:number): boolean {
        return this.data[leftIndeX].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    /**
     * 
     * @param leftIndeX 
     * @param rightIndex 
     */
    swap(leftIndeX:number, rightIndex:number): void {
        const characters = this.data.split('');
        const leftHand = characters[leftIndeX];
        characters[leftIndeX] = characters[rightIndex];
        characters[rightIndex] = leftHand;         
        this.data = characters.join('');
    }
    
}