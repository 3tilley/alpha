var map;
function initialize() {

  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(40.722283, -73.98747),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    
          var latLng0 = new google.maps.LatLng(40.7142426, -73.99815199999999);
          var string0 = '<h1>Apotheke</h1><p>Speakeasy. requires password from @apothekenyc Twitter on Wednesdays.';
          var window0 = new google.maps.InfoWindow({
              content: string0
          });
          var marker0 = new google.maps.Marker({
              position: latLng0,
              map: map,
              title: 'Apotheke',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker0, 'mouseover', function () {
              window0.open(map, marker0);
          });
          google.maps.event.addListener(marker0, 'mouseout', function () {
              window0.close();
          });
            
          var latLng1 = new google.maps.LatLng(40.8142092, -74.0736902);
          var string1 = '<h1>Metlife Stadium</h1><p>Home of the NY Giants! Game against the Broncos.';
          var window1 = new google.maps.InfoWindow({
              content: string1
          });
          var marker1 = new google.maps.Marker({
              position: latLng1,
              map: map,
              title: 'Metlife Stadium',
              icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          google.maps.event.addListener(marker1, 'mouseover', function () {
              window1.open(map, marker1);
          });
          google.maps.event.addListener(marker1, 'mouseout', function () {
              window1.close();
          });
            
          var latLng2 = new google.maps.LatLng(40.723915, -73.99278269999999);
          var string2 = '<h1>Pulinos</h1><p>Pizza';
          var window2 = new google.maps.InfoWindow({
              content: string2
          });
          var marker2 = new google.maps.Marker({
              position: latLng2,
              map: map,
              title: 'Pulinos',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker2, 'mouseover', function () {
              window2.open(map, marker2);
          });
          google.maps.event.addListener(marker2, 'mouseout', function () {
              window2.close();
          });
            
          var latLng3 = new google.maps.LatLng(40.7143528, -74.00597309999999);
          var string3 = '<h1>The Frying Pan</h1><p>';
          var window3 = new google.maps.InfoWindow({
              content: string3
          });
          var marker3 = new google.maps.Marker({
              position: latLng3,
              map: map,
              title: 'The Frying Pan',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker3, 'mouseover', function () {
              window3.open(map, marker3);
          });
          google.maps.event.addListener(marker3, 'mouseout', function () {
              window3.close();
          });
            
          var latLng4 = new google.maps.LatLng(40.7386849, -73.994615);
          var string4 = '<h1>The Raines Law Room</h1><p>Speakeasy. Black door at the bottom of subterranean stairs. ring the bell.';
          var window4 = new google.maps.InfoWindow({
              content: string4
          });
          var marker4 = new google.maps.Marker({
              position: latLng4,
              map: map,
              title: 'The Raines Law Room',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker4, 'mouseover', function () {
              window4.open(map, marker4);
          });
          google.maps.event.addListener(marker4, 'mouseout', function () {
              window4.close();
          });
            
          var latLng5 = new google.maps.LatLng(40.718851, -73.94540599999999);
          var string5 = '<h1>The Richardson</h1><p>Speakeasy. Laid back. open til 4.';
          var window5 = new google.maps.InfoWindow({
              content: string5
          });
          var marker5 = new google.maps.Marker({
              position: latLng5,
              map: map,
              title: 'The Richardson',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker5, 'mouseover', function () {
              window5.open(map, marker5);
          });
          google.maps.event.addListener(marker5, 'mouseout', function () {
              window5.close();
          });
            
          var latLng6 = new google.maps.LatLng(40.7298027, -73.9891976);
          var string6 = '<h1>Angels Share</h1><p>"Speakeasy. jazz. Tokyo-noir twist. ""Perfect for couples""."';
          var window6 = new google.maps.InfoWindow({
              content: string6
          });
          var marker6 = new google.maps.Marker({
              position: latLng6,
              map: map,
              title: 'Angels Share',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker6, 'mouseover', function () {
              window6.open(map, marker6);
          });
          google.maps.event.addListener(marker6, 'mouseout', function () {
              window6.close();
          });
            
          var latLng7 = new google.maps.LatLng(40.725979, -73.98462499999999);
          var string7 = '<h1>Death + Company</h1><p>Speakeasy. A bit of a wait.';
          var window7 = new google.maps.InfoWindow({
              content: string7
          });
          var marker7 = new google.maps.Marker({
              position: latLng7,
              map: map,
              title: 'Death + Company',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker7, 'mouseover', function () {
              window7.open(map, marker7);
          });
          google.maps.event.addListener(marker7, 'mouseout', function () {
              window7.close();
          });
            
          var latLng8 = new google.maps.LatLng(40.743544, -74.0031);
          var string8 = '<h1>Bathtub Gin</h1><p>Speakeasy. Inside Stone Street Coffee Company.';
          var window8 = new google.maps.InfoWindow({
              content: string8
          });
          var marker8 = new google.maps.Marker({
              position: latLng8,
              map: map,
              title: 'Bathtub Gin',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker8, 'mouseover', function () {
              window8.open(map, marker8);
          });
          google.maps.event.addListener(marker8, 'mouseout', function () {
              window8.close();
          });
            
          var latLng9 = new google.maps.LatLng(40.7196852, -73.9580472);
          var string9 = '<h1>Hotel Delmano</h1><p>';
          var window9 = new google.maps.InfoWindow({
              content: string9
          });
          var marker9 = new google.maps.Marker({
              position: latLng9,
              map: map,
              title: 'Hotel Delmano',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker9, 'mouseover', function () {
              window9.open(map, marker9);
          });
          google.maps.event.addListener(marker9, 'mouseout', function () {
              window9.close();
          });
            
          var latLng10 = new google.maps.LatLng(40.7276979, -73.990838);
          var string10 = '<h1>The Standard</h1><p>';
          var window10 = new google.maps.InfoWindow({
              content: string10
          });
          var marker10 = new google.maps.Marker({
              position: latLng10,
              map: map,
              title: 'The Standard',
              icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
          });
          google.maps.event.addListener(marker10, 'mouseover', function () {
              window10.open(map, marker10);
          });
          google.maps.event.addListener(marker10, 'mouseout', function () {
              window10.close();
          });
            
          var latLng11 = new google.maps.LatLng(40.7090729, -73.95049399999999);
          var string11 = '<h1>Barcade</h1><p>Arcade games in the bar.';
          var window11 = new google.maps.InfoWindow({
              content: string11
          });
          var marker11 = new google.maps.Marker({
              position: latLng11,
              map: map,
              title: 'Barcade',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker11, 'mouseover', function () {
              window11.open(map, marker11);
          });
          google.maps.event.addListener(marker11, 'mouseout', function () {
              window11.close();
          });
            
          var latLng12 = new google.maps.LatLng(40.7560081, -73.97096429999999);
          var string12 = '<h1>Affinia 50</h1><p>';
          var window12 = new google.maps.InfoWindow({
              content: string12
          });
          var marker12 = new google.maps.Marker({
              position: latLng12,
              map: map,
              title: 'Affinia 50',
              icon: 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png'
          });
          google.maps.event.addListener(marker12, 'mouseover', function () {
              window12.open(map, marker12);
          });
          google.maps.event.addListener(marker12, 'mouseout', function () {
              window12.close();
          });
            
          var latLng13 = new google.maps.LatLng(40.7357181, -74.0067583);
          var string13 = '<h1>Spotted Pig</h1><p>';
          var window13 = new google.maps.InfoWindow({
              content: string13
          });
          var marker13 = new google.maps.Marker({
              position: latLng13,
              map: map,
              title: 'Spotted Pig',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker13, 'mouseover', function () {
              window13.open(map, marker13);
          });
          google.maps.event.addListener(marker13, 'mouseout', function () {
              window13.close();
          });
            
          var latLng14 = new google.maps.LatLng(40.82956859999999, -73.9262931);
          var string14 = '<h1>Yankee Stadium</h1><p>Home of the New York Yankees';
          var window14 = new google.maps.InfoWindow({
              content: string14
          });
          var marker14 = new google.maps.Marker({
              position: latLng14,
              map: map,
              title: 'Yankee Stadium',
              icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          });
          google.maps.event.addListener(marker14, 'mouseover', function () {
              window14.open(map, marker14);
          });
          google.maps.event.addListener(marker14, 'mouseout', function () {
              window14.close();
          });
            
          var latLng15 = new google.maps.LatLng(40.710263, -74.0105554);
          var string15 = '<h1>Century 21</h1><p>TKMaxx on steroids';
          var window15 = new google.maps.InfoWindow({
              content: string15
          });
          var marker15 = new google.maps.Marker({
              position: latLng15,
              map: map,
              title: 'Century 21',
              icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
          });
          google.maps.event.addListener(marker15, 'mouseover', function () {
              window15.open(map, marker15);
          });
          google.maps.event.addListener(marker15, 'mouseout', function () {
              window15.close();
          });
            
          var latLng16 = new google.maps.LatLng(40.734196, -74.006519);
          var string16 = '<h1>Red Farm</h1><p>Chinese food. Very trendy but affordable';
          var window16 = new google.maps.InfoWindow({
              content: string16
          });
          var marker16 = new google.maps.Marker({
              position: latLng16,
              map: map,
              title: 'Red Farm',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker16, 'mouseover', function () {
              window16.open(map, marker16);
          });
          google.maps.event.addListener(marker16, 'mouseout', function () {
              window16.close();
          });
            
          var latLng17 = new google.maps.LatLng(40.7641302, -73.9867915);
          var string17 = '<h1>Danji</h1><p>Korean food - casual but great reviews';
          var window17 = new google.maps.InfoWindow({
              content: string17
          });
          var marker17 = new google.maps.Marker({
              position: latLng17,
              map: map,
              title: 'Danji',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker17, 'mouseover', function () {
              window17.open(map, marker17);
          });
          google.maps.event.addListener(marker17, 'mouseout', function () {
              window17.close();
          });
            
          var latLng18 = new google.maps.LatLng(40.80809600000001, -73.944767);
          var string18 = '<h1>Red Rooster</h1><p>Southern comfort food - amazing reviews but a bit out of the way';
          var window18 = new google.maps.InfoWindow({
              content: string18
          });
          var marker18 = new google.maps.Marker({
              position: latLng18,
              map: map,
              title: 'Red Rooster',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker18, 'mouseover', function () {
              window18.open(map, marker18);
          });
          google.maps.event.addListener(marker18, 'mouseout', function () {
              window18.close();
          });
            
          var latLng19 = new google.maps.LatLng(40.720764, -73.98860999999999);
          var string19 = '<h1>Mission Chinese Food</h1><p> Hottest new restaurant in NY  but quite reasonably priced';
          var window19 = new google.maps.InfoWindow({
              content: string19
          });
          var marker19 = new google.maps.Marker({
              position: latLng19,
              map: map,
              title: 'Mission Chinese Food',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker19, 'mouseover', function () {
              window19.open(map, marker19);
          });
          google.maps.event.addListener(marker19, 'mouseout', function () {
              window19.close();
          });
            
          var latLng20 = new google.maps.LatLng(40.751802, -73.978043);
          var string20 = '<h1>Pershing Square Caf </h1><p>Tradition that I have brunch here at least once on every trip to NY';
          var window20 = new google.maps.InfoWindow({
              content: string20
          });
          var marker20 = new google.maps.Marker({
              position: latLng20,
              map: map,
              title: 'Pershing Square Caf ',
              icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
          });
          google.maps.event.addListener(marker20, 'mouseover', function () {
              window20.open(map, marker20);
          });
          google.maps.event.addListener(marker20, 'mouseout', function () {
              window20.close();
          });
            
          var latLng21 = new google.maps.LatLng(40.722748, -73.99623199999999);
          var string21 = '<h1>Rubirosa</h1><p>Recommended Italian';
          var window21 = new google.maps.InfoWindow({
              content: string21
          });
          var marker21 = new google.maps.Marker({
              position: latLng21,
              map: map,
              title: 'Rubirosa',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker21, 'mouseover', function () {
              window21.open(map, marker21);
          });
          google.maps.event.addListener(marker21, 'mouseout', function () {
              window21.close();
          });
            
          var latLng22 = new google.maps.LatLng(40.722283, -73.98747);
          var string22 = '<h1>Katz s Delicatessen</h1><p>Famous Jewish deli (when Harry Met Sally)';
          var window22 = new google.maps.InfoWindow({
              content: string22
          });
          var marker22 = new google.maps.Marker({
              position: latLng22,
              map: map,
              title: 'Katz s Delicatessen',
              icon: 'http://maps.google.com/mapfiles/ms/icons/pink-dot.png'
          });
          google.maps.event.addListener(marker22, 'mouseover', function () {
              window22.open(map, marker22);
          });
          google.maps.event.addListener(marker22, 'mouseout', function () {
              window22.close();
          });
            
          var latLng23 = new google.maps.LatLng(40.6867781, -73.9547298);
          var string23 = '<h1>Do or Dine</h1><p>Voted one of the best value brunches in NY';
          var window23 = new google.maps.InfoWindow({
              content: string23
          });
          var marker23 = new google.maps.Marker({
              position: latLng23,
              map: map,
              title: 'Do or Dine',
              icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
          });
          google.maps.event.addListener(marker23, 'mouseover', function () {
              window23.open(map, marker23);
          });
          google.maps.event.addListener(marker23, 'mouseout', function () {
              window23.close();
          });
            
          var latLng24 = new google.maps.LatLng(40.6850507, -73.991694);
          var string24 = '<h1>Char No.4</h1><p>Voted as having the best pancakes in NY';
          var window24 = new google.maps.InfoWindow({
              content: string24
          });
          var marker24 = new google.maps.Marker({
              position: latLng24,
              map: map,
              title: 'Char No.4',
              icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
          });
          google.maps.event.addListener(marker24, 'mouseover', function () {
              window24.open(map, marker24);
          });
          google.maps.event.addListener(marker24, 'mouseout', function () {
              window24.close();
          });
            
          var latLng25 = new google.maps.LatLng(40.7287521, -73.9896928);
          var string25 = '<h1>McSorley s Old Ale House</h1><p>NY institution';
          var window25 = new google.maps.InfoWindow({
              content: string25
          });
          var marker25 = new google.maps.Marker({
              position: latLng25,
              map: map,
              title: 'McSorley s Old Ale House',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker25, 'mouseover', function () {
              window25.open(map, marker25);
          });
          google.maps.event.addListener(marker25, 'mouseout', function () {
              window25.close();
          });
            
          var latLng26 = new google.maps.LatLng(40.7139824, -73.9558775);
          var string26 = '<h1>The Commodore</h1><p>Dive bar with arcade games';
          var window26 = new google.maps.InfoWindow({
              content: string26
          });
          var marker26 = new google.maps.Marker({
              position: latLng26,
              map: map,
              title: 'The Commodore',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker26, 'mouseover', function () {
              window26.open(map, marker26);
          });
          google.maps.event.addListener(marker26, 'mouseout', function () {
              window26.close();
          });
            
          var latLng27 = new google.maps.LatLng(40.7170257, -73.9591786);
          var string27 = '<h1>Egg</h1><p>Southern style brunch';
          var window27 = new google.maps.InfoWindow({
              content: string27
          });
          var marker27 = new google.maps.Marker({
              position: latLng27,
              map: map,
              title: 'Egg',
              icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
          });
          google.maps.event.addListener(marker27, 'mouseover', function () {
              window27.open(map, marker27);
          });
          google.maps.event.addListener(marker27, 'mouseout', function () {
              window27.close();
          });
            
          var latLng28 = new google.maps.LatLng(40.7143528, -74.00597309999999);
          var string28 = '<h1>Martini Bar</h1><p>Open 5.30   8pm. Friday and Saturday.';
          var window28 = new google.maps.InfoWindow({
              content: string28
          });
          var marker28 = new google.maps.Marker({
              position: latLng28,
              map: map,
              title: 'Martini Bar',
              icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          });
          google.maps.event.addListener(marker28, 'mouseover', function () {
              window28.open(map, marker28);
          });
          google.maps.event.addListener(marker28, 'mouseout', function () {
              window28.close();
          });
        
}

google.maps.event.addDomListener(window, 'load', initialize);
