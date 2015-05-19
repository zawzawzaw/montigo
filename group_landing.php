<?php include('header.php'); ?>  

<div id="main-page-content">

  <div id="group-landing-slider" class="main-slider no-scale-version" data-image="images/main_slider/may15_group_landing_main_slider.jpg">

    <div class="main-slider-image-container">
      <img src="">
    </div>

    <div class="main-slider-text-container">
      <div class="text-container" data-width="1877" data-height="1147">
        <div id="group-landing-slider-text" class="text" data-x="936" data-y="306">

          <div class="montigo-landing-logo"></div>
          <div class="group-landing-item-container">
            <div id="nongsa-group-landing-item" class="group-landing-item">
              <h4>nongsa, batam, indonesia</h4>
              <p>Resort Stay&nbsp;&nbsp;|&nbsp;&nbsp;Ownership</p>
              <div class="button-container">
                <a href="index.php" class="cta-button">english<span class="fa fa-chevron-circle-right"></span></a>
                <a href="#"  class="cta-button">简体中文<span class="fa fa-chevron-circle-right"></span></a>
              </div>
            </div>

            <div id="seminyak-group-landing-item" class="group-landing-item">
              <h4>Seminyak, bali, indonesia</h4>
              <p>Coming Soon in 2016</p>
              <div class="button-container">
                <a href="#" class="cta-button">english<span class="fa fa-chevron-circle-right"></span></a>
                <a href="#"  class="cta-button">简体中文<span class="fa fa-chevron-circle-right"></span></a>
              </div>
            </div>
          </div>

        </div> <!-- group-landing-slider-text -->
      </div>
    </div>
    
  </div> <!-- main-slider -->

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

  $('body').addClass('page-group-landing');  // important

  jQuery(document).ready(function($) {
    $.manic_preloader({
      asset_array: [
        "images/main_slider/may15_group_landing_main_slider.jpg"
      ],
      desktop_js_array: [
        <?php if(DEBUG): ?>
          "library/gsap/TweenMax.min.js",
          "library/gsap/TimelineMax.min.js",
          "library/gsap/easing/EasePack.min.js",
          "library/gsap/plugins/ScrollToPlugin.min.js",
          "library/_js/glDatePicker.min.js",
          "library/scrollmagic/iscroll-probe.js",
          "library/scrollmagic/ScrollMagic.min.js",
          "library/scrollmagic/plugins/animation.gsap.min.js",
          "library/scrollmagic/plugins/debug.addIndicators.min.js"
        <?php else: ?>
          "js/minified/montigo-page-libraries.min.js",
          "js/minified/montigo-page-default.min.js"
        <?php endif; ?>
      ],
      mobile_js_array: [
      ],
      on_desktop_complete: function(){
        page = new montigo.page.Default();
      },
      on_mobile_complete: function(){
        console.log('no mobile code yet');
      }

    });
     
  });
</script>



<?php //include('footer.php'); ?>


    </div> <!-- #page-wrapper -->

  </body>
</html>