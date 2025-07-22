async function createSchedule({ location, time, date, courtPrice }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  try {
    const response = await fetch(`${apiUrl}/users/get-all-users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}