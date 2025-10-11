<script setup lang="ts">
import { useProductsStore } from '@/stores/Products.ts';

const productsStore = useProductsStore();
productsStore.fetchProducts();
</script>

<template>
  <RouterView />
</template>
