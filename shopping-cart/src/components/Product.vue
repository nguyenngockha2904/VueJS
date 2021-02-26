<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="" />
    <ul v-else>
      <li v-for="(item, index) in products" :key="index">
        {{ item.title }} - {{ item.price | currency }} - {{ item.inventory }}
        <button
          :disabled="!productIsInStock(item)"
          @click="addProductToCart(item)"
        >
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapGetters,mapActions } from "vuex";
export default {
  data() {
    return {
      loading: false,
      productIndex: 1,
    };
  },
  computed: {
    ...mapState({
      products: (state) => state.products.items,
      //  fristProduct:state=>state.products[0],
      //  specificProduct(state){
      //    return state.products[this.productIndex]
      //  }
    }),
    ...mapGetters({
      productIsInStock:'productIsInStock',
    }),
  }, // here get data from prop , API
  //   old computed
  // computed: {
  //   products() {
  //     return this.$store.getters.availableProducts;
  //   },
  //   productIsInStock(){
  //        return this.$store.getters.productIsInStock;
  //   }
  // },
  methods: {
    ...mapActions({
      fetchProducts:'fetchProducts',
      addToCart:'addToCart',
    }),
    addProductToCart(product) {
      // this.$store.dispatch("addToCart", product);
      this.addToCart(product);
    },
  },
  created() {
    this.loading = true;
    // this.$store.dispatch("fetchProducts").then(() => (this.loading = false));
    this.fetchProducts().then(()=>this.loading=false);
  },
};
</script>