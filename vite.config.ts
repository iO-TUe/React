import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            onLog(level, log, handler) {
                if (log.cause?.message == `Can't resolve original location of error.`) return
                handler(level, log)
            }
        }
    }
})
