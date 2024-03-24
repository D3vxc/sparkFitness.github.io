import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export const getToken = () => {
  //   const navigate = useNavigate();
  const userToken = Cookies.get("token");
  if (!userToken) {
    window.location.href = "/login";
  }
  return userToken;
};
