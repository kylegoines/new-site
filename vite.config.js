import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: 'src/main.js',
                index: 'src/index.html',
                us: 'src/us.html', // HTML file for the about page
                nike: 'src/nike.html', // HTML file for the about page
                ny: 'src/ny.html', // HTML file for the about page
                getty: 'src/getty.html', // HTML file for the about page
                base: 'src/base.html', // HTML file for the about page
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
