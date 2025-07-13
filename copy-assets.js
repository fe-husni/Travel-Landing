const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");

// Definisikan path
const indexSrc = path.join(__dirname, "src", "index.html");
const indexDist = path.join(__dirname, "dist", "index.html");
const publicDir = path.join(__dirname, "public");
const distDir = path.join(__dirname, "dist");

// Pastikan folder dist sudah ada
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

// Salin index.html
fs.copyFileSync(indexSrc, indexDist);
console.log("✓ Copied index.html");

// Salin semua isi public/ ke dist/
fse.copySync(publicDir, distDir, { overwrite: true });
console.log("✓ Copied /public contents to /dist");