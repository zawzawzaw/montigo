goog.provide('montigo.component.InstagramSidebar');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The InstagramSidebar constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.InstagramSidebar = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.InstagramSidebar.DEFAULT, options);
  this.element = element;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.scene = null;
  /**
   * @type {ScrollMagic.Scene}
   */
  this.pop_up_scene = null;

  this.window = $(window);
  this.window.resize(this.on_window_resize.bind(this));

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.component.InstagramSidebar, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for InstagramSidebar
 * @const {object}
 */
montigo.component.InstagramSidebar.DEFAULT = {
  'trigger_element': '#home-featured-section'
};

/**
 * InstagramSidebar Event Constant
 * @const
 * @type {string}
 */
montigo.component.InstagramSidebar.EVENT_01 = '';

/**
 * InstagramSidebar Event Constant
 * @const
 * @type {string}
 */
montigo.component.InstagramSidebar.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.InstagramSidebar.prototype.private_method_01 = function() {};
montigo.component.InstagramSidebar.prototype.private_method_02 = function() {};
montigo.component.InstagramSidebar.prototype.private_method_03 = function() {};
montigo.component.InstagramSidebar.prototype.private_method_04 = function() {};
montigo.component.InstagramSidebar.prototype.private_method_05 = function() {};
montigo.component.InstagramSidebar.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * create_scene description
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.component.InstagramSidebar.prototype.create_scene = function(controller_param) {

  //var trigger_element_str = "#" + this.element.attr('id');
  var trigger_element_str = this.options['trigger_element'];

  var sidebar_height = $('#home-featured-sidebar').height();
  var featured_height = $('#home-featured-content').height();
  var calculated_duration = featured_height - sidebar_height + 160;
  console.log('calculated_duration: ' + calculated_duration);

  this.scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold', duration: calculated_duration})
    .setPin("#home-featured-sidebar")
    //.addIndicators({name: "instagram sidebar"}) // add indicators (requires plugin)
    .triggerHook(0)
    .offset(-62-160-20)                         // 160 = margin top, 20 = difference from header
    .setClassToggle(trigger_element_str, "has-pin")
    .addTo(controller_param);

  //TweenMax.to($('#home-instagram'), 1, {css:{marginTop: 0}});     // causes issues when page position is in the middle of the page.
  
  this.pop_up_scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold', duration: 300})
    //.addIndicators({name: "instagram popup"}) // add indicators (requires plugin)
    .offset(20)
    .triggerHook(1)
    .setTween(TweenMax.to($('#home-instagram'), 1, {css:{marginTop: -160}, ease: Back.easeOut}))
    .addTo(controller_param);
};


montigo.component.InstagramSidebar.prototype.update_layout = function() {
  var sidebar_height = $('#home-featured-sidebar').height();
  var featured_height = $('#home-featured-content').height();
  var calculated_duration = featured_height - sidebar_height + 160;

  this.scene.duration(calculated_duration);
};
montigo.component.InstagramSidebar.prototype.public_method_03 = function() {};
montigo.component.InstagramSidebar.prototype.public_method_04 = function() {};
montigo.component.InstagramSidebar.prototype.public_method_05 = function() {};
montigo.component.InstagramSidebar.prototype.public_method_06 = function() {};


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
montigo.component.InstagramSidebar.prototype.on_window_resize = function(event) {
  this.update_layout();
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.InstagramSidebar.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.InstagramSidebar.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.InstagramSidebar.prototype.on_event_handler_04 = function(event) {
};

