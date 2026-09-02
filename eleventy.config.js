export default function (eleventyConfig) {
  // ── Passthrough copies ──────────────────────────────────────────────────
  if (process.env.BUILD_TYPE !== 'state') {
    // Copy public/ folder (images, favicons, robots.txt, sitemap.xml, _headers, _redirects)
    eleventyConfig.addPassthroughCopy({ "public": "/" });
    // Copy existing CSS from styles/ into _site/css/
    eleventyConfig.addPassthroughCopy({ "styles/globals.css": "css/globals.css" });
  }

  // ── Filters ─────────────────────────────────────────────────────────────
  eleventyConfig.addFilter("jsonld", function(value) {
    if (value === undefined || value === null) return "null";
    return JSON.stringify(value)
      .replace(/&/g, '\\u0026')
      .replace(/</g, '\\u003c')
      .replace(/>/g, '\\u003e');
  });

  // ── Nunjucks options ────────────────────────────────────────────────────
  eleventyConfig.setNunjucksEnvironmentOptions({
    trimBlocks: true,
    lstripBlocks: true,
  });

  // ── Watch targets (for --serve / dev mode) ──────────────────────────────
  eleventyConfig.addWatchTarget("styles/");
  eleventyConfig.addWatchTarget("data/");

  // ── Conditional Ignores for Segmented Build ─────────────────────────────
  if (process.env.BUILD_TYPE === 'base') {
    eleventyConfig.ignores.add("src/states/**/*");
    eleventyConfig.ignores.add("src/cities/**/*");
  } else if (process.env.BUILD_TYPE === 'state') {
    eleventyConfig.ignores.add("src/*.njk");
    eleventyConfig.ignores.add("src/services/**/*");
  }

  // ── HTML Minification ───────────────────────────────────────────────────
  eleventyConfig.addTransform("htmlmin", async function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      const { minify } = await import("html-minifier-terser");
      let minified = await minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true
      });
      return minified;
    }
    return content;
  });

  // ── Directory config ────────────────────────────────────────────────────
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk", "html", "11ty.js"],
    htmlTemplateEngine: "njk",
  };
}
