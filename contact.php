<?php include('header.php'); ?>  

<div id="main-page-content">

  <div id="contact-slider" class="main-slider no-scale-version" data-image="images/main_slider/may14_contact_main_slider.jpg" data-mobile-image="images/main_slider_mobile/contact_main_slider.jpg">

    <div class="main-slider-image-container">
      <img src="">
    </div>

    <div class="main-slider-text-container">
      <div class="text-container" data-width="1877" data-height="1147">
        <div id="contact-slider-text" class="text" data-x="940" data-y="295">

          <h3 class="fadeout">Contact Us</h3>
          <p class="fadeout">We would love hearing from you… but please read our Frequently Asked Questions before contacting us. It's very likely that you will be able to find your answer in minutes.</p>
          <a href="faq.php" class="cta-button fadeout">see our frequently asked question<span class="fa fa-chevron-circle-right"></span></a>

          <div class="contact-slider-list-spacer"></div>


          
          
          <div id="contact-slider-list" class="hidden-xs hidden-sm">
            <div class="container-fluid">
              <div class="row">
                <!-- <div class="col-md-1"><div class="space10"></div></div> -->

                <div class="col-md-3">
                  <div class="contact-slider-item fadeout">
                    <h4>Address</h4>
                    <p>Jl. Hang Lekir Nongsa <br>Batam, Indonesia</p>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="contact-slider-item fadeout">
                    <h4>Telephone number </h4>
                    <p class="number-version">+62 778 776 8888</p>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="contact-slider-item fadeout">
                    <h4>Reservations</h4>
                    <p><a href="mailto:info@montigoresorts.com?subject=Montigo%20Contact%20Us%3A%20Reservation">info@montigoresorts.com</a></p>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="contact-slider-item fadeout">
                    <h4>singapore sales office</h4>
                    <p  class="number-version">+65 6505 9381</p>
                  </div>
                </div>

              </div>
            </div>
          </div> <!-- contact-slider-list -->


        </div>
      </div>
    </div>
    
  </div> <!-- main-slider -->


  <div id="mobile-contact-slider-list" class="visible-xs visible-sm">
    <div class="container-fluid">
      <div class="row">
        <!-- <div class="col-md-1"><div class="space10"></div></div> -->

        <div class="col-md-3">
          <div class="contact-slider-item fadeout">
            <h4>Address</h4>
            <p>Jl. Hang Lekir Nongsa <br>Batam, Indonesia</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="contact-slider-item fadeout">
            <h4>Telephone number </h4>
            <p class="number-version">+62 778 776 8888</p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="contact-slider-item fadeout">
            <h4>Reservations</h4>
            <p><a href="mailto:info@montigoresorts.com?subject=Montigo%20Contact%20Us%3A%20Reservation">info@montigoresorts.com</a></p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="contact-slider-item fadeout">
            <h4>singapore sales office</h4>
            <p  class="number-version">+65 6505 9381</p>
          </div>
        </div>

      </div>
    </div>
  </div>
  


</div> <!-- main-page-content -->

<div class="down-scroll-arrow">
  <div class="arrow-01"></div>
  <div class="arrow-02"></div>
  <div class="arrow-03"></div>
</div>

<!-- 
       _   ___     ___    ____   ____ ____  ___ ____ _____ 
      | | / \ \   / / \  / ___| / ___|  _ \|_ _|  _ \_   _|
   _  | |/ _ \ \ / / _ \ \___ \| |   | |_) || || |_) || |  
  | |_| / ___ \ V / ___ \ ___) | |___|  _ < | ||  __/ | |  
   \___/_/   \_\_/_/   \_\____/ \____|_| \_\___|_|    |_|  
                                                           
 -->

<?php if(DEBUG): ?>
  <script type="text/javascript">
    goog.require('montigo.page.Default');
  </script>
<?php endif; ?>

<script type="text/javascript">
  
  var page = null;

  jQuery(document).ready(function($) {

    $('body').addClass('page-contact');  // important

    $.manic_preloader({
      asset_array: [
        "images/main_slider_mobile/contact_main_slider.jpg",
        "images/main_slider/may14_contact_main_slider.jpg"
      ],
      desktop_js_array: [
        <?php if(DEBUG): ?>
          "library/gsap/TweenMax.min.js",
          "library/gsap/TimelineMax.min.js",
          "library/gsap/easing/EasePack.min.js",
          "library/gsap/plugins/ScrollToPlugin.min.js",
          "library/_js/glDatePicker.min.js",
          "library/scrollmagic/iscroll-probe.js",
          "library/scrollmagic/ScrollMagic.js",
          "library/scrollmagic/plugins/animation.gsap.min.js",
          "library/scrollmagic/plugins/debug.addIndicators.min.js"
        <?php else: ?>
          "js/minified/montigo-page-libraries.min.js",
          "js/minified/montigo-page-default.min.js"
        <?php endif; ?>
      ],
      mobile_js_array: [
        <?php if(DEBUG): ?>
          "library/gsap/TweenMax.min.js",
          "library/gsap/TimelineMax.min.js",
          "library/gsap/easing/EasePack.min.js",
          "library/gsap/plugins/ScrollToPlugin.min.js",
          "library/_js/glDatePicker.min.js",
          "library/scrollmagic/iscroll-probe.js",
          "library/scrollmagic/ScrollMagic.js",
          "library/scrollmagic/plugins/animation.gsap.min.js",
          "library/scrollmagic/plugins/debug.addIndicators.min.js"
        <?php else: ?>
          "js/minified/montigo-page-libraries.min.js",
          "js/minified/montigo-page-default.min.js"
        <?php endif; ?>
      ],
      on_desktop_complete: function(){
        page = new montigo.page.Default();
      },
      on_mobile_complete: function(){
        page = new montigo.page.Default({is_mobile:true});
      }

    });
     
  });
</script>


<?php include('footer.php'); ?>
