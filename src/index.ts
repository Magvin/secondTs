import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharastersCollection } from './CharactersCollection';
const numbersCollection = new NumbersCollection([10,3,-5,0])
const charactersCollection = new CharastersCollection('somEAnother');
const sorter = new Sorter(numbersCollection);
const charactersSorter = new Sorter(charactersCollection);
sorter.sort();
charactersSorter.sort();
console.log(numbersCollection.data)
console.log(charactersCollection.data)