/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
	ColorPalette,
	__experimentalUseMultipleOriginColorsAndGradients as useMultipleOriginColorsAndGradients, // eslint-disable-line
} from '@wordpress/block-editor';
import {
	Button,
	Dropdown,
	ColorIndicator,
	__experimentalZStack as ZStack, // eslint-disable-line
	__experimentalHStack as HStack, // eslint-disable-line
	__experimentalText as Text, // eslint-disable-line
	TabPanel,
} from '@wordpress/components';

/**
 * Internal dependencies.
 */
import { getColorPaletteValue, resolveColorSelection } from '../utils/color';

/**
 * Renders a color control dropdown for selecting colors.
 *
 * @param {Object}   props               - The component props.
 * @param {string}   props.label         - The label for the color control.
 * @param {Object}   props.colorValue    - The current color values. Should include `default` and optionally `hover` (if `hasHover` is true).
 * @param {Function} props.onChangeColor - Callback function to handle color changes. Accepts an object with updated color values.
 * @param {boolean}  props.hasHover      - Determines if hover color support is enabled. If true, a tab for hover colors is displayed.
 *
 * @return {JSX.Element} The rendered ColorControlDropdown component.
 */
function ColorControlDropdown( {
	label,
	colorValue = {},
	onChangeColor,
	hasHover = false,
} ) {
	const colorGradientSettings = useMultipleOriginColorsAndGradients();
	const handleChange = ( state, color ) => {
		onChangeColor( {
			...colorValue,
			[ state ]: resolveColorSelection( color, colorGradientSettings ),
		} );
	};

	return (
		<Dropdown
			popoverProps={ {
				placement: 'left-start',
				offset: 36,
				shift: true,
			} }
			contentClassName="slider_color_popover"
			renderToggle={ ( { isOpen, onToggle } ) => (
				<Button
					className={ `slider_color_button ${
						isOpen ? 'isOpen' : ''
					}` }
					aria-expanded={ isOpen }
					onClick={ onToggle }
				>
					<HStack justify="left">
						<ZStack offset={ 10 }>
							<ColorIndicator
								colorValue={ getColorPaletteValue(
									colorValue.default
								) }
							/>
							{ hasHover && (
								<ColorIndicator
									colorValue={ getColorPaletteValue(
										colorValue.hover
									) }
								/>
							) }
						</ZStack>
						<Text>{ label }</Text>
					</HStack>
				</Button>
			) }
			renderContent={ () =>
				hasHover ? (
					<TabPanel
						tabs={ [
							{
								name: 'default',
								title: __(
									'Default',
									'blablablocks-slider-block'
								),
							},
							{
								name: 'hover',
								title: __(
									'Hover',
									'blablablocks-slider-block'
								),
							},
						] }
					>
						{ ( tab ) => (
							<ColorPalette
								__experimentalIsRenderedInSidebar
								value={ getColorPaletteValue(
									colorValue[ tab.name ]
								) }
								onChange={ ( color ) =>
									handleChange( tab.name, color )
								}
								enableAlpha
								{ ...colorGradientSettings }
							/>
						) }
					</TabPanel>
				) : (
					<ColorPalette
						className="ls-color-pallete-container"
						__experimentalIsRenderedInSidebar
						value={ getColorPaletteValue( colorValue.default ) }
						onChange={ ( color ) =>
							handleChange( 'default', color )
						}
						enableAlpha
						{ ...colorGradientSettings }
					/>
				)
			}
		/>
	);
}

export default ColorControlDropdown;
