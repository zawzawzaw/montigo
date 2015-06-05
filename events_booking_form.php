<!-- 
   ____   ___   ___  _  _____ _   _  ____   _____ ___  ____  __  __ 
  | __ ) / _ \ / _ \| |/ /_ _| \ | |/ ___| |  ___/ _ \|  _ \|  \/  |
  |  _ \| | | | | | | ' / | ||  \| | |  _  | |_ | | | | |_) | |\/| |
  | |_) | |_| | |_| | . \ | || |\  | |_| | |  _|| |_| |  _ <| |  | |
  |____/ \___/ \___/|_|\_\___|_| \_|\____| |_|   \___/|_| \_\_|  |_|
                                                                    
 -->

<div id="events-booking-form-container">
  <div class="black-bg"></div>


  <form id="events-booking-form" action="" method="POST">
    <div class="white-bg"></div>
    <div class="events-booking-form-scroll-container">

      <div class="events-booking-form-scroll-content">

        <div id="booking-form-close-button" class="fa fa-close"></div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-12-md">
              <div class="events-booking-form-title">
                <h3>Event Enquiry Form</h3>
              </div>
            </div>
          </div>

          <div class="row">

            <div class="col-md-5">


              <div class="form-group events-booking-form-item events-booking-form-item-title">
                <h4>contact details</h4>
                <hr class="short-hr">
              </div>


                

              <div class="form-group events-booking-form-item">
                <label>salutation*</label>

                <!--
                <div class="select-input">
                  <div class="fa fa-play"></div>
                  <select id="nights" name="nights">
                    <option value="">Select One</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                </div>
                -->


                <div class="manic-dropdown montigo-version">
                  <span>Select One</span>
                  <input type="hidden" id="salutation" name="salutation" value="">
                  <ul>
                    <li>Mr.</li>
                    <li>Mrs.</li>
                    <li>Ms.</li>
                  </ul>
                </div>

              </div>

              <div class="form-group events-booking-form-item">
                <label>first name*</label>
                <input class="form-control" type="text" id="firstname" name="firstname" value="" placeholder="" >
              </div>

              <div class="form-group events-booking-form-item">
                <label>last name*</label>
                <input class="form-control" type="text" id="lastname" name="lastname" value="" placeholder="" >
              </div>

              <div class="form-group events-booking-form-item">
                <label>company name</label>
                <input class="form-control" type="text" id="companyname" name="companyname" value="" placeholder="" >
              </div>

              <div class="form-group events-booking-form-item">
                <label>email*</label>
                <input class="form-control" type="text" id="emailaddress" name="emailaddress" value="" placeholder="" >
              </div>

              <div class="form-group events-booking-form-item">
                <label>confirm email*</label>
                <input class="form-control" type="text" id="confirmemailaddress" name="confirmemailaddress" value="" placeholder="" >
              </div>
              
              <div class="form-group events-booking-form-item country-version">
                <label>country*</label>
                <div class="select-input">
                  <div class="fa fa-play"></div>

                  <select name="country" id="country">
                    <option value="">Country...</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AG">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AG">Antigua &amp; Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AA">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BL">Bonaire</option>
                    <option value="BA">Bosnia &amp; Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BR">Brazil</option>
                    <option value="BC">British Indian Ocean Ter</option>
                    <option value="BN">Brunei</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="IC">Canary Islands</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CD">Channel Islands</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CI">Christmas Island</option>
                    <option value="CS">Cocos Island</option>
                    <option value="CO">Colombia</option>
                    <option value="CC">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CT">Cote D'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CB">Curacao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="TM">East Timor</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FA">Falkland Islands</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="FS">French Southern Ter</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GB">Great Britain</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GN">Guinea</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HW">Hawaii</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IA">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IR">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="NK">Korea North</option>
                    <option value="KS">Korea South</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Laos</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macau</option>
                    <option value="MK">Macedonia</option>
                    <option value="MG">Madagascar</option>
                    <option value="MY">Malaysia</option>
                    <option value="MW">Malawi</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="ME">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="MI">Midway Islands</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Nambia</option>
                    <option value="NU">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="AN">Netherland Antilles</option>
                    <option value="NL">Netherlands (Holland, Europe)</option>
                    <option value="NV">Nevis</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NW">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau Island</option>
                    <option value="PS">Palestine</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PO">Pitcairn Island</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="ME">Republic of Montenegro</option>
                    <option value="RS">Republic of Serbia</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="RW">Rwanda</option>
                    <option value="NT">St Barthelemy</option>
                    <option value="EU">St Eustatius</option>
                    <option value="HE">St Helena</option>
                    <option value="KN">St Kitts-Nevis</option>
                    <option value="LC">St Lucia</option>
                    <option value="MB">St Maarten</option>
                    <option value="PM">St Pierre &amp; Miquelon</option>
                    <option value="VC">St Vincent &amp; Grenadines</option>
                    <option value="SP">Saipan</option>
                    <option value="SO">Samoa</option>
                    <option value="AS">Samoa American</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome &amp; Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG" selected="selected">Singapore</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="OI">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syria</option>
                    <option value="TA">Tahiti</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad &amp; Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TU">Turkmenistan</option>
                    <option value="TC">Turks &amp; Caicos Is</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States of America</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VS">Vatican City State</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="VB">Virgin Islands (Brit)</option>
                    <option value="VA">Virgin Islands (USA)</option>
                    <option value="WK">Wake Island</option>
                    <option value="WF">Wallis &amp; Futana Is</option>
                    <option value="YE">Yemen</option>
                    <option value="ZR">Zaire</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>

                </div>
              </div>

            </div>

            <div class="col-md-2">
              <div class="space10"></div>
            </div>

            <div class="col-md-5">
              
              <div class="form-group events-booking-form-item events-booking-form-item-title">
                <h4>event details</h4>
                <hr class="short-hr">
              </div>

              <div class="form-group events-booking-form-item">
                <label>event name</label>
                <input class="form-control" type="text" id="eventname" name="eventname" value="" placeholder="" >
              </div>

              <div class="form-group events-booking-form-item">
                <label>purpose</label>
                <!-- 
                <div class="select-input">
                  <div class="fa fa-play"></div>
                  <select id="nights" name="nights">
                    <option value="">Select One</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Seminar">Seminar</option>
                    <option value="Corporate Meeting">Corporate Meeting</option>
                    <option value="Spiritual Retreat">Spiritual Retreat</option>
                    <option value="Team Building">Team Building</option>
                  </select>
                </div>
                -->

                <div class="manic-dropdown montigo-version">
                  <span>Select One</span>
                  <input type="hidden" id="purpose" name="purpose" value="">
                  <ul>
                    <li>Wedding</li>
                    <li>Seminar</li>
                    <li>Corporate Meeting</li>
                    <li>Spiritual Retreat</li>
                    <li>Team Building</li>
                  </ul>
                </div>

              </div>

              <div class="form-group events-booking-form-item calendar-version" id="events-booking-arrivalDate">
                <label>arrival date*</label>
                <div class="fa fa-calendar-o"></div>
                <input class="form-control" type="text" id="arrivalDate" name="arrivalDate" value="" placeholder="dd/mm/yyyy" gldp-id="events-booking-arrival-date">

                <div class="events-booking-form-calendar-container">
                  <div class="events-booking-form-calendar-bg"></div>
                  <div gldp-el="events-booking-arrival-date" class="events-booking-form-calendar"></div>
                </div>
              </div>

              <div class="form-group events-booking-form-item calendar-version" id="events-booking-departureDate">
                <label>departure date*</label>
                <div class="fa fa-calendar-o"></div>
                <input class="form-control" type="text" id="departureDate" name="departureDate" value="" placeholder="dd/mm/yyyy" gldp-id="events-booking-departure-date">

                <div class="events-booking-form-calendar-container">
                  <div class="events-booking-form-calendar-bg"></div>
                  <div gldp-el="events-booking-departure-date" class="events-booking-form-calendar"></div>
                </div>
              </div>

              <div class="form-group events-booking-form-item single-digit-version number-of-people-version">
                <label>event size*</label>


                <input class="form-control" type="text" id="eventsize" name="eventsize" value="50" >

                <p>Number of Persons</p>

                <div class="radio">
                  <label>
                    <input type="radio" name="eventroomspace" id="eventroomspace1" value="guest room only" checked>
                    <span></span>
                    I only require guest rooms
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="eventroomspace" id="eventroomspace2" value="event space only">
                    <span></span>
                    I only require event space
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="eventroomspace" id="eventroomspace3" value="both guest room and event space">
                    <span></span>
                    I require both guest rooms and event space
                  </label>
                </div>

              </div>

              <div class="form-group events-booking-form-item">

                <label>event type*</label>

                <div class="row">
                  <div class="col-md-6">

                    <div class="radio">
                      <label>
                        <input type="radio" name="eventtype" id="eventtype1" value="cocktail reception" checked>
                        <span></span>
                        Cocktail Reception
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                        <input type="radio" name="eventtype" id="eventtype2" value="wedding">
                        <span></span>
                        Wedding
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                        <input type="radio" name="eventtype" id="eventtype3" value="meeting">
                        <span></span>
                        Meeting
                      </label>
                    </div>

                  </div>
                  <div class="col-md-6">

                    <div class="radio">
                      <label>
                        <input type="radio" name="eventtype" id="eventtype4" value="lunch" checked>
                        <span></span>
                        Lunch
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                        <input type="radio" name="eventtype" id="eventtype5" value="dinner">
                        <span></span>
                        Dinner
                      </label>
                    </div>
                    <div class="radio">
                      <label>
                        <input type="radio" name="eventtype" id="eventtype6" value="unknown">
                        <span></span>
                        Don’t know yet
                      </label>
                    </div>

                  </div>
                </div>
              </div>










              <div class="form-group events-booking-form-item single-digit-version">
                <label>no. of villas</label>

                <!--
                <div class="select-input">
                  <div class="fa fa-play"></div>
                  <select id="villa" name="villa">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
                -->

                <div class="manic-dropdown montigo-version">
                  <span>1</span>
                  <input type="hidden" id="purpose" name="purpose" value="1">
                  <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                  </ul>
                </div>

              </div>

              <div class="form-group events-booking-form-item single-digit-version">
                <label>other remarks</label>
                <textarea class="form-control" rows="4"></textarea>
              </div>


              <div class="events-booking-form-item submit-version">
                <a href="#" class="submit-button">submit</a>
              </div>
              

            </div>
          </div>

          <div class="row">
          </div>

          <div class="row">
          </div>

          <div class="row">
          </div>

        </div>
        
      </div> <!-- events-booking-form-scroll-content -->
    </div> <!-- events-booking-form-scroll-container -->

  </form> <!-- events-booking-form -->
</div> <!-- events-booking-form-container -->