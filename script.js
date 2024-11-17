// Fetch Data and Render Charts
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const dates = data.forecasted_sales.map((item) => item.date);
    const sales = data.forecasted_sales.map((item) => item.sales);

    // Line Chart
    const ctxLine = document.getElementById("lineChart").getContext("2d");
    new Chart(ctxLine, {
      type: "line",
      data: {
        labels: dates,
        datasets: [{
          label: "Sales Forecast",
          data: sales,
          borderColor: "teal",
          backgroundColor: "rgba(0, 128, 128, 0.2)",
          fill: true,
          tension: 0.4,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      },
    });

    // Donut Chart
    const ctxDonut = document.getElementById("donutChart").getContext("2d");
    new Chart(ctxDonut, {
      type: "doughnut",
      data: {
        labels: ["Sales"],
        datasets: [{
          label: "Total Sales",
          data: [sales.reduce((a, b) => a + b, 0), 1500 - sales.reduce((a, b) => a + b, 0)],
          backgroundColor: ["teal", "#ddd"],
        }],
      },
    });
  });
