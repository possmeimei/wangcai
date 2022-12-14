import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import LabelsEdit from '@/views/LabelsEdit.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/money'
    },
    {
        path: '/money',
        component: Money
    },
    {
        path: '/labels',
        component: Labels
    },
    {
        path: '/labels/edit/:id',
        component: LabelsEdit,
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
    },
];

const router = new VueRouter({
    routes
});

export default router;
