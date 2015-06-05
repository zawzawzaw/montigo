java -jar "compiler.jar" ^
  --js=jquery\jquery-1.9.1.min.js ^
  --js=_js\preloadjs-0.4.0.min.js ^
  --js=_js\mobile-detect.min.js ^
  --js=_js\montigo_modernizr_custom.js ^
  --js=..\js\all.js ^
  --js=jquery\jquery.manic.preloader.js ^
  --compilation_level WHITESPACE_ONLY ^
  --js_output_file=..\js\minified\montigo-head.min.js