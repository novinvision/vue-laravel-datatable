import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
    plugins: [
        vue(),
        dts()
    ],
    resolve: {
        alias: {
            'datatables.net': path.resolve(__dirname, 'node_modules/datatables.net-bs5'),
        },
    },
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'Vue3LaravelDatatable',
            fileName: 'index'
        },
        rollupOptions: {
            external: ['vue']
        }
    }
})