import axios from "axios";

const API_URL = "http://ec2-13-218-87-229.compute-1.amazonaws.com:8081/auth";

export const login = async (username, password) => {
  // 🔑 Hardcoded admin bypass
  if (username === "admin" && password === "admin") {
    const fakeToken = "admin-token"; // you can name it anything
    localStorage.setItem("token", fakeToken);
    return { token: fakeToken, role: "admin" };
  }

  // Otherwise call backend
  const response = await axios.post(`${API_URL}/login`, { username, password });
  localStorage.setItem("token", response.data);
  return response.data;
};

export const signup = async (username, email, password) => {
  return axios.post(`${API_URL}/signup`, { username, email, password });
};

export const logout = () => {
  localStorage.removeItem("token");
};
