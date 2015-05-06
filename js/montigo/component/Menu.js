goog.provide('montigo.component.Menu');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Menu constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.Menu = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.Menu.DEFAULT, options);
  this.element = element;

  this.header_height = this.options['header_height'];

  this.gradient_container = this.element.find('.gradient-container');

  this.book_now_button = this.element.find('#header-book-now-btn');
  this.book_now_button_copy = this.element.find('#header-book-now-btn .copy');

  this.state = montigo.component.Menu.NAVIGATION_STATE;


  this.booking_form = this.element.find('#menu-booking-form');
  this.booking_form.submit(this.on_form_submit.bind(this));

  this.booking_panel = this.element.find('#menu-booking-panel');
  this.navigation_panel = this.element.find('#menu-navigation-panel');
  

  //this.element.find('#menubookingarrival').glDatePicker({
  //this.element.find('#arrival').glDatePicker({
  this.element.find('#arrivalDate').glDatePicker({
    'cssName':'menu-booking-calendar',
    'zIndex': 10000,
    'dowNames': [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
    'prevArrow': '<span class="fa fa-chevron-left"></span>',
    'nextArrow': '<span class="fa fa-chevron-right"></span>'
  });

  //this.element.find('#menubookingdeparture').glDatePicker({
  //this.element.find('#departure').glDatePicker({
  this.element.find('#departureDate').glDatePicker({
    'cssName':'menu-booking-calendar',
    'zIndex': 10000,
    'dowNames': [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ],
    'prevArrow': '<span class="fa fa-chevron-left"></span>',
    'nextArrow': '<span class="fa fa-chevron-right"></span>'
  });



  /**
   * @type {ScrollMagic.Scene}
   */
  this.scene = null;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //


  this.book_now_button.click(this.on_book_now_button_click.bind(this));

  console.log('init');

};
goog.inherits(montigo.component.Menu, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Menu
 * @const {object}
 */
montigo.component.Menu.DEFAULT = {
  'header_height': 62,
  'option_02': ''
};

/**
 * Menu Event Constant
 * @const
 * @type {string}
 */
montigo.component.Menu.EVENT_01 = '';

/**
 * Menu Constant
 * @const
 * @type {string}
 */
montigo.component.Menu.BOOKING_STATE = 'booking';

/**
 * Menu Constant
 * @const
 * @type {string}
 */
montigo.component.Menu.NAVIGATION_STATE = 'navigation';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.Menu.prototype.private_method_01 = function() {};
montigo.component.Menu.prototype.private_method_02 = function() {};
montigo.component.Menu.prototype.private_method_03 = function() {};
montigo.component.Menu.prototype.private_method_04 = function() {};
montigo.component.Menu.prototype.private_method_05 = function() {};
montigo.component.Menu.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.Menu.prototype.sample_method_calls = function() {
  montigo.component.Menu.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.Menu.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//

/**
 * create_scene description
 * @param  {object} controller_param
 */
montigo.component.Menu.prototype.create_scene = function(controller_param) {
  var own_id = "#" + this.element.attr('id');



  this.scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold'})                        // #below-page-fold must be found on all pages.
    .triggerHook(0)
    .offset(-62)
    .setClassToggle(own_id, "white-version")
    //.setTween(TweenMax.to(this.gradient_container, 0.3, {autoAlpha:0, ease:Circ.easeIn}))
    //.addIndicators({name: "menu scene"}) // add indicators (requires plugin)
    .addTo(controller_param);
};

montigo.component.Menu.prototype.add_black_gradient = function() {
  var black_gradient = $('<div class="black-menu-gradient"></div>');
  this.gradient_container.append(black_gradient);

};



montigo.component.Menu.prototype.show_booking_panel = function() {

  if(this.state != montigo.component.Menu.BOOKING_STATE){
    this.state = montigo.component.Menu.BOOKING_STATE;

    this.element.addClass('booking-version');

    this.book_now_button_copy.html("find a villa");

    TweenMax.to(this.navigation_panel, 0.5, {top: -1 * this.header_height, ease: Sine.easeInOut});
    TweenMax.to(this.booking_panel, 0.5, {top: 0, ease: Sine.easeInOut, delay: 0.5});

  }

  //menu-navigation-panel
};
montigo.component.Menu.prototype.show_navigation_panel = function() {
  if(this.state != montigo.component.Menu.NAVIGATION_STATE){
    this.state = montigo.component.Menu.NAVIGATION_STATE;

    this.element.removeClass('booking-version');

    this.book_now_button_copy.html("book now");

    TweenMax.to(this.booking_panel, 0.5, {top: -1 * this.header_height, ease: Sine.easeInOut});
    TweenMax.to(this.navigation_panel, 0.5, {top: 0, ease: Sine.easeInOut, delay: 0.5});          // has delay
  }
};
montigo.component.Menu.prototype.public_method_05 = function() {};
montigo.component.Menu.prototype.public_method_06 = function() {};


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
montigo.component.Menu.prototype.on_book_now_button_click = function(event) {

  if (this.state == montigo.component.Menu.NAVIGATION_STATE) {
    this.show_booking_panel();
  } else {
    //this.show_navigation_panel();
    
    this.booking_form.submit();
  }

};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.Menu.prototype.on_form_submit = function(event) {
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

/**
 * event handler
 * @param  {object} event
 */
montigo.component.Menu.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.Menu.prototype.on_event_handler_04 = function(event) {
};

