<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      countCart: 0,
    };
  },
  computed: {
    getProducts() {
      return this.$store.state.products;
    },
    showCart() {
      return this.$store.state.cart;
    },
    showFav() {
      return this.$store.state.favorites;
    },
    cartLength() {
      return this.$store.state.cartCount;
    },
    getLike() {
      return this.$store.state.addLike;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    addFavorite(product) {
      this.$store.commit("addToFav", product);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="cart">Cart: {{ cartLength }}</div>
    <div>
      <p>DEV :</p>
      <p>Cart values: {{ showCart }}</p>
      <p>Fav values: {{ showFav }}</p>
    </div>
    <div>
      <p>Products:</p>
      <div class="product">
        <div
          class="products"
          v-for="(product, index) in getProducts"
          :key="index"
        >
          <img :src="product.image" :alt="product.image" />
          <p>{{ product.title }}</p>
          <p>{{ product.price }} UAH</p>
          <p>
            Like: {{ product.likes }}
            <button @click="addFavorite(product)">❤️</button>
          </p>
          <button class="buy" @click="addToCart(product)">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart {
  font-size: 24px;
  margin: 40px 0;
}
.product {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
}
img {
  height: 400px;
  width: auto;
}
.products p {
  margin-top: 20px;
}
.buy {
  margin-top: 10px;
  border: 1px solid #000;
  border-radius: 10px;
  background-color: transparent;
  height: 40px;
  width: 100px;
}
.fav {
  border: 1px solid #000;
  border-radius: 50px;
  background-color: transparent;
  height: 40px;
  width: 50px;
}
</style>
