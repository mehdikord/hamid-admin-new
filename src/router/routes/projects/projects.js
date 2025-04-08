import Projects_Index from "@/pages/projects/projects/Projects_Index.vue";
import Projects_Create from "@/pages/projects/projects/Projects_Create.vue";


const Projects = [
    {
        path: '/projects',
        name: 'projects',
        component: Projects_Index,
        meta: {
            title: 'پروژه ها',
            subtitle : 'لیست پروژه ها'
        }
    },
    {
        path: '/projects/create',
        name: 'projects_create',
        component: Projects_Create,
        meta: {
            title: 'پروژه ها',
            subtitle : 'ایجاد پروژه جدید'
        }
    },
]

export default Projects