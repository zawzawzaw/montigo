goog.provide('manic.page.Page');



goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('goog.userAgent');
goog.require('goog.userAgent.product');

/**
 * The Page constructor
 * @param {object} options The object extendable like jquery plugins
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.page.Page = function(options) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.page.Page.DEFAULT, options);

  

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.body = $('body');

  if (goog.userAgent.product.FIREFOX) { this.body.addClass('is-firefox') }
  if (goog.userAgent.product.CHROME) { this.body.addClass('is-chrome') }
  if (goog.userAgent.product.SAFARI) { this.body.addClass('is-safari') }
  if (goog.userAgent.product.IE) { this.body.addClass('is-ie') }

  if (goog.userAgent.product.IPHONE) { this.body.addClass('is-iphone') }
  if (goog.userAgent.product.IPAD) { this.body.addClass('is-ipad') }

  console.log('init');
};
goog.inherits(manic.page.Page, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Page
 * @const {object}
 */
manic.page.Page.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Page Event Constant
 * @const
 * @type {string}
 */
manic.page.Page.EVENT_01 = '';

/**
 * Page Event Constant
 * @const
 * @type {string}
 */
manic.page.Page.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.page.Page.prototype.private_method_01 = function() {};
manic.page.Page.prototype.private_method_02 = function() {};
manic.page.Page.prototype.private_method_03 = function() {};
manic.page.Page.prototype.private_method_04 = function() {};
manic.page.Page.prototype.private_method_05 = function() {};
manic.page.Page.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.page.Page.prototype.sample_method_calls = function() {
  manic.page.Page.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.page.Page.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.page.Page.prototype.public_method_01 = function() {};
manic.page.Page.prototype.public_method_02 = function() {};
manic.page.Page.prototype.public_method_03 = function() {};
manic.page.Page.prototype.public_method_04 = function() {};
manic.page.Page.prototype.public_method_05 = function() {};
manic.page.Page.prototype.public_method_06 = function() {};


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
manic.page.Page.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.page.Page.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.page.Page.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.page.Page.prototype.on_event_handler_04 = function(event) {
};

goog.exportSymbol('manic.page.Page', manic.page.Page);