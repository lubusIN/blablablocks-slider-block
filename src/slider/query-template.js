/**
 * Shared Query Loop (Posts Carousel) inner blocks template.
 *
 * Used by:
 * - Slider variation (`Posts Carousel`)
 * - Slider editor enforcement when `contentSource === 'query'`
 */
export const QUERY_TEMPLATE = [
	[
		'core/query',
		{
			lock: {
				move: true,
				remove: true,
			},
			query: {
				perPage: 6,
				postType: 'post',
				order: 'desc',
				orderBy: 'date',
				inherit: false,
			},
		},
		[
			[
				'core/post-template',
				{},
				[
					[ 'core/post-featured-image' ],
					[ 'core/post-title', { isLink: true } ],
					[ 'core/post-excerpt' ],
					[ 'core/read-more' ],
				],
			],
		],
	],
];

