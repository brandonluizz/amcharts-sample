export default {
    "type": "serial",
    "theme": "dark",
    "legend": {
        "useGraphSettings": true
    },
    "dataProvider": [{
        "date": 1930,
        "autorizada": 1,
        "cancelada": 5,
        "desfeita": 3
    }, {
        "date": 1934,
        "autorizada": 1,
        "cancelada": 2,
        "desfeita": 6
    }, {
        "date": 1938,
        "autorizada": 2,
        "cancelada": 3,
        "desfeita": 1
    }, {
        "date": 1950,
        "autorizada": 3,
        "cancelada": 4,
        "desfeita": 1
    }, {
        "date": 1954,
        "autorizada": 5,
        "cancelada": 1,
        "desfeita": 2
    }, {
        "date": 1958,
        "autorizada": 3,
        "cancelada": 2,
        "desfeita": 1
    }, {
        "date": 1962,
        "autorizada": 1,
        "cancelada": 2,
        "desfeita": 3
    }, {
        "date": 1966,
        "autorizada": 2,
        "cancelada": 1,
        "desfeita": 5
    }, {
        "date": 1970,
        "autorizada": 3,
        "cancelada": 5,
        "desfeita": 2
    }, {
        "date": 1974,
        "autorizada": 4,
        "cancelada": 3,
        "desfeita": 6
    }, {
        "date": 1978,
        "autorizada": 1,
        "cancelada": 2,
        "desfeita": 4
    }],
    "valueAxes": [{
        "integersOnly": true,
        "maximum": 6,
        "minimum": 0,
        //"reversed": true,
        "axisAlpha": 0,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
        "title": "Vendas por Status"
    }],
    valueAxesSettings: {
        unit: "R$",
        unitPosition: "left"
    },
    "startDuration": 0.5,
    "graphs": [{
        "balloonText": "Total Autorizada em [[category]]: [[value]]",
        "bullet": "round",
        "hidden": true,
        "title": "Autorizadas",
        "valueField": "autorizada",
        "fillAlphas": 0
    }, {
        "balloonText": "Total Cancelada em [[category]]: [[value]]",
        "bullet": "round",
        "title": "Canceladas",
        "valueField": "cancelada",
        "fillAlphas": 0
    }, {
        "balloonText": "Total Desfeita em [[category]]: [[value]]",
        "bullet": "round",
        "title": "Desfeitas",
        "valueField": "desfeita",
        "fillAlphas": 0
    }],
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "date",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "fillAlpha": 0.05,
        //"fillColor": "#000000",
        "gridAlpha": 0,
        "position": "bottom"
    },
    "export": {
        "enabled": true,
        "position": "bottom-right"
    }
}