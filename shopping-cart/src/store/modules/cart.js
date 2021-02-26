import shop from '../../api/shop';
export default {
     state: {
          items: [],
          checkoutStatus: null,
     },
     getters: {
          cartProducts(state,getters,rootState) {
               return state.items.map(cartItem => {
                    const product = rootState.products.items.find(p => p.id === cartItem.id)
                    return {
                         title: product.title,
                         price: product.price,
                         quantity: cartItem.quantity
                    }
               })
          },
          cartTotal(state, getters) {
               let total = 0;
               // getters.cartProducts.forEach(p => {
               //      total += p.price*p.quantity;
               // });
               // return total;
               return getters.cartProducts.reduce((total, p) => total + p.price * p.quantity, 0);
          },
     },
     mutations: {
          pushProductToCart(state, productId) {
               state.items.push({
                    id: productId,
                    quantity: 1
               })
          },
          incrementItemQuantity(state, cartItem) {
               cartItem.quantity++;
          },
          setCheckoutStatus(state, status) {
               state.checkoutStatus = status;
          },
          emptyCart(state) {
               state.items = [];
          }
          
     },
     actions:{
          addToCart({ getters, commit, state }, product) {
               if (getters.productIsInStock(product)) {
                    const cartItem = state.items.find(item => item.id === product.id);
                    // find cartItem
                    if (!cartItem) {
                         commit('pushProductToCart', product.id);
                    } else {
                         commit('incrementItemQuantity', cartItem);
                    }
                    commit('decrementProductInventory', product);
               }
          },
          checkout({ state, commit }) {
               shop.buyProducts(
                    state.items,
                    () => {
                         commit('emptyCart');
                         commit('setCheckoutStatus', 'success');
                    },
                    () => {
                         commit('setCheckoutStatus', 'fail');
                    })
          }
     
     }
}