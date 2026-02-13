// Your custom JavaScript code

console.log('Project loaded successfully!');

// Mobile Menu Drawer with jQuery Animation
$(document).ready(function() {
    const $mobileMenuButton = $('#mobile-menu-button');
    const $mobileMenu = $('#mobile-menu');
    const $mobileMenuOverlay = $('#mobile-menu-overlay');
    const $mobileMenuClose = $('#mobile-menu-close');
    const $body = $('body');

    // Open menu function
    function openMenu() {
        $mobileMenuOverlay.fadeIn(300);
        $mobileMenu.addClass('menu-open');
        $body.css('overflow', 'hidden'); // Prevent body scroll
    }

    // Close menu function
    function closeMenu() {
        $mobileMenuOverlay.fadeOut(300);
        $mobileMenu.removeClass('menu-open');
        $body.css('overflow', ''); // Restore body scroll
    }

    // Open menu on button click
    $mobileMenuButton.on('click', function() {
        openMenu();
    });

    // Close menu on close button click
    $mobileMenuClose.on('click', function() {
        closeMenu();
    });

    // Close menu when clicking on overlay
    $mobileMenuOverlay.on('click', function() {
        closeMenu();
    });

    // Close menu when clicking on a link
    $mobileMenu.find('a').on('click', function() {
        closeMenu();
    });

    // Initialize Organizations Swiper Slider
    const orgsSwiper = new Swiper('.orgs-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 66,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 800,
        grabCursor: true,
    });

    // Initialize Brand Swiper Slider
    const brandSwiper = new Swiper('.brand-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 24,
        loop: true,
        loopAdditionalSlides: 6,
        speed: 6000,
        allowTouchMove: true,
        freeMode: true,
        freeModeMomentum: false,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });

    $('.brand-swiper').on('mouseenter', function() {
        brandSwiper.autoplay.stop();
    });

    $('.brand-swiper').on('mouseleave', function() {
        brandSwiper.autoplay.start();
    });

    // FAQ Accordion
    $('.faq-question').on('click', function() {
        const $faqItem = $(this).parent('.faq-item');
        const $faqAnswer = $(this).next('.faq-answer');
        
        // Close all other items
        $('.faq-item').not($faqItem).removeClass('active');
        $('.faq-answer').not($faqAnswer).slideUp(300);
        
        // Toggle current item
        $faqItem.toggleClass('active');
        $faqAnswer.slideToggle(300);
    });

    // Header scroll effect
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    // Footer bar reveal on scroll
    const $footerBar = $('.footer-bottom-bar');
    function toggleFooterBar() {
        if (!$footerBar.length) {
            return;
        }
        if ($(window).scrollTop() > 200) {
            $footerBar.addClass('is-visible');
        } else {
            $footerBar.removeClass('is-visible');
        }
    }

    $(window).on('scroll', toggleFooterBar);
    toggleFooterBar();

    // Render reviews grid (3 reviews per column)
    function renderReviewsGrid() {
        if (typeof reviews === 'undefined') {
            return;
        }

        const $container = $('#reviews-container');
        if (!$container.length) {
            return;
        }

        const reviewsPerColumn = 3;
        const columns = Math.ceil(reviews.length / reviewsPerColumn);
        const orderedReviews = [];

        for (let col = 0; col < columns; col += 1) {
            for (let row = 0; row < reviewsPerColumn; row += 1) {
                const index = row * columns + col;
                if (index < reviews.length) {
                    orderedReviews.push(reviews[index]);
                }
            }
        }

        let html = '';

        for (let i = 0; i < orderedReviews.length; i += reviewsPerColumn) {
            const chunk = orderedReviews.slice(i, i + reviewsPerColumn);
            let columnHtml = '<div class="space-y-6">';

            chunk.forEach((review) => {
                const rating = Math.max(1, Math.min(5, review.rating || 0));
                const ratingClass = `rating-${rating}`;
                let starsHtml = '';

                for (let starIndex = 1; starIndex <= 5; starIndex += 1) {
                    const filledClass = starIndex <= rating ? ' filled' : '';
                    starsHtml +=
                        `<img src="./assets/images/empty-star.png" alt="Star" class="review-star${filledClass}">`;
                }

                columnHtml += `
                    <div class="p-6 border border-[#E5E5E5] rounded-xl bg-white space-y-4">
                        <div class="flex gap-4 items-center">
                            <img src="./assets/images/user-1.png" alt="User" class="h-[46px] w-[46px] shrink-0 rounded-full">
                            <div class="space-y-2">
                                <h5 class="font-jakarta font-bold leading-[100%]">${review.name}</h5>
                                <p class="text-sm leading-tight text-[#6F6C90] font-semibold">${review.designation}</p>
                            </div>
                        </div>
                        <div class="flex gap-1 ${ratingClass}">
                            ${starsHtml}
                        </div>
                        <p class="text-sm font-medium text-[#514F6E]">
                            ${review.review}
                        </p>
                    </div>
                `;
            });

            columnHtml += '</div>';
            html += columnHtml;
        }

        $container.html(html);
    }

    renderReviewsGrid();
});

// Add your interactive functionality here
