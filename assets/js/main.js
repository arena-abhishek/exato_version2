document.addEventListener("DOMContentLoaded", (event) => {
  // preloader
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
  document.body.style.position = "static";

  // HEADER NAV IN MOBILE
  if (document.querySelector(".ul-header-nav")) {
    const ulSidebar = document.querySelector(".ul-sidebar");
    const ulSidebarOpener = document.querySelector(".ul-header-sidebar-opener");
    const ulSidebarCloser = document.querySelector(".ul-sidebar-closer");
    const ulMobileMenuContent = document.querySelector(
      ".to-go-to-sidebar-in-mobile"
    );
    const ulHeaderNavMobileWrapper = document.querySelector(
      ".ul-sidebar-header-nav-wrapper"
    );
    const ulHeaderNavOgWrapper = document.querySelector(
      ".ul-header-nav-wrapper"
    );

    function updateMenuPosition() {
      if (window.innerWidth < 992) {
        ulHeaderNavMobileWrapper.appendChild(ulMobileMenuContent);
      }

      if (window.innerWidth >= 992) {
        ulHeaderNavOgWrapper.appendChild(ulMobileMenuContent);
      }
    }

    updateMenuPosition();

    window.addEventListener("resize", () => {
      updateMenuPosition();
    });

    ulSidebarOpener.addEventListener("click", () => {
      ulSidebar.classList.add("active");
    });

    ulSidebarCloser.addEventListener("click", () => {
      ulSidebar.classList.remove("active");
    });

    // menu dropdown/submenu in mobile
    const ulHeaderNavMobile = document.querySelector(".ul-header-nav");
    const ulHeaderNavMobileItems =
      ulHeaderNavMobile.querySelectorAll(".has-sub-menu");
    ulHeaderNavMobileItems.forEach((item) => {
      if (window.innerWidth < 992) {
        item.addEventListener("click", () => {
          item.classList.toggle("active");
        });
      }
    });
  }

  // header search in mobile start
  const ulHeaderSearchOpener = document.querySelector(
    ".ul-header-search-opener"
  );
  const ulHeaderSearchCloser = document.querySelector(".ul-search-closer");
  if (ulHeaderSearchOpener) {
    ulHeaderSearchOpener.addEventListener("click", () => {
      document.querySelector(".ul-search-form-wrapper").classList.add("active");
    });
  }

  if (ulHeaderSearchCloser) {
    ulHeaderSearchCloser.addEventListener("click", () => {
      document
        .querySelector(".ul-search-form-wrapper")
        .classList.remove("active");
    });
  }
  // header search in mobile end

  // sticky header
  const ulHeader = document.querySelector(".to-be-sticky");
  if (ulHeader) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        ulHeader.classList.add("sticky");
      } else {
        ulHeader.classList.remove("sticky");
      }
    });
  }

  // wow js - animation on scroll
  new WOW({}).init();

  // Banner slider
  new Swiper(".ul-banner-slider", {
    slidesPerView: 1,
    autoplay: true,
    loop: true,
    speed: 700,
    allowTouchMove: false,
  });

  // if (document.querySelector(".ul-banner-slider")) {
  //     const bannerSlider = new Splide('.ul-banner-slider', {
  //         perPage: 1,
  //         pagination: false,
  //         arrows: false,
  //         type: 'loop',
  //         autoplay: true,
  //         interval: 3500
  //     }).mount();
  // }
  // // banner image slider
  // const bannerImgSlider = new Splide('.ul-banner-img-slider', {
  //     perPage: 4,
  //     pagination: false,
  //     arrows: false,
  //     type: 'loop',
  //     autoplay: true,
  //     interval: 3500,
  //     perMove: 4,
  // }).mount();

  // bannerSlider.sync(bannerImgSlider);
  // // main.mount();
  // // thumbnails.mount();

  // Ticker slider
  if (document.querySelector(".ul-ticker-slider")) {
    new Splide(".ul-ticker-slider", {
      type: "loop",
      // perPage: "auto",
      perPage: 10,
      pagination: false,
      arrows: false,
      type: "loop",
    }).mount(window.splide.Extensions);
  }

  // Service Slider
  new Swiper(".ul-services-slider", {
    // slidesPerView: 4.8,
    slidesPerView: 3,
    spaceBetween: 27,
    centeredSlides: true,
    loop: true,
    autoplay: true,
    navigation: {
      prevEl: ".ul-services-slider-nav .prev",
      nextEl: ".ul-services-slider-nav .next",
    },
    breakpoints: {
      0: { slidesPerView: 1.2, spaceBetween: 15, centeredSlides: true },
      480: { slidesPerView: 1.8, spaceBetween: 15, centeredSlides: true },
      576: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 15 },
      992: { slidesPerView: 3, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 20 },
      1400: {
        slidesPerView: 3,
        spaceBetween: 27,
      },
    },
  });

  // case study slider
  new Swiper(".ul-case-study-slider", {
    slidesPerView: 3,
    loop: true,
    autoplay: true,
    watchSlidesProgress: true,
    spaceBetween: 27,
    navigation: {
      prevEl: ".ul-case-study-slider-prev",
      nextEl: ".ul-case-study-slider-next",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 1.5, centeredSlides: true },
      768: { slidesPerView: 2, centeredSlides: false },
      992: { slidesPerView: 2.7, centeredSlides: true },
      1200: { slidesPerView: 3, centeredSlides: true },
    },
  });

  // Reviews slider
  new Swiper(".ul-reviews-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    navigation: {
      prevEl: ".ul-reviews-slider-nav .prev",
      nextEl: ".ul-reviews-slider-nav .next",
    },
  });

  // Clients SLider
  new Swiper(".ul-clients-slider", {
    slidesPerView: 5,
    spaceBetween: "37",
    loop: true,
    autoplay: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });

  // TESTIMONIAL SLIDER
  new Swiper(".ul-inner-testimonial-slider", {
    slidesPerView: 2,
    spaceBetween: 27,
    loop: true,
    autoplay: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });

  // project details img slider
  new Swiper(".ul-project-details-img-slider", {
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    navigation: {
      prevEl: ".ul-project-details-slider-nav .prev",
      nextEl: ".ul-project-details-slider-nav .next",
    },
  });

  // scroll spy about section
  if (document.querySelector(".ul-about-content-nav")) {
    scrollSpy(".ul-about-content-nav", {
      sectionClass: ".ul-about-content-tab",
      menuActiveTarget: "a",
      offset: -420,
      // smooth scroll
      smoothScroll: true,
      smoothScrollBehavior: function (element) {
        element.scrollIntoView({ behavior: "smooth" }); // default behavior
      },
    });
  }

  // index-2 clients slider
  new Swiper(".ul-clients-2-slider", {
    slidesPerView: 5,
    spaceBetween: 20,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });

  //
  const accordionItems = document.querySelectorAll(
    ".ul-functions-accordion-item"
  );
  const dynamicImage = document.getElementById("ul-functions-dynamic-img");

  if (accordionItems) {
    accordionItems.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove 'open' class from all items
        accordionItems.forEach((el) => el.classList.remove("open"));

        // Add 'open' class to the clicked item
        item.classList.add("open");

        // Change the image based on the active accordion item
        const newImg = item.getAttribute("data-img");
        if (newImg) {
          dynamicImage.src = newImg;
        }
      });
    });
  }

  // how it works ss slider
  new Swiper(".ul-how-it-works-img-slider", {
    slidesPerView: 3.75,
    spaceBetween: 17,
    loop: true,
    autoplay: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2.05,
      },
      992: {
        slidesPerView: 2.65,
      },
      1200: {
        slidesPerView: 3.05,
      },
      1400: {
        slidesPerView: 3.15,
      },
      1600: {
        slidesPerView: 3.75,
      },
    },
  });

  // index-2 Testimonial slider
  new Swiper(".ul-reviews-2-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    watchSlidesProgress: true,
    loop: true,
    navigation: {
      prevEl: ".ul-reviews-2-slider-nav .prev",
      nextEl: ".ul-reviews-2-slider-nav .next",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 130,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // index-3 banner customer slider
  new Swiper(".ul-banner-3-cutomers-slider ", {
    slidesPerView: 5,
    loop: true,
    autoplay: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  });
});

