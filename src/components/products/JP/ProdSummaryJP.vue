<template>
	<div class="card">
		<h3 class="jpStyle">{{ product.name }}</h3>

		<p class="text-mutedJP">カテゴリー： {{ product.category }}</p>
		<p class="descriptionJP">{{ description }}</p>
		<h5 class="priceJP">値段： ￥{{ product.price }}</h5>
		<button 
			class="view-product-buttonJP" 
			@click="$emit('view-product',product)"
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
		width: 80%;
		margin: 10%;
		padding: 10px;
		border-radius: 5px;
		background-color: white;
		box-shadow: 0 0 5px gray;
		
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

	button.view-product-buttonJP{
		padding: 10px;
		background-color: rgb(79,160,187);
		border: none;
		color: white;
		font-weight: bold;
		font-size: 1.15rem;
		border-radius: 5px;
		cursor: pointer;
		font-family: $jpFont; 
		line-height: $jpLineHeight;
	}

	@media (min-width:500px){
		.card{
			width: 350px;
			margin: 10px;
		}
	}
</style>