var globalSceneOptions = {};
var triggerElement = {};
var triggerHook = {};
var duration = {};
var offset = {};


/**
 * @type {object}
 */
var ScrollMagic = {};

/**
 * @constructor
 * @param {object=} object_param settings of the controller (Optional)
 */
ScrollMagic.Controller = function(object_param){};


/**
 * @constructor
 * @param {object=} object_param settings of the scene (Optional)
 */
ScrollMagic.Scene = function(object_param){};

/**
 * triggerHook description
 * @param  {number} number_param 
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.triggerHook = function(number_param){};

/**
 * offset description
 * @param  {number} number_param 
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.offset = function(number_param){};

/**
 * duration description
 * @param  {number} number_param 
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.duration = function(number_param){};


/**
 * setPin description
 * @param {string} str_param
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.setPin = function(str_param){};

/**
 * setClassToggle description
 * @param {string} str1_param [description]
 * @param {string} str2_param [description]
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.setClassToggle = function(str1_param, str2_param){};

/**
 * setTween description
 * @param  {object} object_param 
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.setTween = function(object_param){};

/**
 * addTo description
 * @param {ScrollMagic.Controller} controller_param
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.addTo = function(controller_param){};

/**
 * addIndicators description
 * @param {object} object_param [description]
 * @return {ScrollMagic.Scene} chainable
 */
ScrollMagic.Scene.prototype.addIndicators = function(object_param){};


/**
 * on description
 * @param  {string} str_param
 * @param  {function} function_param
 */
ScrollMagic.Scene.prototype.on = function(str_param, function_param){};