/* =====My custom js====== */

///============= Pop up cookie =============\\\
class CookiePopup {
  constructor() {
    this.popup = null;
    this.accepted = false;
    this.checkCookie();
  }

  createPopup() {
    // Create popup element
    const popup = document.createElement("div");
    popup.className = "cookie-popup";
    popup.innerHTML = `
              <div class="cookie-content">
                  <div class="cookie-text">
                      We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
                      <a href="privacy-policy.html" target="_blank">Learn more</a>
                  </div>
                  <div class="cookie-buttons">
                      <button class="cookie-btn accept-btn">Accept All</button>
                      <button class="cookie-btn decline-btn">Decline All</button>
                  </div>
              </div>
          `;

    // Add to DOM
    document.body.appendChild(popup);
    this.popup = popup;

    // Add event listeners
    const acceptBtn = popup.querySelector(".accept-btn");
    const declineBtn = popup.querySelector(".decline-btn");
    // const settingsBtn = popup.querySelector(".settings-btn");

    acceptBtn.addEventListener("click", () => this.acceptCookies());
    declineBtn.addEventListener("click", () => this.declineCookies());
    // settingsBtn.addEventListener("click", () => this.openSettings());

    // Show popup with animation
    requestAnimationFrame(() => {
      popup.classList.add("show");
    });
  }

