const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (function(eleventyConfig) {

    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.setDataDeepMerge(true);

    // Copy Static Files to /_dist
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  });

  // Copy Image Folder to /_dist
  eleventyConfig.addPassthroughCopy("./src/assets/img");

    return {
        dir: {
            input: "src",
			output: "dist",
			includes: "_includes",
			data: "_data",
        },
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk"
    }
});