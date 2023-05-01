import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  function changeHanlder(event) {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function singInHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }
  return (
    <form
      onSubmit={singInHandler}
      className="flex flex-col w-full gap-y-4 mt-4"
    >
      <label className="w-full ">
        <p className="text-white mb-1">
          Email address<sup className="text-pink-200">*</sup>
        </p>
        <input
          className="bg-richblack-700 flex items-center px-[12px] py-[8px] w-full rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
          type="email"
          required
          value={formData.email}
          onChange={changeHanlder}
          placeholder="Enter Email address"
          name="email"
        />
      </label>

      <label className="w-full relative">
        <p className="text-white mb-1">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          className="bg-richblack-700 flex items-center px-[12px] py-[8px] w-full rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={changeHanlder}
          placeholder="Enter Password"
          name="password"
        />
        <span
          className="absolute right-3 top-[40px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible className="text-white" />
          ) : (
            <AiOutlineEye className="text-white" />
          )}
        </span>
      </label>
      <Link to="#">
        <p className="text-blue-100 text-sm max-w-max ml-auto">
          Forgot Password ?
        </p>
      </Link>
      <button className="bg-yellow-500 px-[12px] py-[8px] rounded-md mb-4">Sign In</button>
    </form>
  );
}

export default LoginForm;
