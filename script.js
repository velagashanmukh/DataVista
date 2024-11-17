// Fetch the JSON data and render the chart
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const labels = data.forecasted_sales.map((item) => item.date);
    const sales = data.forecasted_sales.map((item) => item.sales);

    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Forecasted Sales',
            data: sales,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Date',
            },
          },
          y: {
            title: {
              display: true,
              text: 'Sales',
            },
          },
        },
      },
    });
  })
  .catch((error) => console.error('Error fetching data:', error));
