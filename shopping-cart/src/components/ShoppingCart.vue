<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        {{ item.title }} - {{ item.price | currency }} - {{ item.quantity }}
      </li>
    </ul>
    <div>
      <h4>
        cart total: <span>{{ total | currency }}</span>
      </h4>
      <!-- <button @click="$store.dispatch('checkout', '')">Checkout</button> -->
      <button @click="checkout">Checkout</button>

      <!-- <p v-if="$store.state.checkoutStatus">
        {{ $store.state.checkoutStatus }}
      </p> -->
      <p v-if="checkoutStatus">
        {{ checkoutStatus }}
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapState,mapActions} from 'vuex';
export default {
  computed:{
    ...mapState({
      checkoutStatus:state=>state.cart.checkoutStatus
  }),
  ...mapGetters({
      products:'cartProducts',
      total:'cartTotal'
  })
  },
  // computed: {
  //   products() {
  //     return this.$store.getters.cartProducts;
  //   },
  //   total() {
  //     return this.$store.getters.cartTotal;
  //   },
  // },
  methods:{
     ...mapActions(['checkout'])
  }
};
</script>
<style scoped>
</style>
     





