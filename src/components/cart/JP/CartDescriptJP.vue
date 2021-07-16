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
			<h3 class="cartStyleJP">カート</h3>

			<div v-if="products.length===0">
				<p class="cartStyleJP">商品がありません</p>
			</div>
			<div v-else>
				<table class="tableJP">
					<tr>
						<th class="prodClass">商品</th>
						<th>数量</th>
						<th>値段</th>
					</tr>
					<tr v-for="product in products" :key="product.id">
						<td class="prodClass">{{ convertProd(product.name) }}</td>
						<td>{{ product.quantity }}</td>
						<td>{{ sumTotal(convertPrice(product.price) * product.quantity) }}</td>
					</tr>
				</table>

				<table class="tableStyle">
					<tr>
						<td>お会計:</td>
						<td>￥{{ cartTotal }}</td>
					</tr>
				</table>

				<button class="view-product-button" id="buttonStyleJP">
					クレジットカードで支払い
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CartDescriptJP',
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
				if(prod=='Sandals'){
					return 'サンダル'
				}else if(prod=='Vest'){
					return 'ベスト'
				}else if(prod=='Cap'){
					return 'キャップ'
				}else if(prod=='Watch'){
					return '時計'
				}else if(prod=='Ski Jacket'){
					return 'スキージャンパー'
				}else{
					return prod
				}
			},
			convertPrice(price) {
				if(price===10){
					return 1000
				}else if(price===40){
					return 4000
				}else if(price===5){
					return 500
				}else if(price===300){
					return 30000
				}else if(price===100){
					return 10000
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
	.cartStyleJP{
		margin-left: 50px;
		font-family: $jpFont; 
		line-height: $jpLineHeight;
	}

	.tableJP{
		font-family: $jpFont; 
		line-height: $jpLineHeight;
	}

	#buttonStyleJP{
		margin-top: 40px;
		font-family: $jpFont; 
		line-height: $jpLineHeight;
	}
</style>