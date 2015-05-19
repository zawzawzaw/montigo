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


  this.advance_purchase_button = $('#advance-purchase-book-button');
  this.family_button = $('#family-times-book-button');



  this.advance_purchase_button.click(this.on_advance_purchase_button_click.bind(this));
  this.family_button.click(this.on_family_button_click.bind(this));

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


/**
 * book_promo_code description
 * @param  {string} str_param
 */
montigo.page.Offers.prototype.book_promo_code = function(str_param) {


  var today = new Date();

  var arrival_date = today.toLocaleDateString();
  var departure_date = today.toLocaleDateString();

  //console.log(arrival_date)

  var arrival = arrival_date.split('/');
  arrival = arrival[1]+'/'+arrival[0]+'/'+arrival[2];

  var departure = departure_date.split('/');
  departure = departure[1]+'/'+departure[0]+'/'+departure[2];

  var nights = 0;
  var rooms = 1;
  var codeType = 'rateCode';      // see menu booking form js
  var code = '' + str_param;

  var params = '';
      params+= '&arrivalDate='+arrival;
      params+= '&departureDate='+departure;
      params+= '&numberOfNights='+nights;
      params+= '&rooms='+rooms;
      //params+= '&numberOfAdults='+adults;
      //params+= (child != 0) ? '&numberOfChildren='+child : '';
      params+= (codeType != 0 && code != '') ? '&'+codeType+'='+code : '';
      //params+= '&start=availresults';


  console.log('https://www.phgsecure.com/IBE/bookingRedirect.ashx?propertyCode=SINMR' + params);
  window.location.href = 'https://www.phgsecure.com/IBE/bookingRedirect.ashx?propertyCode=SINMR' + params;
};
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
montigo.page.Offers.prototype.on_advance_purchase_button_click = function(event) {
  event['preventDefault']();
  this.book_promo_code('AdvancePurchase');
  

};
/**
 * event handler
 * @param  {object} event
 */
montigo.page.Offers.prototype.on_family_button_click = function(event) {
  event['preventDefault']();
  this.book_promo_code('FAMRETREAT');
};



// make it visible outside.
goog.exportSymbol('montigo.page.Offers', montigo.page.Offers);
