import Vuex from 'vuex';

import Vue from 'vue';
import shop from '../api/shop';
import actions from './actions';
import cart from './modules/cart';
import products from './modules/products';


Vue.use(Vuex);


export default new Vuex.Store({
     modules: {
          cart,products
     },
     state: { // = data
          // products: [],
          // {id, quantity}
          // cart: [],
          // checkoutStatus: null,
     },
     getters: { // = computer properties
          // availableProducts(state, getters) {
          //      return state.products.filter(product => product.inventory > 0);
          // },
          // cartProducts(state) {
          //      return state.cart.map(cartItem => {
          //           const product = state.products.find(p => p.id === cartItem.id)
          //           return {
          //                title: product.title,
          //                price: product.price,
          //                quantity: cartItem.quantity
          //           }
          //      })
          // },
          // cartTotal(state, getters) {
          //      let total = 0;
          //      // getters.cartProducts.forEach(p => {
          //      //      total += p.price*p.quantity;
          //      // });
          //      // return total;
          //      return getters.cartProducts.reduce((total, p) => total + p.price * p.quantity, 0);
          // },
          // productIsInStock() {
          //      return (product) => {
          //           return product.inventory > 0
          //      }
          // }
     },
     // actions: { //methods /// here use store.dispatch
     //      fetchProducts({ commit }) {
     //           return new Promise((resolve, reject) => {
     //                // make a call
     //                // run setProducts mutation
     //                shop.getProducts((product) => {
     //                     commit("setProducts", product)
     //                     resolve()
     //                });
     //           })
     //      },

     //      addToCart({getters,commit,state}, product) {
     //           if (getters.productIsInStock(product)) {
     //                const cartItem = state.cart.find(item => item.id === product.id);
     //                // find cartItem
     //                if (!cartItem) {
     //                     commit('pushProductToCart', product.id);
     //                } else {
     //                     commit('incrementItemQuantity', cartItem);
     //                }
     //                commit('decrementProductInventory', product);
     //           }
     //      },
     //      checkout({ state, commit }) {
     //           shop.buyProducts(
     //                state.cart,
     //                () => {
     //                     commit('emptyCart');
     //                     commit('setCheckoutStatus', 'success');
     //                },
     //                () => {
     //                     commit('setCheckoutStatus', 'fail');
     //                })
     //      }

     // },
     // actions,
     mutations: {  //here use commit 
          // setProducts(state, products) {
          //      // update products
          //      state.products = products;
          // },
          // pushProductToCart(state, productId) {
          //      state.cart.push({
          //           id: productId,
          //           quantity: 1
          //      })
          // },
          // incrementItemQuantity(state, cartItem) {
          //      cartItem.quantity++;
          // },
          // decrementProductInventory(state, product) {
          //      product.inventory--;
          // },
          // setCheckoutStatus(state, status) {
          //      state.checkoutStatus = status;
          // },
          // emptyCart(state) {
          //      state.cart = [];
          // }
     }
})