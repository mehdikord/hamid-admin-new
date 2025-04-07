<template>
  <div class="header-wrapper row m-0">
    <SearchBar />
    <Logo/>
    <div class="left-header col-xxl-5 col-xl-6 col-lg-5 col-md-4 col-sm-3 p-0">
      <strong class="font-13">{{this.$route.meta.title}}</strong>
      <template v-if="this.$route.meta.subtitle">
        <i class="fa fa-angle-left font-16 ms-2 me-2"></i>
        <span class="ms-2">{{ this.$route.meta.subtitle }}</span>
      </template>
    </div>
    <div class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
      <ul class="nav-menus">
        <li>
          <span class="header-search"
            ><svg >
              <use href="@/assets/svg/icon-sprite.svg#search" ></use>
            </svg>
           </span>
        </li>
        <li>
          <Mode />
        </li>
        <Notifications />
        <Profile />
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import Notifications from './notifications.vue';
  import Mode from './mode';
  import Profile from './profile';
  import Logo from './logo.vue';
  import SearchBar from './search';
  export default {
    components: {
      Notifications,Mode,Profile,Logo,SearchBar,
    },
    data() {
      return {
        bookmark: false,
      };
    },
    methods: {

    },
    setup() {
    return {

    };
  },
  };
</script>
