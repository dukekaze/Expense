"use client";

import React from "react";

const Sidebar = () => {
  return (
    <di v>
      <div className="flex flex-col justify-evenly gap-6">
        <h1 className="text-[24px]">
          <strong>Records</strong>
        </h1>
        <button className="btn-sm w-[250px] bg-[#0166FF] h-[40px] rounded-lg">
          <strong>Add records</strong>
        </button>
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-[250px] h-[40px] max-w-xs"
        />
      </div>
      <div>
        <h1>
          <strong>Type</strong>
        </h1>
      </div>
      <div>
        <h1>
          <strong>Category</strong>
        </h1>
      </div>
    </di>
  );
};

export default Sidebar;
