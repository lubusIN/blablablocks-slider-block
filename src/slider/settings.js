/**
 * Returns an empty navigation color value using the block attribute schema.
 *
 * @return {Object} Navigation colors ready for setAttributes.
 */
export const getEmptyNavigationColors = () => ( {
	arrowColor: {
		default: undefined,
		hover: undefined,
	},
	backgroundColor: {
		default: undefined,
		hover: undefined,
	},
} );

/**
 * Returns an empty pagination color value using the block attribute schema.
 *
 * @return {Object} Pagination colors ready for setAttributes.
 */
export const getEmptyPaginationColors = () => ( {
	activeColor: undefined,
	inactiveColor: undefined,
} );
