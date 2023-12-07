import React, { useState } from "react";

function TimeAccounting() {
  const [project, setProject] = useState("");
  const [task, setTask] = useState("");
  const [hour, setHour] = useState(0);
  const [comm, setComm] = useState("");
  const [dt, setDt] = useState("2023-01-01");
  const data = { project, task, hour, comm };
  const formHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="p-5 mt-4 w-full bg-white rounded-lg font-semibold text-slate-600">
      <form onSubmit={formHandler}>
        <div className=" mb-10">
          <button className=" border-2 h-8 w-6 rounded-lg ">{"<"}</button>
          <input
            type="date"
            value={dt}
            onChange={(e) => {
              setDt(e.target.value);
            }}
            name="d"
            id=""
            className="p-3"
            min="2023-01-01"
            required
          />
          <button className="border-2 h-8 w-6 rounded-lg">{">"}</button>
        </div>

        <table>
          <tbody>
            <tr className="">
              <th>Project</th>
              <th>Task</th>
              <th>Hours</th>
              <th>Comments</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  value={project}
                  placeholder="Project"
                  onChange={(event) => setProject(event.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  value={task}
                  placeholder="Task"
                  onChange={(event) => setTask(event.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  min="0"
                  max="12"
                  value={hour}
                  placeholder="Hours"
                  onChange={(event) => setHour(event.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  id=""
                  value={comm}
                  placeholder="Comments"
                  onChange={(event) => setComm(event.target.value)}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div className=" m-2">
          <button className="temp" type="submit">
            Save
          </button>
        </div>
      </form>

      <style>
        {`
          tr {
            border-top: 1px solid black;
          }
          th {
            padding: 20px;
            font-size: 1.2rem;
          }
          input {
            text-align: center;
            border-bottom: 1px solid black;
          }
          td {
            padding: 20px;
          }
          .temp {
            margin-left: 15px;
            border: 1px solid black;
            padding: 10px;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
}

export default TimeAccounting;
