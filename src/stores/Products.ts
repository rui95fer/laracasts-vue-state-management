import { defineStore } from 'pinia';
import { mande } from 'mande';
import type { Product } from '@/types/Product.ts';
import { useCartStore } from '@/stores/Cart.ts';

const products = mande(
  'http://laracasts-vue-state-management-backend.test/api/products'
);

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Array<Product>,
    loading: false,
    didLoad: false,
  }),

  getters: {
    upsellingProducts() {
      const cartStore = useCartStore();

      return this.products
        .filter((product) => product.use_for_upselling)
        .filter((product) => cartStore.amountForProduct(product) === 0);
    },
  },

  actions: {
    async fetchProducts(force = false) {
      if (this.didLoad && !force) return;
      let data = [];
      this.loading = true;
      try {
        const response = await products.get();
        data = response.data;
      } catch (e) {
        console.error('Error fetching products:', e);
      }
      this.$patch({ products: data, loading: false, didLoad: true });
    },
  },
});
