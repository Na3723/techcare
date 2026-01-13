setTimeout(() => {
  const labels = window.historyData.map(h => h.month + " " + h.year);
  const systolic = window.historyData.map(h => h.blood_pressure.systolic.value);
  const diastolic = window.historyData.map(h => h.blood_pressure.diastolic.value);

  new Chart(document.getElementById("bpChart"), {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Systolic",
          data: systolic,
          borderColor: "#ff6b9a",
          tension: 0.4
        },
        {
          label: "Diastolic",
          data: diastolic,
          borderColor: "#6c5ce7",
          tension: 0.4
        }
      ]
    }
  });
}, 500);
