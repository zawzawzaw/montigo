TODO AFTER LUNCH:

 1. final round of ie11 checks
 //2. check emulated ie10
 3. check ie10 on browserstack using account:

    username: info@manic.com.sg
    password: star6969 





AFTER LUNCH GROGINESS
 //1. perform js optimization / compression
    
    /*
    a. do WHITESPACE compression for all header js: use same order

    library/jquery/jquery-1.9.1.min.js
    library/_js/preloadjs-0.4.0.min.js
    library/_js/mobile-detect.min.js
    library/_js/montigo_modernizr_custom.js
    js/all.js
    library/jquery/jquery.manic.preloader.js

    */



still missing:
  //1. events booking form stylized dropdown
     //a. salutation
     //b. purpose
     //c. no of villas
     d. country (current code cannot support the country dropdown, too many items)

  ?? 2. if booking form is open & user scrolls, the faded bg shakes (also on chrome...) - disable controllers on booking form open.

  3. sometimes on some widths the arrow on the cta moves down alone & orphaned
  //4. booking events form
     //text area is resizable (remove with css)




test on ipad
 - see if content works for tablet


home page
  banner next line must be at 'to come'
  desktop h4 looks bad on mobile






//dining page
//  banner text copy not readable (copy too long ?)
//  need additional margin bottom (25) at end of each new text...


//events page
//  close button



activities page:
  favorites:
    can increase image size so you can scale it to fit width of phone browser?

//careers page
//  padding not enough
//    add 15 px 

//terms page
//  br on cta






//http://localhost/git/montigo/index.php
//http://localhost/git/montigo/events.php
//http://localhost/git/montigo/accomodation.php
//http://localhost/git/montigo/contact.php
//http://localhost/git/montigo/group_landing.php


http://localhost/git/montigo/faq.php

http://localhost/git/montigo/careers.php




events booking form
// faq page




montigo.content.Terms ??
 on window resize ?




----------


Remaining Design Questions:

1. Banner Image
   - copy text looks large
   - added a bit more padding on the sides


============================================


2. which goes first, image or text ?

   text first

   - offers page, dining image
     i currently went with text first cause the banner image might
     confuse user which image is associated with the text.

   - about page
     text before a sequence of images seems more understandable to the user.

   - parallax images use text first.


   image first

   - activities page
     outdoor activiy, aquatic adventure & sport and fitness
     image before text seems to work.

  jimmy's answer:
    no template is needed

3. Dining Page
   - dunno where to put opening times & specialties, so i removed them.

  jimmy's answer:
    //put after text


4. Activities Page
   - between 'sport & fitness' section & 'olu kids' section.
     not sure how to seperate sections

  jimmy's answer:
    it's fine

5. Terms & Privacy Page
   - initial title before text seems redaundant, can we remove it?
     (along with the short blue line)

  jimmy's answer:
    keep it


----------------------------


USE standard bootstrap navigation

leave terms and privacy banner (even if it is redaundant)


<!-- 
       _   _    ___ ____  _   _ ____  
      | | / \  |_ _|  _ \| | | / ___| 
   _  | |/ _ \  | || |_) | | | \___ \ 
  | |_| / ___ \ | ||  _ <| |_| |___) |
   \___/_/   \_\___|_| \_\\___/|____/ 
                                      
 -->


- JS CHECKS
  - remove create_scene from any mobile page js
  - php declaration of js, make sure no other js is called.

- modify jquery preloader
  - desktop_only_asset
  - mobile_only_asset

- home instagram sidebar
   - json loader
   - animate in on
      a. scroll position = okay
      b. images are loaded.             // this will not happen cause the thing is preloaded....

   - ps. place holders need to be there (grey boxes), so while images are animating in, there is no extra white space.

- events page booking form
  - add a 'x' close button


// RESPONSIVE

- accomodation page (desktop-laptop)
  if you shrink the browser window width below the 'accomodation map' fixed width (1280px) a horizontal scrollbar appears

- footer (desktop-laptop)
  on smaller pages, the inline blocks goes to next line
   - use smaller margin on smaller width?




/////////////////
WHEN TIME PERMITS
/////////////////

- compress js
  - add date picker to libraries                                                                            // IMPORTANT

- icons look blurry (fonts and svg)  don't do yet (acc to jimmy)

- image editing for all pages
  - save on a higher image size (min-width 1242)

- add fade to white, on page unload (if possible, not sure how...)

// ANIMATION

- icon section (desktop)
   create animation for each item to staggered fade in 
   just a one-off animate in

- events page floor plan animation
   - create manic component (swiffy json loader)
   - extend class (for this and the accomodations map)


<!-- 
   ____  _   _ ____  
  |  _ \| | | |  _ \ 
  | |_) | |_| | |_) |
  |  __/|  _  |  __/ 
  |_|   |_| |_|_|    
                     
 -->

1. wordpress: follow trax implementation (mailing list)
   add email validation

2. add event form validation & functionality (not yet, but eventually needed)

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
    //- footer 'join us'
      //remove 'x' on the side of the mailing list input box

    - pinned elements are shaking T____T
    // can't do anything about it?
    // i added something to the js for it (not sure about it though)


