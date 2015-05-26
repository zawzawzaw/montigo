goog.provide('montigo.content.Careers');

goog.require('goog.events.Event');
goog.require('goog.events.EventTarget');

/**
 * The Career Content constructor
 * @param {object} options The object extendable like jquery plugins
 * @param {element} element The element connected to class
 * @constructor
 * @extends {goog.events.EventTarget}
 */
montigo.content.Careers = function(options, element) {
  
  goog.events.EventTarget.call(this);
  this.options = $.extend({}, montigo.content.Careers.DEFAULT, options);
  this.element = element;

  //    ___ _   _ ___ _____
  //   |_ _| \ | |_ _|_   _|
  //    | ||  \| || |  | |
  //    | || |\  || |  | |
  //   |___|_| \_|___| |_|
  //

  /**
   * @type {manic.util.JsonParser}
   */
  this.json_parser = new manic.util.JsonParser({'json': 'json/careers.json'});
  goog.events.listen(this.json_parser,manic.util.JsonParser.ON_COMPLETE, this.on_json_parser_complete.bind(this));

  this.career_item_array = [];

  this.career_item_container_element = $('#career-item-container .container-fluid');

  this.json_parser.start_load();

  
  this.row_array = [];
  this.row_array[0] = this.element.find('.column-01');
  this.row_array[1] = this.element.find('.column-02');
  this.row_array[2] = this.element.find('.column-03');



  console.log('init');
};
goog.inherits(montigo.content.Careers, goog.events.EventTarget);




// i have to remove this eventually, it's better to have class STATIC variables,  this.var with STATIC defaults...

/**
 * default options for Career Content
 * @const {object}
 */
montigo.content.Careers.DEFAULT = {
  'option_01': '',
  'option_02': ''
};

/**
 * Career Content Event Constant
 * @const
 * @type {string}
 */
montigo.content.Careers.EVENT_01 = '';

/**
 * Career Content Event Constant
 * @const
 * @type {string}
 */
montigo.content.Careers.EVENT_02 = '';

/**
 * @const 
 * @type {string}
 */
montigo.content.Careers.CAREER_TEMPLATE = [
  '<div class="career-item">',
    '<h4>{job_title}</h4>',
    '<hr class="short-hr">',
    '<ul>{description_li_array}</ul>',
    '<a href="mailto:info@montigoresorts.com?subject=Montigo%20Careers%3A%20Application" class="cta-small-button">Please send your CV with photo, three <br>references, salary expectation, and notice period <br>to info@montigoresorts.com<span class="fa fa-chevron-circle-right"></span></a>',
  '</div>'
].join('');


//    ____  ____  _____     ___  _____ _____
//   |  _ \|  _ \|_ _\ \   / / \|_   _| ____|
//   | |_) | |_) || | \ \ / / _ \ | | |  _|
//   |  __/|  _ < | |  \ V / ___ \| | | |___
//   |_|   |_| \_\___|  \_/_/   \_\_| |_____|
//


montigo.content.Careers.prototype.create_html = function() {
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
  var data_object = null;

  /**
   * @type {String}
   */
  var item_str = '';

  /**
   * @type {jQuery}
   */
  var item_element = null;

  for (var i = 0, l = this.json_parser.data_array.length; i < l; i++) {
    data_object = this.json_parser.data_array[i];
    data_object['description_li_array'] = '<li>' + data_object['description_array'].join('</li><li>') + '</li>';

    item_str = nano(montigo.content.Careers.CAREER_TEMPLATE, data_object);

    item_element = $(item_str);

    

    this.career_item_array[i] = item_element;

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
  var row_num = Math.ceil(this.career_item_array.length / 3);
  var row_element = null;

  for (var r = 0, rl = row_num; r < rl; r++) {
    row_element = $('<div class="row"></div>');

    for (var i = 0; i < 3; i++) {
      item_element = this.career_item_array[ r*3 + i ];

      if(item_element != null && item_element != undefined){
        row_element.append(item_element);
      }
    }

    fragment.append(row_element);
  }
  this.career_item_container_element.append(fragment);
  */
};
montigo.content.Careers.prototype.private_method_02 = function() {};
montigo.content.Careers.prototype.private_method_03 = function() {};
montigo.content.Careers.prototype.private_method_04 = function() {};
montigo.content.Careers.prototype.private_method_05 = function() {};
montigo.content.Careers.prototype.private_method_06 = function() {};


/**
 * sample_method_calls
 */
montigo.content.Careers.prototype.sample_method_calls = function() {
  montigo.content.Careers.superClass_.method_02.call(this);                                    // call is important
  this.dispatchEvent(new goog.events.Event(montigo.content.Careers.EVENT_01));
};

//    ____  _   _ ____  _     ___ ____
//   |  _ \| | | | __ )| |   |_ _/ ___|
//   | |_) | | | |  _ \| |    | | |
//   |  __/| |_| | |_) | |___ | | |___
//   |_|    \___/|____/|_____|___\____|
//


montigo.content.Careers.prototype.public_method_01 = function() {};
montigo.content.Careers.prototype.public_method_02 = function() {};
montigo.content.Careers.prototype.public_method_03 = function() {};
montigo.content.Careers.prototype.public_method_04 = function() {};
montigo.content.Careers.prototype.public_method_05 = function() {};
montigo.content.Careers.prototype.public_method_06 = function() {};


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
montigo.content.Careers.prototype.on_json_parser_complete = function(event) {
  
  this.create_html();
 
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Careers.prototype.on_event_handler_02 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Careers.prototype.on_event_handler_03 = function(event) {
};

/**
 * event handler
 * @param  {object} event
 */
montigo.content.Careers.prototype.on_event_handler_04 = function(event) {
};

