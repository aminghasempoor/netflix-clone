import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import useUser from "@/lib/app/hooks/useUser";

const LoginComponent = () => {
  const userRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useUser();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      const person = { username, password };
      setPeople((people) => {
        return [...people, person];
      });
    } else {
      alert("Invalid Input !!!");
      return;
    }

    try {
      console.log(username, password);

      const response = await axios.post(
        "http://192.168.1.115:8000/api/user_login",
        { username: username, password: password }
      );
      console.log(response.data.token);
      console.log(username, password);
      setToken(response.data.token);
      setUsername("");
      setPassword("");
    } catch (err) {
      console.log(err);
      console.log(username, password);
    }
  };

  return (
    <div className="w-full h-screen">
      <Image
        className=" sm:block absolute w-full h-full object-cover"
        width={1000}
        height={1000}
        src="/bakdrop.jpg"
        alt="Login"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
      <div className="fixed px-4 py-6 sm:w-full w-full h-full z-50">
        <div className="max-w-[450px] h-[500px] my-24 mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-14">
            <h1 className="text-3xl font-bold mx-1">Sign IN</h1>
            <form
              className="w-full flex flex-col py-4 sm:w-auto px-1"
              onSubmit={handleSubmit}
            >
              <div className="form_control">
                <label
                  htmlFor="username"
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "3px",
                  }}
                >
                  Username
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 w-full my-2 bg-gray-600 rounded"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label
                  htmlFor="password"
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "3px",
                  }}
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  className="p-2 w-full my-2 bg-gray-600 rounded"
                  id="password"
                  autoComplete="off"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="bg-red-600 py-3 my-6 rounded font-bold hover:border-white hover:border-2"
                type="submit"
              >
                Submit
              </button>
              <div className="flex justify-between items-center text-sm">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help ?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-600">
                  New to Netflix ?
                  <Link
                    className="text-white mx-2 hover:text-red-300"
                    href="/register"
                  >
                    Sign Up
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
