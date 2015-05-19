goog.provide('montigo.component.Menu');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('manic.ui.DropDown');
goog.require('montigo.component.MenuBookingForm');


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
  
  /**
   * @type {montigo.component.MenuBookingForm}
   */
  this.menu_booking_form = null;

  this.menu_booking_form = new montigo.component.MenuBookingForm({}, this.element.find('#menu-booking-form-container'));
  

  this.booking_form_container = this.element.find('#menu-booking-form-container');
  
  
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


/*
montigo.component.Menu.prototype.add_black_gradient = function() {
  var black_gradient = $('<div class="black-menu-gradient"></div>');
  this.gradient_container.append(black_gradient);
};
*/



montigo.component.Menu.prototype.public_method_05 = function() {};
montigo.component.Menu.prototype.public_method_06 = function() {};



//    __  __  ___  _   _ ____  _____   _______     _______ _   _ _____ ____  
//   |  \/  |/ _ \| | | / ___|| ____| | ____\ \   / / ____| \ | |_   _/ ___| 
//   | |\/| | | | | | | \___ \|  _|   |  _|  \ \ / /|  _| |  \| | | | \___ \ 
//   | |  | | |_| | |_| |___) | |___  | |___  \ V / | |___| |\  | | |  ___) |
//   |_|  |_|\___/ \___/|____/|_____| |_____|  \_/  |_____|_| \_| |_| |____/ 
//                                                                           




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

  this.menu_booking_form.show();

};




/**
 * event handler
 * @param  {object} event
 */
montigo.component.Menu.prototype.on_event_handler_04 = function(event) {
};

