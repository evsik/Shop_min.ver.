import Vue from 'vue'
import Vuex from 'vuex'
import {get, put, del, post} from "../utils/reqs.js";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        items: [],
        itemsFiltered: [],
        basketItems: [],
        catalogUrl: "/api/catalog",
        basketUrl: "/api/basket",
        // basketSum: null,
        // basketAmount: null,
        // searchText: ''
    },
    mutations: {
        getCatalog(state) {
            get(state.catalogUrl)
                // .then(items => {
                //     items.map(item => item.quantity = 1)
                //     state.items = [...items];
                //     state.itemsFiltered = [...state.items];
                // });
                .then(data => {
                    data.map(item => item.quantity = 1)
                    state.items = data;
                    state.itemsFiltered = data;
                });
        },
        getBasket(state) {
            get(state.basketUrl)
                .then(basket => {
                    // state.basketSum = basket.totalAmount
                    // state.basketAmount = basket.totalPrice
                    state.basketItems = basket.content
                    // console.log(state.basketSum)
                });
        },
        filterItem(state, searchText) {
            // state.itemsFiltered = [...state.items];
            let reg = new RegExp(searchText, 'i');
            state.itemsFiltered = state.itemsFiltered.filter(item => item.product_name.match(reg))
        },
        // sumBasket(state) {
        //     let sum = state.basketItems.forEach((item) => (sum += +item.price * +item.quantity))
        //     return sum
        // }
    }
})

export default store