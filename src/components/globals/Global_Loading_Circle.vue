<script>
export default {
  name: "Global_Loading_Circle",
  props : {
      size: {
          type: String,
          default: "100px"
      },
    text : {
        type: String,
        default: "درحال دریافت اطلاعات"
    }
  }
}
</script>

<template>
<div class="text-center pt-3 pb-3">
  <img src="@/assets/images/icons/loading-circle.svg" :width="size" alt="">
  <div class="mt-1">
    <strong>{{ text }}</strong>
  </div>
</div>
</template>

<style scoped>

</style>