<script>
export default {
  name: "Global_Validation_Errors",
  props:['errors'],
}
</script>

<template>

  <ul class="mt-2" v-if="errors">
    <li v-for="error in errors"><small class="text-danger">{{error}}</small></li>
  </ul>
</template>

<style scoped lang="scss">

</style>