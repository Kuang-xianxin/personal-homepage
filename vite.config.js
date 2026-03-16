import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/个人主页/',
  plugins: [vue()],
  server: {
    port: 5173,
    open: true
  }
});
