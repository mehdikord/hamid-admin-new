<script>
import {Stores_Project_Categories} from "@/store/pinia/projects/project_categories";

export default {
  name: "Projects_Categories_Create",
  props: ['data'],
  mounted() {
     if (this.data){
         this.items = this.data;
     }
  },
  data(){
    return {
      items:{
        name : null,
        color:null,
        description:null,
      },
    }
  },
  methods :{
    Update_Item(){

      this.loading=true;
      Stores_Project_Categories().Edit(this.items).then(res => {
        this.$emit('Updated',res.data.result);
        this.loading=false;
      }).catch(error => {
        if (error.response.status === 422){
          this.errors = error.response.data;
          this.Helpers_Notify_Validation();
        }
        this.loading=false;
      })


    }
  }
}
</script>

<template>

    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title">ویرایش آیتم </h6>
        <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
          <div class="mb-2">
            <label class="col-form-label">عنوان دسته بندی</label>
            <input v-model="items.name" class="form-control" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'name')}"  type="text" />
            <validation_errors :errors="this.Helpers_Validation_Errors(errors,'name')"></validation_errors>
          </div>
          <div class="mb-2">
            <label class="col-form-label">انتخاب رنگ</label>
            <input v-model="items.color" class="form-control" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'color')}"  type="color" />
            <validation_errors :errors="this.Helpers_Validation_Errors(errors,'color')"></validation_errors>
          </div>
          <div class="mb-2">
            <label class="col-form-label">توضیحات</label>
            <textarea v-model="items.description" class="form-control" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'description')}"  rows="3"></textarea>
            <validation_errors :errors="this.Helpers_Validation_Errors(errors,'description')"></validation_errors>
          </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">بستن</button>
        <button @click="Update_Item" :disabled="loading" class="btn btn-primary" type="button">
          ویرایش آیتم
          <i v-if="loading" class="fa fa-spin fa-spinner font-18"></i>
        </button>
      </div>
    </div>
</template>

<style scoped>

</style>