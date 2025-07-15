=== BlaBlaBlocks Slider Block ===
Contributors:      lubus, punitv342
Tags:              slider, slider block, BlaBlaBlocks, block
Requires at least: 6.6
Tested up to:      6.8
Requires PHP:     7.4
Stable tag:        1.1.0
License:            MIT
License URI:     https://www.gnu.org/licenses/MIT

Create responsive, accessible sliders with ready-to-use templates in the Block Editor.

== Description ==

BlaBlaBlocks Slider Block is a WordPress plugin built specifically for the Block Editor, allowing you to create responsive sliders effortlessly.

=== What makes BlaBlaBlocks Slider Block special? ===
* **Accessible** –  WCAG-compliant with ARIA roles, keyboard nav & screen-reader support.  
* **Responsive** – auto-adjusts slides and layout for any screen size.  
* **Ready-to-use Templates** – ship with multiple prebuilt layouts you can insert and customize.  
* **Editor Compatibility** – fully integrated with the Block Editor’s UI and server-side rendering pipeline.

== Installation ==
1. Download the latest zip from GitHub or WordPress.org.  
2. In your dashboard, go to **Plugins &rarr; Add New** and click **Upload Plugin**.  
3. Upload `blablablocks-slider-block.zip` and click **Install Now**.  
4. Activate **BlaBlaBlocks Slider Block** from your **Plugins** list.  
5. Add a **Slider** block to any post or page, configure settings in the sidebar, and publish.

== Screenshots ==
1. **Editor & Settings** – tweak your slider’s layout and behavior right in the sidebar.
2. **Responsive** – previews showing the slider auto‑adjusting across viewports.
3. **Template Library** – modal showcasing multiple ready‑to‑use slider designs.
4. **Frontend** – See exactly how your slider looks on your site.

== Changelog ==
= 1.1.0 =
* Added Position Configuration options for pagination and navigation placement.  
* Added New Templates to the library for extra layout flexibility.  
* Fixed Hero Section Autoplay (disabled autoplay by default).  
* Fixed Keyboard Navigation conflicts when multiple sliders are present.  
* Updated `slidesPerView` logic to auto-adjust with a maximum slide cap for responsiveness.

= 1.0.2 =
* Fixed sanitization of wrapper attributes and refined content output for improved security and standards compliance in slider rendering.

= 1.0.1 =
* Added `render.php` for server-side rendering to ensure consistency between editor and frontend.  
* Fixed save issues by offloading rendering to the server.  
* Updated build process (Webpack) and dependencies.  
* Improved slider accessibility and refined default styling. :contentReference[oaicite:2]{index=2}

= 1.0.0 =
* Initial release 🎉