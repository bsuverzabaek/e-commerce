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
          if (!user && (route.path=='/' || route.path=='/about')) {
            router.replace('/login');
          } else if (!user && (route.path=='/JP' || route.path=='/aboutJP')) {
            router.replace('/loginJP');
          } else if (route.path=='/login' || route.path=='/register') {
            router.replace('/');
          } else if (route.path=='/loginJP' || route.path=='/registerJP') {
            router.replace('/JP');
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