<script>
export default {
  name: "Global_Data_Badges_Color",
  props: {
      color: {
          type: String,
          default: "#7366ff"
      },
      size: {
          type: String,
          default: "30px"
      }
  }
}
</script>

<template>
  <div class="" :style="{backgroundColor: color, width: size, height: size,borderRadius:'5px'}"></div>
</template>

<style scoped>

</style>