<template>
  <div class="header-logo-wrapper col-auto p-0">
    <div class="logo-wrapper">
      <router-link to="/">
        <img class="img-fluid" src="../../assets/images/logo/logo.png" alt />
      </router-link>
    </div>
    <div class="toggle-sidebar" @click="toggle_sidebar">

    </div>
  </div>

</template>

<script>
  export default {
    name: 'Logo',
    methods: {
      toggle_sidebar() {
        this.$store.dispatch('menu/opensidebar');
      },
    },
  };
</script>
