var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Mingalaba - overworld",
        "Mingalaba - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1684838734",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Mingalaba Daytime",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "overworldday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Mingalaba - overworld",
            "last_rendertime": 1684778523,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -304,
                79,
                272
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -304,
                79,
                272
            ],
            "north_direction": 0
        },
        {
            "name": "Mingalaba Nighttime",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "overworldnight",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Mingalaba - overworld",
            "last_rendertime": 1684778523,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -304,
                79,
                272
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": [
                -304,
                79,
                272
            ],
            "north_direction": 0
        },
        {
            "name": "Mingalaba Nether",
            "zoomLevels": 6,
            "defaultZoom": 1,
            "maxZoom": 6,
            "path": "nether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Mingalaba - nether",
            "last_rendertime": 1684775494,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -304,
                79,
                272
            ],
            "lastrenderversion": 2,
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
