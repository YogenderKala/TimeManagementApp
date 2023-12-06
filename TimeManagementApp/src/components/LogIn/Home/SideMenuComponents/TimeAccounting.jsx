import React from "react";

function TimeAccounting() {
  return (
    <div className="p-5 mt-4 w-full bg-white rounded-lg font-semibold text-slate-600">
      <div className=" mb-4">
        <button className=" border-2 h-8 w-6 rounded-lg ">{"<"}</button>
        <input type="date" name="d" id="" className="p-3" />
        <button className="border-2 h-8 w-6 rounded-lg">{">"}</button>
      </div>

      <div>
        <table >
          <tr className="">
            <th>Project</th>
            <th>Task</th>
            <th>Hours</th>
            <th>Comments</th>
          </tr>
          <tr>
            <td><select name="" id=""></select></td>
            <td><select name="" id=""></select></td>
            <td><select name="" id=""></select></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
        </table>

        <div className=" m-2">
          <button className="temp">Add Project</button>
          <button className="temp">Save</button>
        </div>
      </div>
      <style jsx>

      {
        `
        tr{
          border-top:1px solid black;
        }
        th{
          padding:20px;
          // background:gray;
        }
        input{
          border-bottom:1px solid black;
        }
        td{
          padding:20px;
        }
        .temp{
          margin-left:15px;
          border:1px solid black;
          padding:10px;
          border-radius:10px;

        }
        `
      }
      </style>
    </div>
  );
}

export default TimeAccounting;
