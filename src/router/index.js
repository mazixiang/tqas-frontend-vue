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
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register'),
  },
  {
    path: '/adminManagement',
    name: 'AdminManagement',
    component: () => import('@/views/admin/AdminManagement'),
  },
  {
    path: '/addAdmin',
    name: 'AddAdmin',
    component: () => import('@/views/admin/AddAdmin'),
  },
  {
    path: '/teacherManagement',
    name: 'TeacherManagement',
    component: () => import('@/views/teacher/TeacherManagement'),
  },
  {
    path: '/addTeacher',
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
