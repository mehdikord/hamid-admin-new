<template>
  <head>
    <title></title>
  </head>
  <div class="loader-wrapper" v-if="loading">
    <div class="loader-index"><span></span></div>
    <svg>
      <defs></defs>
      <filter id="goo">
        <fegaussianblur in="SourceGraphic" stddeviation="11" result="blur"></fegaussianblur>
        <fecolormatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo"> </fecolormatrix>
      </filter>
    </svg>
  </div>
  <router-view v-else></router-view>
</template>

<script>



export default {

  name: 'App',
  data() {
    return {
      loading: true,
    }
  },

  mounted() {
    this.loading = false;

  }
}
</script>

