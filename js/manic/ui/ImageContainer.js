// possible upgrades:
// 1. use Tweenmax(x,y,scale) instead (might make it faster?)

goog.provide('manic.ui.ImageContainer');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The ImageContainer constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.ImageContainer = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.ImageContainer.DEFAULT, options);
  this.element = element;

  this.container_width = 0;
  this.container_height = 0;
  this.container_aspect_ratio = -1;

  this.image_element = this.element.find('img');

  this.current_image = this.image_element.attr('src');

  var load_array = [this.current_image];

  //console.log('bbb: ' + this.options['image_src']);

  if (this.options['image_src'] != '') {
    this.image_element.attr('src',this.options['image_src']);

    this.current_image = this.options['image_src'];
    //console.log('aaa: ' + this.current_image);
    load_array = [this.current_image];
  }

  /**
   * @type {createjs.LoadQueue}
   */
  this.preloader = new createjs.LoadQueue(false, null, true);
  this.preloader.addEventListener('complete', this.on_image_load_complete.bind(this));

  this.preloader.loadManifest(load_array);

  //$([this.image_element.attr('src')]).preloadImages(this.on_image_load_complete.bind(this))

  



  this.original_image_width = 0;
  this.original_image_height = 0;
  this.image_aspect_ratio = -1;

  this.scale_mode = this.options['scale_mode'];
  this.vertical_align = this.options['vertical_align'];
  this.horizontal_align = this.options['horizontal_align'];

  this.element.css({
    'overflow': 'hidden',
    'position': 'relative'
  });

  this.image_element.css({
    'display': 'block',
    'position': 'absolute',
    'top': '0px',
    'left': '0px'
  })

  this.window = $(window);
  this.window_width = 0;
  this.window_height = 0;
  this.window.resize(this.on_window_resize.bind(this));

  this.update_layout();

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  //console.log('init');
};
goog.inherits(manic.ui.ImageContainer, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for ImageContainer
 * @const {object}
 */
manic.ui.ImageContainer.DEFAULT = {
  'image_src': '',
  'scale_mode': 'best_fit',
  'vertical_align': 'center',                       // applies to 'best_fit' & 'show_all'
  'horizontal_align': 'center',
  'has_window_width': true,
  'has_window_height': true,
  'fixed_width': -1,                                // no checking if number or not
  'fixed_height': -1
};


/**
 * ImageContainer Event Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.ON_IMAGE_LOAD_COMPLETE = 'on_image_load_complete';




/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.CENTER = 'center';





/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.BEST_FIT = 'best_fit';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.SHOW_ALL = 'show_all';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.STRETCH = 'stretch';



/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.TOP = 'top';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.BOTTOM = 'bottom';



/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.LEFT = 'left';

/**
 * ImageContainer Constant
 * @const
 * @type {string}
 */
manic.ui.ImageContainer.RIGHT = 'right';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.ImageContainer.prototype.update_layout = function() {

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
  if(this.scale_mode == manic.ui.ImageContainer.STRETCH) {
    this.use_scale_mode_stretch();
  } else if(this.scale_mode == manic.ui.ImageContainer.SHOW_ALL) {
    this.use_scale_mode_show_all();
  } else if(this.scale_mode == manic.ui.ImageContainer.BEST_FIT) {
    this.use_scale_mode_best_fit();
  }


  //this.options['vertical_align'] == manic.ui.ImageContainer.TOP
};
manic.ui.ImageContainer.prototype.use_scale_mode_stretch = function() {
  var target_width = Math.floor(this.container_width) + 1;
  var target_height = Math.floor(this.container_height) + 1;

  this.image_element.css({
    'top': '0px',
    'left': '0px',
    'width': target_width + 'px',
    'height': target_height + 'px'
  });

};
manic.ui.ImageContainer.prototype.use_scale_mode_show_all = function() {

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
    if (this.horizontal_align == manic.ui.ImageContainer.LEFT) {
      target_x = 0;
    } else if (this.horizontal_align == manic.ui.ImageContainer.CENTER) {
      target_x = (this.container_width - target_width) / 2;
    } else if (this.horizontal_align == manic.ui.ImageContainer.RIGHT) {
      target_x = this.container_width - target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.ImageContainer.TOP){
      target_y = 0;
    } else if(this.vertical_align == manic.ui.ImageContainer.CENTER){
      target_y = (this.container_height - target_height) / 2;
    } else if(this.vertical_align == manic.ui.ImageContainer.BOTTOM){
      target_y = this.container_height - target_height;
    }

    // update css of image
    this.image_element.css({
      'top': target_y + 'px',
      'left': target_x + 'px',
      'width': target_width + 'px',
      'height': target_height + 'px'
    });

  } // end if aspect ratio

};
manic.ui.ImageContainer.prototype.use_scale_mode_best_fit = function() {
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
    if (this.horizontal_align == manic.ui.ImageContainer.LEFT) {
      target_x = 0;
    } else if (this.horizontal_align == manic.ui.ImageContainer.CENTER) {
      target_x = (this.container_width - target_width) / 2;
    } else if (this.horizontal_align == manic.ui.ImageContainer.RIGHT) {
      target_x = this.container_width - target_width;
    }

    // set target y
    if(this.vertical_align == manic.ui.ImageContainer.TOP){
      target_y = 0;
    } else if(this.vertical_align == manic.ui.ImageContainer.CENTER){
      target_y = (this.container_height - target_height) / 2;
    } else if(this.vertical_align == manic.ui.ImageContainer.BOTTOM){
      target_y = this.container_height - target_height;
    }

    // update css of image
    this.image_element.css({
      'top': target_y + 'px',
      'left': target_x + 'px',
      'width': target_width + 'px',
      'height': target_height + 'px'
    });

  } // end if aspect ratio
};
manic.ui.ImageContainer.prototype.private_method_05 = function() {};
manic.ui.ImageContainer.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.ImageContainer.prototype.sample_method_calls = function() {
  manic.ui.ImageContainer.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.ImageContainer.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * set_image_src description
 * @param {string} str_param url of the image to replace current one
 */
manic.ui.ImageContainer.prototype.set_image_src = function(str_param) {
  this.image_element.attr('src',str_param)
  //$([str_param]).preloadImages(this.on_image_load_complete.bind(this));
  
  
    
  this.current_image = str_param;
  var load_array = [this.current_image];

  this.preloader.loadManifest(load_array);
};
manic.ui.ImageContainer.prototype.public_method_02 = function() {};
manic.ui.ImageContainer.prototype.public_method_03 = function() {};
manic.ui.ImageContainer.prototype.public_method_04 = function() {};
manic.ui.ImageContainer.prototype.public_method_05 = function() {};
manic.ui.ImageContainer.prototype.public_method_06 = function() {};


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
manic.ui.ImageContainer.prototype.on_window_resize = function(event) {
  

  this.update_layout();

  
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.ImageContainer.prototype.on_image_load_complete = function(event) {

  console.log('on_image_load_complete');
  //console.log(this.element);

  var loaded_image_element = $(this.preloader.getResult(this.current_image));



  //var temp_image = 

  // if you need a cross browser compatible solution, try this
  // http://stackoverflow.com/questions/1944280/determine-original-size-of-image-cross-browser
  

  //this.original_image_width = this.image_element[0].naturalWidth;
  //this.original_image_height = this.image_element[0].naturalHeight;
  
  //console.log(this.element)
  //console.log('this.current_image: ' + this.current_image);
  //console.log(this.current_image)
  
  //console.log('loaded_image_element');
  //console.log(loaded_image_element);
  //console.log('loaded_image_element 0');
  //console.log(loaded_image_element[0]);

  if(loaded_image_element.length != 0){
    //console.log('got here.');
    this.original_image_width = loaded_image_element[0]['naturalWidth'];
    this.original_image_height = loaded_image_element[0]['naturalHeight'];

    this.image_aspect_ratio = this.original_image_width / this.original_image_height;

    //console.log('this.original_image_width: ' + this.original_image_width);
    //console.log('this.original_image_height: ' + this.original_image_height);
    //console.log('this.image_aspect_ratio: ' + this.image_aspect_ratio);


    this.update_layout();

    this.dispatchEvent(new goog.events.Event(manic.ui.ImageContainer.ON_IMAGE_LOAD_COMPLETE));
  }

};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.ImageContainer.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.ImageContainer.prototype.on_event_handler_04 = function(event) {
};

