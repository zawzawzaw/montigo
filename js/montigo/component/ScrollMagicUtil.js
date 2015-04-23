goog.provide('montigo.component.ScrollMagicUtil');

//    ____ _____  _  _____ ___ ____ 
//   / ___|_   _|/ \|_   _|_ _/ ___|
//   \___ \ | | / _ \ | |  | | |    
//    ___) || |/ ___ \| |  | | |___ 
//   |____/ |_/_/   \_\_| |___\____|
//                                  


/**
 * get_alpha_animation_for_elements description
 * @param  {Array.<jQuery>} array_param array of jquery elements
 * @return {TimelineMax} animation for elements
 */
montigo.component.ScrollMagicUtil.get_alpha_animation_for_elements = function(array_param) {
  var return_timeline_max = new TimelineMax();

  for (var i = 0, l = array_param.length; i < l; i++) {
    return_timeline_max.add(TweenMax.to(array_param[i], 0.5, {opacity:0}), 0.2 * i);
  }

  return return_timeline_max;

};

/**
 * get_alpha_in_animation_for_elements description
 * @param  {Array.<jQuery>} array_param array of jquery elements
 * @return {TimelineMax} animation for elements
 */
montigo.component.ScrollMagicUtil.get_alpha_in_animation_for_elements = function(array_param) {
  var return_timeline_max = new TimelineMax();

  for (var i = 0, l = array_param.length; i < l; i++) {
    return_timeline_max.add(TweenMax.to(array_param[i], 0.4, {opacity:1}), 0.1 * i);
  }

  return return_timeline_max;

};

/**
 * get_alpha_in_top_animation_for_elements description
 * @param  {Array.<jQuery>} array_param array of jquery elements
 * @return {TimelineMax} animation for elements
 */
montigo.component.ScrollMagicUtil.get_alpha_in_top_animation_for_elements = function(array_param) {
  var return_timeline_max = new TimelineMax();

  for (var i = 0, l = array_param.length; i < l; i++) {
    return_timeline_max.add(TweenMax.to(array_param[i], 0.5, {opacity:1}), (0.2 * i) + 0.1 );
    return_timeline_max.add(TweenMax.to(array_param[i], 0.8, {top:0, ease: Sine.easeInOut}), 0.2 * i );
  }

  return return_timeline_max;

};