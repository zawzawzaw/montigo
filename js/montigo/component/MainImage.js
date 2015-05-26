goog.provide('montigo.component.MainImage');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.ImageContainer');
goog.require('manic.ui.TextContainer');

goog.require('montigo.component.ScrollMagicUtil');


/**
 * The MainImage constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.MainImage = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.MainImage.DEFAULT, options);
  this.element = element;

  this.initial_image_src = this.element.attr('data-image');

  /**
   * @type {manic.ui.ImageContainer}
   */
  this.image_container = null;

  this.text_container = null;

  /**
   * @type {TimelineMax}
   */
  this.text_animation = null;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.scene = null;


  /**
   * @type {String}
   */
  this.category = montigo.component.MainImage.DEFAULT_VERSION;


  if (this.element.hasClass(montigo.component.MainImage.SHORT_VERSION)) {
    this.category = montigo.component.MainImage.SHORT_VERSION;
  } else if (this.element.hasClass(montigo.component.MainImage.NO_SCALE_VERSION)) {
    this.category = montigo.component.MainImage.NO_SCALE_VERSION;
  }

  // create containers

  if (this.category == montigo.component.MainImage.DEFAULT_VERSION) {
    this.image_container = new manic.ui.ImageContainer({
      'vertical_align': 'top',
      'image_src': this.initial_image_src
    }, this.element.find('.main-slider-image-container'));

    this.text_container = new manic.ui.TextContainer({
      'vertical_align': 'top'
    }, this.element.find('.main-slider-text-container'));

  } else if (this.category == montigo.component.MainImage.SHORT_VERSION) {

    $('body').addClass('has-main-slider-short-version');

    this.image_container = new manic.ui.ImageContainer({
      'vertical_align': 'top',
      'has_window_height': false,
      'fixed_height': 500,
      'image_src': this.initial_image_src,
      'scale_mode': 'best_fit_no_scale_down'
    }, this.element.find('.main-slider-image-container'));

    this.text_container = new manic.ui.TextContainer({
      'vertical_align': 'top',
      'has_window_height': false,
      'fixed_height': 500,
      'scale_mode': 'best_fit_no_scale_down'
    }, this.element.find('.main-slider-text-container'));

  } else if (this.category == montigo.component.MainImage.NO_SCALE_VERSION) {

    this.image_container = new manic.ui.ImageContainer({
      'vertical_align': 'top',
      'image_src': this.initial_image_src,
      'scale_mode': 'best_fit_no_scale_down',
    }, this.element.find('.main-slider-image-container'));

    this.text_container = new manic.ui.TextContainer({
      'vertical_align': 'top',
      'scale_mode': 'best_fit_no_scale_down'
    }, this.element.find('.main-slider-text-container'));

  }



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
goog.inherits(montigo.component.MainImage, goog.events.EventTarget);




/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
montigo.component.MainImage.DEFAULT_VERSION = 'default-version';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
montigo.component.MainImage.SHORT_VERSION = 'short-version';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
montigo.component.MainImage.NO_SCALE_VERSION = 'no-scale-version';



/**
 * default options for MainImage
 * @const {object}
 */
montigo.component.MainImage.DEFAULT = {
  //'type': 'default'
};

//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * create_pin_scene description
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.component.MainImage.prototype.create_pin_scene = function(controller_param) {

  var trigger_element_str = "#" + this.element.attr('id');

  this.scene = new ScrollMagic.Scene({offset: 10, triggerElement: "#page-fold", duration: 300})
            //.addIndicators({name: "Main Image Pin"}) // add indicators (requires plugin)
            .triggerHook(0)
            .setPin(trigger_element_str)
            .addTo(controller_param);
};

/**
 * create_scene description
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.component.MainImage.prototype.create_scene = function(controller_param) {
  /*
  this.text_animation = montigo.component.ScrollMagicUtil.get_alpha_animation_for_elements([
    this.element.find('.text h3'),
    this.element.find('.text h4'),
    this.element.find('.text hr'),
    this.element.find('.text p')
  ]);
  */
  var arr = this.element.find('.fadeout');
  var item_arr = [];
  var item = null;

  for (var i = 0, l = arr.length; i < l; i++) {
    item = $(arr[i]);
    item_arr[item_arr.length] = item;
  }

  this.text_animation = montigo.component.ScrollMagicUtil.get_alpha_animation_for_elements(item_arr);


  this.scene = new ScrollMagic.Scene({triggerElement: "#page-fold", duration: 200})
            //.addIndicators({name: "Main Image"}) // add indicators (requires plugin)
            .triggerHook(0)
            .offset(20)
            .setTween(this.text_animation)
            .addTo(controller_param);          
};


/**
 * create_parallax_scene
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.component.MainImage.prototype.create_parallax_scene = function(controller_param) {
  
  var trigger_element_str = "#" + this.element.attr('id');
  
  //TweenMax.to(this.image_container.image_element, 0, {'top': -300});

  this.parallax_scene = new ScrollMagic.Scene({triggerElement: trigger_element_str, duration: "100%"})
    //.addIndicators({name: "main parallax"}) // add indicators (requires plugin)
    .setTween(TweenMax.to(this.image_container.image_element, 1, {'top': 300, ease: Linear.easeNone}))
    .addTo(controller_param);

};



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
montigo.component.MainImage.prototype.on_window_resize = function(event) {
  var window_height = this.window.height();
    
  this.element.height(window_height);

};
