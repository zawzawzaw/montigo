goog.provide('montigo.component.EventBookingForm');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Event Booking Form constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.EventBookingForm = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.EventBookingForm.DEFAULT, options);
  this.element = element;

  this.black_bg_element = this.element.find('.black-bg');

  this.body = $('body');
  this.page_wrapper = $('#page-wrapper');

  this.body.append(this.element);

  this.previous_body_scrolltop = 0;

  // create date pickers
  this.element.find('#arrivalDate').glDatePicker({
    'cssName':'menu-booking-calendar',
    'zIndex': 10000,
    'dowNames': [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
    'prevArrow': '<span class="fa fa-chevron-left"></span>',
    'nextArrow': '<span class="fa fa-chevron-right"></span>',
    'selectableDateRange': [ {'from': new Date(), 'to': new Date(1e15) } ],
    'onShow': this.on_arrival_calendar_show.bind(this),
    'onHide': this.on_arrival_calendar_hide.bind(this)
  });

  
  this.element.find('#departureDate').glDatePicker({
    'cssName':'menu-booking-calendar',
    'zIndex': 10000,
    'dowNames': [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
    'prevArrow': '<span class="fa fa-chevron-left"></span>',
    'nextArrow': '<span class="fa fa-chevron-right"></span>',
    'selectableDateRange': [ {'from': new Date(), 'to': new Date(1e15) } ],
    'onShow': this.on_departure_calendar_show.bind(this),
    'onHide': this.on_departure_calendar_hide.bind(this)
  });



  this.arrival_calendar_element = this.element.find('#events-booking-arrivalDate .events-booking-form-calendar-container');
  this.departure_calendar_element = this.element.find('#events-booking-departureDate .events-booking-form-calendar-container');

  
  

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.black_bg_element.click(this.on_black_bg_element_click.bind(this));

  console.log('init');
};
goog.inherits(montigo.component.EventBookingForm, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Event Booking Form
 * @const {object}
 */
montigo.component.EventBookingForm.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Event Booking Form Event Constant
 * @const
 * @type {string}
 */
montigo.component.EventBookingForm.EVENT_01 = '';

/**
 * Event Booking Form Event Constant
 * @const
 * @type {string}
 */
montigo.component.EventBookingForm.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.EventBookingForm.prototype.private_method_01 = function() {};
montigo.component.EventBookingForm.prototype.private_method_02 = function() {};
montigo.component.EventBookingForm.prototype.private_method_03 = function() {};
montigo.component.EventBookingForm.prototype.private_method_04 = function() {};
montigo.component.EventBookingForm.prototype.private_method_05 = function() {};
montigo.component.EventBookingForm.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.EventBookingForm.prototype.sample_method_calls = function() {
  montigo.component.EventBookingForm.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.EventBookingForm.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.component.EventBookingForm.prototype.show = function() {
  //this.element.show(0);

  this.previous_body_scrolltop = this.body.scrollTop();

  this.body.addClass('has-booking-form');

  this.page_wrapper.scrollTop(this.previous_body_scrolltop);
  this.body.scrollTop(0);

  //TweenMax.to(this.element, 0.0, {autoAlpha:0});
  TweenMax.to(this.element, 0.4, {autoAlpha:1, ease: Circ.easeIn});

};
montigo.component.EventBookingForm.prototype.hide = function() {
  //this.element.hide(0);
  TweenMax.to(this.element, 0.2, {autoAlpha:0, ease: Circ.easeIn, onComplete: this.on_hide_complete, onCompleteScope: this});

};
montigo.component.EventBookingForm.prototype.on_hide_complete = function() {
  this.body.removeClass('has-booking-form');

  //TweenMax.to(this.body, 0.2, {scrollTo:{y:this.previous_body_scrolltop}, ease: Sine.easeInOut});
  this.body.scrollTop(this.previous_body_scrolltop)
};
montigo.component.EventBookingForm.prototype.public_method_04 = function() {};
montigo.component.EventBookingForm.prototype.public_method_05 = function() {};
montigo.component.EventBookingForm.prototype.public_method_06 = function() {};


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
montigo.component.EventBookingForm.prototype.on_black_bg_element_click = function(event) {
  event['preventDefault']();
  this.hide();
};

/**
 * event handler
 * @param  {object} calendar
 */
montigo.component.EventBookingForm.prototype.on_arrival_calendar_show = function(calendar) {

  this.arrival_calendar_element.show(0);
  calendar['show']();

};

/**
 * event handler
 * @param  {object} calendar
 */
montigo.component.EventBookingForm.prototype.on_arrival_calendar_hide = function(calendar) {

  this.arrival_calendar_element.hide(0);
  calendar['hide']();
};


/**
 * event handler
 * @param  {object} calendar
 */
montigo.component.EventBookingForm.prototype.on_departure_calendar_show = function(calendar) {

  this.departure_calendar_element.show(0);
  calendar['show']();
};

/**
 * event handler
 * @param  {object} calendar
 */
montigo.component.EventBookingForm.prototype.on_departure_calendar_hide = function(calendar) {

  this.departure_calendar_element.hide(0);
  calendar['hide']();
};





/**
 * event handler
 * @param  {object} event
 */
montigo.component.EventBookingForm.prototype.on_event_handler_04 = function(event) {
};

