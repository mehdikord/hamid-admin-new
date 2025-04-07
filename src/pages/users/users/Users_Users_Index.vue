<script>
import Users_Users_Create from "@/pages/users/users/Users_Users_Create.vue";
import {Stores_Users} from "@/store/pinia/users/users";
import { Modal } from 'bootstrap';
import Users_Users_Edit from "@/pages/users/users/Users_Users_Edit.vue";
export default {
  name: "Users_Users_Index",
  mounted(){
      this.Get_Items();
  },
  components:{
    'users_create' : Users_Users_Create,
    'users_edit' : Users_Users_Edit,
  },
  data() {
    return {
      loading:false,
      loading_delete : [],
      query_params:{
        sort_by : 'id',
        sort_type : 'desc',
        per_page : 15,
        page : 1,
        search :{}
      },
      pagination: {
        current: 1,
        total: 0,
        per_page: 15,
        last_page: 1,
        from: 1,
        to: 1,
        links:[]
      },
      items:[],
      columns :[
        {
          field : 'id',
          title : 'ID'
        },
        {
          field : 'name',
          title : 'نام'
        },
        {
            field : 'email',
            title : 'ایمیل'
        },
        {
          field: 'phone',
          title: 'موبایل'
        },
        {
          field: 'is_active',
          title: 'وضعیت حساب'
        },
        {
          field: 'tools',
          title: 'عملیات'
        }
      ]



    }
  },
  methods: {
    Get_Items(){
      this.loading=true;
      Stores_Users().Index(this.query_params).then(res => {
        this.items = res.data.result.data
        if (res.data.result){
          this.pagination.current = res.data.result.current_page;
          this.pagination.per_page = res.data.result.per_page;
          this.pagination.from = res.data.result.from;
          this.pagination.to = res.data.result.to;
          this.pagination.total = res.data.result.total;
          this.pagination.last_page = res.data.result.last_page;
          this.pagination.links = res.data.result.links;
        }
        console.log(this.pagination)
        this.loading=false;
      }).catch((error) => {
          this.loading=false;
      })
    },
    Add_Item(item){
      this.items.unshift(item);
      this.Helpers_Notify_Created();
      const modal = Modal.getInstance(document.getElementById('add_item'));
      if (modal) modal.hide()
    },
    Update_Item(item){
        this.items = this.items.map(i => {
            if (i.id === item.id){
                i = item;
            }
            return i;
        })
        this.Helpers_Notify_Updated();
        const modal = Modal.getInstance(document.getElementById('edit_item'+item.id));
        if (modal) modal.hide()
    },
    Change_Page(page){
      this.query_params.page = page;
      this.Get_Items();
    },
    Change_Per_Page(per_page){
      this.query_params.per_page = per_page;
      this.query_params.page = 1;
      this.Get_Items();

    },
    Activation(id){
      Stores_Users().Activation(id).then(res => {
          this.Helpers_Notify_Updated();
          this.items = this.items.map(item => {
              if (item.id === id){
                  item.is_active = !item.is_active;
              }
              return item;
          })
      }).catch((error) => {
          this.Helpers_Notify_Server_Error();
      })
    },
    Delete_Item(id){
      this.loading_delete[id] = true;
      Stores_Users().Delete(id).then(res => {
        this.items = this.items.filter(item => item.id !== id);
        this.Helpers_Notify_Deleted();
        this.loading_delete[id] = false;
      }).catch((error) => {
        this.Helpers_Notify_Server_Error();
        this.loading_delete[id] = false;
      })
    },
  },
}
</script>

<template>
  <div class="card">
      <div class="card-header p-4">
        <strong class="f-18">{{this.$route.meta.title}}</strong>
        <button data-bs-toggle="modal" data-bs-target="#add_item" class="btn btn-primary float-end "><i class="fa-duotone fa-plus fa-regular"></i> آیتم جدید</button>
        <div class="modal fade" id="add_item" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <users_create @Created="(item) => Add_Item(item)"></users_create>
          </div>
        </div>
      </div>
      <div class="card-body">
        <MTable
            :columns="columns"
            :loading="loading"
            :items="items"
            header_class="f-15 text-danger"
            :haspagination="true"
            :pagination="pagination"
            @ChangePagination="(page) => Change_Page(page)"
            @ChangePerPage="(per_page) => Change_Per_Page(per_page)"
        >
          <template v-slot:body-is_active="props">
            <action_activation :is_active="props.row.is_active" @Submit="Activation(props.row.id)"></action_activation>
          </template>
          <template v-slot:body-tools="props">
            <button data-bs-toggle="modal" :data-bs-target="'#edit_item'+props.row.id" class="btn btn-outline-primary btn-tools me-2 ms-2" title="ویرایش آیتم"><i class="fa-duotone fa-edit fa-regular"></i></button>
            <button class="btn btn-outline-warning btn-tools me-2 ms-2" title="پروفایل کارشناس"><i class="fa-duotone fa-user fa-regular"></i></button>
            <action_delete :loading="loading_delete[props.row.id]" @Deleted="Delete_Item(props.row.id)"></action_delete>
            <div class="modal fade" :id="'edit_item'+props.row.id" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <users_edit :data="props.row" @Updated="(item) => Update_Item(item)"></users_edit>
              </div>
            </div>
          </template>
        </MTable>
      </div>
    </div>
</template>

<style scoped>

</style>