<script setup lang="ts">
import Cart from '@/components/Cart.vue';
import { format } from '@/lib/number.ts';
import { useCart } from '@/composables/cart.ts';
import router from '@/router';

const { subtotal, taxes, total, clearCart } = useCart();

function handleCheckout() {
  clearCart();
  router.push('/');
}
</script>

<template>
  <section class="max-w-2xl mx-auto py-8 px-4">
    <RouterLink to="/" class="text-blue-600 hover:underline mb-4 inline-block">
      &larr; Continue Shopping
    </RouterLink>
    <h1 class="text-2xl font-bold mb-6">Checkout</h1>
    <Cart />
    <div class="mt-8 p-6 bg-gray-50 rounded shadow-sm">
      <div class="flex justify-between items-center mb-2">
        <span class="text-lg font-semibold">Subtotal:</span>
        <span class="text-lg">{{ format(subtotal) }}</span>
      </div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-base text-gray-600">Taxes (10%):</span>
        <span class="text-base text-gray-600">{{ format(taxes) }}</span>
      </div>
      <div class="flex justify-between items-center border-t pt-4 mt-4">
        <span class="text-xl font-bold">Total:</span>
        <span class="text-xl font-bold text-blue-700">{{ format(total) }}</span>
      </div>
    </div>
    <button
      class="w-full mt-6 py-3 bg-blue-600 text-white font-bold rounded disabled:opacity-50"
      :disabled="subtotal === 0"
      @click="handleCheckout"
    >
      Proceed to Payment
    </button>
  </section>
</template>
