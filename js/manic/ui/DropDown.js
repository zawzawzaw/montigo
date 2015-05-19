goog.provide('manic.ui.DropDown');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The CLASSNAME constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
manic.ui.DropDown = function(options, element) {
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, manic.ui.DropDown.DEFAULT, options);
  this.element = element;

  this.input_element = this.element.find('input');
  this.span_element = this.element.find('span');
  this.ul_element = this.element.find('ul');


  this.element.find('li').click(this.on_li_click.bind(this));

  this.state = 'close';

  this.span_element.click(this.on_span_click.bind(this));

  
  $(document).click(this.on_document_click.bind(this));

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(manic.ui.DropDown, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for CLASSNAME
 * @const {object}
 */
manic.ui.DropDown.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.ui.DropDown.EVENT_01 = '';

/**
 * CLASSNAME Event Constant
 * @const
 * @type {string}
 */
manic.ui.DropDown.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


manic.ui.DropDown.prototype.private_method_01 = function() {};
manic.ui.DropDown.prototype.private_method_02 = function() {};
manic.ui.DropDown.prototype.private_method_03 = function() {};
manic.ui.DropDown.prototype.private_method_04 = function() {};
manic.ui.DropDown.prototype.private_method_05 = function() {};
manic.ui.DropDown.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
manic.ui.DropDown.prototype.sample_method_calls = function() {
  manic.ui.DropDown.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(manic.ui.DropDown.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


manic.ui.DropDown.prototype.open = function() {
  if(this.state != 'open'){
    this.state = 'open';
    this.ul_element.show(0);
    this.element.addClass('open-version');

    //$('body').addClass('dropdown-open-version');      // many dropdown components will call this, better to use a callback

    
  }
};
manic.ui.DropDown.prototype.close = function() {
  if(this.state != 'close'){
    this.state = 'close';
    this.ul_element.hide(0);
    this.element.removeClass('open-version');

    //$('body').removeClass('dropdown-open-version');
  }

};
manic.ui.DropDown.prototype.public_method_03 = function() {};
manic.ui.DropDown.prototype.public_method_04 = function() {};
manic.ui.DropDown.prototype.public_method_05 = function() {};
manic.ui.DropDown.prototype.public_method_06 = function() {};


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
manic.ui.DropDown.prototype.on_span_click = function(event) {
  event['preventDefault']();

  this.open();
  return false;
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.DropDown.prototype.on_document_click = function(event) {

  this.close();
};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.DropDown.prototype.on_li_click = function(event) {
  var target = $(event.currentTarget);

  var li_text = target.text();

  this.span_element.html(li_text);

  var li_data = target.attr('data-value');
  if (li_data != null && li_data != undefined) {
    li_text = li_data;
  }

  this.input_element.val(li_text);
  

};

/**
 * event handler
 * @param  {object} event
 */
manic.ui.DropDown.prototype.on_event_handler_04 = function(event) {
};

