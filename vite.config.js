/** @format */

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: "/drum-machine-react/",
	plugins: [react()],
	build: {
		outDir: "dist",
		emptyOutDir: true,
		assetsDir: "assets",
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					const info = assetInfo.name.split(".");
					const ext = info[info.length - 1];
					return `assets/${info[0]}.[hash].${ext}`;
				},
				chunkFileNames: "assets/[name].[hash].js",
				entryFileNames: "assets/[name].[hash].js",
			},
		},
	},
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/test/setup.js",
		coverage: {
			reporter: ["text", "json", "html"],
		},
	},
});
