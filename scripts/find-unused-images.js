// scripts/find-unused-images.js
const fs = require("fs");
const path = require("path");
const glob = require("glob");

const publicDir = path.join(process.cwd(), "public");
const srcDir = path.join(process.cwd(), "src"); // adjust if your code is not in src/

// 1. Collect all images in public/
const imageFiles = glob.sync(`${publicDir}/**/*.{png,jpg,jpeg,gif,svg,webp}`);

// 2. Collect all project files to search (js, ts, jsx, tsx, css, scss)
const codeFiles = glob.sync(`${srcDir}/**/*.{js,jsx,ts,tsx,css,scss}`, {
  ignore: ["**/node_modules/**"],
});

function isImageUsed(imagePath) {
  const relativePath = imagePath.replace(publicDir, "").replace(/\\/g, "/"); // e.g. /images/logo.png
  const fileName = path.basename(imagePath);

  for (const file of codeFiles) {
    const content = fs.readFileSync(file, "utf8");

    // --- Check for direct reference (/images/logo.png) ---
    if (content.includes(relativePath)) return true;

    // --- Check for import from "@/public/..." ---
    const importPattern = new RegExp(
      `from\\s+["'\`]@/public${relativePath}["'\`]`
    );
    if (importPattern.test(content)) return true;

    // --- Check for filename used (fallback) ---
    if (content.includes(fileName)) return true;
  }
  return false;
}

// 3. Compare and print results
const unusedImages = [];

for (const img of imageFiles) {
  if (!isImageUsed(img)) {
    unusedImages.push(img.replace(publicDir, "")); // show relative path
  }
}

if (unusedImages.length === 0) {
  console.log("✅ No unused images found!");
} else {
  console.log("🛑 Unused images:");
  unusedImages.forEach((img) => console.log(img));
}
