const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

module.exports = {
    ...defaultConfig,
    optimization: {
        usedExports: true, // Enables tree shaking
        minimize: true, // Minimizes final bundle
    }
};
