/**
 * Resolves a spacing size value into a usable CSS value.
 *
 * @param {string|number} value        - The input spacing size value.
 * @param {string|number} defaultValue - The default value.
 * @return {string} - A valid CSS spacing size value.
 */
const resolveSpacingSizeValue = ( value, defaultValue = '0px' ) => {
	if ( typeof value === 'string' ) {
		if ( value.startsWith( 'var:' ) ) {
			// Convert "var:some|value" into "var(--wp--some--value)"
			const cssVariable = value
				.replace( 'var:', '--wp--' )
				.replace( /\|/g, '--' );
			return `var(${ cssVariable })`;
		}
		return value; // If it's a valid CSS string, return as-is
	}

	if ( typeof value === 'number' ) {
		return `${ value }px`; // Convert numbers to pixel values
	}

	// use defaultValue if value is invalid or undefined
	return defaultValue;
};

/**
 * Generates a border-radius string from either a string or an object.
 *
 * @param {string|object} borderRadius - The border radius definition.
 * @param {string|number} defaultValue - The default value.
 * @return {string} - A valid CSS border-radius value.
 */
const getBorderRadiusStyles = ( borderRadius, defaultValue = '0px' ) => {
	if ( typeof borderRadius === 'string' ) {
		return borderRadius;
	}

	// If it's an object, return a four-value shorthand for border-radius
	const topLeft = borderRadius?.topLeft || defaultValue;
	const topRight = borderRadius?.topRight || defaultValue;
	const bottomRight = borderRadius?.bottomRight || defaultValue;
	const bottomLeft = borderRadius?.bottomLeft || defaultValue;
	return `${ topLeft } ${ topRight } ${ bottomRight } ${ bottomLeft }`;
};

/**
 * Generates a set of CSS variable mappings for navigation styles based on provided attributes.
 * The returned object excludes variables with invalid or undefined values.
 *
 * @param {Object} attributes - The attributes used to customize navigation styles.
 *
 * @return {Object} - An object with CSS variable definitions for the navigation.
 */
export const generateNavigationStyles = ( attributes = {} ) => {
	const styles = {};

	// Helper function to add a style with a fallback to default values
	const addStyle = ( key, value, defaultValue = '0px' ) => {
		if ( value !== undefined && value !== null ) {
			styles[ key ] = value;
		} else if ( defaultValue ) {
			styles[ key ] = defaultValue;
		}
	};

	addStyle(
		'--navigation-arrow-color',
		attributes?.navigationColor?.arrowColor?.default,
		'#000'
	);
	addStyle(
		'--navigation-background-color',
		attributes?.navigationColor?.backgroundColor?.default,
		'transparent'
	);
	addStyle(
		'--navigation-arrow-hover-color',
		attributes?.navigationColor?.arrowColor?.hover,
		'#333'
	);
	addStyle(
		'--navigation-background-hover-color',
		attributes?.navigationColor?.backgroundColor?.hover,
		'transparent'
	);
	addStyle( '--swiper-navigation-size', attributes?.navigationSize, '40px' );
	addStyle(
		'--navigation-border-radius',
		getBorderRadiusStyles( attributes?.navigationBorderRadius, '4px' )
	);

	// Padding styles with defaults
	addStyle(
		'--navigation-padding-top',
		resolveSpacingSizeValue( attributes?.navigationPadding?.top, '0px' )
	);
	addStyle(
		'--navigation-padding-right',
		resolveSpacingSizeValue( attributes?.navigationPadding?.right, '0px' )
	);
	addStyle(
		'--navigation-padding-bottom',
		resolveSpacingSizeValue( attributes?.navigationPadding?.bottom, '0px' )
	);
	addStyle(
		'--navigation-padding-left',
		resolveSpacingSizeValue( attributes?.navigationPadding?.left, '0px' )
	);

	// Pagination styles
	addStyle( '--pagination-size', attributes?.paginationSize, '8px' );
	addStyle(
		'--pagination-active-color',
		attributes?.paginationColor?.activeColor?.default,
		'#000'
	);
	addStyle(
		'--pagination-inactive-color',
		attributes?.paginationColor?.inactiveColor?.default,
		'#ccc'
	);

	// Pagination offset styles with defaults
	addStyle(
		'--pagination-offset-top',
		resolveSpacingSizeValue( attributes?.paginationOffset?.top, 'auto' )
	);
	addStyle(
		'--pagination-offset-right',
		resolveSpacingSizeValue( attributes?.paginationOffset?.right )
	);
	addStyle(
		'--pagination-offset-bottom',
		resolveSpacingSizeValue( attributes?.paginationOffset?.bottom, '8px' )
	);
	addStyle(
		'--pagination-offset-left',
		resolveSpacingSizeValue( attributes?.paginationOffset?.left )
	);

	// Navigation offset styles with defaults
	addStyle(
		'--navigation-offset-top',
		resolveSpacingSizeValue( attributes?.navigationOffset?.top, '50%' )
	);
	addStyle(
		'--navigation-offset-right',
		resolveSpacingSizeValue( attributes?.navigationOffset?.right, '10px' )
	);
	addStyle(
		'--navigation-offset-bottom',
		resolveSpacingSizeValue( attributes?.navigationOffset?.bottom )
	);
	addStyle(
		'--navigation-offset-left',
		resolveSpacingSizeValue( attributes?.navigationOffset?.left, '10px' )
	);

	return styles;
};
