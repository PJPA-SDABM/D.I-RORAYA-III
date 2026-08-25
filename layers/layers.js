ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([122.327503, -4.321187, 122.460080, -4.253861]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LuasFungsional_3 = new ol.format.GeoJSON();
var features_LuasFungsional_3 = format_LuasFungsional_3.readFeatures(json_LuasFungsional_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LuasFungsional_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuasFungsional_3.addFeatures(features_LuasFungsional_3);
var lyr_LuasFungsional_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuasFungsional_3, 
                style: style_LuasFungsional_3,
                popuplayertitle: 'Luas Fungsional',
                interactive: true,
                title: '<img src="styles/legend/LuasFungsional_3.png" /> Luas Fungsional'
            });
var format_LuasBaku_4 = new ol.format.GeoJSON();
var features_LuasBaku_4 = format_LuasBaku_4.readFeatures(json_LuasBaku_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LuasBaku_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuasBaku_4.addFeatures(features_LuasBaku_4);
var lyr_LuasBaku_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuasBaku_4, 
                style: style_LuasBaku_4,
                popuplayertitle: 'Luas Baku',
                interactive: true,
                title: '<img src="styles/legend/LuasBaku_4.png" /> Luas Baku'
            });
var format_JalanInspeksi_5 = new ol.format.GeoJSON();
var features_JalanInspeksi_5 = format_JalanInspeksi_5.readFeatures(json_JalanInspeksi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JalanInspeksi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanInspeksi_5.addFeatures(features_JalanInspeksi_5);
var lyr_JalanInspeksi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanInspeksi_5, 
                style: style_JalanInspeksi_5,
                popuplayertitle: 'Jalan Inspeksi',
                interactive: true,
    title: 'Jalan Inspeksi<br />\
    <img src="styles/legend/JalanInspeksi_5_0.png" /> Baik Sekali<br />\
    <img src="styles/legend/JalanInspeksi_5_1.png" /> Baik<br />\
    <img src="styles/legend/JalanInspeksi_5_2.png" /> Sedang<br />\
    <img src="styles/legend/JalanInspeksi_5_3.png" /> Jelek<br />' });
var format_Saluran_6 = new ol.format.GeoJSON();
var features_Saluran_6 = format_Saluran_6.readFeatures(json_Saluran_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Saluran_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saluran_6.addFeatures(features_Saluran_6);
var lyr_Saluran_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saluran_6, 
                style: style_Saluran_6,
                popuplayertitle: 'Saluran',
                interactive: true,
    title: 'Saluran<br />\
    <img src="styles/legend/Saluran_6_0.png" /> Baik Sekali<br />\
    <img src="styles/legend/Saluran_6_1.png" /> Baik<br />\
    <img src="styles/legend/Saluran_6_2.png" /> Sedang<br />\
    <img src="styles/legend/Saluran_6_3.png" /> Jelek<br />' });
var format_Bangunan_7 = new ol.format.GeoJSON();
var features_Bangunan_7 = format_Bangunan_7.readFeatures(json_Bangunan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bangunan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_7.addFeatures(features_Bangunan_7);
cluster_Bangunan_7 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bangunan_7
});
var lyr_Bangunan_7 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bangunan_7, 
                style: style_Bangunan_7,
                popuplayertitle: 'Bangunan',
                interactive: true,
    title: 'Bangunan<br />\
    <img src="styles/legend/Bangunan_7_0.png" /> Baik Sekali<br />\
    <img src="styles/legend/Bangunan_7_1.png" /> Baik<br />\
    <img src="styles/legend/Bangunan_7_2.png" /> Sedang<br />\
    <img src="styles/legend/Bangunan_7_3.png" /> Jelek<br />' });
var format_PetakTersier_8 = new ol.format.GeoJSON();
var features_PetakTersier_8 = format_PetakTersier_8.readFeatures(json_PetakTersier_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PetakTersier_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetakTersier_8.addFeatures(features_PetakTersier_8);
var lyr_PetakTersier_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetakTersier_8, 
                style: style_PetakTersier_8,
                popuplayertitle: 'Petak Tersier',
                interactive: true,
                title: '<img src="styles/legend/PetakTersier_8.png" /> Petak Tersier'
            });
