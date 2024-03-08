import path from 'node:path'

import react from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'
import type { InlineConfig } from 'vitest'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    // Para n terq ficar importando as funcionalidades do vitest
    globals: true,
    setupFiles: ['./test/setup.ts'],
    // lib para criar a DOM de teste
    environment: 'happy-dom',
  },
} as UserConfig & {
  test: InlineConfig
})
