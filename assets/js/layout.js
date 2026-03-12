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
    let content2 = `<footer class="ul-footer bg-dark text-white">
  <!-- ===== Footer Top ===== -->
  <div class="ul-footer-top py-4 border-bottom border-light">
    <div class="container">
      <div class="row">
        <!-- Logo + Social -->
        <div class="col-md-4 d-flex flex-column align-items-start">
          <a href="index.html">
            <img src="assets/img/logo-white.png" alt="Logo" width="150">
          </a>

          <div class="social-icons mt-3">
            <a href="https://facebook.com" class="btn btn-outline-light btn-social-icon"><i class="flaticon-facebook-app-symbol"></i></a>
            <a href="https://twitter.com" class="btn btn-outline-light btn-social-icon"><i class="flaticon-twitter"></i></a>
            <a href="https://linkedin.com" class="btn btn-outline-light btn-social-icon"><i class="flaticon-linkedin-big-logo"></i></a>
            <a href="https://instagram.com" class="btn btn-outline-light btn-social-icon"><i class="flaticon-instagram"></i></a>
          </div>
        </div>

        <!-- Call -->
        <div class="col-md-4 d-flex align-items-center justify-content-center">
          <div class="icon-container bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
            <i class="flaticon-telephone"></i>
          </div>
          <div class="ml-3">
            <p class="text-sm text-white">Call Now</p>
            <a href="tel:+919240255048" class="text-lg font-weight-bold text-light">+91 924025xxxx</a>
          </div>
        </div>

        <!-- Email -->
        <div class="col-md-4 d-flex align-items-center justify-content-end">
          <div class="icon-container bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 50px; height: 50px;">
            <i class="flaticon-mail"></i>
          </div>
          <div class="ml-3">
            <p class="text-sm text-white">Email Us</p>
            <a href="mailto:info@socioly.com" class="text-lg font-weight-bold text-light">cx@exato.ai</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== Footer Middle ===== -->
  <div class="ul-footer-middle py-5">
    <div class="container">
      <div class="row">
        <!-- Column 1: Offerings -->
        <div class="col-md-3">
          <h5 class="text-light">OFFERINGS</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light">CX AS A SERVICE</a></li>
            <li><a href="#" class="text-light">CONVERSATIONAL AI</a></li>
            <li><a href="#" class="text-light">WORKFORCE MANAGEMENT</a></li>
            <li><a href="#" class="text-light">AUTOMATION AS A SERVICE</a></li>
            <li><a href="#" class="text-light">DIGITAL TREASURY</a></li>
          </ul>
        </div>

        <!-- Column 2: Solutions -->
        <div class="col-md-3">
          <h5 class="text-light">SOLUTIONS</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light">Analytics</a></li>
            <li><a href="#" class="text-light">Connectors</a></li>
            <li><a href="#" class="text-light">Contact Center Optimizers</a></li>
            <li><a href="#" class="text-light">View All Solutions</a></li>
          </ul>
        </div>

        <!-- Column 3: Company -->
        <div class="col-md-3">
          <h5 class="text-light">COMPANY</h5>
          <ul class="list-unstyled">
            <li><a href="/about" class="text-light">About Us</a></li>
            <li><a href="/contact" class="text-light">Contact Us</a></li>
            <li><a href="/partners" class="text-light">Partners</a></li>
          </ul>
        </div>

        <!-- Column 4: Stay Connected -->
        <div class="col-md-3">
          <h5 class="text-light">STAY CONNECTED</h5>
          <p class="text-light">Monday – Saturday: <span class="text-primary">10am – 7pm</span></p>
          <form>
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Enter your Email Address" required>
              <div class="input-group-append">
                <button class="btn btn-primary" type="submit">→</button>
              </div>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="privacyPolicyCheck">
              <label class="form-check-label text-light" for="privacyPolicyCheck">
                I agree with the <a href="#" class="text-primary">Privacy Policy</a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== Global Offices ===== -->
  <div class="ul-footer-offices py-5 bg-dark text-light">
    <div class="container">
      <h5 class="text-center">GLOBAL OFFICES</h5>
      <div class="row">
        <div class="col-md-3">
          <p class="font-weight-bold text-primary">USA</p>
          <p>Exato.ai Inc.<br>300 Carnegie Centre, Suite #150,<br>Princeton, New Jersey, 08540<br>United States of America</p>
        </div>
        <div class="col-md-3">
          <p class="font-weight-bold text-primary">USA</p>
          <p>Exato.ai Inc.<br>108 West 13th Street,<br>Wilmington, New Castle,<br>Delaware, 19801<br>United States of America</p>
        </div>
        <div class="col-md-3">
          <p class="font-weight-bold text-primary">Singapore</p>
          <p>Exato.ai Pte. Ltd.<br>1 Scotts Road, #24-10,<br>Shaw Centre,<br>Singapore 228208</p>
        </div>
        <div class="col-md-3">
          <p class="font-weight-bold text-primary">India</p>
          <p>Noida<br>Exato Technologies Limited.<br>A-33, 2nd Floor, Sector-02,<br>Noida, Uttar Pradesh, 201301</p>
          <p class="mt-3">Mumbai<br>Exato Technologies Limited<br>601 A/2, Shubham Centre,<br>Cardinal Gracious Road, Andheri (E), Mumbai 400099</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== Footer Bottom ===== -->
  <div class="ul-footer-bottom py-3 bg-dark text-center text-light">
    <p>© <script>document.write(new Date().getFullYear())</script> Exato Ai. All rights reserved.</p>
  </div>

  <!-- ===== Decorative Vectors ===== -->
  <img src="assets/img/footer-vector-1.svg" alt="Footer Vector 1" class="position-absolute bottom-0 left-0 opacity-10" style="width: 300px; height: 300px;">
  <img src="assets/img/footer-vector-2.svg" alt="Footer Vector 2" class="position-absolute top-0 right-0 opacity-10" style="width: 300px; height: 300px;">
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
