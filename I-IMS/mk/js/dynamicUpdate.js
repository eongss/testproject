Highcharts.chart('dynamicUpdate', {
  chart: {
      type: 'line',
      marginRight: 10,
      events: {
          load: function () {

              // set up the updating of the chart each second
              var series = this.series[0];
              var series1 = this.series[1];
              var series2 = this.series[2];
              setInterval(function () {
                  var x = (new Date()).getTime(), // current time
                      y = Math.random();
                      y2 = Math.random();
                      y3 = Math.random();
                  series.addPoint([x, y], true, true);
                  series1.addPoint([x, y2], true, true);
                  series2.addPoint([x, y3], true, true);
              }, 30000);
          }
      }
  },

  time: {
      useUTC: false
  },

  title: null,

  accessibility: {
      announceNewData: {
          enabled: true,
          minAnnounceInterval: 15000,
          announcementFormatter: function (allSeries, newSeries, newPoint) {
              if (newPoint) {
                  return 'New point added. Value: ' + newPoint.y;
              }
              return false;
          }
      }
  },

  xAxis: {
      type: 'datetime',
      tickPixelInterval: 120
  },

  yAxis: {
      title: {
          text: '전력량'
      },
      plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
      }]
  },

  tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },

  legend: {
      enabled: false
  },

  exporting: {
      enabled: false
  },

  series: [{
      name: '생산량',
      color: '#0000FF',
      data: (function () {
          // generate an array of random data
          var data = [],
              time = (new Date()).getTime(),
              i;

          for (i = -19; i <= 0; i += 1) {
              data.push({
                  x: time + i * 30000,
                  y: 0
              });
          }
          return data;
      }())
  },{
    name: '판매량',
    color: '#00FF7F',
    data: (function () {
        // generate an array of random data
        var data = [],
            time = (new Date()).getTime(),
            i;

        for (i = -19; i <= 0; i += 1) {
            data.push({
                x: time + i * 30000,
                y: 0
            });
        }
        return data;
    }())
},{
  name: '발전량',
  color: '#FF0000',
  data: (function () {
      // generate an array of random data
      var data = [],
          time = (new Date()).getTime(),
          i;

      for (i = -19; i <= 0; i += 1) {
          data.push({
              x: time + i * 30000,
              y: 0
          });
      }
      return data;
  }())
}]
});