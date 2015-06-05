java -jar "compiler.jar" ^
  --js=..\js\manic\**.js ^
  --js=..\js\montigo\**.js ^
  --js=closure-library\**.js ^
  --only_closure_dependencies ^
  --compilation_level ADVANCED_OPTIMIZATIONS ^
  --closure_entry_point=montigo.page.Terms ^
  --externs=closure-externs\jquery-1.9.js ^
  --externs=closure-externs\html5.js ^
  --externs=closure-externs\window.js ^
  --externs=closure-externs\gsap.js ^
  --externs=closure-externs\all.js ^
  --externs=closure-externs\jquery_plugins.js ^
  --externs=closure-externs\scrollmagic.js ^
  --externs=closure-externs\others.js ^
  --create_source_map=..\js\montigo-page-terms.min.map ^
  --source_map_format=V3 ^
  --js_output_file=..\js\minified\montigo-page-terms.min.js

echo //@ sourceMappingURL=http://localhost/git/montigo/js/montigo-page-terms.min.map >> ..\js\minified\montigo-page-terms.min.js
