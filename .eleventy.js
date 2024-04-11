const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("./src/img/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  
  eleventyConfig.addPlugin(eleventySass);

  return {
    pathPrefix: "/eleventy-starter/", // 1. Github: /repo-name/ 2. Netlify: empty
    dir: {
      input: "src",
      output: "public",
    },
  };
};
