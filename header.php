<?php 

// emulate wordpress functions.php

//define('DEBUG', true);
define('DEBUG', false);


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

    <link rel="icon" href="images/icons/montigo-favicon.png">

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

    <?php if(DEBUG): ?>

      <script src="library/jquery/jquery-1.9.1.min.js"></script>
      <script src="library/_js/preloadjs-0.4.0.min.js"></script>
      <script src="library/_js/mobile-detect.min.js"></script>
      <script src="library/_js/montigo_modernizr_custom.js"></script>
      <script src="js/all.js"></script>

      <!-- basic preloader -->
      <script src="library/jquery/jquery.manic.preloader.js"></script>
    <?php else: ?>
      <script src="js/minified/montigo-head.min.js"></script>
    <?php endif; ?>

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

    <div id="page-wrapper">
      

      <header id="main-page-header-mobile" class="visible-xs-block visible-sm-block">
        <div class="menu-button">
          <div class="fa fa-bars"></div>
        </div>
        <div class="menu-black-bg"></div>
        <nav id="mobile-header-navigation">
          <a href="index.php" id="header-logo">Montigo Resorts</a>
          <ul>
            <li><a href="about.php">About</a></li>
            <li><a href="offers.php">Offers &amp; Packages</a></li>
            <li><a href="accommodation.php">Accommodation</a></li>
            <li><a href="dining.php">Dining</a></li>
            <li><a href="spa.php">Spa</a></li>
            <li><a href="activities.php">Activities</a></li>
            <li><a href="events.php">Meetings &amp; Events</a></li>
            <li><a href="faq.php">Faq</a></li>
            <li><a href="http://www.montigoresortsnongsa.com/" target="_blank">Ownership</a></li>
          </ul>
        </nav>
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

              <div id="header-navigation-container">
                <nav id="header-navigation">
                  <ul>
                    <li><a href="about.php">About</a></li>
                    <li><a href="offers.php">Offers &amp; Packages</a></li>
                    <li><a href="accommodation.php">Accommodation</a></li>
                    <li><a href="dining.php">Dining</a></li>
                    <li><a href="spa.php">Spa</a></li>
                    <li><a href="activities.php">Activities</a></li>
                    <li><a href="events.php">Meetings &amp; Events</a></li>
                    <li><a href="faq.php">Faq</a></li>
                    <li><a href="http://www.montigoresortsnongsa.com/" target="_blank">Ownership</a></li>
                    <!-- <li><a href="#">Contact</a></li> -->
                  </ul>
                </nav>

                <div id="header-book-now">
                  <div id="header-book-now-btn">
                    <span class="bg"></span>
                    <span class="copy">BOOK NOW</span>
                  </div>
                </div>

                

                <div id="menu-booking-form-container">

                  <div class="booking-form-bg"></div>

                  <form id="menu-booking-form" name="menu-booking-form" action="https://www.phgsecure.com/IBE/bookingRedirect.ashx" method="post">
                    <!-- note that the booking in not done by post, but by javascript window.location.href with GET variables as per the example of the previous version -->
                    <!-- this is to format the dates -->

                    <input type="hidden" name="propertyCode" value="SINMR" />

                    <input type="hidden" name="numberOfAdults" id="numberOfAdults" value="1" />
                    <input type="hidden" name="numberOfChildren" id="numberOfChildren" value="0" />


                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-md-6">

                          <div class="menu-booking-form-item calendar-version">
                            <label>Arrival</label>
                            <div class="fa fa-calendar-o"></div>
                            <input class="text-input" type="text" id="arrivalDate" name="arrivalDate" value="" gldp-id="menu-booking-arrival-date" placeholder="DD/MM/YYYY">
                          </div>

                        </div>
                        <div class="col-md-6">

                          <div class="menu-booking-form-item calendar-version">
                            <label>Departure</label>
                            <div class="fa fa-calendar-o"></div>
                            <input class="text-input" type="text" id="departureDate" name="departureDate" value="" gldp-id="menu-booking-departure-date" placeholder="DD/MM/YYYY">
                          </div>
                          
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">

                          <div class="menu-booking-form-item single-line-version">
                            <label>Nights</label>

                            <input class="text-input" type="text" id="nights" name="nights" value="1">

                            <!-- 
                            <div class="manic-dropdown montigo-version">
                              <span>1</span>
                              <input type="hidden" id="nights" name="nights" value="1">
                              <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                              </ul>
                            </div>
                            -->

                            <!-- 
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
                             -->
                          </div>

                        </div>
                        <div class="col-md-6">
                          
                          <div class="menu-booking-form-item single-line-version">
                            <label>villas</label>

                            <div class="manic-dropdown montigo-version">
                              <span>1</span>
                              <input type="hidden" id="rooms" name="rooms" value="1">
                              <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                              </ul>
                            </div>

                            <!-- 
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
                             -->

                          </div>

                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6">

                          <div class="menu-booking-form-item">


                            <div class="manic-dropdown montigo-version">
                              <span>Code Type</span>
                              <input type="hidden" id="codeType" name="codeType" value="0">
                              <ul>
                                <li data-value="Promo">Promo</li>
                                <li data-value="Corporate">Corporate</li>
                                <li data-value="Group">Group</li>
                                <li data-value="iataNumber">IATA</li>
                              </ul>
                            </div>
                            
                          </div>

                        </div>
                        <div class="col-md-6">
                          
                          <div class="menu-booking-form-item">
                            <input class="text-input" type="text" id="code" name="code" value="" placeholder="Enter Code">
                          </div>

                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-3">
                          <div class="space10"></div>
                        </div>
                        <div class="col-md-6">
                          <div class="book-form-space"></div>
                          <a href="#" id="menu-booking-form-submit-button">book now</a>
                          <a href="#" id="menu-booking-form-cancel-button">Cancel</a>
                        </div>
                      </div>

                    </div> <!-- container-fluid -->


                  </form>

                </div> <!-- menu-booking-form-container -->


                <div id="menu-booking-form-calendar-container">
                  <div class="booking-form-calendar-bg"></div>

                  <div gldp-el="menu-booking-arrival-date" class="booking-form-calendar"></div>
                  <div gldp-el="menu-booking-departure-date" class="booking-form-calendar"></div>
                </div>

              </div> <!-- header-navigation-container -->


            </div> <!-- col-md-9 -->
          </div> <!-- row -->
        </div> <!-- container-fluid -->


        

      </header>