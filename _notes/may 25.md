todo today:

2 hrs morning:
 - js structure
 - panel container           (finish offers page v2)
 - manic-image-container

2 hrs groggy after lunch
 - accomodation 2 slider
 - terms and conditions     (finish page)
 - privacy                  (finish page)

3 hrs peak
 - icons look blurry (fonts and svg)
 - parallax section



pre-requisites
 - default js (1)




<!-- 
   ____  _   ___   _______ ___  _   _   __  __    _ __   __  ____   __   
  / ___|| | | \ \ / / ____/ _ \| \ | | |  \/  |  / \\ \ / / |___ \ / /_  
  \___ \| | | |\ V /|  _|| | | |  \| | | |\/| | / _ \\ V /    __) | '_ \ 
   ___) | |_| | | | | |__| |_| | |\  | | |  | |/ ___ \| |    / __/| (_) |
  |____/ \___/  |_| |_____\___/|_| \_| |_|  |_/_/   \_\_|   |_____|\___/ 
                                                                         
 -->

1. icons look blurry
   - use vector graphics (fonts and svg)  - (2 hrs) + googling cause i haven't done this, ever.

2. manic image container
   - don't crop, use full width of the browser. auto height (15 mins)
   - actually don't instaciate for mobile, just

3. panel container 
   - create auto-height resizing component  (needed for offers page)    (2-3 hrs)
   - follow same padding as montigo-image-description 

4. banner img                                                     (1-1.5 hrs)
   - increase quality (looks blurred on mobile)
   - create portait version of image so it doesn't have to load the large landscape one

5. faq
   - use one column of faq list page
   - use same detail view, just no header and no sidebar            (1-1.5 hr)

6. parallax section
   - use full width of img
   - put text below the image.
   - use styling as montigo-image-descrioption                       (30-1hr)

7. accomodation 2 sliders
   - do as suggested in email                                         (30-1hr)

8. accomodation map
   - create alternative version (using only map)
     (maybe we can have the text as a seperate div - create text positioning using css)         (1hr due to css pixel perfect positions)
     display none on mobile





























Responsive question

0. overall

   <p>
   we might need slightly smaller body text rather than 
   brandon grotesk light 15px / 22px

   it looks slightly too large in a mobile screen

   <h4>
   desktop size is too large for mobile.
   used same 15/22 for it (temporarily)




1. Header design
   shall we implement the header like trax ?

2. Footer Design
   i tried implementing it as 1 column, but now it takes up too much space...

3. main banner treatment
   currently has came cropping mechanism from the desktop version
   text fits, although images might not make sense.

4. parallax sections
   ?? not sure how to convert for mobile.




5. Accomodation 'our villa' image set:
   this might not work as 2 seperate columns on mobile.
   i suggest we put all the copy & images into 1 long scrollable column. no sliding functionality




6. faq.
   let's implement as one long list.
   no sidebar
   no pinned header

7. terms & conditions
   let's implement as one long list
   no sidebar
   no pinned header
   no back to top button











<!-- 
   ____  _____ ____  ____   ___  _   _ ____ _____     _______ 
  |  _ \| ____/ ___||  _ \ / _ \| \ | / ___|_ _\ \   / / ____|
  | |_) |  _| \___ \| |_) | | | |  \| \___ \| | \ \ / /|  _|  
  |  _ <| |___ ___) |  __/| |_| | |\  |___) | |  \ V / | |___ 
  |_| \_\_____|____/|_|    \___/|_| \_|____/___|  \_/  |_____|
                                                              
 -->

accomodation page:
    - if you shrink the browser window width below the 'accomodation map' fixed width (1280px) a horizontal scrollbar appears

footer
 - on smaller pages, the inline blocks goes to next line
   - use smaller margin on smaller width




A. icons 
 - look blurred
 - need to implement font set...

B. images 
 - looks blurred
 - damn phone has a retina screen T_T
 - you have to create all the images again, but 2x the size ... (this would make the site)
   - experiment with 1.5x (use about page)




footer is now too large
 - 





TODO AFTER LUNCH:
 - css of pages that use default.js, 
     
 - footer


DEFAULT.JS
 - create 'create_parallax_section' function
    - loop through 'parallax-section'
 - create 'create_book_promo_buttons' functions
    - loop through '.promo-code-button' & use book_promo_code function
      buttons has 'data-promo-code' attr

 - create 'book_promo_code' function

 - create 'create_career_content' function

 - ActivityItem (same as offer item)
 - VillaItem - has 2 panel containers


 - remove activities.js
 - remove offers.js
 - remove dining.js
 - remove grouplanding.js
 - remove rooms.js


