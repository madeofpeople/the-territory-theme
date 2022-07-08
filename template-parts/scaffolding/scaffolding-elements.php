<?php
/**
 * The template used for displaying generic elements in the scaffolding library.
 *
 * @package the Territory
 */

?>

<section class="section-scaffolding">

	<h2 class="scaffolding-heading" id="<?php esc_html_e( 'elements', 'territory-theme' ); ?>"><?php esc_html_e( 'Generic Elements', 'territory-theme' ); ?></h2>

	<?php
	// Right-aligned Image.
	territory_theme_display_scaffolding_section(
		[
			'title'       => 'Numeric Pagination',
			'description' => 'Display numeric pagination.',
			'usage'       => 'territory_theme_display_numeric_pagination()',
			'output'      => '
				<nav class="pagination-container">
					<a class="prev page-numbers" href="#>&laquo;</a>
					<a class="page-numbers" href="#">1</a>
					<span aria-current="page" class="page-numbers current">2</span>
					<a class="page-numbers" href="#">3</a>
					<a class="next page-numbers" href="#">&raquo;</a>
				</nav>
			',
		]
	);

	?>
</section>