var format_Saluran_9 = new ol.format.GeoJSON();
var features_Saluran_9 = format_Saluran_9.readFeatures(json_Saluran_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Saluran_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Saluran_9.addFeatures(features_Saluran_9);
var lyr_Saluran_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Saluran_9, 
                style: style_Saluran_9,
                popuplayertitle: 'Saluran',
                interactive: true,
    title: 'Saluran<br />\
    <img src="styles/legend/Saluran_9_0.png" /> Saluran Primer<br />\
    <img src="styles/legend/Saluran_9_1.png" /> Saluran Sekunder<br />' });
var format_Bangunan_10 = new ol.format.GeoJSON();
var features_Bangunan_10 = format_Bangunan_10.readFeatures(json_Bangunan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Bangunan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_10.addFeatures(features_Bangunan_10);
cluster_Bangunan_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Bangunan_10
});
var lyr_Bangunan_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Bangunan_10, 
                style: style_Bangunan_10,
                popuplayertitle: 'Bangunan',
                interactive: true,
    title: 'Bangunan<br />\
    <img src="styles/legend/Bangunan_10_0.png" /> Utama<br />\
    <img src="styles/legend/Bangunan_10_1.png" /> Pengatur<br />\
    <img src="styles/legend/Bangunan_10_2.png" /> Pelengkap<br />' });
var group_Aset = new ol.layer.Group({
                                layers: [lyr_PetakTersier_8,lyr_Saluran_9,lyr_Bangunan_10,],
                                fold: 'close',
                                title: 'Aset'});
var group_KondisiTahun2025 = new ol.layer.Group({
                                layers: [lyr_JalanInspeksi_5,lyr_Saluran_6,lyr_Bangunan_7,],
                                fold: 'close',
                                title: 'Kondisi Tahun 2025'});

