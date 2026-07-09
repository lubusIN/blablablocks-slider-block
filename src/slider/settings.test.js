/**
 * Internal dependencies
 */
import { getEmptyNavigationColors, getEmptyPaginationColors } from './settings';

describe( 'slider settings reset values', () => {
	test( 'uses the navigation color attribute schema keys', () => {
		expect( getEmptyNavigationColors() ).toEqual( {
			arrowColor: { default: undefined, hover: undefined },
			backgroundColor: { default: undefined, hover: undefined },
		} );
	} );

	test( 'uses the pagination color attribute schema keys', () => {
		expect( getEmptyPaginationColors() ).toEqual( {
			activeColor: undefined,
			inactiveColor: undefined,
		} );
	} );

	test( 'returns fresh values for each reset', () => {
		const first = getEmptyNavigationColors();
		const second = getEmptyNavigationColors();

		expect( first ).not.toBe( second );
		expect( first.arrowColor ).not.toBe( second.arrowColor );
	} );
} );
