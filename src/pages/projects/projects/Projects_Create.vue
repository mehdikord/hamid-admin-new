<script>
import Project_Component_Create from "@/pages/projects/projects/components/Project_Component_Create.vue";

export default {
name: "Projects_Create",
  components :{
  'project_create' : Project_Component_Create

  },
  data(){
      return{
        create_loading:false,
        step : 'create',
        project_create_data:null,
      }
  },
}
</script>

<template>
  <div class="card">
    <div class="card-header p-4 b-r-primary border-4">
      <h6 class="f-18">ایجاد پروژه جدید</h6>
    </div>
    <div class="card-body">
      <div class="row justify-content-center">

        <div class="col-md-3 father-box">
          <div class="step-box text-center cursor-pointer" @click="step = 'create'">
            <i class="fa-duotone fa-octagon-plus f-38" :class="{'text-danger' : step === 'create'}"></i>
            <div class="mt-2">
              <strong class="f-16" :class="{'text-danger' : step === 'create'}">ایجاد پروژه </strong>
            </div>
          </div>
        </div>
        <div class="col-md-3 father-box">
          <div class="step-box text-center cursor-pointer" @click="step = 'customers'">
            <i class="fa-duotone fa-users  f-38" :class="{'text-danger' : step === 'customers'}"></i>
            <div class="mt-2">
              <strong class="f-16" :class="{'text-danger' : step === 'customers'}">افزودن مشتریان </strong>
            </div>
          </div>
        </div>
        <div class="col-md-3 father-box">
          <div class="step-box text-center cursor-pointer" @click="step = 'users'">
            <i class="fa-duotone fa-user-plus  f-38" :class="{'text-danger' : step === 'users'}"></i>
            <div class="mt-2">
              <strong class="f-16" :class="{'text-danger' : step === 'users'}">تخصیص کارشناسان </strong>
            </div>
          </div>
        </div>
        <div class="col-md-3 father-box">
          <div class="step-box text-center cursor-pointer" @click="step = 'done'">
            <i class="fa-duotone fa-octagon-check  f-38" :class="{'text-danger' : step === 'done'}"></i>
            <div class="mt-2">
              <strong class="f-16" :class="{'text-danger' : step === 'done'}">پایان مراحل </strong>
            </div>
          </div>
        </div>

      </div>
      <div class="mt-4 pe-4 ps-4">
        <hr style="color: rgba(0,0,0,0.5)"/>
      </div>
      <div class="mt-4">
        <template v-if="step === 'create'" >
            <project_create class="animation-fade-in"></project_create>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step-box{
  padding:14px;
  border-radius: 7px;
  border : 1px dashed rgba(4, 23, 43, 0.71);
}
.father-box{
  padding-left: 40px !important;
  padding-right: 40px!important;
}
</style>