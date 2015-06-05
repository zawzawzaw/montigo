goog.provide('montigo.page.Events');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.component.ParallaxImage');

goog.require('montigo.component.EventBookingForm');

goog.require('montigo.page.Default');

/**
 * The Events Page constructor
 * @inheritDoc
 * @constructor
 * @extends {montigo.page.Default}
 */
montigo.page.Events = function(options, element) {
  montigo.page.Default.call(this, options);
  this.options = $.extend(this.options, montigo.page.Events.DEFAULT, options);

  
  /**
   * @type {montigo.component.EventBookingForm}
   */
  this.booking_form = null;
  
  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.page.Events, montigo.page.Default);




/**
 * default options for Events Page
 * @const {object}
 */
montigo.page.Events.DEFAULT = {
  'option_01': ''
};


//    ___ _   _ ___ _____ 
//   |_ _| \ | |_ _|_   _|
//    | ||  \| || |  | |  
//    | || |\  || |  | |  
//   |___|_| \_|___| |_|  
//                        



/**
 * @override
 * @inheritDoc
 */
montigo.page.Events.prototype.init_desktop = function() {
  montigo.page.Events.superClass_.init_desktop.call(this);

  this.create_event_booking_form();
  this.create_event_booking_buttons();

  console.log('this has been called')

};

/**
 * @override
 * @inheritDoc
 */
montigo.page.Events.prototype.init_mobile = function() {
  montigo.page.Events.superClass_.init_mobile.call(this);

  this.create_event_booking_form();
  this.create_event_booking_buttons();
  
};



//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//




montigo.page.Events.prototype.create_event_booking_form = function() {
  this.booking_form = new montigo.component.EventBookingForm({}, $('#events-booking-form-container'));


  console.log('this.booking_form')
  console.log(this.booking_form)

};
montigo.page.Events.prototype.create_event_booking_buttons = function() {
  var arr = $('.event-booking-cta-button');


  console.log('>.asd f.asdf. ads.');
  console.log(this);


  /**
   * @type {jQuery}
   */
  var item = null;

  for (var i = 0, l = arr.length; i < l; i++) {
    item = $(arr[i]);
    item.click(this.on_event_booking_button_click.bind(this));
  }



  var arr = $('.floor-plan-cta-button');
  for (var i = 0, l = arr.length; i < l; i++) {
    item = $(arr[i]);
    item.click(this.on_floor_plan_button_click.bind(this));
  }  

  
  
};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.page.Events.prototype.public_method_01 = function() {};
montigo.page.Events.prototype.public_method_02 = function() {};


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
montigo.page.Events.prototype.on_event_handler_03 = function(event) {
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
montigo.page.Events.prototype.on_event_booking_button_click = function(event){
  event['preventDefault']();
    
  console.log('this');
  console.log(this)
  console.log('this.booking_form')
  console.log(this.booking_form)
  this.booking_form.show();

};

/**
 * event handler
 * @param  {object} event
 */
montigo.page.Events.prototype.on_floor_plan_button_click = function(event){
  event['preventDefault']();

  console.log('on_floor_plan_button_click');
  
  var target_y = $('#events-space-section').position()['top'] - 62;

  //TweenMax.to($('body'), 1.5, {scrollTo:{y:target_y}, ease: Sine.easeInOut});
  TweenMax.to($(window), 1.5, {scrollTo:{y:target_y}, ease: Sine.easeInOut});
  

};




// make it visible outside.
goog.exportSymbol('montigo.page.Events', montigo.page.Events);
