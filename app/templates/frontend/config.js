System.config({
  defaultJSExtensions: true,
  transpiler: 'none',
  paths: {
    '*': 'dist/*',
    'github:*': 'jspm_packages/github/*',
    'npm:*': 'jspm_packages/npm/*'
  }
});
