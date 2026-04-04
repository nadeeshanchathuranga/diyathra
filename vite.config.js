import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(), // Must be first
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.css'],
            refresh: true, // auto-refresh Blade templates
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources/js', // match your jsconfig paths
        },
    },
});