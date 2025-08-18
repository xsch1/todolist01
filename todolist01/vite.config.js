// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/todolist01/', // ← 여기만 네 리포 이름으로 바꿈
});
