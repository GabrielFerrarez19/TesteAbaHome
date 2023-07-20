/*script barra de tarefas*/
const toggleButton = document.getElementById('checkbox');

const corpo2 = document.getElementById('corpo2');
let iscorpo2Visible = false;

const taskbar = document.getElementById('taskbar');
let isTaskbarVisible = false;

var aparecer = document.getElementById("selectWrapper");


var teste = 1;


toggleButton.addEventListener("click", function() {
  if (corpo2.classList.contains("animation2-in")) {
    corpo2.classList.remove("animation2-in");
    corpo2.classList.add("animation2-out");
    setTimeout(function() {
    corpo2.style.display = 'none';
    iscorpo2Visible = false; }, 1000);
  } else {

    corpo2.style.display = "block";
    corpo2.classList.remove("animation2-out");
    corpo2.classList.add("animation2-in");
    iscorpo2Visible = true;
  }
});

toggleButton.addEventListener("click", function() {
  if (taskbar.classList.contains("animation-in")) {
    taskbar.classList.remove("animation-in");
    taskbar.classList.add("animation-out");
  } else {

    taskbar.style.display = "block";
    taskbar.classList.remove("animation-out");
    taskbar.classList.add("animation-in");
  }
});


   


/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  layout: root.verticalLayout
}));

var colors = chart.get("colors");


if(aparecer=="vendas"){
var data = [
{
  country: "Janeiro",
  visits: 70
}, {
  country: "Fevereiro",
  visits: 625
}, {
  country: "Março",
  visits: 602
}, {
  country: "Abril",
  visits: 509
}, {
  country: "Maio",
  visits: 322
}, {
  country: "Junho",
  visits: 214
}, {
  country: "Julho",
  visits: 204
}, {
  country: "Agosto",
  visits: 198
}, {
  country: "Setembro",
  visits: 165
}, {
  country: "Outubro",
  visits: 93
}, {
  country: "Novembro",
  visits: 41
},{
    country: "Dezembro",
    visits: 60
  }];
}
else if (aparecer=="clientes"){
    alert("awad")
    var data = [{
        country: "Janeiro",
        visits: 110
      }, {
        country: "Fevereiro",
        visits: 200
      }, {
        country: "Março",
        visits: 150
      }, {
        country: "Abril",
        visits: 280
      }, {
        country: "Maio",
        visits: 220
      }, {
        country: "Junho",
        visits: 214
      }, {
        country: "Julho",
        visits: 204
      }, {
        country: "Agosto",
        visits: 198
      }, {
        country: "Setembro",
        visits: 165
      }, {
        country: "Outubro",
        visits: 300
      }, {
        country: "Novembro",
        visits: 170
      },{
          country: "Dezembro",
          visits: 310
        }];
}
else {
    var data = [{
        country: "Janeiro",
        visits: 120
      }, {
        country: "Fevereiro",
        visits: 155
      }, {
        country: "Março",
        visits: 200
      }, {
        country: "Abril",
        visits: 509
      }, {
        country: "Maio",
        visits: 322
      }, {
        country: "Junho",
        visits: 214
      }, {
        country: "Julho",
        visits: 204
      }, {
        country: "Agosto",
        visits: 198
      }, {
        country: "Setembro",
        visits: 165
      }, {
        country: "Outubro",
        visits: 93
      }, {
        country: "Novembro",
        visits: 41
      },{
          country: "Dezembro",
          visits: 60
        }];
}
prepareParetoData();

function prepareParetoData() {
  var total = 0;

  for (var i = 0; i < data.length; i++) {
    var value = data[i].visits;
    total += value;
  }

  var sum = 0;
  for (var i = 0; i < data.length; i++) {
    var value = data[i].visits;
    sum += value;
    data[i].pareto = sum / total * 100;
  }
}



// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var xRenderer = am5xy.AxisRendererX.new(root, {
  minGridDistance: 30
})

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "country",
  renderer: xRenderer
}));

xRenderer.grid.template.setAll({
  location: 1
})

xRenderer.labels.template.setAll({
  paddingTop: 20
});

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: am5xy.AxisRendererY.new(root, {
    strokeOpacity: 0.1
  })
}));

var paretoAxisRenderer = am5xy.AxisRendererY.new(root, { opposite: true });
var paretoAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  renderer: paretoAxisRenderer,
  min: 0,
  max: 100,
  strictMinMax: true
}));

paretoAxisRenderer.grid.template.set("forceHidden", true);
paretoAxis.set("numberFormat", "#'%");


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "visits",
  categoryXField: "country"
}));

series.columns.template.setAll({
  tooltipText: "{categoryX}: {valueY}",
  tooltipY: 0,
  strokeOpacity: 0,
  cornerRadiusTL: 6,
  cornerRadiusTR: 6
});

series.columns.template.adapters.add("fill", function(fill, target) {
  return chart.get("colors").getIndex(series.dataItems.indexOf(target.dataItem));
})


// pareto series
var paretoSeries = chart.series.push(am5xy.LineSeries.new(root, {
  xAxis: xAxis,
  yAxis: paretoAxis,
  valueYField: "pareto",
  categoryXField: "country",
  stroke: root.interfaceColors.get("alternativeBackground"),
  maskBullets: false
}));

paretoSeries.bullets.push(function() {
  return am5.Bullet.new(root, {
    locationY: 1,
    sprite: am5.Circle.new(root, {
      radius: 5,
      fill: series.get("fill"),
      stroke: root.interfaceColors.get("alternativeBackground")
    })
  })
})

series.data.setAll(data);
paretoSeries.data.setAll(data);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear();
chart.appear(1000, 100);