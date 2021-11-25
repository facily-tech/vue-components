# vue-components
Components in VUE to be used in Facily's FRONTEND projects.
## Installation
To use the package, you must first create a .npmrc file at the root of the project, with the following content:
```bash
#.npmrc
@facily-tech:registry=https://npm.pkg.github.com
```
After creating the .npmrc file, install with npm install.
```bash
npm install @facily-tech/vue-components
```
## Usage
```html
<template>
    ...
        <InputFacily />
    ...
</template>
<script>
    import { InputFacily } from '@facily-tech/vue-components'
    
    export default {
        ...
        components: { InputFacily },
        ...
    }
</script>
<style>
    ...
</style>
```
*Note: It is necessary to add Vuetify to the project*
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.
