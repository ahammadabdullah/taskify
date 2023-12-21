import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ column, tasks }) => {
  return (
    <div className="rounded w-[300px] h-[629px] flex flex-col overflow-y-auto">
      <div className="text-center h-[60px] rounded-t-md px-3 bg-orange-400 flex items-center justify-center">
        <p className="text-xl font-semibold">{column.title}</p>
      </div>

      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="px-2 flex flex-1 flex-col text-orange-500 border-b-2 border-x-2 border-orange-400 rounded-b-md"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={`${task.id}`}
                index={index + 1}
              >
                {(draggableProvided, draggableSnapshot) => (
                  <div
                    className="mb-1  rounded-sm p-3 outline-2 outline-orange-500"
                    // outlineColor={
                    //   draggableSnapshot.isDragging
                    //     ? "card-border"
                    //     : "transparent"
                    // }
                    // boxShadow={
                    //   draggableSnapshot.isDragging
                    //     ? "0 5px 10px rgba(0, 0, 0, 0.6)"
                    //     : "unset"
                    // }
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                  >
                    <p>{task.content}</p>
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
