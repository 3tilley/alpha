var map;
function initialize() {

  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(51.347776, 1.055276),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    
          var latLng0 = new google.maps.LatLng(51.3641581, 1.0316572);
          var string0 = '<h1>Kitesurfing School</h1><p>Activity';
          var window0 = new google.maps.InfoWindow({
              content: string0
          });
          var marker0 = new google.maps.Marker({
              position: latLng0,
              map: map,
              title: 'Kitesurfing School',
              icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
          });
          google.maps.event.addListener(marker0, 'mouseover', function () {
              window0.open(map, marker0);
          });
          google.maps.event.addListener(marker0, 'mouseout', function () {
              window0.close();
          });
            
          var latLng1 = new google.maps.LatLng(51.32602350000001, 0.9143933999999999);
          var string1 = '<h1>The Anchor Inn</h1><p>Pub';
          var window1 = new google.maps.InfoWindow({
              content: string1
          });
          var marker1 = new google.maps.Marker({
              position: latLng1,
              map: map,
              title: 'The Anchor Inn',
              icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
          });
          google.maps.event.addListener(marker1, 'mouseover', function () {
              window1.open(map, marker1);
          });
          google.maps.event.addListener(marker1, 'mouseout', function () {
              window1.close();
          });
            
          var latLng2 = new google.maps.LatLng(51.361047, 1.024256);
          var string2 = '<h1>The Dove</h1><p>Pub';
          var window2 = new google.maps.InfoWindow({
              content: string2
          });
          var marker2 = new google.maps.Marker({
              position: latLng2,
              map: map,
              title: 'The Dove',
              icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
          });
          google.maps.event.addListener(marker2, 'mouseover', function () {
              window2.open(map, marker2);
          });
          google.maps.event.addListener(marker2, 'mouseout', function () {
              window2.close();
          });
            
          var latLng3 = new google.maps.LatLng(51.361047, 1.024256);
          var string3 = '<h1>The Gate Inn</h1><p>Pub';
          var window3 = new google.maps.InfoWindow({
              content: string3
          });
          var marker3 = new google.maps.Marker({
              position: latLng3,
              map: map,
              title: 'The Gate Inn',
              icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
          });
          google.maps.event.addListener(marker3, 'mouseover', function () {
              window3.open(map, marker3);
          });
          google.maps.event.addListener(marker3, 'mouseout', function () {
              window3.close();
          });
            
          var latLng4 = new google.maps.LatLng(51.361047, 1.024256);
          var string4 = '<h1>The Red Lion</h1><p>Pub';
          var window4 = new google.maps.InfoWindow({
              content: string4
          });
          var marker4 = new google.maps.Marker({
              position: latLng4,
              map: map,
              title: 'The Red Lion',
              icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
          });
          google.maps.event.addListener(marker4, 'mouseover', function () {
              window4.open(map, marker4);
          });
          google.maps.event.addListener(marker4, 'mouseout', function () {
              window4.close();
          });
            
          var latLng5 = new google.maps.LatLng(51.32602350000001, 0.9143933999999999);
          var string5 = '<h1>The Phoenix</h1><p>Pub';
          var window5 = new google.maps.InfoWindow({
              content: string5
          });
          var marker5 = new google.maps.Marker({
              position: latLng5,
              map: map,
              title: 'The Phoenix',
              icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
          });
          google.maps.event.addListener(marker5, 'mouseover', function () {
              window5.open(map, marker5);
          });
          google.maps.event.addListener(marker5, 'mouseout', function () {
              window5.close();
          });
            
          var latLng6 = new google.maps.LatLng(51.35841869999999, 1.0200327);
          var string6 = '<h1>The Neptune</h1><p>Pub';
          var window6 = new google.maps.InfoWindow({
              content: string6
          });
          var marker6 = new google.maps.Marker({
              position: latLng6,
              map: map,
              title: 'The Neptune',
              icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
          });
          google.maps.event.addListener(marker6, 'mouseover', function () {
              window6.open(map, marker6);
          });
          google.maps.event.addListener(marker6, 'mouseout', function () {
              window6.close();
          });
            
          var latLng7 = new google.maps.LatLng(51.361047, 1.024256);
          var string7 = '<h1>The Red Lion 2</h1><p>Pub';
          var window7 = new google.maps.InfoWindow({
              content: string7
          });
          var marker7 = new google.maps.Marker({
              position: latLng7,
              map: map,
              title: 'The Red Lion 2',
              icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
          });
          google.maps.event.addListener(marker7, 'mouseover', function () {
              window7.open(map, marker7);
          });
          google.maps.event.addListener(marker7, 'mouseout', function () {
              window7.close();
          });
            
          var latLng8 = new google.maps.LatLng(51.361047, 1.024256);
          var string8 = '<h1>The Three Mariners</h1><p>Pub';
          var window8 = new google.maps.InfoWindow({
              content: string8
          });
          var marker8 = new google.maps.Marker({
              position: latLng8,
              map: map,
              title: 'The Three Mariners',
              icon: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
          });
          google.maps.event.addListener(marker8, 'mouseover', function () {
              window8.open(map, marker8);
          });
          google.maps.event.addListener(marker8, 'mouseout', function () {
              window8.close();
          });
            
          var latLng9 = new google.maps.LatLng(51.3617064, 1.0253332);
          var string9 = '<h1>The Cheese Box</h1><p>Shop';
          var window9 = new google.maps.InfoWindow({
              content: string9
          });
          var marker9 = new google.maps.Marker({
              position: latLng9,
              map: map,
              title: 'The Cheese Box',
              icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
          google.maps.event.addListener(marker9, 'mouseover', function () {
              window9.open(map, marker9);
          });
          google.maps.event.addListener(marker9, 'mouseout', function () {
              window9.close();
          });
            
          var latLng10 = new google.maps.LatLng(51.36175369999999, 1.0254122);
          var string10 = '<h1>Sundae Sundae</h1><p>Shop';
          var window10 = new google.maps.InfoWindow({
              content: string10
          });
          var marker10 = new google.maps.Marker({
              position: latLng10,
              map: map,
              title: 'Sundae Sundae',
              icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
          google.maps.event.addListener(marker10, 'mouseover', function () {
              window10.open(map, marker10);
          });
          google.maps.event.addListener(marker10, 'mouseout', function () {
              window10.close();
          });
            
          var latLng11 = new google.maps.LatLng(51.3593653, 1.0244768);
          var string11 = '<h1>The Offy</h1><p>Shop';
          var window11 = new google.maps.InfoWindow({
              content: string11
          });
          var marker11 = new google.maps.Marker({
              position: latLng11,
              map: map,
              title: 'The Offy',
              icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
          google.maps.event.addListener(marker11, 'mouseover', function () {
              window11.open(map, marker11);
          });
          google.maps.event.addListener(marker11, 'mouseout', function () {
              window11.close();
          });
            
          var latLng12 = new google.maps.LatLng(51.3593605, 1.0243716);
          var string12 = '<h1>Budgens</h1><p>Shop';
          var window12 = new google.maps.InfoWindow({
              content: string12
          });
          var marker12 = new google.maps.Marker({
              position: latLng12,
              map: map,
              title: 'Budgens',
              icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
          google.maps.event.addListener(marker12, 'mouseover', function () {
              window12.open(map, marker12);
          });
          google.maps.event.addListener(marker12, 'mouseout', function () {
              window12.close();
          });
            
          var latLng13 = new google.maps.LatLng(51.3554997, 1.0245593);
          var string13 = '<h1>The Co-op</h1><p>Shop';
          var window13 = new google.maps.InfoWindow({
              content: string13
          });
          var marker13 = new google.maps.Marker({
              position: latLng13,
              map: map,
              title: 'The Co-op',
              icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
          google.maps.event.addListener(marker13, 'mouseover', function () {
              window13.open(map, marker13);
          });
          google.maps.event.addListener(marker13, 'mouseout', function () {
              window13.close();
          });
            
          var latLng14 = new google.maps.LatLng(51.3641581, 1.0316572);
          var string14 = '<h1>The Beach Cafe</h1><p>Cafe';
          var window14 = new google.maps.InfoWindow({
              content: string14
          });
          var marker14 = new google.maps.Marker({
              position: latLng14,
              map: map,
              title: 'The Beach Cafe',
              icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          google.maps.event.addListener(marker14, 'mouseover', function () {
              window14.open(map, marker14);
          });
          google.maps.event.addListener(marker14, 'mouseout', function () {
              window14.close();
          });
            
          var latLng15 = new google.maps.LatLng(51.36429469999999, 1.0347477);
          var string15 = '<h1>The Castle Orangery</h1><p>Cafe';
          var window15 = new google.maps.InfoWindow({
              content: string15
          });
          var marker15 = new google.maps.Marker({
              position: latLng15,
              map: map,
              title: 'The Castle Orangery',
              icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          google.maps.event.addListener(marker15, 'mouseover', function () {
              window15.open(map, marker15);
          });
          google.maps.event.addListener(marker15, 'mouseout', function () {
              window15.close();
          });
            
          var latLng16 = new google.maps.LatLng(51.3608524, 1.0243593);
          var string16 = '<h1>The Tudor Tea Rooms</h1><p>Cafe';
          var window16 = new google.maps.InfoWindow({
              content: string16
          });
          var marker16 = new google.maps.Marker({
              position: latLng16,
              map: map,
              title: 'The Tudor Tea Rooms',
              icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          google.maps.event.addListener(marker16, 'mouseover', function () {
              window16.open(map, marker16);
          });
          google.maps.event.addListener(marker16, 'mouseout', function () {
              window16.close();
          });
            
          var latLng17 = new google.maps.LatLng(51.36471, 1.0339589);
          var string17 = '<h1>Tower Hill Tea Gardens</h1><p>Cafe';
          var window17 = new google.maps.InfoWindow({
              content: string17
          });
          var marker17 = new google.maps.Marker({
              position: latLng17,
              map: map,
              title: 'Tower Hill Tea Gardens',
              icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          google.maps.event.addListener(marker17, 'mouseover', function () {
              window17.open(map, marker17);
          });
          google.maps.event.addListener(marker17, 'mouseout', function () {
              window17.close();
          });
            
          var latLng18 = new google.maps.LatLng(51.3610421, 1.0245791);
          var string18 = '<h1>Jones Fish and Chips</h1><p>Restaurant';
          var window18 = new google.maps.InfoWindow({
              content: string18
          });
          var marker18 = new google.maps.Marker({
              position: latLng18,
              map: map,
              title: 'Jones Fish and Chips',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker18, 'mouseover', function () {
              window18.open(map, marker18);
          });
          google.maps.event.addListener(marker18, 'mouseout', function () {
              window18.close();
          });
            
          var latLng19 = new google.maps.LatLng(51.361047, 1.024256);
          var string19 = '<h1>The Alimo</h1><p>Restaurant';
          var window19 = new google.maps.InfoWindow({
              content: string19
          });
          var marker19 = new google.maps.Marker({
              position: latLng19,
              map: map,
              title: 'The Alimo',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker19, 'mouseover', function () {
              window19.open(map, marker19);
          });
          google.maps.event.addListener(marker19, 'mouseout', function () {
              window19.close();
          });
            
          var latLng20 = new google.maps.LatLng(51.3597557, 1.0239853);
          var string20 = '<h1>Samphire</h1><p>Restaurant';
          var window20 = new google.maps.InfoWindow({
              content: string20
          });
          var marker20 = new google.maps.Marker({
              position: latLng20,
              map: map,
              title: 'Samphire',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker20, 'mouseover', function () {
              window20.open(map, marker20);
          });
          google.maps.event.addListener(marker20, 'mouseout', function () {
              window20.close();
          });
            
          var latLng21 = new google.maps.LatLng(51.34610079999999, 0.9679671999999999);
          var string21 = '<h1>The Sportsman</h1><p>Restaurant';
          var window21 = new google.maps.InfoWindow({
              content: string21
          });
          var marker21 = new google.maps.Marker({
              position: latLng21,
              map: map,
              title: 'The Sportsman',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker21, 'mouseover', function () {
              window21.open(map, marker21);
          });
          google.maps.event.addListener(marker21, 'mouseout', function () {
              window21.close();
          });
            
          var latLng22 = new google.maps.LatLng(51.3639379, 1.032339);
          var string22 = '<h1>JoJos</h1><p>Restaurant';
          var window22 = new google.maps.InfoWindow({
              content: string22
          });
          var marker22 = new google.maps.Marker({
              position: latLng22,
              map: map,
              title: 'JoJos',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker22, 'mouseover', function () {
              window22.open(map, marker22);
          });
          google.maps.event.addListener(marker22, 'mouseout', function () {
              window22.close();
          });
            
          var latLng23 = new google.maps.LatLng(51.3560313, 1.0243048);
          var string23 = '<h1>The Oxford</h1><p>Restaurant';
          var window23 = new google.maps.InfoWindow({
              content: string23
          });
          var marker23 = new google.maps.Marker({
              position: latLng23,
              map: map,
              title: 'The Oxford',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker23, 'mouseover', function () {
              window23.open(map, marker23);
          });
          google.maps.event.addListener(marker23, 'mouseout', function () {
              window23.close();
          });
            
          var latLng24 = new google.maps.LatLng(51.3597557, 1.0239853);
          var string24 = '<h1>Wheelers Oyster Bar</h1><p>Restaurant';
          var window24 = new google.maps.InfoWindow({
              content: string24
          });
          var marker24 = new google.maps.Marker({
              position: latLng24,
              map: map,
              title: 'Wheelers Oyster Bar',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker24, 'mouseover', function () {
              window24.open(map, marker24);
          });
          google.maps.event.addListener(marker24, 'mouseout', function () {
              window24.close();
          });
            
          var latLng25 = new google.maps.LatLng(51.3616939, 1.0262538);
          var string25 = '<h1>Harbour Cottage</h1><p>Cottage';
          var window25 = new google.maps.InfoWindow({
              content: string25
          });
          var marker25 = new google.maps.Marker({
              position: latLng25,
              map: map,
              title: 'Harbour Cottage',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker25, 'mouseover', function () {
              window25.open(map, marker25);
          });
          google.maps.event.addListener(marker25, 'mouseout', function () {
              window25.close();
          });
        
}

google.maps.event.addDomListener(window, 'load', initialize);
