<?php 

// emulate wordpress functions.php

define('DEBUG', true);
//define('DEBUG', false);


?>

<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en" class="no-js"><!--<![endif]-->
  <head>
    <title>Montigo Resorts</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="HandheldFriendly" content="True">
    <meta name="MobileOptimized" content="320">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimal-ui"/>

    <!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <link rel="icon" href="favicon.png">

    <!-- social -->
    <meta content="Montigo Resorts" property="og:title"/>
    <meta content="SHARE_IMAGE_OF_THE_PAGE" property="og:image"/>
    <meta content="NAME_OF_THE_SITE" property="og:site_name"/>
    <meta content="URL_OF_THE_PAGE" property="og:url"/>
    <meta content="DESCRIPTION_OF_THE_PAGE" property="og:description"/>

    <!-- FONT -->
    
    <script src="//use.typekit.net/avg1jpg.js"></script>
    <script>try{Typekit.load();}catch(e){}</script>

    <link rel="stylesheet" type="text/css" href="library/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="library/bootstrap/css/bootstrap-theme.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

    <script src="library/jquery/jquery-1.9.1.min.js"></script>
    <script src="library/_js/preloadjs-0.4.0.min.js"></script>
    <script src="library/_js/mobile-detect.min.js"></script>
    <script src="library/_js/montigo_modernizr_custom.js"></script>
    <script src="js/all.js"></script>

    <!-- basic preloader -->
    <script src="library/jquery/jquery.manic.preloader.js"></script>


    <?php if(DEBUG): ?>
      <script src="library/closure-library/closure/goog/base.js"></script>
      <script src="js/goog-custom-dependencies.js"></script>
    <?php endif; ?>

  </head>

  <body class="page-home">

    <div id="page-preloader">
    </div>

    <div id="page-fold">
      <div id="below-page-fold"></div>
    </div>


    <header id="main-page-header-mobile" class="visible-xs-block visible-sm-block">
    </header>
    

    <header id="main-page-header" class="visible-md-block visible-lg-block">

      <div class="gradient-container"></div>
      <div class="white-bg"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <a href="index.php" id="header-logo">Montigo Resorts</a>
          </div>
          <div class="col-md-9">

            <div id="menu-panel-container">
              <div id="menu-navigation-panel" class="menu-panel">
                <div class="menu-panel-content">

                  <nav id="header-navigation">
                    <ul>
                      <li><a href="#">About Montigo</a></li>
                      <li><a href="#">Offers &amp; Packages</a></li>
                      <li><a href="villas.php">Villas</a></li>
                      <li><a href="dining.php">Dining</a></li>
                      <li><a href="spa.php">Spa</a></li>
                      <li><a href="activities.php">Activities</a></li>
                      <li><a href="events.php">Meetings &amp; Events</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </nav>

                </div>
              </div> <!-- #navigation-panel -->
              <div id="menu-booking-panel" class="menu-panel">
                <div class="menu-panel-content">
                  
                  <form id="menu-booking-form" name="menu-booking-form" action="https://www.phgsecure.com/IBE/bookingRedirect.ashx" method="post">

                    <input type="hidden" name="propertyCode" value="SINMR" />

                    <input type="hidden" name="numberOfAdults" id="numberOfAdults" value="1" />
                    <input type="hidden" name="numberOfChildren" id="numberOfChildren" value="0" />

                    <div class="row">
                      <div class="col-md-2">
                        <div class="space10"></div>
                      </div>
                      <div class="col-md-2">
                        <div class="menu-booking-form-item calendar-version">
                          <label>Arrival</label>
                          <div class="fa fa-calendar-o"></div>
                          <input class="text-input" type="text" id="arrivalDate" name="arrivalDate" value="">

                        </div>
                      </div>
                      <div class="col-md-2">
                        <div class="menu-booking-form-item calendar-version">
                          <label>Departure</label>
                          <div class="fa fa-calendar-o"></div>
                          <input class="text-input" type="text" id="departureDate" name="departureDate" value="">
                        </div>
                      </div>
                      <div class="col-md-1">
                        <div class="menu-booking-form-item single-digit-version">
                          <label>Nights</label>

                          <div class="select-input">
                            <div class="fa fa-play"></div>
                            <select id="nights" name="nights">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                            </select>
                          </div>

                        </div>
                      </div>
                      <div class="col-md-1">
                        <div class="menu-booking-form-item single-digit-version">
                          <label>villas</label>

                          <div class="select-input">
                            <div class="fa fa-play"></div>
                            <select id="rooms" name="rooms">
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                              <option>6</option>
                            </select>
                          </div>

                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="menu-booking-form-item code-version">
                          <label>code</label>

                          <div class="select-input">
                            <div class="fa fa-play"></div>
                            <select id="codeType" name="codeType">
                              <option value="0">Code Type</option>
                              <option value="Promo">Promo</option>
                              <option value="Corporate">Corporate</option>
                              <option value="Group">Group</option>
                              <option value="iataNumber">IATA</option>
                            </select>
                          </div>

                          <input class="text-input" type="text" id="code" name="code" value="">
                        </div>
                      </div>


                      

                    </div>
                  </form>

                </div>
              </div> <!-- #menu-booking-panel -->
            </div> <!-- menu-panel-container -->

            <div id="header-book-now">
              <div id="header-book-now-btn">
                <span class="bg"></span>
                <span class="copy">BOOK NOW</span>
              </div>
            </div>

          </div>

          <!-- 
          <div class="col-md-1">
            <div id="header-book-now">
              <a href="#" id="header-book-now-btn">
                <span class="bg"></span>
                <span class="copy">BOOK NOW</span>
              </a>
            </div>
          </div>
          -->

        </div>
      </div>


      

    </header>