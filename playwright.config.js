/**
 * External dependencies
 */
const path = require( 'path' );
const { defineConfig, devices } = require( '@playwright/test' );

process.env.WP_ARTIFACTS_PATH ??= path.join( process.cwd(), 'artifacts' );
process.env.STORAGE_STATE_PATH ??= path.join(
	process.env.WP_ARTIFACTS_PATH,
	'storage-states/admin.json'
);

module.exports = defineConfig( {
	testDir: './tests/e2e',
	fullyParallel: false,
	workers: 1,
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI ? [ [ 'github' ] ] : [ [ 'list' ] ],
	globalSetup: require.resolve(
		'@wordpress/scripts/config/playwright/global-setup.js'
	),
	use: {
		baseURL: process.env.WP_BASE_URL || 'http://localhost:10017',
		storageState: process.env.STORAGE_STATE_PATH,
		headless: true,
		ignoreHTTPSErrors: true,
		locale: 'en-US',
		trace: 'retain-on-failure',
		screenshot: 'only-on-failure',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices[ 'Desktop Chrome' ] },
		},
	],
	outputDir: path.join( process.env.WP_ARTIFACTS_PATH, 'test-results' ),
} );
