const username = "coalition";
const password = "skills-test";

const auth = btoa(username + ":" + password);

async function fetchPatients() {
  const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      "Authorization": "Basic " + auth
    }
  });

  return await response.json();
}
