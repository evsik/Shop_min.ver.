<template>
  <div>
    <main class="main" id="main">
      <catalog @add="addItem"/>
    </main>
  </div>
</template>

<script>
// import search from '../components/search.vue';
import catalog from '../components/catalog.vue';
export default {
  components: {
    catalog
  },
  data() {
    return {
      // showBasket: false
    }
  },
  methods: {
    parentGet(url) {
      return fetch(url).then(data => data.json())
    },
    addItem(item) {
      // this.$refs.bask.add(item);
      this.$parent.$refs.header.$refs.bask.add(item);
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style>

</style>