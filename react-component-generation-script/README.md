# React component generation script

Automate the creation of new components in a specific directory containing multiple source files (jsx, css, spec.js, etc.).

## How to use

1. Add the `component-gen` folder to your project
2. In case you need to change the template to match your needs, edit the file at `component-gen/component-template.js` (optional)
3. Add a new script to your `package.json` file: `"gc": "node ./src/utils/component-gen/index.js $1"`. Make sure to edit the path so it matches the folder structure of your project (optional)
4. Now you can open the terminal and use the command `npm run gc ComponentName` to create new components and add them to the `components` folder

## Extra notes

- Using this code as-is, it will add new components to the `components` folder inside a `src` directory directly from the root directory of your project `./src/components/`
- Make sure you have installed NodeJS
- Import statements use ES6 syntax
- This script is based on the one by Mike Theodorou with a few adaptations. Check out the original script in [his article](https://levelup.gitconnected.com/how-to-generate-react-components-from-your-terminal-a27741a5b862).
