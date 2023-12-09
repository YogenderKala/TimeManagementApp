import React from "react";

function ShowData(props) {
  const { item } = props;
  return (
    <div className="flex justify-evenly text-right ">
      <div>{item.Project}</div>
      <div>{item.Task}</div>
      <div>{item.Hour}</div>
      <div>{item.Comment}</div>
    </div>
  );
}

export default ShowData;
