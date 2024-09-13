"use client";

import axios from "axios";
import { createContext, useState } from "react";
import { apiUrl } from "../utils/utils";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    userId: "",
    name: "",
    email: "",
    profile_img: "",
  });

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ user, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};
