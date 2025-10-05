import { computed, ref, watch } from 'vue';
import type { Product } from '@/types/Product';

const cart = ref<Product[]>([]);

const removeProduct = (product: Product) => {
  cart.value = cart.value.filter((value) => value.id !== product.id);
};

const clearCart = () => {
  cart.value = [];
}

const incrementProduct = (product: Product) => {
  const foundValue = cart.value.find((value) => value.id === product.id);
  if (foundValue) {
    foundValue.quantity = (foundValue.quantity ?? 1) + 1;
  } else {
    cart.value.push({
      ...product,
      quantity: 1,
    });
  }
  console.log(cart.value);
};

const decrementProduct = (product: Product) => {
  const foundValue = cart.value.find((value) => value.id === product.id);
  if (foundValue) {
    foundValue.quantity = (foundValue.quantity ?? 1) - 1;
    if (foundValue.quantity <= 0) {
      cart.value = cart.value.filter((value) => value.id !== product.id);
    }
  }
};

const subtotal = computed(() => {
  return cart.value.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
});

const taxes = computed(() => {
  return subtotal.value * 0.1;
});

const total = computed(() => {
  return subtotal.value + taxes.value;
});

watch(
  () => cart,
  () => {
    localStorage.setItem('cart', JSON.stringify(cart.value));
  },
  { deep: true }
)

const savedCart = localStorage.getItem('cart');

if (savedCart) {
  cart.value = JSON.parse(savedCart);
}

export function useCart() {
  return {
    cart,
    subtotal,
    taxes,
    total,
    clearCart,
    removeProduct,
    incrementProduct,
    decrementProduct,
  };
}
