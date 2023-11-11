

$(document).ready(function () {

    // wow initiation
    new WOW().init();

    // navigation bar toggle
    $('#navbar-toggler').click(function () {
        $('.navbar-collapse').slideToggle(400);
    });

    // navbar bg change on scroll
    // $(window).scroll(function () {
    //     let pos = $(window).scrollTop();
    //     if (pos >= 100) {
    //         $('.navbar').addClass('cng-navbar');
    //     } else {
    //         $('.navbar').removeClass('cng-navbar');
    //     }
    // });

    /*=============== SHOW NAVBAR MENU ===============*/
    const showMenu = (toggleId, navId) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId)

        toggle.addEventListener('click', () => {
            // Add show-menu class to nav menu
            nav.classList.toggle('show-menu')

            // Add show-icon to show and hide the menu icon
            toggle.classList.toggle('show-icon')
        })
    }

    showMenu('nav-toggle', 'nav-menu')

    // sample video popup
    // $(document).ready(function () {
    //     $('.popup-youtube').magnificPopup({
    //         disableOn: 700,
    //         type: 'iframe',
    //         mainClass: 'mfp-fade',
    //         removalDelay: 160,
    //         preloader: false,

    //         fixedContentPos: false
    //     });
    // });

    // team carousel 
    $('.team .owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        dots: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    // faq accordion
    $('.faq-head').each(function () {
        $(this).click(function () {
            $(this).next().toggleClass('show-faq-content');
            let icon = $(this).children('span').children("i").attr('class');

            if (icon == "fas fa-plus") {
                $(this).children('span').html('<i class = "fas fa-minus"></i>');
            } else {
                $(this).children('span').html('<i class = "fas fa-plus"></i>');
            }
        });
    });

    // testimonial carousel 
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        nav: false,
        items: 1
    });

});

// Footer code
let footer = document.querySelector('.footer');
const createFooter = () => {
    footer.innerHTML += `
          <div class="col">
        <a href="#" class="nav__logo">
          <img src="assets/DCB-logo-white.png" alt="" />
        </a>
        <h4>Contact</h4>
        <p class="contact-details">
          <strong><i class="fi fi-sr-call-incoming"></i> </strong>+254 720 797
          173
        </p>
        <p class="contact-details">
          <strong><i class="fi fi-sr-envelope"></i> </strong>
          company@dcbconsulting.co.ke
        </p>
       <p class="contact-details">
          <strong><i class="fi fi-sr-marker"></i> </strong>Nairobi, Kenya
        </p>
      </div>

      <div class="col">
        <h4>Links</h4>
        <a href="#top">Home</a>
        <a href="#services">Services</a>
        <a href="#faq">FAQs</a>
        <a href="#testimonial">Testimonials</a>
      </div>

      <div class="col">
        <div class="social-icons">
          <h4>Follow us</h4>
          <div class="icon">
            <i class="fi fi-brands-instagram"></i>
            <i class="fi fi-brands-facebook"></i>
            <i class="fi fi-brands-linkedin"></i>
            <i class="fi fi-brands-twitter-alt"></i>
          </div>
        </div>
      </div>
    `
}

createFooter();
