import shop from '../api/shop';

export default { //methods /// here use store.dispatch
     // fetchProducts({ commit }) {
     //      return new Promise((resolve, reject) => {
     //           // make a call
     //           // run setProducts mutation
     //           shop.getProducts((product) => {
     //                commit("setProducts", product)
     //                resolve()
     //           });
     //      })
     // },

     // addToCart({ getters, commit, state }, product) {
     //      if (getters.productIsInStock(product)) {
     //           const cartItem = state.cart.find(item => item.id === product.id);
     //           // find cartItem
     //           if (!cartItem) {
     //                commit('pushProductToCart', product.id);
     //           } else {
     //                commit('incrementItemQuantity', cartItem);
     //           }
     //           commit('decrementProductInventory', product);
     //      }
     // },
     // checkout({ state, commit }) {
     //      shop.buyProducts(
     //           state.cart,
     //           () => {
     //                commit('emptyCart');
     //                commit('setCheckoutStatus', 'success');
     //           },
     //           () => {
     //                commit('setCheckoutStatus', 'fail');
     //           })
     // } 
}