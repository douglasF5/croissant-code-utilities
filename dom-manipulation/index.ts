import { get, append, create } from './utils';

//DEMO
const app = get('#app');
const title = create(`<h1>Hello world!</h1>`);
const input = create(`<input type="text" />`);
const button = create(`<button type="button">Click me</button>`);

append(app, [title, input, button]);
