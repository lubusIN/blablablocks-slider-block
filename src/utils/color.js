/**
 * Normalizes a CSS color for comparisons with palette values.
 *
 * @param {*} value Potential color value.
 * @return {string} Normalized color.
 */
const normalizeColor = ( value ) =>
	typeof value === 'string'
		? value.trim().toLowerCase().replace( /\s+/g, '' )
		: '';

/**
 * Gets the literal color used by ColorPalette and ColorIndicator.
 *
 * Legacy values are strings. New values store the literal color and optional
 * WordPress preset slug together.
 *
 * @param {string|Object|undefined} value Stored color value.
 * @return {string} Literal color value.
 */
export const getColorPaletteValue = ( value ) => {
	if ( typeof value === 'string' ) {
		return value;
	}

	return typeof value?.color === 'string' ? value.color : '';
};

/**
 * Resolves a stored color to a value suitable for CSS.
 *
 * @param {string|Object|undefined} value Stored color value.
 * @return {string|undefined} CSS color or preset variable.
 */
export const resolveColorValue = ( value ) => {
	if ( typeof value === 'string' ) {
		return value;
	}

	if ( typeof value?.slug === 'string' ) {
		const slug = value.slug.replace( /[^a-zA-Z0-9_-]/g, '' );
		if ( slug ) {
			return `var(--wp--preset--color--${ slug })`;
		}
	}

	return typeof value?.color === 'string' ? value.color : undefined;
};

/**
 * Converts a ColorPalette selection into the value stored by the block.
 *
 * @param {string|undefined} rawColor              Selected palette color.
 * @param {Object}           colorGradientSettings Multiple-origin settings.
 * @return {Object|undefined} Stored color and matching preset slug.
 */
export const resolveColorSelection = (
	rawColor,
	colorGradientSettings = {}
) => {
	if ( typeof rawColor !== 'string' || ! rawColor ) {
		return undefined;
	}

	const normalizedSelection = normalizeColor( rawColor );
	const palettes = Array.isArray( colorGradientSettings.colors )
		? colorGradientSettings.colors
		: [];

	for ( const palette of palettes ) {
		const colors = Array.isArray( palette?.colors ) ? palette.colors : [];
		const match = colors.find(
			( candidate ) =>
				normalizeColor( candidate?.color ) === normalizedSelection
		);

		if ( match?.slug ) {
			return { color: rawColor, slug: match.slug };
		}
	}

	return { color: rawColor };
};
