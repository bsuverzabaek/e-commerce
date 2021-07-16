<template>
	<div class="register">
		<router-link to="/registerJP">日本語</router-link>
		<h1>Register</h1>
		
		<form @submit.prevent="Register">
			<input type="text" placeholder="Email" v-model="email" />
			<input type="password" placeholder="Password" v-model="password" />
			<input type="submit" value="Register" />
			<p>Have an account? <router-link to="/login">Login Here</router-link></p>
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
						alert('Registration Successful');
					})
					.catch(err => alert(err.message));
			}

			return { Register, email, password }
		}
	}
</script>