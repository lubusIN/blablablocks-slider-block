=== Slider and Carousel Block – Responsive, Accessible ===
Contributors:      lubus,ajitbohra,punitv342
Tags:              slider, slider block, carousel, image slider, gutenberg block
Requires at least: 6.6
Tested up to:      6.9
Requires PHP:      7.4
Stable tag:        1.2.0
License:           MIT
License URI:       https://www.gnu.org/licenses/MIT

Build responsive, accessible sliders or carousel in the Block Editor fast templates, no code needed.

== Description ==

**Slider Block** (part of the **BlaBlaBlocks** suite) is a WordPress plugin that lets you build **responsive sliders**, **carousels**, and **Gutenberg sliders** directly inside the Block Editor no shortcodes, no page builders, and no coding required.

This block gives you an intuitive, visual way to add sliders to your pages, posts, or full site editing templates. Choose from ready-to-use templates or start from scratch, fully customize slide layout, autoplay, and navigation all within the native WordPress interface.

### Why Choose BlaBlaBlocks Slider Block?

* **Accessible by Design** – WCAG-compliant with ARIA roles, keyboard navigation, and screen-reader support.
* **Responsive and Fluid** – Automatically adapts to mobile, tablet, and desktop breakpoints.
* **Gutenberg-Native Experience** – Seamlessly integrated into the Block Editor.
* **Query Loop Support** – Turn WordPress posts into a dynamic carousel using the native Query Loop block.
* **Template Library** – Insert pre-built slider layouts: hero sections, testimonials, image carousels, and more.
* **Server-Side Rendering** – Ensures your editor preview always matches the frontend output.
* **Lightweight and Fast** – Minimal scripts, optimized rendering, and no frontend bloat.

Whether you’re creating a full-width hero slider, a small testimonial carousel, or a product showcase, the **Slider Block** makes it simple, accessible, and fast.

### Key Features

#### **Accessible Sliders**

Every slider is fully accessible out of the box:

* Keyboard navigation for next/previous slides.
* ARIA labels and roles for assistive technologies.
* Screen reader-friendly transitions.
* Optional focus management for improved UX.

#### **Responsive by Default**
Your slider automatically scales to different viewports.
Adjust slides per view, spacing, and breakpoints — perfect for mobile-first sites.

#### **Gutenberg Integration**
Built entirely for the **WordPress Block Editor**, this plugin uses the latest React-based block architecture. You can:

* Drag and drop slides directly in the editor.
* Use nested blocks for advanced layouts.
* Adjust all options in the right sidebar no shortcodes or widgets.

#### **Posts Carousel with Query Loop**
Build dynamic carousels from your latest or filtered posts using the native **Query Loop** block. You can:

* Insert the **Posts Carousel** variation directly from the Slider block.
* Use WordPress query controls to choose post type, order, and posts per page.
* Customize the post template with core blocks like featured image, title, excerpt, date, and read more.

#### **Pre-Made Templates**

Skip the setup with built-in templates for:

* Hero sliders
* Image carousels
* Testimonials
* Content showcases

Each template is fully customizable just insert, edit, and publish.

#### **Advanced Configuration**

Fine-tune every detail:

* Slides per view
* Pagination and navigation controls
* Autoplay and speed settings
* Transition effects
* Direction (horizontal/vertical)

#### **Lightweight and Optimized**
Slider Block uses minimal JavaScript and CSS only loading assets when the block appears on the page. This ensures fast load times and top performance scores.

### How to Create a Slider in Gutenberg

1. Open the Block Editor (Gutenberg).
2. Search for “Slider” to add the block.
3. Insert the **BlaBlaBlocks Slider Block**.
4. Add slides you can use images, headings, buttons, or any block inside each slide.
5. Customize slider options in the sidebar panel (autoplay, speed, arrows, pagination).
6. Save and preview your responsive slider is ready!

