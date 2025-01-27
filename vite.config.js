import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig(() => {
  const alias = {
    "@": resolve(__dirname, "./src"),
  };

  console.log("Alias => ", alias);
  return {
    plugins: [react({ fastRefresh: true })],
    resolve: {
      alias,
    },
  };
});
