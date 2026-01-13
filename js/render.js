fetchPatients().then(data => {
  const jessica = data.find(p => p.name === "Jessica Taylor");

  document.getElementById("profile-picture").src = jessica.profile_picture;
  document.getElementById("full-name").textContent = jessica.name;
  document.getElementById("dob").textContent = "DOB: " + jessica.date_of_birth;
  document.getElementById("gender").textContent = "Gender: " + jessica.gender;
  document.getElementById("phone").textContent = "Phone: " + jessica.phone_number;
  document.getElementById("insurance").textContent = "Insurance: " + jessica.insurance_type;

  window.historyData = jessica.diagnosis_history;
});
