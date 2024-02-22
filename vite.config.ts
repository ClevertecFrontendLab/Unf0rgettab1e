import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, 'public'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@actions': path.resolve(__dirname, 'src/actions'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@redux': path.resolve(__dirname, 'src/redux'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@theme': path.resolve(__dirname, 'src/theme'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@models': path.resolve(__dirname, 'src/models'),
            '@services': path.resolve(__dirname, 'src/services'),
        },
    },
});
