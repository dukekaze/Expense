"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../utils/utils";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const signIn = async () => {
    const { email, password } = userData;

    try {
      const response = await axios.post(`${apiUrl}/auth/signin`, {
        email,
        password,
      });
      if (response.status === 200) {
        toast.success("Signed in", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Failed", error);
      toast.error("Failed to sign in.");
    }
  };
  return (
    <div className="w-full h-full flex">
      <div className="w-2/4 h-screen bg-white flex items-center ">
        <div className="w-[426px] h-[384px] flex flex-col items-center justify-center gap-10 m-auto">
          <div className="flex">
            <img src="./Vector.png" alt="" />
            <p className="text-black">Geld</p>
          </div>
          <div className="text-center text-black">
            <h1 className="text-2xl">
              <strong>Welcome Back</strong>
            </h1>
            <p> Please enter your details</p>
          </div>
          <div className="flex flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2 bg-white">
              <input
                type="text"
                className="grow"
                placeholder="Email"
                onChange={(e) => {
                  setUserData({ ...userData, email: e.target.value });
                }}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-white">
              <input
                type="text"
                className="grow"
                placeholder="Password"
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value });
                }}
              />
            </label>
            <button className="btn btn-wide bg-blue-700" onClick={signIn}>
              Log in
            </button>
          </div>
          <div className="flex gap-3">
            <h2>Don't have an account? </h2>
            <Link className="text-blue-300" href={"/signup"}>
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <div className="w-2/4 h-screen bg-blue-500"></div>
    </div>
  );
};

export default Login;
