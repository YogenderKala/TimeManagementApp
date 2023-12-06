import React, { useState } from "react";
function SideBar(props) {
  const { setCurrPage, username, currPage } = props;
  return (
    <div className="cursor-pointer p-5 ">
      <div className="grid gap-3 justify-center mb-6">
        <img
          src="../../../public/user.png"
          alt=""
          className="h-12 justify-self-center"
        />
        <h1 className="text-center">{username}</h1>
      </div>
      <div className="">
        <ul className="grid gap-4  ">
          <li
            onClick={() => {
              setCurrPage("TimeAccounting");
            }}
            className={`
            p-3 hover:bg-slate-600 rounded-lg
            ${
              currPage === "TimeAccounting"
                ? "bg-slate-600 rounded-lg"
                : "bg-gray-800"
            }
            `}
          >
            Time Accounting
          </li>
          <li
            onClick={() => {
              setCurrPage("Projects");
            }}
            className={`
            p-3 hover:bg-slate-600 rounded-lg
            ${
              currPage === "Projects"
                ? "bg-slate-600 rounded-lg"
                : "bg-gray-800"
            }
            `}
          >
            Projects
          </li>
          <li
            onClick={() => {
              setCurrPage("Tasks");
            }}
            className={`
            p-3 hover:bg-slate-600 rounded-lg
            ${currPage === "Tasks" ? "bg-slate-600 rounded-lg" : "bg-gray-800"}
            `}
          >
            Tasks
          </li>
          <li
            onClick={() => {
              setCurrPage("Reports");
            }}
            className={`
            p-3 hover:bg-slate-600 rounded-lg
            ${
              currPage === "Reports" ? "bg-slate-600 rounded-lg" : "bg-gray-800"
            }
            `}
          >
            Reports
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .active {
            background: rgb(71 85 105);
          }
        `}
      </style>
    </div>
  );
}

export default SideBar;
