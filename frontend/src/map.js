import m from 'mithril'

import L from 'leaflet'

export default class Map
{
    view()
    {
        return <div id = "map" style = "width: 100%; height: 100%"></div>
    }

    oncreate(vnode)
    {
        const coord_list = [[17.339815, 78.492831],[17.429357, 78.397482]];

        var mapOptions = {
            center: [17.385044, 78.486671],
            zoom: 10
         }
         
         // Creating a map object
         var map = new L.map('map', mapOptions);
         
         // Creating a Layer object
         var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
         
         // Adding layer to the map
         map.addLayer(layer);

         // Adding marker to the map
          coord_list.forEach(element => L.marker([element[0], element[1]]).addTo(map));
    }
}