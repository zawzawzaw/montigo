goog.provide('montigo.page.Default');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.page.Page');

/**
 * The Home Page constructor
 * @inheritDoc
 * @constructor
 * @extends {manic.page.Page}
 */
montigo.page.Default = function(options) {
  // if has parent
  manic.page.Page.call(this, options);
  this.options = $.extend(this.options, montigo.page.Default.DEFAULT, options);
  
  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.check_svg_smil();

  console.log('init');
};
goog.inherits(montigo.page.Default, manic.page.Page);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Home Page
 * @const {object}
 */
montigo.page.Default.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Home Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Default.EVENT_01 = '';

/**
 * Home Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Default.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


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
montigo.page.Default.prototype.private_method_02 = function() {};
montigo.page.Default.prototype.private_method_03 = function() {};
montigo.page.Default.prototype.private_method_04 = function() {};
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


montigo.page.Default.prototype.public_method_01 = function() {};
montigo.page.Default.prototype.public_method_02 = function() {};
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
montigo.page.Default.prototype.on_event_handler_01 = function(event) {
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

