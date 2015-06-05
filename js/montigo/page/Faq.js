goog.provide('montigo.page.Faq');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.util.JsonParser');



goog.require('montigo.content.Faq');
goog.require('montigo.page.Default');



/**
 * The Faq Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Faq = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Faq.DEFAULT, options);

  /**
   * @type {montigo.content.Faq}
   */
  this.faq_content = null;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.pinned_header_scene = null;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.pinned_sidebar_scene = null;


  
  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.page.Faq, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Faq Page
 * @const {object}
 */
montigo.page.Faq.DEFAULT = {
  'option_01': '',
  'option_02': ''
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//




/**
 * @override
 * @inheritDoc
 */
montigo.page.Faq.prototype.init_desktop = function() {
  montigo.page.Faq.superClass_.init_desktop.call(this);



  this.faq_content = new montigo.content.Faq({},$('#main-page-content'));

  this.pinned_header_scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold'})
    .triggerHook(0)
    .setPin("#faq-detailed-view-header-container")
    .offset(-62)
    .addTo(this.controller);
  
  this.pinned_sidebar_scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold'})
    .triggerHook(0)
    .setPin(".faq-detailed-view-sidebar-container")
    .offset(-62)
    .addTo(this.controller);


  this.initial_scrollto_hashtag();

};

/**
 * @override
 * @inheritDoc
 */
montigo.page.Faq.prototype.init_mobile = function() {
  montigo.page.Faq.superClass_.init_mobile.call(this);

  this.faq_content = new montigo.content.Faq({},$('#main-page-content'));

  this.initial_scrollto_hashtag();
};



//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//





montigo.page.Faq.prototype.public_method_02 = function() {};
montigo.page.Faq.prototype.public_method_03 = function() {};
montigo.page.Faq.prototype.public_method_04 = function() {};
montigo.page.Faq.prototype.public_method_05 = function() {};
montigo.page.Faq.prototype.public_method_06 = function() {};


//    _______     _______ _   _ _____ ____
//   | ____\ \   / / ____| \ | |_   _/ ___|
//   |  _|  \ \ / /|  _| |  \| | | | \___ \
//   | |___  \ V / | |___| |\  | | |  ___) |
//   |_____|  \_/  |_____|_| \_| |_| |____/
//


/*
montigo.page.Faq.prototype.on_back_to_top_button_click = function(event) {
  event['preventDefault']();

  console.log('on_back_to_top_button_click');
};
*/


/**
 * event handler
 * @param  {object} event
 */
montigo.page.Faq.prototype.asdfadsf2 = function(event) {
};


/**
 * event handler
 * @param  {object} event
 */
montigo.page.Faq.prototype.asdfadsf3 = function(event) {
};



/**
 * @inheritDoc
 * @override
 */
montigo.page.Faq.prototype.on_window_hash_change = function(event) {
  //event.preventDefault();
  //event['preventDefault']();

  this.window_hash = window.location.hash.replace('#', '');

  if (this.faq_content != null && this.faq_content != undefined) {
    this.faq_content.open_section_by_name(this.window_hash);
  }

};


/**
 * @inheritDoc
 * @override
 */
montigo.page.Faq.prototype.initial_scrollto_hashtag = function() {


  this.window_hash = window.location.hash.replace('#', '');

  //this.scroll_to_target(this.window_hash);
  if (this.faq_content != null && this.faq_content != undefined) {
    this.faq_content.open_section_by_name(this.window_hash); 
  }

};


// make it visible outside.
goog.exportSymbol('montigo.page.Faq', montigo.page.Faq);
