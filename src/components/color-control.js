/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
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
import { useState } from '@wordpress/element';

/**
 * Render Color Picker
 */
function ColorControlDropdown({ label, colorValue = {}, onChangeColor }) {
    const [activeTab, setActiveTab] = useState('default');
    const hasHover = 'hover' in colorValue; // Determine if hover is provided

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
                            {hasHover && <ColorIndicator colorValue={colorValue.hover} />}
                        </ZStack>
                        <Text>{label}</Text>
                    </HStack>
                </Button>
            )}
            renderContent={() => (
                hasHover ? (
                    <TabPanel
                        onSelect={(tab) => setActiveTab(tab)}
                        tabs={[
                            { name: 'default', title: __('Default', 'text-domain') },
                            { name: 'hover', title: __('Hover', 'text-domain') },
                        ]}
                    >
                        {(tab) => (
                            <ColorPalette
                                __experimentalIsRenderedInSidebar
                                value={colorValue[tab.name] || ''}
                                onChange={(color) => {
                                    onChangeColor({ ...colorValue, [tab.name]: color });
                                }}
                                enableAlpha
                            />
                        )}
                    </TabPanel>
                ) : (
                    <ColorPalette
                    className='ls-color-pallete-container'
                        __experimentalIsRenderedInSidebar
                        value={colorValue.default || ''}
                        onChange={(color) => {
                            onChangeColor({ ...colorValue, default: color });
                        }}
                        enableAlpha
                    />
                )
            )}
        />
    );
}

export default ColorControlDropdown;