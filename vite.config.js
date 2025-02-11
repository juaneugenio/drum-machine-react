/** @format */

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: '/drum-machine/',  // Add this line
	plugins: [react()],
	test: {
		environment: "jsdom",
		globals: true,
		setupFiles: "./src/test/setup.js",
		coverage: {
			reporter: ["text", "json", "html"],
		},
	},
});
