<template>
  <div class="home">
  	<div id="navBar">
  		<router-link to="/">English</router-link>
  		<button class="logout" id="logoutJP" @click="Logout">ログアウト</button>
  		<img src="../assets/cart.png" @click="viewCart()"/>
  	</div>

  	<h1 class="jpStyle">市場へようこそ！</h1>

  	<CartDescriptJP
  		:active="active.cart_drawer"
  		v-on:close-cart="closeCart()"
  	/>

  	<ProdDescriptJP
  		:product="product"
  		:active="active.product_drawer"
  		v-on:close-product-drawer="closeProductDrawer()"
  	/>

  	<div class="product-cards-container">
  		<ProdSummaryJP
  			v-for="product in items"
  			:key="product.id"
  			:product="product" 
  			v-on:view-product="viewProduct($event)"
  		/>
  	</div>
  </div>
</template>

<script>
	import items from '../data/itemsJP.js'
	import ProdSummaryJP from '../components/products/ProdSummaryJP.vue'
	import ProdDescriptJP from '../components/products/ProdDescriptJP.vue'
	import CartDescriptJP from '../components/cart/CartDescriptJP.vue'
	import { ref, onBeforeMount } from 'vue'
	import { auth } from '../utilities/firebase'
	
	export default {
	  name: 'HomeJP',
	  components: {
	  	ProdSummaryJP, ProdDescriptJP, CartDescriptJP
	  },
	  data() {
	  	return{
	  		items: items,
	  		product: null,
	  		active: {
	  			product_drawer: false,
	  			cart_drawer: false
	  		}
	  	}
	  },
	  methods: {
	  	viewProduct(product) {
	  		this.product = product
	  		this.active.product_drawer = true
	  	},
	  	closeProductDrawer() {
	  		this.active.product_drawer = false
	  	},
	  	viewCart() {
	  		this.active.cart_drawer = true
	  	},
	  	closeCart() {
	  		this.active.cart_drawer = false
	  	}
	  },
	  setup() {
	  	const Logout = () => {
	  		auth
	  			.signOut()
	  			.then(() => alert("ログアウトに成功しました"))
	  			.catch(err => alert(err.message));
	  	}

	  	return { Logout }
	  }
	}
</script>

<style lang="scss">
	#logoutJP{
		font-family: $jpFont; 
		line-height: $jpLineHeight;
	}	
</style>