export const state = {
  products: [
    {
      id: 1,
      title: "Кросівки Nike Air Max",
      image: "https://deltasport.ua/upload/resize_cache/iblock/bfd/501_501_0/HF0785_001_a.jpg",
      price: 4200,
      likes: 100,
    },
    {
      id: 2,
      title: "Футболка Oversize Black",
      image: "https://manset.com.ua/image/cache/catalog/photo_tovary/T-shirts-2022/Oversize/3D_foto/A0080_T-shirt_Oversize_Black_3-414x414.png",
      price: 850,
      likes: 330,
    },
    {
      id: 3,
      title: "Куртка Denim Classic",
      image: "https://h-d.odessa.ua/image/cache/catalog/HD/Photo/GM/ыв19-550x550w.jpg",
      price: 2100,
      likes: 350,
    },
    {
      id: 4,
      title: "Штани Cargo Urban",
      image: "https://tacticool.com.ua/img/uploads/presm/54yaj3klnr4k_2490785.jpg",
      price: 1750,
      likes: 230,
    },
    {
      id: 5,
      title: "Кепка Street Style",
      image: "https://yesoriginal.com.ua/image/cache/catalog/additional_disk/cover_2/FB5368-073-1215x1280.webp",
      price: 420,
      likes: 400,
    },
    {
      id: 6,
      title: "Светр Basic Grey",
      image: "https://www.yasnastudio.com/wp-content/uploads/2024/11/IMG_4517.jpg",
      price: 960,
      likes: 623,
    },
    {
      id: 7,
      title: "Сорочка Flannel Red",
      image: "https://eurosiz.ua/wp-content/uploads/2020/12/Shirt-PROCERA-Shirt-red.webp",
      price: 1340,
      likes: 98,
    },
    {
      id: 8,
      title: "Рюкзак Everyday",
      image: "https://gox.ua/wa-data/public/shop/products/20/16/1620/images/7274/7274.970.jpg",
      price: 1480,
      likes: 345,
    },
    {
      id: 9,
      title: "Шарф Winter Cozy",
      image: "https://vskiev.com.ua/12001-home_default/sharf-zhinochij-victoria-s-secret-cozy-plaid-scarf.jpg",
      price: 690,
      likes: 357,
    },
    {
      id: 10,
      title: "Годинник Minimal",
      image: "https://minimal.com.ua/wp-content/uploads/2022/09/4.jpg",
      price: 2450,
      fullPrice: 2450,
      likes: 124,
    },
  ],
  cart:[],
  favorites:[],
  favoritesCount: 0,
  cartCount: 0  
}

export const mutations = {
  addToCart(state, product) {
    const existingCart = state.cart.find(item => item.id === product.id);
  
    if (!existingCart) {
      state.cart.push({
        ...product,
        count: 1,
        total: product.price,
      });
    }
    state.cartCount = state.cart.length;
  },  
  addToFav(state, product) {
    const existingFav = state.favorites.find(fav => fav.id == product.id)
    let favoriteLike = state.favorites.find(like => like.likes == product.id);
    favoriteLike++
    if(existingFav){
      existingFav.count += 1
    }else{
      state.favorites.push(product)
    }
    state.favoritesCount = state.favorites.length
  },
  removeFromCart(state, productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    state.cartCount -= 1
  },
  removeFromFav(state, productId) {
    state.favorites = state.favorites.filter(item => item.id !== productId);
    state.favoritesCount -= 1
  },
  INCREASE_COUNT(state, productId) {
    const item = state.cart.find(p => p.id === productId);
    if (item) {
      item.count += 1;
      item.total = item.price * item.count;
    }
  },  
  DECREASE_COUNT(state, productId) {
    const item = state.cart.find(p => p.id === productId);
    if (item && item.count > 1) {
      item.count -= 1;
      item.total = item.price * item.count;
    }
  }
  
}

export const getters = {
  cartTotalSum(state) {
    return state.cart.reduce((sum, item) => sum + item.total, 0);
  }
}
