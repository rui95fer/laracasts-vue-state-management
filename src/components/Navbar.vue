<script setup lang="ts">
import { ShoppingCartIcon } from '@heroicons/vue/24/outline';
import { computed, inject } from 'vue';

const { cart } = inject('cart');

const amount = computed(() => {
  return cart.value.reduce((acc: number, product: { quantity?: number }) => {
    return acc + (product.quantity ?? 0);
  }, 0);
});
</script>

<template>
  <nav class="bg-white shadow">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex items-center ml-auto">
          <div class="md:ml-4 md:flex md:shrink-0 md:items-center">
            <button
              type="button"
              class="relative flex bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              @click="$emit('cart-clicked')"
            >
              <span class="absolute -inset-1.5" />
              <span class="sr-only">View cart</span>
              <ShoppingCartIcon class="size-6" aria-hidden="true" />
              <span
                v-if="amount > 0"
                class="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full"
              >
                {{ amount }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