larger filesize for all pages
 - cause we have to import all components

but js is reusable for most pages (most default pages)
 - exceptions:
   home
   faq
   events
   terms

------------

create mobile version of those needed

 - COMPONENTS
   - main image
   - parallax image
   -
 - 

 - PAGES 





this.career_content = new montigo.content.Careers({},$('#career-classified-section'))






WHEN YOU RECOVER
 - create default mobile page



AROUND 4PM
 - ask suyeon to discus possible implementation of mobile header.



<!-- 
      _    _   _ ___ __  __    _  _____ ___ ___  _   _ 
     / \  | \ | |_ _|  \/  |  / \|_   _|_ _/ _ \| \ | |
    / _ \ |  \| || || |\/| | / _ \ | |  | | | | |  \| |
   / ___ \| |\  || || |  | |/ ___ \| |  | | |_| | |\  |
  /_/   \_\_| \_|___|_|  |_/_/   \_\_| |___\___/|_| \_|
                                                       
 -->

spa page:
- animate in each item (use same animation for home & activities page)
        don't use scrollbar, just a one-off animation









Montigo Terms and Conditions Enquiry
Montigo Privacy Enquiry

Montigo Offers: Fun for Four Enquiry
Montigo Offers: Spa Getaway Enquiry
Montigo Offers: Montigo Dining Enquiry
Montigo Offers: High Tea Enquiry
Montigo Offers: Advanced Purchase Enquiry
Montigo Offers: Family Times Enquiry

Montigo Dining: Tadd's Reservation
Montigo Dining: Pantai Reservation
Montigo Dining: Tiigo Reservation
Montigo Dining: Private Dining Enquiry
Montigo Dining: In-Villa Dining Enquiry


Montigo Faq: Additional Guest Booking
Montigo Faq: Additional Guest Booking
Montigo Faq: Ferry Booking
Montigo Faq: Pick Up Booking
Montigo Faq: Early Checkin Request
Montigo Faq: Baby Cot Request

Montigo Careers: Application

Montigo Contact Us: Reservation


Montigo Activities: Book Activities
Montigo Activities: Rates & Schedules Enquiry
Montigo Activities: Rates & Schedules Enquiry
Montigo Activities: Rates & Schedules Enquiry
Montigo Activities: Olo Kids Club Enquiry
Montigo Activities: Rates & Schedules Enquiry


Montigo Accommodation: The Residences Enquiry

Montigo Spa: Rates & Schedules Enquiry


?subject=Montigo%20Terms%20and%20Conditions%20Enquiry
?subject=Montigo%20Privacy%20Enquiry

?subject=Montigo%20Offers%3A%20Fun%20for%20Four%20Enquiry
?subject=Montigo%20Offers%3A%20Spa%20Getaway%20Enquiry
?subject=Montigo%20Offers%3A%20Montigo%20Dining%20Enquiry
?subject=Montigo%20Offers%3A%20High%20Tea%20Enquiry
?subject=Montigo%20Offers%3A%20Advanced%20Purchase%20Enquiry
?subject=Montigo%20Offers%3A%20Family%20Times%20Enquiry

?subject=Montigo%20Dining%3A%20Tadd%27s%20Reservation
?subject=Montigo%20Dining%3A%20Pantai%20Reservation
?subject=Montigo%20Dining%3A%20Tiigo%20Reservation
?subject=Montigo%20Dining%3A%20Private%20Dining%20Enquiry
?subject=Montigo%20Dining%3A%20In-Villa%20Dining%20Enquiry

?subject=Montigo%20Faq%3A%20Additional%20Guest%20Booking
?subject=Montigo%20Faq%3A%20Ferry%20Booking
?subject=Montigo%20Faq%3A%20Pick%20Up%20Booking
?subject=Montigo%20Faq%3A%20Early%20Checkin%20Request
?subject=Montigo%20Faq%3A%20Baby%20Cot%20Request

?subject=Montigo%20Careers%3A%20Application



?subject=Montigo%20Contact%20Us%3A%20Reservation

mailto:info@montigoresorts.com?subject=Montigo%20Activities%3A%20Book%20Activities
mailto:info@montigoresorts.com?subject=Montigo%20Activities%3A%20Rates%20%26%20Schedules%20Enquiry
mailto:info@montigoresorts.com?subject=Montigo%20Activities%3A%20Olo%20Kids%20Club%20Enquiry

