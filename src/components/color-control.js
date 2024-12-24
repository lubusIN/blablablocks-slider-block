/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	Dropdown,
	ColorIndicator,
	__experimentalZStack as ZStack,
	__experimentalHStack as HStack,
	__experimentalText as Text,
	ColorPalette,
	TabPanel,
} from '@wordpress/components';

/**
 * Render Color Picker
 * @param root0
 * @param root0.label
 * @param root0.colorValue
 * @param root0.onChangeColor
 */
function ColorControlDropdown( { label, colorValue = {}, onChangeColor } ) {
	const [ activeTab, setActiveTab ] = useState( 'default' );
	const hasHover = 'hover' in colorValue; // Determine if hover is provided

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
							<ColorIndicator colorValue={ colorValue.default } />
							{ hasHover && (
								<ColorIndicator
									colorValue={ colorValue.hover }
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
						onSelect={ ( tab ) => setActiveTab( tab ) }
						tabs={ [
							{
								name: 'default',
								title: __( 'Default', 'slider-block' ),
							},
							{
								name: 'hover',
								title: __( 'Hover', 'slider-block' ),
							},
						] }
					>
						{ ( tab ) => (
							<ColorPalette
								__experimentalIsRenderedInSidebar
								value={ colorValue[ tab.name ] || '' }
								onChange={ ( color ) => {
									onChangeColor( {
										...colorValue,
										[ tab.name ]: color,
									} );
								} }
								enableAlpha
							/>
						) }
					</TabPanel>
				) : (
					<ColorPalette
						className="ls-color-pallete-container"
						__experimentalIsRenderedInSidebar
						value={ colorValue.default || '' }
						onChange={ ( color ) => {
							onChangeColor( { ...colorValue, default: color } );
						} }
						enableAlpha
					/>
				)
			}
		/>
	);
}

export default ColorControlDropdown;
