// @ts-check

const withTM = require('next-transpile-modules')(['@remindle/design-tokens', '@remindle/design-system']); // pass the modules you would like to see transpiled

module.exports = withTM();