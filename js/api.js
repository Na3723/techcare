async function fetchPatients() {
  const res = await fetch("https://coalition-medical-data.vercel.app/data.json");
  return res.json();
}

