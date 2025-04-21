<script>
export default {
  computed: {
    getProduct() {
      return this.$store.state.cart;
    },
  },
  methods: {
    countMinus(product) {
      this.$store.commit('DECREASE_COUNT', product.id);
    },
    countPlus(product) {
      this.$store.commit('INCREASE_COUNT', product.id);
    },
    removeItem(productId) {
    this.$store.commit('removeFromCart', productId);
  }
  },
};
</script>

<template>
  <div>
    <div>
      <p>Cart</p>
      <div>{{ getProduct }}</div>
      <div>
        <div v-if="getProduct == 0">
          <p>
            Your cart is null <br />
            Do you want to back <nuxt-link to="/">Home</nuxt-link>?
          </p>
        </div>
        <div v-else>
          <div
            v-for="(product, index) in getProduct"
            :key="index"
            style="display: flex; align-items: center; margin-top: 10px"
          >
            <img
              style="height: 100px; width: auto"
              :src="product.image"
              alt=""
            />
            <div style="margin-left: 100px">{{ product.title }}</div>
            <div style="margin-left: 100px">
              <button @click="countMinus(product)">-</button> {{ product.count }} <button @click="countPlus(product)">+</button>
            </div>
            <div style="margin-left: 100px">{{ product.total }}</div>
            <div><button @click="removeItem(product.id)">delete</button></div>
          </div>
        </div>
      </div>
      <p>Загальна сума: {{ $store.getters.cartTotalSum }} грн</p>
    </div>
  </div>
</template>
