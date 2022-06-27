<script setup>
// name import called useCatalog and useCart
import {useCatalog} from '@/stores/catalog.js'
import {useCart} from '@/stores/cart.js'

</script>

<template>
  <div class="mt-6">
    <p v-for="(book, index) in newArrivals" :key="index" v-text="book.title"></p>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'

// component simply use the state, getter and action from the stores
export default {
  data() {
    return {};
  },

  computed: {
    // use `results` getter as `newArrivals` computed property
    ...mapState(useCatalog, {
      newArrivals: 'results'
    })
  },

  mounted() {
    console.log('results: ', this.newArrivals)
  },

  methods: {
    // use `fetchNewArrivals` and `addToCart` actions as methods property with same name
    ...mapActions(useCatalog, [
      'fetchNewArrivals'
    ]),

    ...mapActions(useCart, [
      'addToCart'
    ])
  },

  created() {
    this.fetchNewArrivals();
  }
};
</script>