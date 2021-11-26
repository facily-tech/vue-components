<template>
  <img alt="Facily logo" src="./assets/facily-logo-site.png" />
  <fy-button-delete>cancelar</fy-button-delete>
</template>

<script>
import { FyButtonDelete } from './components/Buttons';

export default {
  name: 'App',
  components: {
    FyButtonDelete,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
