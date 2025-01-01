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
 * Renders a color control dropdown for selecting colors.
 *
 * @param {Object} props - The component props.
 * @param {string} props.label - The label for the color control.
 * @param {Object} props.colorValue - The current color values. Should include `default` and optionally `hover` (if `hasHover` is true).
 * @param {Function} props.onChangeColor - Callback function to handle color changes. Accepts an object with updated color values.
 * @param {boolean} props.hasHover - Determines if hover color support is enabled. If true, a tab for hover colors is displayed.
 *
 * @returns {JSX.Element} The rendered ColorControlDropdown component.
 */
function ColorControlDropdown({ label, colorValue = {}, onChangeColor, hasHover = false }) {
	const [activeTab, setActiveTab] = useState('default');

	return (
		<Dropdown
			popoverProps={{
				placement: 'left-start',
				offset: 36,
				shift: true,
			}}
			contentClassName="slider_color_popover"
			renderToggle={({ isOpen, onToggle }) => (
				<Button
					className={`slider_color_button ${isOpen ? 'isOpen' : ''}`}
					aria-expanded={isOpen}
					onClick={onToggle}
				>
					<HStack justify="left">
						<ZStack offset={10}>
							<ColorIndicator colorValue={colorValue.default} />
							{hasHover && (
								<ColorIndicator colorValue={colorValue.hover} />
							)}
						</ZStack>
						<Text>{label}</Text>
					</HStack>
				</Button>
			)}
			renderContent={() =>
				hasHover ? (
					<TabPanel
						onSelect={(tab) => setActiveTab(tab)}
						tabs={[
							{
								name: 'default',
								title: __('Default', 'blablablocks-slider-block'),
							},
							{
								name: 'hover',
								title: __('Hover', 'blablablocks-slider-block'),
							},
						]}
					>
						{(tab) => (
							<ColorPalette
								__experimentalIsRenderedInSidebar
								value={colorValue[tab.name] || ''}
								onChange={(color) => {
									onChangeColor({
										...colorValue,
										[tab.name]: color,
									});
								}}
								enableAlpha
							/>
						)}
					</TabPanel>
				) : (
					<ColorPalette
						className="ls-color-pallete-container"
						__experimentalIsRenderedInSidebar
						value={colorValue.default || ''}
						onChange={(color) => {
							onChangeColor({ ...colorValue, default: color });
						}}
						enableAlpha
					/>
				)
			}
		/>
	);
}

export default ColorControlDropdown;
