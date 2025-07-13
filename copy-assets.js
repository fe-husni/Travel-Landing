const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

// Paths
const indexSrc = path.join(__dirname, "src", "index.html");
const indexDist = path.join(__dirname, "dist", "index.html");
const publicDir = path.join(__dirname, "public");
const distDir = path.join(__dirname, "dist");

// Copy index.html
fs.copyFileSync(indexSrc, indexDist);
console.log("✓ Copied index.html");

// Copy public/* to dist/
fse.copySync(publicDir, distDir, { overwrite: true });
console.log("✓ Copied /public contents to /dist");