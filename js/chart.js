function renderChart() {
  const ctx = document.getElementById("bpChart").getContext("2d");

  const sliced = historyData.slice(-6);

  new Chart(ctx, {
    type: "line",
    data: {
      labels: sliced.map(h => `${h.month} ${h.year}`),
      datasets: [
        {
          label: "Systolic",
          data: sliced.map(h => h.blood_pressure.systolic.value),
          borderColor: "#FF6B8A",
          backgroundColor: "rgba(255,107,138,0.25)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
        },
        {
          label: "Diastolic",
          data: sliced.map(h => h.blood_pressure.diastolic.value),
          borderColor: "#7B6CF6",
          backgroundColor: "rgba(123,108,246,0.25)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            font: { size: 12 },
          },
        },
      },
    },
  });
}
