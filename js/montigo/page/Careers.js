goog.provide('montigo.page.Careers');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.util.JsonParser');

goog.require('montigo.page.Default');

goog.require('montigo.content.Careers');


/**
 * The Career Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Careers = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Careers.DEFAULT, options);

  
  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  /**
   * @type {montigo.content.Careers}
   */
  this.career_content = new montigo.content.Careers({},$('#career-classified-section'))

  

  console.log('init');
};
goog.inherits(montigo.page.Careers, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Career Page
 * @const {object}
 */
montigo.page.Careers.DEFAULT = {
  'option_01': '',
  'option_02': ''
};





//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.page.Careers.prototype.private_method_05 = function() {};
montigo.page.Careers.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Careers.prototype.public_method_01 = function() {};
montigo.page.Careers.prototype.public_method_02 = function() {};
montigo.page.Careers.prototype.public_method_03 = function() {};
montigo.page.Careers.prototype.public_method_04 = function() {};
montigo.page.Careers.prototype.public_method_05 = function() {};
montigo.page.Careers.prototype.public_method_06 = function() {};


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
montigo.page.Careers.prototype.on_event_handler_04 = function(event) {
};




// make it visible outside.
goog.exportSymbol('montigo.page.Careers', montigo.page.Careers);
