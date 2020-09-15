$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        autoplay:false,
        fade:true
    });
    
});

$('.header__burger').click(function(event) {
    $('.header__burger,.nav').toggleClass('active');
    $('body').toggleClass('lock');
});

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [59.9315025773386,30.358689240814222],
            zoom: 15
        });
        var myPlacemark = new ymaps.Placemark([59.931940564186625,30.359148999999988]);
         myMap.geoObjects.add(myPlacemark);
         myMap.controls.remove('zoomControl');
         myMap.controls.remove('trafficControl');
         myMap.controls.remove('typeSelector');
         myMap.controls.remove('rulerControl');
         myMap.controls.remove('searchControl');
         myMap.controls.remove('geolocationControl');
         myMap.controls.remove('routeButtonControl');
    }