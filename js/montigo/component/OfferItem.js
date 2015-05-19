goog.provide('montigo.component.OfferItem');

goog.require('manic.ui.PanelContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Offer Item constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.OfferItem = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.OfferItem.DEFAULT, options);
  this.element = element;

  /**
   * @type {manic.ui.PanelContainer}
   */
  this.panel_container = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');


  this.learn_more_button = this.element.find('.offer-item-learn-more-button');
  this.back_button = this.element.find('.cta-back-button');
  this.tnc_button = this.element.find('.offer-item-tnc-button');


  this.learn_more_button.click(this.on_learn_more_button_click.bind(this));
  this.back_button.click(this.on_back_button_click.bind(this));
  this.tnc_button.click(this.on_tnc_button_click.bind(this));



  this.panel_container = new manic.ui.PanelContainer({
  }, this.element.find('.offer-list-panel-container'));

};
goog.inherits(montigo.component.OfferItem, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Offer Item
 * @const {object}
 */
montigo.component.OfferItem.DEFAULT = {
  
};

/**
 * Offer Item Event Constant
 * @const
 * @type {string}
 */
montigo.component.OfferItem.EVENT_01 = '';

/**
 * Offer Item Event Constant
 * @const
 * @type {string}
 */
montigo.component.OfferItem.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.OfferItem.prototype.private_method_01 = function() {};
montigo.component.OfferItem.prototype.private_method_02 = function() {};
montigo.component.OfferItem.prototype.private_method_03 = function() {};
montigo.component.OfferItem.prototype.private_method_04 = function() {};
montigo.component.OfferItem.prototype.private_method_05 = function() {};
montigo.component.OfferItem.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.OfferItem.prototype.sample_method_calls = function() {
  montigo.component.OfferItem.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.OfferItem.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.component.OfferItem.prototype.public_method_01 = function() {};
montigo.component.OfferItem.prototype.public_method_02 = function() {};
montigo.component.OfferItem.prototype.public_method_03 = function() {};
montigo.component.OfferItem.prototype.public_method_04 = function() {};
montigo.component.OfferItem.prototype.public_method_05 = function() {};
montigo.component.OfferItem.prototype.public_method_06 = function() {};


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
montigo.component.OfferItem.prototype.on_learn_more_button_click = function(event) {
  event['preventDefault']();

  this.panel_container.goto_index(1);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.OfferItem.prototype.on_tnc_button_click = function(event) {
  event['preventDefault']();
  
  this.panel_container.goto_index(2);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.OfferItem.prototype.on_back_button_click = function(event) {
  event['preventDefault']();

  this.panel_container.goto_index(0);
};



/**
 * event handler
 * @param  {object} event
 */
montigo.component.OfferItem.prototype.on_event_handler_04 = function(event) {
};

