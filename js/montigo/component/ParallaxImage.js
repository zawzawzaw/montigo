// SHOULD NOT HAVE ID WITH SAME NAME AS ELEMENT..

goog.provide('montigo.component.ParallaxImage');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.TextContainer');
goog.require('manic.ui.ImageContainer');

goog.require('montigo.component.ScrollMagicUtil');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.ParallaxImage = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.ParallaxImage.DEFAULT, options);
  this.element = element;


  /**
   * @type {manic.ui.TextContainer}
   */
  this.manic_text_container = null;

  /**
   * @type {manic.ui.ImageContainer}
   */
  this.manic_image_container = null;
  



  //this.image_container = this.element.find('.image-container');
  //this.text_container = this.element.find('.text-container');

  /**
   * @type {ScrollMagic.Scene}
   */
  this.parallax_scene = null;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.text_scene = null;

  /**
   * @type {TimelineMax}
   */
  this.text_animation = null;

  // set image bg
  this.initial_image_src = this.element.attr('data-image');


  /*
  this.image_container.css({
    "background-image": "url(" + this.initial_image_src + ")"
  });
  */

  //console.log(this.element)
  //console.log('this.initial_image_src' + this.initial_image_src);




  this.manic_text_container = new manic.ui.TextContainer({
    'max_x': (1280 - 60)
  },this.element.find('.parallax-section-text-container'));

  this.manic_image_container = new manic.ui.ImageContainer({
    'image_src': this.initial_image_src
  },this.element.find('.parallax-section-image-container'));

  

  TweenMax.to(this.manic_image_container.element, 0, {'z': 0.1});

  this.window = $(window);
  this.window.resize(this.on_window_resize.bind(this));
  this.on_window_resize(null);
  


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.component.ParallaxImage, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
montigo.component.ParallaxImage.DEFAULT = {
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
montigo.component.ParallaxImage.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
montigo.component.ParallaxImage.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//



montigo.component.ParallaxImage.prototype.private_method_02 = function() {};
montigo.component.ParallaxImage.prototype.private_method_03 = function() {};
montigo.component.ParallaxImage.prototype.private_method_04 = function() {};
montigo.component.ParallaxImage.prototype.private_method_05 = function() {};


//    _   _ _____ ___ _     
//   | | | |_   _|_ _| |    
//   | | | | | |  | || |    
//   | |_| | | |  | || |___ 
//    \___/  |_| |___|_____|
//                          

/**
 * sample_method_calls
 */
montigo.component.ParallaxImage.prototype.sample_method_calls = function() {
  montigo.component.ParallaxImage.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.ParallaxImage.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * create_text_scene description
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.component.ParallaxImage.prototype.create_text_scene = function(controller_param) {
  var trigger_element_str = "#" + this.element.attr('id');
  
  this.text_animation = montigo.component.ScrollMagicUtil.get_alpha_in_top_animation_for_elements([
    this.element.find('h3'),
    this.element.find('hr'),
    this.element.find('h4'),
    this.element.find('p'),
    this.element.find('.cta-button')
  ]);

  this.text_scene = new ScrollMagic.Scene({triggerElement: trigger_element_str, duration: 300})  // previous duration 300
    //.addIndicators({name: "text scene"}) // add indicators (requires plugin)
    .triggerHook(0.3)
    .setTween(this.text_animation)
    .addTo(controller_param);
};

/**
 * create_text_scene_2 description                for activities text
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.component.ParallaxImage.prototype.create_text_scene_2 = function(controller_param) {
  var trigger_element_str = "#" + this.element.attr('id');

  var animation_elements = [
    this.element.find('.text h3'),
    this.element.find('.text hr.short-hr'),
    this.element.find('.text h4')
  ];

  var arr = this.element.find('.text p');
  for (var i = 0, l = arr.length; i < l; i++) {
    animation_elements[animation_elements.length] = $(arr[i]);
  }

  /*
  var arr2 = this.element.find('.text .circle-arrow-link');
  if(arr2.length != 0){
    animation_elements[animation_elements.length] = arr2;
  }
  */

  
  
  this.text_animation = montigo.component.ScrollMagicUtil.get_alpha_in_top_animation_for_elements(animation_elements);

  this.text_scene = new ScrollMagic.Scene({triggerElement: trigger_element_str, duration: 400})  // previous duration 300
    //.addIndicators({name: "text scene"}) // add indicators (requires plugin)
    .triggerHook(0.3)
    .setTween(this.text_animation)
    .addTo(controller_param);
};

/**
 * [create_parallax_scene description]
 * @param  {ScrollMagic.Controller} controller_param [description]
 */
montigo.component.ParallaxImage.prototype.create_parallax_scene = function(controller_param) {
  var trigger_element_str = "#" + this.element.attr('id');
  /*
  // initial value
  TweenMax.to(this.image_container, 0, {top: -300});

  this.parallax_scene = new ScrollMagic.Scene({triggerElement: trigger_element_str, duration: "100%"})
    //.addIndicators({name: "parallax scene"}) // add indicators (requires plugin)
    .setTween(TweenMax.to(this.image_container, 1, {top: 300, ease: Linear.easeNone}))
    .addTo(controller_param);
  */


  // initial value
  //TweenMax.to(this.manic_image_container.element, 0, {top: -300});
  TweenMax.to(this.manic_image_container.element, 0, {'y': -300});

  this.parallax_scene = new ScrollMagic.Scene({triggerElement: trigger_element_str, duration: "100%"})
    //.addIndicators({name: "parallax scene"}) // add indicators (requires plugin)
    //.setTween(TweenMax.to(this.manic_image_container.element, 1, {top: 300, ease: Linear.easeNone}))
    .setTween(TweenMax.to(this.manic_image_container.element, 1, {'y': 300, ease: Linear.easeNone}))
    .addTo(controller_param);

  
};
montigo.component.ParallaxImage.prototype.public_method_02 = function() {};
montigo.component.ParallaxImage.prototype.public_method_03 = function() {};
montigo.component.ParallaxImage.prototype.public_method_04 = function() {};
montigo.component.ParallaxImage.prototype.public_method_05 = function() {};
montigo.component.ParallaxImage.prototype.public_method_06 = function() {};


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
montigo.component.ParallaxImage.prototype.on_window_resize = function(event) {
  var window_height = this.window.height();
  this.element.height(window_height)

  //this.text_container.height(window_height);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.ParallaxImage.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.ParallaxImage.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.ParallaxImage.prototype.on_event_handler_04 = function(event) {
};

