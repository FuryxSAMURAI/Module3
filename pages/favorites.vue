<script>
export default {
  data() {
    return {};
  },
  computed: {
    getFavorite() {
      return this.$store.state.favorites;
    },
  },
  methods: {
    removeItem(productId) {
      this.$store.commit("removeFromFav", productId);
    },
  },
};
</script>

<template>
  <div>
    <p>Favorites</p>
    <div>
        <div v-if="getFavorite == 0">
          <p>
            Your favorites is null <br />
            Do you want to back to add your favorite product? <nuxt-link to="/">Home</nuxt-link>?
          </p>
        </div>
      <div v-else>
        <div
          v-for="(product, index) in getFavorite"
          :key="index"
          style="display: flex; align-items: center; margin-top: 10px"
        >
          <img style="height: 100px; width: auto" :src="product.image" alt="" />
          <div style="margin-left: 100px">{{ product.title }}</div>
          <div style="margin-left: 100px">{{ product.price }}</div>
          <div>
            <button @click="removeItem(product.id)">delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
