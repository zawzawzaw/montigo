goog.provide('montigo.page.Terms');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.page.Default');

goog.require('montigo.content.Terms');

/**
 * The Terms Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Terms = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Terms.DEFAULT, options);

  /**
   * @type {montigo.content.Terms}
   */
  this.terms_content = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');


  
  
};
goog.inherits(montigo.page.Terms, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Terms Page
 * @const {object}
 */
montigo.page.Terms.DEFAULT = {
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
montigo.page.Terms.prototype.init_desktop = function() {
  montigo.page.Terms.superClass_.init_desktop.call(this);


  this.sidebar_element = $('.generic-text-section .generic-text-sidebar');


  /**
   * @type {ScrollMagic.Scene}
   */
  this.pinned_header_scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold'})
    .triggerHook(0)
    .setPin(".breadcrumb-header-container")
    .offset(-62)
    .addTo(this.controller);


  $('.breadcrumb-container .breadcrumb-01').click(this.on_breadcrumb_01_click.bind(this));

  this.terms_content = new montigo.content.Terms({},$('.generic-text-section'));

  //TweenMax.delayedCall(1, this.terms_content.create_item_scene, [this.controller], this.terms_content);
  this.terms_content.create_item_scene(this.controller);
  
  this.on_window_resize(null);

};

/**
 * @override
 * @inheritDoc
 */
montigo.page.Terms.prototype.init_mobile = function() {
  montigo.page.Terms.superClass_.init_mobile.call(this);

  // do nothing for mobile.
};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



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
montigo.page.Terms.prototype.on_breadcrumb_01_click = function(event) {
  event['preventDefault']();

  this.scroll_to(0);
};



/**
 * event handler
 * @param  {object} event
 */
montigo.page.Terms.prototype.on_window_resize = function(event) {

  // this won't be called on mobile, because default doesn't call this on mobile

  montigo.page.Terms.superClass_.on_window_resize.call(this);

  if(goog.isDefAndNotNull(this.sidebar_element)){
    var sidebar_height = this.sidebar_element.height();

    console.log('sidebar_height: ' + sidebar_height);
  }


};





// make it visible outside.
goog.exportSymbol('montigo.page.Terms', montigo.page.Terms);
