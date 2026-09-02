import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import statesData from "../data/states.js";

console.log("🚀 Starting Chunked Production Build...\n");

// Clean previous build directory to ensure a fresh build
const siteDir = path.join(process.cwd(), "_site");
if (fs.existsSync(siteDir)) {
    fs.rmSync(siteDir, { recursive: true, force: true });
}
fs.mkdirSync(siteDir, { recursive: true });

// Copy all static files from public/ directly to _site/
const publicDir = path.join(process.cwd(), "public");
if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, siteDir, { recursive: true });
    console.log("📁 Synced public/ folder directly to _site/");
}

const states = statesData.map(s => s.slug).sort();

import CleanCSS from "clean-css";

console.log(`🏗️  BUILDING BASE PAGES...`);
let startTime = Date.now();
try {
    execSync(`node --max-old-space-size=6144 node_modules/@11ty/eleventy/cmd.cjs --quiet`, { 
        env: { ...process.env, BUILD_TYPE: "base" },
        stdio: "ignore" 
    });
    console.log(`✅ Base pages built in ${((Date.now() - startTime) / 1000).toFixed(2)} seconds.\n`);

    // Minify CSS in _site/css/globals.css
    const cssPath = path.join(siteDir, "css", "globals.css");
    if (fs.existsSync(cssPath)) {
        const rawCss = fs.readFileSync(cssPath, "utf8");
        const minified = new CleanCSS({ level: 2 }).minify(rawCss).styles;
        fs.writeFileSync(cssPath, minified, "utf8");
        console.log(`✨ Minified globals.css (${(rawCss.length / 1024).toFixed(1)} KB -> ${(minified.length / 1024).toFixed(1)} KB)\n`);
    }
} catch (error) {
    console.error(`❌ Build failed for Base Pages. Exiting.`, error);
    process.exit(1);
}

for (const stateCode of states) {
    process.stdout.write(`🏗️  Building state: ${stateCode.toUpperCase()}... `);
    let stateStart = Date.now();
    try {
        execSync(`node --max-old-space-size=6144 node_modules/@11ty/eleventy/cmd.cjs --quiet`, { 
            env: { ...process.env, BUILD_TYPE: "state", BUILD_STATE: stateCode },
            stdio: "ignore"
        });
        console.log(`✅ built in ${((Date.now() - stateStart) / 1000).toFixed(2)}s`);
    } catch (error) {
        console.error(`\n❌ Build failed for ${stateCode}. Exiting.`);
        process.exit(1);
    }
}

console.log("\n🎉 ALL STATES FINISHED SUCCESSFULLY!");
