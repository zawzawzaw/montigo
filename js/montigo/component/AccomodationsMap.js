goog.provide('montigo.component.AccomodationsMap');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.util.JsonParser');

/**
 * The Accomodations Map constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.AccomodationsMap = function(options, element) {
  // if has parent
  //goog.events.EventTarget.call(this, options, element);
  //this.options = $.extend(this.options, montigo.component.AccomodationsMap.DEFAULT, options);

  // else
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.AccomodationsMap.DEFAULT, options);
  this.element = element;


  this.json_parser = new manic.util.JsonParser({'json': 'json/accomodation_map.json'});
  goog.events.listen(this.json_parser,manic.util.JsonParser.ON_COMPLETE, this.on_json_parser_complete.bind(this));


  /**
   * @type {ScrollMagic.Scene}
   */
  this.room_scene = null;

  this.has_started = false;
  this.has_created = false;

  this.stage = null;



  this.json_parser.start_load();

  

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.component.AccomodationsMap, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Accomodations Map
 * @const {object}
 */
montigo.component.AccomodationsMap.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Accomodations Map Event Constant
 * @const
 * @type {string}
 */
montigo.component.AccomodationsMap.EVENT_01 = '';

/**
 * Accomodations Map Event Constant
 * @const
 * @type {object}
 */
montigo.component.AccomodationsMap.ANIMATION_DATA = 'ASDF';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.AccomodationsMap.prototype.private_method_01 = function() {};
montigo.component.AccomodationsMap.prototype.private_method_02 = function() {};
montigo.component.AccomodationsMap.prototype.private_method_03 = function() {};
montigo.component.AccomodationsMap.prototype.private_method_04 = function() {};
montigo.component.AccomodationsMap.prototype.private_method_05 = function() {};
montigo.component.AccomodationsMap.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.AccomodationsMap.prototype.sample_method_calls = function() {
  montigo.component.AccomodationsMap.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.AccomodationsMap.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * create_map_scene description
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.component.AccomodationsMap.prototype.create_map_scene = function(controller_param) {

  var trigger_element_str = "#" + this.element.attr('id');
  
  this.room_scene = new ScrollMagic.Scene({offset: -162, triggerElement: trigger_element_str, duration: 300})   
    .triggerHook(0.0)
    //.setTween(this.text_animation)
    .addTo(controller_param);

    //scene.on("change update progress start end enter leave", callback);
  

  this.room_scene.on("start", this.on_room_scene_start.bind(this));

};


montigo.component.AccomodationsMap.prototype.start_animation = function() {

  if (this.has_started == true && 
    this.json_parser.has_loaded == true && 
    this.has_created == false) {


    this.has_created = true;  // do this once only

    this.stage = new swiffy.Stage( this.element[0], this.json_parser.data_array, {});
    this.stage['start']();
  }
  
  

};
montigo.component.AccomodationsMap.prototype.public_method_03 = function() {};
montigo.component.AccomodationsMap.prototype.public_method_04 = function() {};
montigo.component.AccomodationsMap.prototype.public_method_05 = function() {};
montigo.component.AccomodationsMap.prototype.public_method_06 = function() {};


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
montigo.component.AccomodationsMap.prototype.on_json_parser_complete = function(event) {
  console.log('on_json_parser_complete');
  console.log(this.json_parser.data_array);


  this.start_animation();
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.AccomodationsMap.prototype.on_room_scene_start = function(event) {
  //console.log('on_room_scene_start');
  
  this.has_started = true;


  this.start_animation();

  

};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.AccomodationsMap.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.AccomodationsMap.prototype.on_event_handler_04 = function(event) {
};

