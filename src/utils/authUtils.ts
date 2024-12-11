import { jwtDecode } from "jwt-decode";

export function getUserIdFromToken () {
  const token = localStorage.getItem("token");
  if (token) {
    const decoded: { userId: string } = jwtDecode(token);
    return decoded.userId;
  }
  return null;
}