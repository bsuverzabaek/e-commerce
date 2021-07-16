<template>
	<div 
		class="drawer-background" 
		:class="{show: active}"
		@click="$emit('close-product-drawer')"
	/>

	<div class="drawer" :class="{show: active}">
		<div class="drawer-close" @click="$emit('close-product-drawer')">
			X
		</div>

		<div v-if="product" class="product-details">
			<h3 class="text-center">{{ product.name }}</h3>
			<div v-if="product.name=='Sandals'">
				<img src="../../../assets/products/sandals.jpg" class="imgStyle"/>
				<star-rating 
					:rating="4.1" 
					:read-only="true" 
					:increment="0.01"
					:star-size="25"
					:inline="true" 
				>
				</star-rating>
			</div>
			<div v-else-if="product.name=='Vest'">
				<img src="../../../assets/products/vest.jpg" class="imgStyle"/>
				<star-rating 
					:rating="4.3" 
					:read-only="true" 
					:increment="0.01"
					:star-size="25"
					:inline="true" 
				>
				</star-rating>
			</div>
			<div v-else-if="product.name=='Cap'">
				<img src="../../../assets/products/cap.jpg" class="imgStyle"/>
				<star-rating 
					:rating="3.8" 
					:read-only="true" 
					:increment="0.01"
					:star-size="25"
					:inline="true" 
				>
				</star-rating>
			</div>
			<div v-else-if="product.name=='Watch'">
				<img src="../../../assets/products/watch.jpg" class="imgStyle"/>
				<star-rating 
					:rating="4.2" 
					:read-only="true" 
					:increment="0.01"
					:star-size="25"
					:inline="true" 
				>
				</star-rating>
			</div>
			<div v-else-if="product.name=='Ski Jacket'">
				<img src="../../../assets/products/skiJacket.jpg" class="imgStyle"/>
				<star-rating 
					:rating="3.9" 
					:read-only="true" 
					:increment="0.01"
					:star-size="25"
					:inline="true" 
				>
				</star-rating>
			</div>
			<p class="description">{{ product.description }}</p>
			<h3 class="text-center">${{ product.price.toFixed(2) }}</h3>

			<div class="cart-total" v-if="product_total">
				<h3>In Cart</h3>
				<h4>{{ product_total }}</h4>
			</div>

			<div class="button-container">
				<button class="remove" @click="removeFromCart()">Remove</button>
				<button class="add" @click="addToCart()">Add</button>
			</div>
		</div>
	</div>
</template>

<script>
	import StarRating from 'vue-star-rating';

	export default {
		props: ['product', 'active'],
		emits: ['close-product-drawer'],
		components: {
			StarRating
		},
		methods: {
			addToCart() {
				this.$store.commit('addToCart',this.product)
			},
			removeFromCart(){
				this.$store.commit('removeFromCart',this.product)
			}
		},
		computed: {
			product_total() {
				return this.$store.getters.productQuantity(this.product)
			}
		}
	}
</script>

<style lang="scss">
	.drawer-background{
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(124,124,124,0.55);
		z-index: 100;
		display: none;
		transition: display .5s;
		
		&.show{
			display: block;
		}
	}

	.drawer{
		width: 95vw;
		height: 100vh;
		background-color: white;
		position: fixed;
		top: 0;
		left: -105vw;
		padding: 15px;
		transition: left .5s;
		z-index: 101;
		overflow-y: scroll;
		
		&.show{
			left: 0;
		}
	}

	.drawer-close{
		font-size: 1.5rem;
		padding: 5px;
		border-radius: 5px;
		right: 10px;
		border: 2px solid gray;
		color: gray;
		width: 15px;
		float: right;
		cursor: pointer;
		
		&:hover{
			background-color: lightgray;
		}
	}

	.product-details{
		display: flex;
		justify-content: center;
		flex-direction: column;

		img.imgStyle{
			height: 300px;
			width: 300px;
			cursor: default;
		}
		
		p.description{
			padding: 20px;
			line-height: 1.5rem;
		}
		
		.button-container{
			button{
				width: 150px;
				border: none;
				padding: 10px;
				border-radius: 5px;
				margin: 0 5px 50px 5px;
				cursor: pointer;
			}
		}
	}
	
	@media (min-width:500px){
		.drawer{
			width: 450px;
		}
	}
</style>