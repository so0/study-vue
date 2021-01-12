import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

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
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
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
