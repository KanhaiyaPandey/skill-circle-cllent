import axios from "axios";

export const customeFetch = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/protected/user`,
  withCredentials: true,
});

export const authFetch = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/auth`,
});


// Utility to decode JWT payload (without verifying)
// const parseJwt = (token) => {
//   try {
//     const base64Url = token.split(".")[1];
//     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//     const jsonPayload = decodeURIComponent(
//       atob(base64)
//         .split("")
//         .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
//         .join("")
//     );
//     return JSON.parse(jsonPayload);
//   } catch (e) {
//     return null;
//   }
// };

// Utility to get user from JWT_TOKEN cookie
export const getUserFromCookie = () => {
  const cookies = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .reduce((acc, cookie) => {
      const [key, value] = cookie.split("=");
      acc[key] = value;
      return acc;
    }, {});

  const token = cookies["JWT_TOKEN"];
  if (!token) return null;

  try {
    // Decode payload part (middle one)
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    const decoded = JSON.parse(jsonPayload);
    return decoded;
  } catch (err) {
    console.error("JWT decode error:", err);
    return null;
  }
};




