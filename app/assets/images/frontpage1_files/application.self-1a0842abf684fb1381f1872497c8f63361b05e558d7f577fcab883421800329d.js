// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//






$(document).ready(function (){

    function initialize() {

        var myLatlng = new google.maps.LatLng(32.985711, -96.713891);

        var contentString = '<h2>Contact Us</h2>' +
                            '<p>2435 N. Central Expressway, Suite 1200 </p>' +
                            '<p>Richardson, TX 75080</p>' +
                            '<p>(469) 999-6611</p>' +
                            '<p>info@expressbuildersusa.com</p>';

        var mapOptions = {
            center: myLatlng,
            zoom: 15,
            scrollwheel: false
        };


        var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Location',
            animation: google.maps.Animation.DROP

        });

        var infowindow = new google.maps.InfoWindow({
            content: contentString

        });

        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);

        });
}



google.maps.event.addDomListener(window, 'load', initialize);



    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 100;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

});
