<?php

/**
 * Render the slider block.
 *
 * @param array $attributes Block attributes.
 * @param string $content Block content.
 * @param WP_Block $block Block instance.
 *
 * @package blablablocks-slider-block
 */

/**
 * Resolves a spacing size value into a usable CSS value.
 *
 * @param mixed $value        The input spacing size value.
 * @param mixed $defaultValue The default value.
 * @return string A valid CSS spacing size value.
 */
if (!function_exists('bbb_resolve_spacing_size_value')) {
    function bbb_resolve_spacing_size_value($value, $defaultValue = '0px')
    {
        if (is_string($value)) {
            if (strpos($value, 'var:') === 0) {
                // Convert "var:some|value" into "var(--wp--some--value)"
                $css_variable = str_replace('var:', '--wp--', $value);
                $css_variable = str_replace('|', '--', $css_variable);
                return "var($css_variable)";
            }
            return $value;
        }

        if (is_numeric($value)) {
            return "{$value}px"; // Convert numbers to pixel values
        }

        // use defaultValue if value is invalid or undefined
        return $defaultValue;
    }
}

/**
 * Generates a border-radius string from either a string or an array.
 *
 * @param mixed $border_radius The border radius definition.
 * @param mixed $default_value The default value.
 * @return string A valid CSS border-radius value.
 */
if (!function_exists('bbb_get_border_radius_styles')) {
    function bbb_get_border_radius_styles($border_radius, $default_value = '0px')
    {
        if (is_string($border_radius)) {
            return $border_radius;
        }

        // If it's an array, return a four-value shorthand for border-radius
        $top_left = $border_radius['topLeft'] ?? $default_value;
        $top_right = $border_radius['topRight'] ?? $default_value;
        $bottom_right = $border_radius['bottomRight'] ?? $default_value;
        $bottom_left = $border_radius['bottomLeft'] ?? $default_value;
        return "$top_left $top_right $bottom_right $bottom_left";
    }
}

/**
 * Generates a set of CSS variable mappings for navigation styles based on provided attributes.
 *
 * @param array $attributes The attributes used to customize navigation styles.
 * @return array An associative array with CSS variable definitions for the navigation.
 */
if (!function_exists('bbb_generate_navigation_styles')) {
    function bbb_generate_navigation_styles($attributes = [])
    {
        $styles = [];

        // Helper function to add a style with a fallback to default values
        $add_style = function ($key, $value, $default_value = null) use (&$styles) {
            if (isset($value)) {
                $styles[$key] = $value;
            } elseif (isset($default_value)) {
                $styles[$key] = $default_value;
            }
        };

        // Navigation colors
        $navigation_color = $attributes['navigationColor'] ?? [];
        $add_style('--navigation-arrow-color', $navigation_color['arrowColor']['default'] ?? null, '#000');
        $add_style('--navigation-background-color', $navigation_color['backgroundColor']['default'] ?? null, 'transparent');
        $add_style('--navigation-arrow-hover-color', $navigation_color['arrowColor']['hover'] ?? null, '#333');
        $add_style('--navigation-background-hover-color', $navigation_color['backgroundColor']['hover'] ?? null, 'transparent');

        // Navigation sizing
        $add_style('--swiper-navigation-size', $attributes['navigationSize'] ?? null, '40px');
        $add_style('--navigation-border-radius', bbb_get_border_radius_styles($attributes['navigationBorderRadius'] ?? null, '4px'));

        // Navigation padding
        $navigation_padding = $attributes['navigationPadding'] ?? [];
        $add_style('--navigation-padding-top', bbb_resolve_spacing_size_value($navigation_padding['top'] ?? null, '0px'));
        $add_style('--navigation-padding-right', bbb_resolve_spacing_size_value($navigation_padding['right'] ?? null, '0px'));
        $add_style('--navigation-padding-bottom', bbb_resolve_spacing_size_value($navigation_padding['bottom'] ?? null, '0px'));
        $add_style('--navigation-padding-left', bbb_resolve_spacing_size_value($navigation_padding['left'] ?? null, '0px'));

        // Pagination styles
        $pagination_color = $attributes['paginationColor'] ?? [];
        $add_style('--pagination-size', $attributes['paginationSize'] ?? null, '8px');
        $add_style('--pagination-active-color', $pagination_color['activeColor']['default'] ?? null, '#000');
        $add_style('--pagination-inactive-color', $pagination_color['inactiveColor']['default'] ?? null, '#ccc');

        // Pagination offset
        $pagination_offset = $attributes['paginationOffset'] ?? [];
        $add_style('--pagination-offset-top', bbb_resolve_spacing_size_value($pagination_offset['top'] ?? null, 'auto'));
        $add_style('--pagination-offset-right', bbb_resolve_spacing_size_value($pagination_offset['right'] ?? null));
        $add_style('--pagination-offset-bottom', bbb_resolve_spacing_size_value($pagination_offset['bottom'] ?? null, '8px'));
        $add_style('--pagination-offset-left', bbb_resolve_spacing_size_value($pagination_offset['left'] ?? null));

        // Navigation offset
        $navigation_offset = $attributes['navigationOffset'] ?? [];
        $add_style('--navigation-offset-top', bbb_resolve_spacing_size_value($navigation_offset['top'] ?? null, '50%'));
        $add_style('--navigation-offset-right', bbb_resolve_spacing_size_value($navigation_offset['right'] ?? null, '10px'));
        $add_style('--navigation-offset-bottom', bbb_resolve_spacing_size_value($navigation_offset['bottom'] ?? null));
        $add_style('--navigation-offset-left', bbb_resolve_spacing_size_value($navigation_offset['left'] ?? null, '10px'));

        return $styles;
    }
}

// Generate navigation styles
$navigation_styles = bbb_generate_navigation_styles($attributes);

// Convert styles array to inline style string
$style_string = '';
foreach ($navigation_styles as $property => $value) {
    $style_string .= "$property:$value;";
}

// Add padding if there are at least 2 slides
$slide_count = count($block->inner_blocks);
if ($slide_count >= 2) {
    $style_string .= 'padding:100px;';
}

$wrapper_attributes = get_block_wrapper_attributes(
    [
        'style' => $style_string,
    ]
);

?>
<div <?php echo $wrapper_attributes; ?> role="region" aria-roledescription="carousel" aria-label="Slider block">
    <div class="swiper" <?php echo 'data-swiper="' . esc_attr(wp_json_encode($attributes)) . '"'; ?>>
        <div class="swiper-wrapper">
            <?php echo $content; ?>
        </div>
    </div>
</div>