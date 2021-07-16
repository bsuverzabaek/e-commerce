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

		<div v-if="product" class="product-details" id="prodJP">
			<h3 class="text-center">{{ product.name }}</h3>
			<div v-if="product.name=='サンダル'">
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
			<div v-else-if="product.name=='ベスト'">
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
			<div v-else-if="product.name=='キャップ'">
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
			<div v-else-if="product.name=='時計'">
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
			<div v-else-if="product.name=='スキージャンパー'">
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
			<h3 class="text-center">￥{{ product.price }}</h3>

			<div class="cart-total" v-if="product_total">
				<h3>数量</h3>
				<h4>{{ product_total }}点</h4>
			</div>

			<div class="button-container">
				<button class="remove" @click="removeFromCart()">ー</button>
				<button class="add" @click="addToCart()">＋</button>
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
	#prodJP{
		font-family: $jpFont;
		line-height: $jpLineHeight;
	}
	
	@media (min-width:500px){
		.drawer{
			width: 450px;
		}
	}
</style>