lyr_OSMStandard_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(false);lyr_GoogleSatellite_2.setVisible(true);lyr_LuasFungsional_3.setVisible(false);lyr_LuasBaku_4.setVisible(false);lyr_JalanInspeksi_5.setVisible(false);lyr_Saluran_6.setVisible(true);lyr_Bangunan_7.setVisible(true);lyr_PetakTersier_8.setVisible(false);lyr_Saluran_9.setVisible(false);lyr_Bangunan_10.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleHybrid_1,lyr_GoogleSatellite_2,lyr_LuasFungsional_3,lyr_LuasBaku_4,group_KondisiTahun2025,group_Aset];
lyr_LuasFungsional_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Attrib': 'FID_Attrib', 'Id': 'Id', 'FID_pusat1': 'FID_pusat1', 'Nm_Inf': 'Nm_Inf', 'Luas_Ha': 'Luas_Ha', 'Thn_Dat': 'Thn_Dat', 'Nama_WS': 'Nama_WS', 'Nama_DAS': 'Nama_DAS', 'Irigasi': 'Irigasi', 'Jenis_DI': 'Jenis_DI', 'Bgn_UTM': 'Bgn_UTM', 'Nm_Bgn_Utm': 'Nm_Bgn_Utm', 'Smb_Air': 'Smb_Air', 'Kewenangan': 'Kewenangan', 'L_Renc': 'L_Renc', 'Luas_Pot': 'Luas_Pot', 'Luas_Fung': 'Luas_Fung', 'P_Sal_Ind': 'P_Sal_Ind', 'Ko_Sal_Ind': 'Ko_Sal_Ind', 'P_Sal_Sek': 'P_Sal_Sek', 'Ko_Sal_Sek': 'Ko_Sal_Sek', 'Pjn_Sal_Te': 'Pjn_Sal_Te', 'Kon_Sal_Te': 'Kon_Sal_Te', 'P_Sal_Pem': 'P_Sal_Pem', 'Ko_Sal_Pe': 'Ko_Sal_Pe', 'P_Sal_Sup': 'P_Sal_Sup', 'Ko_Sal_Sup': 'Ko_Sal_Sup', 'Jml_Kl_Ps': 'Jml_Kl_Ps', 'Kon_Kl_Ps': 'Kon_Kl_Ps', 'Jml_Bg_Bag': 'Jml_Bg_Bag', 'Kon_Bg_Bag': 'Kon_Bg_Bag', 'Jml_Bg_B_S': 'Jml_Bg_B_S', 'Kon_Bg_B_S': 'Kon_Bg_B_S', 'Jml_Bg_Sad': 'Jml_Bg_Sad', 'Kon_Bg_Sad': 'Kon_Bg_Sad', 'Jml_Bg_Pen': 'Jml_Bg_Pen', 'Kon_Bg_Pen': 'Kon_Bg_Pen', 'Jml_Sip': 'Jml_Sip', 'Kon_Sip': 'Kon_Sip', 'Jml_Tlg': 'Jml_Tlg', 'Kon_Tlg': 'Kon_Tlg', 'Jml_Jmb': 'Jml_Jmb', 'Kon_Jmb': 'Kon_Jmb', 'Jml_plk': 'Jml_plk', 'Kon_plk': 'Kon_plk', 'Jml_P3A': 'Jml_P3A', 'Jml_A_GP3A': 'Jml_A_GP3A', 'Jml_A_P3A': 'Jml_A_P3A', 'Koord_X': 'Koord_X', 'Koord_Y': 'Koord_Y', 'Shape_Leng': 'Shape_Leng', 'Nm_Prov': 'Nm_Prov', 'Nm_Kab': 'Nm_Kab', 'Kewenang_1': 'Kewenang_1', 'Nm_Inf_1': 'Nm_Inf_1', 'Nm_Prov_1': 'Nm_Prov_1', 'Keterangan': 'Keterangan', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_LuasBaku_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_Attrib': 'FID_Attrib', 'Id': 'Id', 'FID_pusat1': 'FID_pusat1', 'Nm_Inf': 'Nm_Inf', 'Luas_Ha': 'Luas_Ha', 'Thn_Dat': 'Thn_Dat', 'Nama_WS': 'Nama_WS', 'Nama_DAS': 'Nama_DAS', 'Irigasi': 'Irigasi', 'Jenis_DI': 'Jenis_DI', 'Bgn_UTM': 'Bgn_UTM', 'Nm_Bgn_Utm': 'Nm_Bgn_Utm', 'Smb_Air': 'Smb_Air', 'Kewenangan': 'Kewenangan', 'L_Renc': 'L_Renc', 'Luas_Pot': 'Luas_Pot', 'Luas_Fung': 'Luas_Fung', 'P_Sal_Ind': 'P_Sal_Ind', 'Ko_Sal_Ind': 'Ko_Sal_Ind', 'P_Sal_Sek': 'P_Sal_Sek', 'Ko_Sal_Sek': 'Ko_Sal_Sek', 'Pjn_Sal_Te': 'Pjn_Sal_Te', 'Kon_Sal_Te': 'Kon_Sal_Te', 'P_Sal_Pem': 'P_Sal_Pem', 'Ko_Sal_Pe': 'Ko_Sal_Pe', 'P_Sal_Sup': 'P_Sal_Sup', 'Ko_Sal_Sup': 'Ko_Sal_Sup', 'Jml_Kl_Ps': 'Jml_Kl_Ps', 'Kon_Kl_Ps': 'Kon_Kl_Ps', 'Jml_Bg_Bag': 'Jml_Bg_Bag', 'Kon_Bg_Bag': 'Kon_Bg_Bag', 'Jml_Bg_B_S': 'Jml_Bg_B_S', 'Kon_Bg_B_S': 'Kon_Bg_B_S', 'Jml_Bg_Sad': 'Jml_Bg_Sad', 'Kon_Bg_Sad': 'Kon_Bg_Sad', 'Jml_Bg_Pen': 'Jml_Bg_Pen', 'Kon_Bg_Pen': 'Kon_Bg_Pen', 'Jml_Sip': 'Jml_Sip', 'Kon_Sip': 'Kon_Sip', 'Jml_Tlg': 'Jml_Tlg', 'Kon_Tlg': 'Kon_Tlg', 'Jml_Jmb': 'Jml_Jmb', 'Kon_Jmb': 'Kon_Jmb', 'Jml_plk': 'Jml_plk', 'Kon_plk': 'Kon_plk', 'Jml_P3A': 'Jml_P3A', 'Jml_A_GP3A': 'Jml_A_GP3A', 'Jml_A_P3A': 'Jml_A_P3A', 'Koord_X': 'Koord_X', 'Koord_Y': 'Koord_Y', 'Shape_Leng': 'Shape_Leng', 'Nm_Prov': 'Nm_Prov', 'Nm_Kab': 'Nm_Kab', 'Kewenang_1': 'Kewenang_1', 'Nm_Inf_1': 'Nm_Inf_1', 'Nm_Prov_1': 'Nm_Prov_1', 'Keterangan': 'Keterangan', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_JalanInspeksi_5.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'panjang': 'Panjang', 'jenis': 'Jenis', 'kon_sal': 'kon_sal', 'kon_jal': 'Kondisi Jalan', 'stas_awal': 'Stasiun Awal', 'stas_akhir': 'Stasiun Akhir', 'foto': 'Foto', });
lyr_Saluran_6.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'panjang': 'Panjang', 'jenis': 'Jenis', 'kon_sal': 'Kondisi Saluran', 'kon_jal': 'kon_jal', 'stas_awal': 'Stasiun Awal', 'stas_akhir': 'Stasiun Akhir', 'foto': 'Foto', });
lyr_Bangunan_7.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'jenis': 'Jenis', 'kon_bang': 'Kondisi Bangunan', 'foto': 'Foto', });
lyr_PetakTersier_8.set('fieldAliases', {'nomenklatu': 'nomenklatu', 'luas': 'luas', });
lyr_Saluran_9.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'panjang': 'Panjang', 'jenis': 'Jenis', });
lyr_Bangunan_10.set('fieldAliases', {'nama': 'nama', 'nomenklatu': 'nomenklatu', 'id_di': 'id_di', 'norec': 'norec', 'k_aset': 'k_aset', 'jenis': 'Jenis', 'kon_bang': 'Kondisi', 'foto': 'Foto', });
lyr_LuasFungsional_3.set('fieldImages', {'OBJECTID': '', 'FID_Attrib': '', 'Id': '', 'FID_pusat1': '', 'Nm_Inf': '', 'Luas_Ha': '', 'Thn_Dat': '', 'Nama_WS': '', 'Nama_DAS': '', 'Irigasi': '', 'Jenis_DI': '', 'Bgn_UTM': '', 'Nm_Bgn_Utm': '', 'Smb_Air': '', 'Kewenangan': '', 'L_Renc': '', 'Luas_Pot': '', 'Luas_Fung': '', 'P_Sal_Ind': '', 'Ko_Sal_Ind': '', 'P_Sal_Sek': '', 'Ko_Sal_Sek': '', 'Pjn_Sal_Te': '', 'Kon_Sal_Te': '', 'P_Sal_Pem': '', 'Ko_Sal_Pe': '', 'P_Sal_Sup': '', 'Ko_Sal_Sup': '', 'Jml_Kl_Ps': '', 'Kon_Kl_Ps': '', 'Jml_Bg_Bag': '', 'Kon_Bg_Bag': '', 'Jml_Bg_B_S': '', 'Kon_Bg_B_S': '', 'Jml_Bg_Sad': '', 'Kon_Bg_Sad': '', 'Jml_Bg_Pen': '', 'Kon_Bg_Pen': '', 'Jml_Sip': '', 'Kon_Sip': '', 'Jml_Tlg': '', 'Kon_Tlg': '', 'Jml_Jmb': '', 'Kon_Jmb': '', 'Jml_plk': '', 'Kon_plk': '', 'Jml_P3A': '', 'Jml_A_GP3A': '', 'Jml_A_P3A': '', 'Koord_X': '', 'Koord_Y': '', 'Shape_Leng': '', 'Nm_Prov': '', 'Nm_Kab': '', 'Kewenang_1': '', 'Nm_Inf_1': '', 'Nm_Prov_1': '', 'Keterangan': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_LuasBaku_4.set('fieldImages', {'OBJECTID': '', 'FID_Attrib': '', 'Id': '', 'FID_pusat1': '', 'Nm_Inf': '', 'Luas_Ha': '', 'Thn_Dat': '', 'Nama_WS': '', 'Nama_DAS': '', 'Irigasi': '', 'Jenis_DI': '', 'Bgn_UTM': '', 'Nm_Bgn_Utm': '', 'Smb_Air': '', 'Kewenangan': '', 'L_Renc': '', 'Luas_Pot': '', 'Luas_Fung': '', 'P_Sal_Ind': '', 'Ko_Sal_Ind': '', 'P_Sal_Sek': '', 'Ko_Sal_Sek': '', 'Pjn_Sal_Te': '', 'Kon_Sal_Te': '', 'P_Sal_Pem': '', 'Ko_Sal_Pe': '', 'P_Sal_Sup': '', 'Ko_Sal_Sup': '', 'Jml_Kl_Ps': '', 'Kon_Kl_Ps': '', 'Jml_Bg_Bag': '', 'Kon_Bg_Bag': '', 'Jml_Bg_B_S': '', 'Kon_Bg_B_S': '', 'Jml_Bg_Sad': '', 'Kon_Bg_Sad': '', 'Jml_Bg_Pen': '', 'Kon_Bg_Pen': '', 'Jml_Sip': '', 'Kon_Sip': '', 'Jml_Tlg': '', 'Kon_Tlg': '', 'Jml_Jmb': '', 'Kon_Jmb': '', 'Jml_plk': '', 'Kon_plk': '', 'Jml_P3A': '', 'Jml_A_GP3A': '', 'Jml_A_P3A': '', 'Koord_X': '', 'Koord_Y': '', 'Shape_Leng': '', 'Nm_Prov': '', 'Nm_Kab': '', 'Kewenang_1': '', 'Nm_Inf_1': '', 'Nm_Prov_1': '', 'Keterangan': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_JalanInspeksi_5.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'panjang': 'TextEdit', 'jenis': 'TextEdit', 'kon_sal': 'TextEdit', 'kon_jal': 'TextEdit', 'stas_awal': 'TextEdit', 'stas_akhir': 'TextEdit', 'foto': 'TextEdit', });
lyr_Saluran_6.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'panjang': 'TextEdit', 'jenis': 'TextEdit', 'kon_sal': 'TextEdit', 'kon_jal': 'TextEdit', 'stas_awal': 'TextEdit', 'stas_akhir': 'TextEdit', 'foto': 'TextEdit', });
lyr_Bangunan_7.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'jenis': 'TextEdit', 'kon_bang': 'TextEdit', 'foto': 'TextEdit', });
lyr_PetakTersier_8.set('fieldImages', {'nomenklatu': 'TextEdit', 'luas': 'TextEdit', });
lyr_Saluran_9.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'panjang': 'TextEdit', 'jenis': 'TextEdit', });
lyr_Bangunan_10.set('fieldImages', {'nama': 'TextEdit', 'nomenklatu': 'TextEdit', 'id_di': 'TextEdit', 'norec': 'TextEdit', 'k_aset': 'TextEdit', 'jenis': 'TextEdit', 'kon_bang': 'TextEdit', 'foto': 'TextEdit', });
lyr_LuasFungsional_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'FID_Attrib': 'hidden field', 'Id': 'hidden field', 'FID_pusat1': 'hidden field', 'Nm_Inf': 'hidden field', 'Luas_Ha': 'inline label - visible with data', 'Thn_Dat': 'hidden field', 'Nama_WS': 'hidden field', 'Nama_DAS': 'hidden field', 'Irigasi': 'hidden field', 'Jenis_DI': 'hidden field', 'Bgn_UTM': 'hidden field', 'Nm_Bgn_Utm': 'hidden field', 'Smb_Air': 'hidden field', 'Kewenangan': 'hidden field', 'L_Renc': 'hidden field', 'Luas_Pot': 'hidden field', 'Luas_Fung': 'hidden field', 'P_Sal_Ind': 'hidden field', 'Ko_Sal_Ind': 'hidden field', 'P_Sal_Sek': 'hidden field', 'Ko_Sal_Sek': 'hidden field', 'Pjn_Sal_Te': 'hidden field', 'Kon_Sal_Te': 'hidden field', 'P_Sal_Pem': 'hidden field', 'Ko_Sal_Pe': 'hidden field', 'P_Sal_Sup': 'hidden field', 'Ko_Sal_Sup': 'hidden field', 'Jml_Kl_Ps': 'hidden field', 'Kon_Kl_Ps': 'hidden field', 'Jml_Bg_Bag': 'hidden field', 'Kon_Bg_Bag': 'hidden field', 'Jml_Bg_B_S': 'hidden field', 'Kon_Bg_B_S': 'hidden field', 'Jml_Bg_Sad': 'hidden field', 'Kon_Bg_Sad': 'hidden field', 'Jml_Bg_Pen': 'hidden field', 'Kon_Bg_Pen': 'hidden field', 'Jml_Sip': 'hidden field', 'Kon_Sip': 'hidden field', 'Jml_Tlg': 'hidden field', 'Kon_Tlg': 'hidden field', 'Jml_Jmb': 'hidden field', 'Kon_Jmb': 'hidden field', 'Jml_plk': 'hidden field', 'Kon_plk': 'hidden field', 'Jml_P3A': 'hidden field', 'Jml_A_GP3A': 'hidden field', 'Jml_A_P3A': 'hidden field', 'Koord_X': 'hidden field', 'Koord_Y': 'hidden field', 'Shape_Leng': 'hidden field', 'Nm_Prov': 'hidden field', 'Nm_Kab': 'hidden field', 'Kewenang_1': 'hidden field', 'Nm_Inf_1': 'hidden field', 'Nm_Prov_1': 'hidden field', 'Keterangan': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_LuasBaku_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'FID_Attrib': 'hidden field', 'Id': 'hidden field', 'FID_pusat1': 'hidden field', 'Nm_Inf': 'hidden field', 'Luas_Ha': 'inline label - visible with data', 'Thn_Dat': 'hidden field', 'Nama_WS': 'hidden field', 'Nama_DAS': 'hidden field', 'Irigasi': 'hidden field', 'Jenis_DI': 'hidden field', 'Bgn_UTM': 'hidden field', 'Nm_Bgn_Utm': 'hidden field', 'Smb_Air': 'hidden field', 'Kewenangan': 'hidden field', 'L_Renc': 'hidden field', 'Luas_Pot': 'hidden field', 'Luas_Fung': 'hidden field', 'P_Sal_Ind': 'hidden field', 'Ko_Sal_Ind': 'hidden field', 'P_Sal_Sek': 'hidden field', 'Ko_Sal_Sek': 'hidden field', 'Pjn_Sal_Te': 'hidden field', 'Kon_Sal_Te': 'hidden field', 'P_Sal_Pem': 'hidden field', 'Ko_Sal_Pe': 'hidden field', 'P_Sal_Sup': 'hidden field', 'Ko_Sal_Sup': 'hidden field', 'Jml_Kl_Ps': 'hidden field', 'Kon_Kl_Ps': 'hidden field', 'Jml_Bg_Bag': 'hidden field', 'Kon_Bg_Bag': 'hidden field', 'Jml_Bg_B_S': 'hidden field', 'Kon_Bg_B_S': 'hidden field', 'Jml_Bg_Sad': 'hidden field', 'Kon_Bg_Sad': 'hidden field', 'Jml_Bg_Pen': 'hidden field', 'Kon_Bg_Pen': 'hidden field', 'Jml_Sip': 'hidden field', 'Kon_Sip': 'hidden field', 'Jml_Tlg': 'hidden field', 'Kon_Tlg': 'hidden field', 'Jml_Jmb': 'hidden field', 'Kon_Jmb': 'hidden field', 'Jml_plk': 'hidden field', 'Kon_plk': 'hidden field', 'Jml_P3A': 'hidden field', 'Jml_A_GP3A': 'hidden field', 'Jml_A_P3A': 'hidden field', 'Koord_X': 'hidden field', 'Koord_Y': 'hidden field', 'Shape_Leng': 'hidden field', 'Nm_Prov': 'hidden field', 'Nm_Kab': 'hidden field', 'Kewenang_1': 'hidden field', 'Nm_Inf_1': 'hidden field', 'Nm_Prov_1': 'hidden field', 'Keterangan': 'hidden field', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_JalanInspeksi_5.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'hidden field', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'panjang': 'inline label - visible with data', 'jenis': 'inline label - visible with data', 'kon_sal': 'hidden field', 'kon_jal': 'inline label - visible with data', 'stas_awal': 'inline label - visible with data', 'stas_akhir': 'inline label - visible with data', 'foto': 'inline label - visible with data', });
lyr_Saluran_6.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'hidden field', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'panjang': 'inline label - visible with data', 'jenis': 'inline label - visible with data', 'kon_sal': 'inline label - visible with data', 'kon_jal': 'hidden field', 'stas_awal': 'inline label - visible with data', 'stas_akhir': 'inline label - visible with data', 'foto': 'inline label - visible with data', });
lyr_Bangunan_7.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'inline label - visible with data', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'jenis': 'inline label - visible with data', 'kon_bang': 'inline label - visible with data', 'foto': 'inline label - visible with data', });
lyr_PetakTersier_8.set('fieldLabels', {'nomenklatu': 'hidden field', 'luas': 'inline label - visible with data', });
lyr_Saluran_9.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'hidden field', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'panjang': 'inline label - visible with data', 'jenis': 'inline label - visible with data', });
lyr_Bangunan_10.set('fieldLabels', {'nama': 'hidden field', 'nomenklatu': 'inline label - visible with data', 'id_di': 'hidden field', 'norec': 'hidden field', 'k_aset': 'hidden field', 'jenis': 'inline label - visible with data', 'kon_bang': 'inline label - visible with data', 'foto': 'inline label - visible with data', });
lyr_Bangunan_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});