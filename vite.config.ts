import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// also don't forget to `pnpm i -D @types/node`, so __dirname won't complain
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
