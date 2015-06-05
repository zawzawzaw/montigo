goog.provide('montigo.content.Faq');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

goog.require('montigo.component.FaqListView');
goog.require('montigo.component.FaqDetailView');

/**
 * The Faq Content constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.content.Faq = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.content.Faq.DEFAULT, options);
  this.element = element;

  /**
   * @type {montigo.component.FaqListView}
   */
  this.list_view = null;

  /**
   * @type {montigo.component.FaqDetailView}
   */
  this.detail_view = null;

  this.faq_breadcrumb_button = $('#faq-detailed-view-header .breadcrumb-01');


  this.is_created = false;

  /**
   * @type {manic.util.JsonParser}
   */
  this.json_parser = new manic.util.JsonParser({'json': 'json/faq.json'});
  goog.events.listen(this.json_parser,manic.util.JsonParser.ON_COMPLETE, this.on_json_parser_complete.bind(this));


  this.json_parser.start_load();

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  console.log('init');
};
goog.inherits(montigo.content.Faq, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Faq Content
 * @const {object}
 */
montigo.content.Faq.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Faq Content Event Constant
 * @const
 * @type {string}
 */
montigo.content.Faq.EVENT_01 = '';

/**
 * Faq Content Event Constant
 * @const
 * @type {string}
 */
montigo.content.Faq.EVENT_02 = '';


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.content.Faq.prototype.create_objects = function() {

  this.is_created = true;

  this.list_view = new montigo.component.FaqListView({
    'data_array': this.json_parser.data_array
  }, $('#faq-list-view'));
  goog.events.listen(this.list_view, montigo.component.FaqListView.ON_LIST_VIEW_CLICK, this.on_list_view_click.bind(this));
  goog.events.listen(this.list_view, montigo.component.FaqListView.ON_LIST_VIEW_LI_CLICK, this.on_list_view_li_click.bind(this));


  
  this.detail_view = new montigo.component.FaqDetailView({
    'data_array': this.json_parser.data_array
  },$('#faq-detailed-view'));


  goog.events.listen(this.detail_view, montigo.component.FaqDetailView.ON_NAVIGATION_LI_CLICK, this.on_detail_view_navigation_click.bind(this));
  goog.events.listen(this.detail_view, montigo.component.FaqDetailView.ON_CTA_BACK_CLICK, this.on_detail_view_back_click.bind(this));
  


  //this.detail_view.create_pinned_scene(this.controller);      // cannot do this from here, removed the function.

  this.faq_breadcrumb_button.click(this.on_faq_breadcrumb_button_click.bind(this));

};
montigo.content.Faq.prototype.private_method_02 = function() {};
montigo.content.Faq.prototype.private_method_03 = function() {};
montigo.content.Faq.prototype.private_method_04 = function() {};
montigo.content.Faq.prototype.private_method_05 = function() {};
montigo.content.Faq.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.content.Faq.prototype.sample_method_calls = function() {
  montigo.content.Faq.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.content.Faq.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


/**
 * open_section_by_name description
 * @param  {String} str_param
 */
montigo.content.Faq.prototype.open_section_by_name = function(str_param) {

  if (this.is_created == true) {
    this.list_view.close();

    var is_name_available = this.detail_view.open_section_by_name(str_param);

    if(is_name_available != -1){
      var target_y = this.detail_view.get_current_item_y();
      //this.scroll_to();
      
      if (target_y != -1) {
        this.scroll_to(target_y);
      }
      
    } else {

      this.on_faq_breadcrumb_button_click(null);
      
    }
  }

};
montigo.content.Faq.prototype.public_method_02 = function() {};
montigo.content.Faq.prototype.public_method_03 = function() {};
montigo.content.Faq.prototype.public_method_04 = function() {};
montigo.content.Faq.prototype.public_method_05 = function() {};
montigo.content.Faq.prototype.public_method_06 = function() {};


montigo.content.Faq.prototype.scroll_to = function(num_param) {
  var target_y = num_param
  var current_scroll = $(window).scrollTop();
  var target_duration = Math.abs(  (target_y - current_scroll) / 800 );
  TweenMax.to($(window), target_duration, {scrollTo:{y:target_y,autoKill: true}, ease:Quad.easeInOut});
};

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
montigo.content.Faq.prototype.on_json_parser_complete = function(event) {
  console.log('on_json_parser_complete');
  this.create_objects();

};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Faq.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Faq.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Faq.prototype.on_event_handler_04 = function(event) {
};



//     ____ _   _ ____ _____ ___  __  __   _______     _______ _   _ _____ ____  
//    / ___| | | / ___|_   _/ _ \|  \/  | | ____\ \   / / ____| \ | |_   _/ ___| 
//   | |   | | | \___ \ | || | | | |\/| | |  _|  \ \ / /|  _| |  \| | | | \___ \ 
//   | |___| |_| |___) || || |_| | |  | | | |___  \ V / | |___| |\  | | |  ___) |
//    \____|\___/|____/ |_| \___/|_|  |_| |_____|  \_/  |_____|_| \_| |_| |____/ 
//                                                                               



montigo.content.Faq.prototype.on_detail_view_navigation_click = function(event){
  console.log('on_detail_view_navigation_click');

  this.detail_view.open_section(this.detail_view.last_navigation_index_clicked);

  var target_y = this.detail_view.get_current_item_y();
  //this.scroll_to();
  
  if (target_y != -1) {
    this.scroll_to(target_y);
  }
}

montigo.content.Faq.prototype.on_detail_view_back_click = function(event){
  this.on_faq_breadcrumb_button_click(null);
};



/**
 * event handler
 * @param  {object} event
 */
montigo.content.Faq.prototype.on_list_view_click = function(event){
  console.log('on_list_view_click');

  console.log('this.list_view.last_index_clicked: ' + this.list_view.last_index_clicked);

  this.list_view.close();
  this.detail_view.open_section(this.list_view.last_index_clicked);

  var target_y = this.detail_view.get_current_item_y();
  //this.scroll_to();
  
  if (target_y != -1) {
    this.scroll_to(target_y);
  }
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Faq.prototype.on_list_view_li_click = function(event){
  console.log('on_list_view_li_click');

  console.log('this.list_view.last_index_clicked: ' + this.list_view.last_index_clicked);
  console.log('this.list_view.last_li_index_clicked: ' + this.list_view.last_li_index_clicked);
  //console.log('this.list_view.last_li_element_clicked: ');
  //console.log(this.list_view.last_li_element_clicked)
  
  this.list_view.close();
  this.detail_view.open_section(this.list_view.last_index_clicked);

  //var target_y = this.detail_view.get_current_li_y_at_index(this.list_view.last_li_index_clicked);      // last thing
  var target_y = this.detail_view.get_current_item_y();

  //var header_height = 62;
  //var target_y = this.list_view.last_li_element_clicked.offset().top; // - header_height;

  console.log('target_y: ' +target_y);

  if (target_y != -1) {
    this.scroll_to(target_y);
  }

  

  
};



/**
 * event handler
 * @param  {object} event
 */
montigo.content.Faq.prototype.on_faq_breadcrumb_button_click = function(event) {
  this.detail_view.close();
  this.list_view.open();

  var target_element = $('#faq-top-position');

  var header_height = 62;
  var breadcrumb_height = 50;

  var target_y = target_element.offset().top - header_height; // - breadcrumb_height;

  this.scroll_to(target_y);
};
