<template>
  <div>
    <form action="#" class="b-search">
      <input type="text" class="b-search__field" v-model="searchText">
      <button class="btn-search" type="submit" @click="filter">
        <i class="fas fa-search"></i>
      </button>
    </form>
  </div>
</template>

<script>
import catalog from "./catalog";
import {get} from "../utils/reqs";

export default {
  data() {
    return {
      url: '/api/catalog',
      // catalogItemsFiltered: [],
      // items: [],
      searchText: ''
    }
  },
  methods: {
    filter() {
      this.$store.commit('filterItem', this.searchText)
    }
  },
  mounted() {
  }
}
</script>

<style>

</style>