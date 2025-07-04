import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { config } from "../CommonApi/CommonApis";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signinUser = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const requestData = {
        email: email,
        password: password,
      };

      const response = await axios.post(config.url.test + "user-login", requestData);

      if (response.data.code === "01") {
        toast.success("Login successful!");

        setTimeout(() => {
          navigate("/"); // Go to home/dashboard or desired page
        }, 1500);
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <div className="login-form-container">
          <div>
            <h1 className="login-title">Login</h1>
            <form onSubmit={signinUser} className="login-form">
              <div className="input-group">
                <input
                  type="email"
                  required
                  className="login-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="input-label">Your Email</label>
                <BiUser className="input-icon" />
              </div>
              <div className="input-group">
                <input
                  type={passwordVisible ? "text" : "password"}
                  required
                  className="login-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="input-label">Your Password</label>
                {passwordVisible ? (
                  <AiOutlineEye
                    className="input-icon cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="input-icon cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>

              <div className="login-options">
                <div className="remember-me">
                  <input type="checkbox" id="remember" className="mr-2" />
                  <label htmlFor="remember">Remember me</label>
                </div>
                <Link to="/reset" className="forgot-password">
                  Forgot Password
                </Link>
              </div>

              <button type="submit" className="login-button" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* <button
                type="button"
                className="login-button guest-login-button"
                disabled={loading}
              >
                Guest Login
              </button> */}

              <div className="signup-link">
                <span>
                  New Here?{" "}
                  <Link to="/signup" className="signup-text">
                    SignUp
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
