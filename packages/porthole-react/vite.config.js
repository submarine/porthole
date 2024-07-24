import path from 'path';
import { defineConfig } from 'vite'
import mix from 'vite-plugin-mix'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, 'lib/index.js'),
      fileName: (format) => format === 'iife' ? 'porthole-core.js' : `porthole-core.${format}.js`,
      formats: ['cjs', 'es', 'iife', 'umd'],
      name: 'PortholeReact'
    }
  },
  plugins: [
    {
      ...mix.default({
        handler: './tokens.js',
      }),
      apply: 'serve'
    }
  ]
});
