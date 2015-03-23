java -jar "compiler.jar" ^
  --js=js\manic\**.js ^
  --js=js\sga\**.js ^
  --js=closure-library\**.js ^
  --only_closure_dependencies ^
  --compilation_level ADVANCED_OPTIMIZATIONS ^
  --closure_entry_point=sga.page.Home ^
  --externs=closure-externs\jquery-1.9.js ^
  --externs=closure-externs\html5.js ^
  --externs=closure-externs\window.js ^
  --externs=closure-externs\gsap.js ^
  --externs=closure-externs\all.js ^
  --externs=closure-externs\pixi.js ^
  --externs=closure-externs\jquery_plugins.js ^
  --externs=closure-externs\others.js ^
  --create_source_map=sga-home.min.map ^
  --source_map_format=V3 ^
  --js_output_file=js\minified\sga-home.min.js

echo //@ sourceMappingURL=http://localhost/git/sga/wp_01/wp-content/themes/sga_2014/library/sga-home.min.map >> js\minified\sga-home.min.js
