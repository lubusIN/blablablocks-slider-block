const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	optimization: {
		...defaultConfig.optimization,
		usedExports: true, // Enables tree shaking
		minimize: true, // Minimizes final bundle
	},
};
