"use client";
import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { apiUrl } from "../../utils/utils";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const Signup = () => {
  //   const [name, setName] = useState();
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  //   const [repassword, SetRePassword] = useState();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const signUp = async () => {
    const { name, email, password, repassword } = userData;

    if (password !== repassword) {
      toast.error("Doesn't match your passwords");
      return;
    }
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
      });
      //   const response = await fetch(`${apiUrl}/auth/signup`, {
      //     method: "POST",
      //     headers: { "Content-type": "application/json" },
      //     body: JSON.stringify({ email, name, password }),
      //   });
      if (response.status === 201) {
        toast.success("Signed up", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Failed to signed up", error);
      toast.error("Failed to signed up. Please try again");
    }
  };
  return (
    <div>
      <div className="w-full h-full flex">
        <div className="w-2/4 h-screen bg-white flex items-center ">
          <div className="w-[426px] h-[384px] flex flex-col items-center justify-center gap-10 m-auto">
            <div className="flex">
              <img src="./Vector.png" alt="" />
              <p className="text-black">Geld</p>
            </div>
            <div className="text-center text-black">
              <h1 className="text-2xl">
                <strong>Create Geld account</strong>
              </h1>
              <p> Sign up below to create your Wallet account</p>
            </div>
            <div className="flex flex-col gap-4">
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <input
                  type="text"
                  className="grow"
                  placeholder="Name"
                  onChange={(e) => {
                    setUserData({ ...userData, name: e.target.value });
                  }}
                />
              </label>
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
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <input
                  type="text"
                  className="grow"
                  placeholder="Re-Password"
                  onChange={(e) => {
                    setUserData({ ...userData, repassword: e.target.value });
                  }}
                />
              </label>
              <button className="btn btn-wide bg-blue-700" onClick={signUp}>
                Log in
              </button>
            </div>
            <div className="flex gap-3">
              <h2>Already have an account? </h2>
              <Link className="text-blue-300" href={"/login"}>
                Log in
              </Link>
            </div>
          </div>
        </div>

        <div className="w-2/4 h-screen bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Signup;
