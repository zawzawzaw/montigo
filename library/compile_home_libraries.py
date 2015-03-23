import logging
import optparse
import os
import sys

sys.path.append('closure-library/closure/bin/build/')

import depstree
import jscompiler
import source
import treescan


out = open('js/minified/sga-home-libraries.min.js', 'w')

compiled_source = jscompiler.Compile(
'compiler.jar',
[
  'js/gsap/TweenMax.min.js',
  'js/gsap/TimelineMax.min.js',
  'js/gsap/jquery.gsap.min.js',
  'js/gsap/easing/EasePack.min.js',
  'js/gsap/plugins/Physics2DPlugin.min.js',
  'js/gsap/plugins/BezierPlugin.min.js',
  'js/gsap/plugins/RaphaelPlugin.min.js',
  'js/gsap/plugins/ScrollToPlugin.min.js',
  'js/libs/preloadjs-0.4.0.min.js',
  'js/libs/pixi_jan15.js',
  'js/libs/raphael-min.js',
  'js/libs/videojs/video.js',
  'js/libs/jstorage.min.js',
  'js/jquery/odometer/odometer.js',
  'js/jquery/jquery.backstretch.min.js',
  'js/jquery/jquery-ui.min.js',
  'js/jquery/jquery.easings.min.js',
  'js/jquery/jquery.slimscroll.js',
  'js/jquery/jquery.fullPage.js'
],None,['--compilation_level', 'WHITESPACE_ONLY'])

out.write(compiled_source)