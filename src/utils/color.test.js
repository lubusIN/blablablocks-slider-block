/**
 * Internal dependencies
 */
import {
	getColorPaletteValue,
	resolveColorSelection,
	resolveColorValue,
} from './color';

describe( 'slider color utilities', () => {
	test( 'stores the slug for a matching WordPress preset', () => {
		const settings = {
			colors: [
				{
					name: 'Theme',
					colors: [ { color: '#123456', slug: 'contrast' } ],
				},
			],
		};

		expect( resolveColorSelection( '#123456', settings ) ).toEqual( {
			color: '#123456',
			slug: 'contrast',
		} );
	} );

	test( 'stores custom colors without a preset slug', () => {
		expect( resolveColorSelection( '#abcdef', { colors: [] } ) ).toEqual( {
			color: '#abcdef',
		} );
	} );

	test( 'resolves presets, custom objects, and legacy strings', () => {
		expect(
			resolveColorValue( { color: '#123456', slug: 'contrast' } )
		).toBe( 'var(--wp--preset--color--contrast)' );
		expect( resolveColorValue( { color: '#abcdef' } ) ).toBe( '#abcdef' );
		expect( resolveColorValue( '#fedcba' ) ).toBe( '#fedcba' );
	} );

	test( 'uses literal colors in palette controls and clears empty values', () => {
		expect(
			getColorPaletteValue( { color: '#123456', slug: 'contrast' } )
		).toBe( '#123456' );
		expect( getColorPaletteValue( '#abcdef' ) ).toBe( '#abcdef' );
		expect( resolveColorSelection( undefined, {} ) ).toBeUndefined();
	} );
} );
