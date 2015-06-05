goal of today:

finish homepage
about
offer
accomodation

wordpress ^___^


1. IE9 support
2. android chrome (mobile)




database name: wp_montigo_nongsa
username: nongsa_user
password: mon7i6oDatabas3Pas5w0rd



AFTER LUNCH

1. DP image resizing staging link
2. montigo header and footer files.
   a. modify font access to include booking engine site
   //b. join us footer to link to blank, make note that this will eventually point somewhere else
   //c. white version of header from the get go
   //d. remove 'book now button'


<!-- 
  __        _____  ____  ____  ____  ____  _____ ____ ____  
  \ \      / / _ \|  _ \|  _ \|  _ \|  _ \| ____/ ___/ ___| 
   \ \ /\ / / | | | |_) | | | | |_) | |_) |  _| \___ \___ \ 
    \ V  V /| |_| |  _ <| |_| |  __/|  _ <| |___ ___) |__) |
     \_/\_/  \___/|_| \_\____/|_|   |_| \_\_____|____/____/ 
                                                            
 -->

database name: wp_montigo
username: root
password: 
host: localhost


wordpress username: admin
wordpress password: p@ssword1234





//0. copy as much from SGA as possible ^__^






//////////////
PAGE TEMPLATES
//////////////

page.php
page-events.php
page-faq.php
page-rooms.php
page-terms.php


will still need individual pages cause we need something for types to link stuff to


/////////
TEMPLATES
/////////

search.php = empty  - don't do this !!
//sidebar.php = empty



/////////////
theme options
/////////////

facebook link
instagram link



///////////
IMAGE SIZES
///////////

banner_image
1408 x 830                  - or (1366 x 640) ?

banner_image_mobile
1242 x 2208


mobile_image (will work for tablet)
1242 x _____
(auto resize)



?? parallax 1440 x 900

 - NEEDS TO BE ABLE TO NEXT TYPES
 - NEEDS TO BE ORDERABLE BY DEFAULT


http://metabox.io/meta-box/



<!-- 
   _______   ______  _____ ____  
  |_   _\ \ / /  _ \| ____/ ___| 
    | |  \ V /| |_) |  _| \___ \ 
    | |   | | |  __/| |___ ___) |
    |_|   |_| |_|   |_____|____/ 
                                 
 -->


Page
 - banner image


Banner Image
 - image (1408 x 830 with gradient at top)
 - mobile image (1242 x 2208 jpg 61% quality)
 - title text
 - copy text
 

Parallax Image
 - image
 - title
 - subtitle
 - cta copy (can be multiple)
 - cta link (can be multiple)

 
 - text x
 - text y
 - pinned (checkbox)


Icon Item
 - icon (file) can be transparent raster png or vector svg
 - title
 - copy


Image with Description
 - image
 - title
 - subtitle
 - copy
 - cta copy (can be multiple)
 - cta link (can be multiple)

Desciption
 - title
 - subtitle
 - copy
 - cta copy (optional)
 - cta link

List Description
 - title
 - item (multiple)
 - cta copy (optional)
 - cta link


Offer Item
 - image
 - url hashtag
 - description
   - title
   - subtitle
   - copy

   - booking code  (letters)
   - booking copy
   - contact copy
   - contact link

 - offer inclusion
   - title
   - item (multiple)    - needs 'seperator' element  |||| - signifies seperation
                        - used in spa offer inclution
   - 

 - terms and conditions
   - item (multiple)
   - has own page (checkbox)


Floor Plan Details (all text items)
 - function room name
 - dimentions
 - ceiling height
 - banquet capacity
 - standing cocktail capacity
 - theather capacity
 - classroom capacity
 - u shape capacity
 - board room capacity



FAQ Question              
 //- title (text)         - not needed cause wordpress has defaults for this
 //- html copy (html)

FAQ Section
 - title
 - array of 'FAQ Question'


Contact Item
 //- title                - not needed cause wordpress has defaults for this
 //- html copy (html)


TNC Item
 //- title                - not needed cause wordpress has defaults for this
 //- html copy (html)
 - url hashtag
 

<!-- 
   _   _  ___  __  __ _____ 
  | | | |/ _ \|  \/  | ____|
  | |_| | | | | |\/| |  _|  
  |  _  | |_| | |  | | |___ 
  |_| |_|\___/|_|  |_|_____|
                            
 -->

Promotions Title
Promotions Subtitle

Promotion 01 'Image with Description'
Promotion 02 'Description'
Promotion 03 'Description'

Instagram Sidebar 'Description'

Tilo 'Description'

Restaurant 01 'Image with Description'
Restaurant 02 'Image with Description'

Accomodations 'Parallax Image'
Events 'Parallax Image'

array of 'Icon Item'

activities cta copy
activities cta link


<!-- 
      _    ____   ___  _   _ _____ 
     / \  | __ ) / _ \| | | |_   _|
    / _ \ |  _ \| | | | | | | | |  
   / ___ \| |_) | |_| | |_| | | |  
  /_/   \_\____/ \___/ \___/  |_|  
                                   
 -->

Nongsa 'Description'
Nongsa Image 01
Nongsa Image 02
Nongsa Image 03
Nongsa Image 04
Nongsa Image 05
Nongsa Image 06

Seminyak 'Description'
Seminyak Image 01
Seminyak Image 02
Seminyak Image 03
Seminyak Image 04

