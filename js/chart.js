let chart;

function renderChart() {
  const ctx = document.getElementById("bpChart").getContext("2d");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: window.historyData.map(h => h.month),
      datasets: [
        {
          label: "Systolic",
          data: window.historyData.map(h => h.blood_pressure.systolic.value),
          borderColor: "#FF6B8A",
          tension: 0.4,
          fill: true
        },
        {
          label: "Diastolic",
          data: window.historyData.map(h => h.blood_pressure.diastolic.value),
          borderColor: "#7B6CF6",
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "right" }
      }
    }
  });
}

