import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
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
  ],
});
