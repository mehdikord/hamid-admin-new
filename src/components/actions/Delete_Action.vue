<script>
export default {
  name: "Delete_Action",
  props:{
      loading:{
          type:Boolean,
          default:false
      }
  },
  methods:{
    RemoveItem(){
      this.$swal({
        theme:'dark',
        text:'آیا به حذف این آیتم اطمینان دارید‌ ؟',
        showCancelButton: true,
        icon: 'question',
        confirmButtonText: 'حذف آیتم',
        confirmButtonColor: '#54ba4a',
        cancelButtonText: 'خیر',
        cancelButtonColor: '#fc4438',
      }).then((result)=>{
        if(result.isConfirmed){
          this.$emit('Deleted');
        }
      });
    }

  }
}
</script>

<template>
  <button @click="RemoveItem" class="btn btn-outline-danger btn-tools me-2 ms-2" title="حذف کارشناس">
    <i v-if="!loading" class="fa-duotone fa-trash fa-regular"></i>
    <i v-else class="fa-duotone fa-spinner fa-spin fa-regular"></i>
  </button>

</template>

<style scoped>

</style>