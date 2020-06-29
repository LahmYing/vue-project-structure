<template>
  <div id="app">
    <div style="margin-bottom: 50px;display: flex; justify-content: space-around;">
      <span>
        <router-link to="/home">home</router-link>
      </span>
      <span>
        <router-link to="/components">components</router-link>
      </span>
    </div>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* 容器保护 */
  min-width: 320px;
  max-width: 500px;
}
</style>
