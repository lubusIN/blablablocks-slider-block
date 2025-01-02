/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { desktop, mobile, tablet } from '@wordpress/icons';
import {
	__experimentalHStack as HStack,
	__experimentalText as Text,
} from '@wordpress/components';
import { Icon } from '@wordpress/components';

// Devices array
const devices = [
	{ label: __( 'Desktop', 'blablablocks-slider-block' ), value: 'desktop', icon: desktop },
	{ label: __( 'Tablet', 'blablablocks-slider-block' ), value: 'tablet', icon: tablet },
	{ label: __( 'Mobile', 'blablablocks-slider-block' ), value: 'mobile', icon: mobile },
];

/**
 * Responsive Icon Component
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 * @param {string}   props.responsiveKey The key in the attributes object for responsive settings (e.g., 'slidesPerView', 'slidesSpacing').
 *
 * @return {JSX.Element} JSX element for responsive icon display.
 */
const ResponsiveDropdown = ({ label, attributes, setAttributes, responsiveKey }) => {
	// Get the current editor device type from WordPress editor
	const editorDeviceType = useSelect(
		(select) => select('core/editor').getDeviceType(),
		[]
	);

	const responsiveSettings = attributes[responsiveKey] || {};

	// Update the `activeDevice` attribute when `editorDeviceType` changes
	useEffect(() => {
		setAttributes({
			[responsiveKey]: {
				...responsiveSettings,
				activeDevice: editorDeviceType.toLowerCase(),
			},
		});
	}, [editorDeviceType]);

	const currentDevice = devices[editorDeviceType.toLowerCase()] || devices.desktop;

	return (
		<HStack justify="left" spacing={ 1 }>
			<Text
				size={ '11px' }
				weight={ 500 }
				upperCase
				style={ { margin: 0 } }
			>
				{ __( label, 'blablablocks-slider-block' ) }
			</Text>
			<Icon icon={currentDevice.icon} />
		</HStack>
	);
};

export default ResponsiveDropdown;
