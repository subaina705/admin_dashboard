document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('#bar-chart');
  if (!target || typeof ApexCharts === 'undefined') return;

  var options = {
    chart: { type: 'bar', height: 280, toolbar: { show: false }, fontFamily: 'Poppins, sans-serif' },
    series: [
      { name: 'Dine-in', data: [31, 40, 28, 51, 42, 109, 100] },
      { name: 'Delivery', data: [23, 35, 18, 39, 55, 80, 95] }
    ],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: { style: { colors: 'rgba(0,0,0,0.5)', fontSize: '12px', fontWeight: 500 } },
      axisBorder: { color: 'rgba(0,0,0,0.5)' },
      axisTicks: { color: 'rgba(0,0,0,0.5)' }
    },
    yaxis: {
      show: false,
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    plotOptions: { bar: { columnWidth: '50%', borderRadius: 0 } },
    stroke: { width: 3, colors: ['#ffffff'] },
    dataLabels: { enabled: false },
    colors: ['#5A6ACF', '#C7CEFF'],
    legend: {
      position: 'bottom',
      horizontalAlign: 'left',
      fontSize: '12px',
      labels: { colors: 'rgba(18,18,18,0.7)' },
      markers: { shape: 'circle', radius: 12, width: 10, height: 10 },
      itemMargin: { horizontal: 16, vertical: 6 }
    }
  };

  var chart = new ApexCharts(target, options);
  chart.render().then(function () {
    try {
      var legendRoot = target.querySelector('.apexcharts-legend');
      if (legendRoot) {
        legendRoot.style.letterSpacing = '0.5px';
        legendRoot.style.fontFamily = 'Poppins, sans-serif';
        var texts = legendRoot.querySelectorAll('.apexcharts-legend-text');
        for (var i = 0; i < texts.length; i++) {
          texts[i].style.fontSize = '12px';
          texts[i].style.fontWeight = '400';
          texts[i].style.color = 'rgba(18,18,18,0.7)';
          texts[i].style.fontFamily = 'Poppins, sans-serif';
        }
      }
    } catch (e) {}
  });
});


