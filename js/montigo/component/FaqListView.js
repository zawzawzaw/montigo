goog.provide('montigo.component.FaqListView');
goog.provide('montigo.component.FaqListView.Item');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The List View constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.FaqListView = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.FaqListView.DEFAULT, options);
  this.element = element;

  this.data_array = this.options['data_array'];
  this.item_array = [];

  this.row_array = [];
  this.row_array[0] = this.element.find('.column-01');
  this.row_array[1] = this.element.find('.column-02');
  this.row_array[2] = this.element.find('.column-03');


  this.container_element = this.element.find('.container-fluid');

  this.last_index_clicked = 0;
  this.last_li_index_clicked = 0;
  /**
   * @type {jQuery}
   */
  this.last_li_element_clicked = null;      // important



  this.last_data_clicked = {};

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.create_html();

  console.log('init');
};
goog.inherits(montigo.component.FaqListView, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for List View
 * @const {object}
 */
montigo.component.FaqListView.DEFAULT = {
  'data_array': [],
  'option_02': ''
};

/**
 * List View Constant
 * @const
 * @type {string}
 */
montigo.component.FaqListView.LIST_VIEW_ITEM_TEMPLATE = [
  '<div class="faq-list-view-item">',
    '<h3>{section_title}</h3>',
    '<hr class="short-hr">',
    '<ul>',
    '</ul>',
    '<a href="#" class="cta-button">see more questions<span class="fa fa-chevron-circle-right"></span></a>',
  '</div>'
].join('');

/**
 * List View Event Constant
 * @const
 * @type {string}
 */
montigo.component.FaqListView.ON_LIST_VIEW_CLICK = 'on_list_view_click';

montigo.component.FaqListView.ON_LIST_VIEW_LI_CLICK = 'on_list_view_li_click';
//montigo.component.FaqListView.ON_SIDEBAR_LI_CLICK = 'on_sidebar_li_click';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.FaqListView.prototype.create_html = function() {



  var row_fragment_array = [];
  /**
   * @type {jQuery}
   */
  var row_fragment = null;
  /**
   * @type {jQuery}
   */
  var row_element = null;

  for (var i = 0, l = this.row_array.length; i < l; i++) {
    row_fragment = $(document.createDocumentFragment());
    row_fragment_array[i] = row_fragment;
  }

  var row_fragment_index = 0;





  var fragment = $(document.createDocumentFragment());


  var data_obj = {};


  /**
   * @type {montigo.component.FaqListView.Item}
   */
  var item = null;

  /**
   * @type {String}
   */
  var item_str = "";

  /**
   * @type {jQuery}
   */
  var item_element = null;

  for (var i = 0, l=this.data_array.length; i < l; i++) {
    data_obj = this.data_array[i];


    item_str = nano(montigo.component.FaqListView.LIST_VIEW_ITEM_TEMPLATE, data_obj);
    item_element = $(item_str);
    item = new montigo.component.FaqListView.Item({
      'i': i,
      'data': data_obj
    }, item_element);


    goog.events.listen(item, montigo.component.FaqListView.Item.ON_ITEM_CLICK, this.on_main_item_click.bind(this));
    goog.events.listen(item, montigo.component.FaqListView.Item.ON_LIST_ITEM_CLICK, this.on_main_list_item_click.bind(this));

    this.item_array[i] = item;
    
    row_fragment_index = i % 3;
    row_fragment = row_fragment_array[row_fragment_index];
    row_fragment.append(item_element);

  }


  for (var i = 0, l = this.row_array.length; i < l; i++) {
    row_fragment = row_fragment_array[i];
    row_element = this.row_array[i];
    row_element.append(row_fragment);
  }


  /*
  var row_element = null;

  var max_rows = Math.ceil(this.item_array.length / 3);
  var item_index = 0;

  for (var r = 0; r < max_rows; r++) {
    row_element = $('<div class="row"></div>');

    for (var ii = 0; ii < 3; ii++) {
      item_index = r * 3 + ii;

      if(this.item_array[item_index] != null && this.item_array[item_index] != undefined){
        item = this.item_array[item_index];
        row_element.append(item.element);

      }

    } // for ii

    fragment.append(row_element);
  } // for r
  this.container_element.append(fragment);
  */
  


  
};
montigo.component.FaqListView.prototype.private_method_02 = function() {};
montigo.component.FaqListView.prototype.private_method_03 = function() {};
montigo.component.FaqListView.prototype.private_method_04 = function() {};
montigo.component.FaqListView.prototype.private_method_05 = function() {};
montigo.component.FaqListView.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.FaqListView.prototype.sample_method_calls = function() {
  montigo.component.FaqListView.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.FaqListView.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.component.FaqListView.prototype.open = function() {
  this.element.removeClass('closed-version');

  this.element.show(0);
  //TweenMax.killTweensOf(this.element)
  //TweenMax.to(this.element, 0.5, {autoAlpha: 1, ease: Circ.easeIn});
};
montigo.component.FaqListView.prototype.close = function() {
  this.element.addClass('closed-version');

  this.element.hide(0);
  //TweenMax.killTweensOf(this.element)
  //TweenMax.to(this.element, 0.5, {autoAlpha: 0, ease: Circ.easeIn});
};
montigo.component.FaqListView.prototype.public_method_03 = function() {};
montigo.component.FaqListView.prototype.public_method_04 = function() {};
montigo.component.FaqListView.prototype.public_method_05 = function() {};
montigo.component.FaqListView.prototype.public_method_06 = function() {};


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
montigo.component.FaqListView.prototype.on_main_item_click = function(event) {
  console.log('on_main_item_click')
  console.log(event)

  /**
   * @type {FaqListView.Item}
   */
  var item = event.currentTarget;

  this.last_index_clicked = item.i;
  this.last_data_clicked = item.data_obj;

  this.dispatchEvent(new goog.events.Event(montigo.component.FaqListView.ON_LIST_VIEW_CLICK));


};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.FaqListView.prototype.on_main_list_item_click = function(event) {
  console.log('on_main_list_item_click');
  console.log(event);

  /**
   * @type {FaqListView.Item}
   */
  var item = event.currentTarget;

  this.last_index_clicked = item.i;
  this.last_data_clicked = item.data_obj;

  this.last_li_index_clicked = item.last_li_clicked;
  this.last_li_element_clicked = item.last_li_element_clicked;
  

  //this.dispatchEvent(new goog.events.Event(montigo.component.FaqListView.ON_LIST_VIEW_CLICK));

  this.dispatchEvent(new goog.events.Event(montigo.component.FaqListView.ON_LIST_VIEW_LI_CLICK));

  

};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.FaqListView.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.FaqListView.prototype.on_event_handler_04 = function(event) {
};






















////////////////////////////////////

//    _     ___ ____ _____  __     _____ _______        __  ___ _____ _____ __  __ 
//   | |   |_ _/ ___|_   _| \ \   / /_ _| ____\ \      / / |_ _|_   _| ____|  \/  |
//   | |    | |\___ \ | |    \ \ / / | ||  _|  \ \ /\ / /   | |  | | |  _| | |\/| |
//   | |___ | | ___) || |     \ V /  | || |___  \ V  V /    | |  | | | |___| |  | |
//   |_____|___|____/ |_|      \_/  |___|_____|  \_/\_/    |___| |_| |_____|_|  |_|
//                                                                                 




/**
 * The List View Item constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.FaqListView.Item = function(options, element) {

  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.FaqListView.Item.DEFAULT, options);
  this.element = element;


  this.i = this.options['i'];
  this.data_obj = this.options['data'];



  this.see_more_button = this.element.find('.cta-button');
  this.see_more_button.click(this.on_see_more_button_click.bind(this));


  this.last_li_clicked = 0;

  /**
   * @type {jQuery}
   */
  this.last_li_element_clicked = null;
  


  // create click events
  var arr = this.data_obj['question_array'];

  var question = "";

  this.element.find('ul li');

  /**
   * @type {jQuery}
   */
  var item = null;


  var fragment = $(document.createDocumentFragment());

  var question_item_length = arr.length;
  question_item_length = question_item_length >= 4 ? 4 : question_item_length;    // max 4 items


  for (var i = 0, l = question_item_length; i < l; i++) {



    question = arr[i]['question'];
    item = $('<li>' + question + '</li>');
    item.click(this.on_li_click.bind(this));

    item.data('index' , i);

    fragment.append(item);
  }



  this.element.find('ul').append(fragment);




  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.component.FaqListView.Item, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for List View Item
 * @const {object}
 */
montigo.component.FaqListView.Item.DEFAULT = {
  'i': 0,
  'data': {}
};

/**
 * List View Item Event Constant
 * @const
 * @type {string}
 */
montigo.component.FaqListView.Item.ON_ITEM_CLICK = 'on_item_click';

/**
 * List View Item Event Constant
 * @const
 * @type {string}
 */
montigo.component.FaqListView.Item.ON_LIST_ITEM_CLICK = 'on_list_item_click';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.FaqListView.Item.prototype.private_method_01 = function() {};
montigo.component.FaqListView.Item.prototype.private_method_02 = function() {};
montigo.component.FaqListView.Item.prototype.private_method_03 = function() {};
montigo.component.FaqListView.Item.prototype.private_method_04 = function() {};
montigo.component.FaqListView.Item.prototype.private_method_05 = function() {};
montigo.component.FaqListView.Item.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.component.FaqListView.Item.prototype.sample_method_calls = function() {
  montigo.component.FaqListView.Item.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.component.FaqListView.Item.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.component.FaqListView.Item.prototype.public_method_01 = function() {};
montigo.component.FaqListView.Item.prototype.public_method_02 = function() {};
montigo.component.FaqListView.Item.prototype.public_method_03 = function() {};
montigo.component.FaqListView.Item.prototype.public_method_04 = function() {};
montigo.component.FaqListView.Item.prototype.public_method_05 = function() {};
montigo.component.FaqListView.Item.prototype.public_method_06 = function() {};


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
montigo.component.FaqListView.Item.prototype.on_li_click = function(event) {
  event['preventDefault']();
  console.log('on_li_click');

  var target = $(event.currentTarget);
  var index = target.data('index');

  this.last_li_clicked = index;

  this.last_li_element_clicked = target;

  this.dispatchEvent(new goog.events.Event(montigo.component.FaqListView.Item.ON_LIST_ITEM_CLICK));
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.FaqListView.Item.prototype.on_see_more_button_click = function(event) {
  event['preventDefault']();
  console.log('on_see_more_button_click');

  this.dispatchEvent(new goog.events.Event(montigo.component.FaqListView.Item.ON_ITEM_CLICK));

};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.FaqListView.Item.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.FaqListView.Item.prototype.on_event_handler_04 = function(event) {
};

