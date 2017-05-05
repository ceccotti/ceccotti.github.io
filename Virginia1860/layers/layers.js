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
            });var format_Majorityofvotescastperparty2 = new ol.format.GeoJSON();
var features_Majorityofvotescastperparty2 = format_Majorityofvotescastperparty2.readFeatures(geojson_Majorityofvotescastperparty2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Majorityofvotescastperparty2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Majorityofvotescastperparty2.addFeatures(features_Majorityofvotescastperparty2);var lyr_Majorityofvotescastperparty2 = new ol.layer.Vector({
                source:jsonSource_Majorityofvotescastperparty2, 
                style: style_Majorityofvotescastperparty2,
                title: "Majority of votes cast per party"
            });

lyr_votesagainstsecession0.setVisible(true);lyr_UnionArmyPlacements1.setVisible(true);lyr_Majorityofvotescastperparty2.setVisible(true);
var layersList = [baseLayer,lyr_votesagainstsecession0,lyr_UnionArmyPlacements1,lyr_Majorityofvotescastperparty2];
lyr_votesagainstsecession0.set('fieldAliases', {'DECADE': 'DECADE', 'NHGISNAM': 'NHGISNAM', 'NHGISST': 'NHGISST', 'NHGISCTY': 'NHGISCTY', 'ICPSRST': 'ICPSRST', 'ICPSRCTY': 'ICPSRCTY', 'ICPSRNAM': 'ICPSRNAM', 'STATENAM': 'STATENAM', 'ICPSRSTI': 'ICPSRSTI', 'ICPSRCTYI': 'ICPSRCTYI', 'ICPSRFIP': 'ICPSRFIP', 'GISJOIN': 'GISJOIN', 'GISJOIN2': 'GISJOIN2', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'PID': 'PID', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'GISJOIN3': 'GISJOIN3', 'COUNTYFULL': 'COUNTYFULL', 'FORSECESSI': 'FORSECESSI', 'AGAINSTSEC': 'AGAINSTSEC', 'SLAVE': 'SLAVE', 'FREE': 'FREE', 'TOTALPOP': 'TOTALPOP', 'SLAVESPER1': 'SLAVESPER1', 'TOTALVOTES': 'TOTALVOTES', 'FORSECPERC': 'FORSECPERC', 'AGAINSTPER': 'AGAINSTPER', });
lyr_UnionArmyPlacements1.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'TIMESTAMP': 'TIMESTAMP', 'BEGIN': 'BEGIN', 'END': 'END', 'ALTITUDEMO': 'ALTITUDEMO', 'TESSELLATE': 'TESSELLATE', 'EXTRUDE': 'EXTRUDE', 'VISIBILITY': 'VISIBILITY', 'DRAWORDER': 'DRAWORDER', 'ICON': 'ICON', 'REGIMENT': 'REGIMENT', 'SENTENCE': 'SENTENCE', 'DYER_TEXT': 'DYER_TEXT', 'GETTY_PLAC': 'GETTY_PLAC', 'TGN': 'TGN', });
lyr_Majorityofvotescastperparty2.set('fieldAliases', {'DECADE': 'DECADE', 'NHGISNAM': 'NHGISNAM', 'NHGISST': 'NHGISST', 'NHGISCTY': 'NHGISCTY', 'ICPSRST': 'ICPSRST', 'ICPSRCTY': 'ICPSRCTY', 'ICPSRNAM': 'ICPSRNAM', 'STATENAM': 'STATENAM', 'ICPSRSTI': 'ICPSRSTI', 'ICPSRCTYI': 'ICPSRCTYI', 'ICPSRFIP': 'ICPSRFIP', 'GISJOIN': 'GISJOIN', 'GISJOIN2': 'GISJOIN2', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'PID': 'PID', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'GISJOIN3': 'GISJOIN3', 'STATENAME': 'STATENAME', 'COUNTYNAME': 'COUNTYNAME', 'COUNTYID': 'COUNTYID', 'PRESDEM186': 'PRESDEM186', 'PRESREP186': 'PRESREP186', 'PRESDEMEQ1': 'PRESDEMEQ1', 'CONSTUNION': 'CONSTUNION', 'PRESOTHER1': 'PRESOTHER1', 'PRESTOTALV': 'PRESTOTALV', 'PRESTURNOU': 'PRESTURNOU', 'CONGDEM186': 'CONGDEM186', 'CONGREP186': 'CONGREP186', 'CONGDEMEQ1': 'CONGDEMEQ1', 'CONGREPEQ1': 'CONGREPEQ1', 'CONGOTHER1': 'CONGOTHER1', 'CONGTOTALV': 'CONGTOTALV', 'CONGTURNOU': 'CONGTURNOU', 'V757': 'V757', 'V758': 'V758', 'V759': 'V759', });
lyr_votesagainstsecession0.set('fieldImages', {'DECADE': 'TextEdit', 'NHGISNAM': 'TextEdit', 'NHGISST': 'TextEdit', 'NHGISCTY': 'TextEdit', 'ICPSRST': 'TextEdit', 'ICPSRCTY': 'TextEdit', 'ICPSRNAM': 'TextEdit', 'STATENAM': 'TextEdit', 'ICPSRSTI': 'TextEdit', 'ICPSRCTYI': 'TextEdit', 'ICPSRFIP': 'TextEdit', 'GISJOIN': 'TextEdit', 'GISJOIN2': 'TextEdit', 'STATE': 'TextEdit', 'COUNTY': 'TextEdit', 'PID': 'TextEdit', 'X_CENTROID': 'TextEdit', 'Y_CENTROID': 'TextEdit', 'GISJOIN3': 'TextEdit', 'COUNTYFULL': 'TextEdit', 'FORSECESSI': 'TextEdit', 'AGAINSTSEC': 'TextEdit', 'SLAVE': 'TextEdit', 'FREE': 'TextEdit', 'TOTALPOP': 'TextEdit', 'SLAVESPER1': 'TextEdit', 'TOTALVOTES': 'TextEdit', 'FORSECPERC': 'TextEdit', 'AGAINSTPER': 'TextEdit', });
lyr_UnionArmyPlacements1.set('fieldImages', {'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'NAME': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'TIMESTAMP': 'TextEdit', 'BEGIN': 'TextEdit', 'END': 'TextEdit', 'ALTITUDEMO': 'TextEdit', 'TESSELLATE': 'TextEdit', 'EXTRUDE': 'TextEdit', 'VISIBILITY': 'TextEdit', 'DRAWORDER': 'TextEdit', 'ICON': 'TextEdit', 'REGIMENT': 'TextEdit', 'SENTENCE': 'TextEdit', 'DYER_TEXT': 'TextEdit', 'GETTY_PLAC': 'TextEdit', 'TGN': 'TextEdit', });
lyr_Majorityofvotescastperparty2.set('fieldImages', {'DECADE': 'TextEdit', 'NHGISNAM': 'TextEdit', 'NHGISST': 'TextEdit', 'NHGISCTY': 'TextEdit', 'ICPSRST': 'TextEdit', 'ICPSRCTY': 'TextEdit', 'ICPSRNAM': 'TextEdit', 'STATENAM': 'TextEdit', 'ICPSRSTI': 'TextEdit', 'ICPSRCTYI': 'TextEdit', 'ICPSRFIP': 'TextEdit', 'GISJOIN': 'TextEdit', 'GISJOIN2': 'TextEdit', 'STATE': 'TextEdit', 'COUNTY': 'TextEdit', 'PID': 'TextEdit', 'X_CENTROID': 'TextEdit', 'Y_CENTROID': 'TextEdit', 'GISJOIN3': 'TextEdit', 'STATENAME': 'TextEdit', 'COUNTYNAME': 'TextEdit', 'COUNTYID': 'TextEdit', 'PRESDEM186': 'TextEdit', 'PRESREP186': 'TextEdit', 'PRESDEMEQ1': 'TextEdit', 'CONSTUNION': 'TextEdit', 'PRESOTHER1': 'TextEdit', 'PRESTOTALV': 'TextEdit', 'PRESTURNOU': 'TextEdit', 'CONGDEM186': 'TextEdit', 'CONGREP186': 'TextEdit', 'CONGDEMEQ1': 'TextEdit', 'CONGREPEQ1': 'TextEdit', 'CONGOTHER1': 'TextEdit', 'CONGTOTALV': 'TextEdit', 'CONGTURNOU': 'TextEdit', 'V757': 'TextEdit', 'V758': 'TextEdit', 'V759': 'TextEdit', });
lyr_votesagainstsecession0.set('fieldLabels', {'DECADE': 'no label', 'NHGISNAM': 'no label', 'NHGISST': 'no label', 'NHGISCTY': 'no label', 'ICPSRST': 'no label', 'ICPSRCTY': 'no label', 'ICPSRNAM': 'no label', 'STATENAM': 'no label', 'ICPSRSTI': 'no label', 'ICPSRCTYI': 'no label', 'ICPSRFIP': 'no label', 'GISJOIN': 'no label', 'GISJOIN2': 'no label', 'STATE': 'no label', 'COUNTY': 'no label', 'PID': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'GISJOIN3': 'no label', 'COUNTYFULL': 'header label', 'FORSECESSI': 'no label', 'AGAINSTSEC': 'inline label', 'SLAVE': 'inline label', 'FREE': 'inline label', 'TOTALPOP': 'inline label', 'SLAVESPER1': 'no label', 'TOTALVOTES': 'no label', 'FORSECPERC': 'no label', 'AGAINSTPER': 'no label', });
lyr_UnionArmyPlacements1.set('fieldLabels', {'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'NAME': 'header label', 'DESCRIPTIO': 'no label', 'TIMESTAMP': 'inline label', 'BEGIN': 'inline label', 'END': 'inline label', 'ALTITUDEMO': 'no label', 'TESSELLATE': 'no label', 'EXTRUDE': 'no label', 'VISIBILITY': 'no label', 'DRAWORDER': 'no label', 'ICON': 'no label', 'REGIMENT': 'inline label', 'SENTENCE': 'no label', 'DYER_TEXT': 'no label', 'GETTY_PLAC': 'no label', 'TGN': 'no label', });
lyr_Majorityofvotescastperparty2.set('fieldLabels', {'DECADE': 'no label', 'NHGISNAM': 'no label', 'NHGISST': 'no label', 'NHGISCTY': 'no label', 'ICPSRST': 'no label', 'ICPSRCTY': 'no label', 'ICPSRNAM': 'no label', 'STATENAM': 'no label', 'ICPSRSTI': 'no label', 'ICPSRCTYI': 'no label', 'ICPSRFIP': 'no label', 'GISJOIN': 'no label', 'GISJOIN2': 'no label', 'STATE': 'no label', 'COUNTY': 'no label', 'PID': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'GISJOIN3': 'no label', 'STATENAME': 'no label', 'COUNTYNAME': 'inline label', 'COUNTYID': 'no label', 'PRESDEM186': 'inline label', 'PRESREP186': 'inline label', 'PRESDEMEQ1': 'inline label', 'CONSTUNION': 'inline label', 'PRESOTHER1': 'no label', 'PRESTOTALV': 'no label', 'PRESTURNOU': 'no label', 'CONGDEM186': 'no label', 'CONGREP186': 'no label', 'CONGDEMEQ1': 'no label', 'CONGREPEQ1': 'no label', 'CONGOTHER1': 'no label', 'CONGTOTALV': 'no label', 'CONGTURNOU': 'no label', 'V757': 'no label', 'V758': 'no label', 'V759': 'no label', });
lyr_Majorityofvotescastperparty2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});