<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="" />
    <ul v-else>
      <li v-for="(item, index) in allProducts" :key="index">
        {{ item.title }} - {{ item.price | currency }} - {{item.inventory}}
        <button :disabled="!productIsInStock(item)" @click="addProductToCart(item)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      loading: false,
    };
  },
  computed:mapState({
       allProducts:state=>state.products,
  }), // here get data from prop , API
//   old computed
//   computed: {
//     products() {
//       return this.$store.getters.availableProducts;
//     },
//     productIsInStock(){
//          return this.$store.getters.productIsInStock;
//     }
//   },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("addToCart",product);
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => (this.loading = false));
  },
};
</script>