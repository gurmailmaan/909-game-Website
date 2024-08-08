import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("user", "");
    navigate("/");
    window.location.reload(false);
  }, [navigate]);

  return null;
};

export default Logout;