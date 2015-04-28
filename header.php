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

    <header id="main-page-header">

      <div class="blue-bg"></div>
      <div class="white-bg"></div>

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <a href="#" id="header-logo">Montigo Resorts</a>
          </div>
          <div class="col-md-8">
            <nav id="header-navigation">
              <ul>

                <li><a href="#">About Montigo</a></li>
                <li><a href="#">Offers &amp; Packages</a></li>
                <li><a href="#">Villas</a></li>
                <li><a href="#">Dining</a></li>
                <li><a href="#">Spa</a></li>
                <li><a href="#">Activities</a></li>
                <li><a href="#">Meetings &amp; Events</a></li>
                <li><a href="#">Contact</a></li>
                
              </ul>
            </nav>
          </div>
          <div class="col-md-1">
            <div id="header-book-now">
              <a href="#" id="header-book-now-btn">
                <span class="bg"></span>
                <span class="copy">BOOK NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>