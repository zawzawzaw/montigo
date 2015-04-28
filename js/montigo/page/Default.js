// all pages need scrollmagic.

goog.provide('montigo.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.page.Page');

goog.require('manic.ui.ImageContainer');
goog.require('montigo.component.Menu');

/**
 * The Default Page constructor
 * @inheritDoc
 * @constructor
 * @extends {manic.page.Page}
 */
montigo.page.Default = function(options) {
  manic.page.Page.call(this, options);
  this.options = $.extend(this.options, montigo.page.Default.DEFAULT, options);

  /**
   * @type {ScrollMagic.Controller}
   */
  this.controller = null;

  /**
   * @type {montigo.component.Menu}
   */
  this.menu = null;

  this.scrolldown_button = null;

  /**
   * @type {Array.<manic.ui.ImageContainer>}
   */
  this.manic_image_array = [];

  this.preloader_element = $('#page-preloader');

  
  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.check_query_variables();


  this.check_svg_smil();
  this.create_manic_image_container();
  this.create_controller();     // needed by menu
  this.create_menu();
  this.create_scrolldown_button();


  this.hide_preloader();                      // js and images are already loaded on instanciation...


  console.log('init');
};
goog.inherits(montigo.page.Default, manic.page.Page);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Default Page
 * @const {object}
 */
montigo.page.Default.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Default Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Default.EVENT_01 = '';

/**
 * Default Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Default.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|


montigo.page.Default.prototype.check_query_variables = function(){
  var breakpoint = this.getQueryVariable('breakpoint');

  if(breakpoint != false){
    $('.container-fluid.has-breakpoint').removeClass('has-breakpoint');
  }
};

montigo.page.Default.prototype.check_svg_smil = function() {
  console.log('check_svg_smil');

  if (!Modernizr.smil) {

    console.log('no svg smil capabilities');

    var arr = $('.svg-graphic');
    var fallback_src = "";
    var item = null;
    for (var i = 0, l = arr.length; i < l; i++) {
      item = $(arr[i]);
      fallback_src = item.attr('data-fallback');
      item.attr('src',fallback_src);
    }
  }
};

montigo.page.Default.prototype.create_controller = function() {
  this.controller = new ScrollMagic.Controller();
};
montigo.page.Default.prototype.create_menu = function() {
  this.menu = new montigo.component.Menu({
  }, $('#main-page-header'));


  this.menu.create_scene(this.controller);
};

montigo.page.Default.prototype.create_scrolldown_button = function(){
  this.scrolldown_button = $('.down-scroll-arrow');
  this.scrolldown_button.click(this.on_scrolldown_button_click.bind(this));

  var scrolldown_scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold', offset: 10, duration:100})                        // #below-page-fold must be found on all pages.
    //.addIndicators({name: "scrolldown button"}) // add indicators (requires plugin)
    .triggerHook(1)
    .setTween(TweenMax.to(this.scrolldown_button, 1, {autoAlpha:0}))
    .addTo(this.controller);
};

montigo.page.Default.prototype.create_manic_image_container = function() {
  var arr = $('.manic-image-container');
  var image_element = null;
  var manic_image = null;

  for (var i = 0, l = arr.length; i < l; i++) {
    image_element = $(arr[i]);
    manic_image = new manic.ui.ImageContainer({
      'has_window_width': false,
      'has_window_height': false
    }, image_element);
    this.manic_image_array[i] = manic_image;
  }

};
montigo.page.Default.prototype.private_method_05 = function() {};
montigo.page.Default.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.page.Default.prototype.sample_method_calls = function() {
  montigo.page.Default.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.page.Default.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Default.prototype.hide_preloader = function() {
  this.preloader_element.addClass('preload-complete');
  $('body').addClass('preload-complete');
  TweenMax.to(this.preloader_element, 0.2, {autoAlpha:0, delay: 2, onComplete: this.on_hide_preloader_complete, onCompleteScope: this});
};
montigo.page.Default.prototype.on_hide_preloader_complete = function() {
  $('body').removeClass('preload-complete');
};


/**
 * getQueryVariable description
 * @param  {string} variable
 * @return {string}
 */
montigo.page.Default.prototype.getQueryVariable = function(variable){
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
         var pair = vars[i].split("=");
         if(pair[0] == variable){return pair[1];}
  }
  return(false);
};



montigo.page.Default.prototype.public_method_03 = function() {};
montigo.page.Default.prototype.public_method_04 = function() {};
montigo.page.Default.prototype.public_method_05 = function() {};
montigo.page.Default.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Default.prototype.on_scrolldown_button_click = function(event) {

  var header_height = 60;
  var target_y = $('#below-page-fold').offset().top - header_height;
  var target_duration = target_y / 500;

  console.log('target_y: ' + target_y);
  TweenMax.to($(window), target_duration, {scrollTo:{y:target_y,autoKill: true}, ease:Quad.easeInOut});
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Default.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Default.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Default.prototype.on_event_handler_04 = function(event) {
};





// make it visible outside.
goog.exportSymbol('montigo.page.Default', montigo.page.Default);

