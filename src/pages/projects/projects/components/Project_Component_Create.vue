<script>
import {Stores_Project_Categories} from "@/store/pinia/projects/project_categories";
import {Stores_Project_Statuses} from "@/store/pinia/projects/project_statuses";

export default {
  name: "Project_Component_Create",
  mounted() {
      this.Get_Categories();
      this.Get_Statuses();
  },
  data() {
      return {
        items : {
          project_category_id : null,
          project_status_id : null,
          name : null,
          manager_name : null,
          manager_phone : null,
          start_at : null,
          end_at : null,
          image : null,
          description : null,
        },
        categories :[],
        statuses :[],
        errors:[]
      }
  },
    methods: {
      Get_Categories(){
        Stores_Project_Categories().All().then(response=>{
            this.categories = response.data.result;
        }).catch(error => {
          this.Helpers_Notify_Error('خطا در دریافت دسته بندی ها')
        });
      },
      Get_Statuses(){
          Stores_Project_Statuses().All().then(response=>{
              this.statuses = response.data.result;
          }).catch(error=>{
            this.Helpers_Notify_Error('خطا در دریافت وضعیت ها')

          });
      },

    }
}
</script>

<template>
<div class="card shadow-none">
  <div class="card-body">
    <div class="row">
      <div class="col-md-12 mb-1">
        <div class="form-group">
          <label class="col-form-label font-weight-500 mb-1 text-secondary">عنوان پروژه </label>
          <input type="text" class="form-control" v-model="items.name" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'name')}">
          <validation_errors :errors="this.Helpers_Validation_Errors(errors,'name')"></validation_errors>
        </div>
      </div>
      <div class="col-md-6 mb-1">
        <div class="form-group">
          <label class="col-form-label font-weight-500 mb-1 text-secondary">انتخاب دسته بندی </label>
          <select class="form-control" v-model="items.project_category_id" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'project_category_id')}">
              <option v-for="category in categories" :value="category.id">{{category.name}}</option>
          </select>
          <validation_errors :errors="this.Helpers_Validation_Errors(errors,'project_category_id')"></validation_errors>
        </div>
      </div>
      <div class="col-md-6 mb-1">
        <div class="form-group">
          <label class="col-form-label font-weight-500 mb-1 text-secondary">انتخاب وضعیت </label>
          <select class="form-control" v-model="items.project_status_id" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'project_status_id')}">
              <option v-for="status in statuses" :value="status.id">{{status.name}}</option>
          </select>
          <validation_errors :errors="this.Helpers_Validation_Errors(errors,'project_status_id')"></validation_errors>
        </div>
      </div>
      <div class="col-md-6 mb-1">
        <div class="form-group">
          <label class="col-form-label font-weight-500 mb-1 text-secondary">نام مدیریت </label>
          <input type="text" class="form-control" v-model="items.manager_name" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'manager_name')}">
          <validation_errors :errors="this.Helpers_Validation_Errors(errors,'manager_name')"></validation_errors>
        </div>
      </div>
      <div class="col-md-6 mb-1">
        <div class="form-group">
          <label class="col-form-label font-weight-500 mb-1 text-secondary">شماره تماس مدیریت</label>
          <input type="text" class="form-control" v-model="items.manager_phone" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'manager_phone')}">
          <validation_errors :errors="this.Helpers_Validation_Errors(errors,'manager_phone')"></validation_errors>
        </div>
      </div>
      <div class="col-md-6 mb-1">
        <div class="form-group">
          <label class="col-form-label font-weight-500 mb-1 text-secondary">تاریخ شروع</label>
          <date-picker color="purple" mode="single" v-model="items.start_at"></date-picker>
          <validation_errors :errors="this.Helpers_Validation_Errors(errors,'start_at')"></validation_errors>
        </div>
      </div>
      <div class="col-md-6 mb-1">
        <div class="form-group">
          <label class="col-form-label font-weight-500 mb-1 text-secondary">تاریخ پایان</label>
          <date-picker color="purple" mode="single" v-model="items.end_at"></date-picker>
          <validation_errors :errors="this.Helpers_Validation_Errors(errors,'end_at')"></validation_errors>
        </div>
      </div>
      <div class="col-md-12 mb-1">
        <div class="form-group">
          <label class="col-form-label font-weight-500 mb-1 text-secondary">توضیحات</label>
          <textarea v-model="items.description" class="form-control" rows="4"></textarea>
        </div>
      </div>
    </div>
    <div class="mt-4 text-end">
      <button class="btn btn-primary font-15">ثبت اطلاعات اولیه و مرحله بعد <i class="fa-duotone fa-arrow-left-to-arc fa-regular font-18"></i></button>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>