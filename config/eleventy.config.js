const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const path = require('path');
const paths = require('./paths.js');
const { minifyHtml } = require('../utils/htmlminify.js')

module.exports = (function(eleventyConfig) {

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setDataDeepMerge(true);

    // Copy Static Files to /_dist
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  });

  eleventyConfig.addTransform('htmlmin', minifyHtml);

  // Copy Image Folder to /_dist
  eleventyConfig.addPassthroughCopy("./src/assets/img");

    return {
        dir: {
            input: paths.src,
            output: paths.dist,
            includes: "_includes",
            data: "_data",
        },
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk"
    }
});