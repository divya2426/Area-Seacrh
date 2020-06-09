$(document).ready(function(){
  /* Select bar Js Starts here */
 /*$("[data-slider]")
    .each(function () {
      var input = $(this);
      $("<span>")
        .addClass("output")
        .insertAfter($(this));
    })
    .bind("slider:ready slider:changed", function (event, data) {
      $(this)
        .nextAll(".output:first")
          .html(data.value.toFixed(3));
    });*/
  /* Select bar Js ends here */
  
  /* Dropdown JS strts here*/
     $(".drop_menu1 li a").click(function(){
         $(".dropbtn1:first-child").text($(this).text());
      // $(".drop_menu_a:first-child").val($(this).text());
     //  val=$(this).text();
	 });
	  $(".drop_menu2 li a").click(function(){
         $(".dropbtn2:first-child").text($(this).text());
	 });
	  $(".drop_menu3 li a").click(function(){
         $(".dropbtn3:first-child").text($(this).text());
	 });
	   $(".drop_menu_city li a").click(function(){
         $(".citydropdown:first-child").text($(this).text());
	 });
 /* Dropdown JS ends here */   
 
});// complete click

/* Login - Sign Up JS Starts here */

function showRegisterForm(){
    $('.loginBox').fadeOut('fast',function(){
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast',function(){
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('SIGN UP');
    }); 
    $('.error').removeClass('alert alert-danger').html('');
       
}
function showLoginForm(){
    $('#loginModal .registerBox').fadeOut('fast',function(){
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast',function(){
            $('.login-footer').fadeIn('fast');    
        });
        
        $('.modal-title').html('LOGIN');
    });       
     $('.error').removeClass('alert alert-danger').html(''); 
}

function openLoginModal(){
    showLoginForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}
function openRegisterModal(){
    showRegisterForm();
    setTimeout(function(){
        $('#loginModal').modal('show');    
    }, 230);
    
}

function loginAjax(){
    /*   Remove this comments when moving to server
    $.post( "/login", function( data ) {
            if(data == 1){
                window.location.replace("/home");            
            } else {
                 shakeModal(); 
            }
        });
    */

/*   Simulate error message from the server   */
     shakeModal();
}

function shakeModal(){
    $('#loginModal .modal-dialog').addClass('shake');
             $('.error').addClass('alert alert-danger').html("Invalid email/password combination");
             $('input[type="password"]').val('');
             setTimeout( function(){ 
                $('#loginModal .modal-dialog').removeClass('shake'); 
    }, 1000 ); 
}

/* Login - Sign Up JS Ends here */

/* Map JS Starts Here */


var mymap = L.map('mapid').setView([51.540, -0.09], 13);


	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);
	

	L.marker([51.51163, -0.17286]).addTo(mymap)
		.bindPopup("<div class='infobox'><div class='image'><img src='assets/img/rest_image.png' data-pin-nopin='true'></div><div class='title'><a >Cafe Maroush</a></div><div class='subtitle'><span>Lebanese cuisine , music & belly dancing</span></div><div class='star-ratings-css'><div class='star-ratings-css-top' style='width: 84%'><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><div class='star-ratings-css-bottom'><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div></div><div class='clearfix'></div><div class='location'><span class='location_info'>1 kensingtion , High st, kensingtion, London, W8 5NP, UK</span></div><div class='tel'><span class='tel_info'>+44 20 7722 4232</span></div></div>").openPopup();

L.marker([51.540, -0.091]).addTo(mymap).bindPopup("<div class='add_favourite'><div class='add_favourite_title'>Add to your favourites</div><div class='add_favourite_body'><div class='hotel_que_head'><div class='hotel'></div><div class='hotel_question'>Is this Milestone hotel ?</div></div></div><div class='add_favourite_footer'><input type='button' value='Add' class='add_favourite_btn'><div class='create_location'> or <a>Create a new location ?</a></div></div></div>");

L.marker([51.53, -0.12]).addTo(mymap).bindPopup("<div class='add_favourite'><div class='add_favourite_title'>Add to your favourites</div><div class='add_favourite_body'><div class='place_type row'><lable class='col-md-5'>Type of place</lable><input type='text' class='col-md-7 input_place'></div> <div class='place_name row'><lable class='col-md-5'>Enter Name</lable><input type='text' class='col-md-7 input_place'></div><div class='place_comments row'><lable class='col-md-5'>Comments</lable><input type='text' class='col-md-7 input_place'></div></div><div class='add_favourite_footer'><input type='button' value='Add' class='add_favourite_btn'></div></div>");

		
	L.circle([51.53644, -0.02], 200, {
		color: 'green',
		fillColor: '#45cf72',
		fillOpacity: 1
	}).addTo(mymap);
L.circle([51.53644, -0.026], 200, {
		color: 'green',
		fillColor: '#45cf72',
		fillOpacity: 1
	}).addTo(mymap);
L.circle([51.53644, -0.014], 200, {
		color: 'green',
		fillColor: '#45cf72',
		fillOpacity: 1
	}).addTo(mymap);
L.circle([51.533, -0.02], 200, {
		color: 'green',
		fillColor: '#45cf72',
		fillOpacity: 0.3
	}).addTo(mymap);
L.circle([51.533, -0.026], 200, {
		color: 'green',
		fillColor: '#45cf72',
		fillOpacity: 0.3
	}).addTo(mymap);
	L.circle([51.533, -0.014], 200, {
		color: 'green',
		fillColor: '#45cf72',
		fillOpacity: 0.3
	}).addTo(mymap);
	/*L.polygon([
		[51.509, -0.08],
		[51.503, -0.06],
		[51.51, -0.047]
	]).addTo(mymap).bindPopup("I am a polygon.");*/


	var popup = L.popup();

	/*function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);*/

	$(window).on("resize", function() {
    $("#mapid").height($(window).height()-140);
    mymap.invalidateSize();
}).trigger("resize");

/* Map JS Ends Here */
 