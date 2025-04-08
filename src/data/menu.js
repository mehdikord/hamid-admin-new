export var menuItems={
  "data": [
    {
      "headTitle1": "اطلاعات کلی",
      "headTitle2": "اطلاعات کلی سیستم ",
      "type": "headtitle"
    },
    {
      "title": "داشبورد",
      "icon": "fa-duotone fa-desktop",
      "iconf":"fill-home",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/",
          "title": "داشبورد",
          "type": "link",
          "active":false
        },
      ]
    },
    {
      "headTitle1": "کاربران سیسیتم",
      "headTitle2": "کاربران سیستم ",
      "type": "headtitle"
    },
    {
      "path": "/users/admins",
      "title": "مدیران",
      "icon": "fa-duotone fa-user-tie",
      "iconf":"fill-user",
      "type": "link",
      "active": false
    },
    {
      "path": "/users/users",
      "title": "کارشناسان",
      "icon": "fa-duotone fa-users",
      "iconf":"fill-users",
      "type": "link",
      "active": false
    },
    {
      "headTitle1": "پروژه ها",
      "headTitle2": "پروژه ها",
      "type": "headtitle"
    },
    {
      "title": "مدیریت پروژه ها",
      "icon": "fa-duotone fa-boxes",
      "iconf":"fill-home",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/projects/create",
          "title": "ایجاد پروژه جدید",
          "type": "link",
          "active":false
        },
        {
          "path": "/projects",
          "title": "لیست پروژه ها",
          "type": "link",
          "active":false
        },
        {
          "path": "/projects/searching",
          "title": "جستجتو پیشترفته",
          "type": "link",
          "active":false
        },
        {
          "path": "/projects/reporting",
          "title": "گزارش گیری",
          "type": "link",
          "active":false
        },

      ]
    },
    {
      "title": "تنظیمات پروژه ها",
      "icon": "fa-duotone fa-cog fa-spin",
      "iconf":"fill-home",
      "type": "sub",
      "active": false,
      "children": [
        {
          "path": "/projects/categories",
          "title": "دسته بندی ها",
          "type": "link",
          "active":false
        },
        {
          "path": "/projects/statuses",
          "title": "وضعیت ها",
          "type": "link",
          "active":false
        },
      ]
    },

  ]
}