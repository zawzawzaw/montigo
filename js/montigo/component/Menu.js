goog.provide('montigo.component.Menu');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Menu constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.Menu = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.Menu.DEFAULT, options);
  this.element = element;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.scene = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.component.Menu, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Menu
 * @const {object}
 */
montigo.component.Menu.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Menu Event Constant
 * @const
 * @type {string}
 */
montigo.component.Menu.EVENT_01 = '';

/**
 * Menu Event Constant
 * @const
 * @type {string}
 */
montigo.component.Menu.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.Menu.prototype.private_method_01 = function() {};
montigo.component.Menu.prototype.private_method_02 = function() {};
montigo.component.Menu.prototype.private_method_03 = function() {};
montigo.component.Menu.prototype.private_method_04 = function() {};
montigo.component.Menu.prototype.private_method_05 = function() {};
montigo.component.Menu.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.Menu.prototype.sample_method_calls = function() {
  montigo.component.Menu.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.Menu.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * create_scene description
 * @param  {object} controller_param
 */
montigo.component.Menu.prototype.create_scene = function(controller_param) {
  var own_id = "#" + this.element.attr('id');

  this.scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold'})                        // #below-page-fold must be found on all pages.
    .triggerHook(0)
    .offset(-62)
    .setClassToggle(own_id, "white-version")
    //.addIndicators({name: "menu scene"}) // add indicators (requires plugin)
    .addTo(controller_param);

};
montigo.component.Menu.prototype.public_method_02 = function() {};
montigo.component.Menu.prototype.public_method_03 = function() {};
montigo.component.Menu.prototype.public_method_04 = function() {};
montigo.component.Menu.prototype.public_method_05 = function() {};
montigo.component.Menu.prototype.public_method_06 = function() {};


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
montigo.component.Menu.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.Menu.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.Menu.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.Menu.prototype.on_event_handler_04 = function(event) {
};