1. home page:
    - sidebar pinning. after pinning, extra space appears on the bottom of the promotions section
    - there is some extra space at the 
       (can't seem to take it away...)
    //- sidebar font. appears to be 'shaking' my less than 1px up and down while pinned
      //not just font, entire content appears to be shaking.

//2. offers page:
//  Advanced purchase offer
//  on hover, the text starts shifting ? like there is a hover state for the item (p tag becomes just justified)

3. events page:
    //- 'SEE FLOOR PLAN & EVENT CAPACITY'
    //button not scrolling down to floor plan section.
    // - on opening the event enquiry form
    //  scroll doesn't reset to 0

    //- event form
        //input is 2 px down the original position (not centered) 
        // apparently it's only the placeholders

 //on click of booking form, window doesn't scroll back to top



<!-- 
   ___ _____ _  ___  
  |_ _| ____/ |/ _ \ 
   | ||  _| | | | | |
   | || |___| | |_| |
  |___|_____|_|\___/ 
                     
 -->











<!-- 
  __        ___   _    _  _____   _____ ___     ____ _   _ _____ ____ _  __
  \ \      / / | | |  / \|_   _| |_   _/ _ \   / ___| | | | ____/ ___| |/ /
   \ \ /\ / /| |_| | / _ \ | |     | || | | | | |   | |_| |  _|| |   | ' / 
    \ V  V / |  _  |/ ___ \| |     | || |_| | | |___|  _  | |__| |___| . \ 
     \_/\_/  |_| |_/_/   \_\_|     |_| \___/   \____|_| |_|_____\____|_|\_\
                                                                           
 -->

1. view all pages:


css:
1. font rendering ?
2. spacing / layout


js:
0. home:
   sidebar 'FIND OUT MORE' must go to activities and scroll to section
1. offers: panel container per offer. (3 pages on each offer)
2. accomodation: 
   'our villas' panel container (next button & circles)
   map animation and hover

3. events
   booking form opens
   scroll on 'see floor plan' cta


3. faq: 
     all functions x__x

3. privacy policy: 
     on click, scroll to
     on scroll title changes
     back to top button
     



<!-- 
   ____   ____   _____ ___ ____  _____ _____ _____  __
  |  _ \ / ___| |  ___|_ _|  _ \| ____|  ___/ _ \ \/ /
  | |_) | |     | |_   | || |_) |  _| | |_ | | | \  / 
  |  __/| |___  |  _|  | ||  _ <| |___|  _|| |_| /  \ 
  |_|    \____| |_|   |___|_| \_\_____|_|   \___/_/\_\
                                                      
 -->

//All Pages
//  1. Choppy preloader animation

Home Page
  1. also has extra space (same as ie) after sidebar pinned item.




/*

Faq
  1. clicking on 'what's a ferry schedule' scrolled way past the content.
     - click on 'what's a ferry schedule' when you are scrolled too far results in the 'details' page to also be scrolled.
       (scrolling mechanism probably isn't working)

  had to remove the functionality suyeon asked for (auto scrolling to li)


*/



PC SAFARI
 
All Pages
  1. h4 tags are very thin using font size below 17px
  //2. parallax transitions are jumpy.

Home Page
  1. instagram sidebar only has 2 columns (wrong width or extra margins added)
  


<!-- 
   __  __    _    ____   ____    _    _____ _    ____  ___ 
  |  \/  |  / \  / ___| / ___|  / \  |  ___/ \  |  _ \|_ _|
  | |\/| | / _ \| |     \___ \ / _ \ | |_ / _ \ | |_) || | 
  | |  | |/ ___ \ |___   ___) / ___ \|  _/ ___ \|  _ < | | 
  |_|  |_/_/   \_\____| |____/_/   \_\_|/_/   \_\_| \_\___|
                                                           
 -->

All Pages
  //1. header navigation
     //- if you resize to 1213px width
     //- also the navigation 'about' overlaps the montigo logo    - no font loaded ..... omg

  //2. book now underline
     //- too close to the text 

  //3. logo looks blurred (footer, and copyright footer)   //header & 

  //4. animated svg doesn't work (stops at wierd frame)

  //5. parallax section a bit jaggy


Activities Page
  //1. fitness section & aquatic adventures
     //on a smaller width machine, the cta gets cut off

  2. the 'br' disaligns the email cta on smaller screens
  //3. the favorite activities text is too short & high (14 lines or 2-3 words per line)
  //4. our villa section
     //2 sliders, on low width, the text gets cut off.

Dining Page
  //1. tadds section
     //on low width screens,
     // text is larger than image & margin bottom of the text is followed (instead of the image) therefore looks wierd

  //2. opening hours (on smaller widths)
     //creates orphaned words, make font smaller instead.

  3. 


Events booking form
  //1. the dropdown have a gradient background
  2. 



<!-- 
   ____  _   ___   _______ ___  _   _   __  __    _ __   __  ____   __   
  / ___|| | | \ \ / / ____/ _ \| \ | | |  \/  |  / \\ \ / / |___ \ / /_  
  \___ \| | | |\ V /|  _|| | | |  \| | | |\/| | / _ \\ V /    __) | '_ \ 
   ___) | |_| | | | | |__| |_| | |\  | | |  | |/ ___ \| |    / __/| (_) |
  |____/ \___/  |_| |_____\___/|_| \_| |_|  |_/_/   \_\_|   |_____|\___/ 
                                                                         
 -->

1. icons look blurry
   - use vector graphics (fonts and svg)  - (2 hrs) + googling cause i haven't done this, ever.

//2. faq
//   - use one column of faq list page
//   - use same detail view, just no header and no sidebar            (1-1.5 hr)

//3. accomodation 2 sliders
//   - do as suggested in email                                         (30-1hr)

//4. accomodation map
//   - create image only for mobile.
//     jpg (min-width 1242)

