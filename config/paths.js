const path = require("path");
const ROOT_DIR = process.cwd();

const SRC = "src/";
const DIST = "dist/";
const CONFIG = "config/";
const ASSETS = "assets/";

module.exports = {
    root: ROOT_DIR,
    src: path.resolve(ROOT_DIR, SRC),
    srcAssets: path.resolve(ROOT_DIR, SRC, ASSETS),
    config: path.resolve(ROOT_DIR, CONFIG),
    dist: path.resolve(ROOT_DIR, DIST)
}