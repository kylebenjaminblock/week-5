/* =====================
 Copy your code from Week 4 Lab 2 Part 2 part2-app-state.js in this space
===================== */

// Call data
var parseData = function(solarData) {
  return JSON.parse(solarData);
  };

  // Define marker
  var plotMarkers = function(solarData_1, LONG_, LAT) {
    return _.map(solarData_1, function(data) {
      return L.marker([data[LONG_], data[LAT]]);
    });
  };

// Define plot
  var plotMarkers = function(markers) {
     _.map(markers, function(toMap) {
      mapped.addTo(map);
    });
  };

// remove markers
var removeMarkers = function(remove) {
    _.each(remove, function (clear) {
      map.removeLayer(clear);
    });
};

// setup map
var map = L.map('map', {
  center: [39.9522, -75.1639],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/* =====================
 CODE EXECUTED HERE!
===================== */

$("button").click(function(){
  var urlField=$("#url-input").val();
  var latitude=$("#lat-input").val("LAT");
  var longitude=$("#long-input").val("LONG_");

var downloadData=$.ajax(urlField);
  downloadData.done(function(data){
      var parsed = parseData(data);
      var markers = makeMarkers(parsed, latitude, longitude);
      console.log(markers);
      plotMarkers(markers);
  });
});
