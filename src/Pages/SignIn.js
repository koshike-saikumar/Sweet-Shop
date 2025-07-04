import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios"; 
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { config } from "../CommonApi/CommonApis";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const requestData = {
        name: username,
        email: email,
        password: password,
      };  

      const response = await axios.post(config.url.test + "user-signin", requestData);

      if (response.data.code === "01") {
        toast.success("Account created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        toast.error("Unable to create account. Please try again.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="login-container">
        <div className="login-form-container">
          <h1 className="login-title">Sign Up</h1>
          <form onSubmit={handleSignup} className="login-form">
            <div className="input-group">
              <input
                type="text"
                required
                className="login-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="input-label">Your Name</label>
              <BiUser className="input-icon" />
            </div>

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
              <label className="input-label">Password</label>
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

            <div className="input-group">
              <input
                type={passwordVisible ? "text" : "password"}
                required
                className="login-input"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              <label className="input-label">Re-enter Password</label>
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

            <button type="submit" className="login-button" disabled={loading}>
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            <div className="signup-link">
              <span>
                Already have an account?{" "}
                <Link to="/login" className="signup-text">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
