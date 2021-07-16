<template>
	<div class="card">
		<h3 class="jpStyle">{{ product.name }}</h3>

		<p class="text-mutedJP">カテゴリー： {{ product.category }}</p>
		<p class="descriptionJP">{{ description }}</p>
		<h5 class="priceJP">値段： ￥{{ product.price }}</h5>
		<button 
			class="view-product-button" 
			@click="$emit('view-product',product)"
			id="prodButtonJP"
		>
			詳細を見る
		</button>
	</div>
</template>

<script>
	export default {
		props: ['product'],
		computed: {
			description() {
				return this.product.description.substring(0,150)
			}
		}
	}
</script>

<style lang="scss">
	.card{
		h5.priceJP{
			color: black;
			font-family: $jpFont; 
			line-height: $jpLineHeight;
		}

		p.descriptionJP{
			font-size: .85rem;
			font-family: $jpFont; 
			line-height: $jpLineHeight;
		}

		p.text-mutedJP{
			color: black;
			font-family : $jpFont;
			line-height: $jpLineHeight;
		}
	}

	#prodButtonJP{
		font-family: $jpFont; 
		line-height: $jpLineHeight;
	}
</style>