import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import createListView from '../views/CreateListView.js';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // # 해시값 제거
  routes: [
    {
      path: '/',
      // 리다이렉트로 news 페이지로 이동시킴
      redirect: '/news',
    },
    {
      // path : url 이름
      path: '/news',
      // components: url 주소로 갔을 때 표시될 컴포넌트.
      name: 'news',
      // component: createListView(`NewsView`),
      component: NewsView, // 믹스인
    },
    {
      path: '/ask',
      name: 'ask',
      // component: createListView(`AskView`), // hoc
      component: AskView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: createListView(`JobsView`),
      component: JobsView,
    },
    {
      path: '/user/:id',
      component: UserView,
    },
    {
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
