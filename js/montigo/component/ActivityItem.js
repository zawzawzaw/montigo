goog.provide('montigo.component.ActivityItem');

goog.require('manic.ui.PanelContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Activity Item constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.ActivityItem = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.ActivityItem.DEFAULT, options);
  this.element = element;

  /**
   * @type {manic.ui.PanelContainer}
   */
  this.panel_container = null;

  /**
   * @type {jQuery}
   */
  this.see_more_button = null;

  /**
   * @type {jQuery}
   */
  this.back_button = null;


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  if (manic.IS_MOBILE == true) {

    console.log('this is a mobile panel container')

    this.panel_container = new manic.ui.PanelContainer({
      'resize_height': true
    }, this.element.find('.description-list-panel-container'));

  } else {
    this.panel_container = new manic.ui.PanelContainer({
    }, this.element.find('.description-list-panel-container'));
    
  }


  this.see_more_button = this.element.find('.see-more-cta-button');
  this.see_more_button.click(this.on_see_more_button_click.bind(this));

  this.back_button = this.element.find('.cta-back-button');
  this.back_button.click(this.on_back_button_click.bind(this));

  console.log('init');
};
goog.inherits(montigo.component.ActivityItem, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Activity Item
 * @const {object}
 */
montigo.component.ActivityItem.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Activity Item Event Constant
 * @const
 * @type {string}
 */
montigo.component.ActivityItem.EVENT_01 = '';

/**
 * Activity Item Event Constant
 * @const
 * @type {string}
 */
montigo.component.ActivityItem.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.ActivityItem.prototype.private_method_01 = function() {};
montigo.component.ActivityItem.prototype.private_method_02 = function() {};
montigo.component.ActivityItem.prototype.private_method_03 = function() {};
montigo.component.ActivityItem.prototype.private_method_04 = function() {};
montigo.component.ActivityItem.prototype.private_method_05 = function() {};
montigo.component.ActivityItem.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.ActivityItem.prototype.sample_method_calls = function() {
  montigo.component.ActivityItem.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.ActivityItem.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.component.ActivityItem.prototype.public_method_01 = function() {};
montigo.component.ActivityItem.prototype.public_method_02 = function() {};
montigo.component.ActivityItem.prototype.public_method_03 = function() {};
montigo.component.ActivityItem.prototype.public_method_04 = function() {};
montigo.component.ActivityItem.prototype.public_method_05 = function() {};
montigo.component.ActivityItem.prototype.public_method_06 = function() {};


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
montigo.component.ActivityItem.prototype.on_see_more_button_click = function(event) {

  event['preventDefault']();

  this.panel_container.goto_index(1);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.ActivityItem.prototype.on_back_button_click = function(event) {
  event['preventDefault']();
  this.panel_container.goto_index(0);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.ActivityItem.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.ActivityItem.prototype.on_event_handler_04 = function(event) {
};

