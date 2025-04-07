import { createWebHistory, createRouter } from "vue-router";
import {Stores_Auth} from "@/store/pinia/auth/auth";
import Body from '@/components/body';

//Imports Routes
import Dashboard from '@/router/routes/dashboard';
import Auth from '@/router/routes/auth';
import Users from '@/router/routes/users';
import Projects_Categories from '@/router/routes/projects/project_categories'



const routes = [
    ...Auth,
    {
        path: '/',
        component: Body,
        children: [
            ...Dashboard,
            ...Users,
            ...Projects_Categories
        ]
      },


]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
router.beforeEach((to, from, next) => {
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (to.path !== '/auth' && !Stores_Auth().AuthGetCheckAuth) {
        next('/auth');
    }else if (to.path === '/auth' && Stores_Auth().AuthGetCheckAuth){
        next('/');
    }
    else {
        next();
    }
});
  export default router