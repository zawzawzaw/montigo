

For more information, please email to reservations@montigoresorts.com    ????
or





<!-- 
   _____ ____ ____  _____ _   _ _____ ___    _    _     ____  
  | ____/ ___/ ___|| ____| \ | |_   _|_ _|  / \  | |   / ___| 
  |  _| \___ \___ \|  _| |  \| | | |  | |  / _ \ | |   \___ \ 
  | |___ ___) |__) | |___| |\  | | |  | | / ___ \| |___ ___) |
  |_____|____/____/|_____|_| \_| |_| |___/_/   \_\_____|____/ 
                                                              
 -->



0. OFFERS PAGE

1. replace icons with svg instead of png     (lower filesize, vector cleaner / non-pixelated look)
 - remove png from preloader asset list

2. Events Form (last item)

- in events page cta button, form should auto fill related event (like sga)
- add js validation (empty fields)
      - find previous class that took care of this   (joymatters?)


3. fix animation (parallax animation)


4. tidy js
   remove 'create_scrollmagic' from all pages
     - place it into default page

   remove has_main_image_pin from pages
   remove add_black_gradient
   remove 'this.controller3'



   remove check_svg_smil



   this.has_main_image_pin
    - check all pages


3. compress js (last last item)
  - add date picker to libraries


4. cross-browser checking (?)



improve quality of residences photo
stylized dropdown

- others - 
  Make Instagram feed work (TBC) 






<!-- 
       _   _    ___ ____  _   _ ____  
      | | / \  |_ _|  _ \| | | / ___| 
   _  | |/ _ \  | || |_) | | | \___ \ 
  | |_| / ___ \ | ||  _ <| |_| |___) |
   \___/_/   \_\___|_| \_\\___/|____/ 
                                      
 -->


FEATURES:
  1. newsletter subscription functionality (save to txt AJAX + VERIFICATION / output handling)
  2. responsive
     a. create a responsive header
     b. tweak footer to be centered
     c. modify main slider image & text to accomodate mobile style


  3. cross-browser check
  6. social metadata.




ANIMATION:
1. parallax main-slider-image 
2. icon animation
     home activities
     activities other icons
     spa signiture icons


2. rooms page, map interactivity.


1. parallax scene text animation






CODING PET PEEVES:

2. change montigo.page.Room to montigo.page.Villas   (and other things related to this)
3. move form stuff away from menu, to a seperate component 'MenuForm'
4. remove controller 3



<!-- 
   ____  _   ___   _______ ___  _   _ 
  / ___|| | | \ \ / / ____/ _ \| \ | |
  \___ \| | | |\ V /|  _|| | | |  \| |
   ___) | |_| | | | | |__| |_| | |\  |
  |____/ \___/  |_| |_____\___/|_| \_|
                                      
 -->

1. all images will have margins
 - different for left and right images



 
 
<!-- 
    ___  ____ _____ ___ ___  _   _    _    _     
   / _ \|  _ \_   _|_ _/ _ \| \ | |  / \  | |    
  | | | | |_) || |  | | | | |  \| | / _ \ | |    
  | |_| |  __/ | |  | | |_| | |\  |/ ___ \| |___ 
   \___/|_|    |_| |___\___/|_| \_/_/   \_\_____|
                                                 
 -->


1. parallax multi-layer image
   (for parallax images, not home page images)

2. multi-layer fade in
   (fade in foreground elements, before the bg elements)
   ex. bowl in restaurant images would fade in first before the back

3. If it would be possible to handwrite the titles
   'Dining at Montigo' to animate like a pen writing the text

4. image animate in
   - as you scroll all the images animate in, so we can explore options on how this happens
   1. like sword art online, intro.
     the image comes from  the white bg (image slides in like it is reverse imbosed from the page)

5. intro animation for home images
   - it zooms in to the image (multiple layer image)
     layers would scale proportionally into the image     

6. dining.php
   - private dining image (add flickering light looping svg)
     - create 3 variations




http://tympanus.net/Tutorials/3DHoverEffects/index2.html

