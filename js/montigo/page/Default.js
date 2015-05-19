// all pages need scrollmagic.

goog.provide('montigo.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.page.Page');
goog.require('manic.ui.ImageContainer');

goog.require('montigo.component.Menu');
goog.require('montigo.component.MainImage');

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
   * @type {ScrollMagic.Controller}
   */
  this.controller2 = null;    // for parallax effects

  /**
   * @type {montigo.component.MainImage}
   */
  this.main_image = null;

  /**
   * @type {montigo.component.Menu}
   */
  this.menu = null;

  /**
   * @type {Array.<manic.ui.ImageContainer>}
   */
  this.manic_image_array = [];

  /**
   * @type {jQuery}
   */
  this.scrolldown_button = null;

  /**
   * @type {jQuery}
   */
  this.preloader_element = $('#page-preloader');


  /**
   * @type {ScrollMagic.Scene}
   */
  this.back_to_top_button_scene = null;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.back_to_top_button_scene_02 = null;

  this.has_back_to_top_button_scene = false;

  /**
   * @type {Array.<jQuery>}
   */
  this.scrolltarget_array = [];
  this.scrolltarget_name_array = [];

  
  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.check_query_variables();

  this.check_svg_smil();
  this.create_manic_image_container();
  this.create_controller();                       // needed by menu

  this.create_scrolltarget();

  this.create_menu();
  this.create_main_image();
  this.create_scrolldown_button();



  this.create_animation();                        // scrollmagic animation


  //tadds
  //tiigo


  this.hide_preloader();                          // js and images are already loaded on instanciation...


  this.window = $(window);
  this.window.resize(this.on_window_resize.bind(this));
  //this.window.unload(this.on_window_unload.bind(this));
  //window.onbeforeunload = this.on_window_unload.bind(this);

  this.window_hash = "";
  this.window.on('hashchange', this.on_window_hash_change.bind(this));

  this.on_window_resize(null);

  
  /*
  $('.back-to-top-button').click(function(event){
    this.scroll_to(0);
    //window.location.hash = '#';
  }.bind(this))
  

  .generic-text-back-to-top-container
  */
 
  
  
  



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

  this.controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

};
montigo.page.Default.prototype.create_menu = function() {
  this.menu = new montigo.component.Menu({
  }, $('#main-page-header'));


  this.menu.create_scene(this.controller);
};

montigo.page.Default.prototype.create_main_image = function(){
  this.main_image = new montigo.component.MainImage({
  },$('.main-slider'));

  this.main_image.create_scene(this.controller);
  
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


montigo.page.Default.prototype.create_animation = function() {

  var arr = $('.manic-image-container');

  /**
   * @type {jQuery}
   */
  var item = null;

  /**
   * @type {TimelineMax}
   */
  var animation = null;

  /**
   * @type {ScrollMagic.Scene}
   */
  var scene = null;

  var delay_attr = "";
  var delay_num = 0;


  

  for (var i = 0, l = arr.length; i < l; i++) {
    item = $(arr[i]);
    trigger_element_str = "#" + item.attr('id');

    delay_num = 0;
    delay_attr = item.attr('data-delay');
    if (typeof delay_attr !== typeof undefined && delay_attr !== false) {
      delay_num = parseFloat(delay_attr);
    }

    console.log('delay_num:' + delay_num)


    if(item.hasClass('fadein-left')){

      var scene = new ScrollMagic.Scene({triggerElement: trigger_element_str, duration: 300})
        //.addIndicators({name: "image scene"}) // add indicators (requires plugin)
        .triggerHook(0.85)
        .setTween(TweenMax.to(item, 1, {opacity:1, left: 0, ease:Back.easeOut, delay:delay_num}))
        .addTo(this.controller);

    } else if(item.hasClass('fadein-right')){


      var scene = new ScrollMagic.Scene({triggerElement: trigger_element_str, duration: 300})
        //.addIndicators({name: "image scene"}) // add indicators (requires plugin)
        .triggerHook(0.85)
        .setTween(TweenMax.to(item, 1, {opacity:1, left: 0, ease:Back.easeOut, delay:delay_num}))
        .addTo(this.controller);
    }
  }
  

  /*
  // RESTAURANT IMAGE
  var home_restaurant_image_animation_01 = new TimelineMax();
  home_restaurant_image_animation_01.add(TweenMax.to($('#home-restaurant-image-01'), 1, {opacity:1, left:0, ease:Back.easeOut}), 0);

  var home_restaurant_image_01 = new ScrollMagic.Scene({triggerElement: "#home-restaurant-text-01", duration: 300})
            .triggerHook(0.8)
            .setTween(home_restaurant_image_animation_01)
            .addTo(this.controller);
  

  var home_restaurant_image_animation_02 = new TimelineMax();
  home_restaurant_image_animation_02.add(TweenMax.to($('#home-restaurant-image-03'), 1, {opacity:1, left:0, ease:Back.easeOut}), 0);
  home_restaurant_image_animation_02.add(TweenMax.to($('#home-restaurant-image-02'), 1, {opacity:1, left:0, ease:Back.easeOut}), 0.3);

  var home_restaurant_image_02 = new ScrollMagic.Scene({triggerElement: "#home-restaurant-text-02", duration: 300})
            .triggerHook(0.8)
            .setTween(home_restaurant_image_animation_02)
            .addTo(this.controller);
  */

};

montigo.page.Default.prototype.create_scrolltarget = function() {

  /**
   * @type {jQuery}
   */
  var scroll_target = null;

  /**
   * @type {String}
   */
  var scroll_target_str = "";


  var arr = $('.scroll-target');

  for (var i = 0, l = arr.length; i < l; i++) {
    scroll_target = $(arr[i]);
    scroll_target_str = scroll_target.attr('data-value');
    
    this.scrolltarget_name_array[i] = scroll_target_str;
    this.scrolltarget_array[i] = scroll_target;
  }


};




montigo.page.Default.prototype.create_back_to_top_scene = function(){



  
  this.has_back_to_top_button_scene = true;


  this.back_to_top_button.click(this.on_back_to_top_button_click.bind(this));


  console.log('TEST 01 ' + $('#back-to-top-button-container-container').offset().top);

  this.back_to_top_button_scene = new ScrollMagic.Scene({triggerElement: '#back-to-top-button-container'})  // previous duration 300
    .triggerHook(1)
    .setPin(".back-to-top-button")
    .offset(90)                              // = 90 - 40 PX (height of button) = 50 px from the bottom
    //.offset(-62)
    //.addIndicators({name: "back to top scene"}) // add indicators (requires plugin)
    .addTo(this.controller);
    //.triggerHook(0.3)
    //.setTween(this.text_animation)
    //.addTo(controller_param);



  

  var target_duration = $(document).height() - $('#main-page-footer').height() - $('#back-to-top-button-container-container').offset().top - 80 - 100;
  this.back_to_top_button_scene.duration(target_duration);

    
};


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
  $('body').addClass('preload-complete-2');
  TweenMax.to(this.preloader_element, 0.2, {autoAlpha:0, delay: 2, onComplete: this.on_hide_preloader_complete, onCompleteScope: this});

  TweenMax.delayedCall(3, this.on_hide_preloader_complete_02, [], this);
  //TweenMax.to(this.preloader_element, 0.2, {autoAlpha:0, delay: 2, onComplete: this.on_hide_preloader_complete, onCompleteScope: this});
};
montigo.page.Default.prototype.on_hide_preloader_complete = function() {
  $('body').removeClass('preload-complete');
  
  this.initial_scrollto_hashtag();

  this.back_to_top_button = $('.back-to-top-button');
  if (this.back_to_top_button.length > 0) {
    this.create_back_to_top_scene();
  }

};

