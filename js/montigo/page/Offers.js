goog.provide('montigo.page.Offers');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.component.MainImage');
goog.require('montigo.component.OfferItem');

goog.require('montigo.page.Default');

/**
 * The Offers Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Offers = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Offers.DEFAULT, options);

  /**
   * @type {Array<montigo.component.OfferItem>}
   */
  this.offer_item_array = [];
  
  this.create_offer_items();

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.page.Offers, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Offers Page
 * @const {object}
 */
montigo.page.Offers.DEFAULT = {
  'option_01': '',
  'option_02': ''
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//





montigo.page.Offers.prototype.create_offer_items = function() {
  var arr = $('.offer-list-item');

  /**
   * @type {jQuery}
   */
  var item = null;

  /**
   * @type {montigo.component.OfferItem}
   */
  var offer_item = null;

  for (var i = 0, l = arr.length; i < l; i++) {
    item = $(arr[i]);
    offer_item = new montigo.component.OfferItem({
    },item);

    this.offer_item_array[i] = offer_item;
    

  }


};
montigo.page.Offers.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Offers.prototype.public_method_01 = function() {};
montigo.page.Offers.prototype.public_method_02 = function() {};


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
montigo.page.Offers.prototype.on_event_handler_03 = function(event) {
};



// make it visible outside.
goog.exportSymbol('montigo.page.Offers', montigo.page.Offers);
