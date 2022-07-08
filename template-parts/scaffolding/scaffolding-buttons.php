<?php
/**
 * The template used for displaying Buttons in the scaffolding library.
 *
 * @package the Territory
 */

?>

<section class="section-scaffolding">

	<h2 class="scaffolding-heading" id="<?php esc_html_e( 'buttons', 'territory-theme' ); ?>"><?php esc_html_e( 'Buttons', 'territory-theme' ); ?></h2>
	<?php
		// Button.
		territory_theme_display_scaffolding_section(
			[
				'title'       => 'Button',
				'description' => 'Display a button.',
				'usage'       => '<button class="button" href="#">Click Me</button>',
				'output'      => '<button class="button">Click Me</button>',
			]
		);
		?>
</section>
