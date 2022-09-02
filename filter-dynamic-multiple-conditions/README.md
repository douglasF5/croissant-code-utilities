# Filtering object arrays using multiple conditions

This function returns a shallow copy of a portion of a given array of objects, filtered down to just objects that pass the test against one or multiple conditions. A single condition is expressed with a `string` like `'<property> <operator> <value>'`. Multiple conditions are created as arrays of simple conditions like `[<condition1>, <operator>, <condition2>]`. It also supports nested arrays for more complex queries.

<br>

```TypeScript
//FILTERING DATA WITH A SINGLE CONDITION
const query = 'type === income';
filterData<Transaction>(data, query); //this is similar to the filter() method for arrays


//FILTERING DATA WITH MULTIPLE CONDITIONS
const query = [
  'type === expense',
  '&&',
  ['category === groceries', || 'category === food']
];

filterData<Transaction>(data, query); //it compares each array element against each condition
```
