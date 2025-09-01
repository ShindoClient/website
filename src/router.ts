// src/router.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Download from '@/views/Download.vue'
import Discord from '@/views/Discord.vue'
import NotFound from '@/views/NotFound.vue'
import Doom from '@/views/Doom.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/download', component: Download },
        { path: '/discord',  component: Discord },
        { path: '/doom',     component: Doom },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) return savedPosition

        // 👉 Se tiver hash, deixa o Vue Router rolar até o elemento
        // Usamos scroll-margin-top no CSS para compensar a navbar fixa
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }

        // Sem hash: vai pro topo
        return { left: 0, top: 0 }
    },
})

export default router
