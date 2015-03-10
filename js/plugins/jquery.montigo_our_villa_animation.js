/**
 * ...
 * @author Jairus
 */

(function ($) {

  var defaults = {
  };

  ///////////////////////////
  // MontigoOurVilla Class //
  ///////////////////////////

  function MontigoOurVilla(elem, settings) {
    this.element = $(elem);
    this.settings = $.extend({}, defaults, settings);
    this.init();
  }

  MontigoOurVilla.prototype = {
    init: function () {
      console.log("init");      
    },
    create_swiffy: function(){
      var swiffyobject = 

      this.stage = new swiffy.Stage(this.element[0], swiffyobject, {});
    },
    start_animation: function(){
      this.create_swiffy();
      this.stage.start();
    },
    stop_animation: function(){
      this.stage.destroy();
    }

  };

  ////////////////////////
  // jQuery Plugin Code //
  ////////////////////////

  $.fn['montigo_our_villa_animation'] = function (settings) {
    return this.each(function () {
      // check for instance of plugin in object
      if (!$.data(this, 'montigo_our_villa_animation')) {
        $.data(this, 'montigo_our_villa_animation', new MontigoOurVilla(this, settings));
      }
    });
  };

}(jQuery));