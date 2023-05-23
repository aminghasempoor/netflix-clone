import { useState, useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Register = () => {
  const userRef = useRef();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [people, setPeople] = useState([]);
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordConfirmation) {
      if (firstName && email && password && passwordConfirmation) {
        const person = { firstName, email, password, passwordConfirmation };
        setPeople((people) => {
          return [...people, person];
        });
        setEmail("");
        setFirstName("");
        setPassword("");
        setPasswordConfirmation("");
      } else {
        alert("Invalid Input !!!");
      }
    }

    try {
      const response = await axios.post(
        "http://192.168.1.150:8000/api/register",
        {
          name: firstName,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(response.data.token);
      console.log(JSON.stringify(response));
    } catch (err) {
      if (!err?.response) {
        alert("err");
      }
    }
  };
  return (
    <div>
      <div className="w-full h-screen">
        <img
          className=" sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/908077b4-cf0a-43c3-b2c9-435fb990299b/0575f84c-3b70-4342-a5a1-320d374612b0/NL-en-20220829-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full h-full px-4 py-24 z-50">
          <div className="max-w-[450px] max-h-[850px] mx-auto bg-black/75 text-white px-10 py-1">
            <div className="w-full h-full mx-auto">
              <h1 className="text-3xl font-bold px-1">Sign Up</h1>
              <form
                className="w-full h-auto flex flex-col py-4 px-1"
                onSubmit={handleSubmit}
              >
                <div className="form_control">
                  <label
                    htmlFor="firstName"
                    style={{
                      fontWeight: "bold",
                      letterSpacing: "3px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Name :
                  </label>
                  <br />
                  <input
                    className="p-2 w-full my-2 bg-gray-600 rounded"
                    type="text"
                    ref={userRef}
                    autoComplete="off"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form_control">
                  <label
                    htmlFor="email"
                    style={{
                      fontWeight: "bold",
                      letterSpacing: "3px",
                    }}
                  >
                    Email :{" "}
                  </label>
                  <br />
                  <input
                    type="text"
                    className="p-2 w-full my-2 bg-gray-600 rounded"
                    id="email"
                    autoComplete="off"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    Password :{" "}
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
                <div className="form_control">
                  <label
                    htmlFor="passwordConfirmation"
                    style={{
                      fontWeight: "bold",
                      letterSpacing: "3px",
                    }}
                  >
                    Confirm Password :{" "}
                  </label>
                  <br />
                  <input
                    type="password"
                    className="p-2 w-full my-2 bg-gray-600 rounded"
                    id="passwordConfirmation"
                    autoComplete="off"
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                    Already Registered ?
                    <Link
                      className="text-white mx-2 hover:text-red-300"
                      href="/login"
                    >
                      Sign In
                    </Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
