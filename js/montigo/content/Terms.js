goog.provide('montigo.content.Terms');
goog.provide('montigo.content.Terms.Item');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Terms Content constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.content.Terms = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.content.Terms.DEFAULT, options);
  this.element = element;

  this.is_scene_created = false;

  this.item_array = [];
  this.create_items();

  $(window).resize(this.on_window_resize.bind(this));

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.content.Terms, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Terms Content
 * @const {object}
 */
montigo.content.Terms.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Terms Content Event Constant
 * @const
 * @type {string}
 */
montigo.content.Terms.EVENT_01 = '';

/**
 * Terms Content Event Constant
 * @const
 * @type {string}
 */
montigo.content.Terms.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.content.Terms.prototype.create_items = function() {
  var arr = this.element.find('.generic-text-item.scroll-target');

  /**
   * @type {jQuery}
   */
  var element = null;

  /**
   * @type {montigo.content.Terms.Item}
   */
  var item = null;


  for (var i = 0, l = arr.length; i < l; i++) {

    element = $(arr[i])

    item = new montigo.content.Terms.Item({}, element);

    this.item_array[i] = item;
  }

};


/**
 * create_item_scene description
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.content.Terms.prototype.create_item_scene = function(controller_param) {
  /**
   * @type {montigo.content.Terms.Item}
   */
  var item = null;

  for (var i = 0, l = this.item_array.length; i < l; i++) {
    item = this.item_array[i];
    item.create_scene(controller_param);

  }


  this.is_scene_created = true;

  
};






/**
 * sample_method_calls
 */
montigo.content.Terms.prototype.sample_method_calls = function() {
  montigo.content.Terms.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.content.Terms.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.content.Terms.prototype.public_method_01 = function() {};
montigo.content.Terms.prototype.public_method_02 = function() {};
montigo.content.Terms.prototype.public_method_03 = function() {};
montigo.content.Terms.prototype.public_method_04 = function() {};
montigo.content.Terms.prototype.public_method_05 = function() {};
montigo.content.Terms.prototype.public_method_06 = function() {};


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
montigo.content.Terms.prototype.on_window_resize = function(event) {
  /**
   * @type {montigo.content.Terms.Item}
   */
  var item = null;


  if (this.is_scene_created == true) {

    for (var i = 0, l = this.item_array.length; i < l; i++) {
      item = this.item_array[i];
      item.update_duration();
    }
    
  }


  
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Terms.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Terms.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Terms.prototype.on_event_handler_04 = function(event) {
};
















//    ___ _____ _____ __  __ 
//   |_ _|_   _| ____|  \/  |
//    | |  | | |  _| | |\/| |
//    | |  | | | |___| |  | |
//   |___| |_| |_____|_|  |_|
//

/**
 * The Terms Content constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.content.Terms.Item = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.content.Terms.Item.DEFAULT, options);
  this.element = element;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.item_scene = null;

  this.item_height = 0;


  this.id_str = "";

  this.offset = 0;
  var offset_data = this.element.attr('data-offset');

  if (goog.isDefAndNotNull(offset_data)) {
    this.offset = parseFloat(offset_data);
  }


  this.item_value = "" + this.element.attr('data-value');

  this.current_duration = 0;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.id_str = this.element.attr('id');

  console.log('this.id_str: ' + this.id_str);


  console.log('init');
};
goog.inherits(montigo.content.Terms.Item, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Terms Content
 * @const {object}
 */
montigo.content.Terms.Item.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Terms Content Event Constant
 * @const
 * @type {string}
 */
montigo.content.Terms.Item.EVENT_01 = '';

/**
 * Terms Content Event Constant
 * @const
 * @type {string}
 */
montigo.content.Terms.Item.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//




/**
 * sample_method_calls
 */
montigo.content.Terms.Item.prototype.sample_method_calls = function() {
  montigo.content.Terms.Item.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.content.Terms.Item.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * create_item_scene description
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.content.Terms.Item.prototype.create_scene = function(controller_param) {

  this.item_height = this.element.height();

  this.current_duration = this.item_height + 40;

  var header_height = 62;

  //this.item_scene = new ScrollMagic.Scene({triggerElement: '#' + this.id_str, duration: 100, offset:0})
  this.item_scene = new ScrollMagic.Scene({triggerElement: '#' + this.id_str, duration: this.current_duration, offset:this.offset - 62 -20})
    //.addIndicators({name: this.id_str + " scene"})
    .triggerHook(0)
    .addTo(controller_param);


  this.item_scene.on("enter", this.on_item_scene_enter.bind(this));


};

montigo.content.Terms.Item.prototype.update_duration = function() {

  this.item_height = this.element.height();
  
  var temp_duration = this.item_height + 40;

  if(temp_duration != this.current_duration){

    this.current_duration = temp_duration;
    this.item_scene.duration(this.current_duration);

  }

};
montigo.content.Terms.Item.prototype.public_method_03 = function() {};
montigo.content.Terms.Item.prototype.public_method_04 = function() {};
montigo.content.Terms.Item.prototype.public_method_05 = function() {};
montigo.content.Terms.Item.prototype.public_method_06 = function() {};


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
montigo.content.Terms.Item.prototype.on_item_scene_enter = function(event) {
  //console.log('current scene: ' + this.item_value);
  $('.breadcrumb-container .breadcrumb-02').html('' + this.item_value);                                       // shortcut ^__^
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Terms.Item.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Terms.Item.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Terms.Item.prototype.on_event_handler_04 = function(event) {
};

