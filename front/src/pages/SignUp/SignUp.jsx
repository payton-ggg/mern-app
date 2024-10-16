import { useState } from "react";
import Navbar from "../../components/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please your name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please your email");
      return;
    }

    if (!password) {
      setError("Please your password");
      return;
    }

    setError("");
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">Sign Up</h4>

            <input
              type="text"
              className="input-box"
              placeholder="Mane"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              className="input-box"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Create
            </button>
            <p className="text-sm text-center mt-4">
              Already have one?{"  "}
              <Link to="/login" className="font-medium text-primary underline">
                Login in Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
