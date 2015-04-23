//1. add scrolling indicator (from distillery) - or was it sga.. ?
//2. on first scroll, the instagram sidebar will start to 'pop-up' from the image
//3. there will be image and copy change (email from josh, images edited by ernica)
//  image change
//  text change

4. center text on photo
     - specific to photo
       (see notebook for positioning)

bug:

// 6. fix photo stretching error.

// 5. photo-editing
//     - edit the blue of the sea to match the blue of the 6th instagram entry
//     - use masks

   - image is breaking up
   - image has bluish thing on the trees








360px
180px



//1. image, not yet edited correctly
//2. font is incorrect
//3. on press of scroll icon, it should scroll below the fold
//4. color of the image is not copied.

http://clients.manic.com.sg/montigo/
http://clients.manic.com.sg/montigo/alternative.html



------------------------------------

//1. make all italic text same fontsize and line height
//2. make early bird specials middle of specials and line
//3. make text longer than montigo resort
4. newsletter
 - make circle larger
 - line blue





UPLOAD IMAGES TO:
/subdomains/clients/httpdocs/montigo_temp/images/home_slider


DEFAULT
http://clients.manic.com.sg/montigo_temp/

WITH CUSTOM IMAGE
http://clients.manic.com.sg/montigo_temp/?homeimage=home_slider_image_02.jpg

WITH CUSTOM IMAGE & CUSTOM COLOR
http://clients.manic.com.sg/montigo_temp/?homeimage=home_slider_image_02.jpg&homeimagecolor=000000




Manic Image Div
  has_window_width: true
  has_window_height: true

  scale_mode: 
    best_fit
    show_all
    stretch
  
  best_fit_vertical_align:
    top
    center
    bottom

  best_fit_horizontal_align:
    left
    center - default
    right

  //border_color: #000000   , no need to specify (use css to override)


  
  - has image preloader :D
  - checks if image has been loaded

  - has image_source replacement function 
