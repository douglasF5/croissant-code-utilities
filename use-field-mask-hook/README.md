# useFieldMask hook

The `useFieldMask` returns an array with two elements:
```TypeScript
const [state, setState] = useFieldMask({ type: 'time' });

//Object containing the current and previous values
console.log(state); //{current: '', prev: ''}

//Function for updading the state
setState('1254');
console.log(state); //{current: '12:54', prev: ''}

//...
setState('324');
console.log(state); //{current: 03:24', prev: '12:54'}

input.value = state.current //'03:24'

```

### Example
```TypeScript
const [value, setValue] = useFieldMask({ type: 'currency', prefix: '$' });

input.oninput = (e: InputEvent) => {
  setValue(e);
  const input = e.target as HTMLInputElement;
  input.value = value.current;
};
```
