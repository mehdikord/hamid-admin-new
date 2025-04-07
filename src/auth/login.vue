<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-7 b-center bg-size" :style="{ backgroundImage: 'url('+ require('@/assets/images/login/2.jpg') +')' }" style="background-size: cover; background-position: center center; display: block;">
        <img class="bg-img-cover bg-center" src="@/assets/images/login/2.jpg" alt="looginpage" style="display: none;" />
      </div>
      <div class="col-xl-5 p-0">
        <div class="login-card">
          <div>
            <div>
              <a class="logo text-start">
              </a>
            </div>
            <div class="login-main ">
              <form class="theme-form" >
                <h4>ورود به حساب کاربری</h4>
                <p class="mt-2">برای  ایمیل و گذرواژه خود را وارد کنید</p>
                <div class="form-group">
                  <label class="col-form-label">آدرس ایمیل</label>
                  <input v-model="login.email" class="form-control" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'email')}"  type="email" required="" />
                  <validation_errors :errors="this.Helpers_Validation_Errors(errors,'email')"></validation_errors>
                </div>
                <div class="form-group">
                  <label class="col-form-label">گذرواژه</label>
                  <div class="form-input position-relative">
                    <input v-model="login.password" class="form-control" :class="{'is-invalid' : this.Helpers_Validation_Check(errors,'password')}" type="password"  required="" />
                    <validation_errors :errors="this.Helpers_Validation_Errors(errors,'password')"></validation_errors>
                  </div>
                </div>
                <div class="form-group mb-0 mt-5">
                  <button @click="Login" type="button" class="btn btn-primary btn-block w-100 font-16 p-2" :disabled="loading">
                    ورود به مدیریت
                    <i v-if="loading" class="fa fa-spin fa-spinner font-18"></i>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Stores_Auth} from "@/store/pinia/auth/auth";

export default {

  mounted() {

  },
  data(){
    return {
      loading : false,
      login : {
        email : null,
        password: null,
      },
      errors:[]
    }
  },
  methods:{
    Login(){
      this.loading = true;
      this.errors = [];
      Stores_Auth().AuthLoginRequest(this.login).then(res=>{
        Stores_Auth().AuthLogin(res.data.result.user,res.data.result.token)
        this.Helpers_Notify_Success('باموفقیت وارد حساب شدید . خوش آمدید');
        this.$router.push('/');
      }).catch(error=>{
        if (error.response.status === 409){
          this.Helpers_Notify_Error('اطلاعات ورود به حساب نادرست است');
        }
        if (error.response.status === 422){
          this.errors = error.response.data;
          this.Helpers_Notify_Validation();
        }
        this.loading = false;
      })
    }
  }
}
</script>
