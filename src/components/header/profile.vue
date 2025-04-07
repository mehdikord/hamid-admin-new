<template>
  <li v-if="user" class="profile-nav onhover-dropdown pe-0 py-0">
    <div class="media profile-media">

      <div class="media-body">
        <span>{{ user.name }}</span>
        <p class="mb-0 font-roboto">
          {{ user.email }} <i class="middle fa fa-angle-down"></i>
        </p>
      </div>
    </div>
    <ul class="profile-dropdown onhover-show-div">
      <li>
        <router-link :to="'/users/profile'"><vue-feather type="user"></vue-feather><span>حساب کاربری </span></router-link>
      </li>
      <li>
        <router-link :to="'/email/readMail'"><vue-feather type="mail"></vue-feather><span>صندوق ورودی</span></router-link>
      </li>
      <li>
        <router-link :to="'/app/task'"><vue-feather type="file-text"></vue-feather><span>وظایف</span></router-link>
      </li>
      <li>
        <router-link :to="'/pages/search'"><vue-feather type="settings"></vue-feather><span>تنظیمات</span></router-link>
      </li>
      <li>
        <a @click="logout"
          ><vue-feather type="log-in"></vue-feather><span class="text-danger">خروج از حساب</span></a
        >
      </li>
    </ul>
  </li>
</template>

<script>

  import {Stores_Auth} from "@/store/pinia/auth/auth";

  export default {
    name: 'Profile',
    mounted() {
      this.user = Stores_Auth().AuthGetUser
    },
    data(){
      return {
        user:null
      }
    },
    methods: {
      logout: function() {
        Stores_Auth().AuthLogout();
      }
    },
  };
</script>
