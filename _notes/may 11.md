//booking form functionality
 //- night is not a drop down (it is a simple text field)
 //- when both arrival date and departure date are completed, it will be auto filled with how many nights

//menu-booking-form-calendar-container 
 // - must be inside the booking container... naaah



//CAREERS PAGE
// - Json parser html


//TERMS & PRIVACY PAGES:
  //1. on user press on sidebar link, it would scroll to section
  //2. scroll to top button
  // 3. breadcrumb pinning

  //4. breadcrumb title changing on user scrolldown to section
  //- ???? 
    // on press of initial [0] tag
       //- goto top position
    //- place 'scroll-target' inside 'generic-text-item'


FAQ PAGE
  

  // 1. back to top button                                                                 // not needed anymore.
     //a. should not be visible if height is less than window height
     // b. should 'stay' when you get to the footer

  //4. add hashtag functionality
     //(history, back button, on hashtag change)
     
  //0. remove min-height animation
     //- use autoAlpha TweenMax
  //2. on question click, after going to level 2 & scroll page to question
  //3. pin sidebar

  


ALL PAGES
  1. create more powerful 'default' page
     remove pages that don't need one.

  //2. add hashtag functionality
     //(history, back button, on hashtag change)

  // 3. add scrolltarget offset functionality





//export terms and conditions image again....

// this doesn't work
//http://localhost/git/montigo/spa.php
//http://localhost/git/montigo/careers.php


REMOVE EXTRA PLUGIN








//add offset data to scroll targets
remove all pages JS
 - 






2629




TODO AFTER LUNCH:

// populate terms and policy HTML with content from psd
// add scroll target



//add script for scroll target 
//when window location changes hashtag, ( follow implementation of juno sga ) // didn't do this implementation



//<div class="scroll-target" data-value=""></div>
// - do for all sections in all pages...



// Allow people to post comments on new articles  - disable for wordpress







FAQ
 //- back to top button
 //- on click of item, scroll to position (on detailed view)
 ??  - you can only select the first 4 buttons
 ??    doesn't matter which you click, it will be selected

 //- pinning header & sidebar on scroll
 //- change breadcrumb on item click



  //programming of faq functionality
    //- create html
    //- add class (max-height: 0, max-height:3000 ) 




//improve quality of residences photo
//stylized dropdown

- others - 
  Make Instagram feed work (TBC) 
   - or at least use a json feed for data.
     (animate the results in and out)
     push and pop





<!-- 
   _____ ____ ____  _____ _   _ _____ ___    _    _     ____  
  | ____/ ___/ ___|| ____| \ | |_   _|_ _|  / \  | |   / ___| 
  |  _| \___ \___ \|  _| |  \| | | |  | |  / _ \ | |   \___ \ 
  | |___ ___) |__) | |___| |\  | | |  | | / ___ \| |___ ___) |
  |_____|____/____/|_____|_| \_| |_| |___/_/   \_\_____|____/ 
                                                              
 -->



//0. OFFERS PAGE

1. replace icons with svg instead of png     (lower filesize, vector cleaner / non-pixelated look)
 - remove png from preloader asset list

2. Events Form (last item)

- in events page cta button, form should auto fill related event (like sga)
- add js validation (empty fields)
      - find previous class that took care of this   (joymatters?)


//3. fix animation (parallax animation)


//4. tidy js
   //remove 'create_scrollmagic' from all pages

     //- place it into default page

   //remove has_main_image_pin from pages
   //remove add_black_gradient
   //remove 'this.controller3'


   remove check_svg_smil


   remove create_text_scene_2

   this.has_main_image_pin
    - check all pages

3. compress js (last last item)
  - add date picker to libraries


4. cross-browser checking (?)









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
       _  ___  ____  _   _ 
      | |/ _ \/ ___|| | | |
   _  | | | | \___ \| |_| |
  | |_| | |_| |___) |  _  |
   \___/ \___/|____/|_| |_|
                           
 -->




// 1. fix favicon warning on montigo site.

// I went to start on this page and there’s a Trojan on the website under the favicon. I think maybe Josh should take a look at it and make sure it’s clean on his end, so I don’t risk getting any viruses on my computer by downloading images and we don’t get any more Kaspersky warnings.

