goog.provide('montigo.component.FaqDetailView');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Detail View constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.component.FaqDetailView = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.component.FaqDetailView.DEFAULT, options);
  this.element = element;

  this.data_array = this.options['data_array'];
  this.item_array = [];
  this.navigation_array = [];

  /**
   * @type {jQuery}
   */
  this.current_item = null;



  this.last_navigation_index_clicked = 0;


  this.header_element = $('#faq-detailed-view-header');
  this.sidebar_element = this.element.find('.faq-detailed-view-sidebar');


  this.breadcrumb_element = this.header_element.find('.breadcrumb-02');

  this.container_element = this.element.find('#faq-detailed-view-content-container');

  this.back_to_top_button = this.element.find('#faq-back-to-top-button');
  this.back_to_top_button.click(this.on_back_to_top_button.bind(this));

  TweenMax.to(this.back_to_top_button, 0, {autoAlpha:0});




  this.navigation_element = this.element.find('.faq-detailed-view-sidebar .faq-detailed-view-navigation');

  /**
   * @type {ScrollMagic.Scene}
   */
  this.pinned_scene = null;

  /**
   * @type {ScrollMagic.Scene}
   */
  this.pinned2_scene = null;


  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  this.create_html();

  console.log('init');
};
goog.inherits(montigo.component.FaqDetailView, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Detail View
 * @const {object}
 */
montigo.component.FaqDetailView.DEFAULT = {
  'data_array': []
};


/**
 * event constant
 * @const
 * @type {String}
 */
montigo.component.FaqDetailView.ON_NAVIGATION_LI_CLICK = 'on_navigation_li_click';


/**
 * event constant
 * @const
 * @type {String}
 */
montigo.component.FaqDetailView.ON_CTA_BACK_CLICK = 'on_cta_back_click';

/**
 * Detail View Constant
 * @const
 * @type {string}
 */
montigo.component.FaqDetailView.QUESTION_TEMPLATE = [
  '<div class="faq-detailed-view-item">',
    '<h6>{question}</h6>',
    '{answer}',
  '</div>'
].join('');

/**
 * Detail View Constant
 * @const
 * @type {string}
 */
montigo.component.FaqDetailView.DETAIL_TEMPLATE = [
  '<div class="faq-detailed-view-content closed-version">',
    '<div class="faq-detailed-view-content-title">',
      '<h3>{section_title}</h3>',
      '<hr class="short-hr">',
    '</div>',
    '<div class="faq-detailed-view-item-container">',
    '</div>',
    '<a href="#" class="cta-back-button"><span class="fa fa-chevron-circle-left"></span>back</a>',
  '</div>'
].join('');


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.component.FaqDetailView.prototype.create_html = function() {


  var fragment = $(document.createDocumentFragment());
  var fragment2 = $(document.createDocumentFragment());
  var navigation_fragment = $(document.createDocumentFragment());

  var data_obj = {};

  var question_array = [];
  
  /**
   * @type {String}
   */
  var item_str = "";

  /**
   * @type {String}
   */
  var question_str = "";

  /**
   * @type {jQuery}
   */
  var item_element = null;

  /**
   * @type {jQuery}
   */
  var question_element = null;


  /**
   * @type {jQuery}
   */
  var li_element = null;

  for (var i = 0, l=this.data_array.length; i < l; i++) {
    data_obj = this.data_array[i];


    item_str = nano(montigo.component.FaqDetailView.DETAIL_TEMPLATE, data_obj);
    item_element = $(item_str);

    question_array = data_obj['question_array'];


    fragment2 = $(document.createDocumentFragment());

    for (var j = 0, jl = question_array.length; j < jl; j++) {
      question_str = nano(montigo.component.FaqDetailView.QUESTION_TEMPLATE, question_array[j])
      question_element = $(question_str);
      fragment2.append(question_element);
    }

    item_element.find('.faq-detailed-view-item-container').append(fragment2);




    li_element = $('<li>' + data_obj['section_title'] +  '</li>');
    li_element.data('index', i);
    li_element.click(this.on_navigation_li_click.bind(this));
    

    item_element.find('.cta-back-button').click(this.on_back_button_click.bind(this));


    this.item_array[i] = item_element;
    this.navigation_array[i] = li_element;


    navigation_fragment.append(li_element);

    fragment.append(item_element);
  
  }



  this.container_element.append(fragment);
  this.navigation_element.append(navigation_fragment);

  

  //this.update_sidebar_height();

};


/**
 * @param  {number} number_param
 */
montigo.component.FaqDetailView.prototype.internal_open_section = function(number_param) {


  console.log('internal_open_section: ' + number_param);

  if (this.data_array[number_param] != null && this.data_array[number_param] != undefined) {
    var title_str = this.data_array[number_param]['section_title'];

    this.breadcrumb_element.html(title_str);

    console.log('this.data_array[number_param]: ' + this.data_array[number_param]);
    try{
      window.location.hash = this.data_array[number_param]['section_id']
      
    } catch(e){
      
    }

  }


  

  /**
   * @type {jQuery}
   */
  var item_element = null;

  
  for (var i = 0, l = this.item_array.length; i < l; i++) {
    item_element = this.item_array[i];

    if (i == number_param) {
      item_element.removeClass('closed-version');
      item_element.show(0);
      this.current_item = item_element;
    } else {
      item_element.addClass('closed-version');
      item_element.hide(0);
    }
  }
  

  for (var i = 0, l = this.navigation_array.length; i < l; i++) {
    item_element = this.navigation_array[i];

    if (i == number_param) {
      item_element.addClass('selected');
    } else {
      item_element.removeClass('selected');
    }
  }

};

montigo.component.FaqDetailView.prototype.private_method_04 = function() {};
montigo.component.FaqDetailView.prototype.private_method_05 = function() {};
montigo.component.FaqDetailView.prototype.private_method_06 = function() {};


//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//



/**
 * create_pinned_scene description
 * @param  {ScrollMagic.Controller} controller_param
 */
montigo.component.FaqDetailView.prototype.create_pinned_scene = function(controller_param) {                            // delete, moved to montigo.page.faq


  /*
  this.pinned_scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold'})
    .triggerHook(0)
    //.setPin("#faq-detailed-view-header")
    .setPin("#faq-detailed-view-header-container")
    .offset(-62)
    .addTo(controller_param);
  */
 

  /*
  this.pinned2_scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold'})
    .triggerHook(0)
    .setPin("#faq-back-to-top-button")
    .offset(-62)
    .addTo(controller_param);
  */


  // #faq-detailed-view-content
  

  /*
  this.pinned2_scene = new ScrollMagic.Scene({triggerElement: '#below-page-fold'})
    .triggerHook(0)
    .setPin(".faq-detailed-view-sidebar ul")
    //.setClassToggle(".faq-detailed-view-sidebar", "pinned-version")
    .offset(-62)
    .addTo(controller_param);
  */


};


/**
 * open_section_by_name description
 * @param  {String} str_param
 * @return {number} 
 */
montigo.component.FaqDetailView.prototype.open_section_by_name = function(str_param){

  console.log('open_section_by_name: ' + str_param)

  var data_obj = null;
  var target_index = -1;

  for (var i = 0, l = this.data_array.length; i < l; i++) {
    data_obj = this.data_array[i];

    console.log(data_obj)
    if (data_obj['section_id'] == str_param) {
      target_index = i;
    }
  }

  if(target_index != -1){
    console.log('target_index: ' + target_index);
    this.internal_open_section(target_index);
    this.open();
  }


  return target_index;
};

/**
 * open_section description
 * @param  {number} number_param
 */
montigo.component.FaqDetailView.prototype.open_section = function(number_param) {

  

  this.internal_open_section(number_param);
  this.open();
  
};


montigo.component.FaqDetailView.prototype.open = function() {
  this.element.removeClass('closed-version');
  this.header_element.removeClass('closed-version');
  this.header_element.show(0);

  this.element.show(0);
  //TweenMax.killTweensOf(this.element);
  //TweenMax.to(this.element, 0.5, {autoAlpha: 1, ease: Circ.easeIn});

  TweenMax.killTweensOf(this.back_to_top_button);
  TweenMax.to(this.back_to_top_button, 0.5, {autoAlpha:1, ease: Circ.easeIn, delay: 1});
};
montigo.component.FaqDetailView.prototype.close = function() {

  this.internal_open_section(-1);
  this.element.addClass('closed-version');
  this.header_element.addClass('closed-version');
  this.header_element.hide(0);

  this.element.hide(0);
  //TweenMax.killTweensOf(this.element);
  //TweenMax.to(this.element, 0.5, {autoAlpha: 0, ease: Circ.easeIn});

  TweenMax.killTweensOf(this.back_to_top_button);
  TweenMax.to(this.back_to_top_button, 0.5, {autoAlpha:0, ease: Circ.easeIn});
};

/*
montigo.component.FaqDetailView.prototype.update_sidebar_height = function() {

  var window_height = $(window).height();
  var target_height = window_height - 62 - 50;


  this.sidebar_element.height(target_height);


};
*/


/**
 * get_current_item_y description
 * @return {number} 
 */
montigo.component.FaqDetailView.prototype.get_current_item_y = function() {

  var header_height = 62;
  var breadcrumb_height = 50;

  if (this.current_item != null && this.current_item != undefined) {

    var return_value = this.current_item.offset().top - header_height - breadcrumb_height;
    return return_value;
  }

  return -1;

};


/**
 * get_current_li_y_at_index description
 * @param  {number} number_param
 * @return {number} 
 */
montigo.component.FaqDetailView.prototype.get_current_li_y_at_index = function(number_param) {

  var header_height = 62;

  if (this.current_item != null && this.current_item != undefined) {


    console.log(this.current_item);
    

    var jquery_index = 1 + number_param;
    console.log('.faq-detailed-view-item:nth-child(' + jquery_index +')')
    var scroll_target = this.current_item.find('.faq-detailed-view-item:nth-child(' + jquery_index +')');
    //var scroll_target = this.current_item.find('li');

    console.log(scroll_target);

    if(scroll_target.length > 0){
      var return_value = scroll_target.offset().top - header_height - 20 - 20;   // 30 = space from item to,  20 = animation thingy

      return return_value;

    }
  }

  return -1;

};

montigo.component.FaqDetailView.prototype.public_method_05 = function() {};
montigo.component.FaqDetailView.prototype.public_method_06 = function() {};






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
montigo.component.FaqDetailView.prototype.on_navigation_li_click = function(event) {
  event['preventDefault']();

  var target = $(event.currentTarget);
  var index = target.data('index');

  this.last_navigation_index_clicked = index;

  this.dispatchEvent(new goog.events.Event(montigo.component.FaqDetailView.ON_NAVIGATION_LI_CLICK));

  //this.internal_open_section(index);      // do this outside...
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.FaqDetailView.prototype.on_back_to_top_button = function(event) {
  event['preventDefault']();

  //TweenMax.to($('body'), 0.8, {scrollTo: {y:500 - 62}, ease: Sine.easeInOut});
  TweenMax.to($(window), 0.8, {scrollTo: {y:500 - 62}, ease: Sine.easeInOut});
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.FaqDetailView.prototype.on_back_button_click = function(event) {
  event['preventDefault']();

  this.dispatchEvent(new goog.events.Event(montigo.component.FaqDetailView.ON_CTA_BACK_CLICK));
};

/**
 * event handler
 * @param  {object} event
 */
montigo.component.FaqDetailView.prototype.on_event_handler_04 = function(event) {
};





/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//    ____  _____ _____  _    ___ _       ___ _____ _____ __  __ 
//   |  _ \| ____|_   _|/ \  |_ _| |     |_ _|_   _| ____|  \/  |
//   | | | |  _|   | | / _ \  | || |      | |  | | |  _| | |\/| |
//   | |_| | |___  | |/ ___ \ | || |___   | |  | | | |___| |  | |
//   |____/|_____| |_/_/   \_\___|_____| |___| |_| |_____|_|  |_|
//                                                               

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////