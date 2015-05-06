/*
 * Mobile detection plugin
 * Created by: EJ Frias
 * ejsfrias@gmail.com
 *
 * Version: 1.2
 */
(function(a){jQuery.browser.mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
 
/*
 * Reservation form plugin
 * Created by: EJ Frias
 * ejsfrias@gmail.com
 *
 * Version: 1.2
 */
(function($){

  $.reservation = {
    
    init: function()
    {

      if( jQuery.browser.mobile ){
        $('div.reservations').attr('onclick',"location.href='//www.phgsecure.com/IBE/bookingRedirect.ashx?propertyCode=SINMR'");
      }
      else {
        $.reservation.generateForm();
      }
    },
    
    generateForm: function()
    {
      $.post('reservation-form.php', {}, 
        function( form ){
          $(form).appendTo('div.reservations');
          $.reservation.createDatePickers();
          
          // hide reservation form after page load
          $('form.reservation-form').hide();
        }
      )
    },
    
    createDatePickers: function()
    {
      $('input[name=arrival], input[name=departure]', document).datepicker({
        minDate: 0,
        changeMonth: true,
        changeYear: true,
        beforeShow: $.reservation.customRange,
        dateFormat: "dd/mm/yy",
        showOn: "button",
        buttonImage: "images/calendar.png",
        buttonImageOnly: true
      });
    },
    
    customRange: function(input)
    {
      var parentForm = $(input).closest('form').attr('id');
    
      if (input.id == 'departure')
      {
        var arrival = $('form#'+parentForm+' #arrival').val().split('/');
          arrival = arrival[1]+'/'+arrival[0]+'/'+arrival[2];
        var minDate = new Date(arrival);
          minDate.setDate(minDate.getDate() + 1)

        return {
          minDate: minDate
        };
      }
      else if(input.id == 'arrival')
      {
        var departure = $('form#'+parentForm+' #departure').val().split('/');
          departure = departure[1]+'/'+departure[0]+'/'+departure[2];
        var maxDate = new Date(departure);
          maxDate.setDate(maxDate.getDate() - 1);
          
          maxDate = NaN;

        return {
          maxDate: maxDate
        };
      }
      return {}
    }
    
  };
  
  $.reservation.init(); //initialize form
  
})(jQuery);

$(function(){

if( ! jQuery.browser.mobile ) {
  // start show/hide reservation form
  var hide = false;
  var mouseIn = false;

  $('div.reservations').on({
    mouseenter: function(){
      if(hide)
        clearTimeout(hide);
      
      mouseIn = true;
      reservationform = $(this).find('form.reservation-form');
      reservationform.fadeIn();
    }, 
    mouseleave: function(e){
      if( e.relatedTarget )
      {
        if( $(e.relatedTarget.offsetParent).attr('id') == 'container' )
        {
          mouseIn = false;

          hide = setTimeout(function(){
            reservationform.fadeOut('slow');
          }, 5000);
        }
      }
    }/*,
    click: function(e){
      e.preventDefault();

      // Show/hide reservation form except when clicked inside the form
      // Submit the form if submit button is clicked
      if( e.target.id.toLowerCase() == 'button' )
      {
        reservationform.submit();
      }
      else
      {
        var parentForm = reservationform.attr('id');

        if( $('#'+e.target.id).parents('#'+parentForm).length != 1 ){
          // exempt option element
          if( e.target.nodeName.toLowerCase() != 'option' ){
            reservationform.toggle();
          }
        }
      }
    }*/
  });
  
  $('body').mouseup(function(){ if(!mouseIn) $('form.reservation-form').hide(); });
  /* end show/hide reservation form */
  
  /* start form processing */
  $(document).on('submit', 'form.reservation-form', function(e){
    e.preventDefault();
    var formId    = $(this).attr('id'); 
    var arrival   = $('form#'+formId+' #arrival').val();
    var departure = $('form#'+formId+' #departure').val();
    var nights    = $('form#'+formId+' #nights').val();
    var rooms   = $('form#'+formId+' #rooms').val();
    var adults    = $('form#'+formId+' #adults').val();
    var child   = $('form#'+formId+' #child').val();
    var codeType  = $('form#'+formId+' #codeType').val();
    var code    = $('form#'+formId+' #code').val();
    var error   = 0;
    
    if( !arrival || !departure || !nights || !rooms || !adults || !child )
      error = 1;

    if( !error )
    {
      if( codeType==0 && code.toLowerCase() != 'enter code' && code.trim() != '' ){
        alert('Please select a Code Type');
        return false;
      }
      else if( codeType != 0 && (code.toLowerCase() == 'enter code' || code.trim() == '') ){
        alert('Please enter a code');
        return false;
      }
      
      if( codeType.toLowerCase() == 'iata' ){
        codeType = 'iataNumber';
      }
      else if( codeType.toLowerCase() == 'group' ){
        codeType = 'group';
      }
      else if( codeType.toLowerCase() == 'promo' || codeType.toLowerCase() == 'corporate' ){
        codeType = 'rateCode';
      }
      
      arrival = arrival.split('/');
      arrival = arrival[1]+'/'+arrival[0]+'/'+arrival[2];
      
      departure = departure.split('/');
      departure = departure[1]+'/'+departure[0]+'/'+departure[2];
      
      var params = '';
        params+= '&arrivalDate='+arrival;
        params+= '&departureDate='+departure;
        params+= '&numberOfNights='+nights;
        params+= '&rooms='+rooms;
        //params+= '&numberOfAdults='+adults;
        //params+= (child != 0) ? '&numberOfChildren='+child : '';
        params+= (codeType != 0 && code != '') ? '&'+codeType+'='+code : '';
        //params+= '&start=availresults';

      location.href = 'https://www.phgsecure.com/IBE/bookingRedirect.ashx?propertyCode=SINMR' + params;
    }
  });
  /* end form processing */
  
  $(document).on('keyup', 'input[name=nights]', function(){
    var parentForm = $(this).closest('form').attr('id');
    var nights = parseInt($(this).val());
      nights = nights > 0 ? nights : 1;

    var arrival = $('form#'+parentForm+' #arrival').val().split('/');
      arrival = arrival[1]+'/'+arrival[0]+'/'+arrival[2];
      arrival = new Date( arrival );

    var departure = new Date(arrival.getFullYear(), arrival.getMonth(), arrival.getDate()+nights);
    var newArrival = pad(departure.getDate(),2) + '/' + pad((departure.getMonth()+1),2) + '/' + departure.getFullYear();

    $('form#'+parentForm+' #departure').val( newArrival );
  });

  $(document).on('change', 'input[name=arrival], input[name=departure]', function(){
    var oneDay = 1000 * 60 * 60 * 24
    var parentForm = $(this).closest('form').attr('id');
    
    var arrival = $('form#'+parentForm+' #arrival').val().split('/');
      arrival = arrival[1]+'/'+arrival[0]+'/'+arrival[2];
      arrival = new Date( arrival );
    
    var departure = $('form#'+parentForm+' #departure').val().split('/');
      departure = departure[1]+'/'+departure[0]+'/'+departure[2];
      departure = new Date( departure );
    
    var noOfNights = ( departure.getTime() - arrival.getTime() ) / oneDay;

    if( !isNaN(noOfNights) )
    {
      if(noOfNights <= 0)
      {
        var newDepartureDate = pad((arrival.getDate()+1),2) +'/'+ pad((arrival.getMonth()+1),2) +'/'+ arrival.getFullYear();
        $('form#'+parentForm+' #departure').val(newDepartureDate);
        noOfNights = 1;
      }
      
      $('form#'+parentForm+' #nights').val( noOfNights );
    }
  });
  
  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }
}

});