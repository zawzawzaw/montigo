// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}


//http://www.smashingmagazine.com/2011/10/11/essential-jquery-plugin-patterns/
// Object.create support test, and fallback for browsers without it
if ( typeof Object.create !== 'function' ) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var aArgs = Array.prototype.slice.call(arguments, 1), 
        fToBind = this, 
        fNOP = function () {},
        fBound = function () {
          return fToBind.apply(this instanceof fNOP && oThis
                 ? this
                 : oThis,
                 aArgs.concat(Array.prototype.slice.call(arguments)));
        };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}

if ( !String.prototype.contains ) {
    String.prototype.contains = function() {
        return String.prototype.indexOf.apply( this, arguments ) !== -1;
    };
}

///////////////////
//http://stackoverflow.com/questions/476679/preloading-images-with-jquery
// Helper function, used below.
// Usage: ['img1.jpg','img2.jpg'].remove('img1.jpg');
Array.prototype.remove = function(element) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == element) { this.splice(i,1); }
  }
};
$.fn.preloadImages = function(callback) {
  checklist = this.toArray();
  this.each(function() {
    $('<img>').attr({ src: this }).load(function() {
      checklist.remove($(this).attr('src'));
      if (checklist.length == 0) { callback(); }
    });
  });
};
///////////////////

/* Nano Templates (Tomasz Mazur, Jacek Becela) */

function nano(template, data) {
  return template.replace(/\{([\w\.]*)\}/g, function(str, key) {
    var keys = key.split("."), v = data[keys.shift()];
    for (var i = 0, l = keys.length; i < l; i++) v = v[keys[i]];
    return (typeof v !== "undefined" && v !== null) ? v : "";
  });
}


/**
 * Provides requestAnimationFrame in a cross browser way.
 * @author paulirish / http://paulirish.com/
 */
 
if ( !window.requestAnimationFrame ) {
  window.requestAnimationFrame = ( function() {
    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
      window.setTimeout( callback, 1000 / 60 );
    };
  } )();
}


// https://github.com/desandro/imagesloaded/issues/40

// function for executing a callback when all images in the jQuery object are loaded (or fail).

$.fn.waitForImages = function (callback){
    var $images = this.find('img').add(this.filter('img')),
        loaded = [],
        temporary = [];


    if ($images.length < 1){ //no images to wait for, trigger immediately
        setTimeout(callback, 0);
        return;
    }

    function loadHandler(event){

        //get a reference to the original image that this event is referring to
        var img = $(this).data('originalImage') || this;

        if ($.inArray(img, loaded) === -1){
            loaded.push(img);
        }

        if (loaded.length >= $images.length){ //all images are done, clean up and schedule the main callback

            //remove all added event handlers on original img elements
            $images.unbind('load error', loadHandler);

            //remove all added event handlers on temporary img elements 
            for (var i=0; i<temporary.length; i++){
                temporary[i].unbind('load error', loadHandler);
            }

            //DONE!!!
            setTimeout(callback, 0);
        }
    }               

    return $images
        .bind('load error', loadHandler)
        .each(function( i, el ){ //triggers the load event on images we already know are done

            if (this.complete){ //true in Chrome and FF for loaded and failed images; true in IE for loaded images ONLY
                $(this).load();
            } 

            else if (this.readyState){ //special cases for IE
                if (this.src.lastIndexOf('/') === this.src.length - 1){ //src was set to the empty string; IE stores this as the window url without the filename
                    $(this).load();
                } else { 
                    //hack for getting an event triggered in IE so we can tell whether or not
                    //the image failed or if we're still waiting for it. We'll create another img element,
                    //attach an event handler to it, and give it the same src. If either the original or this
                    //temporary element fire an event, then we'll know what happened and for all purposes can assume the same thing 
                    //happened to the other one. Notice that we don't need to add the temporary img element to the DOM.
                    var $tempImg = $('<img />');
                    temporary.push($tempImg);
                    $tempImg.bind('load error', loadHandler);
                    $tempImg.data('originalImage', this); //attach a reference to the original element to the temporary one; we'll use this
                        //later so we don't double count events
                    $tempImg.attr('src', this.src);
                }
            }
        });
};


var loadFaultTolerantImage = function(src) {
    var attempts = 0;
    var $image = $("<img>", {
        alt: "",

        // Important to help IE reset image width/height after a
        // failed load. This prevents a cache-busted image from
        // having a width and height of 28x30
        css: {
            height: "auto",
            width: "auto"
        }
    });
    var image = $image.get(0);

    image.onerror = function() {
        // To prevent infinite loops, stop trying after
        // three attempts
        //if (attempts++ < 2) {
        if (attempts++ < 6) {
           this.src = src + "#ie-cache-bust";
        }
    };

    image.src = src;

    return $image;
};

// http://www.quirksmode.org/js/cookies.html

function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}