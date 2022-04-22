Highcharts.chart('basicLine', {

    title: null,
  
  
    yAxis: {
      title: {
        text: '전력량'
      }
    },
  
    xAxis: {
        title: {
            text: '시간'
          },

          categories: [,'01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','24:00'],
    },
  
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
  
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 1
      }
    },
  
    series: [
        {name: '생산량',data: [100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1500,1600,1700,1800,1900,2000,2100,2200,2300,2400]}
        ,{name: '발전량',data: [110,220,330,440,550,1660,1770,8180,990,1100,11120,1230,11340,1450,1560,1670,1780,1890,1910,2200,2300,2240,2350,2460]}
        ,{name: '판매량',data: [210,320,430,540,650,760,870,980,2290,2100,2120,2230,2340,2450,4560,5670,6780,7890,8910,3200,4300,5240,6350,7460]}
    ],
  
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  
  });