import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postcssPxToViewport from 'postcss-px-to-viewport';
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
    postcss: {
      plugins: [
        postcssPxToViewport({
          unitToConvert: 'rpx',
          viewportWidth: 750 / 2, // 视窗的宽度，根据实际情况调整
          viewportUnit: 'vw',
          fontViewportUnit: 'vw',
          selectorBlackList: ['.ignore'], // 忽略转换的 CSS 选择器类名列表
          minPixelValue: 1,
          mediaQuery: false, // 媒体查询是否转换
          exclude: /(node_modules|src\/assets)/,
        }),
      ]
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
