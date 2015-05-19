goog.provide('montigo.page.Dining');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.component.ParallaxImage');

goog.require('manic.ui.PanelContainer');

goog.require('montigo.page.Default');

/**
 * The Dining Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Dining = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Dining.DEFAULT, options);

  /**
   * @type {montigo.component.ParallaxImage}
   */
  this.parallax_01 = null;
  /**
   * @type {montigo.component.ParallaxImage}
   */
  this.parallax_02 = null;

  this.create_parallax();

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.page.Dining, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Dining Page
 * @const {object}
 */
montigo.page.Dining.DEFAULT = {
  'option_01': '',
  'option_02': ''
};


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//

montigo.page.Dining.prototype.create_parallax = function() {

  
  this.parallax_01 = new montigo.component.ParallaxImage({
  },$('#dining-private-dining-section'));

  this.parallax_01.create_text_scene(this.controller);
  this.parallax_01.create_parallax_scene(this.controller2);
  
  
  this.parallax_02 = new montigo.component.ParallaxImage({
  },$('#dining-invilla-dining-section'));

  this.parallax_02.create_text_scene(this.controller);          // temporarily taken out :D
  this.parallax_02.create_parallax_scene(this.controller2);

};

montigo.page.Dining.prototype.private_method_04 = function() {};



//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Dining.prototype.public_method_01 = function() {};
montigo.page.Dining.prototype.public_method_02 = function() {};


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
montigo.page.Dining.prototype.on_window_resize = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Dining.prototype.on_sea_text_button_01_click = function(event) {
  event['preventDefault']();
  this.sea_panel_container.goto_index(1);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Dining.prototype.on_sea_text_button_02_click = function(event) {
  event['preventDefault']();
  this.sea_panel_container.goto_index(0);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Dining.prototype.on_terrestrial_text_button_01_click = function(event) {
  event['preventDefault']();
  this.terra_panel_container.goto_index(1);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Dining.prototype.on_terrestrial_text_button_02_click = function(event) {
  event['preventDefault']();
  this.terra_panel_container.goto_index(0);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Dining.prototype.on_fitness_text_button_01_click = function(event) {
  event['preventDefault']();
  this.fitness_panel_container.goto_index(1);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Dining.prototype.on_fitness_text_button_02_click = function(event) {
  event['preventDefault']();
  this.fitness_panel_container.goto_index(0);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Dining.prototype.on_event_handler_03 = function(event) {
};






// make it visible outside.
goog.exportSymbol('montigo.page.Dining', montigo.page.Dining);

