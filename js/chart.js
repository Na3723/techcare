let chart;

function renderChart() {
  const ctx = document.getElementById("bpChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: window.historyData.map(
        h => `${h.month} ${h.year}`
      ),
      datasets: [
        {
          label: "Systolic",
          data: window.historyData.map(
            h => h.blood_pressure.systolic.value
          ),
          borderColor: "#FF6B8A",
          backgroundColor: "rgba(255,107,138,0.25)",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#FF6B8A",
          pointRadius: 5,
          tension: 0.45,
          fill: true,
        },
        {
          label: "Diastolic",
          data: window.historyData.map(
            h => h.blood_pressure.diastolic.value
          ),
          borderColor: "#7B6CF6",
          backgroundColor: "rgba(123,108,246,0.25)",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#7B6CF6",
          pointRadius: 5,
          tension: 0.45,
          fill: true,
        }
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            boxWidth: 10,
            font: { size: 12 },
          },
        },
      },
      scales: {
        y: {
          grid: { color: "#EDEAFB" },
          ticks: { stepSize: 20 },
        },
        x: {
          grid: { display: false },
        },
      },
    },
  });
}

