<?php
/**
 * Custom scaffolding Library functions.
 *
 * File for custom scaffolding Library functionality.
 *
 * @package the Territory
 */

/**
 * Build a scaffolding section.
 *
 * @author Greg Rickaby, Carrie Forde
 *
 * @param array $args The scaffolding defaults.
 */
function territory_theme_display_scaffolding_section( $args = [] ) {

	// Set defaults.
	$defaults = [
		'title'       => '', // The scaffolding title.
		'description' => '', // The scaffolding description.
		'usage'       => '', // The template tag or markup needed to display the scaffolding.
		'parameters'  => [], // Does the scaffolding have params? Like $args?
		'arguments'   => [], // If the scaffolding has params, what are the $args?
		'output'      => '', // Use the template tag or scaffolding HTML markup here. It will be sanitized displayed.
	];

	// Parse arguments.
	$args = wp_parse_args( $args, $defaults );

	// Grab our allowed tags.
	$allowed_tags = territory_theme_scaffolding_allowed_html();

	// Add a unique class to the wrapper.
	$class = 'scaffolding-' . str_replace( ' ', '-', strtolower( $args['title'] ) ); ?>

<div class="scaffolding-document tabs <?php echo esc_attr( $class ); ?>">

	<div class="tab">
		<?php if ( $args['title'] ) : ?>
			<input type="checkbox" class="tab-toggle" id="<?php echo esc_attr( 'tab-' . $args['title'] ); ?>">
			<label class="scaffolding-document-title tab-label" for="<?php echo esc_attr( 'tab-' . $args['title'] ); ?>"><?php echo esc_html( $args['title'] ); ?></label>
		<?php endif; ?>


		<div class="scaffolding-document-content tab-content">

			<div class="scaffolding-document-details">

			<?php if ( $args['description'] ) : ?>
				<p><strong><?php esc_html_e( 'Description', 'territory-theme' ); ?>:</strong></p>
				<p class="scaffolding-document-description"><?php echo esc_html( $args['description'] ); ?></p>
			<?php endif; ?>

			<?php if ( $args['parameters'] ) : ?>
				<p><strong><?php esc_html_e( 'Parameters', 'territory-theme' ); ?>:</strong></p>
				<?php foreach ( $args['parameters'] as $key => $value ) : ?>
					<p><code><?php echo esc_html( $key ); ?></code> <?php echo esc_html( $value ); ?></p>
				<?php endforeach; ?>
			<?php endif; ?>

			<?php if ( $args['arguments'] ) : ?>
				<p><strong><?php esc_html_e( 'Arguments', 'territory-theme' ); ?>:</strong></p>
				<?php foreach ( $args['arguments'] as $key => $value ) : ?>
					<p><code><?php echo esc_html( $key ); ?></code> <?php echo esc_html( $value ); ?></p>
				<?php endforeach; ?>
			<?php endif; ?>

			</div><!-- .scaffolding-document-details -->

			<div class="scaffolding-document-usage">

			<?php if ( $args['usage'] ) : ?>
				<p><strong><?php esc_html_e( 'Usage', 'territory-theme' ); ?>:</strong></p>
				<pre><?php echo esc_html( $args['usage'] ); ?></pre>
			<?php endif; ?>

			<?php if ( $args['output'] ) : ?>
				<p><strong><?php esc_html_e( 'HTML Output', 'territory-theme' ); ?>:</strong></p>
				<pre><?php echo esc_html( $args['output'] ); ?></pre>
			<?php endif; ?>

			</div><!-- .scaffolding-document-usage -->
		</div><!-- .scaffolding-document-content -->
	</div><!-- .tab -->

	<div class="scaffolding-document-live">

		<?php if ( $args['output'] ) : ?>
			<?php echo do_shortcode( wp_kses( $args['output'], $allowed_tags ) ); ?>
		<?php endif; ?>

	</div><!-- .scaffolding-document-live -->
</div><!-- .scaffolding-document -->

	<?php
}

/**
 * Declare HTML tags allowed for scaffolding.
 *
 * @author Carrie Forde
 *
 * @return array The allowed tags and attributes.
 */
function territory_theme_scaffolding_allowed_html() {
	// Add additional HTML tags to the wp_kses() allowed html filter.
	return array_merge(
		wp_kses_allowed_html( 'post' ),
		[
			'svg'    => [
				'aria-hidden' => true,
				'class'       => true,
				'id'          => true,
				'role'        => true,
				'title'       => true,
				'fill'        => true,
				'height'      => true,
				'width'       => true,
				'use'         => true,
				'path'        => true,
			],
			'use'    => [
				'xlink:href' => true,
			],
			'title'  => [
				'id' => true,
			],
			'desc'   => [
				'id' => true,
			],
			'select' => [
				'class' => true,
			],
			'option' => [
				'option'   => true,
				'value'    => true,
				'selected' => true,
				'disabled' => true,
			],
			'input'  => [
				'type'        => true,
				'name'        => true,
				'value'       => true,
				'placeholder' => true,
				'class'       => true,
			],
			'iframe' => [
				'src'             => [],
				'height'          => [],
				'width'           => [],
				'frameborder'     => [],
				'allowfullscreen' => [],
			],
		]
	);
}

