var TITLE = 'Best Series';

// x-axis label and label in tooltip
var X_AXIS = 'Date';

// y-axis label and label in tooltip
var Y_AXIS = 'Votes'; 

// Should y-axis start from 0? `true` or `false`
var BEGIN_AT_ZERO = false;

// `true` to show the grid, `false` to hide
var SHOW_GRID = true;

 // `true` to show the legend, `false` to hide
var SHOW_LEGEND = true;


$(document).ready(function() {

  // Read data file with random string generated by current time
  // to bypass browser cache, and create chart
  $.get('./data.csv', {'_': $.now()}, function(csvString) {

    var data = Papa.parse(csvString).data;
    var timeLabels = data.slice(1).map(function(row) { return row[0]; });

    var datasets = [];
    for (var i = 1; i < data[0].length; i++) {
      datasets.push(
        {
          label: data[0][i], // column name
          data: data.slice(1).map(function(row) {return row[i]}), // data in that column
          fill: false // `true` for area charts, `false` for regular line charts
        }
      )
    }

    // Get container for the chart
    var ctx = document.getElementById('chart-container').getContext('2d');

    new Chart(ctx, {
      type: 'line',

      data: {
        labels: timeLabels,
        datasets: datasets,
      },
      
      options: {
        title: {
          display: true,
          text: TITLE,
          fontSize: 16,
        },
        legend: {
          display: SHOW_LEGEND,
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: X_AXIS !== '',
              labelString: X_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              callback: function(value, index, values) {
                return value.toLocaleString();
              }
            }
          }],
          yAxes: [{
            stacked: false, // `true` for stacked area chart, `false` otherwise
            beginAtZero: true,
            scaleLabel: {
              display: Y_AXIS !== '',
              labelString: Y_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              beginAtZero: BEGIN_AT_ZERO,
              callback: function(value, index, values) {
                return value.toLocaleString()
              }
            }
          }]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: function(tooltipItem, all) {
              return all.datasets[tooltipItem.datasetIndex].label
                + ': ' + tooltipItem.yLabel.toLocaleString();
            }
          }
        },
        plugins: {
          colorschemes: {
            /*
              Replace below with any other scheme from
              https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html
            */
            scheme: 'brewer.DarkTwo5'
          }
        }
      }
    });

  });

   $.get('./data2.csv', {'_': $.now()}, function(csvString) {

    var data2 = Papa.parse(csvString).data;
    var timeLabels2 = data.slice(1).map(function(row) { return row[0]; });

    var datasets2 = [];
    for (var i = 1; i < data[0].length; i++) {
      datasets2.push(
        {
          label: data2[0][i], // column name
          data: data2.slice(1).map(function(row) {return row[i]}), // data in that column
          fill: false // `true` for area charts, `false` for regular line charts
        }
      )
    }

    // Get container for the chart
    var ctx2 = document.getElementById('chart-container2').getContext('2d');

    new Chart(ctx2, {
      type: 'line',

      data: {
        labels: timeLabels2,
        datasets: datasets2,
      },
      
      options: {
        title: {
          display: true,
          text: TITLE,
          fontSize: 16,
        },
        legend: {
          display: SHOW_LEGEND,
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display: X_AXIS !== '',
              labelString: X_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              callback: function(value, index, values) {
                return value.toLocaleString();
              }
            }
          }],
          yAxes: [{
            stacked: false, // `true` for stacked area chart, `false` otherwise
            beginAtZero: true,
            scaleLabel: {
              display: Y_AXIS !== '',
              labelString: Y_AXIS
            },
            gridLines: {
              display: SHOW_GRID,
            },
            ticks: {
              maxTicksLimit: 10,
              beginAtZero: BEGIN_AT_ZERO,
              callback: function(value, index, values) {
                return value.toLocaleString()
              }
            }
          }]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            label: function(tooltipItem, all) {
              return all.datasets[tooltipItem.datasetIndex].label
                + ': ' + tooltipItem.yLabel.toLocaleString();
            }
          }
        },
        plugins: {
          colorschemes: {
            /*
              Replace below with any other scheme from
              https://nagix.github.io/chartjs-plugin-colorschemes/colorchart.html
            */
            scheme: 'brewer.DarkTwo5'
          }
        }
      }
    });

  });

});
