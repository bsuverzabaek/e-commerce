<template>
	<div
		class="cart-background"
		:class="{show: active}"
		@click="$emit('close-cart')"
	/>

	<div class="cart" :class="{show: active}">
		<div class="cart-close" @click="$emit('close-cart')">
			X
		</div>

		<div class="text-center">
			<h3 class="cartStyle">Cart</h3>

			<div v-if="products.length===0">
				<p class="cartStyle">Cart is empty</p>
			</div>
			<div v-else>
				<table>
					<tr>
						<th class="prodClass">Product</th>
						<th>Qty.</th>
						<th>Price</th>
					</tr>
					<tr v-for="product in products" :key="product.id">
						<td class="prodClass">{{ convertProd(product.name) }}</td>
						<td>{{ product.quantity }}</td>
						<td>{{ sumTotal(convertPrice(product.price) * product.quantity).toFixed(2) }}</td>
					</tr>
				</table>

				<table class="tableStyle">
					<tr>
						<td>Cart Total:</td>
						<td>${{ cartTotal.toFixed(2) }}</td>
					</tr>
				</table>

				<button class="view-product-button" id="buttonStyle">
					Pay with Credit Card
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'CartDescript',
		props: ['active'],
		emits: ['close-cart'],
		data() {
			return {
				itemTotal: []
			}
		},
		computed: {
			products() {
				return this.$store.getters.cartItems
			},
			cartTotal() {
				return this.itemTotal.reduce((a,b) => a+b,0)
			}
		},
		methods: {
			convertProd(prod) {
				if(prod=='サンダル'){
					return 'Sandals'
				}else if(prod=='ベスト'){
					return 'Vest'
				}else if(prod=='キャップ'){
					return 'Cap'
				}else if(prod=='時計'){
					return 'Watch'
				}else if(prod=='スキージャンパー'){
					return 'Ski Jacket'
				}else{
					return prod
				}
			},
			convertPrice(price) {
				if(price===1000){
					return 10
				}else if(price===4000){
					return 40
				}else if(price===500){
					return 5
				}else if(price===30000){
					return 300
				}else if(price===10000){
					return 100
				}else{
					return price
				}
			},
			sumTotal(sum) {
				this.itemTotal.push(sum)
				return sum
			}
		},
		beforeUpdate() {
			this.itemTotal.length = 0
		}
	}
</script>

<style lang="scss">
	.cart-background{
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

	.cart{
		width: 95vw;
		height: 100vh;
		background-color: white;
		position: fixed;
		top: 0;
		right: -105vw;
		padding: 15px;
		transition: right .5s;
		z-index: 101;
		overflow-y: scroll;
		&.show{
			right: 0;
		}
	}

	.cart-close{
		font-size: 1.5rem;
		padding: 5px;
		border-radius: 5px;
		left: 10px;
		border: 2px solid gray;
		color: gray;
		width: 15px;
		float: left;
		cursor: pointer;
		
		&:hover{
			background-color: lightgray;
		}
	}
	
	@media (min-width:500px){
		.cart{
			width: 450px;
		}
	}

	.cartStyle{
		margin-left: 50px;
	}

	table{
		width: 100%;
	}

	.tableStyle{
		margin-top: 100px;
	}

	#buttonStyle{
		margin-top: 40px;
	}
</style>