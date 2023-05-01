import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm({ setIsLoggedIn }) {
  const [accountType, setAccountType] = useState("student");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  function changeHandler(event) {
    event.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHanlder(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password Missmatched");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created Succesfully");
    const accountData = {
        ...formData
    }
    const finalData = {
        ...accountData,
        ...accountType
    }
    navigate("/dashboard");
    console.log(finalData)
  }
  return (
    <div>
      <div className="flex gap-x-2 bg-richblack-800 my-6 rounded-full max-w-max p-1">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-white "
              : "bg-transparent text-black"
          } py-2 px-5 rounded-full transition-all duration-200" `}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType !== "student"
              ? "bg-richblack-900 text-white "
              : "bg-transparent text-black"
          } py-2 px-5 rounded-full transition-all duration-200" `}
          onClick={() => setAccountType("teacher")}
        >
          Instructor
        </button>
      </div>
      <form
        onSubmit={submitHanlder}
        className="flex flex-col gap-y-2 mt-[20px]"
      >
        <div className="flex gap-x-5">
          <label>
            <p className="text-white mb-1">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-700 flex items-center w-[100%] px-[12px] py-[8px] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
              type="text"
              required
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
              placeholder="First Name"
            />
          </label>

          <label>
            <p className="text-white mb-1">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-700 flex items-center w-[100%] px-[12px] py-[8px] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
              type="text"
              required
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
              placeholder="Last Name"
            />
          </label>
        </div>

        <label>
          <p className="text-white mt-1 mb-1">
            Email adddress<sup className="text-pink-200">*</sup>
          </p>
          <input
            className="bg-richblack-700 flex items-center px-[12px] py-[8px] w-[100%] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2"
            type="email"
            required
            name="email"
            onChange={changeHandler}
            value={formData.email}
            placeholder="Email address"
          />
        </label>
        <div className="flex gap-x-5">
          <label className=" w-full relative">
            <p className="text-white mb-1">
              Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-700 flex items-center w-[100%] px-[12px] py-[8px] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2 mt-1"
              type={showPassword ? "text" : "password"}
              required
              name="password"
              onChange={changeHandler}
              value={formData.password}
              placeholder="Password"
            />
            <span
              className="absolute right-[10px] top-[40px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible className="text-white" />
              ) : (
                <AiOutlineEye className="text-white" />
              )}
            </span>
          </label>

          <label className=" w-full relative">
            <p className="text-white mb-1">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-700 flex items-center w-[100%] px-[12px] py-[8px] rounded-md placeholder:text-sm text-white focus:outline-none border-b-richblack-100 border-b-2 mt-1"
              type={showPassword1 ? "text" : "password"}
              required
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              placeholder="Confirm Password"
            />
            <span
              className="absolute right-[10px] top-[40px] cursor-pointer"
              onClick={() => setShowPassword1((prev) => !prev)}
            >
              {showPassword1 ? (
                <AiOutlineEyeInvisible className="text-white" />
              ) : (
                <AiOutlineEye className="text-white" />
              )}
            </span>
          </label>
        </div>
        <button className="bg-yellow-500 w-[100%] mt-4 px-[12px] py-[8px] rounded-md mb-4">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
