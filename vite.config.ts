import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: "./auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  css: {
    preprocessorOptions: {
      less: {

      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      // add proxy to fix cors
      // '/api': 'http://localhost:8088'
      '/api': {
        target: 'https://www.fastmock.site/mock/173d1aaad5f7b1d2b4ac739cdfd40877/ele',
        changeOrigin: true,
        ws: true,
        // rewrite: (path)=>path.replace(/^\/api/, ''),
      }
    }
  }
})
