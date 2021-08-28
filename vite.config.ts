import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      includeAssets: [],
      manifest: {
        name: "Vite PWA Test",
        short_name: "VPT",
        description: "Vite with PWA test",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
