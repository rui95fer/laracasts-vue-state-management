<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import { ArrowPathIcon } from '@heroicons/vue/24/outline';

const props = defineProps<{
  products: {
    type: Array;
    required: true;
  };
  loading: boolean;
}>();
</script>

<template>
  <div
    class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    v-if="!loading"
  >
    <ProductCard
      :key="product.id"
      v-for="product in products"
      :product="product"
    />
  </div>
  <div
    v-else
    class="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg shadow-sm"
  >
    <ArrowPathIcon class="h-10 w-10 text-blue-500 animate-spin mb-2" />
    <span class="text-sm text-gray-500">Loading products...</span>
  </div>
</template>

<style scoped></style>
