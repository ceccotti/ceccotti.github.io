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
            });var format_Majorityofvotescastperparty1 = new ol.format.GeoJSON();
var features_Majorityofvotescastperparty1 = format_Majorityofvotescastperparty1.readFeatures(geojson_Majorityofvotescastperparty1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Majorityofvotescastperparty1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Majorityofvotescastperparty1.addFeatures(features_Majorityofvotescastperparty1);var lyr_Majorityofvotescastperparty1 = new ol.layer.Vector({
                source:jsonSource_Majorityofvotescastperparty1, 
                style: style_Majorityofvotescastperparty1,
                title: "Majority of votes cast per party"
            });var format_UnionArmyPlacements2 = new ol.format.GeoJSON();
var features_UnionArmyPlacements2 = format_UnionArmyPlacements2.readFeatures(geojson_UnionArmyPlacements2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UnionArmyPlacements2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UnionArmyPlacements2.addFeatures(features_UnionArmyPlacements2);var lyr_UnionArmyPlacements2 = new ol.layer.Vector({
                source:jsonSource_UnionArmyPlacements2, 
                style: style_UnionArmyPlacements2,
                title: "Union Army Placements"
            });

lyr_votesagainstsecession0.setVisible(true);lyr_Majorityofvotescastperparty1.setVisible(true);lyr_UnionArmyPlacements2.setVisible(true);
var layersList = [baseLayer,lyr_votesagainstsecession0,lyr_Majorityofvotescastperparty1,lyr_UnionArmyPlacements2];
lyr_votesagainstsecession0.set('fieldAliases', {'DECADE': 'DECADE', 'NHGISNAM': 'NHGISNAM', 'NHGISST': 'NHGISST', 'NHGISCTY': 'NHGISCTY', 'ICPSRST': 'ICPSRST', 'ICPSRCTY': 'ICPSRCTY', 'ICPSRNAM': 'ICPSRNAM', 'STATENAM': 'STATENAM', 'ICPSRSTI': 'ICPSRSTI', 'ICPSRCTYI': 'ICPSRCTYI', 'ICPSRFIP': 'ICPSRFIP', 'GISJOIN': 'GISJOIN', 'GISJOIN2': 'GISJOIN2', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'PID': 'PID', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'GISJOIN3': 'GISJOIN3', 'County Name': 'County Name', 'Votes For Secession': 'Votes For Secession', 'Votes Against Secession': 'Votes Against Secession', 'Enslaved Population': 'Enslaved Population', 'Free Population': 'Free Population', 'Total Population': 'Total Population', 'Slaves Per 1000 People': 'Slaves Per 1000 People', 'TOTALVOTES': 'TOTALVOTES', 'FORSECPERC': 'FORSECPERC', 'AGAINSTPER': 'AGAINSTPER', });
lyr_Majorityofvotescastperparty1.set('fieldAliases', {'DECADE': 'DECADE', 'NHGISNAM': 'NHGISNAM', 'NHGISST': 'NHGISST', 'NHGISCTY': 'NHGISCTY', 'ICPSRST': 'ICPSRST', 'ICPSRCTY': 'ICPSRCTY', 'ICPSRNAM': 'ICPSRNAM', 'STATENAM': 'STATENAM', 'ICPSRSTI': 'ICPSRSTI', 'ICPSRCTYI': 'ICPSRCTYI', 'ICPSRFIP': 'ICPSRFIP', 'GISJOIN': 'GISJOIN', 'GISJOIN2': 'GISJOIN2', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'PID': 'PID', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'GISJOIN3': 'GISJOIN3', 'STATENAME': 'STATENAME', 'County Name': 'County Name', 'COUNTYID': 'COUNTYID', 'Democratic Votes': 'Democratic Votes', 'Republican Votes': 'Republican Votes', 'Democratic-Equivalent Votes': 'Democratic-Equivalent Votes', 'Constitutional Union Votes': 'Constitutional Union Votes', 'Other Voters': 'Other Voters', 'PRESTOTALV': 'PRESTOTALV', 'PRESTURNOU': 'PRESTURNOU', 'CONGDEM186': 'CONGDEM186', 'CONGREP186': 'CONGREP186', 'CONGDEMEQ1': 'CONGDEMEQ1', 'CONGREPEQ1': 'CONGREPEQ1', 'CONGOTHER1': 'CONGOTHER1', 'CONGTOTALV': 'CONGTOTALV', 'CONGTURNOU': 'CONGTURNOU', 'V757': 'V757', 'V758': 'V758', 'V759': 'V759', });
lyr_UnionArmyPlacements2.set('fieldAliases', {'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'NAME': 'NAME', 'DESCRIPTIO': 'DESCRIPTIO', 'Timestamp': 'Timestamp', 'Begin': 'Begin', 'End': 'End', 'ALTITUDEMO': 'ALTITUDEMO', 'TESSELLATE': 'TESSELLATE', 'EXTRUDE': 'EXTRUDE', 'VISIBILITY': 'VISIBILITY', 'DRAWORDER': 'DRAWORDER', 'ICON': 'ICON', 'Regiment': 'Regiment', 'SENTENCE': 'SENTENCE', 'DYER_TEXT': 'DYER_TEXT', 'GETTY_PLAC': 'GETTY_PLAC', 'TGN': 'TGN', });
lyr_votesagainstsecession0.set('fieldImages', {'DECADE': 'Hidden', 'NHGISNAM': 'Hidden', 'NHGISST': 'Hidden', 'NHGISCTY': 'Hidden', 'ICPSRST': 'Hidden', 'ICPSRCTY': 'Hidden', 'ICPSRNAM': 'Hidden', 'STATENAM': 'Hidden', 'ICPSRSTI': 'Hidden', 'ICPSRCTYI': 'Hidden', 'ICPSRFIP': 'Hidden', 'GISJOIN': 'Hidden', 'GISJOIN2': 'Hidden', 'STATE': 'Hidden', 'COUNTY': 'Hidden', 'PID': 'Hidden', 'X_CENTROID': 'Hidden', 'Y_CENTROID': 'Hidden', 'GISJOIN3': 'Hidden', 'County Name': 'TextEdit', 'Votes For Secession': 'TextEdit', 'Votes Against Secession': 'TextEdit', 'Enslaved Population': 'TextEdit', 'Free Population': 'TextEdit', 'Total Population': 'TextEdit', 'Slaves Per 1000 People': 'TextEdit', 'TOTALVOTES': 'Hidden', 'FORSECPERC': 'Hidden', 'AGAINSTPER': 'Hidden', });
lyr_Majorityofvotescastperparty1.set('fieldImages', {'DECADE': 'Hidden', 'NHGISNAM': 'Hidden', 'NHGISST': 'Hidden', 'NHGISCTY': 'Hidden', 'ICPSRST': 'Hidden', 'ICPSRCTY': 'Hidden', 'ICPSRNAM': 'Hidden', 'STATENAM': 'Hidden', 'ICPSRSTI': 'Hidden', 'ICPSRCTYI': 'Hidden', 'ICPSRFIP': 'Hidden', 'GISJOIN': 'Hidden', 'GISJOIN2': 'Hidden', 'STATE': 'Hidden', 'COUNTY': 'Hidden', 'PID': 'Hidden', 'X_CENTROID': 'Hidden', 'Y_CENTROID': 'Hidden', 'GISJOIN3': 'Hidden', 'STATENAME': 'Hidden', 'County Name': 'TextEdit', 'COUNTYID': 'Hidden', 'Democratic Votes': 'TextEdit', 'Republican Votes': 'TextEdit', 'Democratic-Equivalent Votes': 'TextEdit', 'Constitutional Union Votes': 'TextEdit', 'Other Voters': 'TextEdit', 'PRESTOTALV': 'Hidden', 'PRESTURNOU': 'Hidden', 'CONGDEM186': 'Hidden', 'CONGREP186': 'Hidden', 'CONGDEMEQ1': 'Hidden', 'CONGREPEQ1': 'Hidden', 'CONGOTHER1': 'Hidden', 'CONGTOTALV': 'Hidden', 'CONGTURNOU': 'Hidden', 'V757': 'Hidden', 'V758': 'Hidden', 'V759': 'Hidden', });
lyr_UnionArmyPlacements2.set('fieldImages', {'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', 'NAME': 'Hidden', 'DESCRIPTIO': 'Hidden', 'Timestamp': 'TextEdit', 'Begin': 'TextEdit', 'End': 'TextEdit', 'ALTITUDEMO': 'Hidden', 'TESSELLATE': 'Hidden', 'EXTRUDE': 'Hidden', 'VISIBILITY': 'Hidden', 'DRAWORDER': 'Hidden', 'ICON': 'Hidden', 'Regiment': 'TextEdit', 'SENTENCE': 'Hidden', 'DYER_TEXT': 'Hidden', 'GETTY_PLAC': 'Hidden', 'TGN': 'Hidden', });
lyr_votesagainstsecession0.set('fieldLabels', {'County Name': 'header label', 'Votes For Secession': 'header label', 'Votes Against Secession': 'header label', 'Enslaved Population': 'header label', 'Free Population': 'header label', 'Total Population': 'header label', 'Slaves Per 1000 People': 'header label', });
lyr_Majorityofvotescastperparty1.set('fieldLabels', {'County Name': 'header label', 'Democratic Votes': 'header label', 'Republican Votes': 'header label', 'Democratic-Equivalent Votes': 'header label', 'Constitutional Union Votes': 'header label', 'Other Voters': 'header label', });
lyr_UnionArmyPlacements2.set('fieldLabels', {'Timestamp': 'header label', 'Begin': 'header label', 'End': 'header label', 'Regiment': 'header label', });
lyr_UnionArmyPlacements2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});