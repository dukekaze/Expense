"use client";

import { useContext, useEffect } from "react";
import { Header } from "../components/home/page";
import { UserContext } from "../context/user-context";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const { user, fetchUserData } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    fetchUserData();
  }, []);
  const logOut = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };
  return (
    <div>
      <Header user={user} logOut={logOut} /> {children}
    </div>
  );
};
export default Layout;
