goog.provide('montigo.page.Rooms');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.component.MainImage');
goog.require('montigo.component.ParallaxImage');


goog.require('montigo.component.AccomodationsMap');

goog.require('manic.ui.PanelContainer');



goog.require('montigo.page.Default');

/**
 * The Rooms Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Rooms = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Rooms.DEFAULT, options);

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
   * @type {manic.ui.PanelContainer}
   */
  this.villa_image_panel_container = null;

  /**
   * @type {manic.ui.PanelContainer}
   */
  this.villa_text_panel_container = null;


  /**
   * @type {montigo.component.AccomodationsMap}
   */
  this.map = null;

  

  //this.menu.add_black_gradient();

  

  this.create_scrollmagic();
  this.create_main_image();
  this.create_panel_containers();
  this.create_parallax();
  this.create_map();

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
goog.inherits(montigo.page.Rooms, montigo.page.Default);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Rooms Page
 * @const {object}
 */
montigo.page.Rooms.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Rooms Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Rooms.EVENT_01 = '';

/**
 * Rooms Page Event Constant
 * @const
 * @type {string}
 */
montigo.page.Rooms.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.page.Rooms.prototype.create_scrollmagic = function() {

  this.controller2 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
  this.controller3 = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

};
montigo.page.Rooms.prototype.create_main_image = function() {
  this.main_image = new montigo.component.MainImage({
  },$('#rooms-slider'));



  this.main_image.create_rooms_scene(this.controller);
};
montigo.page.Rooms.prototype.create_parallax = function() {
  this.parallax_01 = new montigo.component.ParallaxImage({
  },$('#rooms-residences-section'));

  //this.parallax_01.create_text_scene_2(this.controller);          // cannot do this yet.
  this.parallax_01.create_parallax_scene(this.controller2);
};

montigo.page.Rooms.prototype.create_panel_containers = function() {

  this.villa_text_panel_container = new manic.ui.PanelContainer({
  }, $('#room-villas-text-panel-container'));
  this.villa_image_panel_container = new manic.ui.PanelContainer({
  }, $('#room-villas-image-panel-container'));


  goog.events.listen(this.villa_image_panel_container, manic.ui.PanelContainer.ON_CHANGE, this.on_villa_image_panel_container_change.bind(this));
  
  

  $('#room-villas-button-container li').click(this.on_rooms_villa_circle_click.bind(this));
  $('#rooms-villas-section .next-panel-button').click(this.on_rooms_villa_next_click.bind(this));
  $('#rooms-villas-section .prev-panel-button').click(this.on_rooms_villa_prev_click.bind(this));

};
montigo.page.Rooms.prototype.create_map = function() {
  this.map = new montigo.component.AccomodationsMap({
  }, $('#rooms-map-interactive'));

  this.map.create_map_scene(this.controller);

  
};
montigo.page.Rooms.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Rooms.prototype.public_method_01 = function() {};
montigo.page.Rooms.prototype.public_method_02 = function() {};
montigo.page.Rooms.prototype.public_method_03 = function() {};
montigo.page.Rooms.prototype.public_method_04 = function() {};
montigo.page.Rooms.prototype.public_method_05 = function() {};
montigo.page.Rooms.prototype.public_method_06 = function() {};


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
montigo.page.Rooms.prototype.on_window_resize = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Rooms.prototype.on_villa_image_panel_container_change = function(event) {

  var target_index = this.villa_image_panel_container.index;
  this.villa_text_panel_container.goto_index(target_index);

  $('#room-villas-button-container li').removeClass('selected');
  $($('#room-villas-button-container li').get(target_index)).addClass('selected');

};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Rooms.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Rooms.prototype.on_event_handler_04 = function(event) {
};


//    __  __  ___  _   _ ____  _____   _______     _______ _   _ _____ ____  
//   |  \/  |/ _ \| | | / ___|| ____| | ____\ \   / / ____| \ | |_   _/ ___| 
//   | |\/| | | | | | | \___ \|  _|   |  _|  \ \ / /|  _| |  \| | | | \___ \ 
//   | |  | | |_| | |_| |___) | |___  | |___  \ V / | |___| |\  | | |  ___) |
//   |_|  |_|\___/ \___/|____/|_____| |_____|  \_/  |_____|_| \_| |_| |____/ 
//                                                                           


/**
 * event handler
 * @param  {object} event
 */
montigo.page.Rooms.prototype.on_rooms_villa_prev_click = function(event) {
  this.villa_image_panel_container.prev();
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Rooms.prototype.on_rooms_villa_next_click = function(event) {
  this.villa_image_panel_container.next();
};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Rooms.prototype.on_rooms_villa_circle_click = function(event){
  var target = $(event['currentTarget']);
  var target_index = target.index();

  this.villa_image_panel_container.goto_index(target_index);
  
}



// make it visible outside.
goog.exportSymbol('montigo.page.Rooms', montigo.page.Rooms);

