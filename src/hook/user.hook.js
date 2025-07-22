import axios from "axios";
async function loginByFacebook({ user }) {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    const response = await fetch(`${apiUrl}/users/login-by-facebook`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 200) return true;
    return false;
  } catch (error) {
    return false;
  }
}

async function fetchUsers() {
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

export { loginByFacebook, fetchUsers };
