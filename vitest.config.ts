/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [],
  resolve: {
    alias: {}
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: 'dot',
    setupFiles: [path.resolve(__dirname, './vitest.setup.ts')],
    include: ['**/__tests__/**/*.[jt]s?(x)'],
    deps: {},
    testTransformMode: {
      // web: [/.[tj]sx$/]
    }
  }
})
