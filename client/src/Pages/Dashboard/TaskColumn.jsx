import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";

const TaskColumn = ({ task, title }) => {
  return (
    <div className="rounded w-[300px] h-[629px] flex flex-col overflow-y-auto">
      <div className="text-center h-[60px] rounded-t-md px-3 bg-orange-400 flex items-center justify-center">
        <p className="text-xl font-semibold">{title}</p>
      </div>
      <div className="px-2 flex flex-1 flex-col text-orange-500 border-b-2 border-x-2 border-orange-400 rounded-b-md overflow-y-auto">
        {task && task.map((item) => <TaskCard key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default TaskColumn;
