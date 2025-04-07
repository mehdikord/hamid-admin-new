import Default from "@/pages/dashboard/default.vue";
import Users_Users_Index from "@/pages/users/users/Users_Users_Index.vue";

const Users = [
    {
        path: '/users/users',
        name: 'users_users',
        component: Users_Users_Index,
        meta: {
            title: 'کابران سیستم',
            subtitle : 'کارشناسان'
        }
    },
]

export default Users