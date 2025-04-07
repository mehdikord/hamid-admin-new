import { useToast } from "vue-toastification";

export default {
    methods: {
        Helpers_Notify_Generator(message='',type='info',icon='fa fa-info-circle',position = 'bottom-left',) {
            switch (type){
                case 'success':
                    useToast().success(message,{icon: 'fa fa-check font-20',position:position,bodyClassName:'font-vazir font-15'});
                    break;
                case 'error':
                    useToast().error(message,{icon: 'fa fa-times font-20',position:position,bodyClassName:'font-vazir font-15'});
                    break;
                case 'warning':
                    useToast().warning(message,{icon: 'fa fa-triangle-exclamation font-20',position:position,bodyClassName:'font-vazir font-15'});
                    break;
                case 'info':
                    useToast().info(message,{icon: 'fa fa-info-circle font-20',position:position,bodyClassName:'font-vazir font-15'});
                    break;
                    default:
                        useToast().info(message,{icon: icon,position:position,bodyClassName:'font-vazir font-15'});
                        break;
            }

        },


        Helpers_Notify_Success(message){
            this.Helpers_Notify_Generator(message,'success');
        },

        Helpers_Notify_Error(message){
            this.Helpers_Notify_Generator(message,'error');
        },

        Helpers_Notify_Info(message){
            this.Helpers_Notify_Generator(message,'info');
        },

        Helpers_Notify_Warning(message){
            this.Helpers_Notify_Generator(message,'warning');
        },

        //Defaults and most use notify messages
        Helpers_Notify_Created(){
            this.Helpers_Notify_Generator('آیتم باموفقیت ایجاد گردید','success');
        },
        Helpers_Notify_Updated(){
            this.Helpers_Notify_Generator('آیتم باموفقیت ویرایش گردید','success');
        },
        Helpers_Notify_Deleted(){
            this.Helpers_Notify_Generator('آیتم باموفقیت حذف گردید','success');
        },
        Helpers_Notify_Validation(){
            this.Helpers_Notify_Generator('اطلاعات ارسالی ناقص است','error');
        },
        Helpers_Notify_Server_Error(){
            this.Helpers_Notify_Generator('خطایی از سمت سرور وجود دارد','error');
        },

    }

}