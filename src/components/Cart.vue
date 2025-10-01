<script setup lang="ts">
import CartRow from '@/components/CartRow.vue';

defineProps({
  cart: {
    type: Array,
    required: true,
  }
})
</script>

<template>
  <ul role="list" class="-my-6 divide-y divide-gray-200">
    <CartRow
      @remove="$emit('remove', orderLine)"
      @increment="$emit('increment', orderLine)"
      @decrement="$emit('decrement', orderLine)"
      :order-line="orderLine"
      v-for="orderLine in cart"
      :key="orderLine.id" />
  </ul>
</template>
