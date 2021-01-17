import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharastersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
const numbersCollection = new NumbersCollection([10,3,-5,0])
const charactersCollection = new CharastersCollection('somEAnother');
const linkedList = new LinkedList()
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-30);
const sorter = new Sorter(numbersCollection);
const charactersSorter = new Sorter(charactersCollection);
const linkedListSorter = new Sorter(linkedList);
sorter.sort();
charactersSorter.sort();
linkedListSorter.sort();
console.log(numbersCollection.data)
console.log(charactersCollection.data)
console.log(linkedList.print())