  checkCookie() {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Show popup after a short delay
      setTimeout(() => this.createPopup(), 1500);
    }
  }

  acceptCookies() {
    this.accepted = true;
    localStorage.setItem("cookieConsent", "accepted");
    this.hidePopup();
    this.enableCookies();
  }

  declineCookies() {
    this.accepted = false;
    localStorage.setItem("cookieConsent", "declined");
    this.hidePopup();
    this.disableCookies();
  }

  hidePopup() {
    if (this.popup) {
      this.popup.classList.remove("show");
      setTimeout(() => {
        this.popup.remove();
      }, 300);
    }
  }

  enableCookies() {
    // Implement cookie enabling logic
    console.log("Cookies enabled");
    // Enable your tracking scripts, analytics, etc.
  }

  disableCookies() {
    // Implement cookie disabling logic
    console.log("Cookies disabled");
    // Disable tracking scripts, analytics, etc.
  }
}
document.addEventListener("DOMContentLoaded", function () {
  new CookiePopup();
});

// Create the popup form dynamically
document.addEventListener("DOMContentLoaded", function () {
  // Create the popup form dynamically
  let popupForm = `
    <div id="popupFormContainer" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered container" role="document">
        <div class="modal-content p-0 rounded shadow-lg overflow-hidden" style="background: linear-gradient(135deg, #4e54c8, #8f94fb); color: #fff;">
          <!-- Inner Wave Header -->
          <div class="inner-wave" style="width: 100%; height: 60px;">
            <svg viewBox="0 24 150 28" preserveAspectRatio="none" style="width:100%; height:100%; display:block;">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18
                  58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.15)" style="animation: wavewave 6s cubic-bezier(.55,.5,.45,.5) infinite;"></use>
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.15)" style="animation: wavewave 6s cubic-bezier(.55,.5,.45,.5) infinite;"></use>
            </svg>
          </div>

          <div class="modal-header border-0 justify-content-end">
            <button type="button" class="close btn-close me-3 mt-2" id="closePopupBtn"></button>
          </div>

          <div class="modal-body">
            <form id="submit-to-google-sheet" class="needs-validation text-center" novalidate>
              <h2 style="font-size: 28px; font-weight: 600; margin-bottom: 25px;">Let's connect</h2>

              <div class="form-group mb-3">
                <input type="text" class="form-control rounded-pill px-3" name="name" placeholder="Full Name"
                  required pattern="[A-Za-z\\s]+" style="color: #333;">
                <div class="invalid-feedback">Please enter a valid name (letters only).</div>
              </div>

              <div class="form-group mb-3">
                <input type="tel" class="form-control rounded-pill px-3" name="contact_number" placeholder="Mobile Number"
                  required pattern="\\d{10}" style="color: #333;">
                <div class="invalid-feedback">Please enter a valid 10-digit mobile number.</div>
              </div>

              <div class="form-group mb-3">
                <input type="email" class="form-control rounded-pill px-3" name="email" placeholder="Email ID" required
                  style="color: #333;">
                <div class="invalid-feedback">Please enter a valid email address.</div>
              </div>

              <div class="form-group mb-3">
                <textarea class="form-control rounded px-3" name="message" rows="4" placeholder="Your Message..." required
                  style="color: #333;"></textarea>
                <div class="invalid-feedback">Please enter a message.</div>
              </div>

              <button type="submit"
                class="btn text-#000 bg-white text-primary fw-bold rounded-pill py-2 px-5 mt-2">Send Message</button>
            </form>
            <p id="success-message" class="text-success mt-2 text-center font-weight-bold" style="display:none;">Thank you! Your message has been sent.</p>
          </div>
        </div>
      </div>
    </div>
    `;

  // Append the form to the body
  document.body.insertAdjacentHTML("beforeend", popupForm);

  // Bootstrap modal initialization
  let popupFormContainer = document.getElementById("popupFormContainer");
  if (popupFormContainer) {
    $(popupFormContainer).modal({ show: false });
  }

  function showModal() {
    $("#popupFormContainer").modal("show");
  }

  function hideModal() {
    $("#popupFormContainer").modal("hide");
  }

  if (!localStorage.getItem("popupFormShown")) {
    setTimeout(() => {
      showModal();
      localStorage.setItem("popupFormShown", "true");
    }, 2000);
  }

  let triggerKey = "unknown";
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("showPopupBtn")) {
      triggerKey = event.target.getAttribute("data-key") || "unknown";
      showModal();
    }
  });

  document.getElementById("closePopupBtn").addEventListener("click", hideModal);

  // Form validation + submission
  let form = document.getElementById("submit-to-google-sheet");
  if (form) {
    form.addEventListener("submit", function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        form.classList.add("was-validated");
        return;
      }

      e.preventDefault();
      let submitButton = form.querySelector('button[type="submit"]');
      submitButton.disabled = true;

      let formData = new FormData(form);
      formData.append("trigger_key", triggerKey);

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwib8BthiKTEJRsPTHJLb6NwHd-mqPQaP5Zblay1YZ4J7n5Aa9ciM8DSAcGxBhk6gwHhA/exec";
      fetch(scriptURL, { method: "POST", body: formData })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === "success") {
            Swal.fire("Done", "Submitted Successfully.", "success");
            form.reset();
            form.classList.remove("was-validated");
            hideModal();
          } else {
            Swal.fire("Error", "Submission failed. Try again!", "error");
          }
        })
        .catch((error) => {
          Swal.fire(
            "Error",
            "Something went wrong. Please try again!",
            "error"
          );
          console.error("Error:", error);
        })
        .finally(() => {
          submitButton.disabled = false;
        });
    });
  }

  // Wave animation keyframes
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
      @keyframes wavewave {
        0% { transform: translateX(-90px); }
        100% { transform: translateX(85px); }
      }
    `;
  document.head.appendChild(styleTag);
});


/* pricing  */

const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");
const monthlyPrices = document.querySelectorAll(".price-month");
const yearlyPrices = document.querySelectorAll(".price-year");
const durationTexts = document.querySelectorAll(".duration-text");

function togglePricing(isYearly) {
  if (isYearly) {
    yearlyBtn.classList.add("active");
    yearlyBtn.classList.remove("inactive");
    monthlyBtn.classList.add("inactive");
    monthlyBtn.classList.remove("active");

    yearlyPrices.forEach((el) => el.classList.remove("d-none"));
    monthlyPrices.forEach((el) => el.classList.add("d-none"));
    durationTexts.forEach((el) => (el.innerText = "Year"));
  } else {
    monthlyBtn.classList.add("active");
    monthlyBtn.classList.remove("inactive");
    yearlyBtn.classList.add("inactive");
    yearlyBtn.classList.remove("active");

    monthlyPrices.forEach((el) => el.classList.remove("d-none"));
    yearlyPrices.forEach((el) => el.classList.add("d-none"));
    durationTexts.forEach((el) => (el.innerText = "Month"));
  }
}

// Add listeners
monthlyBtn.addEventListener("click", () => togglePricing(false));
yearlyBtn.addEventListener("click", () => togglePricing(true));


/* Bootstrap validation */

 // Bootstrap custom validation
 (() => {
  'use strict';
  const form = document.querySelector('.needs-validation');
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
})();