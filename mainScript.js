var map;
function initialize() {
  var fairburn = new google.maps.LatLng(53.744555, -1.288084);
  var milford = new google.maps.LatLng(53.77597, -1.251865);
  var sherburn = new google.maps.LatLng(53.790397, -1.257058);
  var york = new google.maps.LatLng(53.928944, -1.114064);
  var durham = new google.maps.LatLng(54.763166, -1.578344);
  var engage = new google.maps.LatLng(54.257491, -1.117175);
  var home = new google.maps.LatLng(51.487503, -0.012663);

  var mapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(53.744555, -1.288084),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var fairburnString = '<h1>Fairburn</h1><p>I grew up here. Its a great village with a nice pub and a nature reserve.';
  var milfordString = '<h1>South Milford</h1><p>This is where I went to primary school.';
  var sherburnString = '<h1>Sherburn</h1><p>This is where I went to high school.';
  var yorkString = '<h1>York</h1><p><h2>York Sixth Form College</h2><p>I came here to do my A-Levels';
  var durhamString = '<h1>Durham University</h1><p><h2>Collingwood College</h2>I read mathematics here';
  var engageString = '<h1>Rievaulx Abbey</h1>This is where I got engaged to the beautiful Katie Langridge.'
  var homeString = '<h1>Home</h1><p>I now live here.';

  var fairburnWindow = new google.maps.InfoWindow({
      content: fairburnString
  });

  var milfordWindow = new google.maps.InfoWindow({
      content: milfordString
  });

  var sherburnWindow = new google.maps.InfoWindow({
      content: sherburnString
  });

  var yorkWindow = new google.maps.InfoWindow({
      content: yorkString
  });

  var durhamWindow = new google.maps.InfoWindow({
      content: durhamString
  });

  var engageWindow = new google.maps.InfoWindow({
      content: engageString
  });

  var homeWindow = new google.maps.InfoWindow({
      content: homeString
  });

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var fairburnMarker = new google.maps.Marker({
      position: fairburn,
      map: map,
      title: 'Fairburn'
  });

  var milfordMarker = new google.maps.Marker({
      position: milford,
      map: map,
      title: 'South Milford'
  });

  var sherburnMarker = new google.maps.Marker({
      position: sherburn,
      map: map,
      title: 'Sherburn-in-Elmet'
  });

  var yorkMarker = new google.maps.Marker({
      position: york,
      map: map,
      title: 'York'
  });

  var durhamMarker = new google.maps.Marker({
      position: durham,
      map: map,
      title: 'Durham'
  });

  var engageMarker = new google.maps.Marker({
      position: engage,
      map: map,
      title: 'Rievaulx Abbey'
  });

  var homeMarker = new google.maps.Marker({
      position: home,
      map: map,
      title: 'Island Gardens'
  });

  google.maps.event.addListener(fairburnMarker, 'mouseover', function () {
      fairburnWindow.open(map, fairburnMarker);
  });

  google.maps.event.addListener(milfordMarker, 'mouseover', function () {
      milfordWindow.open(map, milfordMarker);
  });

  google.maps.event.addListener(sherburnMarker, 'mouseover', function () {
      sherburnWindow.open(map, sherburnMarker);
  });

  google.maps.event.addListener(yorkMarker, 'mouseover', function () {
      yorkWindow.open(map, yorkMarker);
  });

  google.maps.event.addListener(durhamMarker, 'mouseover', function () {
      durhamWindow.open(map, durhamMarker);
  });

  google.maps.event.addListener(engageMarker, 'mouseover', function () {
      engageWindow.open(map, engageMarker);
  });

  google.maps.event.addListener(homeMarker, 'mouseover', function () {
      homeWindow.open(map, homeMarker);
  });

  google.maps.event.addListener(fairburnMarker, 'mouseout', function () {
      fairburnWindow.close();
  });

  google.maps.event.addListener(milfordMarker, 'mouseout', function () {
      milfordWindow.close();
  });

  google.maps.event.addListener(sherburnMarker, 'mouseout', function () {
      sherburnWindow.close();
  });

  google.maps.event.addListener(yorkMarker, 'mouseout', function () {
      yorkWindow.close();
  });

  google.maps.event.addListener(durhamMarker, 'mouseout', function () {
      durhamWindow.close();
  });

  google.maps.event.addListener(engageMarker, 'mouseout', function () {
      engageWindow.close();
  });

  google.maps.event.addListener(homeMarker, 'mouseout', function () {
      homeWindow.close();
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
