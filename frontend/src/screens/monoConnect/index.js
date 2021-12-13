import React, { useEffect, useState } from "react";
import AuthHeader from "../../components/AuthHeader";
import MonoConnect from "@mono.co/connect.js";
import "./styles.scss";
import { useDispatch } from "react-redux";
import Axios from "axios";
import { userDetailsAction } from "../../redux/slice/userSlice";

let test = "test_pk_TJGiMrRpSeIkrK8Op1nx";
let live = "live_pk_kJe0sgs6qmx26kMrNj0v";

const Connect = ({}) => {
  const dispatch = useDispatch();
  const [codeAuth, setCodeAuth] = useState("");
  const [gotId, setgotId] = useState(false);

  const monoConnect = React.useMemo(() => {
    const monoInstance = new MonoConnect({
      onClose: () => console.log("Widget closed"),
      onLoad: () => console.log("Widget loaded successfully"),
      onSuccess: ({ code }) => {
        setCodeAuth(code);
        console.log(`Linked successfully: ${code}`);
      },
      key: live,
    });

    monoInstance.setup();

    return monoInstance;
  }, []);

  const getAccountID = async (code, userId) => {
    try {
      const { data } = await Axios.get(
        `/api/id/get?authCode=${code}&userId=${userId}`
      );
      console.log(data);
      if (data.id) {
        setgotId(true);
      }
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  const handleGetUserData = async (id) => {
    try {
      const { data } = await Axios.get(`/api/user/get/${id}`);

      console.log(data);
      dispatch(userDetailsAction(data));
    } catch (e) {
      console.log(e.response.data.message);
    }
  };

  useEffect(() => {
    if (codeAuth) {
      getAccountID(codeAuth, "61b64ecc70da358c21a407ac");
    }
  }, [codeAuth]);

  useEffect(() => {
    if (gotId) {
      setTimeout(() => {
        handleGetUserData("61b64ecc70da358c21a407ac");
      }, 5000);
    }
  }, [gotId]);

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
