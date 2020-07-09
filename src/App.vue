<template>
  <div>
    <navbar></navbar>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from './components/Navbar';

export default {
  components: {
    navbar
  }
};
</script>

<style lang="sass">
@import 'node_modules/bootstrap/scss/bootstrap'
@import 'node_modules/bootstrap-vue/src/index.scss'
</style>