montigo.page.Default.prototype.on_hide_preloader_complete_02 = function(){
  //this.controller2.update();
  $('body').removeClass('preload-complete-2');
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



/**
 * scroll_to_target description
 * @param  {String} str_param
 */
montigo.page.Default.prototype.scroll_to_target = function(str_param) {

  /**
   * @type {jQuery}
   */
  var scroll_target = null;

  /**
   * @type {String}
   */
  var scroll_target_str = "";


  for (var i = 0, l = this.scrolltarget_name_array.length; i < l; i++) {
    scroll_target_str = this.scrolltarget_name_array[i];
    scroll_target = this.scrolltarget_array[i];

    if (str_param == scroll_target_str) {

      var header_height = 60;
      var target_y = scroll_target.offset().top - header_height;

      var offset_y = 0;
      var offset_data = scroll_target.attr('data-offset');

      if (goog.isDefAndNotNull(offset_data)) {
        offset_y = parseFloat(offset_data);
        target_y += offset_y;
      }



      var current_scroll = $(window).scrollTop();

      var target_duration = Math.abs(  (target_y - current_scroll) / 800 );
      TweenMax.to($(window), target_duration, {scrollTo:{y:target_y,autoKill: true}, ease:Quad.easeInOut});

    }
        
    
  }

};

montigo.page.Default.prototype.scroll_to = function(num_param) {
  var target_y = num_param
  var current_scroll = $(window).scrollTop();
  var target_duration = Math.abs(  (target_y - current_scroll) / 800 );
  TweenMax.to($(window), target_duration, {scrollTo:{y:target_y,autoKill: true}, ease:Quad.easeInOut});
};



montigo.page.Default.prototype.initial_scrollto_hashtag = function() {


  this.window_hash = window.location.hash.replace('#', '');

  //var initial_hash_tag = window.location.hash.substr(1);

  console.log('initial this.window_hash: ' + this.window_hash);

  this.scroll_to_target(this.window_hash);

};
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
montigo.page.Default.prototype.on_window_hash_change = function(event) {
  //event.preventDefault();
  //event['preventDefault']();

  this.window_hash = window.location.hash.replace('#', '');
  
  console.log('this.window_hash: ' + this.window_hash);

  if(this.window_hash != ''){
    this.scroll_to_target(this.window_hash);
  } else {
    var target_y = 0;
    var current_scroll = $(window).scrollTop();
    var target_duration = Math.abs(  (target_y - current_scroll) / 800 );
    TweenMax.to($(window), target_duration, {scrollTo:{y:target_y,autoKill: true}, ease:Quad.easeInOut});
  }

  


};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Default.prototype.on_back_to_top_button_click = function(event) {
  this.scroll_to(0);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Default.prototype.on_event_handler_04 = function(event) {
};



/**
 * event handler
 * @param  {object} event
 */
montigo.page.Default.prototype.on_window_resize = function(event) {
  this.controller.update();
  this.controller2.update();

  if (this.has_back_to_top_button_scene == true) {
    $('#back-to-top-button-container-container').hide();
    var document_height = $(document).height();
    $('#back-to-top-button-container-container').show();

    console.log('TEST 02 ' + $('#back-to-top-button-container-container').offset().top);

    var target_duration = document_height - $('#main-page-footer').height() - $('#back-to-top-button-container-container').offset().top - 80 - 100; ///(NOT SURE WHY PLUS 100)
    this.back_to_top_button_scene.duration(target_duration);
  }
};



// make it visible outside.
goog.exportSymbol('montigo.page.Default', montigo.page.Default);

