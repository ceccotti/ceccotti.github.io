var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_votesagainstsecession0 = new ol.format.GeoJSON();
var features_votesagainstsecession0 = format_votesagainstsecession0.readFeatures(geojson_votesagainstsecession0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_votesagainstsecession0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_votesagainstsecession0.addFeatures(features_votesagainstsecession0);var lyr_votesagainstsecession0 = new ol.layer.Vector({
                source:jsonSource_votesagainstsecession0, 
                style: style_votesagainstsecession0,
                title: "% votes against secession"
            });var format_UnionArmyPlacements1 = new ol.format.GeoJSON();
var features_UnionArmyPlacements1 = format_UnionArmyPlacements1.readFeatures(geojson_UnionArmyPlacements1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnionArmyPlacements1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UnionArmyPlacements1.addFeatures(features_UnionArmyPlacements1);var lyr_UnionArmyPlacements1 = new ol.layer.Vector({
                source:jsonSource_UnionArmyPlacements1, 
                style: style_UnionArmyPlacements1,
                title: "Union Army Placements"
            });

lyr_votesagainstsecession0.setVisible(true);lyr_UnionArmyPlacements1.setVisible(true);
var layersList = [baseLayer,lyr_votesagainstsecession0,lyr_UnionArmyPlacements1];
lyr_votesagainstsecession0.set('fieldAliases', {'DECADE': 'DECADE', 'NHGISNAM': 'NHGISNAM', 'NHGISST': 'NHGISST', 'NHGISCTY': 'NHGISCTY', 'ICPSRST': 'ICPSRST', 'ICPSRCTY': 'ICPSRCTY', 'ICPSRNAM': 'ICPSRNAM', 'STATENAM': 'STATENAM', 'ICPSRSTI': 'ICPSRSTI', 'ICPSRCTYI': 'ICPSRCTYI', 'ICPSRFIP': 'ICPSRFIP', 'GISJOIN': 'GISJOIN', 'GISJOIN2': 'GISJOIN2', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'PID': 'PID', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'GISJOIN3': 'GISJOIN3', 'COUNTYFULL': 'COUNTYFULL', 'FORSECESSI': 'FORSECESSI', 'AGAINSTSEC': 'AGAINSTSEC', 'SLAVE': 'SLAVE', 'FREE': 'FREE', 'TOTALPOP': 'TOTALPOP', 'SLAVESPER1': 'SLAVESPER1', 'TOTALVOTES': 'TOTALVOTES', 'FORSECPERC': 'FORSECPERC', 'AGAINSTPER': 'AGAINSTPER', });
lyr_UnionArmyPlacements1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'TIMESTAMP': 'TIMESTAMP', 'BEGIN': 'BEGIN', 'END': 'END', 'ALTITUDEMO': 'ALTITUDEMO', 'TESSELLATE': 'TESSELLATE', 'EXTRUDE': 'EXTRUDE', 'VISIBILITY': 'VISIBILITY', 'DRAWORDER': 'DRAWORDER', 'ICON': 'ICON', 'REGIMENT': 'REGIMENT', 'SENTENCE': 'SENTENCE', 'DYER_TEXT': 'DYER_TEXT', 'GETTY_PLAC': 'GETTY_PLAC', 'TGN': 'TGN', });
lyr_votesagainstsecession0.set('fieldImages', {'DECADE': 'TextEdit', 'NHGISNAM': 'TextEdit', 'NHGISST': 'TextEdit', 'NHGISCTY': 'TextEdit', 'ICPSRST': 'TextEdit', 'ICPSRCTY': 'TextEdit', 'ICPSRNAM': 'TextEdit', 'STATENAM': 'TextEdit', 'ICPSRSTI': 'TextEdit', 'ICPSRCTYI': 'TextEdit', 'ICPSRFIP': 'TextEdit', 'GISJOIN': 'TextEdit', 'GISJOIN2': 'TextEdit', 'STATE': 'TextEdit', 'COUNTY': 'TextEdit', 'PID': 'TextEdit', 'X_CENTROID': 'TextEdit', 'Y_CENTROID': 'TextEdit', 'GISJOIN3': 'TextEdit', 'COUNTYFULL': 'TextEdit', 'FORSECESSI': 'TextEdit', 'AGAINSTSEC': 'TextEdit', 'SLAVE': 'TextEdit', 'FREE': 'TextEdit', 'TOTALPOP': 'TextEdit', 'SLAVESPER1': 'TextEdit', 'TOTALVOTES': 'TextEdit', 'FORSECPERC': 'TextEdit', 'AGAINSTPER': 'TextEdit', });
lyr_UnionArmyPlacements1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'NAME': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'TIMESTAMP': 'TextEdit', 'BEGIN': 'TextEdit', 'END': 'TextEdit', 'ALTITUDEMO': 'TextEdit', 'TESSELLATE': 'TextEdit', 'EXTRUDE': 'TextEdit', 'VISIBILITY': 'TextEdit', 'DRAWORDER': 'TextEdit', 'ICON': 'TextEdit', 'REGIMENT': 'TextEdit', 'SENTENCE': 'TextEdit', 'DYER_TEXT': 'TextEdit', 'GETTY_PLAC': 'TextEdit', 'TGN': 'TextEdit', });
lyr_votesagainstsecession0.set('fieldLabels', {'DECADE': 'no label', 'NHGISNAM': 'no label', 'NHGISST': 'no label', 'NHGISCTY': 'no label', 'ICPSRST': 'no label', 'ICPSRCTY': 'no label', 'ICPSRNAM': 'no label', 'STATENAM': 'no label', 'ICPSRSTI': 'no label', 'ICPSRCTYI': 'no label', 'ICPSRFIP': 'no label', 'GISJOIN': 'no label', 'GISJOIN2': 'no label', 'STATE': 'no label', 'COUNTY': 'no label', 'PID': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'GISJOIN3': 'no label', 'COUNTYFULL': 'no label', 'FORSECESSI': 'no label', 'AGAINSTSEC': 'no label', 'SLAVE': 'no label', 'FREE': 'no label', 'TOTALPOP': 'no label', 'SLAVESPER1': 'no label', 'TOTALVOTES': 'no label', 'FORSECPERC': 'no label', 'AGAINSTPER': 'no label', });
lyr_UnionArmyPlacements1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'NAME': 'no label', 'DESCRIPTIO': 'no label', 'TIMESTAMP': 'no label', 'BEGIN': 'no label', 'END': 'no label', 'ALTITUDEMO': 'no label', 'TESSELLATE': 'no label', 'EXTRUDE': 'no label', 'VISIBILITY': 'no label', 'DRAWORDER': 'no label', 'ICON': 'no label', 'REGIMENT': 'no label', 'SENTENCE': 'no label', 'DYER_TEXT': 'no label', 'GETTY_PLAC': 'no label', 'TGN': 'no label', });
lyr_UnionArmyPlacements1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});