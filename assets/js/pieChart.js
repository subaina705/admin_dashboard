document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('#pie-chart');
  if (!target || typeof ApexCharts === 'undefined') return;

  var options = {
    chart: { type: 'donut', height: 200, toolbar: { show: false }, fontFamily: 'Poppins, sans-serif' },
    series: [40, 32, 28],
    labels: ['Afternoon', 'Evening', 'Morning'],
    colors: ['#5A6ACF', '#8593ED', '#C7CEFF'],
    stroke: { width: 0 },
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: { size: '70%' }
      }
    },
    tooltip: {
      custom: function ({ seriesIndex, w }) {
        var label = w.globals.labels[seriesIndex];
        var percent = w.globals.series[seriesIndex];
        var timeRanges = { 'Afternoon': '1pm - 4pm', 'Evening': '6pm - 10pm', 'Morning': '7am - 11am' };
        var ordersMap = { 'Afternoon': 1890, 'Evening': 1510, 'Morning': 1280 };
        var format = new Intl.NumberFormat('de-DE');
        var orders = format.format(ordersMap[label] || 0);
        return (
          '<div style="background:#37375C;color:#fff;padding:12px 14px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,.2);font-family:inherit">'
          + '<div style="opacity:.9;font-size:12px;margin-bottom:2px">' + label + '</div>'
          + '<div style="opacity:.7;font-size:12px;margin-bottom:8px">' + (timeRanges[label] || '') + '</div>'
          + '<div style="font-weight:600;font-size:16px">' + orders + ' orders</div>'
          + '</div>'
        );
      }
    }
  };

  var chart = new ApexCharts(target, options);
  chart.render().then(function () {
    var labels = options.labels;
    var series = options.series;
    var colors = options.colors;

    var legendWrap = document.createElement('div');
    legendWrap.style.marginTop = '8px';
    legendWrap.style.display = 'flex';
    legendWrap.style.columnGap = '24px';
    legendWrap.style.alignItems = 'flex-start';
    legendWrap.style.flexWrap = 'nowrap';
    legendWrap.style.width = '100%';
    legendWrap.style.justifyContent = 'space-between';

    for (var i = 0; i < labels.length; i++) {
      var item = document.createElement('div');
      item.style.display = 'block';

      var topRow = document.createElement('div');
      topRow.style.display = 'flex';
      topRow.style.alignItems = 'center';
      topRow.style.columnGap = '8px';

      var dot = document.createElement('span');
      dot.style.display = 'inline-block';
      dot.style.width = '10px';
      dot.style.height = '10px';
      dot.style.borderRadius = '50%';
      dot.style.background = colors[i];

      var label = document.createElement('span');
      label.style.fontSize = '12px';
      label.style.letterSpacing = '0.5px';
      label.style.fontWeight = '400';
      label.style.color = 'rgba(18,18,18,0.7)';
      label.style.fontFamily = 'Poppins, sans-serif';
      label.textContent = labels[i];

      var percent = document.createElement('div');
      percent.style.marginLeft = '18px';
      percent.style.fontSize = '12px';
      percent.style.letterSpacing = '0.5px';
      percent.style.fontWeight = '400';
      percent.style.color = 'rgba(18,18,18,0.7)';
      percent.style.fontFamily = 'Poppins, sans-serif';
      percent.textContent = series[i] + '%';

      topRow.appendChild(dot);
      topRow.appendChild(label);
      item.appendChild(topRow);
      item.appendChild(percent);
      legendWrap.appendChild(item);
    }

    target.parentNode.insertBefore(legendWrap, target.nextSibling);
  });
});


