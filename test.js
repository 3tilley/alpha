var map;
function initialize() {

  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(50.948018, 0.746291),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    
          var latLng0 = new google.maps.LatLng(50.9383163, 0.7636801999999999);
          var string0 = '<h1>Bosuns Bite</h1><p>Breakfast';
          var window0 = new google.maps.InfoWindow({
              content: string0
          });
          var marker0 = new google.maps.Marker({
              position: latLng0,
              map: map,
              title: 'Bosuns Bite',
              icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
          });
          google.maps.event.addListener(marker0, 'mouseover', function () {
              window0.open(map, marker0);
          });
          google.maps.event.addListener(marker0, 'mouseout', function () {
              window0.close();
          });
            
          var latLng1 = new google.maps.LatLng(50.9493392, 0.7306172000000001);
          var string1 = '<h1>Old Borough Hotel</h1><p>Our BnB - 01797 222128';
          var window1 = new google.maps.InfoWindow({
              content: string1
          });
          var marker1 = new google.maps.Marker({
              position: latLng1,
              map: map,
              title: 'Old Borough Hotel',
              icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
          });
          google.maps.event.addListener(marker1, 'mouseover', function () {
              window1.open(map, marker1);
          });
          google.maps.event.addListener(marker1, 'mouseout', function () {
              window1.close();
          });
            
          var latLng2 = new google.maps.LatLng(50.9318508, 0.8144231);
          var string2 = '<h1>The Kitesurf Centre</h1><p>';
          var window2 = new google.maps.InfoWindow({
              content: string2
          });
          var marker2 = new google.maps.Marker({
              position: latLng2,
              map: map,
              title: 'The Kitesurf Centre',
              icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          google.maps.event.addListener(marker2, 'mouseover', function () {
              window2.open(map, marker2);
          });
          google.maps.event.addListener(marker2, 'mouseout', function () {
              window2.close();
          });
            
          var latLng3 = new google.maps.LatLng(50.9506249, 0.7337112);
          var string3 = '<h1>Tuscan Kitchen</h1><p>9pm 18/10/13 - 01797 223269';
          var window3 = new google.maps.InfoWindow({
              content: string3
          });
          var marker3 = new google.maps.Marker({
              position: latLng3,
              map: map,
              title: 'Tuscan Kitchen',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker3, 'mouseover', function () {
              window3.open(map, marker3);
          });
          google.maps.event.addListener(marker3, 'mouseout', function () {
              window3.close();
          });
            
          var latLng4 = new google.maps.LatLng(50.95106, 0.7347193);
          var string4 = '<h1>Union Steakhouse</h1><p>9pm 18/10/13 - 01797 229289';
          var window4 = new google.maps.InfoWindow({
              content: string4
          });
          var marker4 = new google.maps.Marker({
              position: latLng4,
              map: map,
              title: 'Union Steakhouse',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker4, 'mouseover', function () {
              window4.open(map, marker4);
          });
          google.maps.event.addListener(marker4, 'mouseout', function () {
              window4.close();
          });
            
          var latLng5 = new google.maps.LatLng(50.937466, 0.6809817);
          var string5 = '<h1>The Plough</h1><p>01797 223381';
          var window5 = new google.maps.InfoWindow({
              content: string5
          });
          var marker5 = new google.maps.Marker({
              position: latLng5,
              map: map,
              title: 'The Plough',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker5, 'mouseover', function () {
              window5.open(map, marker5);
          });
          google.maps.event.addListener(marker5, 'mouseout', function () {
              window5.close();
          });
        
}

google.maps.event.addDomListener(window, 'load', initialize);
