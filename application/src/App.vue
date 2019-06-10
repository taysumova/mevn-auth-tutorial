<template>
  <div id="app">
    <v-container>
      <router-view />
    </v-container>
  </div>
</template>

<style lang="scss">
@import "./assets/styles";

body {
  background: url("./assets/images/bg.jpeg") no-repeat center center fixed;
  &:after {
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $background-tint;
    opacity: 0.3;
    z-index: -1;
  }
}
</style>
