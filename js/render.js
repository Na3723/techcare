fetchPatients().then(data => {
  const j = data.find(p => p.name === "Jessica Taylor");

  patient-photo.src = j.profile_picture;
  profile-picture.src = j.profile_picture;

  full-name.textContent = j.name;
  dob.textContent = j.date_of_birth;
  gender.textContent = j.gender;
  phone.textContent = j.phone_number;
  insurance.textContent = j.insurance_type;

  const latest = j.diagnosis_history[0];

  sys-val.textContent = latest.blood_pressure.systolic.value;
  dia-val.textContent = latest.blood_pressure.diastolic.value;
  resp-val.textContent = `${latest.respiratory_rate.value} bpm`;
  temp-val.textContent = `${latest.temperature.value} °F`;
  heart-val.textContent = `${latest.heart_rate.value} bpm`;

  diagnostics.innerHTML = `
    <tr><th>Problem</th><th>Description</th><th>Status</th></tr>
  `;

  j.diagnostic_list.forEach(d => {
    diagnostics.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.description}</td>
        <td>${d.status}</td>
      </tr>
    `;
  });

  labs.innerHTML = j.lab_results.map(l => `<li>${l}</li>`).join("");

  window.historyData = [...j.diagnosis_history].reverse();
  renderChart();
});
