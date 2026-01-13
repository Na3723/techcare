let chart;

function renderChart() {
  const ctx = document.getElementById("bpChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: historyData.map(h => `${h.month} ${h.year}`),
      datasets: [
        {
          label: "Systolic",
          data: historyData.map(h => h.blood_pressure.systolic.value),
          borderColor: "#FF6B8A",
          fill: true,
          tension: 0.45
        },
        {
          label: "Diastolic",
          data: historyData.map(h => h.blood_pressure.diastolic.value),
          borderColor: "#7B6CF6",
          fill: true,
          tension: 0.45
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { position: "right" } }
    }
  });
}
