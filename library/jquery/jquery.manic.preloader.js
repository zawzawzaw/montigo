/**
 * simple preloader, updated for assets
 * 
 * requires PreloadJS
 * requires MobileDetect
 *
 * has remove scroll (be careful)
 * 
 * @author Jairus
 */

(function ($) {

  var defaults = {

    asset_array:[

    ],    
    mobile_js_array:[

    ],
    desktop_js_array:[

    ],
    on_mobile_complete: function(){},
    on_desktop_complete: function(){}

  };

  ///////////////////////////////
  // ManicPreloader Class //
  ///////////////////////////////

  function ManicPreloader(settings) {
    this.settings = $.extend({}, defaults, settings);


    this.is_desktop = false;

    this.preloader = null;
    this.mobile_detect = null;

    this.init();
  }

  ManicPreloader.prototype = {
    init: function () {
      console.log("init");

      // set window to (0,0)
      window.scrollTo( 0, 0 );
      window.addEventListener( 'scroll', this.on_window_scroll );   // no need to bind (cause it's not using)

      this.preloader = new createjs.LoadQueue(true);
      this.mobile_detect = new MobileDetect(window.navigator.userAgent);

      this.preloader.addEventListener('complete', this.on_preload_complete.bind(this));

      this.is_desktop = this.mobile_detect.mobile() == null;
      
      this.preloader.loadManifest(this.settings['asset_array']);

      if (this.is_desktop){
        this.preloader.loadManifest(this.settings['desktop_js_array']);
      } else {
        this.preloader.loadManifest(this.settings['mobile_js_array']);
      }

    },

    on_preload_complete: function(event){
      console.log('javascript preload complete');

      var arr = [];
      var js_element = null;
      var fragment = $(document.createDocumentFragment());

      if (this.is_desktop) {
        arr = this.settings['desktop_js_array'];
      } else {
        arr = this.settings['mobile_js_array'];
      }

      // loop through and add to fragment
      for (var i = 0, l = arr.length; i < l; i++) {
        js_element = this.preloader.getResult(arr[i]);
        fragment.append(js_element);
      }

      setTimeout(this.on_preload_append_complete.bind(this),100);

      $('head').append(fragment);
    },

    on_preload_append_complete: function(){

      window.removeEventListener( 'scroll', this.on_window_scroll );

      if (this.is_desktop) {
        this.settings['on_desktop_complete']();
      } else {
        this.settings['on_mobile_complete']();
      }

    },

    on_window_scroll: function(){
      window.scrollTo( 0, 0 );
    }

  };

  ////////////////////////
  // jQuery Plugin Code //
  ////////////////////////
  
  $.extend({
    manic_preloader: function (settings) {
      var item = new ManicPreloader(settings);
      return item;
    }
  });

}(jQuery));