/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { desktop, mobile, tablet } from '@wordpress/icons';
import {
	Icon,
	__experimentalHStack as HStack, // eslint-disable-line
	__experimentalText as Text, // eslint-disable-line
} from '@wordpress/components';

// Devices array
const devices = [
	{
		label: __( 'Desktop', 'blablablocks-slider-block' ),
		value: 'desktop',
		icon: desktop,
	},
	{
		label: __( 'Tablet', 'blablablocks-slider-block' ),
		value: 'tablet',
		icon: tablet,
	},
	{
		label: __( 'Mobile', 'blablablocks-slider-block' ),
		value: 'mobile',
		icon: mobile,
	},
];

/**
 * Responsive Icon Component
 *
 * @param {Object}   props               Component props.
 * @param {Object}   props.attributes    Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 * @param {string}   props.responsiveKey The key in the attributes object for responsive settings (e.g., 'slidesPerView', 'slidesSpacing').
 * @param {string}   props.label         The label of field
 * @return {JSX.Element} JSX element for responsive icon display.
 */
const ResponsiveDropdown = ( {
	label,
	attributes,
	setAttributes,
	responsiveKey,
} ) => {
	// Get the current editor device type from WordPress editor
	const editorDeviceType = useSelect(
		( select ) => select( 'core/editor' ).getDeviceType(),
		[]
	);

	// Default to `desktop` if `editorDeviceType` is unavailable
	const deviceType = editorDeviceType?.toLowerCase() || 'desktop';

	const responsiveSettings = attributes[ responsiveKey ] || {};

	// Update the `activeDevice` attribute when `editorDeviceType` changes
	useEffect( () => {
		setAttributes( {
			[ responsiveKey ]: {
				...responsiveSettings,
				activeDevice: deviceType,
			},
		} );
	}, [ deviceType ] );

	// Get the current device object based on the type, default to desktop if not found
	const currentDevice =
		devices.find( ( device ) => device.value === deviceType ) ||
		devices[ 0 ];

	return (
		<HStack justify="left" spacing={ 1 }>
			<Text
				size={ '11px' }
				weight={ 500 }
				upperCase
				style={ { margin: 0 } }
			>
				{ label }
			</Text>
			<Icon icon={ currentDevice.icon } />
		</HStack>
	);
};

export default ResponsiveDropdown;
