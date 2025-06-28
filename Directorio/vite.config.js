import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Directory_Mendez_Selener/', // 👈 cambiá esto por el nombre real de tu repo
  plugins: [react()],
})
