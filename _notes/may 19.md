console.log('>>>>>>>>>>>>>>>>>>>>>>>>>');


<!-- 
   ____  _____ _____ _   _   _ _   _____ 
  |  _ \| ____|  ___/ \ | | | | | |_   _|
  | | | |  _| | |_ / _ \| | | | |   | |  
  | |_| | |___|  _/ ___ \ |_| | |___| |  
  |____/|_____|_|/_/   \_\___/|_____|_|  
                                         
 -->

1. all pages
    - new footer is causing horizontal scrollbar
    - all mailto:
        add subjects
    - if you shrink window width, footer doesn't work... (footer items overlap)



1. home page: 
    - blue line below 'Specials AN EARLY BIRD SUMMER GETAWAY' must be opacity 20% not 100%
    - use fixed 50 px below seafront perfection
    - use 50px after first row of restaurant image
    - 50 px margin bottom after 2nd row   


2. offers:
    - link up mail cta (most of the at the last page of the panel container)
    - ex: 'For more information, please email to info@montigoresorts.com' 


3. accomodation:
    - 'see our commonly asked questions' cta must go to http://localhost/git/montigo/faq.php#accommodations
      and open the faq details page for accomodations

    - 'get in touch with montigo' cta must go to contact us page
    - if you shrink the browser window width below the 'accomodation map' fixed width (1280px) a horizontal scrollbar appears


4. spa:
    - link up 'Please get in touch for rates & schedules' cta
    - 'See our full list of treatments here' open up in a different window

    - animate in each item (use same animation for home & activities page)
        don't use scrollbar, just a one-off animation


5. activities:
    - link up 'Please get in touch with the resort concierge or info@montigoresorts.com for rates and schedules.'
    - remove 'mailto:' href from buttons that turn the page. 
        ex. 'see more outdoor activities '

6. events:
    - #events-table-section .cta-button-container-container .cta-button-container
      must not be left aligned

    - event form, drop down must be stylized.
      (probably don't do for country... too long)
    - event form, date picker doesn't have functionality:
      if you select an arrival date, departure dates gets blocked out
      if you select an arrival date & departure date is already selected & less than arrival date, departure date resets

    - event form, add close button

7. faq
    - http://localhost/git/montigo/faq.php#at-the-resort
    fadein transition in effect, not applied to elements beyond 10th element (just add more css declarations)
    
8. contact
    - page doesn't work for width '1067'
    - on scroll down 'see our frequently asked question' cta still visible (doesn't turn invisible)
      (create customized animate in for contact page)

9: careeers:
    - add subject on 'Please send your CV with photo, three references, salary expectation, and notice period to info@montigoresorts.com' cta
    - distance from footer not 80px
    - #career-item-container,   padding top: 80px instead of 82px;



<!-- 
   ___ _____ _ _ 
  |_ _| ____/ / |
   | ||  _| | | |
   | || |___| | |
  |___|_____|_|_|
                 
 -->

0. all pages
    - parallax animation is not smooth.
    - header booking form
      input fields are not vertically centered
    - footer 'join us'
      remove 'x' on the side of the mailing list input box

    - pinned elements are shaking T____T


1. home page:
    - sidebar pinning. after pinning, extra space appears on the bottom of the promotions section
    - sidebar font. appears to be 'shaking' my less than 1px up and down while pinned
      not just font, entire content appears to be shaking.




2. offers page:
  Advanced purchase offer
  on hover, the text starts shifting ? like there is a hover state for the item (p tag becomes just justified)

3. events page:
    - 'SEE FLOOR PLAN & EVENT CAPACITY'
      button not scrolling down to floor plan section.
    - on opening the event enquiry form
      scroll doesn't reset to 0
    - event form
        input is 2 px down the original position (not centered)

4. 








CROSS BROWSER CHECK

1. view all pages:


css:
1. font rendering ?
2. spacing / layout


js:
0. home:
   sidebar 'FIND OUT MORE' must go to activities and scroll to section
1. offers: panel container per offer. (3 pages on each offer)
2. accomodation: 'our villas' panel container (next button & circles)
3. faq: 
     all functions x__x

3. privacy policy: 
     on click, scroll to
     on scroll title changes
     back to top button
     






// css suggestions (to discuss with suyeon)

2. need close button on event form
   - i will just add a 'x' button
 
// don't do according to suyeon this is correct.
// 1. fixed 80px from footer (no matter what.)
   - home, spa, activities pages (icons)
   - careers page
   - faq
   - privacy policy


3. faq, detail view, no obvious back button
   - aside from pressing the 'backspace' or 'back' of the browser
   - i will just add a 'x' button

//4. contact, elements don't work for width '1067'
//   - i will just scale everything proportionally after reaching a certain width
//   - just removed 1 element



home 
    - use fixed 50 px below seafront perfection
    - use 50px after first row of restaurant image
    - 50 px margin bottom after 2nd row



<!-- 
       _  ___  ____  _   _ 
      | |/ _ \/ ___|| | | |
   _  | | | | \___ \| |_| |
  | |_| | |_| |___) |  _  |
   \___/ \___/|____/|_| |_|
                           
 -->

1. cross-browser checking (?)
  mac safari
  //IE 11
  IE 10

2. responsive website

3. wordpress: follow trax implementation (mailing list)
   add email validation

4. add event form validation & functionality (not yet, but eventually needed)






<!-- 
       _   _    ___ ____  _   _ ____  
      | | / \  |_ _|  _ \| | | / ___| 
   _  | |/ _ \  | || |_) | | | \___ \ 
  | |_| / ___ \ | ||  _ <| |_| |___) |
   \___/_/   \_\___|_| \_\\___/|____/ 
                                      
 -->

