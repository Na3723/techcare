async function fetchPatients() {
  const username = "coalition";
  const password = "skills-test";

  const auth = btoa(`${username}:${password}`);

  const res = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
}

