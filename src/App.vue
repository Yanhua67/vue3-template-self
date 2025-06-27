<script setup></script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">
.container {
  .logo {
    height: 6em;
    padding: 1.5em;
    transition: filter 300ms;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 3em #42b883aa);
  }
}
</style>
