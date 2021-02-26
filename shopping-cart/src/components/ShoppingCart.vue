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
      <button @click="$store.dispatch('checkout','')">Checkout</button>
      <p v-if="$store.state.checkoutStatus">
        {{ $store.state.checkoutStatus }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
  methods:{
       handleCheckout(){ 
       }
  }
};
</script>
<style scoped>
</style>
     





