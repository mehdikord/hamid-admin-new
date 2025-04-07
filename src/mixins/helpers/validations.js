export default {
    methods: {
        Helpers_Validation_Check(errors=[],key){
            return !!(errors[key] && errors[key].length);
        },
        Helpers_Validation_Errors(errors=[],key){
            return errors[key] && errors[key].length ? errors[key] : {};
        }
    }


}