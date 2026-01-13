const getAuthHeader = () => {
  const credentials = `${"coalition"}:${"skills-test"}`;
  return "Basic " + btoa(credentials);
};

async function fetchPatients() {
  const response = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: getAuthHeader(),
      },
    }
  );

  if (!response.ok) throw new Error("API Error");
  return response.json();
}
