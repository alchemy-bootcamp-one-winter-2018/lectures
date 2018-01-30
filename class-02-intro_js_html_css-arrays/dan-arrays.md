# JavaScript Arrays

## What is an Array?
JavaScript arrays are great for storing *related* pieces of data that are all of the same data type. Each piece of data in an array is called an *element* of the array, and it is referenced by its *index* - a numerical reference to its location within the array. Array indices always start at 0.

```javascript
const myArray = ['a', 'b', 'c'];
//  indices     0    1    2
```

## Notation
We can declare arrays using array literal notation:

1. square brackets `[]`
2. elements are separated by commas
3. elements can be any data type, including other arrays
4. different data types can be mixed together, but this is generally a bad idea

```javascript
const emptyArray = [];
const quizAnswers = ['b', 'd', 'a', 'a', 'c'];
const nestedArray = [ ['yes', 'y'], ['no', 'n'], ['no', 'n'] ];
const multiLineArray = [
                      ['yes', 'y'],
                      ['no', 'n'],
                      ['no', 'n']
                    ];
const mixedArray = ['Scott', 'Schmidt', 10, true, 'luxurious'];
```

## Accessing & Modifying Elements
1. Bracket notation: `arrayName[<index>]`
  1. array name: usually the constiable name where the array is stored
  2. element index: the numeric index or a constiable representing that number
2. assign a new value to an element with `=`

```javascript
const myArray = ['a' 'b', 'c'];
myArray[0] === 'a'

const index = 2;
myArray[index] === 'c'

myArray[1] = 'z' // ['a', 'z', 'c']
```

## Array Methods
1. Syntax: `<arrayName>.<methodName>();`
2. Common methods:
  2. push - add a new element to the end of the array
  3. pop - remove the last element
  4. shift - remove the first element
  5. unshift - add a new element to the front of the array
  6. splice - add/remove element(s) to/from any position
  7. indexOf - search for a value in an array

## Array Properties
1. Syntax: `<arrayName>.<propertyName>;`
1. length - how many elements are in the array?

[More methods & details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
