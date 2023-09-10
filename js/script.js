//1
var accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(function (item) {
  var header = item.querySelector(".accordion-header");
  var content = item.querySelector(".accordion-content");
  var arrow = item.querySelector(".accordion-arrow");

  header.addEventListener("click", function () {
    item.classList.toggle("active");
    content.style.display = item.classList.contains("active")
      ? "block"
      : "none";
    arrow.style.transform = item.classList.contains("active")
      ? "rotate(-135deg)"
      : "rotate(45deg)";
  });
});
//4 задание
let name = document.getElementById("name");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
document.getElementById("order-action").onclick = function () {
  let hasError = false;
  [name, phone, email].forEach((item) => {
    if (!item.value) {
      hasError = true;
    }
  });

  if (!hasError) {
    [name, phone, email].forEach((item) => {
      item.value = "";
    });
    alert("Спасибо за заявку! Мы скоро свяжемся с Вами!");
  } else {
    alert("Чтобы оставить заявку необходимо заполнить все поля!");
  }
};
//5
//страны
const labels = ["Россия", "Казахстан", "Узбекистан"];
const doughnutLabel = {
  id: "doughnutLabel",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    const xCoord = chart.getDatasetMeta(0).data[0].x;
    const yCoord = chart.getDatasetMeta(0).data[0].y;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "Bold 38px Mail Sans Roman, sans-serif";
    ctx.fillStyle = "#262424";

    var total = 0;
    for (var i = 0; i < data.datasets[0].data.length; i++) {
      total = total + data.datasets[0].data[i];
    }
    ctx.fillText(`${total}`, xCoord, yCoord);
  },
};
const data = {
  labels: labels,
  datasets: [
    {
      data: [145, 140, 50],
      backgroundColor: ["#E83D46", "#F9A620", "#262424"],
    },
  ],
};

Chart.defaults.set("plugins.datalabels", {
  color: "#fff",
  backgroundColor: "rgba(255,255,255,.2)",
  borderRadius: 4,
});

var ctx = document.getElementById("countries_chart").getContext("2d");
var myChart = new Chart(ctx, {
  plugins: [doughnutLabel],
  type: "doughnut",
  data: data,
  options: {
    cutout: "75%",
    rotation: 85 * Math.PI,
    animation: {
      animateScale: true,
    },
    plugins: {
      title: {
        display: true,
        font: {
          family: "Mail Sans Roman, sans-serif",
          size: 38,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: "circle",
        },
      },
      datalabels: {
        display: function (context) {
          return context.dataset.data[context.dataIndex] >= 1;
        },
      },
    },
    responsive: true,
  },
});
//города
const label = ["Нур-Султан", "Алма-Аты", "Тюмень", "Ташкент", "Петербург"];
const donutLabel = {
  id: "doughnutLabel",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    const xCoord = chart.getDatasetMeta(0).data[0].x;
    const yCoord = chart.getDatasetMeta(0).data[0].y;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "Bold 38px Mail Sans Roman, sans-serif";
    ctx.fillStyle = "#262424";

    var total = 0;
    for (var i = 0; i < data.datasets[0].data.length; i++) {
      total = total + data.datasets[0].data[i];
    }
    ctx.fillText(`${total}`, xCoord, yCoord);
  },
};
const dataCity = {
  labels: label,
  datasets: [
    {
      data: [150, 220, 100, 100, 495],
      backgroundColor: ["#F9A620", "#808080", "#E83D46", "#262424", "#005FA7"],
    },
  ],
};

Chart.defaults.set("plugins.datalabels", {
  color: "#fff",
  backgroundColor: "rgba(255,255,255,.2)",
  borderRadius: 4,
});

var ctx = document.getElementById("cities_chart").getContext("2d");
var myChart = new Chart(ctx, {
  plugins: [donutLabel],
  type: "doughnut",
  data: dataCity,
  options: {
    cutout: "75%",
    rotation: 30 * Math.PI,
    animation: {
      animateScale: true,
    },
    plugins: {
      title: {
        display: true,
        font: {
          family: "Mail Sans Roman, sans-serif",
          size: 38,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: "circle",
        },
      },
      datalabels: {
        display: function (context) {
          return context.dataset.data[context.dataIndex] >= 1;
        },
      },
    },
    responsive: true,
  },
});
//выручка по странам
const labelRevenue = ["Россия", "Казахстан", "Узбекистан"];
const doughnutLabelRevenue = {
  id: "doughnutLabel",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    const xCoord = chart.getDatasetMeta(0).data[0].x;
    const yCoord = chart.getDatasetMeta(0).data[0].y;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "Bold 38px Mail Sans Roman, sans-serif";
    ctx.fillStyle = "#262424";

    var total = 0;
    for (var i = 0; i < data.datasets[0].data.length; i++) {
      total = total + data.datasets[0].data[i];
    }
    ctx.fillText(`${total}`, xCoord, yCoord);
  },
};
const dataRevenue = {
  labels: labels,
  datasets: [
    {
      data: [60, 50, 20],
      backgroundColor: ["#E83D46", "#F9A620", "#262424"],
    },
  ],
};

Chart.defaults.set("plugins.datalabels", {
  color: "#fff",
  backgroundColor: "rgba(255,255,255,.2)",
  borderRadius: 4,
});

var ctx = document.getElementById("countries_revenue").getContext("2d");
var myChart = new Chart(ctx, {
  plugins: [doughnutLabelRevenue],
  type: "doughnut",
  data: dataRevenue,
  options: {
    cutout: "75%",
    rotation: 85 * Math.PI,
    animation: {
      animateScale: true,
    },
    plugins: {
      title: {
        display: true,
        font: {
          family: "Mail Sans Roman, sans-serif",
          size: 38,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: "circle",
        },
      },
      datalabels: {
        display: function (context) {
          return context.dataset.data[context.dataIndex] >= 1;
        },
      },
    },
    responsive: true,
  },
});
//города выручка
const labelRev = ["Нур-Султан", "Алма-Аты", "Тюмень", "Ташкент", "Петербург"];
const donutLabelRev = {
  id: "doughnutLabel",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;
    ctx.save();
    const xCoord = chart.getDatasetMeta(0).data[0].x;
    const yCoord = chart.getDatasetMeta(0).data[0].y;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "Bold 38px Mail Sans Roman, sans-serif";
    ctx.fillStyle = "#262424";

    var total = 0;
    for (var i = 0; i < data.datasets[0].data.length; i++) {
      total = total + data.datasets[0].data[i];
    }
    ctx.fillText(`${total}`, xCoord, yCoord);
  },
};
const dataRev = {
  labels: labelRev,
  datasets: [
    {
      data: [20, 25, 12, 12, 61],
      backgroundColor: ["#F9A620", "#808080", "#E83D46", "#262424", "#005FA7"],
    },
  ],
};

Chart.defaults.set("plugins.datalabels", {
  color: "#fff",
  backgroundColor: "rgba(255,255,255,.2)",
  borderRadius: 4,
});

var ctx = document.getElementById("cities_revenue").getContext("2d");
var myChart = new Chart(ctx, {
  plugins: [donutLabelRev],
  type: "doughnut",
  data: dataRev,
  options: {
    cutout: "75%",
    rotation: 30 * Math.PI,
    animation: {
      animateScale: true,
    },
    plugins: {
      title: {
        display: true,
        font: {
          family: "Mail Sans Roman, sans-serif",
          size: 38,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: "circle",
        },
      },
      datalabels: {
        display: function (context) {
          return context.dataset.data[context.dataIndex] >= 1;
        },
      },
    },
    responsive: true,
  },
});
