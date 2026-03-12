function makeElement(
  myElem = "div",
  myClass,
  attribute = "",
  value = "",
  content = ""
) {
  let i = 0;
  let elem = document.createElement(myElem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = myClass;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
}

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector(".header-js");
  let content1 = `<!-- SIDEBAR SECTION START -->
<div class="ul-sidebar">
  <!-- header -->
  <div class="ul-sidebar-header">
    <div class="ul-sidebar-header-logo">
      <a href="index.html">
        <img src="assets/img/2.png" alt="logo" class="logo">
      </a>
    </div>
    <!-- sidebar closer -->
    <button class="ul-sidebar-closer"><i class="flaticon-close-1"></i></button>
  </div>

  <div class="ul-sidebar-header-nav-wrapper d-block d-lg-none"></div>

  <!-- sidebar footer -->
  <div class="ul-sidebar-footer">
    <span class="ul-sidebar-footer-title">Follow us</span>

    <div class="ul-sidebar-footer-social">
      <a href="#"><i class="flaticon-facebook"></i></a>
      <a href="#"><i class="flaticon-twitter"></i></a>
      <a href="#"><i class="flaticon-instagram"></i></a>
      <a href="#"><i class="flaticon-linkedin-big-logo"></i></a>
    </div>
  </div>
</div>
<!-- SIDEBAR SECTION END -->

<!-- HEADER SECTION START -->
<header class="ul-header">
  <div class="ul-header-bottom to-be-sticky wow animate__slideInDown">
    <div class="ul-header-bottom-wrapper ul-header-container">
      <div class="logo-container">
        <a href="index.html" class="d-inline-block"><img src="assets/img/2.png" alt="logo" class="logo"></a>
      </div>

      <div class="ul-header-bottom-right">
        <!-- header nav -->
        <div class="ul-header-nav-wrapper">
          <div class="to-go-to-sidebar-in-mobile">
            <nav class="ul-header-nav">
              <a href="index.html" class="nav-item">Home</a>
              <div class="has-sub-menu">
                <a href="services.html" class="nav-item">OUR SOLUTIONS</a>
                <div class="ul-header-submenu">
                  <ul>
                    <li>
                      <a href="services/cx-analytics.html" class="sub-nav-item">CX & ANALYTICS</a>
                      <div class="has-sub-menu">
                        <ul>
                          <li><a href="services/cx-as-a-service.html" class="sub-nav-item">CX AS A SERVICE</a></li>
                          <li><a href="services/conversational-ai.html" class="sub-nav-item">CONVERSATIONAL AI</a></li>
                          <li><a href="services/automation-as-a-service.html" class="sub-nav-item">AUTOMATION AS A SERVICE</a></li>
                          <li><a href="services/workforce-management.html" class="sub-nav-item">WORKFORCE MANAGEMENT</a></li>
                          <!-- Sub-Submenu -->
                          <div class="has-sub-menu">
                            <ul>
                              <li><a href="services/advanced-cx.html" class="sub-nav-item">ADVANCED CX</a></li>
                              <li><a href="services/ai-driven-automation.html" class="sub-nav-item">AI-DRIVEN AUTOMATION</a></li>
                            </ul>
                          </div>
                        </ul>
                      </div>
                    </li>
                    <li><a href="services/unified-communications.html" class="sub-nav-item">UNIFIED COMMUNICATIONS</a></li>
                    <li><a href="services/exatoiq.html" class="sub-nav-item">EXATOIQ</a></li>
                    <li><a href="services/cloud-erp.html" class="sub-nav-item">CLOUD ERP</a></li>
                  </ul>
                </div>
              </div>
              <a href="industries.html" class="nav-item">INDUSTRIES</a>
              <a href="company.html" class="nav-item">COMPANY</a>
              <a href="investor.html" class="nav-item">INVESTOR</a>
            </nav>
          </div>
        </div>

        <a href="contact.html" class="ul-btn d-sm-inline-flex d-xxs-none"><span>Get in Touch <i class="flaticon-top-right"></i></span></a>
        <button class="ul-header-sidebar-opener d-lg-none d-inline-flex"><i class="flaticon-right-arrow"></i></button>
      </div>
    </div>
  </div>
</header>
<!-- HEADER SECTION END -->`;
  myHeader = makeElement("div", "", "", "", content1);
  header.append(myHeader);

  /*footer */
  let footer = document.querySelector(".footer");
  if (footer) {
    let content2 = `<footer class="ul-footer">
    <!-- footer top -->
    <div class="ul-footer-top">
        <div class="ul-container">
            <div class="ul-footer-top-contact-infos">
                <!-- single info -->
                <div class="ul-footer-top-logo">
                    <a href="index.html"><img src="assets/img/2.png" alt="logo"></a>
                    <div class="ul-footer-socials">
                        <a href="https://facebook.com"><i class="flaticon-facebook-app-symbol"></i></a>
                        <a href="https://x.com"><i class="flaticon-twitter"></i></a>
                        <a href="https://linkedin.com"><i class="flaticon-linkedin-big-logo"></i></a>
                        <a href="https://instagram.com"><i class="flaticon-instagram"></i></a>
                    </div>
                </div>

                <!-- single info -->
                <div class="ul-footer-top-contact-info">
                    <!-- icon -->
                    <div class="ul-footer-top-contact-info-icon"><i class="flaticon-telephone"></i></div>
                    <!-- txt -->
                    <div class="ul-footer-top-contact-info-txt">
                        <span class="ul-footer-top-contact-info-label">Call Now</span>
                        <h5 class="ul-footer-top-contact-info-address"><a href="tel:+91 9240255048">+91 9240255048</a></h5>
                    </div>
                </div>

                <!-- single info -->
                <div class="ul-footer-top-contact-info">
                    <!-- icon -->
                    <div class="ul-footer-top-contact-info-icon"><i class="flaticon-mail"></i></div>
                    <!-- txt -->
                    <div class="ul-footer-top-contact-info-txt">
                        <span class="ul-footer-top-contact-info-label">Email Us</span>
                        <h5 class="ul-footer-top-contact-info-address"><a href="mailto:info@exato.com">info@exato.com</a></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- footer middle -->
    <div class="ul-footer-middle">
        <div class="ul-container">
            <div class="ul-footer-middle-wrapper wow animate__fadeInUp">
                <!-- Offerings Section -->
                <div class="ul-footer-widget">
                    <h3 class="ul-footer-widget-title">Offerings</h3>
                    <div class="ul-footer-widget-links">
                        <a href="#">CX as a Service</a>
                        <a href="#">Conversational AI</a>
                        <a href="#">Workforce Management</a>
                        <a href="#">Automation as a Service</a>
                        <a href="#">Digital Treasury</a>
                    </div>
                </div>

                <!-- Solutions Section -->
                <div class="ul-footer-widget">
                    <h3 class="ul-footer-widget-title">Solutions</h3>
                    <div class="ul-footer-widget-links">
                        <a href="#">Analytics</a>
                        <a href="#">Connectors</a>
                        <a href="#">Contact Center Optimizers</a>
                        <a href="#">View All Solutions</a>
                    </div>
                </div>

                <!-- Company Section -->
                <div class="ul-footer-widget">
                    <h3 class="ul-footer-widget-title">Company</h3>
                    <div class="ul-footer-widget-links">
                        <a href="about.html">About Us</a>
                        <a href="contact.html">Contact Us</a>
                        <a href="#">Partners</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Global Offices Section -->
    <div class="ul-footer-offices" >
        <div class="ul-container">
            <h3 class="ul-footer-widget-title">Global Offices</h3>
            <div class="row">
                <!-- USA -->
                <div class="col-md-3">
                    <p class="ul-footer-office-location">USA</p>
                    <p>Exato.ai Inc.<br>
                        300 Carnegie Centre, Suite #150,<br>
                        Princeton, New Jersey, 08540<br>
                        United States of America</p>
                </div>

                <!-- USA (2nd office) -->
                <div class="col-md-3">
                    <p class="ul-footer-office-location">USA</p>
                    <p>Exato.ai Inc.<br>
                        108 West 13th Street,<br>
                        Wilmington, New Castle,<br>
                        Delaware, 19801<br>
                        United States of America</p>
                </div>

                <!-- Singapore -->
                <div class="col-md-3">
                    <p class="ul-footer-office-location">Singapore</p>
                    <p>Exato.ai Pte. Ltd.<br>
                        1 Scotts Road, #24-10,<br>
                        Shaw Centre,<br>
                        Singapore 228208</p>
                </div>

                <!-- India -->
                <div class="col-md-3">
                    <p class="ul-footer-office-location">India</p>
                    <p>Noida<br>
                        Exato Technologies Limited.<br>
                        A-33, 2nd Floor, Sector-02,<br>
                        Noida, Uttar Pradesh, 201301</p>

                    <p class="ul-footer-office-location mt-4">Mumbai</p>
                    <p>Exato Technologies Limited<br>
                        601 A/2, Shubham Centre,<br>
                        Cardinal Gracious Road, Andheri (E), Mumbai 400099</p>
                </div>
            </div>
        </div>
    </div>

    <!-- footer bottom -->
    <div class="ul-container">
        <div class="ul-footer-bottom">
            <div class="ul-footer-bottom-wrapper justify-content-center">
                <p class="copyright-txt">Copyright &copy;
                    <script>document.write(new Date().getFullYear())</script> exato. All rights reserved.
                </p>
            </div>
        </div>
    </div>

    <!-- vector -->
    <div class="ul-footer-vectors">
        <img src="assets/img/footer-vector-1.svg" alt="Footer Image" class="ul-footer-vector-1">
        <img src="assets/img/footer-vector-2.svg" alt="Footer Image" class="ul-footer-vector-2">
    </div>
</footer>`;
    // Append the footer content directly to the footer element
    footer.innerHTML = content2;
  } else {
    console.log("Footer element not found!");
  }

  /* SUBSCRIPTION */
  let subscription = document.querySelector(".subscription");
  let content3 = `		 			<div class="subscribe__two">
				<!-- marque start -->
	<div class="custom-marquee mb-5">
	 <marquee width="100%" direction="left" behavior="scroll" scrollamount="4">
      <a href="g-suit-training.html">G-Suit Training</a> &nbsp;
      <a href="cloud-telephony-ivr.html">Cloud
        Telephony(IVR)</a> &nbsp; <a
        href="blog-standard.html"> Blog </a> &nbsp; <a
        href="social-media-marketing.html"> Social Media
        Marketing </a> &nbsp; <a href="about.html"> About
        Page </a> &nbsp; <a href="career.html"> Careers
        Page </a> &nbsp; <a href="contact.html"> Contact
        Page </a> &nbsp;
        <a href="g-suit-training.html">G-Suit Training</a> &nbsp;
        <a href="cloud-telephony-ivr.html">Cloud
          Telephony(IVR)</a> &nbsp; <a
          href="blog-standard.html"> Blog </a> &nbsp; <a
          href="social-media-marketing.html"> Social Media
          Marketing </a> &nbsp; <a href="about.html"> About
          Page </a> &nbsp; <a href="career.html"> Careers
          Page </a> &nbsp; <a href="contact.html"> Contact
          Page </a> &nbsp;
    </marquee>
			</div>
			<!-- marque end -->

				<div class="container">
					<div class="subscribe__two-wrapper"
						style="background-image: url(assets/img/subscribe/subscribe-two-bg.png);">
						<div class="row gy-3 align-items-center">
							<div class="col-xl-6 col-lg-6">
								<h2>Ready to Elevate Your Digital Presence</h2> </div>
							<div class="col-xl-6 col-lg-6 text-end">
								<div class="subscribe__two-right justify-content-lg-end">
									<div class="contact"> <i class="flaticon-phone-call"></i>
										<div class="content"> <span>Need Help ?</span> <a
												href="(307)555-0133">(307) 555-0133</a> </div>
									</div> <a class="btn-four showPopupBtn" data-key="subscription">Get Started<i
											class="fas fa-chevron-right"></i></a> </div>
							</div>
						</div>
					</div>
				</div>
			</div>

			`;
  mySubs = makeElement("div", "", "", "", content3);
  subscription.append(mySubs);


});
