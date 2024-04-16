import styleX from "vite-plugin-stylex";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/type/",
  plugins: [styleX(), react()],
});