1. floor plan animation
   - create manic component (swiffy json loader)
   - extend class (for this and the accomodations map)


2. home instagram sidebar
   - json loader
   - animate in on
      a. scroll position = okay
      b. images are loaded.             // this will not happen cause the thing is preloaded....

   - place holders need to be there (grey boxes), so while images are animating in, there is no extra white space.

3. create more powerful 'default' page
     remove js page for those that don't need one.

4. replace icons with svg instead of png     (lower filesize, vector cleaner / non-pixelated look)
   - remove png from preloader asset list
   - create font files ?

5. compress js (last last item)
  - add date picker to libraries                                                                            // IMPORTANT






6. create more powerful image container
  - publish this on git !!
  - needs max_y as well (border 50)


7. add fade to white, on page unload (if possible, not sure how...)



































/*
dining private dinin
  center crop (horizontal)
*/


/*

activiites
  olu kids
  center crop
  text, 50 from left
*/







//accomodation residences
//  50px FROM RIGHT
//  CROP left only

//SEA FRONT
// 50px FROM RIGHT

//INSPIRED EVENTS
//  50px FROM RIGHT
//  CROP left only

//invilla dining
//  50px FROM RIGHT
//  CROP left only

//events wedding
//  50px FROM RIGHT
//  CROP left only


IE 11

  home page:
    sidebar pinning. after pinning

  //general
    //cta-button
       //- fa chevron moved down by a few pixels
    //preloader
       ?? - svg graphic is not animating ? (although this is already ie11)    - some other day.
       // - animations didn't load ...

    hr.short-hr
       is sometimes in the center when it's suppose to be in the left...  



  //header
      //menu booking form
      //line 280 
      //if (this.arrival_date.getTime() > this.departure_date.getTime()){
    //montigo.component.MenuBookingForm.prototype.update_night_value = function() {
      //parent form is undefined..
  //footer
   //- mailing list button is not aligned (use fa-chevron-circle-right instead... )
   //- footer logo needs hover state.





offers.php
  Advanced purchase offer
  on hover, the text starts shifting ? like there is a hover state for the item (p tag becomes just justified)

//accommodation.php
  //preloader doesn't work




TODO AFTER LUNCH:


home page spacing issues
  - use fixed 50 px below seafront perfection
  - use 50px after first row of restaurant image
  - 50 px margin bottom after 2nd row



crossbrowser checking
floor plan animation?




<!-- 
       _  ___  ____  _   _ 
      | |/ _ \/ ___|| | | |
   _  | | | | \___ \| |_| |
  | |_| | |_| |___) |  _  |
   \___/ \___/|____/|_| |_|
                           
 -->


//1. accomodation page: remove 'argon' image and copy
//2. add faq to menu
//   adjust header responsive rules
//3. remove 'Argan bath amenities'

-----

//4. about page coding

4. cross-browser checking (?)
  mac safari
  ie 10



// 5. new footer.




5. responsive website

4. wordpress: follow trax implementation (mailing list)
   add email validation

5. add event form validation & functionality (not yet, but eventually needed)



<!-- 
   ____  _   ___   _______ ___  _   _ 
  / ___|| | | \ \ / / ____/ _ \| \ | |
  \___ \| | | |\ V /|  _|| | | |  \| |
   ___) | |_| | | | | |__| |_| | |\  |
  |____/ \___/  |_| |_____\___/|_| \_|
                                      
 -->


//1. remove align left on cta-button-container
//2. remove margin rule for all text
//3. dining page:
//     pantai section:
//        align text to center of entire section (including the bottom part :D)
//4. montigo-image-description
//     hr 
//       opacity needs to be 0.2 not 0.1






NEED:
// 1. new dining banner image
2. new dining tadds image
3. new footer psd

TO DISCUSS:
1. to discuss per parallax image (different cropping rule & positioning)

  (prepare code for parallax images)
     data-horizontal-crop
     data-vertical-crop


<!-- 
       _   _    ___ ____  _   _ ____  
      | | / \  |_ _|  _ \| | | / ___| 
   _  | |/ _ \  | || |_) | | | \___ \ 
  | |_| / ___ \ | ||  _ <| |_| |___) |
   \___/_/   \_\___|_| \_\\___/|____/ 
                                      
 -->

1. floor plan animation
   - create manic component (swiffy json loader)
   - extend class (for this and the accomodations map)

1. create more powerful 'default' page
     remove js page for those that don't need one.


3. Make Instagram feed work (TBC)
    - use json for now.  (follow format of last project that used instagram ? distillery ? )


4. replace icons with svg instead of png     (lower filesize, vector cleaner / non-pixelated look)
   - remove png from preloader asset list
   - create font files ?
   -

snapping target (if possible, since this is what the designer wanted)


3. compress js (last last item)
  - add date picker to libraries









all footer cta's must look the same....


//activities favorites image alignment



//align right buttons
//  - dining button.


FORMAT ALL PARALLAX IMAGES
 - give them all the same positioning (percentage wise ? )


// 

optional:

  1. animate 'meetings and event'
    floor plan


  2. use json to load instagram (on home page)

