document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('#area-chart');
  if (!target || typeof ApexCharts === 'undefined') return;

  var options = {
    chart: { type: 'area', height: 280, toolbar: { show: false }, fontFamily: 'Poppins, sans-serif' },
    series: [
      { name: 'Orders', data: [10, 41, 35, 51, 49, 62, 69] }
    ],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: { style: { colors: 'rgba(0,0,0,0.5)', fontSize: '12px', fontWeight: 500 } },
      axisBorder: { color: 'rgba(0,0,0,0.5)' },
      axisTicks: { color: 'rgba(0,0,0,0.5)' }
    },
    yaxis: { show: false, labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
    dataLabels: { enabled: false },
    stroke: { curve: 'straight', width: 2 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.05 } },
    colors: ['#5A6ACF'],
    grid: { strokeDashArray: 4 }
  };

  var chart = new ApexCharts(target, options);
  chart.render();
});


