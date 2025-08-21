import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "@tailwindcss/vite";
import path from 'path'


// Ajuste o "base" quando for usar GitHub Pages
// exemplo: base: '/nome-do-repo/'
export default defineConfig({
    plugins: [vue(), tailwindcss()],
    base: '/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
