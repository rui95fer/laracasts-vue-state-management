<script setup lang="ts">
import CartRow from '@/components/CartRow.vue';
import { useCartStore } from '@/stores/Cart.ts';

const cartStore = useCartStore();
</script>

<template>
  <ul role="list" class="-my-6 divide-y divide-gray-200">
    <CartRow
      @increment="cartStore.incrementProduct(orderLine)"
      @decrement="cartStore.decrementProduct(orderLine)"
      @remove="cartStore.removeProduct(orderLine)"
      :order-line="orderLine"
      v-for="orderLine in cartStore.cart"
      :key="orderLine.id"
    />
  </ul>
</template>
