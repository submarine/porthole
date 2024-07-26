import path from 'path';
import { defineConfig } from 'vite'
import mix from 'vite-plugin-mix'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      fileName: (format) => format === 'iife' ? 'porthole-core.js' : `porthole-core.${format}.js`,
      formats: ['cjs', 'es', 'iife', 'umd'],
      name: 'Porthole'
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
