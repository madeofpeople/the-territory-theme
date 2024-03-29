<?php
 /**
  * Title: Engage & Amplify Section
  * Slug: the-territory/section-engage-amplify
  * Categories: the-territory, layout
  */
?>

<!-- wp:group {"tagName":"section","className":"section engage-amplify"} -->
<section class="wp-block-group section engage-amplify">
    <!-- wp:heading -->
    <h2 id="engage-amplify"><?php esc_html_e( 'Engage &amp; Amplify', 'the-territory' ); ?></h2>
    <!-- /wp:heading -->

    <!-- wp:cover {"url":"<?php echo esc_url( get_theme_file_uri( 'build/images/backgrounds/cover.jpg' ) ); ?>","dimRatio":0,"isDark":false,"isParallax":true} -->
    <div class="wp-block-cover is-light lax">
        <span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span>
        <img class="wp-block-cover__image-background" alt="" src="<?php echo esc_url( get_theme_file_uri( 'build/images/backgrounds/cover.jpg' ) ); ?>" data-object-fit="cover"/>
        <div class="wp-block-cover__inner-container">
            <!-- wp:columns -->
            <div class="wp-block-columns">
                <!-- wp:column -->
                <div class="wp-block-column">
                    <!-- wp:heading {"level":3,"textColor":"white"} -->
                    <h3 class="has-white-color has-text-color"><?php esc_html_e( 'Schedule an Impact Screening', 'the-territory' ); ?></h3>
                    <!-- /wp:heading -->
                </div>
                <!-- /wp:column -->

                <!-- wp:column -->
                <div class="wp-block-column">
                    <!-- wp:group {"className":"is-overlay"} -->
                    <div class="wp-block-group is-overlay">
                        <!-- wp:buttons -->
                        <div class="wp-block-buttons">
                            <!-- wp:button -->
                            <div class="wp-block-button"><a class="wp-block-button__link" href="#host-screening-form"><?php esc_html_e( 'Enroll to Host a Screening', 'the-territory' ); ?></a></div>
                            <!-- /wp:button -->
                        </div>
                        <!-- /wp:buttons -->

                        <!-- wp:list {"placeholder":"Add list items ...","className":"icon-list"} -->
                        <ul class="icon-list">
                            <li><a href="#"><?php esc_html_e( 'Download the Checklist', 'the-territory' ); ?></a></li>
                            <li><a href="#"><?php esc_html_e( 'Download the Discussion Guide', 'the-territory' ); ?></a></li>
                        </ul>
                        <!-- /wp:list -->
                    </div>
                    <!-- /wp:group -->
                </div>
                <!-- /wp:column -->
            </div>
            <!-- /wp:columns -->
        </div>
    </div>
    <!-- /wp:cover -->
</section>
<!-- /wp:group -->