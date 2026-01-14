function renderChart() {
  const ctx = document.getElementById("bpChart").getContext("2d");

  const sliced = historyData.slice(-6);

  const labels = sliced.map(h => `${h.month} ${h.year}`);
  const systolic = sliced.map(h => h.blood_pressure.systolic.value);
  const diastolic = sliced.map(h => h.blood_pressure.diastolic.value);

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Systolic",
          data: systolic,
          borderColor: "#FF6B8A",
          backgroundColor: "rgba(255,107,138,0.25)",
          tension: 0.4,
          pointRadius: 4,
          fill: true,
        },
        {
          label: "Diastolic",
          data: diastolic,
          borderColor: "#7B6CF6",
          backgroundColor: "rgba(123,108,246,0.25)",
          tension: 0.4,
          pointRadius: 4,
          fill: true,
        },
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
            boxWidth: 8,
            padding: 16,
            font: {
              size: 12,
              weight: "500",
            },
          },
        },
      },
      scales: {
        y: {
          grid: { color: "#eee" },
        },
      },
    },
  });
}
