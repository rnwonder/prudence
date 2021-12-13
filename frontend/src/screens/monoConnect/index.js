import React, { useEffect, useState } from "react";
import AuthHeader from "../../components/AuthHeader";
import MonoConnect from "@mono.co/connect.js";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { userDetailsAction } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

let test = "test_pk_TJGiMrRpSeIkrK8Op1nx";
let live = "live_pk_kJe0sgs6qmx26kMrNj0v";

const Connect = ({}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [codeAuth, setCodeAuth] = useState("");
  const [gotId, setgotId] = useState(false);
  const user = useSelector(state => state.user)

  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => {},
      onLoad: () => {},
      onSuccess: ({ code }) => {
        setCodeAuth(code);
      },
      key: live,
    });

    monoInstance.setup();

    return monoInstance;
  }, []);

  const getAccountID = async (code, userId) => {
    try {
      const { data } = await Axios.get(
        `https://limitless-temple-51492.herokuapp.com/api/id/get?authCode=${code}&userId=${userId}`
      );
      if (data.id) {
        setgotId(true);
      }
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  const handleGetUserData = async (id) => {
    try {
      const { data } = await Axios.get(`https://limitless-temple-51492.herokuapp.com/api/user/get/${id}`);
      dispatch(userDetailsAction(data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (codeAuth) {
      if (user.id) {
        getAccountID(codeAuth, user.id);
      } else {
        navigate("/")
      }
    }
  }, [codeAuth, user.id]);

  useEffect(() => {
    if (gotId) {
      if(user.id) {
        setTimeout(() => {
          handleGetUserData(user.id);
        }, 5000);
      }
     
    }   
  }, [gotId, user.id]);

  return (
    <section className="monoConnect">
      <AuthHeader />

      <div className="container cont d-flex flex-column">
        <h1>Connect your bank account to prudent</h1>

        <p>
          Prudent allows you to seamlessly integrate your banks and savings
          platform, thereby enabling you to have a better understanding of your
          finances
        </p>

        <button
          className="bg-primary text-light"
          onClick={() => monoConnect.open()}
        >
          Click to Connect
        </button>
        

      </div>
    </section>
  );
};

export default Connect;
