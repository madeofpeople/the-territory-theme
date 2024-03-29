const options = {
	threshold: 0.24,
};

const initScrollSpy = () => {
	const selectors = '.entry-content > section, .site-header';
	const observedElements = document.querySelectorAll( selectors );
	const pageNav = document.querySelector( '.site-header .page__nav' );
	let activeItem = null;

	const updatePageNav = ( anEl ) => {
		if ( anEl.tagName === 'SECTION' ) {
			if ( activeItem ) {
				activeItem.classList.remove( 'active' );
			}

			if ( activeItem ) {
				activeItem.classList.remove( 'active' );
			}

			activeItem = pageNav.querySelector(
				`a[href="#${ anEl.querySelector( 'h2' ).id }"]`
			);

			if ( activeItem ) activeItem.classList.add( 'active' );
		}
	};

	const inViewCallback = ( entries ) => {
		entries.forEach( ( entry ) => {
			if ( entry.isIntersecting ) {
				entry.target.classList.add( 'in-view' );
				entry.target.classList.remove( 'out-of-view' );
				if ( pageNav ) updatePageNav( entry.target );
			} else {
				if ( entry.target.classList.contains( 'site-header' ) ) {
					entry.target
						.querySelector( '.nav--primary' )
						.classList.add( 'alt-top' );
				}
				entry.target.classList.remove( 'in-view' );
				entry.target.classList.add( 'out-of-view' );
				if ( entry.target.classList.contains( 'site-header' ) ) {
					entry.target
						.querySelector( '.nav--primary' )
						.classList.remove( 'alt-top' );
				}
			}
		} );
	};

	const observer = new IntersectionObserver( inViewCallback, options );
	observedElements.forEach( ( element ) => {
		const dataDelay = element.getAttribute( 'data-delay' );
		element.classList.add( 'out-of-view' );
		element.style.transitionDelay = dataDelay + 'ms';
		observer.observe( element );
	} );
};

if (
	( 'complete' === document.readyState ||
		'loading' !== document.readyState ) &&
	! document.documentElement.doScroll
) {
	if ( ! document.body.classList.contains( 'is-mobile' ) ) {
		initScrollSpy();
	}
} else {
	document.addEventListener( 'DOMContentLoaded', function () {
		if ( ! document.body.classList.contains( 'is-mobile' ) ) {
			initScrollSpy();
		}
	} );
}
