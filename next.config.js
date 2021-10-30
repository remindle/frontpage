// @ts-check

const withTM = require('next-transpile-modules')(['@remindle/design-tokens', '@remindle/design-system']); // pass the modules you would like to see transpiled

module.exports = withTM({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // the project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});