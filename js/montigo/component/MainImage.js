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
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, montigo.component.MainImage.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.MainImage.DEFAULT, options);
  this.element = element;

  this.initial_image_src = this.element.attr('data-image');

  /**
   * @type {manic.ui.ImageContainer}
   */
  this.image_container = new manic.ui.ImageContainer({
    'vertical_align': 'top',
    'image_src': this.initial_image_src
  }, this.element.find('.main-slider-image-container'));

  this.text_container = new manic.ui.TextContainer({
    'vertical_align': 'top'
  }, this.element.find('.main-slider-text-container'));

  /**
   * @type {TimelineMax}
   */
  this.text_animation = null;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.scene = null;

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




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MainImage
 * @const {object}
 */
montigo.component.MainImage.DEFAULT = {
};

/**
 * MainImage Event Constant
 * @const
 * @type {string}
 */
montigo.component.MainImage.EVENT_01 = '';

/**
 * MainImage Event Constant
 * @const
 * @type {string}
 */
montigo.component.MainImage.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.MainImage.prototype.private_method_01 = function() {};
montigo.component.MainImage.prototype.private_method_02 = function() {};
montigo.component.MainImage.prototype.private_method_03 = function() {};
montigo.component.MainImage.prototype.private_method_04 = function() {};
montigo.component.MainImage.prototype.private_method_05 = function() {};
montigo.component.MainImage.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.MainImage.prototype.sample_method_calls = function() {
  montigo.component.MainImage.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.MainImage.EVENT_01));
};

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

  this.scene = new ScrollMagic.Scene({triggerElement: "#page-fold", duration: 300})
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
  this.text_animation = montigo.component.ScrollMagicUtil.get_alpha_animation_for_elements([
    this.element.find('.text h3'),
    this.element.find('.text h4'),
    this.element.find('.text hr'),
    this.element.find('.text p')
  ]);

  this.scene = new ScrollMagic.Scene({triggerElement: "#page-fold", duration: 200})
            //.addIndicators({name: "Main Image"}) // add indicators (requires plugin)
            .triggerHook(0)
            .offset(20)
            .setTween(this.text_animation)
            .addTo(controller_param);
          
};



montigo.component.MainImage.prototype.public_method_05 = function() {};
montigo.component.MainImage.prototype.public_method_06 = function() {};


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
  /*
  var window_height = this.window.height();
  console.log('text container')
  console.log(this.element.find('.text-container'));
  this.element.find('.text-container').height(window_height);
  */
  var window_height = this.window.height();
    
  this.element.height(window_height);

};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MainImage.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MainImage.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MainImage.prototype.on_event_handler_04 = function(event) {
};

