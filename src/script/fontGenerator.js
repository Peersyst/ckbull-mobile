const fs = require("fs");
const { execSync } = require("child_process");

// Fonts folder
const fontsFolder = process.argv[2];
// Array containing all requires
const fontRequires = [];

/**
 * Generates fonts's name
 * @param filename Font filename
 * @returns {string} Font name
 */
function generateName(filename) {
    const paths = filename.split("/");
    return paths[paths.length - 1].split(".")[0].replace(/ |-/g, "_");
}

/**
 * Generates font's require inside index
 * @param filename Font filename
 * @param path Font path
 * @returns {string} Require code
 */
function generateExport(filename, path) {
    return `export const ${generateName(filename)}= require("./${path}")`;
}

function addFonts(folder) {
    const filenames = fs.readdirSync(folder);
    for (const filename of filenames) {
        const stat = fs.lstatSync(folder + filename);
        if (stat.isDirectory()) addFonts(folder + (filename.endsWith("/") ? filename : filename + "/"));
        else if (filename === ".DS_Store" || filename === "index.ts") fs.unlinkSync(folder + filename);
        else
            fontRequires.push(
                generateExport(filename, folder.replace(fontsFolder, "") + (filename.endsWith("/") ? filename.slice(-1) : filename)),
            );
    }
}

addFonts(fontsFolder);

// Create an index
fs.writeFileSync(fontsFolder + "index.ts", "//@ts-nocheck\n" + fontRequires.map((ex) => "\t" + ex).join(";\n") + "\n");
console.log("Fonts index.ts created");

try {
    execSync("prettier --write " + fontsFolder + "index.ts");
    console.log("Prettified Fonts index");
} catch (e) {
    console.error(e);
}
