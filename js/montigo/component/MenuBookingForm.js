goog.provide('montigo.component.MenuBookingForm');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Menu Booking Form constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.MenuBookingForm = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.MenuBookingForm.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.arrival_input_element = this.element.find('#arrivalDate');
  this.departure_input_element = this.element.find('#departureDate');
  this.nights_input_element = this.element.find('#nights');

  /**
   * @type {Date}
   */
  this.arrival_date = null;

  /**
   * @type {Date}
   */
  this.departure_date = null;



  this.booking_form = this.element.find('#menu-booking-form');
  this.booking_form.submit(this.on_form_submit.bind(this));

  //this.calendar_container = this.element.find('#menu-booking-form-calendar-container');
  this.calendar_container = $('#menu-booking-form-calendar-container');                               // temporary..


  this.booking_form_submit_button = this.element.find('#menu-booking-form-submit-button');
  this.booking_form_cancel_button = this.element.find('#menu-booking-form-cancel-button');
  
  this.booking_form_submit_button.click(this.on_booking_form_submit_button_click.bind(this));
  this.booking_form_cancel_button.click(this.on_booking_form_cancel_button_click.bind(this));


  


  this.create_date_picker();
  this.create_dropdown();


  console.log('init');
};
goog.inherits(montigo.component.MenuBookingForm, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Menu Booking Form
 * @const {object}
 */
montigo.component.MenuBookingForm.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Menu Booking Form Event Constant
 * @const
 * @type {string}
 */
montigo.component.MenuBookingForm.EVENT_01 = '';

/**
 * Menu Booking Form Event Constant
 * @const
 * @type {string}
 */
montigo.component.MenuBookingForm.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.MenuBookingForm.prototype.create_date_picker = function() {

  

  // create date picker
  this.arrival_datepicker = this.arrival_input_element.glDatePicker({
    'cssName':'menu-booking-calendar',
    'zIndex': 10000,
    'dowNames': [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
    'prevArrow': '<span class="fa fa-chevron-left"></span>',
    'nextArrow': '<span class="fa fa-chevron-right"></span>',
    'selectableDateRange': [ {'from': new Date(), 'to': new Date(1e15) } ],
    'onShow': this.on_calendar_show.bind(this),
    'onHide': this.on_calendar_hide.bind(this),
    'onClick': this.on_arrival_select.bind(this)
  }).glDatePicker(true);

  

  this.departure_datepicker = this.departure_input_element.glDatePicker({                                                  // do the same to select handler at the bottom
    'cssName':'menu-booking-calendar',
    'zIndex': 10000,
    'dowNames': [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
    'prevArrow': '<span class="fa fa-chevron-left"></span>',
    'nextArrow': '<span class="fa fa-chevron-right"></span>',
    'selectableDateRange': [ {'from': new Date(), 'to': new Date(1e15) } ],
    'onShow': this.on_calendar_show.bind(this),
    'onHide': this.on_calendar_hide.bind(this),
    'onClick': this.on_departure_select.bind(this)
  }).glDatePicker(true);
};
montigo.component.MenuBookingForm.prototype.create_dropdown = function() {
  // create dropdowns
  var arr = this.element.find('.manic-dropdown');
  var item = null;
  var dropdown = null;

  for (var i = 0, l = arr.length ; i < l; i++) {
    item = $(arr[i]);
    dropdown = new manic.ui.DropDown({},item);
  }

};
montigo.component.MenuBookingForm.prototype.private_method_03 = function() {};
montigo.component.MenuBookingForm.prototype.private_method_04 = function() {};
montigo.component.MenuBookingForm.prototype.private_method_05 = function() {};
montigo.component.MenuBookingForm.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.MenuBookingForm.prototype.sample_method_calls = function() {
  montigo.component.MenuBookingForm.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.MenuBookingForm.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.component.MenuBookingForm.prototype.show = function() {
  this.element.show(0);
};
montigo.component.MenuBookingForm.prototype.hide = function() {
  this.element.hide(0);
  this.calendar_container.hide(0);
};
montigo.component.MenuBookingForm.prototype.update_night_value = function() {

  // copied from current website form

  var oneDay = 1000 * 60 * 60 * 24;
  var noOfNights = ( this.departure_date.getTime() - this.arrival_date.getTime() ) / oneDay;

  if( !isNaN(noOfNights) )
  {

    this.nights_input_element.val(noOfNights);
  }

};
montigo.component.MenuBookingForm.prototype.public_method_04 = function() {};
montigo.component.MenuBookingForm.prototype.public_method_05 = function() {};
montigo.component.MenuBookingForm.prototype.public_method_06 = function() {};


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
montigo.component.MenuBookingForm.prototype.on_event_handler_01 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MenuBookingForm.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MenuBookingForm.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MenuBookingForm.prototype.on_event_handler_04 = function(event) {
};


//     ____    _    _     _____ _   _ ____    _    ____    _______     _______ _   _ _____ ____  
//    / ___|  / \  | |   | ____| \ | |  _ \  / \  |  _ \  | ____\ \   / / ____| \ | |_   _/ ___| 
//   | |     / _ \ | |   |  _| |  \| | | | |/ _ \ | |_) | |  _|  \ \ / /|  _| |  \| | | | \___ \ 
//   | |___ / ___ \| |___| |___| |\  | |_| / ___ \|  _ <  | |___  \ V / | |___| |\  | | |  ___) |
//    \____/_/   \_\_____|_____|_| \_|____/_/   \_\_| \_\ |_____|  \_/  |_____|_| \_| |_| |____/ 
//                                                                                               


/**
 * on_calendar_show
 * @param  {object} calendar
 */
montigo.component.MenuBookingForm.prototype.on_calendar_show = function(calendar) {

  this.calendar_container.show(0);
  calendar['show']();
};

/**
 * on_calendar_hide
 * @param  {object} calendar
 */
montigo.component.MenuBookingForm.prototype.on_calendar_hide = function(calendar) {

  this.calendar_container.hide(0);
  calendar['hide']();
};


/**
 * on_arrival_select
 * @param  {jquery} el   The input element the date picker is bound to
 * @param  {jquery} cell The cell on the calendar that triggered this event
 * @param  {Date} date The date associated with the cell
 * @param  {Date} data Special data associated with the cell (if available, otherwise, null)
 */
montigo.component.MenuBookingForm.prototype.on_arrival_select = function(el, cell, date, data) {

  this.arrival_date = date;
  console.log('this.arrival_date: ' + this.arrival_date);

  el.val(date.toLocaleDateString()); // needed by the component

  this.departure_datepicker['options']['selectableDateRange'] = [ {'from': date, 'to': new Date(1e15) } ]
  this.departure_datepicker['render']();


  if (goog.isDefAndNotNull(this.arrival_date) && goog.isDefAndNotNull(this.departure_date)) {
    if (this.arrival_date.getTime() > this.departure_date.getTime()){
      this.departure_input_element.val('');
      this.nights_input_element.val(1);
    }
  }

  if (this.arrival_input_element.val() != '' && this.departure_input_element.val() != '') {
    this.update_night_value();
  }
    

};


/**
 * on_arrival_select
 * @param  {jquery} el   The input element the date picker is bound to
 * @param  {jquery} cell The cell on the calendar that triggered this event
 * @param  {Date} date The date associated with the cell
 * @param  {Date} data Special data associated with the cell (if available, otherwise, null)
 */
montigo.component.MenuBookingForm.prototype.on_departure_select = function(el, cell, date, data) {

  this.departure_date = date;
  console.log('this.departure_date: ' + this.departure_date);

  el.val(date.toLocaleDateString());

  if (this.arrival_input_element.val() != '' && this.departure_input_element.val() != '') {
    this.update_night_value();
  }
};



//    _____ ___  ____  __  __   _______     _______ _   _ _____ ____  
//   |  ___/ _ \|  _ \|  \/  | | ____\ \   / / ____| \ | |_   _/ ___| 
//   | |_ | | | | |_) | |\/| | |  _|  \ \ / /|  _| |  \| | | | \___ \ 
//   |  _|| |_| |  _ <| |  | | | |___  \ V / | |___| |\  | | |  ___) |
//   |_|   \___/|_| \_\_|  |_| |_____|  \_/  |_____|_| \_| |_| |____/ 
//                                                                    


/**
 * mouse event handler
 * @param  {object} event
 */
montigo.component.MenuBookingForm.prototype.on_booking_form_submit_button_click = function(event) {
  event['preventDefault']();
  this.booking_form.submit();
};

/**
 * mouse event handler
 * @param  {object} event
 */
montigo.component.MenuBookingForm.prototype.on_booking_form_cancel_button_click = function(event) {
  event['preventDefault']();
  this.hide();
};


/**
 * mouse event handler
 * @param  {object} event
 */
montigo.component.MenuBookingForm.prototype.on_close_button_click = function(event) {

  /*
  console.log('on_close_button_click');

  event['preventDefault']();
  this.hide();
  */
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.MenuBookingForm.prototype.on_form_submit = function(event) {
  event['preventDefault']();

  // copied from current website form

  var arrival   = this.element.find('#arrivalDate').val();
  var departure = this.element.find('#departureDate').val();
  var nights    = this.element.find('#nights').val();
  var rooms   = this.element.find('#rooms').val();
  var adults    = this.element.find('#numberOfAdults').val();
  var child   = this.element.find('#numberOfChildren').val();
  var codeType  = this.element.find('#codeType').val();
  var code    = this.element.find('#code').val();
  var error   = 0;

  
  if( !arrival || !departure || !nights || !rooms || !adults || !child ){
    error = 1;
  }


  if( !error ) {


    if( codeType==0 && code.toLowerCase() != 'enter code' && code.trim() != '' ){
      alert('Please select a Code Type');
      return false;
    }
    else if( codeType != 0 && (code.toLowerCase() == 'enter code' || code.trim() == '') ){
      alert('Please enter a code');
      return false;
    }
    
    if( codeType.toLowerCase() == 'iata' ){
      codeType = 'iataNumber';
    }
    else if( codeType.toLowerCase() == 'group' ){
      codeType = 'group';
    }
    else if( codeType.toLowerCase() == 'promo' || codeType.toLowerCase() == 'corporate' ){
      codeType = 'rateCode';
    }

    
    arrival = arrival.split('/');
    arrival = arrival[1]+'/'+arrival[0]+'/'+arrival[2];
    
    departure = departure.split('/');
    departure = departure[1]+'/'+departure[0]+'/'+departure[2];
    
    var params = '';
      params+= '&arrivalDate='+arrival;
      params+= '&departureDate='+departure;
      params+= '&numberOfNights='+nights;
      params+= '&rooms='+rooms;
      //params+= '&numberOfAdults='+adults;
      //params+= (child != 0) ? '&numberOfChildren='+child : '';
      params+= (codeType != 0 && code != '') ? '&'+codeType+'='+code : '';
      //params+= '&start=availresults';

    window.location.href = 'https://www.phgsecure.com/IBE/bookingRedirect.ashx?propertyCode=SINMR' + params;

  }


};