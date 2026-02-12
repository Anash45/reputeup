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
});

// Add your interactive functionality here
