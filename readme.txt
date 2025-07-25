=== BlaBlaBlocks Slider Block ===
Contributors:      lubus, punitv342
Tags:              slider, slider block, BlaBlaBlocks, block
Requires at least: 6.6
Tested up to:      6.8
Requires PHP:     7.4
Stable tag:        1.1.1
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

=== Open Source and Free ===
The BlaBlaBlocks Slider Block is open source. Not only is it free to use, but you are also welcome to collaborate and contribute to its development.

- **Source Code:**  
  [https://github.com/lubusIN/blablablocks-slider-block](https://github.com/lubusIN/blablablocks-slider-block)

- **Report Issues:**  
  [https://github.com/lubusIN/blablablocks-slider-block/issues](https://github.com/lubusIN/blablablocks-slider-block/issues)

== Screenshots ==
1. **Editor & Settings** – tweak your slider’s layout and behavior right in the sidebar.
2. **Responsive** – previews showing the slider auto‑adjusting across viewports.
3. **Template Library** – modal showcasing multiple ready‑to‑use slider designs.
4. **Frontend** – See exactly how your slider looks on your site.

== Installation ==
You can install this plugin either automatically through the WordPress admin or manually via FTP.

= Automatic Installation =

1. Log in to your WordPress dashboard.
2. Navigate to Plugins > Add New.
3. In the search field, type “BlaBlaBlocks Slider Block”, then hit Enter or click Search Plugins.
4. Click Install Now, then Activate.

= Manual Installation =

Manual installation method requires downloading the BlaBlaBlocks Slider Block plugin and uploading it to your web server via your favorite FTP application. The WordPress codex contains [instructions on how to do this here](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation).

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
Initial release 🎉