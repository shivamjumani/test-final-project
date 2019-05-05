// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdmFtOTk3IiwiYSI6ImNqdWQ5ZDBicDB3bmE0ZHJ2NzF0Zjd4MHAifQ.klvBSqkgGNt7aNjxU7x0Gg';


var map = new mapboxgl.Map({
  container: 'map',
  // style: 'mapbox://styles/mapbox/light-v9',
  style:'mapbox://styles/shivam997/cjulzicvp0aw31fmzkn0o9hb5',
  center: [-73.966999,40.739584],
  zoom: 8.5,
});

map.on('style.load', function() {
  $.getJSON('js/theatreData.geojson', function(data) {

    map.addSource('test-data', {
      type: 'geojson',
      data: data,
    });

    map.addLayer({
         'id': 'theater-locations',
         'type': 'circle',
         'source': 'test-data',
         'paint' : {
           'circle-radius': {
             property: 'theatre_rating',
             stops: [
               [1,1],[2,2],[3,6],[4,8],[5,10]
             ]
           },

           'circle-opacity': 0.8,
           'circle-color': {
             type: 'categorical',
             property: 'theatre_categories_0_title',
             stops: [
               ['Comedy Clubs', '#DDA0DD'],
               ['Dance Studios', '#EE82EE'],
               ['Music Venues', '#ea6661'],
               ['Performing Arts', '#778899']
             ]
           }
         }
       })
  })
}
)
