$(document).ready(function() {
      $('#example0').DataTable({
          // 검색 기능 숨기기
          searching: false,
          // 표시 건수기능 숨기기
          lengthChange: false,
          // 한 페이지에 표시되는 Row 수
          pageLength: 1,
          info: false,
          paging: false,
          ordering: false
        });
        $('#example1').DataTable({
          // 검색 기능 숨기기
          searching: false,
          // 표시 건수기능 숨기기
          lengthChange: false,
          // 한 페이지에 표시되는 Row 수
          pageLength: 3,
          info: false
        });
        $('#example2').DataTable({
          // 검색 기능 숨기기
          searching: false,
          // 표시 건수기능 숨기기
          lengthChange: false,
          // 한 페이지에 표시되는 Row 수
          pageLength: 3,
          info: false
        });
        $('#example3').DataTable({
          // 검색 기능 숨기기
          searching: false,
          // 표시 건수기능 숨기기
          lengthChange: false,
          // 한 페이지에 표시되는 Row 수
          pageLength: 3,
          info: false
        });
    } );
    
    
const newData = [
    ['kr-kn', 35.25, 128.11, '1번 발전소', 1]
    ,['kr-kn', 35.25, 128.22, '2번 발전소', 1]
    ,['kr-kn', 35.25, 128.33, '3번 발전소', 3]
    ,['kr-kg', 37.51, 127.31, '4번 발전소', 1]
    //,['kr-cb', 37.01, 128.12, '3번 발전소']
    //['kr-4194', 1], ['kr-kg', 1], ['kr-cb', 1], ['kr-kn', 1],
    //['kr-2685', 14], ['kr-pu', 15], ['kr-2688', 30], ['kr-sj', 1],
    //['kr-tj', 18], ['kr-ul', 19], ['kr-in', 30], ['kr-kw', 1],
    //['kr-gn', 22], ['kr-cj', 23], ['kr-gb', 30], ['kr-so', 1],
    //['kr-tg', 26], ['kr-kj', 27]

];

function getTemp(point, countries, capitals) {
    
  const temp = point[4];
    const colorAxis = countries.chart.colorAxis[0];

    const country = {
        'hc-key': point[0],
        value: parseInt(temp, 10) || null
    };

    if(temp == 1){
      const capital1 = {
        name: point[3],
        lat: point[1],
        lon: point[2],
        color: '#00CED1',
        temp: parseInt(temp, 10) || '정상'
    };
    capitals.addPoint(capital1);
    countries.addPoint(country);
    }else{
      const capital2 = {
        name: point[3],
        lat: point[1],
        lon: point[2],
        color: '#E5DD45',
        temp: parseInt(temp, 10)
    };
    capitals.addPoint(capital2);
    countries.addPoint(country);
    }

    
    
}



// Create the chart
Highcharts.mapChart('Mapcontainer', {
chart: {
    map: 'countries/kr/kr-all',
    animation: false,
    events: {
        load: function () {
            var countries = this.series[0];
            var capitals = this.series[1];

            
            newData.forEach(function (elem) {
                getTemp(elem, countries, capitals);
            });
        }
    },
    
},

title: null,

mapNavigation: {
    enabled: true,
    
    buttonOptions: {
        verticalAlign: 'bottom'
    }
},

tooltip: {
    headerFormat: '<span style="color:{point.color}">\u25CF</span> {point.key}: ',
    pointFormatter: function () {
        var value = Number.isInteger(this.temp) ? this.temp + '단계' : 'No data';
        var valuenm = "";
        if(value=="1단계"){
            valuenm = "정상"
        }else{
            valuenm = "위험"
        }

        return '<b>' + valuenm + '</b>';
    }
},

colorAxis: {
    min: 1,
    max: 3,
    labels: {
        format: '{value}단계'
    },
    stops: [
        [0, '#4E85F2'],
        [1, '#EF355E']
    ]
},


plotOptions: {
    mappoint: {
        cluster: {
            enabled: true,
            allowOverlap: false,
            animation: {
            duration: 100
            },
            zones: [
            { from: 1, to: 4, marker: {radius: 13}}
            ,{from: 5, to: 9, marker: {radius: 15}}
            ,{from: 10, to: 15, marker: { radius: 17}}
            ,{from: 16, to: 20, marker: { radius: 19}}
            ,{from: 21, to: 100, marker: { radius: 21}}
            ]
        }
    }
},

series: [{
    name: '발전소',
    borderColor: '#000000',
    nullColor: '#CECCCC',
    states: {
        hover: {
            color: '#BADA55'
        }
    },
    dataLabels: {
        enabled: false
    },
    enableMouseTracking: false
}, {
    name: '발전소',
    type: 'mappoint',
    showInLegend: false,
    marker: {
        lineWidth: 1,
        lineColor: '#000'
    },
    dataLabels: {
        crop: true,
        formatter: function () {
            var value = Number.isInteger(this.point.temp) ? this.point.temp + '단계' : 'No data';
            var valuenm = "";
            if(value=="1단계"){
                valuenm = " : 정상"
            }else{
                valuenm = " : 위험"
            }
            return '<span>' + this.key + '</span>';
        }
    }
}]
});