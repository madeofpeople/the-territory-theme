<?php
/**
 * Customizer sections.
 *
 * @package the Territory
 */

/**
 * Register the section sections.
 *
 * @author WebDevStudios
 * @param object $wp_customize Instance of WP_Customize_Class.
 */
function territory_theme_customize_sections( $wp_customize ) {

	// Register additional scripts section.
	$wp_customize->add_section(
		'territory_theme_additional_scripts_section',
		[
			'title'    => esc_html__( 'Additional Scripts', 'territory-theme' ),
			'priority' => 10,
			'panel'    => 'site-options',
		]
	);

	// Register a social links section.
	$wp_customize->add_section(
		'territory_theme_social_links_section',
		[
			'title'       => esc_html__( 'Social Media', 'territory-theme' ),
			'description' => esc_html__( 'Links here power the display_social_network_links() template tag.', 'territory-theme' ),
			'priority'    => 90,
			'panel'       => 'site-options',
		]
	);

	// Register a header section.
	$wp_customize->add_section(
		'territory_theme_header_section',
		[
			'title'    => esc_html__( 'Header Customizations', 'territory-theme' ),
			'priority' => 90,
			'panel'    => 'site-options',
		]
	);

	// Register a footer section.
	$wp_customize->add_section(
		'territory_theme_footer_section',
		[
			'title'    => esc_html__( 'Footer Customizations', 'territory-theme' ),
			'priority' => 90,
			'panel'    => 'site-options',
		]
	);
}
add_action( 'customize_register', 'territory_theme_customize_sections' );