/**
 * Build a global scaffolding element.
 *
 * @author Carrie Forde
 *
 * @param array $args The array of colors or fonts.
 */
function territory_theme_display_global_scaffolding_section( $args = [] ) {
	// Set defaults.
	$defaults = [
		'global_type' => '', // Can be 'colors' or 'fonts'.
		'title'       => '', // Give the section a title.
		'arguments'   => [], // Use key => value pairs to pass colors or fonts.
	];

	// Parse args.
	$args = wp_parse_args( $args, $defaults );

	// Add a unique class to the wrapper.
	$class = 'scaffolding-' . str_replace( ' ', '-', strtolower( $args['title'] ) );
	?>

	<div class="scaffolding-document <?php echo esc_attr( $class ); ?>">
		<header class="scaffolding-document-header">
			<h3 class="scaffolding-document-title"><?php echo esc_html( $args['title'] ); ?></h3>
		</header>

		<div class="scaffolding-document-content">

			<?php
			// We'll alter the output slightly depending upon the global type.
			switch ( $args['global_type'] ) :
				case 'colors':
					?>

					<div class="swatch-container display-flex">

					<?php
					// Grab the array of colors.
					$colors = $args['arguments'];

					foreach ( $colors as $name => $hex ) :
						$bg_class  = 'bg-' . str_replace( ' ', '_', strtolower( $name ) );
						$color_var = '.' . $bg_class . ' ( ' . strtolower( $hex ) . ' )';
						?>

						<div class="swatch quarter <?php echo esc_attr( $bg_class ); ?>" style="background-color: <?php echo esc_attr( $hex ); ?>;">
							<header><?php echo esc_html( $name ); ?></header>
							<footer><?php echo esc_html( $color_var ); ?></footer>
						</div><!-- .swatch -->

					<?php endforeach; ?>
					</div><!-- .swatch-container -->

					<?php
					break;
				case 'fonts':
					?>

					<div class="font-container">

					<?php
					// Grab the array of fonts.
					$fonts = $args['arguments'];

					foreach ( $fonts as $name => $family ) :
						$font_var = '$font-' . str_replace( ' ', '-', strtolower( $name ) );
						?>

						<p><strong><?php echo esc_html( $font_var ); ?>:</strong> <span style="font-family: <?php echo esc_attr( $family ); ?>"><?php echo esc_html( $family ); ?></span></p>
					<?php endforeach; ?>
					</div><!-- .font-container -->
					<?php
					break;
				default:
					?>
			<?php endswitch; ?>
		</div><!-- .scaffolding-document-content -->
	</div><!-- .scaffolding-document -->
	<?php
}

/**
 * Add a scaffolding nav for easier access.
 *
 * @author JC Palmes
 */
function territory_theme_theme_scaffolding_nav() {
	?>
	<nav class="scaffolding-nav">
		<span><?php echo esc_html__( 'Scroll to:', 'territory-theme' ); ?></span>
		<a href="#globals" class="link"><?php echo esc_html__( 'Globals', 'territory-theme' ); ?></a>
		<a href="#typography" class="link"><?php echo esc_html__( 'Typography', 'territory-theme' ); ?></a>
		<a href="#media" class="link"><?php echo esc_html__( 'Media', 'territory-theme' ); ?></a>
		<a href="#icons" class="link"><?php echo esc_html__( 'Icons', 'territory-theme' ); ?></a>
		<a href="#buttons" class="link"><?php echo esc_html__( 'Buttons', 'territory-theme' ); ?></a>
		<a href="#forms" class="link"><?php echo esc_html__( 'Forms', 'territory-theme' ); ?></a>
		<a href="#elements" class="link"><?php echo esc_html__( 'Elements', 'territory-theme' ); ?></a>
	</nav><!-- .scaffolding-nav -->
	<?php
}

/**
 * Hook the theme's scaffolding template parts into the scaffolding template.
 *
 * @author Carrie Forde
 */
function territory_theme_hook_theme_scaffolding() {
	$template_dir = 'template-parts/scaffolding/scaffolding';

	territory_theme_theme_scaffolding_nav();

	get_template_part( $template_dir, 'globals' );
	get_template_part( $template_dir, 'typography' );
	get_template_part( $template_dir, 'media' );
	get_template_part( $template_dir, 'icons' );
	get_template_part( $template_dir, 'buttons' );
	get_template_part( $template_dir, 'forms' );
	get_template_part( $template_dir, 'elements' );
}

add_action( 'territory_theme_scaffolding_content', 'territory_theme_hook_theme_scaffolding' );
