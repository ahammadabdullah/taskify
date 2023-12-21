import React from "react";

const TaskCard = ({ item }) => {
  return (
    <div className="mb-1  rounded-sm p-3 outline-2 outline-orange-500">
      <h3>{item.title}</h3>
      <p className="text-sm">{item.description}</p>
      <div>
        <span
          className={`px-1 rounded-md text-white ${
            item.priority === "low" && "bg-green-500"
          } ${item.priority === "moderate" && "bg-blue-500"} ${
            item.priority === "high" && "bg-red-500"
          }`}
        >
          {item.priority}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