Check [documentation](https://github.com/lubusIN/blablablocks-slider-block/wiki) more details.

###  How to Use Templates Library

1. Click the **“Template Library”** button inside the slider block toolbar.
2. Choose from multiple designs Hero, Testimonial, Carousel, Gallery.
3. Customize slide content, layout, and animations instantly.

Check [documentation](https://github.com/lubusIN/blablablocks-slider-block/wiki) more details.

### Common Use Cases

* Homepage hero sliders with call-to-action buttons.
* Testimonial carousels on service pages.
* Logo sliders for brand showcases.
* Product image carousels in WooCommerce product pages.
* Featured content sliders on blogs or portfolios.

###  Technical Features

* Built with React + WordPress Block API.
* Uses Swiper.js.
* Supports dynamic slide content.
* Server-side rendering ensures perfect frontend/editor consistency.
* Fully compatible with WordPress 6.6+ and PHP 7.4+.

### SEO and Performance

Slider Block follows best practices for:

* **Semantic HTML** output.
* **Accessible ARIA structure** for screen readers.
* **Optimized DOM footprint** for Core Web Vitals compliance.

### Troubleshooting

**The slider doesn’t autoplay:**
Check the block settings and ensure “Autoplay” is toggled on. Autoplay is disabled by default for accessibility reasons.

**Keyboard navigation not working:**
If multiple sliders are on a single page, ensure you’re using version 1.1.0 or later (this fixes navigation conflicts).

**Layout issues on mobile:**
Try adjusting the “Slides per view” setting or resetting custom CSS if applied by your theme.

### Integrations

- Works with **WordPress Core Blocks** (Image, Heading, Button, Group).
- Compatible with **WooCommerce** product blocks.
- Can be combined with **block patterns** and **reusable blocks** for advanced layouts.

### Open Source and Contributions

The BlaBlaBlocks Slider Block is 100% open source.
You’re welcome to use, modify, or contribute improvements.

* **Source Code:**
  [https://github.com/lubusIN/blablablocks-slider-block](https://github.com/lubusIN/blablablocks-slider-block)

* **Report Issues:**
  [https://github.com/lubusIN/blablablocks-slider-block/issues](https://github.com/lubusIN/blablablocks-slider-block/issues)

== Frequently Asked Questions ==

### 1. Can I use the slider with any WordPress theme?
Yes, the slider works with all themes that support Gutenberg, including block-based and classic themes.

### 2. Does it work with Full Site Editing (FSE)?
Absolutely! You can add sliders to templates, template parts, or any block pattern area.

### 3. Can I create multiple sliders on the same page?
Yes, multiple sliders are fully supported, and each instance maintains its own settings.

### 4. How can I control autoplay?
In the block sidebar, you can toggle autoplay on/off and configure delay and transition speed.

### 5. Is this plugin compatible with caching plugins?
Yes, it works seamlessly with major caching and optimization plugins like WP Rocket and LiteSpeed Cache.

### 6. Can I use custom content inside slides?
Definitely. You can use any block - headings, images, buttons, or even nested groups inside a slide.

### 7. Does it support touch gestures?
Yes, Slider Block supports swipe gestures on mobile and tablet devices by default.

### 8. Is there a shortcode?
No shortcodes are required. Everything happens visually in Gutenberg.

### 9. How do I report bugs or request features?
You can open an issue on [GitHub](https://github.com/lubusIN/blablablocks-slider-block/issues).

### 10. Is it open source?
Yes! BlaBlaBlocks Slider Block is open source and free under the MIT license.

== Screenshots ==

1. **Block Editor Settings** – Adjust your slider layout, animation, and navigation instantly.
2. **Responsive Slider Preview** – See how your slider adapts to desktop, tablet, and mobile screens.
3. **Template Library** – Choose prebuilt hero, testimonial, and carousel templates for instant setup.
4. **Frontend Example** – A live responsive slider displayed on your site using default theme styling.

== Installation ==

### Automatic
1. Log in to your WordPress dashboard.
2. Go to **Plugins → Add New**.
3. Search for **“BlaBlaBlocks Slider Block”**.
4. Click **Install Now**, then **Activate**.

### Manual
1. Download the plugin ZIP file.
2. Upload it to `/wp-content/plugins/` via FTP or the Plugin Upload tool.
3. Activate through the **Plugins** screen in WordPress.

== Changelog ==

= 1.2.0 =
* Added Query Loop support for Posts Carousel in the Slider block.
* Updated Plugin Name.
* Bump plugin version to 1.2.0.

= 1.1.2 =
* Added decimal support to `slidesPerView` setting.
* Bump plugin version to 1.1.2.
* Update "Tested up to" to 6.9.

= 1.1.1 =
* Enhanced **Gutenberg slider** performance and transition smoothness.
* Updated **responsive breakpoints** for improved mobile and tablet layouts.
* Improved **keyboard navigation** and screen reader accessibility.
* Fixed **autoplay** configuration issues on multiple slider instances.

= 1.1.0 =
* Added pagination and navigation position options.
* Added new **slider templates** for more layout flexibility.
* Fixed hero section autoplay (disabled by default).
* Fixed keyboard navigation conflicts with multiple sliders.
* Updated `slidesPerView` logic for auto-adjustment and responsiveness.

= 1.0.2 =
* Improved sanitization of wrapper attributes for security and standards compliance.

= 1.0.1 =
* Added `render.php` for server-side rendering.
* Improved save logic and accessibility.
* Updated build process and dependencies.

= 1.0.0 =
* Initial release 🎉
