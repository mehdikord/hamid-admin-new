<script>
export default {
  name: "MTable",
  props: {
    columns: {
      type: Array,
      required: true,
      validator: (value) =>
          value.every((col) => col.field && typeof col.title === "string"),
    },
    items: {
      type: Array,
      default: () => [],
    },
    rows_per_page: {
      type: Array,
      default: () => [15,30,50,100,200],
    },
    classes: {
      type: String,
      default: "",
    },
    header_class: {
      type: String,
      default: "",
    },
    haspagination : {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Object,
      default: () => ({}),
    },
    loading : {
        type: Boolean,
        default: false
    }
  },
  methods:{
    Change_Pagination(url){
      if (url){
        let url_parse = new URL(url);
        let page = url_parse.searchParams.get('page');
        if (!page){
          page = 1
        }
        this.$emit('ChangePagination',page)
      }
    },
    Change_Per_Page(){
      this.$emit("ChangePerPage",this.pagination.per_page)
    }
  }
};
</script>

<template>
  <table :class="['table', 'table-bordered', classes]">
    <thead >
    <tr>
      <th :class="header_class"  v-for="column in columns" :key="column.field">
        <template v-if="$slots['header-' + column.field]">
          <slot :name="'header-' + column.field" :column="column"></slot>
        </template>
        <template v-else>
          {{ column.title || "Unnamed" }}
        </template>
      </th>
    </tr>
    </thead>
    <tbody>
    <template v-if="loading">
      <tr>
        <td colspan="4">
          <div class="text-center p-5">
            <img src="@/assets/images/icons/infinite-spinner.svg" width="100" alt="">
            <div class="mt-3"><strong>درحال دریافت اطلاعات</strong> </div>
          </div>
        </td>
      </tr>
    </template>
    <template v-else>
      <template v-if="items.length < 1">
        <tr>
          <td colspan="4">
            <div class="text-center p-1">
              <img src="@/assets/images/icons/no-data.svg" width="280" alt="">
              <div class="mt-3"><strong class="text-danger">داده ای برای نمایش  وجود ندارد</strong> </div>
            </div>
          </td>
        </tr>
      </template>
      <template v-else>
        <template v-for="(item, index) in items" :key="index">
          <tr v-if="$slots.row" :key="index">
            <slot name="row" :row="item" :columns="columns"></slot>
          </tr>
          <tr v-else >
            <td v-for="column in columns" :key="column.field">
              <template v-if="$slots['body-' + column.field]">
                <slot
                    :name="'body-' + column.field"
                    :row="item"
                    :column="column"
                ></slot>
              </template>
              <template v-else>
                {{ item[column.field] !== undefined ? item[column.field] : "-" }}
              </template>
            </td>
          </tr>
        </template>
      </template>
    </template>
    </tbody>
  </table>
  <div v-if="haspagination" class="text-center pt-4 pb-4">
    <template v-if="pagination && pagination.links">
      <div class="row">
        <div class="col-2">
          <template v-if="rows_per_page && rows_per_page.length">
            <select @change="Change_Per_Page" class="form-control" v-model="pagination.per_page">
              <option :selected="item === pagination.per_page" v-for="item in rows_per_page" :value="item">تعداد در صفحه : {{ item }}</option>
            </select>
          </template>
        </div>
        <div class="col-10">
          <nav>
            <ul class="pagination pagination-primary">
              <template v-for="link in pagination.links">
                <li class="page-item">
                  <template v-if="!link.url || link.active">
                    <strong class="page-link cursor-not-allowed disabled">
                      <span v-html="link.label"></span>
                    </strong>
                  </template>
                  <template v-else>
                    <strong @click="Change_Pagination(link.url)" class="page-link cursor-pointer">
                      <span v-html="link.label"></span>
                    </strong>
                  </template>

                </li>
              </template>
            </ul>
          </nav>
        </div>
      </div>

    </template>

  </div>
</template>

<style scoped>

</style>