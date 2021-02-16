<template>
  <div class="b-cart">
    <button class="btn-cart" id="toggle-cart" type="button" @click="catalogShown = !catalogShown">Корзина
    </button>
    <div class="cart-block" v-if="catalogShown">
      <div class="d-flex flex-row justify-content-between">
        <b class="d-block">Общая стоимость: {{ countingGoods }}</b> <span class="d-block" id="tot-sum">  </span>
      </div>
      <hr>
      <div class="cart-block__items">
        <item
            v-for="item of this.$store.state.basketItems"
            type="basket"
            :item="item"
            :key="item.id_product"
            @remove="remove"
        />
      </div>
      <hr>
      <div class="d-flex flex-row justify-content-between">
        <b class="d-block">Количество: {{ amountGoods }} </b> <span class="d-block" id="tot-qua">  </span>
      </div>
    </div>
  </div>
</template>

<script>
import item from './item.vue';
import {
  get,
  put,
  del,
  post
} from '../utils/reqs.js';

export default {
  components: {item},
  data() {
    return {
      url: '/api/basket',
      items: [],
      // totalAmount: null,
      basketSum: null,
      basketAmount: null,
      catalogShown: false
    }
  },

  computed: {
    countingGoods() {
      this.basketSum = null
      this.$store.state.basketItems.forEach((item) => (this.basketSum += +item.price * +item.quantity));
      this.$store.state.basketSum = this.basketSum
      return this.basketSum
    },
    amountGoods() {
      this.basketAmount = null
      this.$store.state.basketItems.forEach((item) => (this.basketAmount += +item.quantity));
      this.$store.state.basketAmount = this.basketAmount
      return this.basketAmount
    },
  },

  methods: {
    add(item) {
      let find = this.$store.state.basketItems.find(el => el.id_product == item.id_product)
      if (!find) {
        let newItem = Object.assign({}, item, {
          quantity: 1
        });
        post(this.url, newItem)
            .then(res => {
              if (res.status) {
                this.$store.state.basketItems.push(newItem)
              } else {
                console.log('Server err')
              }
            })
      } else {
        put(`${this.url}/${item.id_product}`, 1, this.sum(item))
            .then(res => {
              if (res.status) {
                find.quantity++
              } else {
                console.log('Server err')
              }
            })
      }
    },
    remove(item) {
      let find = this.$store.state.basketItems.find(el => el.id_product == item.id_product);
      // let sum = this.$store.state.basketItems.forEach((item) => (this.basketSum += +item.price * +item.quantity));
      if (find.quantity > 1) {
        put(`${this.url}/${item.id_product}`, -1, this.sumRemove(item))
            .then(res => {
              if (res.status) {
                find.quantity--
              } else {
                console.log('Server err')
              }
            })
      } else {
        del(`${this.url}/${item.id_product}`)
            .then(res => {
              if (res.status) {
                this.$store.state.basketItems.splice(this.$store.state.basketItems.indexOf(find), 1);
              } else {
                console.log('Server err')
              }
            })
      }
    },
    sum(prod) {
      let sum = prod.price
      this.$store.state.basketItems.forEach((item) => (sum += +item.price * +item.quantity));
      return sum
    },
    sumRemove(prod) {
      let sum = 0
      sum -= prod.price
      this.$store.state.basketItems.forEach((item) => (sum += +item.price * +item.quantity));
      return sum
    }
  },
  mounted() {
    // get(this.url)
    //     .then(basket => {
    //       this.basketSum = basket.totalPrice
    //       this.items = basket.content
    //     });
    this.$store.commit('getBasket')
  }
}
</script>

<style>

</style>