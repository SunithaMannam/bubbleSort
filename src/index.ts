import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';
import {LinkedList} from './LinkedList';

const numbers = new NumbersCollection([10, 3, -5, 8]);
numbers.sort();
console.log(numbers.data);

const characters = new CharactersCollection("sunitham mannam");
characters.sort();
console.log(characters.data);


const llist = new LinkedList();
llist.add(500);
llist.add(-10);
llist.add(-3);
llist.add(4);
llist.sort();
llist.print();