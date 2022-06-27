<script setup>
// name import called useCatalog and useCart
import {useCatalog} from '@/stores/catalog.js'
import {useCart} from '@/stores/cart.js'
const store = useCatalog()
const cart = useCart()
</script>

<template>
  
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