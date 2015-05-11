// Proportional text container

goog.provide('manic.ui.TextContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The TextContainer constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.TextContainer = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.TextContainer.DEFAULT, options);
  this.element = element;

  this.container_width = 0;
  this.container_height = 0;
  this.container_aspect_ratio = -1;

  this.text_element = this.element.find('.text-container');
  this.text_element_element = this.element.find('.text-container .text');

  this.original_image_width = 0;
  this.original_image_height = 0;
  this.image_aspect_ratio = -1;

  this.scale_mode = this.options['scale_mode'];
  this.vertical_align = this.options['vertical_align'];
  this.horizontal_align = this.options['horizontal_align'];

  this.max_x = this.options['max_x'];

  this.image_scale_x = 1;
  this.image_scale_y = 1;

  this.element.css({
    'overflow': 'hidden',
    'position': 'relative'
  });

  this.text_element.css({
    'display': 'block',
    'position': 'absolute',
    'top': '0px',
    'left': '0px'
  });

  this.text_element_element.css({
    'display': 'block',
    'position': 'absolute',
    'top': '0px',
    'left': '0px'
  });

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //



  this.original_image_width = parseInt( '' + this.text_element.attr('data-width'));                      // get values from element's attributes.
  this.original_image_height = parseInt( '' + this.text_element.attr('data-height'));
  this.image_aspect_ratio = this.original_image_width / this.original_image_height;


  this.text_x = parseInt( '' + this.text_element_element.attr('data-x'));
  this.text_y = parseInt( '' + this.text_element_element.attr('data-y'));
  this.text_width = parseInt( '' + this.text_element_element.attr('data-width'));
  this.text_height = parseInt( '' + this.text_element_element.attr('data-height'));

  console.log('this.text_x: ' + this.text_x);
  console.log('this.text_y: ' + this.text_y);
  //console.log('this.text_x: ' + this.text_x);
  //console.log('this.text_x: ' + this.text_x);

  this.window = $(window);
  this.window_width = 0;
  this.window_height = 0;
  this.window.resize(this.on_window_resize.bind(this));

  this.update_layout();

  console.log('init');
};
goog.inherits(manic.ui.TextContainer, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for TextContainer
 * @const {object}
 */
manic.ui.TextContainer.DEFAULT = {
  'scale_mode': 'best_fit',
  'vertical_align': 'center',                       // applies to 'best_fit' & 'show_all'
  'horizontal_align': 'center',
  'has_window_width': true,
  'has_window_height': true,
  'fixed_width': -1,                                // no checking if number or not
  'fixed_height': -1,

  'max_x': 0
  //'max_x': (1280 - 60)
};

/**
 * TextContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextContainer.CENTER = 'center';


/**
 * TextContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextContainer.BEST_FIT = 'best_fit';

/**
 * TextContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextContainer.SHOW_ALL = 'show_all';

/**
 * TextContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextContainer.STRETCH = 'stretch';



/**
 * TextContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextContainer.TOP = 'top';

/**
 * TextContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextContainer.BOTTOM = 'bottom';



/**
 * TextContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextContainer.LEFT = 'left';

/**
 * TextContainer Constant
 * @const
 * @type {string}
 */
manic.ui.TextContainer.RIGHT = 'right';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.TextContainer.prototype.update_layout = function() {
  this.window_width = this.window.width();
  this.window_height = this.window.height();

  // get image width
  if (this.options['has_window_width']) {
    this.container_width = this.window_width;
    this.element.width(this.container_width);
  } else if (this.options['fixed_width'] != -1) {
    this.container_width = this.options['fixed_width'];
    this.element.width(this.container_width);
  } else{
    this.container_width = this.element.width();
  }

  // get image height
  if (this.options['has_window_height']) {
    this.container_height = this.window_height;
    this.element.height(this.container_height);
  } else if (this.options['fixed_height'] != -1) {
    this.container_height = this.options['fixed_height'];
    this.element.height(this.container_height);
  } else{
    this.container_height = this.element.height();
  }

  this.container_aspect_ratio = this.container_width / this.container_height;



  // scale the image
  if(this.scale_mode == manic.ui.TextContainer.STRETCH) {
    this.use_scale_mode_stretch();
  } else if(this.scale_mode == manic.ui.TextContainer.SHOW_ALL) {
    this.use_scale_mode_show_all();
  } else if(this.scale_mode == manic.ui.TextContainer.BEST_FIT) {
    this.use_scale_mode_best_fit();
  }




  // update the text based on current text width and height 
  // and current image scale
  
  var center_x = (this.text_x / this.original_image_width) * (this.image_scale_x * this.original_image_width);
  var center_y = (this.text_y / this.original_image_height) * (this.image_scale_y * this.original_image_height);

  var target_text_x = center_x - this.text_element_element.width() / 2;
  var target_text_y = center_y - this.text_element_element.height() / 2;


  if(this.max_x != 0){
    var relative_min_x = (this.container_width - this.max_x) / 2;
    var relative_max_x = this.container_width - (this.container_width - this.max_x) / 2 - this.text_element_element.width();

    target_text_x = target_text_x < relative_min_x ? relative_min_x : target_text_x;
    target_text_x = target_text_x > relative_max_x ? relative_max_x : target_text_x;
  }

  target_text_x = Math.round(target_text_x);
  target_text_y = Math.round(target_text_y);
  

  this.text_element_element.css({
    'top': target_text_y + 'px',
    'left': target_text_x + 'px'
  });

};
manic.ui.TextContainer.prototype.use_scale_mode_stretch = function() {
  var target_width = Math.floor(this.container_width) + 1;
  var target_height = Math.floor(this.container_height) + 1;


  this.image_scale_x = target_width / this.original_image_width;
  this.image_scale_y = target_height / this.original_image_height;

  this.text_element.css({
    'top': '0px',
    'left': '0px',
    'width': target_width + 'px',
    'height': target_height + 'px'
  });


  


  

};
manic.ui.TextContainer.prototype.use_scale_mode_show_all = function() {

  var target_width = 0;
  var target_height = 0;
  var target_x = 0;
  var target_y = 0;

  if (this.image_aspect_ratio != -1) {

    // set target width and height
    if (this.container_aspect_ratio > this.image_aspect_ratio) {
      target_height = this.container_height
      target_width = target_height * this.image_aspect_ratio;
    } else {
      target_width = this.container_width
      target_height = target_width / this.image_aspect_ratio;
    }

    // set target x
    if (this.horizontal_align == manic.ui.TextContainer.LEFT) {
      target_x = 0;
    } else if (this.horizontal_align == manic.ui.TextContainer.CENTER) {
      target_x = (this.container_width - target_width) / 2;
    } else if (this.horizontal_align == manic.ui.TextContainer.RIGHT) {
      target_x = this.container_width - target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.TextContainer.TOP){
      target_y = 0;
    } else if(this.vertical_align == manic.ui.TextContainer.CENTER){
      target_y = (this.container_height - target_height) / 2;
    } else if(this.vertical_align == manic.ui.TextContainer.BOTTOM){
      target_y = this.container_height - target_height;
    }

    this.image_scale_x = target_width / this.original_image_width;
    this.image_scale_y = target_height / this.original_image_height;


    target_x = Math.round(target_x);
    target_y = Math.round(target_y);


    // update css of image
    this.text_element.css({
      'top': target_y + 'px',
      'left': target_x + 'px',
      'width': target_width + 'px',
      'height': target_height + 'px'
    });

  } // end if aspect ratio

};
manic.ui.TextContainer.prototype.use_scale_mode_best_fit = function() {
  var target_width = 0;
  var target_height = 0;
  var target_x = 0;
  var target_y = 0;

  if (this.image_aspect_ratio != -1) {

    // set target width and height
    if (this.container_aspect_ratio > this.image_aspect_ratio) {
      target_width = this.container_width
      target_height = target_width / this.image_aspect_ratio;
    } else {
      target_height = this.container_height
      target_width = target_height * this.image_aspect_ratio;
    }

    // set target x
    if (this.horizontal_align == manic.ui.TextContainer.LEFT) {
      target_x = 0;
    } else if (this.horizontal_align == manic.ui.TextContainer.CENTER) {
      target_x = (this.container_width - target_width) / 2;
    } else if (this.horizontal_align == manic.ui.TextContainer.RIGHT) {
      target_x = this.container_width - target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.TextContainer.TOP){
      target_y = 0;
    } else if(this.vertical_align == manic.ui.TextContainer.CENTER){
      target_y = (this.container_height - target_height) / 2;
    } else if(this.vertical_align == manic.ui.TextContainer.BOTTOM){
      target_y = this.container_height - target_height;
    }

    this.image_scale_x = target_width / this.original_image_width;
    this.image_scale_y = target_height / this.original_image_height;

    target_x = Math.round(target_x);
    target_y = Math.round(target_y);

    // update css of image
    this.text_element.css({
      'top': target_y + 'px',
      'left': target_x + 'px',
      'width': target_width + 'px',
      'height': target_height + 'px'
    });

  } // end if aspect ratio

};
manic.ui.TextContainer.prototype.private_method_05 = function() {};
manic.ui.TextContainer.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.TextContainer.prototype.sample_method_calls = function() {
  manic.ui.TextContainer.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.TextContainer.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.TextContainer.prototype.public_method_01 = function() {};
manic.ui.TextContainer.prototype.public_method_02 = function() {};
manic.ui.TextContainer.prototype.public_method_03 = function() {};
manic.ui.TextContainer.prototype.public_method_04 = function() {};
manic.ui.TextContainer.prototype.public_method_05 = function() {};
manic.ui.TextContainer.prototype.public_method_06 = function() {};


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
manic.ui.TextContainer.prototype.on_window_resize = function(event) {
  this.update_layout();

};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.TextContainer.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.TextContainer.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.TextContainer.prototype.on_event_handler_04 = function(event) {
};

