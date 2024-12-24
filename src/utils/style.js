/**
 * Resolves a spacing size value into a usable CSS value.
 *
 * @param {string|number} value - The input spacing size value.
 * @return {string} - A valid CSS spacing size value.
 */
const resolveSpacingSizeValue = ( value ) => {
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

	// Fallback to '0px' if value is invalid or undefined
	return '0px';
};

/**
 * Generates a border-radius string from either a string or an object.
 *
 * @param {string|object} borderRadius - The border radius definition.
 * @return {string} - A valid CSS border-radius value.
 */
const getBorderRadiusStyles = ( borderRadius ) => {
	if ( typeof borderRadius === 'string' ) {
		return borderRadius;
	}

	// If it's an object, return a four-value shorthand for border-radius
	const topLeft = borderRadius?.topLeft || '0px';
	const topRight = borderRadius?.topRight || '0px';
	const bottomRight = borderRadius?.bottomRight || '0px';
	const bottomLeft = borderRadius?.bottomLeft || '0px';
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

	// Helper function to add a style only if the value is valid
	const addStyle = ( key, value ) => {
		if ( value ) {
			styles[ key ] = value;
		}
	};

	addStyle(
		'--navigation-arrow-color',
		attributes?.navigationColor?.arrowColor?.default
	);
	addStyle(
		'--navigation-background-color',
		attributes?.navigationColor?.backgroundColor?.default
	);
	addStyle(
		'--navigation-arrow-hover-color',
		attributes?.navigationColor?.arrowColor?.hover
	);
	addStyle(
		'--navigation-background-hover-color',
		attributes?.navigationColor?.backgroundColor?.hover
	);
	addStyle( '--swiper-navigation-size', attributes?.navigationSize );
	addStyle(
		'--navigation-border-radius',
		getBorderRadiusStyles( attributes?.navigationBorderRadius )
	);

	// Padding styles
	addStyle(
		'--navigation-padding-top',
		resolveSpacingSizeValue( attributes?.navigationPadding?.top )
	);
	addStyle(
		'--navigation-padding-right',
		resolveSpacingSizeValue( attributes?.navigationPadding?.right )
	);
	addStyle(
		'--navigation-padding-bottom',
		resolveSpacingSizeValue( attributes?.navigationPadding?.bottom )
	);
	addStyle(
		'--navigation-padding-left',
		resolveSpacingSizeValue( attributes?.navigationPadding?.left )
	);

	// Pagination styles
	addStyle( '--pagination-size', attributes?.paginationSize );
	addStyle(
		'--pagination-active-color',
		attributes?.paginationColor?.activeColor?.default
	);
	addStyle(
		'--pagination-inactive-color',
		attributes?.paginationColor?.inactiveColor?.default
	);

	// Pagination offset styles
	addStyle(
		'--pagination-offset-top',
		resolveSpacingSizeValue( attributes?.paginationOffset?.top )
	);
	addStyle(
		'--pagination-offset-right',
		resolveSpacingSizeValue( attributes?.paginationOffset?.right )
	);
	addStyle(
		'--pagination-offset-bottom',
		resolveSpacingSizeValue( attributes?.paginationOffset?.bottom )
	);
	addStyle(
		'--pagination-offset-left',
		resolveSpacingSizeValue( attributes?.paginationOffset?.left )
	);

	// Navigation offset styles
	addStyle(
		'--navigation-offset-top',
		resolveSpacingSizeValue( attributes?.navigationOffset?.top )
	);
	addStyle(
		'--navigation-offset-right',
		resolveSpacingSizeValue( attributes?.navigationOffset?.right )
	);
	addStyle(
		'--navigation-offset-bottom',
		resolveSpacingSizeValue( attributes?.navigationOffset?.bottom )
	);
	addStyle(
		'--navigation-offset-left',
		resolveSpacingSizeValue( attributes?.navigationOffset?.left )
	);

	return styles;
};
