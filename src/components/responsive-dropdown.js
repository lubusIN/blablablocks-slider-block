/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { __experimentalHStack as HStack, __experimentalText as Text, DropdownMenu } from '@wordpress/components';
import { desktop, mobile, tablet } from '@wordpress/icons';

// Devices array
const devices = [
    { label: __('Desktop', 'lubus-slider'), value: 'desktop', icon: desktop },
    { label: __('Tablet', 'lubus-slider'), value: 'tablet', icon: tablet },
    { label: __('Mobile', 'lubus-slider'), value: 'mobile', icon: mobile },
];

/**
 * ResponsiveDropdown Component
 *
 * @param {Object} props Component props.
 * @param {Object} props.attributes Block attributes.
 * @param {Function} props.setAttributes Function to update attributes.
 * @param {string} props.label Label for the heading.
 * @param {string} props.responsiveKey The key in the attributes object for responsive settings (e.g., 'slidesPerView', 'slidesSpacing').
 *
 * @return {JSX.Element} JSX element for responsive dropdown.
 */
const ResponsiveDropdown = ({ attributes, setAttributes, label = 'Responsive Setting', responsiveKey }) => {
    const responsiveSettings = attributes[responsiveKey] || {};
    const { activeDevice } = responsiveSettings;

    return (
        <HStack justify="left" spacing={1}>
            <Text size={'11px'} weight={500} upperCase style={{ margin: 0 }}>
                {__(label, 'lubus-slider')}
            </Text>
            <DropdownMenu
                icon={devices.find((device) => device.value === activeDevice)?.icon || desktop}
                label={devices.find((device) => device.value === activeDevice)?.label || 'Desktop'}
                controls={devices.map((device) => ({
                    icon: device.icon,
                    label: device.label,
                    isActive: device.value === activeDevice,
                    onClick: () =>
                        setAttributes({
                            [responsiveKey]: {
                                ...responsiveSettings,
                                activeDevice: device.value,
                            },
                        }),
                }))}
            />
        </HStack>
    );
};

export default ResponsiveDropdown;