2. jerky parallax image animation

3. sylized dropdowns on event form

4. Instagram feed is a fix, needs to work properly when going live. 
  - do temp, json loading for now

5. Email CTA x 20 need to change to 'info@montigoresorts.com' (we shall do this together, I can point them out)                // only thing in this list.



//FAQ
//  What is the cancellation policy?
//   - where do i link "Best Available Rates"

//  What is the ferry schedule?
//    - is this bantam fast pdf of ferry schedule?

//  What time is breakfast available?
//    - Breakfast is served at <a href="dining.php">TADD's</a> on
//    - shall i link these to the dining page & scroll down to tadds ?  (same for tiigo bar)

//  Can we purchase snacks in or near the resort?
//    - where do i link "Montigo Cabin"


//  What are the opening hours of the Montigo facilities?
//    - where do i link 'montigo cabin', 'gym', 'OLO Kid's Club'


-----------------------------------

MAY 12 LIST

// 1. make map animate in faster
// 3. parallax text moved up a bit (not same position as before)
// 4. edit faq json as per josh's email

    //What is the cancellation policy? Where do i link "Best Available Rates"
    //I’ve checked, this does not need to be linked anywhere. Just ignore. 

    //What is the ferry schedule?
    //Can we link to the attached please. As a download in a new window tab (like the menu’s) 

    //What time is breakfast available?
    //- Shall I link these to the dining page & scroll down to Tadds (same for tiigo bar)?
    //Yes please. 

    //Can we purchase snacks in or near the resort? Where do i link "Montigo Cabin”?
    //We don't have a section for the Montigo Cabin so please disregard, no link needed.

    //What are the opening hours of the Montigo facilities? Where do I link 'montigo cabin', 'gym', 'OLO Kid's Club’
    //No link needed. 

//5. scroll magic bug (on header not fading back in when on scroll 0)
 - added possible fix
// 6. stylized dropdown

------------------------------------

MAY 13 LIST

Here we are buddy, here is my list: 

// Change seafront perfection image to the spa image (The one Suyeon told you about) 
// Contact us and FAQ being coded (I know thats in progress) 
// Stylise booking engine drop-downs 




Small things:
  //• HP, link Tilo treasure hunt to lower activities page (the Tilo area)
  //• HP, link offers and packed off HP & snap in correct place in ‘offers and packages)
  //• Link accommodation amenities CTA to FAQ when ready 

Thanks matey  





<!-- 
   ____  _   ___   _______ ___  _   _ 
  / ___|| | | \ \ / / ____/ _ \| \ | |
  \___ \| | | |\ V /|  _|| | | |  \| |
   ___) | |_| | | | | |__| |_| | |\  |
  |____/ \___/  |_| |_____\___/|_| \_|
                                      
 -->

! edit document


CONTACT PAGE
 //- if height is small enough, the 'h3' overlaps with 
 //- re-add footer
 //- image color is off (different from psd)
 //- IMAGE WILL NOT SCALL AT ALL, just crop


FAQ PAGE
 -  level 2
     // item title has extra spacing at bottom
    // sidebar bold is not bolding (700)
       // maybe just a pc rendering thing... 
      // it is just a PC thing... ( brandon bold really renders like that, no use fussing about it.)

1. all images will have margins
 - different for left and right images (to discus again with suyeon)







MAY 12


main slider
 - dining image
 - cannot crop beyond 700px (start scaling)


//sea front perfection image parallax image
// - use the spa main image
// - spa image we will replace with something else ~!!!!



DINING IMAGE:
 text alignment
   - there is extra padding at the top of the cta button (follow the same spacing as 'text description')

 'horizontal_align': 'right',
   - modify manic.ui.textcontainer
            manic.ui.imagecontainer

            to be able to expose option variables fixed
            to expose update_layout variable




(nightmare to implement)
 - snap to parallax images
   (maybe you can add a scene that takes up 100% plus minus 30px )
    - will call a method on start / on enter
      Tweenmax.scrollTo

      use http://janpaepke.github.io/ScrollMagic/examples/advanced/anchor_link_scrolling.html#bottom


 
 
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

