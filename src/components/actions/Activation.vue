<script>
export default {
  name: "Activation",
  props : ['is_active'],
  methods:{
    Change_Activation(){
      this.$swal({
        theme:'dark',
        text:'آیا اطمینان به تغییر وضعیت این آیتم دارید‌ ؟',
        showCancelButton: true,
        icon: 'question',
        confirmButtonText: 'تغییر وضعیت',
        confirmButtonColor: '#54ba4a',
        cancelButtonText: 'خیر',
        cancelButtonColor: '#fc4438',
      }).then((result)=>{
        if(result.isConfirmed){
          this.$emit('Submit');
        }
      });
    }
  }

}
</script>

<template>
<button @click="Change_Activation" v-if="is_active" class="btn btn-pill btn-success btn-xs pt-1 pb-1 pe-3 ps-3 font-12"><i class="fa-duotone fa-check fa-regular font-14"></i> فعال</button>
<button @click="Change_Activation" v-else class="btn btn-pill btn-danger btn-xs pt-1 pb-1 pe-3 ps-3 font-12"><i class="fa-duotone fa-times fa-regular font-14"></i> غیرفعال</button>
</template>

<style scoped>

</style>