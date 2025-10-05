<script setup lang="ts">
import CartRow from '@/components/CartRow.vue';
import { useCart } from '@/composables/cart.ts';

const { cart, incrementProduct, decrementProduct, removeProduct } = useCart()
</script>

<template>
  <ul role="list" class="-my-6 divide-y divide-gray-200">
    <CartRow
      @increment="incrementProduct(orderLine)"
      @decrement="decrementProduct(orderLine)"
      @remove="removeProduct(orderLine)"
      :order-line="orderLine"
      v-for="orderLine in cart"
      :key="orderLine.id"
    />
  </ul>
</template>
