import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";

function Template({ title, desc1, desc2, formType, image, setIsLoggedIn }) {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto py-4 gap-x-12">
      <div className="w-11/12 max-w-[480px]">
        <div className="w-11/12 max-w-[480px]">
          <h1 className="text-white text-3xl font-bold ">{title}</h1>
          <p className="text-white mt-4">{desc1}</p>
          <p className="italic text-blue-400">{desc2}</p>
        </div>
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex w-full items-center">
          <div className="h-[1px] w-[50%] bg-richblack-700"></div>
          <p className="text-richblack-700">OR</p>
          <div className="h-[1px] w-[50%] bg-richblack-700"></div>
        </div>
        <div>
          <button className="flex items-center w-full rounded-md justify-center  font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] mt-6 gap-x-2">
            <FcGoogle />
            Signup With Google
          </button>
        </div>
      </div>
      <div className="relative w-11/12 max-w-[480px] hidden md:block">
        <img
          src={frameImage}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          className="absolute -top-4 right-4 hidden md:block"
          src={image}
          alt="student"
          width={558}
          height={450}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Template;
