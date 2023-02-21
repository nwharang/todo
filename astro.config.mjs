import { defineConfig } from 'astro/config';

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    srcDir: "./src/views",
    outDir: "./build/",
    output: "server",
    build: {
        client: "./build/client/",
        server: "./build/server/",
        serverEntry: "index.mjs"
    },
    output: "server",
    adapter: node({
        mode: 'middleware'
    }),
    vite: {
        ssr: {
            noExternal: ["path-to-regexp"]
        }
    },
    integrations: [tailwind()]
});