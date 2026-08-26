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
        alias: [
            {
                find: /^datatables\.net$/,
                replacement: path.resolve(__dirname, 'node_modules/datatables.net-bs5/node_modules/datatables.net/js/dataTables.mjs'),
            },
        ],
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