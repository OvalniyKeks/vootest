<template>
  <div id="app">
    <MainComponent/>
  </div>
</template>

<script>
import MainComponent from './components/Main'

export default {
  name: 'App',
  components: {
    MainComponent
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/app.scss";
</style>
