<?php include('header.php'); ?>  

<div id="main-page-content">

  <div id="spa-slider" class="main-slider short-version" data-image="images/main_slider/may15_careers_main_slider.jpg">

    <div class="main-slider-image-container">
      <img src="">
    </div>

    <div class="main-slider-text-container">
      <div class="text-container" data-width="1280" data-height="500">
        <div class="text" data-x="640" data-y="216">

          <h3>Careers</h3>
          <p>The dynamic team at Montigo Resorts Nongsa, is looking for talents to fill the following positions. If you are passionate about service and looking to embark on a rewarding career, we invite you to discover your true potential with us.</p>

        </div>
      </div>
    </div>
    
  </div> <!-- main-slider -->

  
  <div id="career-classified-section">


    <div id="career-item-container">
      <div class="container-fluid has-breakpoint">

        <div class="row">
          <div class="col-md-4 column-01">
          </div>
          <div class="col-md-4 column-02">
          </div>
          <div class="col-md-4 column-03">
          </div>
        </div>


        <!-- 
        <div class="row">
          <div class="col-md-4">
            <div class="career-item">
              <h4>CATERING SALES MANAGER</h4>
              <hr class="short-hr">
              <ul>
                <li>2–4 year experience from a reputable hotel</li>
                <li>Indonesian Nationality with Batam MICE and Catering sales experience</li>
                <li>Excellent selling skills in driving revenue to achieve targets</li>
                <li>Strong communication skills (verbal, listening, writing) in English and Bahasa <br>Strong presentation and computer skills for any correspondence (proposals, contracts, and etc)</li>
                <li>Produce accurate and timely reports that meet the needs of the resort</li>
              </ul>
              <a href="" class="cta-small-button">Please send your CV with photo, three <br>
references, salary expectation, and notice period <br>
to careers@montigoresorts.com<span class="fa fa-chevron-circle-right"></span></a>

            </div>
          </div>
        </div>
        -->



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
    goog.require('montigo.page.Careers');
  </script>
<?php endif; ?>

<script type="text/javascript">
  
  var page = null;

  jQuery(document).ready(function($) {
    $.manic_preloader({
      asset_array: [
        "images/main_slider/may15_careers_main_slider.jpg",
        "json/careers.json"
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
          "js/minified/montigo-page-careers.min.js"
        <?php endif; ?>
      ],
      mobile_js_array: [
      ],
      on_desktop_complete: function(){
        page = new montigo.page.Careers();
      },
      on_mobile_complete: function(){
        console.log('no mobile code yet');
      }

    });
     
  });
</script>

<?php include('footer.php'); ?>