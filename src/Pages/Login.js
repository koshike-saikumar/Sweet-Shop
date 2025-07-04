import { useState } from "react";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { doc, getDoc } from "firebase/firestore";
// import { auth, db } from "../config/firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { setActiveUser } from "../redux/slices/authSlice";
// import { setCart } from "../redux/slices/cartSlice";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const signinUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.success("Welcome! Login Successful");
        setLoading(false);

    // try {
    //   const userCredential = await signInWithEmailAndPassword(
    //     auth,
    //     email,
    //     password
    //   );
    //   const user = userCredential.user;

    //   const userRef = doc(db, "users", user.uid);
    //   const userDoc = await getDoc(userRef);

    //   if (userDoc.exists()) {
    //     const userData = userDoc.data();
    //     dispatch(
    //       setActiveUser({
    //         email: user.email,
    //         userId: user.uid,
    //         isSpecialMember: userData.isSpecialMember ?? false,
    //       })
    //     );
    //     dispatch(setCart(userData.cart || []));
    //   } else {
    //     dispatch(
    //       setActiveUser({
    //         email: user.email,
    //         userId: user.uid,
    //         isSpecialMember: false,
    //       })
    //     );
    //   }
    //   toast.success("Welcome! Login Successful");
    //   navigate("/");
    // } catch (error) {
    //   console.error("Login error:", error);
    //   if (
    //     error.code === "auth/user-not-found" ||
    //     error.code === "auth/wrong-password"
    //   ) {
    //     toast.error("Invalid email or password. Please try again.");
    //   } else {
    //     toast.error("Login failed. Please try again later.");
    //   }
    // } finally {
    //   setLoading(false);
    // }
  };

  //   const guestLogin = async () => {
  //     setLoading(true);

  //     try {
  //       const guestEmail = "user@user.com";
  //       const guestPassword = "1234567890";
  //       const response = await signInWithEmailAndPassword(
  //         auth,
  //         guestEmail,
  //         guestPassword
  //       );
  //       const user = response.user;

  //       if (user) {
  //         const userRef = doc(db, "users", user.uid);
  //         const userDoc = await getDoc(userRef);

  //         if (userDoc.exists()) {
  //           const userData = userDoc.data();
  //           dispatch(
  //             setActiveUser({
  //               email: user.email,
  //               userId: user.uid,
  //               isSpecialMember: userData.isSpecialMember ?? false,
  //             })
  //           );
  //           dispatch(setCart(userData.cart || []));
  //         } else {
  //           dispatch(
  //             setActiveUser({
  //               email: user.email,
  //               userId: user.uid,
  //               isSpecialMember: false,
  //             })
  //           );
  //         }
  //         toast.success("Welcome! Guest Login Successful");
  //         navigate("/");
  //       } else {
  //         console.log("User object is null");
  //       }
  //     } catch (error) {
  //       console.error("Guest login error:", error);
  //       toast.error("An error occurred during guest login.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <>
      {/* <Helmet>
        <title>Login - ChocoKart</title>
        <meta
          name="description"
          content="Login to ChocoKart to access your account and start shopping for your favorite toffees and chocolates."
        />
      </Helmet> */}
      <div>
        <ToastContainer />

        <div className="login-container">
          <div className="login-form-container">
            <div>
              <h1 className="login-title">Login</h1>
              <form
                onSubmit={signinUser}
                className="login-form">
                <div className="input-group">
                  <input
                    type="email"
                    required
                    className="login-input"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="input-label">Your Email</label>
                  <BiUser className="input-icon" />
                </div>
                <div className="input-group">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder=""
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
                <button
                  type="submit"
                  // disabled={loading}
                  className="login-button"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                <button
                  type="button"
                  //   onClick={guestLogin}
                  // disabled={loading}
                  className="login-button guest-login-button"
                >
                  {loading ? "Logging in..." : "Guest Login"}
                </button>
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
      </div>
    </>
  );
};

export default Login;