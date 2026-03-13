// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  site: 'https://MBafalukos.github.io',
  base: '/Ammo', // Replace with your actual repository name
  vite: {
    plugins: [tailwindcss()],
  },
  
  
});