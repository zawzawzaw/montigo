goog.provide('montigo.component.MobileMenu');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The MobileMenu constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.MobileMenu = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.MobileMenu.DEFAULT, options);
  this.element = element;


  this.menu_button = this.element.find('.menu-button');
  this.menu_button.click(this.on_menu_button_click.bind(this));

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.component.MobileMenu, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for MobileMenu
 * @const {object}
 */
montigo.component.MobileMenu.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * MobileMenu Event Constant
 * @const
 * @type {string}
 */
montigo.component.MobileMenu.EVENT_01 = '';

/**
 * MobileMenu Event Constant
 * @const
 * @type {string}
 */
montigo.component.MobileMenu.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.MobileMenu.prototype.private_method_01 = function() {};
montigo.component.MobileMenu.prototype.private_method_02 = function() {};
montigo.component.MobileMenu.prototype.private_method_03 = function() {};
montigo.component.MobileMenu.prototype.private_method_04 = function() {};
montigo.component.MobileMenu.prototype.private_method_05 = function() {};
montigo.component.MobileMenu.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.MobileMenu.prototype.sample_method_calls = function() {
  montigo.component.MobileMenu.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.MobileMenu.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.component.MobileMenu.prototype.public_method_01 = function() {};
montigo.component.MobileMenu.prototype.public_method_02 = function() {};
montigo.component.MobileMenu.prototype.public_method_03 = function() {};
montigo.component.MobileMenu.prototype.public_method_04 = function() {};
montigo.component.MobileMenu.prototype.public_method_05 = function() {};
montigo.component.MobileMenu.prototype.public_method_06 = function() {};


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
montigo.component.MobileMenu.prototype.on_menu_button_click = function(event) {
  this.element.toggleClass('open-version');
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MobileMenu.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MobileMenu.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MobileMenu.prototype.on_event_handler_04 = function(event) {
};

