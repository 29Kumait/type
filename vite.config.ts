import styleX from "vite-plugin-stylex";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [styleX(), react()],
});
