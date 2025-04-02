// vite.config.ts
import { defineConfig } from "file:///C:/Users/YuriH/OneDrive/Desktop/3D-web-page/node_modules/vite/dist/node/index.js";
import tailwindcss from "file:///C:/Users/YuriH/OneDrive/Desktop/3D-web-page/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///C:/Users/YuriH/OneDrive/Desktop/3D-web-page/node_modules/autoprefixer/lib/autoprefixer.js";
var vite_config_default = defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxZdXJpSFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXDNELXdlYi1wYWdlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxZdXJpSFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXDNELXdlYi1wYWdlXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ZdXJpSC9PbmVEcml2ZS9EZXNrdG9wLzNELXdlYi1wYWdlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBwcm94eToge1xyXG4gICAgICAnL2FwaSc6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIHRhaWx3aW5kY3NzLFxyXG4gICAgICAgIGF1dG9wcmVmaXhlcixcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVCxTQUFTLG9CQUFvQjtBQUM1VixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUV6QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
