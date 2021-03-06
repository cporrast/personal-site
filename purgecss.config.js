module.exports = {
  content: ["./_site/**/*.html"],
  css: ["./_site/assets/style.css"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};
