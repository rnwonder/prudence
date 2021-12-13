import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDetailsAction } from "../../redux/slice/userSlice";
import "./styles.scss";

export interface IAuth {}

const Auth: React.FunctionComponent<IAuth> = ({}) => {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const [error, seterror] = useState("");
  const [authState, setAuthState] = useState<"login" | "register">("register");
  const [loading, setLoading] = useState(false)
  const id = localStorage.getItem("accountId");

  useEffect(() => {
    if (id) {
      navigate("/connect");
    }
  }, [id, navigate]);


  const handleLogin = async(e: any) => {
    e.preventDefault()
    setLoading(true)

    if(!email || !password) {
        seterror("Fill all fields")
        return
    }

    try {
        const { data } = await Axios.post("https://limitless-temple-51492.herokuapp.com/api/user/login", { email, password })

        console.log(data)
        dispatch(userDetailsAction(data))
        navigate("/connect")
        setLoading(false)
    } catch (e: any) {
        console.log(e.response.data.message)
        seterror(e.response.data.message)
        setLoading(false)
    }  
  }

  const handleRegister = async(e: any) => {
    e.preventDefault()
    setLoading(true)

    if(!firstname || !lastname || !email || !password) {
        seterror("Fill all fields")
        return
    }

    if(password !== conPass) {
        seterror("password dont match")
        return
    }


    try {
        const { data } = await Axios.post("https://limitless-temple-51492.herokuapp.com/api/user/register", { firstname, lastname, email, password })

        console.log(data)
        dispatch(userDetailsAction(data))
        navigate("/connect")
        setLoading(false)
    } catch (e: any) {
        console.log(e.response.data.message)
        seterror(e.response.data.message)

        if (e.response.data.message.substring(0, 6) === "E11000") {
            seterror("Email already exist")
        }
        setLoading(false)
    } 
  }

  return (
    <section className="auth">
      <div className="container d-flex">
        <div className="top">
          <h1>
            {authState === "login" ? "Login to prudent" : "Welcome to prudent"}
          </h1>

          {authState === "register" && (
            <p>Register now and begin your financial journey</p>
          )}
        </div>

        {error && <div className="error bg-danger text-light">{error}</div>}

        {authState === "login" && (
          <form action="" className="d-flex" onSubmit={(e) => handleLogin(e)}>
            <div className="form-element">
              <input
                type="email"
                placeholder="email"
                value={email}
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-element">
              <input
                type="password"
                placeholder="password"
                value={password}
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button disabled={loading} className=" text-light">Login</button>
          </form>
        )}

        {authState === "register" && (
          <form action="" className="d-flex" onSubmit={(e) => handleRegister(e)}>
            <div className="name">
              <div className="form-element">
                <input
                  type="text"
                  placeholder="firstname"
                  value={firstname}
                  className="form-input"
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>

              <div className="form-element">
                <input
                  type="text"
                  placeholder="lastname"
                  value={lastname}
                  className="form-input"
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="form-element">
              <input
                type="email"
                placeholder="email"
                value={email}
                className="form-input"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-element">
              <input
                type="password"
                placeholder="password"
                value={password}
                className="form-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-element">
              <input
                type="password"
                placeholder="confirm password"
                value={conPass}
                className="form-input"
                onChange={(e) => setConPass(e.target.value)}
              />
            </div>

            <button disabled={loading} className=" text-light">Register</button>
          </form>
        )}

        <div className="notice">
          {authState === "login" ? (
            <>
              Don't have an account? {" "}
              <span
                className="text-primary"
                onClick={() => setAuthState("register")}
              >
                Sign up
              </span>
            </>
          ) : (
            <>
              Have an account {" "}
              {
                <span
                  className="text-primary"
                  onClick={() => setAuthState("login")}
                >
                  Sign in
                </span>
              }
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Auth;
