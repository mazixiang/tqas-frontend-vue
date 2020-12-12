import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/Admin'),
    children: [
      {
        path: '',
        name: 'AdminHome',
        component: () => import('@/views/admin/AdminHome'),
      },
      {
        path: 'updateCoefficient',
        name: 'updateCoefficient',
        component: () => import('@/views/admin/UpdateCoefficient'),
      },
      {
        path: 'manage',
        name: 'AdminManagement',
        component: () => import('@/views/admin/AdminManagement'),
      },
      {
        path: 'login',
        name: 'AdminLogin',
        component: () => import('@/views/admin/AdminLogin'),
      },

      {
        path: 'add',
        name: 'AddAdmin',
        component: () => import('@/views/admin/AddAdmin'),
      },
      {
        path: 'update',
        name: 'UpdateAdmin',
        component: () => import('@/views/admin/UpdateAdmin'),
      },
      {
        path: 'manageTeacher',
        name: 'TeacherManagement',
        component: () => import('@/views/teacher/TeacherManagement'),
      },
      {
        path: 'message',
        name: 'adminMessage',
        component: () => import('@/views/message/Message'),
        children: [
          {
            path: 'teaching',
            name: 'adminTeachingMessage',
            component: () => import('@/views/message/teaching/TeachingMessage'),
            children: [
              {
                path: 'list',
                name: 'adminListTeachingMessage',
                component: () =>
                  import('@/views/message/teaching/ListTeachingMessage'),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '/teacher',
    component: () => import('@/views/teacher/Teacher'),
    children: [
      {
        path: '',
        name: 'teacherHome',
        component: () => import('@/views/teacher/TeacherHome'),
      },
      {
        path: 'add',
        name: 'AddTeacher',
        component: () => import('@/views/teacher/AddTeacher'),
      },
      {
        path: 'login',
        name: 'TeacherLogin',
        component: () => import('@/views/teacher/TeacherLogin'),
      },
      {
        path: 'register',
        name: 'TeacherRegister',
        component: () => import('@/views/teacher/TeacherRegister'),
      },
      {
        path: 'message',
        name: 'Message',
        component: () => import('@/views/message/Message'),
        children: [
          {
            path: 'teaching',
            name: 'teachingMessage',
            component: () => import('@/views/message/teaching/TeachingMessage'),
            children: [
              {
                path: 'list',
                name: 'listTeachingMessage',
                component: () =>
                  import('@/views/message/teaching/ListTeachingMessage'),
              },
              {
                path: 'add',
                name: 'addTeachingMessage',
                component: () =>
                  import('@/views/message/teaching/AddTeachingMessage'),
              },
            ],
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.path === '/teacher/login' || to.path === '/admin/login') {
//     next();
//   } else if (to.path.match(/\/admin\/*/g)) {
//
//   }
// });

export default router;
