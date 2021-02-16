<template>
  <div>
    <header class="header">
      <div class="header-wrapper container">
        <nav>
          <slot></slot>
        </nav>
        <search />
        <basket ref="bask" />
      </div>
    </header>
  </div>
</template>

<script>
import basket from '../components/basket.vue';
import search from '../components/search.vue';

export default {
  name: "HeaderBlock",
  components: {
    basket,
    search
  },
  data() {
    return {
      // showBasket: false
    }
  },
  methods: {
  },
  mounted() {
    console.log(this)
  }
}
</script>

<style>

</style>