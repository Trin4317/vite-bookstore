import { defineStore } from 'pinia'

export const useCart = defineStore('cart-store', {
  state: () => {
    return {
      cart: []
    }
  },

  getters: {
    getContents(state) {
      const {cart} = state;

      return cart.reduce((contents, item) => {
        // iterate through contents array, check if item already exists in contents or not
        const index = contents.findIndex(added => added.isbn13 === item.isbn13);
        // if the item already exists in contents, increment its quantity by 1
        if (index > -1 ) {
          ++contents[index].quantity;

          return contents;
        }
        // if the item doesnt exist, set the quantity to 1 and push the item to contents array
        item.quantity = 1;
        contents.push(item);

        return contents;
      }, []);
    },

    count(state) {
      return state.cart.length;
    },

    total(state) {
      const {cart} = state;

      return cart.reduce((total, item) => {
        total = total + item.price;

        return total;
      }, 0);
    }
  },

  actions: {
    addToCart(book) {
      this.cart = this.cart.slice(0);
      this.cart.push(book);
    }
  }
})