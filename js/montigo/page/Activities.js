goog.provide('montigo.page.Activities');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.component.MainImage');
goog.require('montigo.component.ParallaxImage');

goog.require('manic.ui.PanelContainer');

goog.require('montigo.page.Default');

/**
 * The Activities Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Activities = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Activities.DEFAULT, options);

  /**
   * @type {ScrollMagic.Controller}
   */
  this.controller2 = null;    // for parallax effects
  /**
   * @type {ScrollMagic.Controller}
   */
  this.controller3 = null;    // for parallax effects

  /**
   * @type {montigo.component.MainImage}
   */
  this.main_image = null;
  /**
   * @type {montigo.component.ParallaxImage}
   */
  this.parallax_01 = null;
  /**
   * @type {montigo.component.ParallaxImage}
   */
  this.parallax_02 = null;

  /**
   * @type {manic.ui.PanelContainer}
   */
  this.sea_panel_container = null;

  /**
   * @type {manic.ui.PanelContainer}
   */
  this.terra_panel_container = null;

  /**
   * @type {manic.ui.PanelContainer}
   */
  this.fitness_panel_container = null;



  //this.menu.add_black_gradient();


  this.create_scrollmagic();
  this.create_main_image();
  this.create_panel_containers();
  this.create_parallax();

  this.window = $(window);
  this.window.resize(this.on_window_resize.bind(this));
  this.on_window_resize(null);

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.page.Activities, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Activities Page
 * @const {object}
 */
montigo.page.Activities.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Activities Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Activities.EVENT_01 = '';

/**
 * Activities Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Activities.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.page.Activities.prototype.create_scrollmagic = function() {

  this.controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  this.controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

};
montigo.page.Activities.prototype.create_main_image = function() {
  this.main_image = new montigo.component.MainImage({
  },$('#activities-slider'));

  this.main_image.create_activities_scene(this.controller);
};
montigo.page.Activities.prototype.create_parallax = function() {

  
  this.parallax_01 = new montigo.component.ParallaxImage({
  },$('#activities-parallax-01'));

  //this.parallax_01.create_text_scene_2(this.controller);
  this.parallax_01.create_parallax_scene(this.controller2);
  


  /*
  this.parallax_02 = new montigo.component.ParallaxImage({
  },$('#activities-parallax-02'));

  this.parallax_02.create_text_scene_2(this.controller);
  this.parallax_02.create_parallax_scene(this.controller2);
  */

};

montigo.page.Activities.prototype.create_panel_containers = function() {

  this.sea_panel_container = new manic.ui.PanelContainer({
  }, $('#activities-sea-text-panel-container'));

  $('#activities-sea-text-button-01').click(this.on_sea_text_button_01_click.bind(this));
  $('#activities-sea-text-button-02').click(this.on_sea_text_button_02_click.bind(this));

  this.terra_panel_container = new manic.ui.PanelContainer({
  }, $('#activities-terrestrial-text-panel-container'));

  $('#activities-terrestrial-text-button-01').click(this.on_terrestrial_text_button_01_click.bind(this));
  $('#activities-terrestrial-text-button-02').click(this.on_terrestrial_text_button_02_click.bind(this));

  this.fitness_panel_container = new manic.ui.PanelContainer({
  }, $('#activities-fitness-text-panel-container'));

  $('#activities-fitness-text-button-01').click(this.on_fitness_text_button_01_click.bind(this));
  $('#activities-fitness-text-button-02').click(this.on_fitness_text_button_02_click.bind(this));

};

montigo.page.Activities.prototype.private_method_04 = function() {};
montigo.page.Activities.prototype.private_method_05 = function() {};
montigo.page.Activities.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.page.Activities.prototype.sample_method_calls = function() {
  montigo.page.Activities.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.page.Activities.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Activities.prototype.public_method_01 = function() {};
montigo.page.Activities.prototype.public_method_02 = function() {};
montigo.page.Activities.prototype.public_method_03 = function() {};
montigo.page.Activities.prototype.public_method_04 = function() {};
montigo.page.Activities.prototype.public_method_05 = function() {};
montigo.page.Activities.prototype.public_method_06 = function() {};


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
montigo.page.Activities.prototype.on_window_resize = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_sea_text_button_01_click = function(event) {
  event['preventDefault']();
  this.sea_panel_container.goto_index(1);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_sea_text_button_02_click = function(event) {
  event['preventDefault']();
  this.sea_panel_container.goto_index(0);
};


/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_terrestrial_text_button_01_click = function(event) {
  event['preventDefault']();
  this.terra_panel_container.goto_index(1);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_terrestrial_text_button_02_click = function(event) {
  event['preventDefault']();
  this.terra_panel_container.goto_index(0);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_fitness_text_button_01_click = function(event) {
  event['preventDefault']();
  this.fitness_panel_container.goto_index(1);
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_fitness_text_button_02_click = function(event) {
  event['preventDefault']();
  this.fitness_panel_container.goto_index(0);
};



/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Activities.prototype.on_event_handler_04 = function(event) {
};






// make it visible outside.
goog.exportSymbol('montigo.page.Activities', montigo.page.Activities);

