<template>
  <div>
    <div class="products container">
      <item
          v-for="item of this.$store.state.itemsFiltered"
          :key="item.id_product"
          :item="item"
      />
    </div>
  </div>
</template>

<script>
import item from './item.vue';
import {get} from '../utils/reqs.js';

export default {
  components: {item},
  data() {
    return {
      // url: 'https://raw.githubusercontent.com/evsik/static/master/JSON%20files/catalog.json',
      url: '/api/catalog',
      items: [],
      catalogItemsFiltered: [],
      searchText: ''
    }
  },

  methods: {
  },

  mounted() {
    // get(this.url)
    //     .then(data => {
    //       // this.catalogItemsFiltered = data
    //       this.items = data
    //     })
    this.$store.commit('getCatalog');
  },
  // computed: {
  //   this.$store.commit('getCatalog');
  // }
}
</script>

<style>
.search-wrapper {
  background-color: #5d5151fc;
}
</style>