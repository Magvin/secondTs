"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var charactersCollection = new CharactersCollection_1.CharastersCollection('somEAnother');
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-30);
numbersCollection.sort();
charactersCollection.sort();
linkedList.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
console.log(linkedList.print());
