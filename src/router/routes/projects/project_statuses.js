import Default from "@/pages/dashboard/default.vue";
import Users_Users_Index from "@/pages/users/users/Users_Users_Index.vue";

const Users = [
    {
        path: '/projects/statuses',
        name: 'projects_statuses',
        component: Users_Users_Index,
        meta: {
            title: 'کابران سیستم',
            subtitle : 'کارشناسان'
        }
    },
]

export default Users