const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addWatchTarget("./src/img/");
  
  eleventyConfig.addPlugin(eleventySass);

  return {
    pathPrefix: "", // 1. Github: /repo-name/ 2. Netlify: empty
    dir: {
      input: "src",
      output: "public",
    },
  };
};
