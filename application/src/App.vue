<template>
  <v-app id="my-app">
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<style lang="scss">
@import "./assets/styles";

body {
  background: url("./assets/images/bg.jpeg") no-repeat center center fixed;
  background-size: cover;
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
  #my-app {
    background: none;
  }
}
</style>
