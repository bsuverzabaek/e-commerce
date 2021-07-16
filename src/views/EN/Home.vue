<template>
  <div class="home">
  	<div id="navBar">
  		<router-link to="/JP">日本語</router-link>
  		<button class="logout" @click="Logout">Logout</button>
  		<img src="../../assets/cart/cart.png" @click="viewCart()"/>
  	</div>

  	<h1>Welcome to the Marketplace!</h1>

  	<CartDescript
  		:active="active.cart_drawer"
  		v-on:close-cart="closeCart()"
  	/>

  	<ProdDescript
  		:product="product"
  		:active="active.product_drawer"
  		v-on:close-product-drawer="closeProductDrawer()"
  	/>

  	<div class="product-cards-container">
  		<ProdSummary
  			v-for="product in items"
  			:key="product.id"
  			:product="product" 
  			v-on:view-product="viewProduct($event)"
  		/>
  	</div>
  </div>
</template>

<script>
	import items from '../../data/EN/items.js'
	import ProdSummary from '../../components/products/EN/ProdSummary.vue'
	import ProdDescript from '../../components/products/EN/ProdDescript.vue'
	import CartDescript from '../../components/cart/EN/CartDescript.vue'
	import { ref, onBeforeMount } from 'vue'
	import { auth } from '../../utilities/firebase'
	
	export default {
	  name: 'Home',
	  components: {
	  	ProdSummary, ProdDescript, CartDescript
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
	  			.then(() => alert("Sign out successful"))
	  			.catch(err => alert(err.message));
	  	}

	  	return { Logout }
	  }
	}
</script>

<style lang="scss">
	body{
		margin: 0;
		padding: 0;
	}

	.product-cards-container{
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	img{
		height: 50px;
		width: 50px;
		cursor: pointer;
	}

	#navBar{
		background-color: black;
		width: 100%;
		float: right;
		margin-right: 10px;
		padding: 0;
		margin: 0px;
		margin-top: -22px;

		a{
			color: white;
			float: right;
			margin-right: 10px;
			margin-top: 12px;
		}

		button{
			float:right;
			margin-right: 30px;
			margin-top: 10px
		}

		img{
			float:right;
			margin-right:30px
		}
	}

	.logout{
		padding: 5px;
		background-color: red;
		border: none;
		color: white;
		font-weight: bold;
		font-size: 1.15rem;
		border-radius: 5px;
		cursor: pointer;
	}	
</style>