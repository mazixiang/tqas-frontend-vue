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
        path: 'updateTeacher',
        name: 'AdminUpdateTeacher',
        component: () => import('@/views/teacher/UpdateTeacher'),
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
        component: () => import('@/views/admin/TeacherManagement'),
      },
      {
        path: 'message',
        name: 'adminMessage',
        component: () => import('@/views/message/Message'),
        children: [
          {
            path: 'teaching',
            component: () => import('@/views/message/teaching/TeachingMessage'),
            children: [
              {
                path: '',
                name: 'adminListTeachingMessage',
                component: () =>
                  import('@/views/message/teaching/ListTeachingMessage'),
              },
            ],
          },
          {
            path: 'lab',
            component: () => import('@/views/message/lab/LabMessage'),
            children: [
              {
                path: '',
                name: 'AdminListLabMessage',
                component: () => import('@/views/message/lab/ListLabMessage'),
              },
            ],
          },
          {
            path: 'work',
            component: () => import('@/views/message/work/WorkMessage'),
            children: [
              {
                path: '',
                name: 'AdminListWorkMessage',
                component: () => import('@/views/message/work/ListWorkMessage'),
              },
            ],
          },
          {
            path: 'paper',
            component: () => import('@/views/message/paper/PaperMessage'),
            children: [
              {
                path: '',
                name: 'AdminListPaperMessage',
                component: () =>
                  import('@/views/message/paper/ListPaperMessage'),
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
        path: 'update',
        name: 'updateTeacher',
        component: () => import('@/views/teacher/UpdateTeacher'),
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
            component: () => import('@/views/message/teaching/TeachingMessage'),
            children: [
              {
                path: '',
                name: 'ListTeachingMessage',
                component: () =>
                  import('@/views/message/teaching/ListTeachingMessage'),
              },
              {
                path: 'add',
                name: 'AddTeachingMessage',
                component: () =>
                  import('@/views/message/teaching/AddTeachingMessage'),
              },
            ],
          },
          {
            path: 'lab',
            component: () => import('@/views/message/lab/LabMessage'),
            children: [
              {
                path: '',
                name: 'ListLabMessage',
                component: () => import('@/views/message/lab/ListLabMessage'),
              },
              {
                path: 'add',
                name: 'AddLabMessage',
                component: () => import('@/views/message/lab/AddLabMessage'),
              },
            ],
          },
          {
            path: 'work',
            component: () => import('@/views/message/work/WorkMessage'),
            children: [
              {
                path: '',
                name: 'ListWorkMessage',
                component: () => import('@/views/message/work/ListWorkMessage'),
              },
              {
                path: 'add',
                name: 'AddWorkMessage',
                component: () => import('@/views/message/work/AddWorkMessage'),
              },
            ],
          },
          {
            path: 'paper',
            component: () => import('@/views/message/paper/PaperMessage'),
            children: [
              {
                path: '',
                name: 'ListPaperMessage',
                component: () =>
                  import('@/views/message/paper/ListPaperMessage'),
              },
              {
                path: 'add',
                name: 'AddPaperMessage',
                component: () =>
                  import('@/views/message/paper/AddPaperMessage'),
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
  linkActiveClass: 'active',
});

// router.beforeEach((to, from, next) => {
//   if (to.path === '/teacher/login' || to.path === '/admin/login') {
//     next();
//   } else if (to.path.match(/\/admin\/*/g)) {
//
//   }
// });

export default router;
