import { defineStore } from 'pinia'
export const Stores_Users = defineStore('users',{
    state : ()=>({}),
    actions : {
        Index(params){
           return new Promise((resolve, reject) => {
               this.$axios.get('admins/users',{params : params}).then(response =>{
                   return resolve(response);
               }).catch(error =>{
                   return reject(error);
               })
           })
       },
        All(){
            return new Promise((resolve, reject) => {
                this.$axios.get('admins/users/all',).then(response =>{
                    return resolve(response);
                }).catch(error =>{
                    return reject(error);
                })
            })
        },
        Create(params){
            return new Promise((resolve, reject) => {
                this.$axios.post('admins/users',params).then(response =>{
                    return resolve(response);
                }).catch(error =>{
                    return reject(error);
                })
            })
        },
        Show(id){
            return new Promise((resolve, reject) => {
                this.$axios.get('admins/users/'+id).then(response =>{
                    return resolve(response);
                }).catch(error =>{
                    return reject(error);
                })
            })
        },
        Edit(params){
            return new Promise((resolve, reject) => {
                this.$axios.put('admins/users/'+params.id,params).then(response =>{
                    return resolve(response);
                }).catch(error =>{
                    return reject(error);
                })
            })
        },
        Edit_Password(params){
            return new Promise((resolve, reject) => {
                this.$axios.post('admins/users/'+params.id+"/change/password",params).then(response =>{
                    return resolve(response);
                }).catch(error =>{
                    return reject(error);
                })
            })
        },
        Delete(id){
            return new Promise((resolve, reject) => {
                this.$axios.delete('admins/users/'+id).then(response =>{
                    return resolve(response);
                }).catch(error =>{
                    return reject(error);
                })
            })
        },
        Activation(id){
            return new Promise((resolve, reject) => {
                this.$axios.get('admins/users/'+id+'/activation').then(response =>{
                    return resolve(response);
                }).catch(error =>{
                    return reject(error);
                })
            })
        }

    },
    getters :{

    }




})