goog.provide('montigo.page.Rooms');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

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
 * @override
 * @inheritDoc
 */
montigo.page.Rooms.prototype.init_desktop = function() {
  montigo.page.Rooms.superClass_.init_desktop.call(this);

  this.create_panel_containers();
  TweenMax.delayedCall(1.5,this.create_map,[],this);

};

/**
 * @override
 * @inheritDoc
 */
montigo.page.Rooms.prototype.init_mobile = function() {
  montigo.page.Rooms.superClass_.init_mobile.call(this);


  $('#rooms-map-section').prepend($('#rooms-map-text'));
  
};






//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//



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




//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Rooms.prototype.public_method_01 = function() {};


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

