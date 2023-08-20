import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import typedCssModulesPlugin from 'vite-plugin-gen-typed-css-modules';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typedCssModulesPlugin({
      cssExt: 'scss'
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@components': '/src/components'
    }
  },
  css: {
    // css 预处理器
    preprocessorOptions: {
      scss: {
        additionalData: '@import "/src/assets/styles/main.scss";'
      }
    },
    // css modules
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  server: {
    proxy: {
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  },
});
