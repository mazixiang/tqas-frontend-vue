import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/login/admin',
    name: 'AdminLogin',
    component: () => import('@/views/admin/AdminLogin'),
  },
  {
    path: '/login/teacher',
    name: 'TeacherLogin',
    component: () => import('@/views/teacher/TeacherLogin'),
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
        path: 'AdminUpdateTeacher',
        name: 'AdminUpdateTeacher',
        component: () => import('@/views/admin/UpdateTeacher'),
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
        path: 'add',
        name: 'AdminAddTeacher',
        component: () => import('@/views/teacher/AddTeacher'),
      },
      {
        path: 'assessTeacher',
        name: 'AssessTeacher',
        component: () => import('@/views/admin/AssessTeacher'),
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
          {
            path: 'issue',
            component: () => import('@/views/message/issue/IssueMessage'),
            children: [
              {
                path: '',
                name: 'AdminListIssueMessage',
                component: () =>
                  import('@/views/message/issue/ListIssueMessage'),
              },
            ],
          },
          {
            path: 'patent',
            component: () => import('@/views/message/issue/IssueMessage'),
            children: [
              {
                path: '',
                name: 'AdminListPatentMessage',
                component: () =>
                  import('@/views/message/patent/ListPatentMessage'),
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
          {
            path: 'issue',
            component: () => import('@/views/message/issue/IssueMessage'),
            children: [
              {
                path: '',
                name: 'ListIssueMessage',
                component: () =>
                  import('@/views/message/issue/ListIssueMessage'),
              },
              {
                path: 'add',
                name: 'AddIssueMessage',
                component: () =>
                  import('@/views/message/issue/AddIssueMessage'),
              },
            ],
          },
          {
            path: 'patent',
            component: () => import('@/views/message/patent/PatentMessage'),
            children: [
              {
                path: '',
                name: 'ListPatentMessage',
                component: () =>
                  import('@/views/message/patent/ListPatentMessage'),
              },
              {
                path: 'add',
                name: 'AddPatentMessage',
                component: () =>
                  import('@/views/message/patent/AddPatentMessage'),
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

router.beforeEach((to, from, next) => {
  let urls = ['/', '/login/teacher', '/login/admin', '/teacher/register'];

  console.log(to.path);
  if (urls.indexOf(to.path) === -1 && store.state.currentUserId === null) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;
