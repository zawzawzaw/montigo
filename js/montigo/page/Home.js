goog.provide('montigo.page.Home');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.page.Default');

/**
 * The Home Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Home = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Home.DEFAULT, options);

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.page.Home, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Home Page
 * @const {object}
 */
montigo.page.Home.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Home Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Home.EVENT_01 = '';

/**
 * Home Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Home.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.page.Home.prototype.private_method_01 = function() {};
montigo.page.Home.prototype.private_method_02 = function() {};
montigo.page.Home.prototype.private_method_03 = function() {};
montigo.page.Home.prototype.private_method_04 = function() {};
montigo.page.Home.prototype.private_method_05 = function() {};
montigo.page.Home.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.page.Home.prototype.sample_method_calls = function() {
  montigo.page.Home.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.page.Home.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Home.prototype.public_method_01 = function() {};
montigo.page.Home.prototype.public_method_02 = function() {};
montigo.page.Home.prototype.public_method_03 = function() {};
montigo.page.Home.prototype.public_method_04 = function() {};
montigo.page.Home.prototype.public_method_05 = function() {};
montigo.page.Home.prototype.public_method_06 = function() {};


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
montigo.page.Home.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Home.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Home.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Home.prototype.on_event_handler_04 = function(event) {
};

