import React, { useEffect, useState } from "react";
import { useFirebase } from "../../../../../context/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import InputData from "./InputData";
import ShowData from "./ShowData";

function TimeAccounting({ userId }) {
  const firebase = useFirebase();
  const [project, setProject] = useState("");
  const [task, setTask] = useState("");
  const [hour, setHour] = useState(0);
  const [comm, setComm] = useState("");
  const [dt, setDt] = useState("2023-01-01");
  const [data, setData] = useState({});
  const [arr, setArr] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    setData({
      Project: project,
      Task: task,
      Hour: hour,
      Comment: comm,
    });
    setProject("");
    setTask("");
    setHour(0);
    setComm("");
    pushData();
  };

  const pushData = async () => {
    try {
      const docRef = doc(firebase.db, "users", userId);
      const currentArray = arr;
      const newArr = [...currentArray, data];
      await setDoc(docRef, { [dt]: newArr }, { merge: true });
      console.log("Data pushed successfully!");
      getData();
    } catch (error) {
      console.error("Error pushing data:", error);
    }
  };

  const getData = async () => {
    try {
      const docRef = doc(firebase.db, "users", userId);
      const docSnap = await getDoc(docRef);
      const temp = docSnap.data()?.[dt] || [];
      setArr(temp);
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };
  useEffect(() => {
    getData();
  }, [dt]);
  useEffect(() => {
  }, [arr]);

  return (
    <div className="p-5 mt-4 w-full bg-white rounded-lg font-semibold text-slate-600">
      <form onSubmit={formHandler}>
        <div className="mb-10">
          <div className=" mb-10">
            <button className=" border-2 h-8 w-6 rounded-lg ">{"<"}</button>
            <InputData type={"Date"} value={dt} setData={setDt} />
            <button className="border-2 h-8 w-6 rounded-lg">{">"}</button>
          </div>

          <div className="">
            <div className="flex justify-evenly text-xl bg-slate-100 mb-5 p-3">
              <div>Project</div>
              <div>Task</div>
              <div>Hours</div>
              <div>Comments</div>
            </div>
            <div className="flex justify-evenly gap-2">
              <InputData type={"text"} value={project} setData={setProject} />
              <InputData type={"text"} value={task} setData={setTask} />
              <InputData
                type={"number"}
                value={hour}
                setData={setHour}
                min={0}
                max={12}
              />
              <InputData type={"text"} value={comm} setData={setComm} />
            </div>
          </div>
        </div>
        <div className="mb-10 ml-5">
          <button className="border-2 p-2 rounded-xl " type="submit">
            Save
          </button>
        </div>
      </form>
      {arr.length > 0 ? (
        arr.map((item, index) => {
          if (item) {
            return (
              <div className="bg-gray-100 mb-5 p-3" key={index}>
                <ShowData item={item} />
              </div>
            );
          }
          return null; // Don't forget to return something even if the condition is not met
        })
      ) : (
        <h1>No record found</h1>
      )}
    </div>
  );
}

export default TimeAccounting;
