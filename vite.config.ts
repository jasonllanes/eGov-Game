import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
        // REPO-NAME
  base: "/eGov-Game",
  plugins: [react()],
  server: {
    host: '0.0.0.0', // IP address, 0.0.0.0 makes it accessible on your local network
    port: 3001, // specify the port you want here
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
