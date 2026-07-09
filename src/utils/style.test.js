/**
 * Internal dependencies
 */
import { generateNavigationStyles } from './style';

describe( 'generateNavigationStyles', () => {
	test( 'uses preset variables for navigation and pagination colors', () => {
		const styles = generateNavigationStyles( {
			navigationColor: {
				arrowColor: {
					default: { color: '#111111', slug: 'contrast' },
					hover: { color: '#222222', slug: 'accent-1' },
				},
				backgroundColor: {
					default: { color: '#ffffff', slug: 'base' },
					hover: { color: 'rgba(0, 0, 0, 0.5)' },
				},
			},
			paginationColor: {
				activeColor: {
					default: { color: '#111111', slug: 'contrast' },
				},
				inactiveColor: { default: { color: '#cccccc' } },
			},
		} );

		expect( styles ).toMatchObject( {
			'--navigation-arrow-color': 'var(--wp--preset--color--contrast)',
			'--navigation-arrow-hover-color':
				'var(--wp--preset--color--accent-1)',
			'--navigation-background-color': 'var(--wp--preset--color--base)',
			'--navigation-background-hover-color': 'rgba(0, 0, 0, 0.5)',
			'--pagination-active-color': 'var(--wp--preset--color--contrast)',
			'--pagination-inactive-color': '#cccccc',
		} );
	} );

	test( 'continues to render legacy string colors', () => {
		const styles = generateNavigationStyles( {
			navigationColor: {
				arrowColor: { default: '#123456', hover: '#654321' },
			},
			paginationColor: {
				activeColor: { default: '#abcdef' },
			},
		} );

		expect( styles[ '--navigation-arrow-color' ] ).toBe( '#123456' );
		expect( styles[ '--navigation-arrow-hover-color' ] ).toBe( '#654321' );
		expect( styles[ '--pagination-active-color' ] ).toBe( '#abcdef' );
	} );
} );
