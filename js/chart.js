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
          pointRadius: 5,
          pointBackgroundColor: "#FF6B8A",
          fill: true,
        },
        {
          label: "Diastolic",
          data: diastolic,
          borderColor: "#7B6CF6",
          backgroundColor: "rgba(123,108,246,0.25)",
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: "#7B6CF6",
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
            usePointStyle: true,      /* ⬅ DOT LEGEND */
            pointStyle: "circle",
            boxWidth: 8,
            padding: 20,
            font: {
              size: 13,
              weight: "600",          /* ⬅ BOLDER TEXT */
            },
            color: "#1F2937",
          },
        },
      },
      scales: {
        y: {
          grid: { color: "#eee" },
        },
        x: {
          grid: { display: false },
        },
      },
    },
  });
}

