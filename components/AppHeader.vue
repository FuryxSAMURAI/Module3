<script>
export default {
  computed: {
    getCartCount() {
      return this.$store.state.cartCount;
    },
    getFavoritesCount() {
      return this.$store.state.favoritesCount;
    },
  },
};
</script>

<template>
  <header style="padding: 40px 0">
    <nav>
      <ul style="display: flex; list-style: none">
        <li
          style="
            border: 1px solid #000;
            border-radius: 10px;
            padding: 20px 40px;
          "
        >
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li
          style="
            margin-left: 20px;
            border: 1px solid #000;
            border-radius: 10px;
            padding: 20px 40px;
          "
        >
          <nuxt-link to="/cart">Cart {{ getCartCount }}</nuxt-link>
        </li>
        <li
          style="
            margin-left: 20px;
            border: 1px solid #000;
            border-radius: 10px;
            padding: 20px 40px;
          "
        >
          <nuxt-link to="/favorites">Favorites {{ getFavoritesCount }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
