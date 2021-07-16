<template>
  <router-view/>
</template>

<script>
  import { onBeforeMount } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { auth } from './utilities/firebase';

  export default {
    setup() {
      const router = useRouter();
      const route = useRoute();

      onBeforeMount(() => {
        auth.onAuthStateChanged((user) => {
          if (!user && route.path=='/home') {
            router.replace('/');
          } else if (!user && route.path=='/homeJP') {
            router.replace('/JP');
          } else if (route.path=='/' || route.path=='/register') {
            if (user) {
              router.replace('/home');
            }
          } else if (route.path=='/JP' || route.path=='/registerJP') {
            if (user) {
              router.replace('/homeJP');
            }
          }
        });
      });
    },
    mounted() {
      this.$store.commit('updateCartFromLocalStorage')
    }
  }
</script>

<style lang="scss">
  body {
    background: white;
    color: black;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  a {
    color: inherit;
  }
</style>