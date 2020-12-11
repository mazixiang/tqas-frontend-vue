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
    path: '/teacher/login',
    name: 'Login',
    component: () => import('@/views/teacher/TeacherLogin'),
  },
  {
    path: '/teacher/register',
    name: 'Register',
    component: () => import('@/views/teacher/TeacherRegister'),
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
    ],
  },
  {
    path: '/teacher/add',
    name: 'AddTeacher',
    component: () => import('@/views/teacher/AddTeacher'),
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