<!-- 
    ___  _____ _____ _____ ____  
   / _ \|  ___|  ___| ____|  _ \ 
  | | | | |_  | |_  |  _| | |_) |
  | |_| |  _| |  _| | |___|  _ < 
   \___/|_|   |_|   |_____|_| \_\
                                 
 -->

array of 'Offer Item'

<!-- 
      _    ____ ____ ___  __  __  ___  ____    _  _____ ___ ___  _   _ 
     / \  / ___/ ___/ _ \|  \/  |/ _ \|  _ \  / \|_   _|_ _/ _ \| \ | |
    / _ \| |  | |  | | | | |\/| | | | | | | |/ _ \ | |  | | | | |  \| |
   / ___ \ |__| |__| |_| | |  | | |_| | |_| / ___ \| |  | | |_| | |\  |
  /_/   \_\____\____\___/|_|  |_|\___/|____/_/   \_\_| |___\___/|_| \_|
                                                                       
 -->

Villas Map Title
Villas Map Subtitle

Villa Slider (array of 'Image with Descriptions')

Villa Amenities 'Image with Description'
Villa Amenities 'List Description'

Residences 'Parallax Image'

<!-- 
   ____ ___ _   _ ___ _   _  ____ 
  |  _ \_ _| \ | |_ _| \ | |/ ___|
  | | | | ||  \| || ||  \| | |  _ 
  | |_| | || |\  || || |\  | |_| |
  |____/___|_| \_|___|_| \_|\____|
                                  
 -->

Tadds 'Image with Description'
Tadds Opening Hours 'List Description'
Tadds Breakfast Hours 'List Description'
Tadds Featured Dishes 'List Description'

Tadds Image 01
Tadds Image 02
Tadds Image 03

Pantai 'Image with Description'
Pantai Opening Hours 'List Description'
Pantai Breakfast Hours 'List Description'
Pantai Featured Dishes 'List Description'

Pantai Image 01

Tiigo 'Image with Description'
Tiigo Opening Hours 'List Description'
Tiigo Breakfast Hours 'List Description'
Tiigo Featured Dishes 'List Description'

Tiigo Image 01
Tiigo Image 02


Private Dining 'Parallax Image'
Invilla Dining 'Parallax Image'


<!-- 
   ____  ____   _    
  / ___||  _ \ / \   
  \___ \| |_) / _ \  
   ___) |  __/ ___ \ 
  |____/|_| /_/   \_\
                     
 -->

Facilities 'Image with Description'
Therapies 'Image with Description'
Signiture Treatments ( array of 'Icon Items' )

Signiture Treatments CTA Copy
Signiture Treatments CTA Link

<!-- 
      _    ____ _____ _____     _____ _____ ___ _____ ____  
     / \  / ___|_   _|_ _\ \   / /_ _|_   _|_ _| ____/ ___| 
    / _ \| |     | |  | | \ \ / / | |  | |  | ||  _| \___ \ 
   / ___ \ |___  | |  | |  \ V /  | |  | |  | || |___ ___) |
  /_/   \_\____| |_| |___|  \_/  |___| |_| |___|_____|____/ 
                                                            
 -->

Favourites (array of 'Image with Description') 
Favourites CTA copy
Favourites CTA link

Outdoor Activities 'Image with Description'
Outdoor Activities 'List Description'

Aquatic Adventure 'Image with Description'
Aquatic Adventure 'List Description'

Sports & Fitness 'Image with Description'
Sports & Fitness 'List Description'

Olu Kids Club 'Parallax Image'

Other Activites (array of 'Icon Item')

<!-- 
   _______     _______ _   _ _____ ____  
  | ____\ \   / / ____| \ | |_   _/ ___| 
  |  _|  \ \ / /|  _| |  \| | | | \___ \ 
  | |___  \ V / | |___| |\  | | |  ___) |
  |_____|  \_/  |_____|_| \_| |_| |____/ 
                                         
 -->

additional instructions: omit cta buttons
 - auto add 2 cta buttons (due to special funtion of both)

Corporate Meetings 'Image with Description'
Team Building 'Image with Description'
Special Events 'Image with Description'

Weddings 'Parallax Image'

Floor Plan 'Description'
Floor Plan Image

Floor Plan Table (array of 'Floor Plan Details')
Floor Plan Disclaimer
Floor Plan CTA Copy
Floor Plan CTA Link

<!-- 
   _____ _    ___  
  |  ___/ \  / _ \ 
  | |_ / _ \| | | |
  |  _/ ___ \ |_| |
  |_|/_/   \_\__\_\
                   
 -->

array of 'FAQ Sections'


<!-- 
    ____ ___  _   _ _____  _    ____ _____ 
   / ___/ _ \| \ | |_   _|/ \  / ___|_   _|
  | |  | | | |  \| | | | / _ \| |     | |  
  | |__| |_| | |\  | | |/ ___ \ |___  | |  
   \____\___/|_| \_| |_/_/   \_\____| |_|  
                                           
 -->

array of 'Contact Item'

<!-- 
   ____  ____  _____     ___    ______   __
  |  _ \|  _ \|_ _\ \   / / \  / ___\ \ / /
  | |_) | |_) || | \ \ / / _ \| |    \ V / 
  |  __/|  _ < | |  \ V / ___ \ |___  | |  
  |_|   |_| \_\___|  \_/_/   \_\____| |_|  
                                           
 -->

array of 'TNC Item'

question CTA Copy
question CTA Link


