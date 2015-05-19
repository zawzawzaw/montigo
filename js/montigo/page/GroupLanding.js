goog.provide('montigo.page.GroupLanding');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.page.Default');

/**
 * The Group Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.GroupLanding = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.GroupLanding.DEFAULT, options);

  
  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.page.GroupLanding, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Group Page
 * @const {object}
 */
montigo.page.GroupLanding.DEFAULT = {
  'option_01': '',
  'option_02': ''
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.page.GroupLanding.prototype.private_method_05 = function() {};
montigo.page.GroupLanding.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.GroupLanding.prototype.public_method_01 = function() {};
montigo.page.GroupLanding.prototype.public_method_02 = function() {};
montigo.page.GroupLanding.prototype.public_method_03 = function() {};
montigo.page.GroupLanding.prototype.public_method_04 = function() {};
montigo.page.GroupLanding.prototype.public_method_05 = function() {};
montigo.page.GroupLanding.prototype.public_method_06 = function() {};


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
montigo.page.GroupLanding.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.GroupLanding.prototype.on_event_handler_04 = function(event) {
};




// make it visible outside.
goog.exportSymbol('montigo.page.GroupLanding', montigo.page.GroupLanding);
