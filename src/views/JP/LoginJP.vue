<template>
	<div class="login">
		<router-link to="/login">English</router-link>
		<h1 class="jpStyle">ログイン</h1>
		
		<form @submit.prevent="Login">
			<input type="text" placeholder="メールアドレス" v-model="email"  class="jpStyle"/>
			<input type="password" placeholder="パスワード" v-model="password"  class="jpStyle"/>
			<input type="submit" value="ログイン"  class="jpStyle"/>
			<p class="jpStyle">
				初めてご利用ですか？ 
				<router-link to="/registerJP" class="jpStyle">新規会員登録</router-link>
			</p>
		</form>
	</div>
</template>

<script>
	import { ref } from 'vue';
	import { auth } from '../../utilities/firebase';
	
	export default {
		setup() {
			const email = ref("");
			const password = ref("");

			const Login = () => {
				auth
					.signInWithEmailAndPassword(email.value,password.value)
					.then(data => alert('ログイン成功'))
					.catch((err) => {
						if(err.code=='auth/user-not-found'){
							alert('提供された ID に対応する既存のユーザー レコードはありません')
						}else if(err.code=='auth/invalid-email'){
							alert('メールアドレスが無効です')
						}else if(err.code=='auth/user-disabled'){
							alert('メールアドレスが無効になっています')
						}else if(err.code=='auth/wrong-password'){
							alert('間違ったパスワード')
						}else{
							alert(err.message)
						}
					});
			}

			return { Login, email, password }
		}
	}
</script>

<style lang="scss">
	.jpStyle{
		font-family : $jpFont;
		line-height: $jpLineHeight;
	}
</style>