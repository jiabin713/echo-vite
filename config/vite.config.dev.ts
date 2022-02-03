import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
// import eslint from 'vite-plugin-eslint';

export default defineConfig({
  mode: 'development',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 'arcoblue-6': '#f85959',
        },
      },
    },
  },
  server: {
    open: false,
    fs: {
      strict: true,
    },
    // proxy: {
    //   // 选项写法
    //   '/api': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({ svgoConfig: {} }),
    // eslint({
    //   cache: false,
    //   include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
    //   exclude: ['node_modules'],
    // }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets'),
      },
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js', // Resolve the i18n warning issue
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js', '.tsx', 'jsx'],
  },
  define: {
    'process.env': {},
  },
});
