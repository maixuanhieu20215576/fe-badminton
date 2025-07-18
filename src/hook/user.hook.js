import axios from "axios";
async function loginByFacebook({ user }) {
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl);
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

export { loginByFacebook };
