import { defineConfig } from 'vite'

const frameworkPackages = ['preact', 'react', 'react-dom', 'solid-js', 'svelte', 'vue']

export default defineConfig({
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        'adapters/preact': 'src/adapters/preact.ts',
        'adapters/react': 'src/adapters/react.ts',
        'adapters/solid': 'src/adapters/solid.ts',
        'adapters/svelte': 'src/adapters/svelte.ts',
        'adapters/vanilla': 'src/adapters/vanilla.ts',
        'adapters/vue': 'src/adapters/vue.ts',
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rolldownOptions: {
      external: (id) => frameworkPackages.some((name) => id === name || id.startsWith(`${name}/`)),
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
})
