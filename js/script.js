

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

// SCROLL TO TOP
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}



// DYNAMIC SHARED PAGES

// Enquiry popup form
let enquiryPopupForm = document.querySelector('.form-alert');
const createPopupEnquiryForm = () => {
  enquiryPopupForm.innerHTML += `
     <form id="enquiryForm" onsubmit="event.preventDefault(); enquiryMail();">
      <div class="form">
        <img src="assets/DCB-Logo-GREEN.png" class="logo" alt="logo" />
        <button class="close-btn">
          <i class="fi fi-rr-circle-xmark"></i>
        </button>

        <div class="form-element">
          <label for="name">Full Name <span>*</span></label>
          <input type="text" name="from_name" id="from_name" required>
        </div>

        <div class="form-element">
          <label for="email">Email <span>*</span></label>
          <input type="email" name="email" id="email_id" required>
        </div>

        <div class="form-element">
          <label for="textarea" required>What services are you interested in? <span>*</span></label>
          <textarea id="message" name="message" required></textarea>
        </div>

        <p><span>*</span> Field is required</p>

        <div class="form-element">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  `
}
createPopupEnquiryForm();

// Call to Action code
let callToAciton = document.querySelector('.cta');
const createCTA = () => {
  callToAciton.innerHTML += `
     <button class="cta-btn">Get started today</button>
    <h3 class="wow animate__animated animate__bounceIn animate__slow">
      Ready to grow your business?
    </h3>
  `
}
createCTA();

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
          <strong><i class="fi fi-sr-marker"></i> </strong>
        <div class = "footer-address">
        Avocado Lanes Home <br>
         Off Magadi Road,<br>
         Next to Gems School.<br>
         Karen, Nairobi.
        </div>
        </p>
      </div>

      <div class="col">
        <h4>Links</h4>
        <a href="#top">Home</a>
        <a href="#services">Services</a>
        <a href="#team">Our Team</a>
        <a href="#faq">FAQs</a>
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



// WEBSITE FORMS

// Enquiry form popup
const formPopup = () => {
  let form = document.querySelector('.form-alert')
  form.style.display = 'flex';

  let closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => form.style.display = null);
}

let ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => formPopup());


// Contact form
const sendMail = () => {
  let params = {
    from_name: document.getElementById('from_name').value,
    email_id: document.getElementById('email_id').value,
    message: document.getElementById('message').value
  }
  emailjs.send("service_fkzne5g", "template_f2x203q", params)
    .then(function (response) {
      alert("Message sent")

      document.getElementById('contactForm').reset()
    }, function (error) {
      alert("An error occurred, please try again");
    })
}

// Enquiry form
const enquiryMail = () => {
  let params = {
    from_name: document.getElementById('from_name').value,
    email_id: document.getElementById('email_id').value,
    message: document.getElementById('message').value
  }
  emailjs.send("service_fkzne5g", "template_ufgbzn7", params)
    .then(function (response) {
      alert("Message sent")

      document.getElementById('enquiryForm').reset()
    }, function (error) {
      alert("An error occurred, please try again");
    })
}

