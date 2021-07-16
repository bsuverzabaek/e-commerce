<template>
	<div class="register">
		<router-link to="/register">English</router-link>
		<h1 class="jpStyle">新規会員登録</h1>
		
		<form @submit.prevent="Register">
			<input type="text" placeholder="メールアドレス" v-model="email" class="jpStyle"/>
			<input type="password" placeholder="パスワード" v-model="password" class="jpStyle"/>
			<input type="submit" value="作成" class="jpStyle"/>
			<p class="jpStyle">
				すでにアカウントをお持ちですか？ 
				<router-link to="/JP" class="jpStyle">ログイン</router-link>
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

			const Register = () => {
				auth
					.createUserWithEmailAndPassword(email.value,password.value)
					.then(user => {
						alert('登録に成功');
					})
					.catch((err) => {
						if(err.code=='auth/email-already-in-use'){
							alert('提供されたメールアドレスはすでに既存のユーザーによって使用されています。各ユーザーに固有のメールアドレスが必要です')
						}else if(err.code=='auth/invalid-email'){
							alert('メールアドレスが無効です')
						}else if(err.code=='auth/operation-not-allowed'){
							alert('メールアドレスまたはパスワードが有効になっていません')
						}else if(err.code=='auth/weak-password'){
							alert('パスワードは最低でも６文字必要です')
						}else{
							alert(err.message)
						}
					});
			}

			return { Register, email, password }
		}
	}
</script>