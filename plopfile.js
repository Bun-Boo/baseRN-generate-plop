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
        // Add the new screen to the routes name
        {
          type: 'add',
          path: 'src/routes/RouteName.tsx',
          templateFile: 'plop-templates/route-name.hbs',
          skip: function () {
            return fs.existsSync('src/routes/RouteName.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'modify',
          path: 'src/routes/RouteName.tsx',
          pattern: /(enum RouteName \{[\s\S]*?)(\n\})/,
          template: `$1\n\t{{pascalCase subNameScreen}}Route = '{{pascalCase subNameScreen}}Route', \n}`,
        },

        // Add the new screen to the routes list

        {
          type: 'add',
          path: 'src/routes/RouteList.tsx',
          templateFile: 'plop-templates/route-list.hbs',
          skip: function () {
            return fs.existsSync('src/routes/RouteList.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'modify',
          path: 'src/routes/RouteList.tsx',
          pattern:/(interface IRoute \{[\s\S]*?\n)/,
          template: `import {{pascalCase subNameScreen}} from 'src/screens/{{nameScreen}}/{{pascalCase subNameScreen}}';\n$1`,
        },
        {
          type: 'modify',
          path: 'src/routes/RouteList.tsx',
          pattern: /(const routes: IRoute\[\] = \[[\s\S]*?\n)(\s*\];)/,
          template: `$1\t{\n\t\tcomponent: {{pascalCase subNameScreen}},\n\t\tname: RouteName.{{pascalCase subNameScreen}}Route,\n\t\ttitle: '{{pascalCase subNameScreen}}',\n\t\tisBottom: false,\n\t},\n$2`,
           
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

    plop.setGenerator('config', {
      prompts: [
        {
          type: 'confirm',
          name: 'skip create config',  
          message: `Please skip step because don't need `,  
          default: true,
        },
      ],
        actions: [
          {
            type: 'add',
            path: 'src/config/index.tsx',
            templateFile: 'plop-templates/config.hbs',
          },
        ],
    });

    plop.setGenerator('nav-services', {
      prompts: [
        {
          type: 'confirm',
          name: 'skip create nav-services',  
          message: `Please skip step because don't need `,  
          default: true,
        },
      ],
        actions: [
          {
            type: 'add',
            path: 'src/routes/NaviagationServices.tsx',
            templateFile: 'plop-templates/nav-services.hbs',
          },
        ],
    });

    plop.setGenerator('bottomTab', {
      prompts: [
        {
          type: 'confirm',
          name: 'skip create bottom tab',  
          message: `Please skip step because don't need `,  
          default: true,
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/routes/BottomTabContent.tsx',
          templateFile: 'plop-templates/bottom-tab.hbs',
          skip: function () {
            return fs.existsSync('src/routes/BottomTabContent.tsx') ? 'File already exists' : undefined;
          },
        },
      ],
    });
    plop.setGenerator('ui-global', {
      prompts: [
        {
          type: 'confirm',
          name: 'skip create bottom tab',  
          message: `Please skip step because don't need `,  
          default: true,
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/globals/AppText/index.tsx',
          templateFile: 'plop-templates/global-components/app-text.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/AppText/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/AppButton/index.tsx',
          templateFile: 'plop-templates/global-components/app-button.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/AppButton/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/AppDropdown/index.tsx',
          templateFile: 'plop-templates/global-components/app-dropdown.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/AppDropdown/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/AppSearch/index.tsx',
          templateFile: 'plop-templates/global-components/app-search.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/AppSearch/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/AppUploadMultiImage/index.tsx',
          templateFile: 'plop-templates/global-components/app-upload-multi-image.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/AppUploadMultiImage/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/AppView/index.tsx',
          templateFile: 'plop-templates/global-components/app-view.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/AppView/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/ImageGlobal/index.tsx',
          templateFile: 'plop-templates/global-components/app-image.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/ImageGlobal/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/TouchableGlobal/index.tsx',
          templateFile: 'plop-templates/global-components/app-touchable.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/TouchableGlobal/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/TextInputGlobal/index.tsx',
          templateFile: 'plop-templates/global-components/app-text-input.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/TextInputGlobal/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/Padding/index.tsx',
          templateFile: 'plop-templates/global-components/app-padding.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/Padding/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/NoData/index.tsx',
          templateFile: 'plop-templates/global-components/app-no-data.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/NoData/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/ModalGlobal/ButtonGlobalComponent/FooterModal.tsx',
          templateFile: 'plop-templates/global-components/app-footer-modal.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/ModalGlobal/ButtonGlobalComponent/FooterModal.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/ModalGlobal/FooterModal/index.tsx',
          templateFile: 'plop-templates/global-components/app-footer-modal1.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/ModalGlobal/FooterModal/index.tsx') ? 'File already exists' : undefined;
          },
        },

        {
          type: 'add',
          path: 'src/components/globals/ModalGlobal/index.tsx',
          templateFile: 'plop-templates/global-components/app-modal.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/ModalGlobal/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/LoadingGlobal/index.tsx',
          templateFile: 'plop-templates/global-components/app-loading.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/LoadingGlobal/index.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/CarouselGlobal/CaroselImage.tsx',
          templateFile: 'plop-templates/global-components/app-carousel-image.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/CarouselGlobal/CaroselImage.tsx') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'add',
          path: 'src/components/globals/CarouselGlobal/index.tsx',
          templateFile: 'plop-templates/global-components/app-carousel.hbs',
          skip: function () {
            return fs.existsSync('src/components/globals/CarouselGlobal/index.tsx') ? 'File already exists' : undefined;
          },
        },
      ],
    });

    plop.setGenerator('api-fetcher', {
      prompts: [
        {
          type: 'confirm',
          name: 'skip create api fetcher',  
          message: `Please skip step because don't need `,  
          default: true,
        },
      ],
     actions: [
      {
        type: 'add',
        path: 'src/api/Fetcher.tsx',
          templateFile: 'plop-templates/api/app-fetcher.hbs',
          skip: function () {
            return fs.existsSync('src/api/Fetcher.tsx') ? 'File already exists' : undefined;
          },
      }
     ]
    })

    plop.setGenerator('create-api', {
      description: 'Create a new api',
      prompts: [
        {
          type: 'input',
          name: 'apiName',
          message: 'What is the api name (e.g., apiRegister)?',
        },
        {
          type: 'input',
          name: 'pathName',
          message: 'What is the path api name (e.g., register)?',
        },
        {
          type: 'input',
          name: 'pathApi',
          message: 'What is the path api (e.g., /auth/register)?',
        },
        {
          type: 'input',
          name: 'functionName',
          message: 'What is the function name (e.g., register)?',
        },
        {
          type: 'input',
          name: 'methodName',
          message: 'What is the method name (e.g., get | post | delete | put)?',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/api/{{camelCase apiName}}/index.ts',
          templateFile: 'plop-templates/api/app-api.hbs',
          skip: function () {
            return fs.existsSync('src/api/{{camelCase apiName}}/index.ts') ? 'File already exists' : undefined;
          },
        },
        {
          type: 'modify',
          path: 'src/api/{{camelCase apiName}}/index.ts',
          pattern:/(const path = \{[\s\S]*?\n)/,
          template: `export interface I{{pascalCase apiName}} {
          }
          export interface I{{pascalCase apiName}}Response {
          }\n$1`,
        },
        {
          type: 'modify',
          path: 'src/api/{{camelCase apiName}}/index.ts',
          pattern:/(const path = \{[\s\S]*?\n)/,
          template: `\n$1{{camelCase pathName}}: '{{pathApi}}',\n$2`,
        },

        {
          type: 'modify',
          path: 'src/api/{{camelCase apiName}}/index.ts',
          pattern:/(export default \{[\s\S]*?\n)/,
          template: `function {{camelCase functionName}}(param?: I{{pascalCase apiName}}): Promise<I{{pascalCase apiName}}Response> {
            return fetcher({url: path.{{camelCase pathName}}, method: '{{methodName}}', param: param});
        }
        {{else}}
        function {{camelCase functionName}}(body: I{{pascalCase apiName}}): Promise<I{{pascalCase apiName}}Response> {
            return fetcher({url: path.{{camelCase pathName}}, method: '{{methodName}}', data: body});
        }\n$1`,
        },

        {
          type: 'modify',
          path: 'src/api/{{camelCase apiName}}/index.ts',
          pattern:/(export default \{[\s\S]*?\n)/,
          template: `\n$1{{camelCase functionName}},\n$2`,
        },
      ]
    })
   
  };
  