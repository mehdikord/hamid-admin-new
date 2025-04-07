import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router';
import '@/assets/scss/app.scss'
import VueFeather from 'vue-feather';
import store from './store'
import Breadcrumbs from './components/bread_crumbs';

import * as bootstrap from 'bootstrap';
import settingPage from "./components/settingPage.vue"
import DropZone from "dropzone-vue";
// import 'bootstrap/dist/js/bootstrap.bundle'

import PerfectScrollbar from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
import Toaster from "@meforma/vue-toaster";
import 'vue3-tour/dist/vue3-tour.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import bcard from "./components/b-card.vue" 
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import VueAnimateOnScroll from 'vue3-animate-onscroll';
import { quillEditor } from "vue3-quill";
import Lightbox from 'vue-easy-lightbox'
import { VueMasonryPlugin } from 'vue-masonry';
import vue3StarRatings from "vue3-star-ratings";
import VueNumber from "vue-number-animation";
import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';
import Multiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.css"
import { createI18n } from 'vue-i18n'
import { defaultLocale, localeOptions } from './constants/config';
import Toast, {POSITION, useToast} from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@/assets/css/fonts/font.css"
// import the styles

//Mixins
import notify from "@/mixins/helpers/notify";
import validation from "@/mixins/helpers/validations";
import axiosInstance from "@/mixins/helpers/axios/axios";

//Global Components
import Global_Validation_Errors from "@/components/globals/Global_Validation_Errors.vue";
import {Stores_Auth} from "@/store/pinia/auth/auth";
import MTable from "@/components/data/table/MTable.vue";
import Activation from "@/components/actions/Activation.vue";
import Global_Loading_Circle from "@/components/globals/Global_Loading_Circle.vue";
import Delete_Action from "@/components/actions/Delete_Action.vue";


const app = createApp(App);
 const locale = (localStorage.getItem('currentLanguage') && localeOptions.filter(x => x.id === localStorage.getItem('currentLanguage')).length > 0) ? localStorage.getItem('currentLanguage') : defaultLocale;
 const i18n = createI18n({

  locale: locale,
  messages: {
    }
 });





 //Set Global Components
app.component('validation_errors',Global_Validation_Errors)
app.component('loading_circle',Global_Loading_Circle)
app.component('action_activation',Activation)
app.component('action_delete',Delete_Action)
app.component("vue3-star-ratings", vue3StarRatings)
app.component("settingPage", settingPage)
app.component("b-card", bcard)
app.component('multiselect', Multiselect)
app.component(VueFeather.name, VueFeather)
app.component('Breadcrumbs', Breadcrumbs)
app.component('MTable',MTable)


app.use(Toast)
app.use(i18n)
app.use(SimpleTypeahead)
app.use(VueMasonryPlugin)
app.use(VueNumber)
app.use(quillEditor)
app.use(Lightbox)
app.use(store)
app.use(VueSweetalert2)
app.use(VueAnimateOnScroll)
app.use(Vue3Toasity)
app.use(Toaster)
app.use(router)
app.use(PerfectScrollbar)
app.use(DropZone)

//Use Mixins
app.mixin(notify);
app.mixin(validation);


app.config.globalProperties.$axios = axiosInstance;
const pinia = createPinia()
pinia.use(({ store }) => {
 store.$axios = axiosInstance;
});
app.use(pinia)
Stores_Auth().AuthSyncData();
app.mount('#app')

