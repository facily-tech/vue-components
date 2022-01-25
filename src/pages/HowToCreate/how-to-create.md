# Create Component Package Using Github Package

1. Create a private repository on Github

2. Create a VUE project

3. Add Vuetify to the project

4. Create your components in the src/components folder, try to organize by resource, eg Buttons/Delete/index.vue, Buttons/Submit/index.vue

5. Create an index.js file in the src folder

   ```javascript
   // src/index.js
   import { ButtonDeleteFacily, ButtonSubmitFacily } from './components/Buttons';

   // Declare install function executed by Vue.use()
   export function install(Vue) {
     if (install.installed) return;

     install.installed = true;

     Vue.component('ButtonDeleteFacily', ButtonDeleteFacily);
     Vue.component('ButtonSubmitFacily', ButtonSubmitFacily);
   }
   // Create module definition for Vue.use()
   const plugin = {
     install,
   };
   // Auto-install when vue is found (eg. in browser via <script> tag)
   let GlobalVue = null;
   if (typeof window !== 'undefined') {
     GlobalVue = window.Vue;
   } else if (typeof global !== 'undefined') {
     GlobalVue = global.Vue;
   }
   if (GlobalVue) {
     GlobalVue.use(plugin);
   }
   // To allow use as module (npm/webpack/etc.) export component
   export { ButtonDeleteFacily, ButtonSubmitFacily };
   ```

6. Change package.json

   ```json
   {
   	"name": "@facily-tech/vue-components",
       "version": "0.1.0",
   	"main": "./dist/vueComponents.common.js",
   	"module": "/dist/vueComponents.umd.js",
       "repository": {
   		"url": "git://github.com/facily-tech/vue-components.git"
   	},
       "scripts": {
           ...
           "build:npm": "vue-cli-service build --target lib --name vueComponents src/index.js",
           ...
       },
       ...
       "files": [
       	"dist/*"
   	]
   }
   ```

7. Push project to Github ()

   If you are starting a new project, do

   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/facily-tech/vue-components.git
   git push -u origin main
   ```

8. Create token to publish Github Package using npm

   1. Access your Github account
   2. Go to the Settings menu
   3. Now access the Developer settings menu
   4. Now access the Personal access tokens
   5. Now access the Generate new token
   6. Create a note for your token and check the write:packages option, so it selects all the other necessary options, after filling it click on the Generate token button
      1. If by chance you lose the token, enter the created token and generate a new token

9. Now login to npm using the repository owner's scope, using the previously generated token

   ```bash
   $ npm login --scope=@facily-tech --registry=https://npm.pkg.github.com

   > Username: USERNAME
   > Password: TOKEN
   > Email: PUBLIC-EMAIL-ADDRESS
   ```

10. Now do build:npm

    ```bash
    $ npm run build:npm
    ```

11. Now publish the package

    ```bash
    $ npm publish
    ```

    _Note: To update the package, make the necessary changes, and before pushing to Github, edit the package.json version, then after pushing, do step 10 and then step 11_
