<template>
	<div class="login">
		<router-link to="/JP">日本語</router-link>
		<h1>Login</h1>

		<form @submit.prevent="Login">
			<input type="text" placeholder="Email" v-model="email" />
			<input type="password" placeholder="Password" v-model="password" />
			<input type="submit" value="Login" />
			<p>Need an account? <router-link to="/register">Register Here</router-link></p>
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
					.then(data => alert('Login was successful'))
					.catch(err => alert(err.message));
			}
			
			return { Login, email, password }
		}
	}
</script>