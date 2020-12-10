import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
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
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('@/views/admin/AdminLogin')
  },
  {
    path: '/adminManagement',
    name: 'AdminManagement',
    component: () => import('@/views/admin/AdminManagement'),
  },
  {
    path: '/admin/add',
    name: 'AddAdmin',
    component: () => import('@/views/admin/AddAdmin'),
  },
  {
    path: '/teacherManagement',
    name: 'TeacherManagement',
    component: () => import('@/views/teacher/TeacherManagement'),
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

export default router;
