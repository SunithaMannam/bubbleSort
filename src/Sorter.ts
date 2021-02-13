import { NumbersCollection } from "./NumbersCollection";

// interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean;
//     swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
    abstract length: number;
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    
// constructor(public collection: Sortable) { }
 
    sort(): void {
        const { length } = this;
        // This is called type guard : cheking for type of the varibale
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }

}