?subject=Montigo%20Spa%3A%20Rates%20%26%20Schedules%20Enquiry


?subject=
?subject=
?subject=


mailto:info@montigoresorts.com
mailto:info@montigoresorts.com?subject=Montigo%20Offers%3A%20Advanced%20Purchase%20Enquiry
mailto:info@montigoresorts.com?subject=Montigo%20Offers%3A%20Family%20Times%20Enquiry


mailto:info@montigoresorts.com?subject=Montigo%20Accommodation%3A%20The%20Residences%20Enquiry
mailto:info@montigoresorts.com?subject=Montigo%20Spa%3A%20Rates%20%26%20Schedules%20Enquiry

<!-- 
    ____ _   _ ____   ___  __  __ _____ 
   / ___| | | |  _ \ / _ \|  \/  | ____|
  | |   | |_| | |_) | | | | |\/| |  _|  
  | |___|  _  |  _ <| |_| | |  | | |___ 
   \____|_| |_|_| \_\\___/|_|  |_|_____|
                                        
 -->


//1. all pages
//    - all mailto:
//        add subjects

//1. home page: 
//    - blue line below 'Specials AN EARLY BIRD SUMMER GETAWAY' must be opacity 20% not 100%
//    - use fixed 50 px below seafront perfection
//    - use 50px after first row of restaurant image
//    - 50 px margin bottom after 2nd row   

//2. offers:
//    - link up mail cta (most of the at the last page of the panel container)
//    - ex: 'For more information, please email to info@montigoresorts.com' 

//3. accomodation:
//    - 'see our commonly asked questions' cta must go to http://localhost/git/montigo/faq.php#accommodations
      and open the faq details page for accomodations

//    - 'get in touch with montigo' cta must go to contact us page // made it mailto instead
//    - if you shrink the browser window width below the 'accomodation map' fixed width (1280px) a horizontal scrollbar appears  (moved to responsive list)


//4. spa:
    //- link up 'Please get in touch for rates & schedules' cta
    //- 'See our full list of treatments here' open up in a different window

    
//5. activities:
    //- link up 'Please get in touch with the resort concierge or info@montigoresorts.com for rates and schedules.'
    //- remove 'mailto:' href from buttons that turn the page. 
        ex. 'see more outdoor activities '

//6. events:
    //- #events-table-section .cta-button-container-container .cta-button-container
      must not be left aligned

    - event form, drop down must be stylized.
      (probably don't do for country... too long)
    - event form, date picker doesn't have functionality:
      if you select an arrival date, departure dates gets blocked out
      if you select an arrival date & departure date is already selected & less than arrival date, departure date resets
    - event form, add close button

//7. faq
//    - http://localhost/git/montigo/faq.php#at-the-resort
//    fadein transition in effect, not applied to elements beyond 10th element (just add more css declarations)
    
//8. contact
    // - page doesn't work for width '1067' (fixed with suyeon, removed an element)
    // - on scroll down 'see our frequently asked question' cta still visible (doesn't turn invisible)
      (create customized animate in for contact page)

//9: careeers:
    //- add subject on 'Please send your CV with photo, three references, salary expectation, and notice period to info@montigoresorts.com' cta
    //- distance from footer not 80px (it's okay according to suyeon)
    //- #career-item-container,   padding top: 80px instead of 82px;






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
       _   _    ___ ____  _   _ ____  
      | | / \  |_ _|  _ \| | | / ___| 
   _  | |/ _ \  | || |_) | | | \___ \ 
  | |_| / ___ \ | ||  _ <| |_| |___) |
   \___/_/   \_\___|_| \_\\___/|____/ 
                                      
 -->

// ALL THESE THINGS ARE OPTIONAL

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


6. add fade to white, on page unload (if possible, not sure how...)



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
2. accomodation: 'our villas' panel container (next button & circles)
3. faq: 
     all functions x__x

3. privacy policy: 
     on click, scroll to
     on scroll title changes
     back to top button
     










<!-- 
       _  ___  ____  _   _ 
      | |/ _ \/ ___|| | | |
   _  | | | | \___ \| |_| |
  | |_| | |_| |___) |  _  |
   \___/ \___/|____/|_| |_|
                           
 -->

1. Site Responsiveness
2. Cross Browser Optimization
3. Optimization (js)
4. Wordpress







// jai

// suyeon

2. need close button on event form
   - i will just add a 'x' button

9. faq sidebar going over page & footer