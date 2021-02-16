<template>
  <div id="app">
    <HeaderBlock ref="header">
      <router-link to="/">
        <div class="b-logo">
          <h1>
            E-SHOP
          </h1>
        </div>
      </router-link>
    </HeaderBlock>
    <router-view/>

    <footer/>
  </div>

</template>

<script>
import HeaderBlock from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HeaderBlock
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
