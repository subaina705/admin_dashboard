document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('#line-chart');
  if (!target || typeof ApexCharts === 'undefined') return;

  var options = {
    chart: { type: 'line', height: 200, toolbar: { show: false }, fontFamily: 'Poppins, sans-serif' },
    series: [
      { name: 'Visitors', data: [12, 25, 14, 36, 20, 45, 30] }
    ],
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: { style: { colors: 'rgba(0,0,0,0.5)', fontSize: '12px', fontWeight: 500 } },
      axisBorder: { color: 'rgba(0,0,0,0.5)' },
      axisTicks: { color: 'rgba(0,0,0,0.5)' }
    },
    stroke: { curve: 'straight', width: 3 },
    markers: { size: 4 },
    dataLabels: { enabled: false },
    colors: ['#5A6ACF'],
    yaxis: {
      show: false,
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    }
  };

  var chart = new ApexCharts(target, options);
  chart.render();
});


