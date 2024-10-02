const fs = require('fs');

module.exports = function (plop) {
    // Screen generator
    plop.setGenerator('screen', {
      description: 'Create a new screen',
      prompts: [
        {
          type: 'input',
          name: 'nameScreen',
          message: 'What is the screen name (e.g., Home)?',
        },
        {
          type: 'input',
          name: 'subNameScreen',
          message: 'What is the sub-screen name (e.g., Detail)?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/screens/{{nameScreen}}/{{pascalCase subNameScreen}}/index.tsx',
          templateFile: 'plop-templates/screen.hbs',
        },
      ],
    });
  
    // Component generator
    plop.setGenerator('component', {
      description: 'Create a shared component',
      prompts: [
        {
          type: 'input',
          name: 'nameType',
          message: 'What is the component parent (e.g., ui, form)?',
        },
        {
          type: 'input',
          name: 'nameComponent',
          message: 'What is the children component name?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{nameType}}/{{pascalCase nameComponent}}/index.tsx',
          templateFile: 'plop-templates/component.hbs',
        },
      ],
    });
  
    // Redux slice generator
    plop.setGenerator('redux', {
        description: 'Create a new Redux slice',
        prompts: [
          {
            type: 'input',
            name: 'nameRedux',
            message: 'What is the Redux slice name?',
          },
        ],
        actions: [
          // Create the slice.tsx
          {
            type: 'add',
            path: 'src/redux/{{nameRedux}}/slice.tsx',
            templateFile: 'plop-templates/redux-slice.hbs',
          },
          // Create the type.tsx
          {
            type: 'add',
            path: 'src/redux/{{nameRedux}}/type.tsx',
            templateFile: 'plop-templates/redux-type.hbs',
          },
          // Only add hooks.tsx if it doesn't already exist
          {
            type: 'add',
            path: 'src/redux/hooks.tsx',
            templateFile: 'plop-templates/hooks.hbs',
            skip: function () {
              return fs.existsSync('src/redux/hooks.tsx') ? 'File already exists' : undefined;
            },
          },
          // Only add reducer.tsx if it doesn't already exist, otherwise append to it
          {
            type: 'add',
            path: 'src/redux/reducer.tsx',
            templateFile: 'plop-templates/reducer.hbs',
            skip: function () {
              return fs.existsSync('src/redux/reducer.tsx') ? 'File already exists' : undefined;
            },
          },
          // Append new reducer to the combineReducers in reducer.tsx
          {
            type: 'modify',
            path: 'src/redux/reducer.tsx',
            pattern: /combineReducers\(\{([\s\S]*?)\}\)/g,
            template: 'combineReducers({$1\n  {{nameRedux}}: {{nameRedux}}Reducer, })',
            skip: function () {
              return fs.existsSync('src/redux/reducer.tsx') ? 'File already exists' : undefined;
            },
          },
          // Only add store.tsx if it doesn't already exist
          {
            type: 'add',
            path: 'src/redux/store.tsx',
            templateFile: 'plop-templates/store.hbs',
            skip: function () {
              return fs.existsSync('src/redux/store.tsx') ? 'File already exists' : undefined;
            },
          },
        ],
      });
  };
  