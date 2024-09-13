"use client";

import { useContext, useState } from "react";
import { UserContext } from "../context/user-context";
import axios from "axios";
import { apiUrl } from "../utils/utils";
import Sidebar from "./sidebar";

const Records = () => {
  const { user } = useContext(UserContext);
  const [transctionData, setTransactionData] = useState([]);

  const fetchTransactions = async (req, res) => {
    try {
      const res = await axios.get(`${apiUrl}/records`);
      setTransactionData(res.data.transaction);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div></div>
    </div>
  );
};

export default Records;
